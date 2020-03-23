function getMessage()
{
    var messages = ["I love your smile",
                    "I love your laugh",
                    "You make me so happy",
                    "I love your sense of humor",
                    "You make everyone around you so happy",
                    "You are such a sweet person",
                    "You are my whole world",
                    "You always make me feel so loved",
                    "I love your goofiness :)",
                    "You are so thoughtful",
                    "You are a mega nerd <3",
                    "You are absolutely gorgeous",
                    "You always make me laugh",
                    "You never fail to make my day",
                    "I love you so much",
                    "You melt my heart"
    ];
    var random = Math.floor(Math.random() * messages.length) + 0;

    console.log(messages[random]);
    
    const messageElement = document.getElementById("message-text");
    messageElement.innerHTML = messages[random];

}

function getDate()
{
    var messages = ["Cook a meal together",
                    "Make a pillow/blanket fort",
                    "Go to a museum",
                    "Hammock together",
                    "Texas Tulips!",
                    "Taiyaki and Soft Serve",
                    "Coffe Date :)",
                    "Ice cream date",
                    "Try a new resturant",
                    "CHICKEN ALFREDO TIME BABYYYYYYY",
                    "Bowling time!",
                    "Play Board/Card Games Together",
                    "Snuggle :)",
                    "Make a dessert together",
                    "Play a game together (animal crossing, minecraft, etc.)",
                    "Find a movie on netflix and eat popcorn",
                    "Go on an Alamo Drafthouse movie and dinner date!",
                    "Do a DIY craft/project together",
                    "Teach each other a skill! (crocheting, coding, touching your tongue to your nose, etc.)",
                    "Go watch the sunset",
                    "Go Kayaking!",
                    "Go thrifting together",
                    "Go see animals! (Zoo, aquarium)",
                    "Mini Road Trip time!",
                    "Painting with a twist",
                    "Follow along with an art tutorial at home",
                    "Hobby Lobby date",
                    "Do a puzzle",
                    "Origami Date",
                    "Learn a new card game",
                    "Make a fun snack together",
                    "Go on a walk",
                    "Pokemon Go Date!",
                    "Make funny/dumb slow motion videos",
                    "Pick a book and take turns reading out loud to eachother",
                    "Plan the perfect vacation (without caring about $)",
                    "Tie dye shirts together",
                    "Do each others make up",
                    "Go on a scavenger hunt",
                    "Go to a plant nursery",
                    "Recreate a pinterest project",
                    "Have a picnic",
                    "Watch a movie from your childhood",
                    "Massage date :)",
                    "Go star gazing",
                    "Have a cooking competition, judge each others work :)",
                    "Go swimming",
                    "Photo Shoot date!",
                    "Go Mini Golfing",
                    "Go shopping together"
    ];
    var random = Math.floor(Math.random() * messages.length) + 0;

    console.log(messages[random]);
    
    const messageElement = document.getElementById("message-text");
    messageElement.innerHTML = messages[random];
}

function randomBackground()
{
    var random = Math.floor(Math.random() * 23) + 1;
    console.log(random);
    
    var url = "url('pics/" + random + ".JPG') no-repeat left top";
    document.body.style.background = url;
    document.body.style.backgroundSize = "cover";
}