import  { FaRegNewspaper }  from "react-icons/fa";

export default {
    name: 'noticia',
    type: 'document',
    title: 'Noticia',
    icon: FaRegNewspaper,
    fields: [
        {
            name: 'noticiaTitulo',
            type: 'string',
            title: 'Título',
            description: 'Título de la noticia'
        },
        {
            name: 'noticiaSlug',
            type: 'slug',
            title: 'Nombre del slug',
            description: 'Título para la extensión en url'
        },
        {
            name: 'noticiaThumbnail',
            type: 'figure',
            title: 'Foto Noticia Portada',
            description: 'Thumbnail de la noticia'
        },
        {
            name: 'noticiaFoto',
            type: 'figure',
            title: 'Foto Noticia',
            description: 'Título de la noticia'
        },
        {
            name: 'noticiaTexto',
            type: 'richText',
            title: 'Texto de la Noticia',
            description: 'Escribe algo sobre esta nota',
        },
        {
            name: 'noticiaLink',
            type: 'url',
            title: 'Link a lectura',
            description: 'Link a algo'
        } 
    ],
};