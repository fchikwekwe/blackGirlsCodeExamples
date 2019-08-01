function openTabs(tabName, targetButton, color) {
    // TODO: Make three undefined variables: counter, wordsAndImages and linksAndButtons
    var counter;
    var wordsAndImages;
    var linksAndButtons;

    wordsAndImages = document.getElementsByClassName("wordsAndImages");
    for (counter = 0; counter < wordsAndImages.length; counter++) {
        wordsAndImages[counter].style.display = "none";
    }

    // Remove the background color of all linksAndButtons/buttons
    linksAndButtons = document.getElementsByClassName("linksAndButtons");
    for (counter = 0; counter < linksAndButtons.length; counter++) {
        linksAndButtons[counter].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    targetButton.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();