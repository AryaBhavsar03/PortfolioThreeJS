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
        title: 'Java Game Developer - Sunken Services, LLC',
        desc: 'Minecraft is a sandbox video game developed by Mojang Studios. The game allows players to build servers with custom plugins and mods. I worked as a Java game developer for one of the most popular skyblock servers in the game.',
        subdesc:
            'I developed custom plugins and mods for the server using Java. The plugins added new features and mechanics to the game, enhancing the player experience. I also optimized the server performance and fixed bugs to ensure smooth gameplay for all players. I collaborated with other developers and server staff to implement new ideas and features, contributing to the growth and success of the server.' +
            'The server has a large player base and is known for its unique gameplay and features. My work as a Java game developer also included managing databases, creating custom commands, and implementing anti-cheat systems. I gained valuable experience in game development and server management, honing my skills in Java programming and software development.',
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
            }
        ],
    },

    {
        title: 'AgarioHub User Page - A User Page for Players',
        desc: 'AgarioHub is a game that allows players to control a cell in a map. The goal is to gain mass by eating other cells and become the largest cell in the game. The user page is a platform where players can track their progress, view their stats, and connect with other players.',
        subdesc:
            'The user page is built using JavaScript, CSS, and HTML. It features a clean and intuitive design that allows players to easily navigate the platform. The page is responsive and works seamlessly on all devices, providing an optimal user experience.' +
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