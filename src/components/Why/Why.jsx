
import why1 from "../../assets/why1.png"
import why2 from "../../assets/why2.png"
import why3 from "../../assets/why3.png"
import WhyCard from "./WhyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhyCard2 from "./WhyCard2";


 function Why() {
    const whyText = [
      {
        title: "Why choose Zwilt?",
        description:
          "We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.",
      },
    ];
  
    const steps = [
      {
        image: why1,
        title: "Onboard without the risk.",
        text1: "We pick the best for you to select.",
        text2: "Thousands of vetted candidates in dozens of categories.",
        text3: "Risk-free resource swapping for the best fit.",
        btext: "Learn More",
        hyphenColor: "#50589f", // Hyphen color for the first slider
      },
      {
        image: why2,
        title: "An open book.",
        text1: "Easy and transparent one-to-one chat with candidates.",
        text2: "Simple and convenient payment methods.",
        text3: "Review past ratings.",
        btext: "Learn More",
        hyphenColor: "#ffbe2e", // Hyphen color for the second slider
      },
      {
        image: why3,
        title: "Stay in the loop.",
        text1: "Track your staff activity down to every minute with screenshots.",
        text2: "Comprehensive timesheet data to process payments.",
        text3: "Create projects to organize and assign tasks more effectively.",
        btext: "Learn More",
        hyphenColor: "#c7f4c2", // Hyphen color for the third slider
      },
    ];
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="bg-[#f4f5ff] min-h-screen flex flex-col md:flex-row p-10">
        <div className="w-full md:w-2/5 flex justify-center items-center p-4">
          <WhyCard whyText={whyText} />
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center p-4">
          <Slider {...sliderSettings} className="w-full">
            {steps.map((step, index) => (
              <div key={index}>
                <WhyCard2 steps={step} bg="#FFFFFF" hyphenColor={step.hyphenColor} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  export default Why