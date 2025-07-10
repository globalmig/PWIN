// app/api/gallery/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const body = await req.json();

  const { title, content, type, images } = body;

  // 수정할 값만 골라서 객체 구성
  const updateData: Record<string, any> = {};
  if (title) updateData.title = title;
  if (content !== undefined) updateData.description = content;
  if (type) updateData.type = type;
  if (images && Array.isArray(images)) updateData.images = images;

  // 아무 필드도 없으면 잘못된 요청
  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ success: false, error: "수정할 데이터가 없습니다." }, { status: 400 });
  }

  const { error } = await supabase.from("gallery").update(updateData).eq("id", Number(id));

  if (error) {
    console.error("갤러리 수정 실패:", error);
    return NextResponse.json({ success: false, error: "갤러리 수정 실패" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

// 게시글 삭제
export async function DELETE(_req: Request, context: { params: { id: string } }) {
  const id = context.params.id;

  const { error } = await supabase.from("gallery").delete().eq("id", Number(id));

  if (error) {
    console.error("갤러리 삭제 실패:", error);
    return NextResponse.json({ success: false, error: "갤러리 삭제 실패" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
