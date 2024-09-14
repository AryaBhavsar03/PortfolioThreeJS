import React from 'react'

const Skills = () => {
    return (
        <section className="c-space my-20">
            <p className="head-text">My Skills</p>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 mt-12 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="flex justify-center items-center">
                            <img src="/assets/Front-End-Logo.png" alt="Front-End"
                                 className="w-full sm:h-[276px] h-fit object-contain"
                                 style={{filter: 'invert(100%)', width: '50px', height: '50px'}}/>
                        </div>
                        <div>
                            <p className="grid-headtext text-center">Front-End</p>
                            <p className="grid-subtext">
                                <span className="block text-left">▸ HTML5</span>
                                <span className="block text-left">▸ CSS</span>
                                <span className="block text-left">▸ Tailwind CSS</span>
                                <span className="block text-left">▸ JavaScript</span>
                                <span className="block text-left">▸ Python</span>
                                <span className="block text-left">▸ Java</span>
                                <span className="block text-left">▸ TypeScript</span>
                                <span className="block text-left">▸ C#</span>
                                <span className="block text-left">▸ C++</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="flex justify-center items-center">
                            <img src="/assets/Back-End-Logo.png" alt="Back-End"
                                 className="w-full sm:h-[276px] h-fit object-contain"
                                 style={{filter: 'invert(100%)', width: '50px', height: '50px'}}/>
                        </div>
                        <div>
                            <p className="grid-headtext text-center">Back-End</p>
                            <p className="grid-subtext">
                                <span className="block text-left">▸ Angular</span>
                                <span className="block text-left">▸ React</span>
                                <span className="block text-left">▸ Three.JS</span>
                                <span className="block text-left">▸ Node.JS</span>
                                <span className="block text-left">▸ MySQL</span>
                                <span className="block text-left">▸ ASP.Net</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="flex justify-center items-center">
                            <img src="/assets/Other-Logo.png" alt="Other"
                                 className="w-full sm:h-[276px] h-fit object-contain"
                                 style={{filter: 'invert(100%)', width: '50px', height: '50px'}}/>
                        </div>
                        <div>
                            <p className="grid-headtext text-center">Other</p>
                            <p className="grid-subtext">
                                <span className="block text-left">▸ GitHub</span>
                                <span className="block text-left">▸ GitLabs</span>
                                <span className="block text-left">▸ AWS</span>
                                <span className="block text-left">▸ Animations</span>
                                <span className="block text-left">▸ Multiple IDEs</span>
                                <span className="block text-left">▸ Debugging</span>
                                <span className="block text-left">▸ Version Control</span>
                                <span className="block text-left">▸ HTTP and REST</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills