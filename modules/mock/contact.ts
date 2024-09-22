export type ContactType = {
    name: string
    lastMessage: {
        sendAt: Date
        message: string
    }
    notRead: number
    imageUrl: string
}

export const mockContacts = [
    {
        name: 'Pedro Henrique',
        lastMessage: {
            sendAt: new Date('2024-09-21T10:00:00'),
            message: 'DOIDA',
        },
        notRead: 3,
        imageUrl: 'https://avatars.githubusercontent.com/u/91228045?v=4',
    },
    {
        name: 'Ana Clara',
        lastMessage: {
            sendAt: new Date('2024-09-21T09:45:00'),
            message: 'Vou te ligar mais tarde.',
        },
        notRead: 1,
        imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'João Vitor',
        lastMessage: {
            sendAt: new Date('2024-09-20T18:30:00'),
            message: 'Tudo certo para amanhã?',
        },
        notRead: 0,
        imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        name: 'Luiza Silva',
        lastMessage: {
            sendAt: new Date('2024-09-21T08:15:00'),
            message: 'Terminamos o projeto!',
        },
        notRead: 2,
        imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Carlos Eduardo',
        lastMessage: {
            sendAt: new Date('2024-09-21T11:00:00'),
            message: 'Me avisa quando chegar.',
        },
        notRead: 5,
        imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
]
