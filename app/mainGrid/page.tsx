// const photos = [
//   "/image/lovey1.jpeg",
//   "/image/pic1.jpg",
//   "/image/hair5.jpeg",
//   "/image/pic11.jpg",
//   null,
//   "/image/pic7.jpg",
//   "/image/pic8.jpg",
//   "/image/lovey2.jpeg",
//   "/image/pic4.jpg",
// ];

// export default function NextPage() {
//   return (
//     <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f1ea]">
//       {/* GRID 1 */}
//       <section className="w-full">
//         <div className="grid w-full grid-cols-3 gap-[2px]">
//           {photos.map((photo, index) => (
//             <div
//               key={index}
//               className="relative aspect-square w-full overflow-hidden"
//             >
//               {photo ? (
//                 <img
//                   src={photo}
//                   alt={`Memory ${index + 1}`}
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <div className="flex h-full w-full flex-col items-center justify-center bg-white px-3 text-center text-[#17266b]">
//                   <p className="text-[11px] leading-5">Little moments</p>
//                   <p className="mt-2 text-[11px] leading-5">always stay</p>
//                   <p className="mt-2 text-[11px] leading-5">with me ♡</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* GRID 2 */}
//       <section className="mt-12 w-full">
//       <div className="grid w-full grid-cols-3 gap-[2px]">
//           {photos.map((photo, index) => (
//             <div
//               key={index}
//               className="relative aspect-square w-full overflow-hidden"
//             >
//               {photo ? (
//                 <img
//                   src={photo}
//                   alt={`Memory ${index + 1}`}
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <div className="flex h-full w-full flex-col items-center justify-center bg-white px-3 text-center text-[#17266b]">
//                   <p className="text-[11px] leading-5">Little moments</p>
//                   <p className="mt-2 text-[11px] leading-5">always stay</p>
//                   <p className="mt-2 text-[11px] leading-5">with me ♡</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import HouseBooth from "../houseBooth/page";

const photos1 = [
  "/image/lovey1.jpeg",
  "/image/pic1.jpg",
  "/image/hair5.jpeg",
  "/image/pic11.jpg",
  null,
  "/image/pic7.jpg",
  "/image/pic8.jpg",
  "/image/lovey2.jpeg",
  "/image/pic4.jpg",
];

const photos2 = [
  "/image/pic5.PNG",
  "/image/pic6.jpg",
  "/image/pic2.jpg",
  "/image/lovey3.jpeg",
  null,
  "/image/pic9.jpg",
  "/image/pic10.jpg",
  "/image/lovie1.jpg",
  "/image/lovey8.jpeg",
];

const photos3 = [
  "/image/lovey5.jpeg",
  "/image/hair2.jpeg",
  "/image/hair3.jpeg",
  "/image/hair7.jpeg",
  null,
  "/image/lovie3.jpg",
  "/image/lovie7.jpg",
  "/image/lovie4.jpg",
  "/image/lovey6.jpeg",
];

/* --------------------------------
   GRID БҮРТ ЗОРИУЛСАН ТЕКСТ
--------------------------------- */

const gridTexts = [
  [
    "Бидний хамтдаа өнгөрөөсөн ",
    "Жижигхэн дурсамжууд ч",
    "Бидэнд гэгээлэг нандин",
    "Мөрөөдлийн маань чухал хэсэг",
    "Би багаасаа л чам шиг хүнтэй учрахыг мөрөөддөг байсан. Харин одоо биелчихсэн хайрт минь🥰 ",
    "Чи намайг үргэлж инээлгэдэг",
    "Миний хамгийн ихээр хайрладаг хүн",
    "Миний хамгийн том аз жаргал",
    "Бүх зүйл эхэлсэн тэр үе",
  ],

  [
    "Чинийхээ",
    "Жаргалтай зовлонтой",
    "Бүхий л үед хань болж",
    "Хэзээ ч ганцаардуулахгүй ээ хайр нь",
    "Чамайг хайрлах нь миний хамгийн жаргалтай мэдрэмж.",
    "Үргэлж чамдаа",
    "Үнэнч сэтгэл хайр энхэрийлэлтэй хандаж",
    "Үүрдийн жаргал нь байх болноо. Хайрт минь",
    "Нададаа мөнхөд гэрэл гэгээ цацруулсан нандин хүн.",
  ],

  [
    "Цаашдаа хоёулаа...",
    "Хамтдаа илүү олон дурсамжуудыг бүтээнээ.",
    "Миний хамгийн тайван байдаг газар",
    "Үүрд хадгалмаар мэдрэмж",
    "Би чамтай ирээдүйгээ төсөөлөхдөө айдаггүй, харин догдолдог.",
    "Миний гэр шиг хүн",
    "Би чамайг ямарч үед орхихгүй",
    "Зөвхөн бидний ертөнц",
    "Маш их хайртай ♡",
  ],
];

/* --------------------------------
   PHOTO GRID     "Би чамтай ирээдүйгээ төсөөлөхдөө айдаггүй, харин догдолдог.",
--------------------------------- */

