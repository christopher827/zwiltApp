import Footer from "../components/Footer"
import Hero from "../components/Hero"
import GoodHands from "../components/GoodHands"
import FAQ from "../components/FAQ"
import StartYourJorney from "../components/StartYourJourney/StartYourJourney"
import Why from "../components/Why/Why"
import Testimony from "../components/Testimony"
import MarketPlaceTalent from "../components/MarketPlaceTalent"


function Home() {
    return(
        <>
<Hero/>
<MarketPlaceTalent/>
<Testimony/>
<GoodHands/>
<StartYourJorney/>
<Why/>
<FAQ/>
<Footer/>
        </>
    )
}
export default Home