module.exports = {
  manifest: {
    application: {
      displayName: 'FUSION',
      name: 'fusion',
      build: '0001a',
      version: 'beta',
    },
    company: {
      address: {},
      email: 'support@fusion.com',
      logo: './static/images/fusion-logo.svg',
      name: 'Fusion Industries',
      phone: '',
      slogan:
        'Optimizing business through intelligent design',
    },
    navigation: {
      items: [
        { label: 'Our solutions', path: '/solutions' },
        { label: 'Our insights', path: '/insights' },
      ],
    },
    pages: {
      home: {
        heros: [
          {
            action: 'Learn more',
            description: 'Integrate our solutions into your existing workflow',
            media: {
              source: './static/images/building-2.jpg',
              type: 'image',
            },
            path: '/solutions',
            title: 'OUR SOLUTIONS',
            variant: 'dark',
          },
          {
            action: 'See how we work',
            description: 'Quicken development with our qualified consultants',
            media: {
              source: './static/images/people-4.jpg',
              type: 'image',
            },
            path: '/insight?id=5cfcb97202743900079c638c',
            title: 'OUR SERVICES',
            variant: 'dark',
          },
          {
            action: 'See our standard',
            description: 'Proven strategies that effectively grow your business',
            media: {
              source: './static/images/plant-1.jpg?resize&size=300',
              type: 'image',
            },
            path: '/insight?id=5cfcb95e02743900079c6389',
            title: 'OUR PROCESS',
            variant: 'dark',
          },
        ],
      },
    },
  },
};

// Navigation sub-object
// Home sub-object
// About sub-object
// Team sub-object
