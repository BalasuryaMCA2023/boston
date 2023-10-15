# Boston file explanation

This HTML and JavaScript code fetches data from an external module, sorts it, and then displays the top 5 results in an HTML element. Here's a step-by-step explanation:

1. In the HTML part, you have a basic structure for an HTML document. It includes a `<script>` tag with the attribute `type="module"` to import an external JavaScript module named "assignment.js." There's also an empty `<div>` element with the id "app" where the sorted data will be displayed.

2. In the JavaScript code (assigment.js), you perform the following actions:

3 Import data from an external module named "boston.js" using the statement `import { boston } from "./boston.js";`. This suggests that "boston.js" likely contains data or variables that are required for this script.

 4  - Create a variable `newData` and assign the data from the "boston" import (`boston.data`) to it. This implies that "boston.js" contains a property named "data" with an array of information.

5   - Initialize two variables `ele` and `temp` as empty strings. These will be used to build HTML content and temporarily store data during sorting.

6   - Implement a nested loop to perform a simple sorting operation. The code compares values in the 12th column (index 11, assuming 0-based indexing) of the "newData" array and swaps elements if they are out of order. This sorting appears to be based on some numeric criterion.

7   - After sorting the data, the code selects the top 5 entries and stores them in the `output` variable using the `slice` method.

In summary, this script imports data from an external module, sorts it based on certain criteria, and displays the top 5 results in an HTML element with the id "app." 


https://github.com/BalasuryaMCA2023/boston/assets/139736173/8a568836-391b-4999-bf7b-846e8b187584


# Future improvements

This program only finds the 5 top shows in Boston Data Top salaries person  Future improvements for show the low salaries persons and high salaries person compare it 
