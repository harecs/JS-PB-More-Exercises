function weatherForecastByDegrees(input) {
    let degrees = parseFloat(input);

    if (degrees >= 5 && degrees <= 11.9) {
        console.log("Cold");
    } else if (degrees >= 12 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 15 && degrees <= 20) {
        console.log("Mild");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 26 && degrees <= 35) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}