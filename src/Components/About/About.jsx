import {  Zoom } from 'react-awesome-reveal';
import proflePic2 from '../../assets/devesh.jpg'
import profleCV from '../../assets/Devesh_Biswas.pdf'


const About = () => {
    return (
        <div id='About'>
            <div className="bg-gray-100 py-6 font-[sans-serif]">
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* <div>
                            <img src={proflePic2} alt="Image" className="rounded-md object-cover w-96 h-[500px]" />
                        </div> */}

                        <Zoom duration={3000}>
                            <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-[#4e0083] to-[#c19ed6] p-5">
                                <img src={proflePic2} className="w-full h-full rounded-full object-cover border-8 border-white" alt="img" />
                            </div>
                        </Zoom>

                        <div>
                            <h2 className="text-5xl font-extrabold  mb-4">About <span className='text-purple-700'>Me</span></h2>
                            
                                <p className="text-gray-700 mb-2 leading-6">
                                    As a front-end developer, I specialize in creating user-facing interfaces that are visually appealing, intuitive, and responsive. My skills include proficiency in HTML, CSS and JavaScript, along with frameworks like React and Tailwindcss. I have experience collaborating with designers and backend developers to ensure seamless integration of UI elements with backend functionalities.
                                </p>
                                <p>
                                    My goal is to create engaging web experiences that not only meet but exceed user expectations. I aim to stay updated with the latest trends and technologies in front-end development to continually enhance my skills and deliver cutting-edge solutions. Ultimately, I strive to contribute to projects that make a positive impact and provide users with a seamless and enjoyable digital experience.
                                </p>
                            

                            <div className="mt-6">
                                {/* <button href="Resume of Devesh Biswas.pdf" className="bg-purple-600 text-sm  p-3 font-semibold rounded-lg text-white">Download CV</button> */}
                                <a href={profleCV} download className="bg-purple-600 text-sm p-3 font-semibold rounded-lg text-white">Download CV</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;