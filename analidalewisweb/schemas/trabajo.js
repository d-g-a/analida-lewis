import  { FaPaintBrush }  from "react-icons/fa";

export default {
    name: 'trabajo',
    type: 'document',
    title: 'Trabajo',
    icon: FaPaintBrush,
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
            description: 'usar - entre palabras. Ej. la-venus-en-las-rocas',
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
            type: 'richText',
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
            title: 'Link al video de Instagram',
            description: 'Link al video del proceso en instagram',
        },
    ],
};