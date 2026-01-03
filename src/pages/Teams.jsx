

export default function Teams() {
  const coreTeamMembers = [
    { name: "Dhruv Baberwal", role: "Head Of Research & Projects" },
    { name: "Saish Atwadkar", role: "Head Of Research & Projects" },
    { name: "Ekansh Makhija", role: "Head Of Research & Projects" },
    { name: "Sanskar Jaiswal", role: "Head Of Web Development" },
    { name: "Siddharth Habbu", role: "Head Of Finance and Registration" }, 
    { name: "Aastha Anand", role: "Head Of Sponsorships" },
    { name: "Manas Srivastava", role: "Head Of Sponsorships" },
    { name: "Yashika Singh", role: "Head Of Events" },
    { name: "Vaishnavi Mishra", role: "Head Of Events" },
    { name: "Vaishnavi Mishra", role: "Head Of Events" },
    { name: "Sunny Kumar", role: "Head Of Logistics" },
    { name: "Anvesha Vyas", role: "Head Of Graphic Design" },
    { name: "Sabbari Viswas M", role: "Head of Creative Arts:" },   
    { name: "Riddhima", role: "Head Of Social Media" },
    { name: "Atharv Gadhave", role: "Head Of Social Media" },
    { name: "Shnigddha Pandey", role: "Head Of Content" },
    { name: "Shreya Singh", role: "Head Of Content" },
  ];

  return (
    <>
      {/* Our Deputy Heads Section */}
      <section className="pt-20 overflow-x-hidden">
        <div className="flex flex-col items-center w-full pb-2">
          <div className="bg-emerald-700 rounded-lg">
            <h2 className="pt-10 mb-1 py-2 px-4 text-4xl tracking-tight font-extrabold text-white text-center bg-[#09070b]">
              Our Deputy Heads
            </h2>
          </div>
        </div>
      </section>

      {/* Deputy Heads Cards */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src=""
                alt=""
              />
            </div>
            <p className="text-xl font-bold">Ravi Bansal</p>
            <p className="text-md text-gray-500">Deputy Secretary</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src="/assets/Akhilesh_V.webp"
                alt="Akhilesh V"
              />
            </div>
            <p className="text-xl font-bold">V Akhilesh</p>
            <p className="text-md text-gray-500">Deputy Technical Secretary</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src=""
                alt=""
              />
            </div>
            <p className="text-xl font-bold">Suraj Parmar</p>
            <p className="text-md text-gray-500">Deputy Operations Manager</p>
          </div>
        </div>
      </section>

      {/* Core Team Section Heading */}
      <section className="pt-5 overflow-x-hidden">
        <div className="flex flex-col items-center w-full pb-2">
          <div className="bg-emerald-700 rounded-lg">
            <h2 className="pt-10 mb-1 py-2 px-4 text-4xl tracking-tight font-extrabold text-white text-center bg-[#09070b]">
              Core Team
            </h2>
          </div>
        </div>
      </section>

      {/* Core Team Table */}
      <section className="flex items-center justify-center pt-10 pb-10">
        <div className="w-full max-w-4xl overflow-auto">
          <table className="min-w-full text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">
                  <span className="font-bold font-serif text-xl text-center">Name</span>
                </th>
                <th className="p-3 text-left">
                  <span className="font-bold font-serif text-xl text-center">Position</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {coreTeamMembers.map((member, index) => (
                <tr
                  key={index}
                  className="bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <td className="py-5 px-4 text-center">
                    <span className="font-bold font-mono text-lg">{member.name}</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="font-bold font-sans text-lg">{member.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}


