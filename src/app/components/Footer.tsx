export default function Footer() {

    return(
        <div className="relative h-full ">
            <footer className="absolute bottom-0 h-64 w-full outline bg-blue/25">
        <div className="hidden lg:flex lg:mt-6 lg:mx-auto lg:items-center lg:grid lg:grid-cols-5 lg:gap-4 lg:w-4/5 lg:px-10 lg:py-5">

            <div className="grid grid-rows-3">
            <div className="justify-left text-2xl flex font-semibold text-black">songcharts</div>
            <div className="justify-left text-sm flex font-thin text-black"> ©2023 (just kidding)</div>
            <div className="justify-left text-sm flex font-thin text-black"> no copyright</div>
            <div className="justify-left text-sm flex font-thin text-black"> its chill </div>
            </div>

            <div className="grid grid-rows-3">
            <div className="justify-left text-2xl flex font-semibold  text-black">technology</div>
            <div className="justify-left text-sm flex font-thin text-black"> technologies.... </div>
            <div className="justify-left text-sm flex font-thin text-black"> idk what </div>
            <div className="justify-left text-sm flex font-thin text-black"> to put.. </div>
            </div>

            <div className="grid grid-rows-3">
            <div className="justify-left text-2xl relative font-semibold text-black">info</div>
            <a href="#" className="justify-left text-sm flex font-thin text-black">FAQ</a>
            <a href="#" className="justify-left text-sm flex font-thin  text-black">Development status</a>
            <a href="#" className="justify-left text-sm flex font-thin text-black">Submissions</a>
            </div>

            <div className="grid grid-rows-3">
            <div className="justify-left text-2xl flex font-semibold  text-black">Policy</div>
            <a href="#" className="justify-left text-sm flex font-thin text-black">Database standards</a>
            <a href="#" className="justify-left text-sm flex font-thin  text-black">Privacy</a>
            <a href="#" className="justify-left text-sm flex font-thin text-black">Terms of service</a>
            </div>

            <div className="grid grid-rows-3">
            <div className="justify-left text-2xl flex font-semibold text-black">Contact me!</div>
            <a href="#" className="justify-left text-sm flex font-thin text-black">Github</a>
            <a href="#" className="justify-left text-sm flex font-thin  text-black">Personal website</a>
            <a href="#" className="justify-left text-sm flex font-thin text-black">Linkedin</a>
            </div>
            
        </div>
        <div className="flex mx-auto items-center mt-6 flex grid grid-cols-2 lg:hidden">
        <div className="flex mx-auto items-center grid grid-rows-5 gap-4 w-4/5  px-10 sm:auto lg:hidden ">
        <a href="#" className="justify-left text-sm flex font-thin text-black">FAQ</a>
        <a href="#" className="justify-left text-sm flex font-thin  text-black">Development status</a>
        <a href="#" className="justify-left text-sm flex font-thin text-black">Submissions</a>
        <a href="#" className="justify-left text-sm flex font-thin text-black">Database standards</a>
        <a href="#" className="justify-left text-sm flex font-thin  text-black">Privacy</a>
           
        </div>
        <div className="flex mx-auto items-center grid grid-rows-5 gap-4 w-4/5  px-10 sm:auto lg:hidden ">
        <a href="#" className="justify-left text-sm flex font-thin text-black">Terms of service</a>
        <a href="#" className="justify-left text-sm flex font-thin text-black">Github</a>
        <a href="#" className="justify-left text-sm flex font-thin  text-black">Personal website</a>
        <a href="#" className="justify-left text-sm flex font-thin text-black">Linkedin</a>
        </div>
        </div>
        
        </footer>
        </div>
    )
}
