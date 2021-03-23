import  { FaMailBulk }  from "react-icons/fa";

export default {
    name: 'contacto',
    type: 'document',
    title: 'Contacto',
    icon: FaMailBulk,
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'contactoTelefono',
            type: 'string',
            title: 'Telefono'
        },
        {
            name: 'contactoCorreo',
            type: 'string',
            title: 'Correo Electrónico '
        },
        {
            name: 'contactoInstagram',
            type: 'string',
            title: 'Instagram Handle',
            description: 'Sin @. Ejemplo: analidalewis'
        },
        {
            name: 'contactoFoto',
            type: 'figure',
            title: 'Foto',
            description: 'Foto para la página de contacto'
        }
    ],
};