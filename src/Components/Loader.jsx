import React, { useEffect, useRef, useState } from "react";
import DecryptedText from "./DecryptedText";
import { gsap } from "gsap";

const Loader = () => {
       const loaderRef = useRef(null);
       const [animationDone, setAnimationDone] = useState(false);

       useEffect(() => {
              // Disable scroll
              document.body.style.overflow = "hidden";

              // Wait for decrypted text animation to finish (~50 × 50ms = 2.5s here)
              const totalDuration = 50 * 50; // speed × maxIterations
              const timer = setTimeout(() => {
                     setAnimationDone(true);

                     // Slide loader up
                     gsap.to(loaderRef.current, {
                            y: "-100%",
                            duration: 1,
                            ease: "power2.inOut",
                            onComplete: () => {
                                   // Enable scroll
                                   document.body.style.overflow = "auto";
                            },
                     });
              }, totalDuration);

              return () => clearTimeout(timer);
       }, []);

       return (
              <div
                     ref={loaderRef}
                     className="fixed inset-0 flex bg-black items-center justify-center z-[9999] w-full"
              >
                     <div className="text-white">
                            <DecryptedText
                                   speed={50}
                                   maxIterations={50} // 50 × 50ms = 2.5s animation
                                   text="NOBIFLY"
                                   className="text-4xl md:text-6xl font-black"
                                   animateOn="view"
                                   revealDirection="center"
                            />
                     </div>
              </div>
       );
};

export default Loader;
