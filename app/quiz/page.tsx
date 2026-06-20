"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";

export default function Quiz() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const q = questions[index];

  const select = (value: string) => {
    const next = [...answers, value];
    setAnswers(next);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      router.push(`/result?answers=${next.join(",")}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md">
        <p className="text-sm text-gray-500 mb-2">
          {index + 1} / {questions.length}
        </p>

        <h2 className="text-xl font-bold mb-6">{q.text}</h2>

        <div className="flex flex-col gap-3">
          {q.options.map((o) => (
            <button
              key={o.text}
              onClick={() => select(o.value)}
              className="border rounded-xl p-3 hover:bg-gray-100"
            >
              {o.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}