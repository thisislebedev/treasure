let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance) {
    if (distance < 50) {
        return "Burn!";
    } else if (distance < 70) {
        return "Very Hot";
    } else if (distance < 150) {
        return "Hot";
    } else if (distance < 250) {
        return "Heat";
    } else if (distance < 350) {
        return "Coldly";
    } else if (distance < 500) {
        return "Very Cold";
    } else if (distance < 650) {
        return "Very Very Cold";
    } else {
        return "Frozen!";       
    }
    };

let width = 650;
let height = 650;
let clicks = 0;
let clickLimit = 20;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;

    if (clicks > clickLimit) {
        alert("THE END");
        return;
    }

    let distance = getDistance(event, target);

    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    $("#clicks-remaining").text("Attempts " + (clickLimit - clicks) + " left.");
 
    if (distance < 48) {
    alert("Treasure found! Clicks: " + clicks);
}
});