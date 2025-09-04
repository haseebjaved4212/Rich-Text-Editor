# Rich Text Editor

A simple, modern, and responsive Rich Text Editor web application built with  JavaScript, HTML, and CSS. This editor allows users to format and style their text using a variety of options, including bold, italic, underline, lists, alignment, font family, font size, and color customization.

## Features

- **Text Formatting:** Bold, italic, underline, strikethrough, superscript, subscript
- **Text Alignment:** Left, center, right, and justify
- **Lists:** Ordered (numbered) and unordered (bulleted) lists
- **Font Customization:**
  - Change font size (7 levels)
  - Select from a list of popular fonts
- **Color Options:**
  - Font color
  - Highlight (background) color
- **Responsive Design:** Looks great on all devices
- **Modern UI:** Clean and intuitive interface with Font Awesome icons


## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required; simply open the HTML file

### Installation & Usage
1. **Clone or Download the Repository:**
   ```
   git clone <repo-url>
   ```
   or download and unzip the project folder.
2. **Open the Editor:**
   - Double-click `index.html` or open it in your browser.
3. **Start Editing:**
   - Use the toolbar to format and style your text in the editor area.

## Project Structure

```
A Rich Text Editor/
├── index.html      # Main HTML file
├── script.js        # JavaScript logic for editor functionality
├── stylr.css       # Styling for the editor
└── README.md       # Project documentation (this file)
```

## File Overview

- **index.html**: Contains the structure of the editor, toolbar, and the editable area. Links to the stylesheet and JavaScript file. Uses Font Awesome CDN for toolbar icons.
- **script.js**: Implements all editor logic, including toolbar event handling, text formatting using `document.execCommand`, font list population, color and size changes, and active state management for buttons.
- **style.css**: Provides a modern, clean, and responsive design for the editor, toolbar, and buttons.

## Customization
- Add more fonts by editing the `fontList` array in `index.js`.
- Extend formatting options by adding new buttons and handling their commands in JavaScript.
- Adjust the editor's appearance by modifying `index.css`.

## Dependencies
- [Font Awesome 6.1.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css) (CDN)

## Browser Compatibility
- Fully functional in all modern browsers.

## License

This project is open-source and free to use, modify, and distribute.

---
## Preview 

- [ Text Editor ]( https://haseebjaved4212.github.io/Rich-Text-Editor/)

**Enjoy writing with your new Rich Text Editor!**
