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

  const select = (value: string) => {
    const next = [...answers, value];
    setAnswers(next);
    setSelected(value);

    setTimeout(() => {
      setSelected(null);

      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        router.push(`/result?answers=${next.join(",")}`);
      }
    }, 120);
  };
  const back = () => {
    if (index === 0) return;
  
    setIndex(index - 1);
    setAnswers((prev) => prev.slice(0, -1));
  };
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center select-none">

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