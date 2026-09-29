// export default function BirthdayIntro() {
//   return (
//     <main
//       className="min-h-screen flex items-center justify-center px-6 text-[#f5f1ea]
//       "
//       style={{
//         backgroundImage: "url('/image/bg5.jpeg')",
//       }}
//     >
//       <section className="text-center w-[740px] h-[550px] ">
//         <div className="w-[1140px] pl-[150px] pt-[120px]">
//           <img
//             src="/image/booth2.png"
//             alt="birthday memory"
//             className="mt-4 h-56 w-full rounded-3xl object-cover  "
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import MainGrid from "../mainGrid/page";
import { useRef } from "react";

export default function MainPage() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <main
        className="h-screen overflow-x-hidden text-[#f5f1ea]"
        style={{
          backgroundImage: "url('/image/bg7.jpeg')",
        }}
      >
        {/* ONLY HORIZONTAL */}

        <section
          ref={horizontalRef}
          className="h-screen w-full overflow-x-auto overflow-y-hidden touch-pan-x"
        >
          <div className="ml-[30px] flex h-full w-max items-center px-6">
            {/* STICKER 1 */}
            <div>
              <img
                src="/image/booth3.png"
                alt="memory sticker"
                className="mb-[50px] w-[270px]"
              />
            </div>

            {/* BOOTH SECTION 1 */}
            <div className="relative ml-[-65px] w-[920px] shrink-0">
              {/* PIC 1 */}
              <img
                src="/image/love2.PNG"
                alt="memory photo 1"
                className="absolute top-[36%] z-0 h-[20%] w-[16%] object-cover"
              />

              {/* PIC 2 */}
              <img
                src="/image/love4.PNG"
                alt="memory photo 2"
                className="absolute bottom-[45%] left-[15%] z-0 h-[19%] w-[16%] object-cover"
              />

              {/* PIC 3 */}
              <img
                src="/image/love5.PNG"
                alt="memory photo 3"
                className="absolute bottom-[45%] left-[29.7%] z-0 h-[20%] w-[16%] object-cover"
              />

              {/* PIC 4 */}
              <img
                src="/image/love6.PNG"
                alt="memory photo 4"
                className="absolute bottom-[45%] left-[44%] z-0 h-[20%] w-[15%] object-cover"
              />

              {/* PIC 5 */}
              <img
                src="/image/love1.PNG"
                alt="memory photo 5"
                className="absolute bottom-[45%] left-[57.8%] z-0 h-[36%] w-[16%] object-cover pt-[83px]"
              />

              {/* PIC 6 */}
              <img
                src="/image/love3.PNG"
                alt="memory photo 6"
                className="absolute left-[72.5%] top-[19%] z-0 h-[40%] w-[16%] object-cover pt-[83px] pb-[20px]"
              />

              {/* PIC 7 */}
              <img
                src="/image/love7.PNG"
                alt="memory photo 7"
                className="absolute left-[87%] top-[19%] z-0 h-[40%] w-[14%] object-cover pt-[83px] pb-[20px]"
              />

              {/* MAIN STICKER 1 */}
              <img
                src="/image/mainpage1.png"
                alt="heart sticker"
                className="absolute left-[14%] top-[17%] z-20 w-[100px] rotate-[-12deg] drop-shadow-lg"
              />

              {/* MAIN STICKER 2 */}
              <img
                src="/image/mainpage2.png"
                alt="star sticker"
                className="absolute left-[45%] top-[63%] z-20 w-[85px] rotate-[4deg] drop-shadow-lg"
              />

              {/* MAIN STICKER 3 */}
              <img
                src="/image/mainpage3.png"
                alt="heart sticker"
                className="absolute left-[35%] top-[3%] z-20 w-[80px] rotate-[-12deg] drop-shadow-lg"
              />

              {/* MAIN STICKER 4 */}
              <img
                src="/image/mainpage4.png"
                alt="star sticker"
                className="absolute left-[68%] top-[52%] z-20 w-[85px] rotate-[4deg] drop-shadow-lg"
              />

              {/* MAIN STICKER 5 */}
              <img
                src="/image/mainpage6.png"
                alt="heart sticker"
                className="absolute left-[-5%] top-[12%] z-20 w-[150px] drop-shadow-lg"
              />

              {/* MAIN STICKER 6 */}
              <img
                src="/image/mainpage5.png"
                alt="heart sticker"
                className="absolute left-[52%] top-[22%] z-20 w-[90px] rotate-[4deg] drop-shadow-lg"
              />

              {/* MAIN STICKER 7 */}
              <img
                src="/image/mainpage7.png"
                alt="heart sticker"
                className="absolute left-[96%] bottom-[34%] z-20 w-[90px] rotate-[4deg] drop-shadow-lg"
              />

              {/* CAMERA STICKER */}
              <img
                src="/image/boothS2.png"
                alt="camera sticker"
                className="absolute left-[96%] top-[8%] z-20 h-[40%] w-[16%] rotate-[10deg] object-cover pt-[83px] pb-[20px]"
              />

              {/* TEXT 1 */}
              <p className="absolute left-[5%] bottom-[31%] z-20 text-center text-2xl font-bold text-[#5935c4] drop-shadow-lg">
                үргэлж хайртайгаа хамт 💘💖
              </p>

              {/* TEXT 2 */}
              <p className="absolute left-[55%] top-[10%] z-20 text-center text-2xl font-bold text-[#5935c4] drop-shadow-lg">
                хайрынхаа энгэрийн зүүлт нь 💕
              </p>

              {/* TEXT 3 */}
              <p className="absolute left-[75%] bottom-[25%] z-20 text-center text-2xl font-bold text-[#5935c4] drop-shadow-lg">
                хамгийн мундаг хайр 💗💗💗
              </p>

              {/* BOOTH FRAME */}
              <img
                src="/image/booth1.png"
                alt="photo booth"
                className="relative z-10 w-full"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ============================= */}
      {/* ↓ DOOSH SCROLL HIIGEED GARAH */}
      {/* ============================= */}

      <MainGrid />
    </>
  );
}
