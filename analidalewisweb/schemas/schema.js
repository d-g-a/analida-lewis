import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type';
import about from './about';
import contacto from './contacto';
import home from './home';
import noticias from './noticias';
import prensa from './prensa';
import trabajo from './trabajo';
import richText from './richText'
import figure from './figure'

export default createSchema({
  name: 'AnalidaLewis',
  types: schemaTypes.concat([
    home,
    about,
    contacto,
    trabajo,
    noticias,
    prensa,
    richText,
    figure,
  ]),
})
