export default function Aboutus() {
    return (

        <>
            <div id='about-section' className='flex  w-full h-full items-center justify-center ' >
                <div data-aos="fade-up">
                    <div className=" lg:grid grid-cols-2 w-full place-items-center justify-center overflow-x-hidden">

                        <div className='  flex py-10 w-full h-full items-center justify-center'>
                            <img src='/assets/aboutus.gif' alt="Image"
                                className="h-fit w-fit  items-center justify-center" />
                        </div>


                        <div className=" ">
                            <div className=" h-full w-full items-center justify-center  back ">
                                <h1 className="text-4xl font-bold mb-4 text-center pt-2">ABOUT US</h1>
                            </div>
                            <h2 className="text-lg text-gray-300 lg:mr-10 lg:text-center text-center px-2">Introducing the "Turing Sapiens Tech
                                Club" at Manipal University Jaipur!
                                We're committed to enhancing
                                students' tech skills through
                                mentorship and industry collaboration,
                                offering comprehensive internship
                                opportunities.
                                Our regular Hackathons bridge theory
                                and practice, ensuring proficiency in
                                industry tools. Additionally, Bootcamps
                                and Seminars with professionals
                                provide networking and career
                                guidance. Join us to unlock
                                technology's potential at Manipal
                                University Jaipur. Welcome to the
                                Turing Sapiens Tech Club, where
                                innovation meets aspiration</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}