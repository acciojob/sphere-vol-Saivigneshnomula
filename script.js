
function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);

    let volume;

    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    document.getElementById("volume").value = volume.toFixed(4);

    return false;
}

  
