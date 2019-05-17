'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var prisma_lib_1 = require('prisma-client-lib');
var typeDefs = require('./prisma-schema').typeDefs;

var models = [
  {
    name: 'Name',
    embedded: false,
  },
  {
    name: 'Birth',
    embedded: false,
  },
  {
    name: 'Contact',
    embedded: false,
  },
  {
    name: 'Profile',
    embedded: false,
  },
  {
    name: 'Employee',
    embedded: false,
  },
  {
    name: 'MediaType',
    embedded: false,
  },
  {
    name: 'Media',
    embedded: false,
  },
  {
    name: 'Post',
    embedded: false,
  },
  {
    name: 'SizeType',
    embedded: false,
  },
  {
    name: 'MetaType',
    embedded: false,
  },
  {
    name: 'Insight',
    embedded: false,
  },
  {
    name: 'Policy',
    embedded: false,
  },
  {
    name: 'User',
    embedded: false,
  },
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/ross-sheppard-d8c6f0/server3/dev`,
});
exports.prisma = new exports.Prisma();
