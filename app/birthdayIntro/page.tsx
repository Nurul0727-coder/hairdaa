// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// export default function BirthdayIntro() {
//   const router = useRouter();
//   const [isLeaving, setIsLeaving] = useState(false);

//   const handleImageClick = () => {
//     if (isLeaving) return;

//     setIsLeaving(true);

//     setTimeout(() => {
//       router.push("/memoriesPage");
//     }, 800);
//   };

//   return (
//     <main
//       className="min-h-screen flex items-center justify-center text-[#f5f1ea] overflow-hidden"
//       style={{
//         backgroundImage: "url('/image/bg8.jpeg')",
//       }}
//     >
//       <section className="relative w-[840px] h-[550px] flex items-center justify-center">
//         {/* IMG 1 */}
//         <motion.img
//           src="/image/introImg.png"
//           alt="birthday memory"
//           className="w-[1140px] h-67 object-cover"
//           animate={
//             isLeaving
//               ? {
//                   scale: 1.05,
//                   opacity: 0,
//                 }
//               : {
//                   scale: 1,
//                   opacity: 1,
//                 }
//           }
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* IMG 2 */}
//         <motion.img
//           src="/image/didkenhair.png"
//           alt="birthday decoration"
//           onClick={handleImageClick}
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 object-contain cursor-pointer select-none"
//           animate={
//             isLeaving
//               ? {
//                   scale: 1.8,
//                   opacity: 0,
//                   rotate: 5,
//                 }
//               : {
//                   scale: 1,
//                   opacity: 1,
//                   rotate: 0,
//                 }
//           }
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* TEXT */}
//         <motion.p
//           onClick={handleImageClick}
//           className="absolute top-[90%] left-1/2 -translate-x-1/2 text-[#591010] text-sm underline underline-offset-4 cursor-pointer select-none"
//           animate={
//             isLeaving
//               ? {
//                   opacity: 0,
//                   y: 10,
//                 }
//               : {
//                   opacity: 1,
//                   y: 0,
//                 }
//           }
//           transition={{
//             duration: 0.4,
//           }}
//         >
//           голын зураг дээр дараарай!
//         </motion.p>
//       </section>
//     </main>
//   );
// }
