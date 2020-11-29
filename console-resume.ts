

let resume = {
    name: "Mitchell Gams",
    career: "Server",
    description: "I am a server in the fine dining industry looking to expand my knowledge to enter the workforce as a front end developer.",
    interests: ["Weight Lifting", 
                "Salt Water Reef Aquariums", 
                "Kayaking",
                "Fishing",
                "Food/Cooking"],
    experience: [
                {   
                    companyName:"Ocean",
                    jobTitle:"Server",
                    description:"Create a hospitable atmosphere for guests. Make menu recomendations and suggestions on wine pairings, provide guests with knowledge on dinner menu and drink menu. Take guests orders and time courses appropriately, at the end of the meal collect payment and reset for the next table."
                },{   
                    companyName:"Bricktops",
                    jobTitle:"Server",
                    description:"Create a hospitable atmosphere for guests. Make menu recomendations and suggestions on wine pairings, provide guests with knowledge on dinner menu and drink menu. Take guests orders and time courses appropriately, at the end of the meal collect payment and reset for the next table."
                },{   
                    companyName:"Cowfish",
                    jobTitle:"Server",
                    description:"Take food and beverage orders from customers, deliver written requests to the kitchen for preparation, carry items to the table in the proper order, help the bus staff as needed with the removal of finished plates, refill drinks and collect payment when the meal is over."}
                ],
    skills: [{
                skill:"Multitasking",
                isCool: false
            },{
                skill:"Bowling Expert",
                isCool: true
            },{
                 skill:"Sharpshooter",
                 isCool: true
            },{ 
                 skill:"Teamwork",
                 isCool: false
            },{  
                skill:"Flexible",
                isCool:false
            }]

};

function displaySkill(skill: string, isCool: boolean) {
    if(isCool) {
        console.log(`* BAM: ${skill}`);
    } else {
        console.log(`* ${skill}`);
    }
}

function displayPosition(companyName: string, jobTitle: string, description: string) {
    console.log(`* ${jobTitle} at ${companyName} - ${description}`);

}

console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("");
console.log("My Interests:");
for(let interest of resume.interests) {
    console.log(`* ${interest}`);
}
console.log("");
console.log("Work Experience:");
for(let experience of resume.experience) {
    displayPosition(experience.companyName, experience.jobTitle, experience.description);
}
console.log("");
console.log("My Skills:");
for(let skill of resume.skills) {
    displaySkill(skill.skill, skill.isCool);
}