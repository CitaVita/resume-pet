// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Lucia',
    lastname: 'Maistruk',
  },
    position: 'Junior Fullstack JS Developer',
    salary: '$600 monthly',
    address: 'UK, Wembley, London',
};
var footer = { 
  social: {
  email: { 
    text: 'luchia1111@gmail.com',
    href: 'mailto:luchia1111@gmail.com',
    
  },
  phone: {
    text: '+447735891550',
    href: 'tel:+447735891550',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/lucia-maistruk-47772aa4/',
    text: 'LinkedIn', 
},
},
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render ('summary', {
    // ↙ сюди вводимо JSON дані
  
    page: {
      title: 'Resume | Summary',
    },

    header,
  

    main: {
      summary:{
       title: 'Summary',
              text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
            },
            experience: {
              title: 'Other experience',
              text: 'Pet project for parsing sport betting data from different platforms (odds) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
            },
          },

          footer,
      })
    })


// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render ('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML', 
          point: 10,
          isTop: true,
        },
       
        {
          name: 'Handlebars', 
          point: 10,
          isTop: true,
        },

        {
          name: 'VS Code', 
          point: 9,
        },

        {
          name: 'Git', 
          point: 8,
        },

        {
          name: 'Terminal', 
          point: 7,
        },

        {
          name: 'NPM', 
          point: 10,
        },
        
        {
          name: 'React.js', 
          point: 0,
        },

        {
          name: 'PHP', 
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Gemology |',
          isMain: true,
        },

        {
          name: 'CAD Design |',
          isMain: true,
        },

        {
          name: 'Interio Design |',
          isMain: true,
        },

        {
          name: 'Backing |',
          isMain: true,
        },
        {
          name: 'Red Panda fan |',
          isMain: true,
        },
      ],
    },
          footer,
  })
 })

 // ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render ('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'IT Brains',
          isEnd: false,
        },

        {
          name: 'Russian State Geological Prospecting University', 
          isEnd: true,
        },
        {
          name: 'Oxford Brookes University', 
          isEnd: true,
        },
        {
          name: 'Akademia Finansów i Biznesu Vistula', 
          isEnd: true,
        },
        {
          name: 'Khmelnytsky University of Management and Law', 
          isEnd: true,
        },
        {
          name: 'The Interregional Academy of Personnel Management', 
          isEnd: true,
        },
        ],

        certificates: [
          {
            name: 'Junior Fullstack JS Developer', 
            id: '(2022 - 223)',
            },

            {
              name: 'Expert Gemologist', 
              id: '(2017 - 2018)',
              },

              {
                name: ' Master of Science (MSc) | International Business Management', 
                id: '(2012 - 2016)',
                },

                {
                  name: ' Master of Science (MSc) | International Business Management', 
                  id: '(2012 - 2015)',
                  },

                  {
                    name: 'Bachelor of Law (LLB)', 
                    id: '(2006 - 2010)',
                    },

                    {
                      name: 'Junior Specialist of Law', 
                      id: '(2003 - 2006)',
                      },
           ],
          },
  
    footer,
})
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render ('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

   main: {
    works: [
    {
      position: 'Junior Fullstack Developer',
      company: {
        name: 'IT Brains',
        url: 'https://it-brains.com.ua/',
      },
      duration: {
        from: '10.10.2023',
        to: null,
      },
      projectAmount: 3,
     
      awardAmount: 7,

      project: [
        {
        name: 'Resume',
        url: 'https://it-brains.com.ua/',
        about: 'Airbnb competitor. High-load for searching apartments',
        stackAmount: 5,
        awardAmount: 7,
        stacks: [
          {
            name: 'React.js',
          },
          {
            name: 'HTML / CSS',
          },
          {
            name: 'Nodejs',
          },
        ],
        awards: [
          {
            name: 'Grammy'
        },
        {
          name: 'Pulitzer Prize',
        },
        ],
    },  
        ],
      } 
        ],    
    },

 footer,
})
 })


       
          
     
  


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
