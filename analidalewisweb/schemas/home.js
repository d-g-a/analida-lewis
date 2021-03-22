// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'foto',
            type: 'image',
            title: 'Foto Principal'
        },
        {
            name: 'descripcion',
            type: 'string',
            title: 'Descripción'
        },
    ],
};