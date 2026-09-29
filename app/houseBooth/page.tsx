"use client";
export default function HouseBooth() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 text-[#f5f1ea]"
      style={{
        backgroundImage: "url('/image/bg4.jpeg')",
      }}
    >
      <section className="w-[740px] h-[550px]">
        {/* HOUSE BOOTH */}
        <div className="absolute mt-[150px] w-87">
          {/* HOUSE */}
          <div className="absolute top-[-23px] z-10 w-[350px]">
            {/* INSIDE PHOTO */}
            <img
              src="/image/hair7.jpeg"
              className="absolute left-[22%] top-[5%] w-[50%] h-[77%] object-cover"
            />

            {/* HOUSE IMAGE */}
            <img src="/image/house.png" className="relative z-10 w-full" />

            {/*  STICKER 1 */}

            <div
              className="
                sticker-pop
                absolute
                top-[-148px]
                left-[13px]
                z-20
                w-[198px]
                rotate-[-6deg]
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:rotate-[-2deg]
                hover:scale-105
                active:scale-90
              "
            >
              <img
                src="/image/sticker3.png"
                className="
                  w-full
                  drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-200
                  hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]
                "
              />
            </div>

            {/*  STICKER 2 */}

            <div
              className="
                sticker-pop
                absolute
                top-[-159px]
                left-[143px]
                z-20
                w-[168px]
                rotate-[5deg]
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:rotate-[1deg]
                hover:scale-105
                active:scale-90
              "
            >
              <img
                src="/image/sticker2.png"
                className="
                  w-full
                  drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-200
                  hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]
                "
              />
            </div>

            {/* 🩹 PATCH */}

            <div
              className="
                sticker-pop
                absolute
                top-[30px]
                left-[73px]
                z-20
                w-[198px]
                rotate-[-3deg]
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:rotate-[2deg]
                hover:scale-105
                active:scale-90
              "
            >
              <div>{/* <p className="">sainaa's birthday</p> */}</div>

              <img
                src="/image/patch.png"
                className="
                  w-full
                  drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-200
                  hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]
                "
              />
            </div>

            {/*  STICKER 3 */}

            <div
              className="
                sticker-pop
                absolute
                top-[180px]
                left-[133px]
                z-20
                w-[198px]
                rotate-[7deg]
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:rotate-[3deg]
                hover:scale-105
                active:scale-90
              "
            >
              <img
                src="/image/sticker1.png"
                className="
                  w-full
                  drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-200
                  hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]
                "
              />
            </div>

            {/*  STICKER 4 */}

            <div
              className="
                sticker-pop
                absolute
                top-[100px]
                left-[-73px]
                z-20
                w-[198px]
                rotate-[-8deg]
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:rotate-[-3deg]
                hover:scale-105
                active:scale-90
              "
            >
              <img
                src="/image/sticker4.png"
                className="
                  w-full
                  drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-200
                  hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]
                "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
