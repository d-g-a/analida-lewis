// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'contacto',
    type: 'document',
    title: 'Contacto',
    fields: [
        {
            name: 'telefono',
            type: 'string',
            title: 'Telefono'
        },
        {
            name: 'correo',
            type: 'string',
            title: 'Correo Electrónico '
        },
        {
            name: 'instagram',
            type: 'string',
            title: 'Instagram Handle',
            description: 'Sin @. Ejemplo: analidalewis'
        }
    ],
};