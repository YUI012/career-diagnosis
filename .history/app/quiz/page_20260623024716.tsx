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

  const progress = ((index + 1) / questions.length) * 100;

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
    }, 140);
  };

  const back = () => {
    if (index === 0) return;

    setIndex(index - 1);
    setAnswers((prev) => prev.slice(0, -1));
  };

  return (
    <div className="w-full flex flex-col items-center text-center px-4 pt-10">
      <div className="w-full max-w-md">
        {/* カウント */}
        <p className="text-sm text-gray-500 mb-4">
          {index + 1} / {questions.length}
        </p>

        {/* 質問 */}
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
          {q.text}
        </h2>

        {/* 選択肢 */}
        <div className="flex flex-col gap-4">
          {q.options.map((o) => (
            <button
              key={o.text}
              onClick={() => select(o.value)}
              className={`
                w-full border border-gray-300 rounded-2xl px-5 py-4
                text-base md:text-lg font-bold
                transition-all duration-150
                hover:border-blue-500 hover:bg-blue-950/30 hover:scale-[1.02]
                active:scale-[0.98]
                focus:outline-none
                ${
                  selected === o.value
                    ? "border-blue-500 bg-blue-950/40 scale-[0.98]"
                    : ""
                }
              `}
            >
              {o.text}
            </button>
          ))}
        </div>

        {/* 戻る */}
        <button
          onClick={back}
          disabled={index === 0}
          className="text-sm text-gray-500 mt-6 disabled:opacity-30 hover:text-gray-300 transition"
        >
          ← 前の質問に戻る
        </button>

        {/* 進捗バー */}
        <div className="mt-8">
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}