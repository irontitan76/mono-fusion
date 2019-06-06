"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "CommentType",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Document",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "ReceivedBy",
    embedded: true
  },
  {
    name: "Sender",
    embedded: true
  },
  {
    name: "SenderType",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "Account",
    embedded: true
  },
  {
    name: "AccountType",
    embedded: false
  },
  {
    name: "Billing",
    embedded: true
  },
  {
    name: "Card",
    embedded: true
  },
  {
    name: "CardType",
    embedded: false
  },
  {
    name: "Career",
    embedded: true
  },
  {
    name: "Contact",
    embedded: true
  },
  {
    name: "Email",
    embedded: true
  },
  {
    name: "EmailType",
    embedded: false
  },
  {
    name: "Experience",
    embedded: true
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Name",
    embedded: true
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Phone",
    embedded: true
  },
  {
    name: "PhoneType",
    embedded: false
  },
  {
    name: "Profile",
    embedded: true
  },
  {
    name: "Session",
    embedded: true
  },
  {
    name: "DimensionScale",
    embedded: false
  },
  {
    name: "Manufacturer",
    embedded: true
  },
  {
    name: "Price",
    embedded: true
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductCategory",
    embedded: false
  },
  {
    name: "Shipping",
    embedded: true
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
