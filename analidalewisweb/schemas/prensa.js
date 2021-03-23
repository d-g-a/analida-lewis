import  { FaStar }  from "react-icons/fa";

export default {
    name: 'prensa',
    type: 'document',
    title: 'Prensa',
    icon: FaStar,
    fields: [
        {
            name: 'prensaTitulo',
            type: 'string',
            title: 'Título',
            description: 'Título de la nota'
        },
        {
            name: 'prensaSlug',
            type: 'slug',
            title: 'Nombre del slug',
            description: 'Título para la extensión en url'
        },
        {
            name: 'prensaThumbnail',
            type: 'figure',
            title: 'Foto Prensa Portada',
            description: 'Thumbnail de la nota'
        },
        {
            name: 'prensaFoto',
            type: 'figure',
            title: 'Foto Prensa',
            description: 'Título de la prensa'
        },
        {
            name: 'prensaTexto',
            type: 'richText',
            title: 'Texto de la Prensa',
            description: 'Escribe algo sobre esta nota',
        },
        {
            name: 'prensaLink',
            type: 'url',
            title: 'Link a lectura',
            description: 'Link a algo'
        }
    ],
};