

export default function Teams() {
    const coreTeamMembers = [
      { name: "Dhruv Dave", role: "Head Of Promotions" },
      { name: "Sanskriti Mandal", role: "Head Of Promotions" },
      { name: "Manmeet Kaur Anand", role: "Head Of Promotions" },
      { name: "Aayushi Chhabra", role: "Head Of Promotions" },
      { name: "Harshita Chopra", role: "Head Of Promotions" },
      { name: "Harshada Chandel", role: "Head of Design" },
      { name: "Toshani Gupta", role: "Head of Social Media" },
      { name: "Dhvani Baid", role: "Head of Social Media" },
      { name: "Aryan Garv", role: "Head of Content" },
      { name: "Prisha Anand", role: "Head of Content" },
      { name: "Anoushka Vats", role: "Head of Content" },
      { name: "Paras Jain", role: "Head Of Finance & Registration" },
      { name: "Manvi Bindal", role: "Head Of Finance & Registration" },
      { name: "Kush Mathur", role: "Head Of Logistics" },
      { name: "Himank", role: "Head Of Logistics" },
      { name: "Jai Arora", role: "Head Of Logistics" },
      { name: "Paarth Chanana", role: "Head Of Logistics" },
      { name: "Abhimanyu Saxena", role: "Head Of Logistics" },
      { name: "Siddhant Vashishtha", role: "Head Of Events" },
      { name: "Lahari R Bavimane", role: "Head Of Events" },
      { name: "Manas Sharma", role: "Head Of Events" },
      { name: "Ishani Agarwal", role: "Head Of Events" },
      { name: "Aayush Sharma", role: "Head Of Projects" },
      { name: "Vidhi Omar", role: "Head Of Projects" },
      { name: "Priyanshu Jain", role: "Head Of Web Development" },
      { name: "Ayush D", role: "Head Of Web Development" },
      { name: "Ishaan Sharma", role: "Head Of Web Development" }
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
                  alt="Heer Sharma"
                />
              </div>
              <p className="text-xl font-bold">Heer Sharma</p>
              <p className="text-md text-gray-500">Deputy Secretary</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
                <img
                  className="object-cover w-full h-full"
                  src="/assets/Salil Mishra.jpeg"
                  alt="Salil Mishra"
                />
              </div>
              <p className="text-xl font-bold">Salil Mishra</p>
              <p className="text-md text-gray-500">Deputy Technical Secretary</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden shadow-lg">
                <img
                  className="object-cover w-full h-full"
                  src="/assets/Atharv.jpeg"
                  alt="Atharav R Gachchi"
                />
              </div>
              <p className="text-xl font-bold">Atharav R Gachchi</p>
              <p className="text-md text-gray-500">Deputy Operation Manager</p>
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
  