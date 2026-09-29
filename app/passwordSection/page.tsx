"use client";

import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const correctPassword = "1009";

  const handleNumber = (number: string) => {
    if (password.length >= 4) return;

    const newPassword = password + number;

    setPassword(newPassword);
    setError(false);

    if (newPassword.length === 4) {
      if (newPassword === correctPassword) {
        console.log("correct");
      } else {
        setError(true);
        setPassword("");
      }
    }
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
    setError(false);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center font-[Ubuntu] text-white"
      style={{
        backgroundImage: "url('/image/bg1.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft glass overlay */}
      <div className="absolute inset-0 bg-white/[0.03]" />

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Top text */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-[14px] font-light uppercase tracking-[0.45em] text-white/65">
            Бяцхан бэлэг 🤫
          </p>

          <h1 className="text-[25px] font-light tracking-wide text-white">
            Нууц кодоо оруулаарай
          </h1>

          <p className="mt-1 text-[25px] font-light tracking-wide text-white">
            хайртаа 💗🥰
          </p>

          {/* Hint */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <p className="text-m font-light tracking-wide text-white/65">
              Сэжүүр: Өнөөдөр 🎂
            </p>

            <span className="h-px w-8 bg-white/30" />
          </div>
        </div>

        {/* Passcode dots */}
        <div
          className={`mb-7 flex gap-4 ${
            error ? "animate-[shake_0.45s_ease-in-out]" : ""
          }`}
        >
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                index < password.length
                  ? "scale-110 border-white bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  : "border-white/70 bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* Error message */}
        <div className="h-6">
          {error && (
            <p className="animate-pulse text-xs font-light tracking-wide text-red-400">
              Миний хайрын хийсэн код буруу байна.🤪💗
            </p>
          )}
        </div>

        {/* Keypad */}
        <div className="">
          {/* Numbers */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
              <button
                key={number}
                onClick={() => handleNumber(number)}
                className="group flex h-[62px] w-[62px] items-center justify-center rounded-full border border-blue-600/60 bg-blue-800/25 text-xl font-light text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-amber-400/25 active:scale-90 active:bg-white/35"
              >
                {number}
              </button>
            ))}

            {/* Empty space */}
            <div />

            {/* 0 */}
            <button
              onClick={() => handleNumber("0")}
              className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-blue-600/60 bg-blue-800/25 text-xl font-light text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-amber-400/25 active:scale-90 active:bg-white/35"
            >
              0
            </button>

            {/* Delete */}
            <button
              onClick={handleDelete}
              className="flex h-[62px] w-[62px] items-center justify-center rounded-full text-xs font-light tracking-wide text-white/90 transition-all duration-200 hover:text-white active:scale-90"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
