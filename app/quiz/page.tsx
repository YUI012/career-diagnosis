"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";

export default function Quiz() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const q = questions[index];


  const select = async (value: string) => {
    const next = [...answers, value];
    setAnswers(next);
    setSelected(value);
  
    setTimeout(async () => {
      setSelected(null);
  
      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        // 🔥 最後の質問ならここで保存
  
        const result = calcResult(next); // ← 下で定義
  
        try {
          await fetch("/api/save-result", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ result }),
          });
        } catch (e) {
          console.error("save error:", e);
        }
  
        router.push(`/result?answers=${next.join(",")}`);
      }
    }, 120);
  };
  const calcResult = (answers: string[]) => {
    const score = {
      SES: 0,
      SIER: 0,
      IN_HOUSE: 0,
    };
  
    answers.forEach((a) => {
      if (a === "SES") score.SES++;
      if (a === "SIER") score.SIER++;
      if (a === "IN_HOUSE") score.IN_HOUSE++;
    });
  
    if (score.SES >= score.SIER && score.SES >= score.IN_HOUSE) {
      return "SES";
    }
  
    if (score.SIER >= score.IN_HOUSE) {
      return "SIER";
    }
  
    return "IN_HOUSE";
  };

  const back = () => {
    if (index === 0) return;
  
    setIndex(index - 1);
    setAnswers((prev) => prev.slice(0, -1));
  };

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center">

      <div className="w-full max-w-md">

        <p className="text-sm text-gray-500 mb-2">
          {index + 1} / {questions.length}
        </p>
        {/* 質問 */}
        <h2 className="text-xl font-bold mb-6">
          {q.text}
        </h2>

        <div className="flex flex-col gap-3">
          {q.options.map((o) => (
            <button
              key={o.text}
              onClick={() => select(o.value)}
              className={`border rounded-xl p-3 font-medium transition
                focus:outline-none active:outline-none
                ${
                  selected === o.value
                }
              `}
            >
              {o.text}
            </button>
          ))}
        </div>

        <button
        onClick={back}
        disabled={index === 0}
        className="text-sm text-gray-500 mt-4 disabled:opacity-30"
        >
        ← 前の質問に戻る
        </button>

        {/* 進捗バー */}
{/* ここが“選択肢の下の進捗バー” */}
        <div className="mt-5">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
            className="h-2 bg-blue-500 transition-all duration-300"
            style={{
                width: `${((index) / questions.length) * 100}%`,
            }}
            />
        </div>
        </div>
      </div>
    </main>
  );
}