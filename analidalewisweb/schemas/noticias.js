// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'noticias',
    type: 'document',
    title: 'Noticias',
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
            type: 'image',
            title: 'Foto Noticia Portada',
            description: 'Thumbnail de la noticia'
        },
        {
            name: 'noticiaFoto',
            type: 'image',
            title: 'Foto Noticia',
            description: 'Título de la noticia'
        },
        {
            name: 'noticiaTexto',
            type: 'text',
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