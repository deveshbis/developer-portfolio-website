import tourism from '../../assets/projects/tourism.png'
import food from '../../assets/projects/food.png'
import newspaper from '../../assets/projects/newspaper.png'

const Projects = () => {
    return (
        <div>
            <section id="portfolio" className="portfolio-section py-5 px-4 ">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Projects Showcase</h2>
                        <p className="text-lg text-indigo-500 font-semibold">Discover our latest projects</p>
                    </div>
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                            <a href="/project-1">
                                <img className="w-full h-60 object-cover" src={tourism} alt="Project 1"/>
                                    <div
                                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                                    </div>
                                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Tourism Management System</h3>
                                        <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Web development</span>
                                    </div>
                            </a>
                        </div>
                        <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                            <a href="/project-2">
                                <img className="w-full h-60 object-cover" src={food} alt="Project 1"/>
                                    <div
                                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                                    </div>
                                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Master Food Management Project</h3>
                                        <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Web development</span>
                                    </div>
                            </a>
                        </div>
                        <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                            <a href="/project-3">
                                <img className="w-full h-60 object-cover" src={newspaper} alt="Project 1"/>
                                    <div
                                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                                    </div>
                                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Online Newspaper Project</h3>
                                        <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Web development</span>
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;