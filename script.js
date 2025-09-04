const textInput = document.getElementById("text-input");
const optionsButtons = document.querySelectorAll(".option-button");
const advancedOptionButton = document.querySelectorAll(".adv-option-button");
const fontName = document.getElementById("fontName");
const fontSize = document.getElementById("fontSize");
const fontColor = document.getElementById("foreColor");
const backColor = document.getElementById("backColor");

// Font List
const fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

// Initialize editor
const initializeEditor = () => {
    // Populate font names
    fontList.forEach((font) => {
        const option = document.createElement("option");
        option.value = font;
        option.innerHTML = font;
        fontName.appendChild(option);
    });
    
    // Default size
    fontSize.value = "3";
};

// Main logic for text modification
const modifyText = (command, value = null) => {
    document.execCommand(command, false, value);
    textInput.focus();
};

// Button click handlers
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const command = button.dataset.format || button.dataset.align;
        modifyText(command);
        
        if (!button.classList.contains("align")) {
            button.classList.toggle("active");
        } else {
            // Remove active class from all alignment buttons
            document.querySelectorAll(".align").forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        }
    });
});

// Advanced options handlers (fontSize, fontName, colors)
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, button.value);
    });
});

// Initialize on page load
window.onload = initializeEditor;