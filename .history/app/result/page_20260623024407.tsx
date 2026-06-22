"use client";

import { useSearchParams } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
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

  const sesPercent = percent(scoreMap.SES);
  const sierPercent = percent(scoreMap.SIER);
  const inHousePercent = percent(scoreMap.IN_HOUSE);

  let result: string;

  if (
    scoreMap.SES >= scoreMap.SIER &&
    scoreMap.SES >= scoreMap.IN_HOUSE
  ) {
    result = "SES";
  } else if (scoreMap.SIER >= scoreMap.IN_HOUSE) {
    result = "SIER";
  } else {
    result = "IN_HOUSE";
  }

  const data: Record<string, any> = {
    SES: {
      title: "SES適性：スキル成長型",
      desc: "現場経験を積みながらスキルアップできる環境が向いています",
      details: [
        "担当変更や環境変化への抵抗が少ない傾向があります",
        "新しい技術や業務に対して柔軟に適応しやすいタイプです",
        "経験を積みながら市場価値を高めていくキャリア形成に向いています",
      ],
      reviews: [
        "単価が上がっても給与に反映されにくいという声があります",
        "案件によってキャリア形成が左右されるという不安があります",
        "配属先による当たり外れが大きいと感じるケースがあります",
        "評価基準が不透明で納得感が得られにくいという意見があります",
      ],
      adCode: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I5PY9" rel="nofollow">
<img border="0" width="300" height="250" src="https://www22.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003050000&mc=1">
</a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I5PY9">
      `,
    },

    SIER: {
      title: "SIer適性：安定キャリア型",
      desc: "大規模システム開発や調整業務に強みを持つタイプです",
      details: [
        "調整やプロジェクト推進に強みを持つタイプです",
        "組織の中で成果を出すことが得意な傾向があります",
        "大規模システム開発との相性が良い働き方です",
      ],
      reviews: [
        "会議や調整業務が増えて技術に触れる時間が減るという声があります",
        "年功序列的な評価制度を感じるという意見があります",
        "技術力よりもマネジメントが重視される場合があります",
      ],
      adCode: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I5PY9" rel="nofollow">
<img border="0" width="300" height="250" src="https://www22.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003050000&mc=1">
</a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I5PY9">
      `,
    },

    IN_HOUSE: {
      title: "社内SE適性：バランス型",
      desc: "社内システム運用や改善業務に適したタイプです",
      details: [
        "安定した環境で力を発揮しやすいタイプです",
        "長期的な改善活動を継続することが得意です",
        "組織への貢献を重視するキャリア志向です",
      ],
      reviews: [
        "技術スタックが固定化しやすいという声があります",
        "成長スピードに物足りなさを感じる場合があります",
        "給与レンジが上がりにくい企業もあるという意見があります",
      ],
      adCode: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I2XN5" rel="nofollow">
<img border="0" width="250" height="250" src="https://www20.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003037000&mc=1">
</a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I2XN5">
      `,
    },
  };

  const r = data[result];

  const imageMap: Record<string, string> = {
    SES: "/characters/SES.png",
    SIER: "/characters/Sier.png",
    IN_HOUSE: "/characters/社内SE.png",
  };

  const imageSrc = imageMap[result];

  const shareText = `
【エンジニア働き方診断】

結果：${r.title}

SES適性：${sesPercent}%
SIer適性：${sierPercent}%
社内SE適性：${inHousePercent}%

あなたはどのタイプ？
  `;

  const shareUrl =
    typeof window !== "undefined"
      ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(window.location.origin)}`
      : "";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-2">診断結果</h1>

      <p className="text-gray-400 mb-6">{r.desc}</p>

      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-5 mb-6">
        <h2 className="font-bold mb-4">{r.title}</h2>

        <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
          <img
            src={imageSrc}
            alt={r.title}
            className="w-full h-full object-cover block"
          />
        </div>

        <Bar label="SES適性" value={sesPercent} color="bg-red-500" />
        <Bar label="SIer適性" value={sierPercent} color="bg-blue-500" />
        <Bar label="社内SE適性" value={inHousePercent} color="bg-green-500" />
      </div>

      <Section title="特徴">
        {r.details.map((v: string) => (
          <Item key={v}>{v}</Item>
        ))}
      </Section>

      <Section title="転職理由（リアルな声）">
        {r.reviews.map((v: string) => (
          <Item key={v}>{v}</Item>
        ))}
      </Section>

      <div dangerouslySetInnerHTML={{ __html: r.adCode }} />

      <button
        onClick={() => window.open(shareUrl, "_blank")}
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mt-4 mb-6"
      >
        <FaXTwitter />
      </button>
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
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-bold">{value}%</span>
      </div>

      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`${color} h-full rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md mb-5">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-300 space-y-2">{children}</div>
    </div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <div className="border-l-2 border-gray-600 pl-2">{children}</div>;
}