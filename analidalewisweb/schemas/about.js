// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'foto',
            type: 'image',
            title: 'foto'
        },
        {
            name: 'about',
            type: 'text',
            title: 'About'
        },
    ],
};