"use client";
import React, { useState, useEffect } from "react";
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

  // 갤러리 데이터 fetch 함수
  const fetchGallery = async () => {
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
  };

  // 컴포넌트 마운트 시 갤러리 데이터 로드
  useEffect(() => {
    if (isAuthorized) {
      fetchGallery();
    }
  }, [isAuthorized]);

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

    const fileArray = Array.from(files);
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
        // 삭제 후 갤러리 리스트 업데이트
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
        식생축조: "type02",
        환경호안: "type03",
        기타: "type04",
      };
      const folderType = typeMap[isType];
      let uploadedUrls: string[] = [];

      // 이미지 업로드
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
        // 수정 요청
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
          // 수정 후 갤러리 리스트 업데이트
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
        // 새 게시글 등록
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

        // 새 게시글을 리스트 맨 앞에 추가
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

  const handleEdit = (item: any) => {
    setEditId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setType(item.type);
    setPreviewUrls(item.images || []);
    setSelectedFiles([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full mt-20">
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
          <form onSubmit={handlePostSubmit} className="w-full max-w-xl space-y-4 mb-40">
            <h1 className="text-3xl mb-6">{editId ? "갤러리 게시글 수정" : "갤러리 게시글 등록"}</h1>

            <div>
              <label className="block font-medium">제목</label>
              <input value={title ?? ""} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 작성해주세요" className="border px-3 py-2 w-full" />
            </div>

            <div>
              <label className="block font-medium">내용</label>
              <input value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="내용을 작성해주세요" className="border px-3 py-2 w-full" />
            </div>

            <div>
              <span className="font-medium">타입</span>
              <div className="flex gap-4 mt-1">
                {["보강토", "식생축조", "환경호안", "기타"].map((type) => (
                  <label key={type}>
                    <input type="radio" name="type" value={type} checked={isType === type} onChange={(e) => setType(e.target.value)} className="mr-1" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium">이미지 선택</label>
              <input type="file" accept="image/*" multiple onChange={handleFileChange} disabled={uploading} />
              {previewUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {previewUrls.map((url, idx) => (
                    <img key={idx} src={url} alt={`미리보기-${idx}`} className="w-32 h-32 object-cover rounded border" />
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button type="submit" className={`px-4 py-2 rounded-lg text-white ${uploading ? "bg-gray-400" : "bg-green-800"}`} disabled={uploading}>
                {uploading ? "업로드 중..." : editId ? "수정" : "등록"}
              </button>
              {editId && (
                <button type="button" className="px-4 py-2 rounded-lg border" onClick={resetForm}>
                  취소
                </button>
              )}
            </div>
          </form>

          <List onEdit={handleEdit} isAuthorized={isAuthorized} onDelete={handleDelete} galleryList={galleryList} setGalleryList={setGalleryList} isLoading={isLoading} />
        </>
      )}
    </div>
  );
}
