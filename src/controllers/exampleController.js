// Import any required services or models here
const exampleService = require('../services/exampleService');


//
exports.getUsers = async (req, res) => {
    try {
      const users = await exampleService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  exports.getHome = async (req, res) => {
    let  HomePage = [
      {
        selector: 'BasicHomeBannerComponent',
        data: {
          name: {
            text: "Senthil Kumar",
            styles: {
              'background-color': '',
              'color': 'green',
              'text-align': 'left',
              'font-size': '60px',
              'font-weight': 'bold',
              'padding': null
            },
            cssData: '',
            dataType: 'text',
            lable: 'heading text',
            isVisible: true
          },
          designation: {
            text: "Software Engineer",
            styles: {
              'background-color': '',
              'color': '#ffffff',
              'text-align': 'left',
              'font-size': '40px',
              'font-weight': '500',
              'padding': null
            },
            cssData: '',
            dataType: 'Text',
            lable: 'heading text',
            isVisible: true
          },
          description: {
            text: "I engineer simplicity through elegant code. Passionate about crafting streamlined solutions, I blend design and coding to create beautifully functional software. My love for this craft drives every line of code I write. Let's build something elegantly simple together.",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'font-weight': '',
              'padding': null
            },
            cssData: '',
            dataType: 'Text',
            lable: 'Description Text',
            isVisible: true
          },
  
          image: {
            url: "./assets/mypic/senthilProfile.jpg",
            styles: {
              'background-color': '#121212',
              'filter': 'grayscale(40%)'
            },
            cssData: '',
            dataType: 'Image',
            lable: 'Profile image',
            isVisible: true
          }
        },
        setting: {}
  
      },
      {
        selector: 'BasicHomeAboutSummaryComponent',
        data: {
          sectionTitle: {
            text: "ABOUT",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'ABOUT',
            isVisible: true
          },
          heading: {
            text: "Software Engineer & Tech Enthusiast",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'Heading',
            isVisible: true
          },
          story: {
            text: `Passionate about crafting digital experiences, I wield a versatile toolkit: Angular, MySQL, Node, Java, SCSS, and more. With one year dedicated to professional software development, I blend creativity with technical expertise. Fluent in Angular Material and PrimeNG, I specialize in seamless UIs. A four-year programming journey fuels my innovation. I believe in technology's power to transform, striving to exceed expectations in every project. Beyond code, I explore tech frontiers, devouring knowledge. Eager to collaborate and driven by challenges, let's embark on a journey of innovation together!`,
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'Story',
            isVisible: true
          },
          isVisible: true
        },
        setting: {}
      },
      {
        selector: 'BasicHomeSkillsComponent',
        data: {
          sectionTitle: {
            text: "MY SKILLS",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'My Skills',
            isVisible: true
          },
          isVisible: true
        },
        setting: {}
      },
      {
        selector: 'BasicHomeExperienceComponent',
        data: {
          sectionTitle: {
            text: "RESUME",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'Resume text',
            isVisible: true
          },
          heading: {
            text: "Education & Experience",
            styles: {
              'background-color': '',
              'color': '',
              'text-align': '',
              'font-size': '',
              'padding': '',
              'font-weight': ''
            },
            cssData: '',
            dataType: 'Text',
            lable: 'Heading',
            isVisible: true
          },
          isVisible: true
        },
        setting: {}
      },
    ];
    try {
      console.log('req',req)
      const users = HomePage
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
  exports.createUser = async (req, res) => {
    try {
      const   userDetails = req.body;
      console.log('name',userDetails)
      const user = await exampleService.createUser(userDetails);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Define your controller methods
exports.getExamples = async (req, res) => {
  try {
    const examples = await exampleService.getExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createExample = async (req, res) => {
  try {
    const { name } = req.body;
    const newExample = await exampleService.createExample(name);
    res.json(newExample);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};