# LeetCode Challenge Scaffolder

A command-line utility that automatically generates a standardized folder structure for LeetCode coding challenges, helping you organize your solutions, tests, and documentation efficiently.

## Features

- Creates a dedicated folder for each LeetCode challenge
- Generates boilerplate solution code with JSDoc annotations
- Sets up Jest test files pre-configured for your solution
- Creates a README template to document the problem and your approach

## Installation

### Prerequisites

- Node.js (v12 or higher recommended)
- npm or yarn

### Setup

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Install dependencies (if any):

```bash
npm install
```

## Usage

Run the script from the command line with the challenge name as an argument:

```bash
node create-challenge.js "Two Sum"
```

This will create a new folder structure at `challenges/two-sum/` containing:

- `index.js`: Solution template
- `test.js`: Test file configured with Jest
- `README.md`: Documentation template

### Example

```bash
# Create a new challenge
node create-challenge.js "Merge Two Sorted Lists"

# Output:
# ✅ Challenge "merge-two-sorted-lists" created successfully in "challenges/merge-two-sorted-lists".
```

## Generated File Structure

For each challenge, the following files are created:

### index.js

Contains a template function where you'll implement your solution:

```javascript
/**
 * @param {any[]} args
 * @return {any}
 */
var functionName = function (...args) {
  // Your implementation here
};

module.exports = functionName;
```

### test.js

A Jest test file pre-configured for your solution:

```javascript
const functionName = require('./index');

test('Challenge Name', () => {
  const args = [];
  const expected = null; // Replace with expected result
  expect(functionName(...args)).toBe(expected);
});
```

### README.md

A documentation template for the challenge:

```markdown
# Challenge Name

## Problem Description

Provide the problem description here.

## Examples

Add example test cases here.

---
```

## Testing Your Solutions

After implementing your solution, run tests using Jest:

1. Make sure Jest is installed:

   ```bash
   npm install --global jest
   ```

2. Navigate to your challenge directory:

   ```bash
   cd challenges/challenge-name
   ```

3. Run the test:
   ```bash
   jest
   ```

## Customization

You can customize the template files by modifying the string templates in `create-challenge.js`:

- Change the `indexFileContent` variable to modify the solution template
- Adjust the `testFileContent` to change the test setup
- Update the `readmeContent` to alter the documentation structure

## Best Practices

1. Immediately after creating a challenge, fill in the problem description in the README
2. Update the function name in both `index.js` and `test.js` to match the challenge
3. Add multiple test cases to thoroughly validate your solution
4. Document your approach and any key insights in the README

## Contributing

Contributions are welcome! Here's how you can improve this tool:

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

## License

[MIT License](LICENSE)

## Acknowledgments

- Inspired by the need for consistent organization while solving LeetCode challenges
- Thanks to the Jest testing framework for making test-driven development easy
