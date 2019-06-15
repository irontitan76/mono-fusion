import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define all static data here (figure out internationalization)
// Define link component used throughout (make my own Link component to handle relevant Link types)
// Queries should occur on each page and be made so that one request is executed

export const manifest = {
  application: {
    displayName: "Fusion",
    name: 'fusion',
    build: '0001a',
    version: 'beta',
  },
  company: {
    address: {},
    email: 'ross_sheppard@outlook.com',
    logo: './static/images/fusion-logo-white.png',
    name: 'Fusion Industries',
    phone: '',
    slogan: 'Optimizing Business Through Intelligent Design',
  },
  navigation: {
    component: Link,
    primary: [
      {
        icon: <FontAwesomeIcon icon={["fal", "user-tie"]} />,
        label: "People",
        path: { component: Link, href: "/people" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "folders"]} />,
        label: "Documents",
        path: { component: Link, href: "/documents" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "box"]} />,
        label: "Products",
        path: { component: Link, href: "/products" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "conveyor-belt"]} />,
        label: "Orders",
        path: { component: Link, href: "/orders" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "bells"]} />,
        label: "Notifications",
        path: { component: Link, href: "/notifications" },
      },
      {
        icon: <FontAwesomeIcon icon={["fal", "palette"]} />,
        intent: 'changeTheme',
        label: "Change theme",
      }
    ],
    secondary: {
      documents: [
        {
          icon: <FontAwesomeIcon icon={["fal", "home"]} />,
          label: "Home",
          path: { component: Link, href: "/documents" },
        }
      ],
      people: [
        {
          icon: <FontAwesomeIcon icon={["fal", "home"]} />,
          label: "Home",
          path: { component: Link, href: "/people" },
        },
        {
          icon: <FontAwesomeIcon icon={["fal", "money-check"]} />,
          label: "Payroll",
          path: { component: Link, href: "/people/payroll" },
        },
        {
          icon: <FontAwesomeIcon icon={["fal", "calendar-alt"]} />,
          label: "Schedule",
          path: { component: Link, href: "/people/schedule" },
        },
        { 
          icon: <FontAwesomeIcon icon={["fal", "umbrella-beach"]} />,
          label: "Benefits",
          path: { component: Link, href: "/people/benefits" },
        },
        {
          icon: <FontAwesomeIcon icon={["fal", "user-plus"]} />,
          label: "Talent",
          path: { component: Link, href: "/people/talent" },
        },
      ],
    },
  },
  pages: {
    document: {
      markdown: {},
      markdownCodebar: {
        buttons: [
          ["copy", <FontAwesomeIcon style={{ fontSize: 18 }} icon={["fal", "copy"]} />],
          {
            component: "a",
            href: "https://github.com",
            icon: <FontAwesomeIcon icon={["fab", "github"]} />,
            target: "_blank",
            title: "Go to source",
          },
        ],
      },
      contents: { title: "Contents" },
      slideout: { title: "Add Document" },
      titlebar: {
        button: "Add Document",
        title: "Documents",
      },
    },
    documents: {
      record: {
        headers: [
          { value: 'Title' },
          { value: 'Category' },
          { value: 'Author' },
          { value: 'Type' },
        ],
        paths: [
          { component: Link, href: "/document?title={title}", value: "title" },
          "category",
          { component: Link, href: "/person?id={author._id}", value: ["author.name.first", "author.name.last"] },
          'type',
        ],
        // data,
        // rows: [
        //   { name: 'name', email: 'email', phone: 'phone', status: 'status' },
        //   {},
        // ],
      },
      slideout: {
        content: {
          fields: [
            {
              autoFocus: true,
              fullWidth: true,
              label: 'Author',
              name: 'author',
              required: true,
              select: true,
              type: 'select',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Title',
              name: 'title',
              placeholder: 'Type the document title',
              required: true,
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Subtitle',
              name: 'subtitle',
              required: true,
              placeholder: 'Type the document subtitle',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Content',
              multiline: true,
              name: 'contents',
              placeholder: 'Type the document content',
              required: true,
              rows: 10,
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Category',
              name: 'category',
              required: true,
              select: true,
              type: 'select',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Type',
              name: 'type',
              required: true,
              select: true,
              type: 'select',
              variant: 'outlined'
            },
          ],
          type: 'form',
        },
        title: "Add Document"
      },
      titlebar: {
        button: "Add Document",
        title: "Documents",
      },
    },
    notifications: {
      record: {
        headers: [
          { value: "ID" },
          { value: "Title" },
          { value: "Sender" },
          { value: "Created At" },
          { value: "Sent At" },
        ],
        paths: [
          "_id",
          "title",
          "sender",
          "_createdAt",
          "_sentAt",
        ],
      },
      slideout: {
        title: "Add Notification"
      },
      titlebar: {
        button: "Add Notification",
        title: "Notifications",
      },
    },
    orders: {
      record: {
        headers: [
          { value: "ID" },
          { value: "Customer ID" },
          { value: "Item Count" },
          { value: "Total Cost" },
          { value: "Status" },
        ],
        paths: [
          "_id",
          "customer._id",
          "items",
          "total",
          "status",
        ],
      },
      slideout: {
        title: "Add Order"
      },
      titlebar: {
        button: "Add Order",
        title: "Orders",
      },
    },
    people: {
      record: {
        headers: [
          { value: "Username" },
          { value: "First Name" },
          { value: "Last Name" },
          { value: "Role" },
        ],
        paths: [
          "username",
          "name.first",
          "name.last",
          'type',
        ],
      },
      slideout: {
        content: {
          fields: [
            {
              autoFocus: true,
              fullWidth: true,
              label: 'First name',
              name: 'first',
              required: true,
              placeholder: 'Type the person\'s first name',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Middle name',
              name: 'middle',
              required: true,
              placeholder: 'Type the person\'s middle name',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Last name',
              name: 'last',
              required: true,
              placeholder: 'Type the person\'s last name',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Preferred name',
              name: 'preferred',
              required: true,
              placeholder: 'Type the person\'s preferred name',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Username',
              name: 'username',
              required: true,
              placeholder: 'Type the person\'s username',
              type: 'text',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Password',
              name: 'password',
              required: true,
              placeholder: 'Type the person\'s password',
              type: 'password',
              variant: 'outlined'
            },
            {
              fullWidth: true,
              label: 'Role',
              name: 'type',
              required: true,
              placeholder: 'Type the person\'s role',
              type: 'text',
              variant: 'outlined'
            },
          ],
          type: 'form',
        },
        title: "Add Person"
      },
      titlebar: {
        button: "Add Person",
        title: "People",
      },
    },
    products: {
      record: {
        headers: [
          { value: "SKU" },
          { value: "Manufacturer" },
          { value: "Name" },
          { value: "Category" },
          { value: "List Price" },
          { value: "Retail Price" },
        ],
        paths: [
          "sku",
          "manufacturer.model",
          "name",
          "category",
          "price.list",
          "price.retail",
        ],
      },
      slideout: {
        title: "Add Product"
      },
      titlebar: {
        button: "Add Product",
        title: "Products",
      },
    },
  },
  footer: {},
};

export default manifest;
