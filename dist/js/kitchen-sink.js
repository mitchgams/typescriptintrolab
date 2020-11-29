/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************!*\
  !*** ./kitchen-sink.ts ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var firstName = "Mitchell";
var stateCount = 50;
var fivePlusFour = 5 + 4;
/**************
 * Function displaying Hello
 */
function sayHello() {
    alert("Hello World!");
}
sayHello();
/*********************
 * checkAge checks to make sure you
 * are 21 or older
 */
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var favoriteVegetables = ["Okra", "Asparagus", "Spinach", "Artichokes", "Brussell Sprouts", "Cabbage"];
for (var _i = 0, favoriteVegetables_1 = favoriteVegetables; _i < favoriteVegetables_1.length; _i++) {
    var veggie = favoriteVegetables_1[_i];
    console.log(veggie);
}
var pet = {
    name: "Carl",
    breed: "Pitbull"
};
console.log(pet.name + " is a " + pet.breed);
var people = [
    { name: "Susan", age: 27 },
    { name: "Carl", age: 20 },
    { name: "Billy", age: 34 },
    { name: "Meagan", age: 25 },
    { name: "Mike", age: 18 }
];
for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
    var person = people_1[_a];
    checkAge(person.name, person.age);
}
/*********************
 * getLength() checks the length of a given string
 */
function getLength(str) {
    return str.length;
}
var strLength = getLength("Hello World");
if (strLength % 2 < 1) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWJwcmFjdGljZS8uL2tpdGNoZW4tc2luay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsa0NBQWtDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssd0JBQXdCO0FBQzdCLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUs7QUFDTDtBQUNBLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoia2l0Y2hlbi1zaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBmaXJzdE5hbWUgPSBcIk1pdGNoZWxsXCI7XHJcbnZhciBzdGF0ZUNvdW50ID0gNTA7XHJcbnZhciBmaXZlUGx1c0ZvdXIgPSA1ICsgNDtcclxuLyoqKioqKioqKioqKioqXHJcbiAqIEZ1bmN0aW9uIGRpc3BsYXlpbmcgSGVsbG9cclxuICovXHJcbmZ1bmN0aW9uIHNheUhlbGxvKCkge1xyXG4gICAgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIik7XHJcbn1cclxuc2F5SGVsbG8oKTtcclxuLyoqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBjaGVja0FnZSBjaGVja3MgdG8gbWFrZSBzdXJlIHlvdVxyXG4gKiBhcmUgMjEgb3Igb2xkZXJcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrQWdlKG5hbWUsIGFnZSkge1xyXG4gICAgaWYgKGFnZSA8IDIxKSB7XHJcbiAgICAgICAgYWxlcnQoXCJTb3JyeSBcIiArIG5hbWUgKyBcIiwgeW91IGFyZW4ndCBvbGQgZW5vdWdoIHRvIHZpZXcgdGhpcyBwYWdlIVwiKTtcclxuICAgIH1cclxufVxyXG5jaGVja0FnZShcIkNoYXJsZXNcIiwgMjEpO1xyXG5jaGVja0FnZShcIkFiYnlcIiwgMjcpO1xyXG5jaGVja0FnZShcIkphbWVzXCIsIDE4KTtcclxuY2hlY2tBZ2UoXCJKb2huXCIsIDE3KTtcclxudmFyIGZhdm9yaXRlVmVnZXRhYmxlcyA9IFtcIk9rcmFcIiwgXCJBc3BhcmFndXNcIiwgXCJTcGluYWNoXCIsIFwiQXJ0aWNob2tlc1wiLCBcIkJydXNzZWxsIFNwcm91dHNcIiwgXCJDYWJiYWdlXCJdO1xyXG5mb3IgKHZhciBfaSA9IDAsIGZhdm9yaXRlVmVnZXRhYmxlc18xID0gZmF2b3JpdGVWZWdldGFibGVzOyBfaSA8IGZhdm9yaXRlVmVnZXRhYmxlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgdmFyIHZlZ2dpZSA9IGZhdm9yaXRlVmVnZXRhYmxlc18xW19pXTtcclxuICAgIGNvbnNvbGUubG9nKHZlZ2dpZSk7XHJcbn1cclxudmFyIHBldCA9IHtcclxuICAgIG5hbWU6IFwiQ2FybFwiLFxyXG4gICAgYnJlZWQ6IFwiUGl0YnVsbFwiXHJcbn07XHJcbmNvbnNvbGUubG9nKHBldC5uYW1lICsgXCIgaXMgYSBcIiArIHBldC5icmVlZCk7XHJcbnZhciBwZW9wbGUgPSBbXHJcbiAgICB7IG5hbWU6IFwiU3VzYW5cIiwgYWdlOiAyNyB9LFxyXG4gICAgeyBuYW1lOiBcIkNhcmxcIiwgYWdlOiAyMCB9LFxyXG4gICAgeyBuYW1lOiBcIkJpbGx5XCIsIGFnZTogMzQgfSxcclxuICAgIHsgbmFtZTogXCJNZWFnYW5cIiwgYWdlOiAyNSB9LFxyXG4gICAgeyBuYW1lOiBcIk1pa2VcIiwgYWdlOiAxOCB9XHJcbl07XHJcbmZvciAodmFyIF9hID0gMCwgcGVvcGxlXzEgPSBwZW9wbGU7IF9hIDwgcGVvcGxlXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICB2YXIgcGVyc29uID0gcGVvcGxlXzFbX2FdO1xyXG4gICAgY2hlY2tBZ2UocGVyc29uLm5hbWUsIHBlcnNvbi5hZ2UpO1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKipcclxuICogZ2V0TGVuZ3RoKCkgY2hlY2tzIHRoZSBsZW5ndGggb2YgYSBnaXZlbiBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldExlbmd0aChzdHIpIHtcclxuICAgIHJldHVybiBzdHIubGVuZ3RoO1xyXG59XHJcbnZhciBzdHJMZW5ndGggPSBnZXRMZW5ndGgoXCJIZWxsbyBXb3JsZFwiKTtcclxuaWYgKHN0ckxlbmd0aCAlIDIgPCAxKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSB3b3JsZCBpcyBuaWNlIGFuZCBldmVuIVwiKTtcclxufVxyXG5lbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIHdvcmxkIGlzIGFuIG9kZCBwbGFjZSFcIik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==