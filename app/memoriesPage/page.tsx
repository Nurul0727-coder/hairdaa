import MainPage from "../mainPage/page";

export default function MemoriesPage() {
  return (
    <>
      {/* MEMORIES PAGE */}
      <main
        className="min-h-screen flex items-center justify-center px-6 text-[#f5f1ea]"
        style={{
          backgroundImage: "url('/image/background4.jpeg')",
        }}
      >
        <section className="text-center w-[720px] h-[550px] ml-[-30px] pr-3">
          <div className="relative w-full h-[500px] mt-[170px]">
            {/* BOOTH 1 */}
            <div className="absolute top-[-84px] left-27 z-10 w-27">
              <img
                src="/image/hair3.jpeg"
                className="absolute left-[8%] top-[9%] w-[70%] h-[87%] object-cover"
              />

              <img src="/image/tvBooth4.png" className="relative w-full" />
            </div>

            {/* HEART */}
            <div className="absolute top-[-118px] left-67 z-10 w-32">
              <img src="/image/heart.png" className="relative w-full" />
            </div>

            {/* BOOTH 2 */}
            <div className="absolute top-[-23px] left-13 z-10 w-62">
              <img
                src="/image/hair2.jpeg"
                className="absolute left-[18%] top-[15%] w-[50%] h-[77%] object-cover"
              />

              <img src="/image/tvBooth3.png" className="relative w-full" />
            </div>

            {/* BOOTH 3 */}
            <div className="absolute left-0 z-20 w-74">
              <img
                src="/image/hair1.jpg"
                className="absolute left-[12%] top-[33%] w-[60%] h-[37%] object-cover"
              />

              <img src="/image/tvBooth1.png" className="relative w-full" />
            </div>

            {/* BOOTH 4 */}
            <div className="absolute left-59 z-20 w-54 top-[18%]">
              <img
                src="/image/hair4.jpeg"
                className="absolute left-[15%] top-[17%] w-[60%] h-[57%] object-cover"
              />

              <img src="/image/tvBooth2.png" className="relative w-full" />
            </div>

            {/* CAT 1 */}
            <div className="absolute top-[-6px] left-67 z-10 w-32">
              <img src="/image/cat1.png" className="relative w-full" />
            </div>

            {/* CAT 2 */}
            <div className="absolute top-[-6px] left-2 z-10 w-32">
              <img src="/image/cat2.png" className="relative w-full" />
            </div>
          </div>

          {/* TEXT */}
          <div className="mt-[-200px] ml-17">
            <p className="bg-[#afc8ec] w-[330px] h-[74px] border-black border-2 text-2xl text-black mb-[-600px]">
              Бидний дурсамжийн нэгэн буланд тавтай морил. 🥰💗
            </p>
          </div>
        </section>
      </main>

      {/* MAIN PAGE */}
      <MainPage />
    </>
  );
}
