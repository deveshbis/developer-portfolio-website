import html from '../../assets/skills/html-5.png'
import css from '../../assets/skills/css-3.png'
import tailwindcss from '../../assets/skills/tailwind.png'
import javaScript from '../../assets/skills/js.png'
import react from '../../assets/skills/react.png'
import firebase from '../../assets/skills/firebase.png'
import nodejs from '../../assets/skills/node-js.png'
import mongoDB from '../../assets/skills/mongoDB.webp'
import next from '../../assets/skills//next.svg'
import nuxt from '../../assets/skills/nxut.png'
import laravel from '../../assets/skills/laravel.png'
import mysql from '../../assets/skills/mysql.png'


const Skills = () => {
    return (
        <div id='Skills'>
            <div className="font-[sans-serif] bg-gray-50 p-4">
            <div className="max-w-5xl max-sm:max-w-sm mx-auto">
                <h2 className="text-gray-800 text-4xl font-extrabold text-center">Technologies Skills</h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={html} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">HTML</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={css} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">CSS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={tailwindcss} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Tailwind CSS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={javaScript} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Java Script</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={react} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">React JS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={next} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Next JS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={nuxt} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Nuxt JS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={firebase} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Firebase</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={nodejs} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Node JS</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={laravel} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Laravel</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={mongoDB} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">MongoDB</h4>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <img src={mysql} className="w-36 h-36 rounded-full inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">MySQL</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;