import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;