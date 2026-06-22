import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("results")
    .select("result");

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const counts = {
    SES: 0,
    SIER: 0,
    IN_HOUSE: 0,
  };

  if (data) {
    data.forEach((row) => {
      if (row.result in counts) {
        counts[row.result as keyof typeof counts]++;
      }
    });
  }

  const total =
    counts.SES + counts.SIER + counts.IN_HOUSE;

  return NextResponse.json({
    counts,
    total,
  });
}