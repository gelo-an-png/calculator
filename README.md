Calculator Application

A simple and functional calculator web application built with HTML, CSS, and JavaScript. This calculator performs basic arithmetic operations with a clean interface and responsive design.

PROJECT STRUCTURE

The project consists of three main files:
- index.html: Contains the HTML structure of the calculator application
- style.css: Contains all styling and responsive design rules
- script.js: Contains all JavaScript functionality for calculator operations

FEATURES

Basic Arithmetic Operations
The calculator supports four basic arithmetic operations: addition, subtraction, multiplication, and division. Users can perform calculations by clicking number buttons, operator buttons, and the equals button.

Display Functionality
The calculator display shows different information based on the current state. When an operator is selected, it displays the first number followed by the operator symbol. As the user enters the second number, the display shows the full expression with both numbers and the operator. When the equals button is clicked, only the final result is displayed.

Number Input
Users can input numbers from 0 to 9 and decimal points. The calculator prevents duplicate decimal points in a single number and handles number formatting automatically. Leading zeros are managed appropriately.

Operator Selection
Users can select from four operators: addition, subtraction, multiplication, and division. The multiplication operator is displayed as × in the interface. When an operator is clicked, the calculator prepares for the next number input and displays the current expression.

Clear Functionality
The Clear button resets the calculator to its initial state, clearing all values, operators, and error messages. The display returns to showing zero.

Error Handling
The calculator includes comprehensive error handling for invalid operations. Division by zero displays an error message and automatically resets the calculator. Invalid calculations are caught and appropriate error messages are shown to the user.

Input Validation
The calculator validates all user input to prevent invalid operations. Duplicate decimal points are prevented, and the calculator ensures only valid number formats are accepted. The display automatically formats values for readability.

Loading States
All buttons include loading animations that activate when clicked to prevent double-clicking and provide visual feedback during processing. Each button shows a CSS-based spinner animation while processing the user's input.

Responsive Design
The application is fully responsive and works on all screen sizes including mobile devices, tablets, and desktop computers. The layout adapts to different screen sizes with appropriate button sizes, font sizes, and spacing.

HOW TO RUN

1. Open the calculator folder in your project directory
2. Open index.html in a web browser
3. Click number buttons to input values
4. Click operator buttons to select an operation
5. Click the equals button to perform the calculation
6. Click the Clear button to reset the calculator

USAGE EXAMPLES

Basic Addition
Click 5, then click +, then click 3, then click = to get the result 8. The display will show 5 + 3 while entering, then show 8 after clicking equals.

Basic Subtraction
Click 10, then click -, then click 4, then click = to get the result 6. The display will show 10 - 4 while entering, then show 6 after clicking equals.

Basic Multiplication
Click 7, then click ×, then click 6, then click = to get the result 42. The display will show 7 × 6 while entering, then show 42 after clicking equals.

Basic Division
Click 20, then click /, then click 4, then click = to get the result 5. The display will show 20 / 4 while entering, then show 5 after clicking equals.

Decimal Numbers
Click 3, then click ., then click 5, then click +, then click 2, then click ., then click 5, then click = to get the result 6. The calculator handles decimal point input and calculations correctly.

TECHNICAL DETAILS

Display Logic
The calculator display updates dynamically based on the current calculation state. When an operator is selected and no second number has been entered yet, it shows the first number and operator. When a second number is being entered, it shows the full expression. After calculation, only the result is displayed.

Calculation Precision
Results are rounded to 8 decimal places to handle floating point precision issues while maintaining accuracy for most calculations. This prevents display of extremely long decimal numbers while preserving calculation accuracy.

State Management
The calculator maintains four main state variables: current value, previous value, operator, and reset flag. These variables track the calculation state and determine what should be displayed and how input should be processed.

Operator Symbol Display
The calculator converts internal operator symbols to display symbols. The multiplication operator is stored as * internally but displayed as × in the user interface for better readability.

Button Loading Mechanism
Each button click triggers a loading state that lasts between 150 and 200 milliseconds depending on the operation. This prevents rapid double-clicking and provides visual feedback. The loading spinner is created using pure CSS without external icon libraries.

Error Display
Error messages are displayed in a dedicated error container below the main display. Errors are automatically cleared when the user performs a new operation or resets the calculator.

Code Organization
The JavaScript code uses only functions without constructors, initialization functions, or document onload events. All functionality is organized into specific functions that handle different aspects of calculator operations. Event listeners are set up through a dedicated function that runs when the script loads.

CSS Class Naming
All CSS classes use the calculator- prefix to prevent conflicts with other stylesheets. This ensures the calculator styles are isolated and do not interfere with other page elements.

Responsive Breakpoints
The calculator includes three main responsive breakpoints: mobile devices up to 360px width, larger mobile devices up to 480px width, and tablet and desktop devices 768px and above. Each breakpoint adjusts button sizes, font sizes, and spacing appropriately.

Browser Compatibility
The application works in all modern web browsers that support ES6 JavaScript features including const and let declarations, arrow functions, and modern DOM manipulation methods. The CSS uses standard properties that are supported in all modern browsers.

Screenshot
<img width="764" height="676" alt="image" src="https://github.com/user-attachments/assets/af3a6586-0cd0-4e7c-9731-581e857c37ca" />

