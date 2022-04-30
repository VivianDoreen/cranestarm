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
        linkmenu: '/services-loans',
        namesub:  [
            {
                id: 1,
                sub: 'Loan Products',
                links: '/services-loans',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Saving Products',
                links: '/services-savings',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'Other Services',
                links: '/services-others',
                submenu: undefined
            }
        ],
    },
    {
        id: 6,
        name: 'Contact',
        linkmenu: '/contact-v1',
        namesub: [],
    }
]

export default menus;