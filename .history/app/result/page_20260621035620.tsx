"use client";

import { useSearchParams } from "next/navigation";
import { calcResult } from "@/lib/scoring";

export default function Result() {
  const params = useSearchParams();
  const answers = params.get("answers")?.split(",") || [];

  const result = calcResult(answers);

  const scoreMap = {
    SES: 0,
    SIER: 0,
    IN_HOUSE: 0,
  };

  answers.forEach((a) => {
    if (a === "SES") scoreMap.SES++;
    if (a === "SIER") scoreMap.SIER++;
    if (a === "IN_HOUSE") scoreMap.IN_HOUSE++;
  });

  const total = answers.length;

  const data: Record<string, any> = {
    SES: {
      title: "SES適性：スキル成長型",
      desc: "現場経験を積みながらスキルアップできる環境が向いています",
      cta: "SES案件を見てみる",
      link: "#",
    },
    SIER: {
      title: "SIer適性：安定キャリア型",
      desc: "大規模システム開発で安定したキャリア形成が向いています",
      cta: "SIer求人を探す",
      link: "#",
    },
    IN_HOUSE: {
      title: "社内SE適性：バランス型",
      desc: "働きやすさと安定を両立した環境が向いています",
      cta: "社内SE求人を見る",
      link: "#",
    },
  };

  const r = data[result];

  const percent = (v: number) => Math.round((v / total) * 100);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{r.title}</h1>

      <p className="text-gray-600 mb-6">{r.desc}</p>

      {/* ■バー表示（復活） */}
      <div className="w-full max-w-md mb-6 space-y-4">
        <Bar label="SES適性" value={percent(scoreMap.SES)} color="bg-blue-500" />
        <Bar label="SIer適性" value={percent(scoreMap.SIER)} color="bg-green-500" />
        <Bar label="社内SE適性" value={percent(scoreMap.IN_HOUSE)} color="bg-purple-500" />
      </div>

      <a
        href={r.link}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        {r.cta}
      </a>
    </main>
  );
}

function Bar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="text-left">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className={`${color} h-2 rounded transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}