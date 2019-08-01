function openTabs(tabName, targetButton, color) {
    // TODO: 1. Make three undefined variables: counter, wordsAndImages and linksAndButtons

    // **What is happening on this next line of code?** 
    wordsAndImages = document.getElementsByClassName("wordsAndImages");

    // TODO: 2. use the for loop to count and hide all the wordsAndImages on the page
    for (??? = 0; ??? < wordsAndImages.length; ???++) {
        wordsAndImages[???].style.display = "none";
    }

    // **What is happening on this next line of code?**
    linksAndButtons = document.getElementsByClassName("linksAndButtons");

    // TODO: 3. use the for loop to count and hide all the linksAndButtons on the page
    for (??? = 0; ??? < linksAndButtons.length; ???++) {
        linksAndButtons[???].style.backgroundColor = "";
    }

    // Show the new words, images, links and buttons for the new tab
    document.getElementById(tabName).style.display = "block";

    // TODO: 4. Assign this to the color that you chose for this tab
    targetButton.style.backgroundColor = ???;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();