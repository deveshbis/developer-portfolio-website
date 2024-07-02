const Banner = () => {
    return (
        <div>
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                
                <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center">
                    <div className="max-w-xl sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            HI, I am a <br />
                            <span className="text-4xl">Front-End Developer</span>
                            
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                        Hello! 👋 I am Devesh Biswas, a dedicated Front-End Web Developer. I specialize in crafting engaging and responsive web experiences, blending creativity with technical proficiency to deliver seamless interfaces that captivate and delight users.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="hidden sm:flex justify-evenly items-center">
                    <img
                        alt=""
                        src="https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"
                        className="h-48 w-96 object-cover sm:h-full mt-20"
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;
