const affirmations = [
    "You are loved.",
    "You are enough.",
    "You are strong.",
    "I appreciate it when you.",
    "You are amazing.",
    "You are unique.",
    "You are brave.",
    "You are confident.",
    "You are worthy.",
    "I feel so grateful that I get to be with you.",
    "No one makes me [laugh as much as/feel as happy/feel as beautiful] as you do.",
    "I’m so proud of you.",
    "I hope you know how much you mean to me.",
    "I love that I can be myself with you",
    "Thank you for being in my life.",
    "I’m proud to be your partner.",
    "I love how you make time for me.",
    "Things feel easier with you here.",
    "I feel so lucky to have you in my life.",
    "I am proud of you for always trying your best, whatever it is.",
    "Thank you for making me feel safe and loved.",
    "You are doing such a great job. I’m really proud of you",
    "You are one of my favorite people to be around.",
    "You are loved, cherished, and extraordinary.",
    "You are truly extraordinary.",

];

// Function to generate a random affirmation
function generateAffirmation() {
    const affirmationElement = document.getElementById("affirmation");
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    affirmationElement.textContent = affirmation;

    // Enable the copy button once an affirmation is generated
    const copyButton = document.getElementById("copyButton");
    copyButton.disabled = false;
}

// Function to copy the affirmation text to the clipboard
function copyAffirmation() {
    const affirmationElement = document.getElementById("affirmation");
    const textToCopy = affirmationElement.textContent;

    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    //alert("already copy");
}