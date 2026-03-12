export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Experience',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Software Developer - Sunken Services, LLC',
        desc: 'Worked within a software development team and was responsible for the entire development lifecycle: frontend interface design, backend logic and API development/integration, system debugging, database integration, user authentication, and deployment.',
        subdesc: 'I improved system performance by implementing asynchronous task handling to offload intensive operations like I/O and database access. I maintained and optimized an 8-year-old legacy codebase, ensuring stability while updating outdated APIs and frameworks. I introduced modern practices and tools to enhance performance and streamline code efficiency. I refactored features into an event-driven architecture, allowing modules to respond independently to real-time events, improving responsiveness and debugging. Additionally, I led a QA team to ensure system stability, reducing bug resolution time from 96 hours to 48 hours.',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/SunkenServicesLLC.jpg',
        logoStyle: {
            backgroundColor: '#1A1A1A',
            border: '0.2px solid #2A2A2A',
            boxShadow: '0px 0px 60px 0px #3A3A3A4D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: 'assets/java-logo-1.png',
            },
            {
                id: 2,
                name: 'Database',
                path: 'assets/databases.png',
            },
            {
                id: 3,
                name: 'Gitlab',
                path: 'assets/gitlab-logo-500.svg',
            },
        ],
    },
    {
        title: 'Security Dashboard - Real-time Threat Monitoring System',
        desc: 'A modern, responsive security dashboard built with React and TypeScript, featuring real-time threat monitoring, interactive 3D visualizations, and comprehensive admin management capabilities. Designed for security professionals who need to monitor global cyber threats 24/7.',
        subdesc: 'Built using React 18, TypeScript, and Adonis.JS with a focus on user experience and visual appeal. Features include real-time security metrics with animated counters, interactive 3D globe showing global attack patterns using Globe.GL and Three.js, role-based authentication (User/Admin), mobile-responsive design with glassmorphism effects, and comprehensive admin panel for live data management. The dashboard monitors malware threats across PC/mobile/server, email security (spam, malware, phishing), multi-factor authentication usage, failed login attempts, and global attack statistics by country. Implemented MVC architecture with TypeScript interfaces as models, React components as views, and service classes as controllers. The system uses advanced CSS animations, micro-interactions, and a dark theme optimized for extended monitoring sessions.',
        href: 'https://moonlit-fox-821925.netlify.app',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/shield-logo.png',
        logoStyle: {
            backgroundColor: '#0F0F23',
            border: '0.2px solid #1E1E3F',
            boxShadow: '0px 0px 60px 0px #3B82F64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Three.js',
                path: 'assets/ThreeJS.png',
            },
            {
                id: 5,
                name: 'Adonis.js',
                path: 'assets/adonisjs.png',
            },
        ],
    },
    {
        title: 'Java Developer',
        desc: 'Minecraft is a sandbox video game developed by Mojang Studios. The game allows players to build servers with custom plugins and mods. I work as a Java game developer for one of the most popular skyblock servers in the game.',
        subdesc: 'I developed custom plugins and mods for the server using Java. The plugins added new features and mechanics to the game, enhancing the player experience. I also optimized the server performance and fixed bugs to ensure smooth gameplay for all players. I collaborated with other developers and server staff to implement new ideas and features, contributing to the growth and success of the server.' +
            ' The server has a large player base and is known for its unique gameplay and features. My work as a Java game developer also included managing databases, creating custom commands, and implementing anti-cheat systems. I gained valuable experience in game development and server management, honing my skills in Java programming and software development.',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/Hellbounds_Logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: 'assets/java-logo-1.png',
            },
            {
                id: 2,
                name: 'Database',
                path: 'assets/databases.png',
            },
            {
                id: 3,
                name: 'Gitlab',
                path: 'assets/gitlab-logo-500.svg',
            },
            {
                id: 4,
                name: 'Notion',
                path: 'assets/notion.svg',
            },
        ],
    },
    {
        title: 'AgarioHub User Page for Players',
        desc: 'AgarioHub is a game that allows players to control a cell in a map. The goal is to gain mass by eating other cells and become the largest cell in the game. The user page is a platform where players can track their progress, view their stats, and connect with other players.',
        subdesc: 'The user page is built utilizing JavaScript, CSS, and HTML. It features a clean and intuitive design that allows players to easily navigate the platform. The page is responsive and works seamlessly on all devices, providing an optimal user experience.' +
            ' Players can log in to the user page using their AgarioHub account and access their stats, achievements, and leaderboard rankings. They can also connect with other players, shop skins, and participate in events. The user page enhances the overall gaming experience and fosters a sense of community among players.',
        href: 'https://github.com/AryaBhavsar03/ahub-player-page',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/AgarioHub_Logo.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: 'assets/HTML_Logo.png',
            },
            {
                id: 2,
                name: 'CSS3',
                path: 'assets/CSS_Logo.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: 'assets/JavaScript_Logo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};