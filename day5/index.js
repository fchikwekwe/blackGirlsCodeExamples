function openTabs(tabName, targetButton, color) {
    // TODO: 1. Make three undefined variables: counter, wordsAndImages and linksAndButtons
    var counter;
    var wordsAndImages;
    var linksAndButtons;

    // **What is happening on this next line of code?**
    wordsAndImages = document.getElementsByClassName("wordsAndImages");

    // TODO: 2. use the for loop to count and hide all the wordsAndImages on the page
    for (counter = 0; counter < wordsAndImages.length; counter++) {
        wordsAndImages[counter].style.display = "none";
    }

    // **What is happening on this next line of code?**
    linksAndButtons = document.getElementsByClassName("linksAndButtons");

    // TODO: 3. use the for loop to count and hide all the linksAndButtons on the page
    for (counter = 0; counter < linksAndButtons.length; counter++) {
        linksAndButtons[counter].style.backgroundColor = "";
    }

    // Show the new words, images, links and buttons for the new tab
    document.getElementById(tabName).style.display = "block";

    // TODO: 4. Assign this to the color that you chose for this tab
    targetButton.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
