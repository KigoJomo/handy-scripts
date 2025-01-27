# Next.js Scaffold CLI

A command-line tool to automate the scaffolding of Next.js projects. This script generates pages, components, and API routes, and supports both JavaScript and TypeScript. It also includes options for adding CSS Modules, testing, internationalization, and more.

---

## Features

- **Pages**: Generate pages with basic boilerplate.
- **Components**: Create essential or custom components.
- **API Routes**: Scaffold API routes.
- **Dependency Installation**: Automatically install required dependencies (e.g., React, Next.js, testing libraries).
- **Git Initialization**: Initialize a Git repository with an initial commit.
- **Fallback Boilerplate**: Generate basic boilerplate for custom components when templates are not available.

---

## Installation

1. Clone this repository or download the `scaffold.js` script.
2. Ensure Node.js v12 or higher is installed.
3. Install the required dependencies:
   ```bash
   npm install inquirer
   ```
4. Add `"type": "module"` to your `package.json` to enable ES Modules.

---

## Usage

Run the script using Node.js:

```bash
node scaffold.js
```

Follow the interactive prompts to configure your project:

1. **Language**: Choose between JavaScript or TypeScript.
2. **Features**: Select the features to include (Pages, Components, API Routes, CSS Modules, Testing, Internationalization).
3. **Dependency Installation**: Choose whether to install dependencies automatically.
4. **Git Initialization**: Optionally initialize a Git repository with an initial commit.

---

## Example

```bash
$ node scaffold.js

✨ Welcome to the Next.js Scaffold CLI! ✨

? Which language would you like to use? (Use arrow keys)
❯ JavaScript
  TypeScript

? Which features would you like to include? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Pages
 ◉ Components
 ◉ API Routes
 ◯ CSS Modules
 ◯ Testing
 ◯ Internationalization

? Would you like to install dependencies automatically? (Y/n) Y
? Would you like to initialize a Git repository? (Y/n) Y

🎉 Scaffolding complete!
🚀 Happy coding with your Next.js app!
```

---

## Custom Templates

You can add custom templates to the `templates` object in the script. The script supports both JavaScript and TypeScript templates for pages, components, and API routes.

### Example: Adding a Custom Component Template

```javascript
const templates = {
  typescript: {
    components: {
      MyCustomComponent: `
import React from 'react';

interface MyCustomComponentProps {
  // Define your props here
}

const MyCustomComponent: React.FC<MyCustomComponentProps> = () => {
  return (
    <div>
      {/* Add your component code here */}
      MyCustomComponent
    </div>
  );
};

export default MyCustomComponent;
`,
    },
  },
  javascript: {
    components: {
      MyCustomComponent: `
const MyCustomComponent = () => {
  return (
    <div>
      {/* Add your component code here */}
      MyCustomComponent
    </div>
  );
};

export default MyCustomComponent;
`,
    },
  },
};
```

---

## Fallback Boilerplate

If a template is not available for a custom component, the script will generate a basic boilerplate file. For example:

### TypeScript (`SideMenu.tsx`):
```typescript
import React from 'react';

interface SideMenuProps {
  // Define your props here
}

const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <div>
      {/* Add your component code here */}
      SideMenu Component
    </div>
  );
};

export default SideMenu;
```

### JavaScript (`MenuButton.js`):
```javascript
const MenuButton = () => {
  return (
    <div>
      {/* Add your component code here */}
      MenuButton Component
    </div>
  );
};

export default MenuButton;
```

---

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive command-line prompts.
- Node.js built-in modules: `fs`, `path`, `child_process`.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

[Jomo Kigo](https://jomokigo.vercel.app)   
[My GitHub Profile](https://github.com/KigoJomo)  
[Email Me](mailto:kigojomo@gmail.com)