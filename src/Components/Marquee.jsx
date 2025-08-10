import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Images = [
  {
    ImageUrl:
      "https://images.unsplash.com/photo-1642919653654-b9f57a095a06?w=500&auto=format&fit=crop&q=60",
  },
  {
    ImageUrl:
      "https://images.unsplash.com/photo-1668440246390-6f40b553adef?q=80&w=764&auto=format&fit=crop",
  },
  {
    ImageUrl:
      "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=1974&auto=format&fit=crop",
  },
  {
    ImageUrl:
      "https://images.unsplash.com/photo-1654524438269-10e6b3c0d230?q=80&w=1936&auto=format&fit=crop",
  },
];

const Marquee = () => {
  const marqueeRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-black py-6">
      <div
        ref={marqueeRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {/* Two identical sets back to back */}
        {[...Images, ...Images].map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[120px] relative rounded-xl overflow-hidden"
            style={{
              marginRight: index % Images.length === Images.length - 1 ? 0 : "1.5rem", // spacing except last in each set
            }}
          >
            <img
              src={item.ImageUrl}
              alt={`Marquee Image ${index}`}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
