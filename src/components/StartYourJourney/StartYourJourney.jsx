import jl1 from "../../assets/jl1.png";
import jr11 from "../../assets/j1.png";
import jl2 from "../../assets/jl2.png";
import jr12 from "../../assets/j2.png";
import jl3 from "../../assets/jl3.png";
import jr13 from "../../assets/j3.png";
import StartYourJourneyCards from "./StartYourJourneyCards";

 function StartYourJorney() {
    const steps = [
      {
        limage: jl1,
        rimage: jr11,
        title: "Find your next star performer.",
        description:
        "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
        btext: "Join Now",
      },
      {
        limage: jl2,
        rimage: jr12,
        title: "Evaluate to your heart’s content.",
        description:
          "Assess the candidate through work history, transparent tests and video interviews.",
          btext: "Browse More",
      },
      {
        limage: jl3,
        rimage: jr13,
        title: "Start building your team.",
        description:
          "Onboard your candidate right away and start creating the next big thing.",
          btext: "Join Now",
  
      },
    ];
  
    return (
      <div className="bg-[#ffffff] min-h-screen flex flex-col p-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Start your journey today.
        </h2>
        <StartYourJourneyCards steps={steps[0]} bg="#EDEFFF" />
        <StartYourJourneyCards steps={steps[1]} bg="#fff7e1" />
        <StartYourJourneyCards steps={steps[2]} bg="#f3f3f3" />
      </div>
    );
  }
  export default StartYourJorney