import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImg from "../assets/home.png";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home (){
    return(
        <>
            <Navbar />  
            <Hero
            cName="hero-home"
            heroImg={homeImg}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination."
            btnText="Tour Plans"
            url="/"
            btnClass="show"
            />
            <Destination />
            <Trip/>
            <Footer/>
        </>
    )
}


export default Home