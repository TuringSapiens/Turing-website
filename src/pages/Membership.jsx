import './Membership.css';


export default function Membership() {
    return (
        <>

            <div class="w-screen min-h-screen bg-gradient p-12 ">
                <div className='m-10'>
                    <h1 className='py-10 lg:text-6xl text-xl text-white font-bold text-center'> WHY JOIN US</h1>

                    <div class="gap-5 grid lg:grid-cols-4 grid-cols-2 ">

                        <div class="p-5 rounded-2xl bg-gray-300 hover:bg-green-500 items-center flex flex-col space-y-4 transition-all cursor-pointer relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-green-500 group-hover:text-white feather feather-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                            <h2 class="text-gray-800 text-xl group-hover:text-white  font-medium">Contests & Challenges</h2>

                            <p class="text-lg text-gray-700 group-hover:text-white text-center">Organize online contests, challenges, or competitions related to your club's interests</p>
                            
                        </div>

                        <div class="p-5 rounded-2xl bg-gray-300 hover:bg-green-500 items-center flex flex-col space-y-4 transition-all cursor-pointer relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-green-500 group-hover:text-white feather feather-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                            <h2 class="text-gray-800 text-xl group-hover:text-white  font-medium">Recognition & Awards</h2>
                            
                            <p class="text-lg text-gray-700 group-hover:text-white text-center"> Recognize outstanding members or achievements through awards, badges, or certificates.</p>
                            
                        </div>


                        <div class="p-5 rounded-2xl bg-gray-300 hover:bg-green-500 items-center flex flex-col space-y-4 transition-all cursor-pointer relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-green-500 group-hover:text-white feather feather-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                            <h2 class="text-gray-800 text-xl group-hover:text-white  font-medium">Resources & Downloads</h2>
                            
                            <p class="text-lg text-gray-700 group-hover:text-white text-center">Offer downloadable resources, templates, or guides that are valuable to your club's niche.</p>
                            
                        </div>

                        <div class="p-5 rounded-2xl bg-gray-300 hover:bg-green-500 items-center flex flex-col space-y-4 transition-all cursor-pointer relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 text-green-500 group-hover:text-white feather feather-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                            <h2 class="text-gray-800 text-xl group-hover:text-white  font-medium">Mentorship Programs</h2>
                            
                            <p class="text-lg text-gray-700 group-hover:text-white text-center">Facilitate mentorship or peer-to-peer support programs within the club's website</p>
                            
                        </div>

                    </div>
                </div>
            </div>


            {/* <div class="min-h-screen bg-[#09070b] flex flex-col items-center justify-center">
                <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
                    Coming Soon
                </h1>
                <p class="text-white text-lg mb-8">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
            </div> */}




        </>


    )
}