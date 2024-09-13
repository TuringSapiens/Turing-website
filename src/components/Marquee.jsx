export default function Marquee() {
    return (

        <>

        
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gradient-to-r from-stone-500 to-stone-700 opacity-40 py-10">

                <div class="pointer-events-none relative flex  x-overflow-hidden">

                    <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around ">
                        <img class="w-52 h-28 rounded-md  shadow-md" src="/assets/microsoft.jpg" alt="" />
                        <img class="w-52 h-28 rounded-md  shadow-md" src="/assets/alexa.png" alt="" />
                    </div>

                    <div class="flex min-w-full shrink-0 animate-marquee items-center justify-around ">
                        <img class="w-52 h-28 rounded-md  shadow-md" src="/assets/houseltt.png" alt="" />
                        <img class="w-52 h-28 rounded-md  shadow-md" src="/assets/yocket.png" alt="" />
                    </div>
                </div>
            </div>
         
        </>


    )
}