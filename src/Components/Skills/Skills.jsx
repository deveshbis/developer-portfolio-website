import html from '../../assets/skills/html-5.png'
import css from '../../assets/skills/css-3.png'
import tailwindcss from '../../assets/skills/tailwind.png'
import javaScript from '../../assets/skills/js.png'
import react from '../../assets/skills/react.png'
import firebase from '../../assets/skills/firebase.png'
import nodejs from '../../assets/skills/node-js.png'
import expressjs from '../../assets/skills/express.png'
import mongoDB from '../../assets/skills/mongoDB.webp'
import skillsBanner from '../../assets/skills/skillBaner.webp'

const Skills = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold sm:text-4xl text-center mt-10">Skills</h2>
            <section>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Technologies that I know</h2>

                            <img
                                alt=""
                                src={skillsBanner}
                                className="h-96 w-96 object-cover sm:h-full mt-20"
                            /> 
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={html} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">HTML</h2>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={css} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">CSS</h2>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={tailwindcss} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">Tailwind CSS</h2>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={javaScript} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">JavaScript</h2>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={react} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">React JS</h2>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={firebase} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">Firebase </h2>
                            </a>
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={nodejs} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">Node JS</h2>
                            </a>
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={expressjs} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">Express JS </h2>
                            </a>
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img src={mongoDB} alt="" />
                                </span>
                                <h2 className="mt-2 font-bold">MongoDB </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;