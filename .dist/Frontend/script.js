
//  VARIABLE AND PRINTING 
let appName = "CyberPath";
let version = "1.0.0";
let isSecure = true;
let userName = "JAY SHARMA"
let totalCourses = 4;
let siteName= "CyberPath JS.Learning"
console.log("App Name:", appName);
console.log("Version:", version);
console.log("Secure", isSecure);
console.log("User Name" ,userName );
console.log("Total Courses", totalCourses);
console.log("Site Name", siteName);


// FUNCTIONS AND IF ELSE 
function showWelcomeMessage() {
    if (userName === "JAY SHARMA"){
       console.log("Welcome to " + appName + "version " + version + "! Admin access granted ");
}   else {
    console.log("Welcome " +userName + " to " +appName);
} 
    }
    
   showWelcomeMessage();

   function checkSecurity (){
    if (isSecure === true){
        console.log("Site is secure");

    }else {
        console.log("Site is not secure ");
    }

   }
   checkSecurity();

   function checkCourses(){
    if (totalCourses > 3){
        console.log("You have enough courses");
        
    }else {
        console.log("You need to add more courses to your learning path");
    }

   } 
    checkCourses();


// DOM MANIPULATION
const title = document.getElementById('mainTitle');
title.innerHTML = "Welcome to CyberPath JS Learning";
title.style.color= "#60a5fa";

const main_subtitle = document.getElementById("subtitle");
main_subtitle.innerHTML ="NOW ! THE CYBERSECURITY LEARNING JOURNEY STARTS HERE";
main_subtitle.style.fontSize= "20px";

const knowMeBtn =document.getElementById("KnowMeBtn");
const cvPopup =document.getElementById("cvPopup");
const closeBtn =document.getElementById("closeBtn");
function openPopup(){
    cvPopup.style.display = "flex";
}
 
function closePopup(){
    cvPopup.style.display = "none";
}

knowMeBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

cvPopup.addEventListener("click", function(e) {
    if (e.target === cvPopup){
        cvPopup.style.display = "none";
    }

});

// Courses Array
const courses = [
    "Web Development",
    "Python Programming",
    "Cyber Security Basics",
    "C Programming"
];
// Loops
for (let i = 0; i < courses.length; i++) {
    console.log("Course " + (i + 1) + ": " + courses[i]);
}

