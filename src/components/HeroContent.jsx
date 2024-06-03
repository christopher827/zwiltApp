import goImage from "../assets/p-go.png"
import hHome from "../assets/h-lines.png"
import img1 from "../assets/human.png"
function HeroContent() {
  return (
    <div>
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#202229]  font-black leading-7 md:leading-10">
Finding the right fit 
<span class="inline-block">
            <img
              src={img1}
              alt="head"
              className="h-8 w-auto inline-block mx-2 sm:h-10 md:h-12 lg:h-14 hover:animate-bounce hover:cursor-pointer "
            />
          </span>
has never been easier.<br/>
 </h1>
<p className="mt-5 sm:mt-10 lg:w-10/12 text-[#202229] font-normal text-center text-sm sm:text-lg">With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>
</div>

<div class="flex flex-col sm:flex-row items-center justify-center mx-auto p-4">
          <input
            class="search-input rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202229] outline-none border border-gray-300 focus:outline-none px-4 py-2 w-full sm:w-auto"
            type="search"
            title="Search"
            role="searchbox"
            autoComplete="off"
            spellCheck="false"
            aria-live="polite"
            placeholder="Looking for design |"
          />
          <img
            src={goImage}
            className="h-14 mt-2 sm:mt-0 -ml-2 cursor-pointer"
            alt="goButton"
          />
        </div>

<div className="max-w-[20rem] sm:max-w-2xl pb-2 mx-auto bg-[#F8F8F8] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div className="flex flex-wrap justify-center py-2 space-x-2">
          <button className="z-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-[10px] shadow-sm text-base font-medium text-black bg-[#C7F4C2]/75 hover:bg-[#C7F4C2]">
            IT & Development
          </button>
          <button className="z-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-[10px] shadow-sm text-base font-medium text-black bg-[#D2D2D2]/75 hover:bg-[#D2D2D2]">
            Design and Create
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10 pt-10">
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Python Developer</p>
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#202229]">MERN Stack Developer</p>
            <p className="text-[#959595]">Full Stack Developer</p>
          </div>
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Data Scientist </p>
            <p className="text-[#959595]">Front End Developer</p>
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#959595]">Python Developer</p>
          </div>
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#959595]">Python Developer</p>
            <p className="text-[#959595]">Full Stack Developer</p>
            <p className="text-[#202229]">Explore More</p>
          </div>
        </div>
      </div>

</div>

<div className="">
        <img
          src={hHome}
          alt="Product"
          className="h-50 w-full object-cover sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
        />
        <div class="space-y-4"></div>
      </div>


    </div>  )
}

export default HeroContent
