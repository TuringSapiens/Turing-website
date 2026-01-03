import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Executive() {
  return (
    <>
      <div className="pt-20 overflow-x-hidden">
        {/* Heading */}
        <div className="grid text-center justify-center w-full pb-32">
          <div className="bg-emerald-700 w-max rounded-lg">
            <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white text-center bg-[#09070b] px-6 py-2">
              Our Executives
            </h2>
          </div>
        </div>

        {/* Executives Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-32 px-10">
          
          {/* President */}
          <ExecutiveCard
            name="Manvi Bindal"
            role="President"
            img="/assets/Manvi_Bindal.jpg"
          />

          {/* Vice President */}
          <ExecutiveCard
            name="Salil Mishra"
            role="Vice President"
            img="/assets/Salil_Mishra.webp"
          />

          {/* General Secretary */}
          <ExecutiveCard
            name="Heer Sharma"
            role="General Secretary"
            img="/assets/Heer_Sharma.webp"
          />

          {/* Treasurer */}
          <ExecutiveCard
            name="Aayush Sharma"
            role="Treasurer"
            img="/assets/Aayush_Sharma.webp"
          />

        </div>
      </div>
    </>
  );
}

/* Reusable Card Component */
function ExecutiveCard({ name, role, img }) {
  return (
    <div className="relative">
      <div className="overflow-hidden shadow-xl bg-emerald-700">
        <div className="absolute -mt-28 w-full flex justify-center">
          <div className="h-60 w-60 bg-emerald-800 p-1 rounded-xl shadow-3xl">
            <img
              src={img}
              alt={name}
              className="object-cover h-full w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="px-6 pt-36 pb-6">
          <p className="font-bold text-2xl text-center pb-1 text-gray-100">
            {name}
          </p>
          <p className="text-gray-100 text-md font-semibold text-center italic">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
