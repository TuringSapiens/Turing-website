import React from "react";

const HeroTextCell = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-900 relative">
    <img
      src="/assets/Alphasia_img4.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
  </div>
);

const GalleryCell = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
);

const GalleryGrid = ({ images }) => {
  const rowClass = "grid grid-cols-3 gap-x-2 gap-y-4 flex-1";
  return (
    <div className="flex flex-col h-full gap-2">
      <div className={rowClass}>
        <HeroTextCell />
        <GalleryCell src={images[0]} alt="Gallery 1" />
        <GalleryCell src={images[1]} alt="Gallery 2" />
      </div>
      <div className={rowClass}>
        <GalleryCell src={images[2]} alt="Gallery 3" />
        <GalleryCell src={images[3]} alt="Gallery 4" />
        <GalleryCell src={images[4]} alt="Gallery 5" />
      </div>
      <div className={rowClass}>
        <GalleryCell src={images[5]} alt="Gallery 6" />
        <GalleryCell src={images[6]} alt="Gallery 7" />
        <GalleryCell src={images[7]} alt="Gallery 8" />
      </div>
    </div>
  );
};

const HeroSection = ({ images }) => (
  <section className="relative w-full px-4 h-screen">
    <div className="relative z-0 w-full aspect-[3/1.5]">
      <GalleryGrid images={images} />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  </section>
);

const Marquee = ({ children, duration = 30 }) => (
  <div className="overflow-hidden relative h-screen">
    <div className="animate-marquee" style={{ animationDuration: `${duration}s` }}>
      {children}
      {children}
    </div>
  </div>
);

export default function NextPage() {
  const galleryImages = [
    "/assets/Alphasia_img1.jpg",
    "/assets/Alphasia_img2.jpg",
    "/assets/Alphasia_img3.jpg",
    "/assets/Alphasia_img4.jpg",
    "/assets/Alphasia_img1.jpg",
    "/assets/Alphasia_img2.jpg",
    "/assets/Alphasia_img3.jpg",
    "/assets/Alphasia_img4.jpg"
  ];

  return (
    <div className="relative bg-black text-white">
      {/* Text Box in Top Left with decreased width by 2px */}
      <div
        className="absolute top-0 left-0 p-8 bg-black rounded-lg shadow-xl max-w-lg z-50"
        // style={{ maxWidth: "calc(32rem - rem)" }}
      >
        <h1 className="text-6xl font-extrabold ml-1 tracking-tight">ALPHASIA</h1>
        <div className="mt-4 mb-4 ml-1 space-y-2">
          <p className="text-lg font-medium leading-relaxed">
            ALPHASIA 2.0 is a dynamic celebration of innovation and culture, uniting tech enthusiasts for thrilling
          </p>
          <p className="text-lg font-medium leading-relaxed">
            hackathons and design challenges, with an electrifying  gaming experience!!!
          </p>
          <p className="text-lg font-medium leading-relaxed">
           
          </p>
          <p className="text-lg font-medium leading-relaxed">
            Ignite creativity - Foster collaboration - Celebrate talent.
          </p>
        </div>
      </div>

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/90 to-transparent z-40 pointer-events-none" />

      {/* Marquee with Hero Sections */}
      <Marquee duration={30}>
        <HeroSection images={galleryImages} />
        <HeroSection images={galleryImages} />
      </Marquee>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
