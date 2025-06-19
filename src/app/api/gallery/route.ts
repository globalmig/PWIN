// app/api/gallery/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("gallery") // ← 네 테이블 이름으로 바꿔
      .select("*"); // 필요한 컬럼만 골라줘도 됨 e.g., .select('id, title, image')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
