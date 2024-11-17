

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-[#4e0083] to-[#796089] font-sans tracking-wide">
                <div className="py-12 px-12 mt-2">
                    <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
                        <div>
                            <a href='javascript:void(0)'><h2 className="text-3xl text-white">Devesh Biswas</h2></a>
                        </div>

                        <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
                            <li><a href="#About" className="text-gray-300 hover:underline text-base">About</a></li>
                            <li><a href="#Skills" className="text-gray-300 hover:underline text-base">Skills</a></li>
                            <li><a href="#Projects" className="text-gray-300 hover:underline text-base">Projects</a></li>
                            <li><a href="#education" className="text-gray-300 hover:underline text-base">Education</a></li>
                            <li><a href="#Contact" className="text-gray-300 hover:underline text-base">Contact</a></li>
                        </ul>
                    </div>

                    <hr className="my-6 border-gray-500" />

                    <p className='text-center text-gray-300 text-base'>&copy; Devesh {new Date().getFullYear()}. <a
                        target='_blank' className="hover:underline mx-1"></a>Developed By Devesh Biswas</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;