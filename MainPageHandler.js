//TopRightButtons
let FaceBookButton = document.getElementById("Facebook");
let InstagramButton = document.getElementById("Instagram");
//Expeirence
let MyExperienceButton = document.getElementById("Coding_Button");
let MyExperience = document.getElementById("Experience_Text_Holder");
//MyWork
let MyWorksButton = document.getElementById("MyWork_Button");
let MyWork_Video = document.getElementById("FirstWork_PlaceHolder");
//Contact
let ContactButton = document.getElementById("Contacts_Button")
let FaceBookContactButton = document.getElementById("Facebook_Contact")
let InstagramContactButton = document.getElementById("Instagram_Contact")

ContactButton.addEventListener("click", function(){
    FaceBookContactButton.scrollIntoView({behavior: "smooth"})

})

FaceBookContactButton.addEventListener("click", function(){
    window.open("https://www.facebook.com/adrian.arances", "_blank");

})

InstagramContactButton.addEventListener("click", function(){
    window.open("https://www.instagram.com/adrianarancess", "_blank")
})

MyWorksButton.addEventListener("click", function() {
    MyWork_Video.scrollIntoView({behavior: "smooth"});
});

MyExperienceButton.addEventListener("click", function(){
    MyExperience.scrollIntoView({behavior: "smooth"});
});

FaceBookButton.addEventListener("click", function(){
    window.open("https://www.facebook.com/adrian.arances", "_blank");
});

InstagramButton.addEventListener("click", function(){
    window.open("https://www.instagram.com/adrianarancess", "_blank")
})

