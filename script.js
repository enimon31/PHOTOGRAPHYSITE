const divOfBackground = document.getElementById('the_changed'); //Gets info from the id given
const styleOfBackground = window.getComputedStyle(divOfBackground, false); //Windows generates the styles for the id
var oldBackgroundImage = styleOfBackground.backgroundImage.slice(4, -1).replace(/"/g, ""); //Slice off the URL and replace the quotations
var dict = {
    "backGround": `url('images/img_2.webp')`,
    "backGroundTwo": `url('images/img_1.jpg')`,
    "backGroundThree": `url(images/img_3.webp)`,
    "backGroundFour": `url(images/img_4.webp)`,
    "imageOne": `images/img_1.jpg`,
    "imageTwo": `images/img_3.webp`,
    "imageThree": `images/img_4.webp`,
    0: `the_changed`,
    1: `image_change`,
    2: `image_changeI`,
    3: `image_changeII`
};


function changeImage() {
    newImageOne = oldBackgroundImage;
    if (document.getElementById(dict["1"]).src = dict["imageOne"]) {
        document.getElementById(dict["1"]).src = newImageOne;
        newImageOne = dict["backGroundTwo"];
        document.getElementById(dict["0"]).style.backgroundImage = newImageOne;
    }
};

function changeImageI() {
    newImageTwo = dict["backGroundTwo"];
    newImage = oldBackgroundImage;
    if (document.getElementById(dict["0"]).style.backgroundImage = newImageTwo) {
        document.getElementById(dict["2"]).src = dict["imageOne"];
        newImageOne = dict["backGroundThree"];
        document.getElementById(dict["0"]).style.backgroundImage = newImageOne;
    } else if (document.getElementById(dict["0"]).style.backgroundImage = newImage) {
        console.log(true)
        document.getElementById(dict["2"]).src = newImage;
    }
};


function changeImageII() {
    newImageThree = dict["backGroundThree"];
    if (document.getElementById(dict["0"]).style.backgroundImage = newImageThree) {
        document.getElementById(dict["3"]).src = dict["imageTwo"];
        newImageOne = dict["backGroundFour"];
        document.getElementById(dict["0"]).style.backgroundImage = newImageOne;
    }
};


function changeImageBack() {
    for (var i in dict) {
        newImageOne = oldBackgroundImage;
        if (document.getElementById(dict["1"]).src = newImageOne) {
            document.getElementById(dict["1"]).src = dict["imageOne"]
            newImageOne = dict["backGround"];
            document.getElementById(dict["0"]).style.backgroundImage = newImageOne;
        }
    };
}


function changeImageBackI() {
    document.getElementById('image_changeI').src = 'images/img_3.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_2.webp')";
}



function changeImageBackII() {
    document.getElementById('image_changeII').src = 'images/img_4.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_2.webp')";
}