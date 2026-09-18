import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.png";
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm";


function Contact (){
    return(
        <>
        <Navbar />
         <Hero
            cName="hero-about"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}


export default Contact