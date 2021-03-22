// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'trabajo',
    type: 'document',
    title: 'Trabajo',
    fields: [
        {
            name: 'trabajoTitulo',
            type: 'string',
            title: 'Título de la Obra',
            description: 'Nombre de la obra'
        },
        {
            name: 'trabajoSlug',
            type: 'slug',
            title: 'Nombre del slug',
            description: 'Título para la extensión en url',
            options: {
                source: 'trabajo',
                maxLength: 96,
              },
        },
        {
            name: 'trabajoFecha',
            type: 'date',
            title: 'Fecha de restauración',
            description: '¿Cuándo se terminó la pieza?'
        },
        {
            name: 'trabajoProceso',
            type: 'text',
            title: 'Proceso de la Obra',
            description: 'Nombre de la obra'
        },
        {
            name: 'trabajoThumbnail',
            type: 'image',
            title: 'Thumbnail',
            description: 'Portada del proyecto'
        },
        {
            name: 'trabajoFotoAntes',
            type: 'image',
            title: 'Foto Antes',
            description: 'Foto Antes',
        },
        {
            name: 'trabajoFotoDespues',
            type: 'image',
            title: 'Foto Despues',
            description: 'Foto despues'
        },
        {
            name: 'trabajoInstagramLink',
            type: 'url',
            title: 'Link to Instagram Video',
            description: 'Link al video del proceso en instagram',
        },
    ],
};