function MainGrid({
  photos,
  texts,
}: {
  photos: (string | null)[];
  texts: string[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid w-full grid-cols-3 gap-[2px]">
      {photos.map((photo, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            onClick={() => setActive(isActive ? null : index)}
            className="group relative aspect-square w-full cursor-pointer overflow-hidden bg-[#eee9e1]"
          >
            {/* ЗУРАГ */}
            {photo ? (
              <img
                src={photo}
                alt={`Дурсамж ${index + 1}`}
                className={`
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-110
                  ${isActive ? "scale-110" : "scale-100"}
                `}
              />
            ) : (
              <div
                className={`
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  bg-[#fffdf9]
                  px-4
                  text-center
                  transition-all
                  duration-700
                  group-hover:scale-105
                  ${isActive ? "scale-105" : ""}
                `}
              >
                <p
                  className={`
                    whitespace-pre-line
                    font-serif
                    text-[11px]
                    leading-[1.9]
                    tracking-[0.04em]
                    text-[#17266b]
                    transition-all
                    duration-500
                    ${isActive ? "scale-105 opacity-100" : "opacity-90"}
                  `}
                >
                  {texts[index]}
                </p>
              </div>
            )}

            {/* ХАР ДАВХАРГА */}
            {photo && (
              <div
                className={`
                  absolute
                  inset-0
                  bg-black/0
                  transition-all
                  duration-500
                  group-hover:bg-black/35
                  ${isActive ? "bg-black/35" : ""}
                `}
              />
            )}

            {/* ЗУРАГ ДЭЭР ГАРАХ ТЕКСТ */}
            <div
              className={`
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-3
                text-center
                transition-all
                duration-500
                ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }
              `}
            >
              <p
                className="
                  whitespace-pre-line
                  font-serif
                  text-[11px]
                  leading-[1.8]
                  tracking-[0.08em]
                  text-white
                  drop-shadow-md
                  sm:text-sm
                "
              >
                {texts[index]}
              </p>
            </div>

            {/* ЖИЖИГ ЗҮРХ */}
            {photo && (
              <span
                className={`
                  absolute
                  bottom-2
                  right-2
                  text-[10px]
                  text-white
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }
                `}
              >
                ♡
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------------
   ҮНДСЭН ХУУДАС
--------------------------------- */

export default function NextPage() {
  return (
    <>
      <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f1ea]">
        {/* ЭХЛЭЛ */}
        <section className="flex flex-col items-center px-6 pb-10 pt-16 text-center">
          <p className="mb-3 font-serif text-[10px] uppercase tracking-[0.35em] text-[#17266b]/60">
            бидний бяцхан дурсамжууд
          </p>

          <h1 className="font-serif text-2xl italic tracking-wide text-[#17266b] sm:text-3xl">
            Бидний тухай жижигхэн ертөнц ♡
          </h1>

          <p className="mt-4 max-w-[280px] text-[11px] leading-6 tracking-wide text-[#17266b]/55">
            Чамайг харах бүрд анх дурласан тэр мэдрэмж
            <br />
            минь одоо ч тодхон байдаг.
          </p>
        </section>

        {/* GRID 1 */}
        <section className="w-full">
          <MainGrid photos={photos1} texts={gridTexts[0]} />
        </section>

        {/* GRID 1 → GRID 2 */}
        <section className="flex items-center justify-center px-8 py-16 text-center">
          <div>
            <span className="font-serif text-xl text-[#17266b]">✦</span>

            <p className="mt-4 font-serif text-[12px] italic leading-6 tracking-wide text-[#17266b]/70">
              “Бүх зүйл төгс байсандаа биш,
              <br />
              чамтай байсан болохоор
              <br />
              сайхан байдаг.”
            </p>
          </div>
        </section>

        {/* GRID 2 */}
        <section className="w-full">
          <MainGrid photos={photos2} texts={gridTexts[1]} />
        </section>

        {/* GRID 2 → GRID 3 */}
        <section className="flex items-center justify-center px-8 py-16 text-center">
          <div>
            <p className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#17266b]/50">
              зөвхөн бид хоёр
            </p>

            <div className="mx-auto mt-4 h-px w-10 bg-[#17266b]/20" />

            <p className="mt-4 font-serif text-[12px] italic leading-6 text-[#17266b]/70">
              “Бидний түүх ямар төгс байх нь чухал биш.
              <br />
              Харин хуудас бүр дээр
              <br />
              чамтай хамт байх нь чухал.”
            </p>
          </div>
        </section>

        {/* GRID 3 */}
        <section className="w-full">
          <MainGrid photos={photos3} texts={gridTexts[2]} />
        </section>

        {/* ТӨГСГӨЛ */}
        <section className="flex flex-col items-center px-6 py-24 text-center">
          <span className="font-serif text-2xl text-[#17266b]">♡</span>

          <p className="mt-5 font-serif text-[13px] italic leading-7 tracking-wide text-[#17266b]/70">
            “Чинийхээ хажууд би
            <br />
            өөрийнхөө хамгийн тайван
            <br />
            хувилбар болдог.
          </p>

          <p className="mt-8 text-[9px] uppercase tracking-[0.35em] text-[#17266b]/40">
            үргэлж чинийхээ эрх гүнж нь баймаар.
          </p>
        </section>
      </main>
      <HouseBooth />
    </>
  );
}
