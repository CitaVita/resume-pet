const { router } = require('.');

// ================================================================
router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку
  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layaut: 'basic',

    name: 'JavaScript',
    description: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  });
  //                  ↑↑ сюди вводимо JSON дані
  // ================================================================
  router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
      layout: 'program',

      program: {
        excursion: {
          name: 'Cultural Tour',
          location: {
            city: 'Paris',
            country: 'France',
          },
          date: '2023-06-15',
          program: [
            {
              name: 'Museum Visit',
              type: 'Art',
              duration: 3,
              details: {
                museum: {
                  name: 'The Louvre',
                  location: {
                    address: 'Rue de Rivoli',
                    city: 'Paris',
                    country: 'France',
                  },
                  exhibits: [
                    {
                      name: 'Mona Lisa',
                      artist: 'Leonardo da Vinci',
                      description: 'Iconic portrait painting',
                      audio_guide: true,
                    },
                    {
                      name: 'Winged Victory of Samothrace',
                      artist: null,
                      description: 'Ancient Greek statue of Nike, the goddess of victory',
                      audio_guide: true,
                    },
                  ],
                },
                guide: {
                  name: 'Francois',
                  language: 'French',
                  rating: 4.8,
                },
              },
            },
            {
              name: 'Cultural Show',
              type: 'Music and Dance',
              duration: 2,
              details: {
                venue: {
                  name: 'Moulin Rouge',
                  location: {
                    address: '82 Boulevard de Clichy',
                    city: 'Paris',
                    country: 'France',
                  },
                },
                performers: [
                  {
                    name: 'Mireille Mathieu',
                    type: 'Chanson singer',
                  },
                  {
                    name: "Ballet de l'Opéra National de Paris",
                    type: 'Classical ballet company',
                  },
                ],
                guide: {
                  name: 'Sophie',
                  language: 'English',
                  rating: 4.6,
                },
              },
            },
          ],
        },
      },
    });
  });


  // ================================================================
  router.get('/web', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
      layout: 'basic',

      web: {
        languages: [
          {
            name: 'HTML',
            version: 'HTML5',
            description: 'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
            elements: [
              {
                name: 'div',
                description: 'Defines a division or a section in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description: 'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description: 'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
              {
                name: 'p',
                description: 'Defines a paragraph in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description: 'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description: 'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
            ],
          },
          {
            name: 'CSS',
            version: 'CSS3',
            description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
            properties: [
              {
                name: 'color',
                description: 'Sets the color of the text.',
                values: [
                  {
                    value: 'red',
                    description: 'Sets the text color to red.',
                  },
                  {
                    value: 'blue',
                    description: 'Sets the text color to blue.',
                  },
                ],
              },
              {
                name: 'background-color',
                description: 'Sets the background color of an element.',
                values: [
                  {
                    value: 'white',
                    description: 'Sets the background color to white.',
                  },
                  {
                    value: 'black',
                    description: 'Sets the background color to black.',
                  },
                ],
              },
            ],
          },
          {
            name: 'JavaScript',
            version: 'ES6',
            description: 'JavaScript is a programming language used to create interactive effects within web browsers.',
            functions: [
              {
                name: 'alert()',
                description: 'Displays an alert box with a specified message and an OK button.',
                parameters: [
                  {
                    name: 'message',
                    type: 'string',
                    description: 'The message to display in the alert box.',
                  },
                ],
              },
              {
                name: 'getElementById()',
                description: 'Returns the element with the specified ID.',
                parameters: [
                  {
                    name: 'id',
                    type: 'string',
                    description: 'The ID of the element to find.',
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  });


  // ================================================================
  // Підключаємо роутер до бек-енду
  module.exports = router;
});
