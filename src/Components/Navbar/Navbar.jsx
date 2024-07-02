

const Navbar = () => {
   

    return (
        <header className="bg-white shadow-lg">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <h2 className="text-3xl">Devesh Biswas</h2>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-lg font-bold">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Skills </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Work History </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Education </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
