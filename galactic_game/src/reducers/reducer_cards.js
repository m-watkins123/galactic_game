// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.
export default function () {
    return [
        { 
            name: 'Plasma Bowman',      // 0
            damage: 2,
            image: require('../assets/PlasmaBowman.png'),
            // activeImage: require('../assets/PlasmaBowmanActivation.gif') 
        },      
        { 
            name: 'Roseroot Vertebrate',  // 1
            damage: 0,
            image: require('../assets/RoserootVertebrate.png'),
            // activeImage: require('../assets/PlasmaBowmanActivation.gif') 
        },  
        { 
            name: 'Omnigo Scrapper',               // 2
            damage: 1,
            image: require('../assets/OmnigoScrapper.png'),
            // activeImage: require('../assets/PlasmaBowmanActivation.gif') 
        },                     
        {
            name: 'Atlas Drill',        // 3
            damage: 3,
            image: require('../assets/AtlasDrill.png'),
            // activeImage: require('../assets/PlasmaBowmanActivation.gif') 
        }          
    ];
}