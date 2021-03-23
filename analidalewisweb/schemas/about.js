import  { FaRegUser }  from "react-icons/fa";

export default {
    name: 'about',
    type: 'document',
    title: 'About',
    icon: FaRegUser,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'foto',
            type: 'figure',
            title: 'Foto'
        },
        {
            name: 'about',
            type: 'richText',
            title: 'About'
        },
    ],
};