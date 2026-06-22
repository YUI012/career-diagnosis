import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { result } = body;

  const { data, error } = await supabase
    .from("results")
    .insert([{ result }]);

  if (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }

  return NextResponse.json({ ok: true, data });
}