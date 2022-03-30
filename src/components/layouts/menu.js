const menus = [
    {
        id: 1,
        name: 'Home',
        linkmenu: '/',
        namesub: []
    },
    {
        id: 2,
        name: 'About',
        linkmenu: '/about-v3',
        namesub: [],
    },
    {
        id: 3,
        name: 'Services',
        linkmenu: '/services-v1',
        namesub:  [
            {
                id: 1,
                sub: 'Services Grid',
                links: '/services-v1',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Risk Management',
                links: '/services-v2',
                submenu: undefined
            }
        ],
    },
    {
        id: 4,
        name: 'Portfolio',
        linkmenu: '/portfolio-v3',
        namesub: [
            {
                id: 1,
                sub: 'Portfolio Default',
                links: '/portfolio-v3',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Layout 02',
                links: '/portfolio-v2',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'Portfolio Load More',
                links: '/portfolio-v1',
                submenu: undefined
            }
        ],
    },
    {
        id: 5,
        name: 'News',
        linkmenu: '/blog',
        namesub: [],
    },
    {
        id: 6,
        name: 'Contact',
        linkmenu: '/contact-v1',
        namesub: [],
    }
]

export default menus;