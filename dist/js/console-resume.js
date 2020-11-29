/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./console-resume.ts ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var resume = {
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
            companyName: "Ocean",
            jobTitle: "Server",
            description: "Create a hospitable atmosphere for guests. Make menu recomendations and suggestions on wine pairings, provide guests with knowledge on dinner menu and drink menu. Take guests orders and time courses appropriately, at the end of the meal collect payment and reset for the next table."
        }, {
            companyName: "Bricktops",
            jobTitle: "Server",
            description: "Create a hospitable atmosphere for guests. Make menu recomendations and suggestions on wine pairings, provide guests with knowledge on dinner menu and drink menu. Take guests orders and time courses appropriately, at the end of the meal collect payment and reset for the next table."
        }, {
            companyName: "Cowfish",
            jobTitle: "Server",
            description: "Take food and beverage orders from customers, deliver written requests to the kitchen for preparation, carry items to the table in the proper order, help the bus staff as needed with the removal of finished plates, refill drinks and collect payment when the meal is over."
        }
    ],
    skills: [{
            skill: "Multitasking",
            isCool: false
        }, {
            skill: "Bowling Expert",
            isCool: true
        }, {
            skill: "Sharpshooter",
            isCool: true
        }, {
            skill: "Teamwork",
            isCool: false
        }, {
            skill: "Flexible",
            isCool: false
        }]
};
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
function displayPosition(companyName, jobTitle, description) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description);
}
console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("");
console.log("My Interests:");
for (var _i = 0, _a = resume.interests; _i < _a.length; _i++) {
    var interest = _a[_i];
    console.log("* " + interest);
}
console.log("");
console.log("Work Experience:");
for (var _b = 0, _c = resume.experience; _b < _c.length; _b++) {
    var experience = _c[_b];
    displayPosition(experience.companyName, experience.jobTitle, experience.description);
}
console.log("");
console.log("My Skills:");
for (var _d = 0, _e = resume.skills; _d < _e.length; _d++) {
    var skill = _e[_d];
    displaySkill(skill.skill, skill.isCool);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWJwcmFjdGljZS8uL2NvbnNvbGUtcmVzdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0EiLCJmaWxlIjoiY29uc29sZS1yZXN1bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIHJlc3VtZSA9IHtcclxuICAgIG5hbWU6IFwiTWl0Y2hlbGwgR2Ftc1wiLFxyXG4gICAgY2FyZWVyOiBcIlNlcnZlclwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSSBhbSBhIHNlcnZlciBpbiB0aGUgZmluZSBkaW5pbmcgaW5kdXN0cnkgbG9va2luZyB0byBleHBhbmQgbXkga25vd2xlZGdlIHRvIGVudGVyIHRoZSB3b3JrZm9yY2UgYXMgYSBmcm9udCBlbmQgZGV2ZWxvcGVyLlwiLFxyXG4gICAgaW50ZXJlc3RzOiBbXCJXZWlnaHQgTGlmdGluZ1wiLFxyXG4gICAgICAgIFwiU2FsdCBXYXRlciBSZWVmIEFxdWFyaXVtc1wiLFxyXG4gICAgICAgIFwiS2F5YWtpbmdcIixcclxuICAgICAgICBcIkZpc2hpbmdcIixcclxuICAgICAgICBcIkZvb2QvQ29va2luZ1wiXSxcclxuICAgIGV4cGVyaWVuY2U6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBcIk9jZWFuXCIsXHJcbiAgICAgICAgICAgIGpvYlRpdGxlOiBcIlNlcnZlclwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgYSBob3NwaXRhYmxlIGF0bW9zcGhlcmUgZm9yIGd1ZXN0cy4gTWFrZSBtZW51IHJlY29tZW5kYXRpb25zIGFuZCBzdWdnZXN0aW9ucyBvbiB3aW5lIHBhaXJpbmdzLCBwcm92aWRlIGd1ZXN0cyB3aXRoIGtub3dsZWRnZSBvbiBkaW5uZXIgbWVudSBhbmQgZHJpbmsgbWVudS4gVGFrZSBndWVzdHMgb3JkZXJzIGFuZCB0aW1lIGNvdXJzZXMgYXBwcm9wcmlhdGVseSwgYXQgdGhlIGVuZCBvZiB0aGUgbWVhbCBjb2xsZWN0IHBheW1lbnQgYW5kIHJlc2V0IGZvciB0aGUgbmV4dCB0YWJsZS5cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY29tcGFueU5hbWU6IFwiQnJpY2t0b3BzXCIsXHJcbiAgICAgICAgICAgIGpvYlRpdGxlOiBcIlNlcnZlclwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgYSBob3NwaXRhYmxlIGF0bW9zcGhlcmUgZm9yIGd1ZXN0cy4gTWFrZSBtZW51IHJlY29tZW5kYXRpb25zIGFuZCBzdWdnZXN0aW9ucyBvbiB3aW5lIHBhaXJpbmdzLCBwcm92aWRlIGd1ZXN0cyB3aXRoIGtub3dsZWRnZSBvbiBkaW5uZXIgbWVudSBhbmQgZHJpbmsgbWVudS4gVGFrZSBndWVzdHMgb3JkZXJzIGFuZCB0aW1lIGNvdXJzZXMgYXBwcm9wcmlhdGVseSwgYXQgdGhlIGVuZCBvZiB0aGUgbWVhbCBjb2xsZWN0IHBheW1lbnQgYW5kIHJlc2V0IGZvciB0aGUgbmV4dCB0YWJsZS5cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY29tcGFueU5hbWU6IFwiQ293ZmlzaFwiLFxyXG4gICAgICAgICAgICBqb2JUaXRsZTogXCJTZXJ2ZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGFrZSBmb29kIGFuZCBiZXZlcmFnZSBvcmRlcnMgZnJvbSBjdXN0b21lcnMsIGRlbGl2ZXIgd3JpdHRlbiByZXF1ZXN0cyB0byB0aGUga2l0Y2hlbiBmb3IgcHJlcGFyYXRpb24sIGNhcnJ5IGl0ZW1zIHRvIHRoZSB0YWJsZSBpbiB0aGUgcHJvcGVyIG9yZGVyLCBoZWxwIHRoZSBidXMgc3RhZmYgYXMgbmVlZGVkIHdpdGggdGhlIHJlbW92YWwgb2YgZmluaXNoZWQgcGxhdGVzLCByZWZpbGwgZHJpbmtzIGFuZCBjb2xsZWN0IHBheW1lbnQgd2hlbiB0aGUgbWVhbCBpcyBvdmVyLlwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNraWxsczogW3tcclxuICAgICAgICAgICAgc2tpbGw6IFwiTXVsdGl0YXNraW5nXCIsXHJcbiAgICAgICAgICAgIGlzQ29vbDogZmFsc2VcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNraWxsOiBcIkJvd2xpbmcgRXhwZXJ0XCIsXHJcbiAgICAgICAgICAgIGlzQ29vbDogdHJ1ZVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2tpbGw6IFwiU2hhcnBzaG9vdGVyXCIsXHJcbiAgICAgICAgICAgIGlzQ29vbDogdHJ1ZVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2tpbGw6IFwiVGVhbXdvcmtcIixcclxuICAgICAgICAgICAgaXNDb29sOiBmYWxzZVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2tpbGw6IFwiRmxleGlibGVcIixcclxuICAgICAgICAgICAgaXNDb29sOiBmYWxzZVxyXG4gICAgICAgIH1dXHJcbn07XHJcbmZ1bmN0aW9uIGRpc3BsYXlTa2lsbChza2lsbCwgaXNDb29sKSB7XHJcbiAgICBpZiAoaXNDb29sKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqIEJBTTogXCIgKyBza2lsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiogXCIgKyBza2lsbCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheVBvc2l0aW9uKGNvbXBhbnlOYW1lLCBqb2JUaXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiKiBcIiArIGpvYlRpdGxlICsgXCIgYXQgXCIgKyBjb21wYW55TmFtZSArIFwiIC0gXCIgKyBkZXNjcmlwdGlvbik7XHJcbn1cclxuY29uc29sZS5sb2coXCJOYW1lOiBcIiArIHJlc3VtZS5uYW1lLnRvVXBwZXJDYXNlKCkpO1xyXG5jb25zb2xlLmxvZyhcIkNhcmVlcjogXCIgKyByZXN1bWUuY2FyZWVyKTtcclxuY29uc29sZS5sb2coXCJEZXNjcmlwdGlvbjogXCIgKyByZXN1bWUuZGVzY3JpcHRpb24pO1xyXG5jb25zb2xlLmxvZyhcIlwiKTtcclxuY29uc29sZS5sb2coXCJNeSBJbnRlcmVzdHM6XCIpO1xyXG5mb3IgKHZhciBfaSA9IDAsIF9hID0gcmVzdW1lLmludGVyZXN0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgIHZhciBpbnRlcmVzdCA9IF9hW19pXTtcclxuICAgIGNvbnNvbGUubG9nKFwiKiBcIiArIGludGVyZXN0KTtcclxufVxyXG5jb25zb2xlLmxvZyhcIlwiKTtcclxuY29uc29sZS5sb2coXCJXb3JrIEV4cGVyaWVuY2U6XCIpO1xyXG5mb3IgKHZhciBfYiA9IDAsIF9jID0gcmVzdW1lLmV4cGVyaWVuY2U7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICB2YXIgZXhwZXJpZW5jZSA9IF9jW19iXTtcclxuICAgIGRpc3BsYXlQb3NpdGlvbihleHBlcmllbmNlLmNvbXBhbnlOYW1lLCBleHBlcmllbmNlLmpvYlRpdGxlLCBleHBlcmllbmNlLmRlc2NyaXB0aW9uKTtcclxufVxyXG5jb25zb2xlLmxvZyhcIlwiKTtcclxuY29uc29sZS5sb2coXCJNeSBTa2lsbHM6XCIpO1xyXG5mb3IgKHZhciBfZCA9IDAsIF9lID0gcmVzdW1lLnNraWxsczsgX2QgPCBfZS5sZW5ndGg7IF9kKyspIHtcclxuICAgIHZhciBza2lsbCA9IF9lW19kXTtcclxuICAgIGRpc3BsYXlTa2lsbChza2lsbC5za2lsbCwgc2tpbGwuaXNDb29sKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9