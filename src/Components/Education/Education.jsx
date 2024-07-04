

const Education = () => {
    return (
        <div id="education">
            <div className="max-w-5xl mx-auto text-[#333] font-[sans-serif] my-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-center mb-4">Education</h2>
                    <p className="text-sm">Education is the foundation for knowledge and skills, empowering individuals to achieve personal growth and contribute to society.</p>
                </div>
                <div className="mt-16">
                    <div className="grid md:grid-cols-2 items-center gap-16">

                        <div className="p-5">
                            <h3 className="text-2xl font-extrabold mb-2">Bachelor of Computer Science and Engineering </h3>
                            <p className="text-xl font-bold">Port City International University</p>
                            <p>Passing Year : 2021</p>
                            <p>Duration : 4 years</p>
                            <p>Result CGPA 2.97 (out of scale 4)</p>

                        </div>
                        <div>
                            <img src="https://readymadeui.com/image-1.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>

                        <div className="p-5">
                            <h3 className="text-2xl font-extrabold mb-2">Web Development Course</h3>
                            <p className="text-xl font-bold">Programming Hero</p>
                            <p>Duration : 6 Month</p>
                            <p>Year : 2024</p>
                        </div>
                        <div>
                            <img src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;