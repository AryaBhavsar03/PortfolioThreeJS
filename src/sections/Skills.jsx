import React from 'react';

const skills = [
    // Front-End Skills
    { name: 'HTML5', logo: '/assets/HTML_Logo.png', category: 'Front-End' },
    { name: 'CSS', logo: '/assets/CSS_Logo.png', category: 'Front-End' },
    { name: 'Tailwind CSS', logo: '/assets/tailwindcss.png', category: 'Front-End' },
    { name: 'Bootstrap', logo: '/assets/Bootstrap_logo.png', category: 'Front-End' },
    { name: 'JavaScript', logo: '/assets/JavaScript_Logo.png', category: 'Front-End' },
    { name: 'TypeScript', logo: '/assets/typescript.png', category: 'Front-End' },
    { name: 'Angular', logo: '/assets/Angular_full_color_logo.svg', category: 'Front-End' },
    { name: 'React', logo: '/assets/react.svg', category: 'Front-End' },
    { name: 'Vue.JS', logo: '/assets/Vue.js_Logo.png', category: 'Front-End' },
    { name: 'Three.JS', logo: '/assets/ThreeJS.png', category: 'Front-End' },

    // Back-End Skills
    { name: 'Node.JS', logo: '/assets/NodeJS.png', category: 'Back-End' },
    { name: 'Next.JS', logo: '/assets/next-js.svg', category: 'Back-End' },
    { name: 'Python', logo: '/assets/Python.png', category: 'Back-End' },
    { name: 'Java', logo: '/assets/java-logo-1.png', category: 'Back-End' },
    { name: 'PHP', logo: '/assets/PHP.png', category: 'Back-End' },
    { name: 'C#', logo: '/assets/CSharp2.png', category: 'Back-End' },
    { name: 'C++', logo: '/assets/Cplusplus.png', category: 'Back-End' },
    { name: 'MySQL', logo: '/assets/MySQL.png', category: 'Back-End' },
    { name: 'MongoDB', logo: '/assets/MongoDB.png', category: 'Back-End' },
    { name: 'ASP.Net Core', logo: '/assets/NET_Core_Logo.svg', category: 'Back-End' },

    // Other Skills
    { name: 'azure', logo: '/assets/azure.svg', category: 'Other' },
    { name: 'GitHub', logo: '/assets/github.svg', category: 'Other' },
    { name: 'GitLabs', logo: '/assets/gitlab-logo-500.svg', category: 'Other' },
    { name: 'AWS', logo: '/assets/Amazon_Web_Services_Logo.svg.png', category: 'Other' },
    { name: 'Unreal Engine', logo: '/assets/UE5.png', category: 'Other' },
    { name: 'Debugging', logo: '/assets/Debug.png', category: 'Other' },
    { name: 'Version Control', logo: '/assets/VersionControl.svg', category: 'Other' },
    { name: 'REST API', logo: '/assets/rest-api-icon.png', category: 'Other' },
];

const Skills = () => {
    const skillCircleStyle = {
        width: '136px',
        height: '136px',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.5s ease-in-out',
        boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
    };

    const skillNameStyle = {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -40%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    };

    const skillLogoStyle = {
        display: 'block',
        width: '70px',
        height: '70px',
        transition: 'opacity 0.5s ease-in-out',
    };

    return (
        <section className="c-space my-20">
            <p className="head-text">My Skills</p>
            <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-5 h-full">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="grid-container"
                        style={skillCircleStyle}
                        onMouseEnter={(e) => {
                            const skillName = e.currentTarget.querySelector('.skill-name');
                            skillName.style.opacity = '1';
                            skillName.style.transform = 'translate(-50%, -50%)';
                            e.currentTarget.querySelector('.skill-logo').style.opacity = '0';
                            e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.7)';
                        }}
                        onMouseLeave={(e) => {
                            const skillName = e.currentTarget.querySelector('.skill-name');
                            skillName.style.opacity = '0';
                            skillName.style.transform = 'translate(-50%, -40%)';
                            e.currentTarget.querySelector('.skill-logo').style.opacity = '1';
                            e.currentTarget.style.boxShadow = '0 0 0 0 rgba(255, 255, 255, 0)';
                        }}
                    >
                        <div className="skill-logo" style={skillLogoStyle}>
                            <img src={skill.logo} alt={skill.name} className="object-contain w-full h-full" />
                        </div>
                        <div className="skill-name" style={skillNameStyle}>{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;