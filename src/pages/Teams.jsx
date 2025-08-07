

export default function Teams() {
  const coreTeamMembers = [
    { name: "Ravi Bansal", role: "Head Of Research & Projects" },
    { name: "Dhruv Baberwal", role: "Head Of Research & Projects" },
    { name: "Tanvi Sharma", role: "Head Of Web Development" },
    { name: "Aastha Anand", role: "Head Of Sponsorships" },
    { name: "Yashika Singh", role: "Head Of Events" },
    { name: "Kanishak Gupta", role: "Head Of Events" },
    { name: "Suraj Kumar", role: "Head Of Logistics" },
    { name: "Tushar Kumar", role: "Head Of Logistics" },
    { name: "Anvesha Vyas", role: "Head Of Design" },
    { name: "Prajna Shetty", role: "Head Of Content" },
    { name: "Shreya Singh", role: "Head Of Content" },
    { name: "Neha Kodali", role: "Head Of Creative Arts" },
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
                src="/assets/Heer.jpeg"
                alt="Siddharth Habbu"
              />
            </div>
            <p className="text-xl font-bold">Siddharth Habbu</p>
            <p className="text-md text-gray-500">Deputy Marketing Secretary</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src="/assets/Akhilesh_V.jpg"
                alt="Akhilesh V"
              />
            </div>
            <p className="text-xl font-bold">Akhilesh V</p>
            <p className="text-md text-gray-500">Deputy Technical Secretary</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src="/assets/Atharv.jpeg"
                alt="Manas Shrivastava"
              />
            </div>
            <p className="text-xl font-bold">Manas Shrivastava</p>
            <p className="text-md text-gray-500">Deputy Operations Secretary</p>
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
