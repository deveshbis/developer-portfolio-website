import tourism from '../../assets/projects/tourism.png'
import booknest from '../../assets/projects/booknest.png'
import food from '../../assets/projects/food.png'
import newspaper from '../../assets/projects/newspaper.png'
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
    return (
        <div id='Projects'>

            <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
                <div className="max-md:max-w-lg mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Projects Showcase</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-b from-pink-800 to-pink-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Zoom duration={3000}>
                                <img src={booknest} alt="Blog Post 1" className="w-full h-64 object-cover" />
                            </Zoom>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">BookNest</h3>
                                <p className="text-sm opacity-75">BookNest, an e-commerce website designed specifically for book lovers. This project leverages modern web development technologies to deliver a seamless shopping experience, featuring user-friendly design and essential functionalities for managing a book store.</p>


                                <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">

                                    <div className="flex flex-wrap gap-4  mt-4">

                                        <button type="button" className="flex items-center text-red-600 text-sm bg-red-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Next.js
                                        </button>

                                        <button type="button" className="flex items-center text-blue-600 text-sm bg-blue-50 px-3 py-1.5 tracking-wide rounded-full">

                                            MongoDB
                                        </button>

                                        <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Node.js
                                        </button>

                                    </div>

                                    <div className="flex flex-wrap gap-4">

                                        {/* <button type="button" className="flex items-center text-pink-600 text-sm bg-pink-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            MongoDb
                                        </button> */}

                                        {/* <button type="button" className="flex items-center text-cyan-600 text-sm bg-cyan-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            Firebase
                                        </button>

                                        <button type="button" className="flex items-center text-purple-600 text-sm bg-purple-50 px-3 py-1.5 tracking-wide rounded-lg">
                                            Express.js
                                        </button> */}

                                    </div>

                                </div>

                                <div className='flex justify-between'>
                                    <a href="https://booknest-self.vercel.app" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Live Link</a>
                                    <a href="https://github.com/azaaaaaaaaad/booknest" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Client Link</a>
                                    <a href="https://github.com/azaaaaaaaaad/booknest" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Server Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Zoom duration={3000}>
                                <img src={tourism} alt="Blog Post 1" className="w-full h-64 object-cover" />
                            </Zoom>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">tourism-management</h3>
                                <p className="text-sm opacity-75">Devs Tourism is a dynamic and responsive website showcasing tourist spots across Southeast Asia. It features user-friendly navigation, secure authentication, and detailed spot pages for engaging travel exploration.</p>


                                <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">

                                    <div className="flex flex-wrap gap-4  mt-4">

                                        <button type="button" className="flex items-center text-red-600 text-sm bg-red-50 px-3 py-1.5 tracking-wide rounded-full">

                                            React.js
                                        </button>

                                        <button type="button" className="flex items-center text-blue-600 text-sm bg-blue-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Tailwindcss
                                        </button>

                                        <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Node.js
                                        </button>

                                    </div>

                                    <div className="flex flex-wrap gap-4">

                                        <button type="button" className="flex items-center text-pink-600 text-sm bg-pink-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            MongoDb
                                        </button>

                                        <button type="button" className="flex items-center text-cyan-600 text-sm bg-cyan-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            Firebase
                                        </button>

                                        <button type="button" className="flex items-center text-purple-600 text-sm bg-purple-50 px-3 py-1.5 tracking-wide rounded-lg">
                                            Express.js
                                        </button>

                                    </div>

                                </div>

                                <div className='flex justify-between'>
                                    <a href="https://tourism-management-33d7c.web.app" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Live Link</a>
                                    <a href="https://github.com/deveshbis/tourism-management-client-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Client Link</a>
                                    <a href="https://github.com/deveshbis/tourism-management-server-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Server Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Zoom duration={3000}>
                                <img src={food} alt="Blog Post 2" className="w-full h-64 object-cover" />
                            </Zoom>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">food-management</h3>
                                <p className="text-sm opacity-75">Food Master is a dynamic web app offering authentication, CRUD operations for food items, and enhanced user experience features.It features user-friendly navigation, secure authentication.</p>
                                <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">

                                    <div className="flex flex-wrap gap-4  mt-4">

                                        <button type="button" className="flex items-center text-red-600 text-sm bg-red-50 px-3 py-1.5 tracking-wide rounded-full">

                                            React.js
                                        </button>

                                        <button type="button" className="flex items-center text-blue-600 text-sm bg-blue-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Tailwindcss
                                        </button>

                                        <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Node.js
                                        </button>

                                    </div>

                                    <div className="flex flex-wrap gap-4">

                                        <button type="button" className="flex items-center text-pink-600 text-sm bg-pink-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            MongoDb
                                        </button>

                                        <button type="button" className="flex items-center text-cyan-600 text-sm bg-cyan-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            Firebase
                                        </button>

                                        <button type="button" className="flex items-center text-purple-600 text-sm bg-purple-50 px-3 py-1.5 tracking-wide rounded-lg">
                                            Express.js
                                        </button>

                                    </div>

                                </div>

                                <div className='flex justify-between'>
                                    <a href="https://foods-master-487ce.web.app" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Live Link</a>
                                    <a href="https://github.com/deveshbis/food-management-system-client-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Client Link</a>
                                    <a href="https://github.com/deveshbis/food-management-server-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Server Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Zoom duration={3000}>
                                <img src={newspaper} alt="Blog Post 3" className="w-full h-64 object-cover" />
                            </Zoom>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Online-Newspaper</h3>
                                <p className="text-sm opacity-75">Build a dynamic Newspaper website using React, Firebase, Node.js, MongoDB for news aggregation and user interaction.It features user-friendly navigation, secure authentication.</p>
                                <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">

                                    <div className="flex flex-wrap gap-4  mt-4">

                                        <button type="button" className="flex items-center text-red-600 text-sm bg-red-50 px-3 py-1.5 tracking-wide rounded-full">

                                            React.js
                                        </button>

                                        <button type="button" className="flex items-center text-blue-600 text-sm bg-blue-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Tailwindcss
                                        </button>

                                        <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">

                                            Node.js
                                        </button>

                                    </div>

                                    <div className="flex flex-wrap gap-4">

                                        <button type="button" className="flex items-center text-pink-600 text-sm bg-pink-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            MongoDb
                                        </button>

                                        <button type="button" className="flex items-center text-cyan-600 text-sm bg-cyan-50 px-3 py-1.5 tracking-wide rounded-lg">

                                            Firebase
                                        </button>

                                        <button type="button" className="flex items-center text-purple-600 text-sm bg-purple-50 px-3 py-1.5 tracking-wide rounded-lg">
                                            Express.js
                                        </button>

                                    </div>

                                </div>

                                <div className='flex justify-between'>
                                    <a href="https://newspaper-website-1931a.web.app" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Live Link</a>
                                    <a href="https://github.com/deveshbis/online-newspaper-client-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Client Link</a>
                                    <a href="https://github.com/deveshbis/online-newspaper-server-site" target='_blank' className="mt-4 inline-block text-blue-200 text-sm hover:underline">Code Server Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;