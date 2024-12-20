
import { Fade,} from 'react-awesome-reveal';
import proflePic from '../../assets/devesh.jpg';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: [' Devesh Biswas'],
        loop: {},

    })
    return (

        <div className='lg:h-screen'>
            <div className="bg-gray-50 font-[sans-serif] relative w-full h-[600px] mt-2 shadow-lg shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
                <div className="grid sm:grid-cols-2 max-sm:gap-6">
                    <div className="text-center p-6 flex flex-col justify-center items-center">
                        <h3 className="font-extrabold text-5xl text-[#4e0083] leading-tight">
                            <span className="text-gray-800">Hi, I am <br /></span> {text}
                            <Cursor cursorColor='purple' />
                        </h3>
                        <h6 className="text-lg text-gray-800 mt-4">
                            <Fade duration={3000}>
                                Hello! 👋 I am a dedicated Front-End Web Developer. I specialize in crafting engaging and responsive web experiences, blending creativity with technical proficiency to deliver seamless interfaces that captivate and delight users.
                            </Fade>
                        </h6>
                    </div>

                    <div className="flex justify-end items-center p-2 bg-gradient-to-b from-[#4e0083] to-[#796089] rounded-bl-[230px] w-full lg:h-[500px] h-full">
                        {/* <Zoom duration={3000}>
                            <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-[#4e0083] to-[#c19ed6] p-5">
                                <img src={proflePic} className="w-full h-full rounded-full object-cover border-8 border-white" alt="img" />
                            </div>
                        </Zoom> */}
                        <img src={proflePic} className="w-1/2 h-full object-cover rounded-lg border-8 border-white" alt="img" />
                    </div>
                </div>

                <div className="absolute lg:-top-[5px] lg:-left-[5px] -top-[50px] -left-[50px] lg:w-48 lg:h-48 w-28 h-28  rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
                <div className="absolute -top-10 -left-10 lg:w-48 lg:h-48 w-28 h-28 rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
            </div>
        </div>
    );
};

export default Banner;
