var backgroundImages = document.getElementById('the_changed').style.backgroundImage;
var test = document.getElementById('image_change').src;
console.log(test)
console.log(backgroundImages);

function changeImage() {
    document.getElementById('image_change').src = 'images/img_2.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_1.jpg')";
}

function changeImageBack() {
    document.getElementById('image_change').src = 'images/img_1.jpg';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_2.webp')";
}

function changeImageI() {
    document.getElementById('image_changeI').src = 'images/img_2.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_3.webp')";
}

function changeImageBackI() {
    document.getElementById('image_changeI').src = 'images/img_3.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_2.webp')";
}

function changeImageII() {
    document.getElementById('image_changeII').src = 'images/img_2.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_4.webp')";
}

function changeImageBackII() {
    document.getElementById('image_changeII').src = 'images/img_4.webp';
    document.getElementById('the_changed').style.backgroundImage = "url('images/img_2.webp')";
}