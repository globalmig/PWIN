"use client";
import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import List from "../components/gallery/list";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  type: string;
  created_at: string;
}

export default function Manager() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isType, setType] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [galleryList, setGalleryList] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_MANAGER_PASSWORD;

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch("/api/gallery");
      const fetchedData = await res.json();
      const sorted = fetchedData.sort((a: GalleryItem, b: GalleryItem) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setGalleryList(sorted);
    } catch (err) {
      console.error("갤러리 불러오기 실패", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) fetchGallery();
  }, [isAuthorized, fetchGallery]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
      setPassword("");
    } else {
      alert("비밀번호가 틀렸습니다");
      setPassword("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files).slice(0, 10);
    setSelectedFiles(fileArray);
    setPreviewUrls(fileArray.map((file) => URL.createObjectURL(file)));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      const result = await res.json();
      if (result.success) {
        alert("삭제 완료되었습니다.");
        setGalleryList((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("삭제 실패: " + result.error);
      }
    } catch (err) {
      alert("삭제 중 오류 발생");
      console.error(err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setType("");
    setSelectedFiles([]);
    setPreviewUrls([]);
    setEditId(null);
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !isType || (editId === null && selectedFiles.length === 0)) {
      alert("모든 항목을 입력하고 이미지를 선택해야 합니다.");
      return;
    }

    setUploading(true);

    try {
      const typeMap: Record<string, string> = {
        보강토: "type01",
        축조블록: "type02",
        호안블록: "type03",
        기타: "type04",
      };
      const folderType = typeMap[isType];
      let uploadedUrls: string[] = [];

      for (const file of selectedFiles) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        const filePath = `${folderType}/${editId || "temp"}/${fileName}`;

        const { error: uploadError } = await supabase.storage.from("gallery").upload(filePath, file);
        if (uploadError) {
          console.error("업로드 실패:", uploadError.message);
          continue;
        }

        const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);
        uploadedUrls.push(data.publicUrl);
      }

      if (editId) {
        const updateRes = await fetch(`/api/gallery/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            type: isType,
            images: uploadedUrls.length > 0 ? uploadedUrls : undefined,
          }),
        });

        if (updateRes.ok) {
          alert("수정되었습니다!");
          setGalleryList((prev) =>
            prev.map((item) =>
              item.id === editId
                ? {
                    ...item,
                    title,
                    description,
                    type: isType,
                    images: uploadedUrls.length > 0 ? uploadedUrls : item.images,
                  }
                : item
            )
          );
        }
      } else {
        const postRes = await fetch("/api/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            type: isType,
            images: [],
            is_visible: true,
          }),
        });

        const result = await postRes.json();
        if (!result.success || !result.id) {
          alert("게시글 등록 실패: " + result.error);
          setUploading(false);
          return;
        }

        if (uploadedUrls.length > 0) {
          await fetch(`/api/gallery/${result.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ images: uploadedUrls }),
          });
        }

        alert("게시글이 등록되었습니다!");

        const newItem: GalleryItem = {
          id: result.id,
          title,
          description,
          type: isType,
          images: uploadedUrls,
          link: "",
          created_at: new Date().toISOString(),
        };
        setGalleryList((prev) => [newItem, ...prev]);
      }

      resetForm();
    } catch (err) {
      alert("오류 발생");
      console.error(err);
    }

    setUploading(false);
  };

  const handleEdit = useCallback((item: GalleryItem) => {
    setEditId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setType(item.type);
    setPreviewUrls(item.images || []);
    setSelectedFiles([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full mt-20 px-4">
      {!isAuthorized ? (
        <form onSubmit={handlePasswordSubmit}>
          <h1 className="text-3xl mb-6">관리자 로그인</h1>
          <div className="flex gap-4 items-center">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2" placeholder="비밀번호 입력" />
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
              확인
            </button>
          </div>
        </form>
      ) : (
        <>
          <form onSubmit={handlePostSubmit} className="w-full max-w-xl space-y-4 mb-20">
            <h1 className="text-4xl text-center font-bold text-green-900 mb-16">{editId ? "갤러리 게시글 수정" : "갤러리 게시글 등록"}</h1>

            <div>
              <span className="font-medium">타입</span>
              <div className="flex gap-4 mt-1 w-full justify-between mb-8">
                {["보강토", "축조블록", "호안블록", "기타"].map((type) => (
                  <label
                    key={type}
                    className={`border w-full text-center rounded-lg py-3 cursor-pointer transition-all duration-200 ${
                      isType === type ? "bg-green-700 text-white border-green-700" : "hover:bg-gray-100"
                    }`}
                  >
                    <input type="radio" name="type" value={type} checked={isType === type} onChange={(e) => setType(e.target.value)} className="mr-1 hidden" />
                    {type}
                  </label>
                ))}
              </div>
              <div className=" mb-4">
                <label className="block font-medium">제목</label>
                <input value={title ?? ""} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 작성해주세요" className="border px-3 py-2 w-full" />
              </div>
              <div>
                <label className="block font-medium">내용</label>
                <textarea value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="내용을 작성해주세요" className="border px-3 py-2 w-full" />
              </div>
            </div>
            <div>
              <label className="block font-medium">이미지 선택 (최대 10장)</label>
              <input type="file" accept="image/*" multiple onChange={handleFileChange} disabled={uploading} />
              {previewUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {previewUrls.map((url, idx) => (
                    <img key={idx} src={url} alt={`미리보기-${idx}`} className="w-32 h-32 object-cover rounded border" />
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-4 w-full">
              <button type="submit" className={`px-4 py-2 rounded-lg text-white w-full ${uploading ? "bg-gray-400" : "bg-green-800"}`} disabled={uploading}>
                {uploading ? "업로드 중..." : editId ? "수정" : "등록"}
              </button>
              {editId && (
                <button type="button" className="px-4 py-2 w-[50%] hover:bg-black/5 rounded-lg border" onClick={resetForm}>
                  취소
                </button>
              )}
            </div>
          </form>
          <div className="border-t pt-20">
            <h2 className="text-4xl text-center font-bold text-green-900">갤러리</h2>
            <p className="text-center text-zinc-600 text-sm py-4">현재 등록된 게시물을 확인하고 수정/등록을 하실 수 있습니다</p>
            <List onEdit={handleEdit} isAuthorized={isAuthorized} onDelete={handleDelete} galleryList={galleryList} setGalleryList={setGalleryList} isLoading={isLoading} />
          </div>
        </>
      )}
    </div>
  );
}
