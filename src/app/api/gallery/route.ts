// app/api/gallery/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("gallery") //
      .select("*"); //

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, type, images, is_visible } = body;

  if (!title || !description || !type) {
    return NextResponse.json({ success: false, error: "필수 항목 누락" }, { status: 400 });
  }

  // 타입별 ID 범위 정의
  const typeIdRanges: Record<string, { start: number; end: number }> = {
    보강토: { start: 1, end: 999 },
    축조블록: { start: 1000, end: 9999 },
    호안블록: { start: 10000, end: 99999 },
    기타: { start: 100000, end: 999999 },
  };

  const { start, end } = typeIdRanges[type];

  if (!typeIdRanges[type]) {
    return NextResponse.json({ success: false, error: "유효하지 않은 type입니다." }, { status: 400 });
  }

  // 현재 타입 범위에서 가장 큰 id 가져오기
  const { data: latest, error: fetchError } = await supabase.from("gallery").select("id").gte("id", start).lte("id", end).order("id", { ascending: false }).limit(1).maybeSingle();

  if (fetchError) {
    return NextResponse.json({ success: false, error: fetchError.message }, { status: 500 });
  }

  const newId = latest?.id ? latest.id + 1 : start;

  // 삽입
  const { error: insertError } = await supabase.from("gallery").insert([
    {
      id: newId,
      title,
      description,
      type,
      images,
      is_visible,
      created_at: new Date().toISOString(),
    },
  ]);

  if (insertError) {
    return NextResponse.json({ success: false, error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: newId });
}
