"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultInner() {
  const params = useSearchParams();
  const answers = params.get("answers")?.split(",") || [];

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

  const percent = (v: number) =>
    total === 0 ? 0 : Math.round((v / total) * 100);

  const result =
    scoreMap.SES >= scoreMap.SIER && scoreMap.SES >= scoreMap.IN_HOUSE
      ? "SES"
      : scoreMap.SIER >= scoreMap.IN_HOUSE
      ? "SIER"
      : "IN_HOUSE";

  const data: Record<string, any> = {
    SES: {
      title: "SES適性：スキル成長型",
      desc: "現場経験を積みながらスキルアップできる環境が向いています",
      risk: "短期的にスキルは伸びますが、案件次第で環境差が大きい働き方です",
      adCode: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I2XN5" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003037000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I2XN5" alt="">
      `,
    },
    SIER: {
      title: "SIer適性：安定キャリア型",
      desc: "大規模システム開発で安定したキャリア形成が向いています",
      risk: "安定性は高い一方で、技術スピードは環境に左右される傾向があります",
      adCode: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I2XN5" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003037000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I2XN5" alt="">
      `,
    },
    IN_HOUSE: {
      title: "社内SE適性：バランス型",
      desc: "働きやすさと安定を両立した環境が向いています",
      risk: "働きやすい反面、年収やスキル成長は環境次第になりやすいです",
      adCode: `
  <a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I5PY9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003050000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I5PY9" alt="">
  `,
    },
  };

  const r = data[result] ?? data.IN_HOUSE;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">

      <h1 className="text-2xl font-bold mb-2">{r.title}</h1>

      <p className="text-sm font-bold mb-5 max-w-md">{r.desc}</p>

      {/* ★追加：軽い不安（重要） */}
      <p className="text-sm text-gray-500 mb-5 max-w-md">
        {r.risk}
      </p>

      {/* ★診断注意書き */}
      <p className="text-sm text-gray-500 mb-5 max-w-md">
        ※本診断は簡易的な適性チェックです。キャリア判断の参考情報としてご利用ください。
      </p>

      {/* バー */}
      <div className="w-full max-w-md mb-6 space-y-4">
        <Bar label="SES適性" value={percent(scoreMap.SES)} color="bg-blue-500" />
        <Bar label="SIer適性" value={percent(scoreMap.SIER)} color="bg-green-500" />
        <Bar
          label="社内SE適性"
          value={percent(scoreMap.IN_HOUSE)}
          color="bg-purple-500"
        />
      </div>

      {/* CTA前の一言（超重要） */}
      <p className="text-sm font-bold mb-3 font-medium">
        あなたに合った働き方の求人を一度見てみてください
      </p>

      {/* CTA */}
      <div
        dangerouslySetInnerHTML={{
        __html: r.adCode,
        }}
        />
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ResultInner />
    </Suspense>
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