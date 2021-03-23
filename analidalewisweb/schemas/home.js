import  { FaHome }  from "react-icons/fa";

export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    icon: FaHome,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'foto',
            type: 'figure',
            title: 'Foto Principal'
        },
        {
            name: 'descripcion',
            type: 'string',
            title: 'Descripción'
        },
    ],
};