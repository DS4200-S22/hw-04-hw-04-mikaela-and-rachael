/**
 * Add text in the center of the circle that shows how many times this svg has 
 * been clicked on. Each time the svg is clicked on, the count should update.
 */
function circle1Clicked() {
    const curCount = parseInt(document.getElementById("circle1count").innerHTML);
    document.getElementById("circle1count").innerHTML = curCount + 1;
}

function circle3Clicked() {
    /**
     * Add functionality such that clicking on this svg hides it from the page. 
     * Clicking on the blank space the svg was in should un-hide the svg from the page. 
     * Hint: think about setting opacity in your css to show or hide the circle
     */
}