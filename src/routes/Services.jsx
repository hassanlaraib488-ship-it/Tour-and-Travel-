import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/5.jpg";
import Footer from "../components/Footer"
import Trip from "../components/Trip";


function Service (){
    return(
        <>
        <Navbar />
         <Hero
            cName="hero-about"
            heroImg={AboutImg}
            title="Services"
            btnClass="hide"
            />

            <Trip/>
            <Footer/>
        </>
    )
}


export default Service