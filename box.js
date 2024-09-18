function Function() {
    // Get the input value for the boxes length and convert to number
    var x = document.getElementById("x").value;
    x = Number(x);

    // Get the input value for the boxes width and convert to number
    var z = document.getElementById("z").value;
    z = Number(z);

    // Get the input value for the boxes height and convert to number
    var y = document.getElementById("y").value;
    y = Number(y);


    // Set the scale for the boxes on the blueprint
    var scale = 7;

    // Calculate the dimensions for the shell accounting for the bends
    var xShell = x;
    var yShell = 2 * z + y + 6.75;

    // Add the shells x and y values to the table converted to mixed numbers
    document.getElementById("shellX").innerHTML = mixedNum(xShell);
    document.getElementById("shellY").innerHTML = mixedNum(yShell);

    // Add the shells x and y values to the blueprint's shell rectangle converted to mixed numbers
    document.getElementById("shell-x").innerHTML = mixedNum(xShell);
    document.getElementById("shell-y").innerHTML = mixedNum(yShell);

    // Multiply the x and y values by the scale and add px on the end to change the div dimentions for the blueprint
    document.getElementById("shell").style.width = xShell * scale + "px";
    document.getElementById("shell").style.height = yShell * scale + "px";


    // Calculate the dimensions for the sides accounting for the bends
    var xSide = z - 1;
    var ySide = y + 3.75;

    // Add the sides x and y values to the table converted to mixed numbers
    document.getElementById("sideX").innerHTML = mixedNum(xSide);
    document.getElementById("sideY").innerHTML = mixedNum(ySide);

    // Add the sides x and y values to the blueprint's side rectangle converted to mixed numbers
    document.getElementById("side-x").innerHTML = mixedNum(xSide);
    document.getElementById("side-y").innerHTML = mixedNum(ySide);

    // Multiply the x and y values by the scale and add px on the end to change the div dimentions for the blueprint
    document.getElementById("side").style.width = xSide * scale + "px";
    document.getElementById("side").style.height = ySide * scale + "px";


    // Calculate the dimensions for the door accounting for the bends
    var xDoor = x - 3;
    var yDoor = y + 1.125;

    // Add the doors x and y values to the table converted to mixed numbers
    document.getElementById("doorX").innerHTML = mixedNum(xDoor);
    document.getElementById("doorY").innerHTML = mixedNum(yDoor);

    // Add the doors x and y values to the blueprint's door rectangle converted to mixed numbers
    document.getElementById("door-x").innerHTML = mixedNum(xDoor);
    document.getElementById("door-y").innerHTML = mixedNum(yDoor);

    // Multiply the x and y values by the scale and add px on the end to change the div dimentions for the blueprint
    document.getElementById("door").style.width = xDoor * scale + "px";
    document.getElementById("door").style.height = yDoor * scale + "px";


    // Calculate the dimensions for the ribs accounting for the bends
    var yRib = y + .875;

    // Add the ribs y value to the table converted to a mixed number
    document.getElementById("ribY").innerHTML = mixedNum(yRib);

    // Add the ribs y value to the blueprint's rib rectangle converted to a mixed number
    document.getElementById("rib-y").innerHTML = mixedNum(yRib);

    // Multiply the y value by the scale and add px on the end to change the div dimention for the blueprint
    document.getElementById("rib").style.height = yRib * scale + "px";


    // Prevent the page from reloading on submit
    if (event.preventDefault) {
        event.preventDefault();
    }
    else {
        event.returnValue = false;
    }
}

// Coverts decimal to mixed number
function mixedNum(i) {
    // Rounds down to the nearest integer
    var iInt = Math.floor(i);
    // Calculate the remaining decimal value
    var iDec = i - iInt;
    // Check if no decimal to convert to a fraction and if so return the integer
    if (iDec == 0) {
        return iInt;
    }
    // return the mixed number calculated
    return (iInt + " " + math.format(math.fraction(iDec)));
}

// Check if the input fields are empty
function empty() {
    var x = document.getElementById("x").value;
    // check if the length input field is empty and if so issue an alert
    if (x == "") {
        alert("Enter a value for length.");
        return false;
    }
    var z = document.getElementById("z").value;
    // check if the width input field is empty and if so issue an alert
    if (z == "") {
        alert("Enter a value for width.");
        return false;
    }
    var y = document.getElementById("y").value;
    // check if the height input field is empty and if so issue an alert
    if (y == "") {
        alert("Enter a value for height.");
        return false;
    }
}