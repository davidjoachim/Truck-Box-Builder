# **Truck Box Builder**

## **Project Overview**
Truck Box Builder is an online tool designed to help welders quickly and accurately generate both visual and numerical cut lists for custom truck tool boxes. By inputting the desired final dimensions of a box, the tool calculates the necessary piece sizes, accounting for the additional material needed for bends. The tool also provides a dynamically rendered blueprint-style output to show the pieces in scale, giving a clear visual representation alongside the cut list.

The idea for Truck Box Builder originated when a welder friend, who specializes in custom truck tool boxes, expressed the need for a tool that could streamline the process of generating precise cut lists. With Truck Box Builder, he can save time, reduce errors, and ensure that each box is built to exact specifications.

## **Key Features**
- **Input Form**: Users can input length, width, and height dimensions for the custom tool box. The form includes error checking to ensure no input is missing, and it validates that the values are within the practical limits of the machinery used in the shop.
- **Dynamic Cut List Generation**: The tool calculates the exact dimensions of each piece needed, accounting for the additional material required for bends, which are essential for creating the box’s final structure.
- **Visual Blueprint Output**: A dynamic rendering of the box's parts is generated based on the input dimensions, providing a visual guide. The blueprint is scaled and labeled with mixed number dimensions for easy interpretation.
- **Mixed Number Formatting**: The tool uses Math.js to convert decimal values into more readable mixed numbers, allowing for precision without sacrificing clarity.
- **Preloaded Default Dimensions**: Upon loading, the tool displays the most common box dimensions used by the welder, saving time when the user doesn’t need to input custom measurements.

## **How to Use**
1. **Default Dimensions**: By default, the input fields are pre-filled with the most common truck tool box dimensions used by the welder. The user can reference the default cut list immediately upon load.
   
2. **Custom Dimensions**: To input custom dimensions:
   - Enter the **length** (24 to 72 inches), **width**, and **height** (12 to 30 inches) of the desired final dimensions.
   - Ensure all values are in decimal form, rounded to the nearest half-inch.
   - Press the **Calculate** button to generate the cut list and visual blueprint.

3. **Results**: The tool will output:
   - A table containing the pieces that need to be cut, including dimensions adjusted for necessary bends.
   - A visual blueprint of the box parts, with the dimensions labeled in inches as mixed numbers. The blueprint provides a scaled representation of each piece.

4. **Decimal to Mixed Number Conversion**: The cut list and blueprint dimensions are displayed as mixed numbers for easy readability. This conversion ensures precision while avoiding the use of decimals that may lead to confusion during the cutting process.

## **Technical Details**
- **Form Validation**: The input form uses the `empty()` function to check for missing fields, and `min` and `max` limits ensure values are within a realistic range for the shop’s equipment.
- **Calculation Logic**: After receiving valid inputs, the length, width, and height values are used to calculate the necessary material for each part of the box. This includes allowances for bends required to form the lips and ribs of the box.
- **Dynamic Rendering**: Using HTML and JavaScript, the tool generates a scaled blueprint. The x and y values for each part are multiplied by a scale factor and rendered using CSS to create accurately sized rectangles representing each piece.
- **Math.js Integration**: The Math.js library is utilized for converting decimal dimensions into mixed numbers, simplifying them for real-world use by welders.

## **Project Setup**
To run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/TruckBoxBuilder.git
   ```
2. Open the `index.html` file in your preferred browser to interact with the tool.

## **Future Improvements**
- Add the option to save or print the generated cut list and blueprint for reference.
- Provide more customization for different types of truck tool boxes and materials.
- Implement user accounts to save frequent box configurations.
