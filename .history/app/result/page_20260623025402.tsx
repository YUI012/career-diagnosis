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
      label: "SES",
      title: "SES適性：スキル成長型",
      shortTitle: "スキル成長型",
      shareLabel: "現場経験で伸びるタイプ",
      desc: "現場経験を積みながらスキルアップできる環境が向いています",
      catch: "ただし、案件ガチャや評価の不透明さには注意が必要です。",
      ctaTitle: "SESで不安がある人へ",
      ctaText:
        "案件によって成長環境が大きく変わるため、社内SEや自社開発系の求人も比較しておくと安心です。",
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
      label: "SIer",
      title: "SIer適性：安定キャリア型",
      shortTitle: "安定キャリア型",
      shareLabel: "大規模開発・調整に強いタイプ",
      desc: "大規模システム開発や調整業務に強みを持つタイプです",
      catch: "安定性はありますが、技術に触れる時間が減る可能性があります。",
      ctaTitle: "SIerで技術成長に不安がある人へ",
      ctaText:
        "調整業務が多くなりやすいため、技術を伸ばせる環境や社内SE求人も比較しておくと安心です。",
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
      label: "社内SE",
      title: "社内SE適性：バランス型",
      shortTitle: "バランス型",
      shareLabel: "安定環境で改善するタイプ",
      desc: "社内システム運用や改善業務に適したタイプです",
      catch: "働きやすい反面、年収や技術成長は会社選びで差が出ます。",
      ctaTitle: "社内SEに興味がある人へ",
      ctaText:
        "安定した環境で働きたい場合は、社内SE求人を比較して自分に合う職場を見ておくのがおすすめです。",
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

  const siteUrl = "https://career-diagnosis.pages.dev";

  const shareText = `エンジニア働き方診断をやってみた

結果は「${r.shortTitle}」
${r.shareLabel}

SES・SIer・社内SEの中で
自分に合う働き方が1分でわかる👇

#エンジニア転職 #SES #社内SE`;

  const shareUrl =
    typeof window !== "undefined"
      ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(siteUrl)}`
      : "";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-5 py-8">
      <div className="w-full max-w-md">
        <p className="text-sm text-blue-400 font-bold mb-2">診断結果</p>

        <h1 className="text-3xl font-bold leading-tight mb-3">
          あなたは
          <br />
          {r.title}
        </h1>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {r.desc}
        </p>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-6 shadow-lg">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-5">
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

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 mb-6">
          <h2 className="font-bold text-lg mb-2">注意ポイント</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{r.catch}</p>
        </div>

        <Section title="あなたの特徴">
          {r.details.map((v: string) => (
            <Item key={v}>{v}</Item>
          ))}
        </Section>

        <Section title="よくある転職理由">
          {r.reviews.map((v: string) => (
            <Item key={v}>{v}</Item>
          ))}
        </Section>

        <CompareSection data={data} current={result} />

        <div className="bg-blue-600/10 border border-blue-500/40 rounded-2xl p-5 mb-5">
          <h2 className="font-bold text-lg mb-2">{r.ctaTitle}</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {r.ctaText}
          </p>
          <p className="text-sm font-bold text-blue-400">
            ↓ あなたに合う求人を比較してみる
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div dangerouslySetInnerHTML={{ __html: r.adCode }} />
        </div>

        <button
          onClick={() => window.open(shareUrl, "_blank")}
          className="w-full bg-white text-black rounded-xl py-4 font-bold flex items-center justify-center gap-2 mb-6"
        >
          <FaXTwitter />
          結果をXでシェアする
        </button>
      </div>
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
    <section className="mb-6">
      <h2 className="font-bold text-xl mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gray-600 pl-3 text-sm text-gray-300 leading-relaxed">
      {children}
    </div>
  );
}

function CompareSection({
  data,
  current,
}: {
  data: Record<string, any>;
  current: string;
}) {
  return (
    <section className="mb-6">
      <h2 className="font-bold text-xl mb-3">他の働き方も比較</h2>

      <div className="space-y-3">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className={`rounded-2xl border p-4 ${
              key === current
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700 bg-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold">{value.label}</h3>
              {key === current && (
                <span className="text-xs text-blue-400 font-bold">
                  あなたの結果
                </span>
              )}
            </div>

            <p className="text-sm text-gray-300 mb-2">{value.shortTitle}</p>

            <p className="text-xs text-gray-400 leading-relaxed">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}