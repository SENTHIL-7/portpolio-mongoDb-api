const mongoose = require('mongoose');
const Portfolio = require('../../models/Portfolio');
const User = require('../../models/User');
const PublishedTheme = require('../../models/PublishedTheme');
const ThemeStore = require('../../models/Themestore');
const EditTheme = require('../../models/EditTheme');
exports.createPortfolio = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { portfolioName, selectedThemeId, editThemeId = [] } = req.body; // Destructure and allow optional editThemeId

    // Additional validation (optional):
    if (!portfolioName || portfolioName.trim() === '') {
      return res.status(400).json({ message: 'Portfolio name is required' });
    }

    const existingPortfolio = await Portfolio.findOne({ portfolioName }); // Check for existing name

    if (existingPortfolio) {
      return res.status(400).json({ message: 'Portfolio name already exists' });
    }
    const newPortfolio = new Portfolio({
      portfolioName,
      selectedThemeId,
      editThemeId
    });
    
    await newPortfolio.save();
    const portfolioId = newPortfolio._id.toString();
    let userPortfolioId =newPortfolio._id.toString()
    let themeStore;
   await ThemeStore.findById(selectedThemeId)
  .then(user => {
    if (user) {
      console.log("Found user:", user);
      themeStore=user
      // Access user data here (e.g., user.name, user.email, etc.)
    } else {
      console.log("User not found");
    }
  })
  .catch(err => {
    console.error("Error finding user:", err);
  });
    console.log('themeStore',themeStore);
    let publishThemeId ;
    if(themeStore){
      const publishedTheme = new PublishedTheme({
        userPortfolioId:userPortfolioId,
        themeId:selectedThemeId,
        themeName:themeStore.themeName,
        themeLabel:themeStore.themeLabel,
        homePage:themeStore.homePage,
        aboutusPage:themeStore.aboutusPage,
        contactusPage:themeStore.contactusPage
      });
      await publishedTheme.save();
      publishThemeId=publishedTheme._id.toString();
      const editTheme = new EditTheme({
        userPortfolioId:userPortfolioId,
        themeId:selectedThemeId,
        themeName:themeStore.themeName,
        themeLabel:themeStore.themeLabel,
        homePage:themeStore.homePage,
        aboutusPage:themeStore.aboutusPage,
        contactusPage:themeStore.contactusPage
      });
      await editTheme.save();
    }
    const portfolioPublish = await Portfolio.findByIdAndUpdate(portfolioId, {
      publishThemeId // Update the portfolio reference
    }, { new: true }); // Return the updated document

    if (!portfolioPublish) {
      return res.status(404).json({ message: 'can not publish' }); // Handle non-existent user
    }
    // const newPortfolio = new Portfolio({
    //   portfolioName,
    //   selectedThemeId,
    //   editThemeId,
    //   publishThemeId
    // });
    
    // await newPortfolio.save(); // Save the new portfolio

    console.log('portfolioId',portfolioId);
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(portfolioId)) {
      throw new Error('Invalid user or portfolio ID');
    }

    // Find the user by ID
    const user = await User.findByIdAndUpdate(userId, {
      portfolioId,
      publishThemeId // Update the portfolio reference
    }, { new: true }); // Return the updated document

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle non-existent user
    }
    // await saveAndPublishTheme(userId, portfolioId);
    console.log('newPortfolio.id',newPortfolio.id);
    res.status(201).json({ message: 'Portfolio created successfully', portfolio: newPortfolio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Generic error message for security
  }
  //   try {
  //     const {id} = req.params
  //     const portfolioDetails = req.body;
  //     console.log('portfolioDetails',portfolioDetails,'id',id)
  //     // const portfolio = await Portfolio.create({portfolioDetails});
  //   //   console.log('user',user);
  //     // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
  //   //   await user.save();
  //     res.status(200).json({success:true, data: portfolioDetails })
  //   } catch (error) {
  //     res.status(500).json({ success :false ,error: 'Internal Server Error' });
  //   }
  // //   try {
  // //     //validate data as required

  // //     const book = new Book(req.body);
  // //     // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
  // //     await book.save();

  // //     /**
  // //      * @tutorial: steps
  // //      * 1. Find the publishing house by Publisher ID.
  // //      * 2. Call Push method on publishedBook key of Publisher.
  // //      * 3. Pass newly created book as value.
  // //      * 4. Call save method.
  // //     */
  // //     const publisher = await Publisher.findById({_id: book.publisher})
  // //     publisher.publishedBooks.push(book);
  // //     await publisher.save();

  // //     //return new book object, after saving it to Publisher
  // //     res.status(200).json({success:true, data: book })

  // //  } catch (err) {
  // //     res.status(400).json({success: false, message:err.message})
  // //  }
  };
  exports.getHome = async (req, res) => {
    // let  HomePage = [
    //   {
    //     selector: 'BasicHomeBannerComponent',
    //     data: {
    //       name: {
    //         text: "Senthil Kumar",
    //         styles: {
    //           'background-color': '',
    //           'color': 'green',
    //           'text-align': 'left',
    //           'font-size': '60px',
    //           'font-weight': 'bold',
    //           'padding': null
    //         },
    //         cssData: '',
    //         dataType: 'text',
    //         lable: 'heading text',
    //         isVisible: true
    //       },
    //       designation: {
    //         text: "Software Engineer",
    //         styles: {
    //           'background-color': '',
    //           'color': '#ffffff',
    //           'text-align': 'left',
    //           'font-size': '40px',
    //           'font-weight': '500',
    //           'padding': null
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'heading text',
    //         isVisible: true
    //       },
    //       description: {
    //         text: "I engineer simplicity through elegant code. Passionate about crafting streamlined solutions, I blend design and coding to create beautifully functional software. My love for this craft drives every line of code I write. Let's build something elegantly simple together.",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'font-weight': '',
    //           'padding': null
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'Description Text',
    //         isVisible: true
    //       },
  
    //       image: {
    //         url: "./assets/mypic/senthilProfile.jpg",
    //         styles: {
    //           'background-color': '#121212',
    //           'filter': 'grayscale(40%)'
    //         },
    //         cssData: '',
    //         dataType: 'Image',
    //         lable: 'Profile image',
    //         isVisible: true
    //       }
    //     },
    //     setting: {}
  
    //   },
    //   {
    //     selector: 'BasicHomeAboutSummaryComponent',
    //     data: {
    //       sectionTitle: {
    //         text: "ABOUT",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'ABOUT',
    //         isVisible: true
    //       },
    //       heading: {
    //         text: "Software Engineer & Tech Enthusiast",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'Heading',
    //         isVisible: true
    //       },
    //       story: {
    //         text: `Passionate about crafting digital experiences, I wield a versatile toolkit: Angular, MySQL, Node, Java, SCSS, and more. With one year dedicated to professional software development, I blend creativity with technical expertise. Fluent in Angular Material and PrimeNG, I specialize in seamless UIs. A four-year programming journey fuels my innovation. I believe in technology's power to transform, striving to exceed expectations in every project. Beyond code, I explore tech frontiers, devouring knowledge. Eager to collaborate and driven by challenges, let's embark on a journey of innovation together!`,
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'Story',
    //         isVisible: true
    //       },
    //       isVisible: true
    //     },
    //     setting: {}
    //   },
    //   {
    //     selector: 'BasicHomeSkillsComponent',
    //     data: {
    //       sectionTitle: {
    //         text: "MY SKILLS",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'My Skills',
    //         isVisible: true
    //       },
    //       isVisible: true
    //     },
    //     setting: {}
    //   },
    //   {
    //     selector: 'BasicHomeExperienceComponent',
    //     data: {
    //       sectionTitle: {
    //         text: "RESUME",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'Resume text',
    //         isVisible: true
    //       },
    //       heading: {
    //         text: "Education & Experience",
    //         styles: {
    //           'background-color': '',
    //           'color': '',
    //           'text-align': '',
    //           'font-size': '',
    //           'padding': '',
    //           'font-weight': ''
    //         },
    //         cssData: '',
    //         dataType: 'Text',
    //         lable: 'Heading',
    //         isVisible: true
    //       },
    //       isVisible: true
    //     },
    //     setting: {}
    //   },
    // ];
    try {
      const portfolioName = req.params.portfolioName
      console.log('portfolioName',portfolioName)
      await Portfolio.findOne({portfolioName}).populate('publishThemeId').then(home =>{
        console.log('home',home);
        if(!home){
          console.log('dsdfgggggggggg')
          res.status(404).json({ error: 'page not found' });
        }
        res.json(home.publishThemeId.homePage);
      }).catch(e=>{
        res.status(500).json({ error: e });
      })
      // const users = HomePage
      // res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };