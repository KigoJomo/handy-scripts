#!/usr/bin/env node

/**
 * Next.js Scaffold CLI
 * 
 * This script automates the scaffolding of a Next.js project by generating pages, components, and API routes.
 * It supports both JavaScript and TypeScript, and includes options for adding CSS Modules, testing, internationalization, and more.
 * 
 * Features:
 * - Create pages with basic boilerplate.
 * - Generate essential or custom components.
 * - Scaffold API routes.
 * - Automatically install dependencies (e.g., React, Next.js, testing libraries).
 * - Initialize a Git repository with an initial commit.
 * - Fallback boilerplate for custom components when templates are not available.
 * 
 * Usage:
 * 1. Run the script: `node scaffold.js`
 * 2. Follow the interactive prompts to configure your project.
 * 
 * Supported Options:
 * - Language: JavaScript or TypeScript.
 * - Features: Pages, Components, API Routes, CSS Modules, Testing, Internationalization.
 * - Dependency Installation: Automatically install required dependencies.
 * - Git Initialization: Initialize a Git repository with an initial commit.
 * 
 * Example:
 * $ node scaffold.js
 * 
 * Dependencies:
 * - inquirer: For interactive command-line prompts.
 * - fs, path, child_process: Node.js built-in modules for file and process operations.
 * 
 * Notes:
 * - Ensure Node.js v12 or higher is installed.
 * - Add `"type": "module"` to your `package.json` to use ES Modules.
 * - Custom templates can be added to the `templates` object.
 * 
 * Author: Jomo Kigo
 * Version: 1.0.0
 * License: MIT
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import inquirer from 'inquirer';

const essentialComponents = ['Button', 'Footer', 'Header', 'Carousel'];

const templates = {
  typescript: {
    page: `
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <section className="">
        <h1>Page Title</h1>
      </section>  
    </>
  );
};

export default Page;
`,
    components: {
      Button: `
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
`,
      Footer: `
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Company</p>
    </footer>
  );
};

export default Footer;
`,
      Header: `
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application</h1>
    </header>
  );
};

export default Header;
`,
      Carousel: `
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
`,
    },
    apiRoute: `
import { NextApiResponse } from 'next';

export async function GET(res: NextApiResponse) {
  res.status(200).json({ message: 'API route works!' });
}
`,
  },
  javascript: {
    page: `
const Page = () => {
  return (
    <>
      <section className="">
        <h1>Page Title</h1>
      </section>  
    </>
  );
};

export default Page;
`,
    components: {
      Button: `
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
`,
      Footer: `
const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Company</p>
    </footer>
  );
};

export default Footer;
`,
      Header: `
const Header = () => {
  return (
    <header>
      <h1>My Application</h1>
    </header>
  );
};

export default Header;
`,
      Carousel: `
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
`,
    },
    apiRoute: `
export async function GET(req, res) {
  res.status(200).json({ message: 'API route works!' });
}
`,
  },
};

async function askQuestions() {
  const questions = [
    {
      type: 'list',
      name: 'language',
      message: 'Which language would you like to use?',
      choices: ['JavaScript', 'TypeScript'],
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Which features would you like to include?',
      choices: ['Pages', 'Components', 'API Routes', 'CSS Modules', 'Testing', 'Internationalization'],
    },
    {
      type: 'confirm',
      name: 'installDeps',
      message: 'Would you like to install dependencies automatically?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'initializeGit',
      message: 'Would you like to initialize a Git repository?',
      default: true,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

function createDirectory(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Created directory: ${dirPath}`);
    }
  } catch (error) {
    console.error(`❌ Error creating directory: ${dirPath}`, error);
  }
}

function createFile(filePath, content) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      console.log(`📄 Created file: ${filePath}`);
    } else {
      console.log(`⚠️ File already exists: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error creating file: ${filePath}`, error);
  }
}

function installDependencies(dependencies) {
  console.log('Installing dependencies...');
  exec(`npm install ${dependencies.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error installing dependencies: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

function initializeGit() {
  console.log('Initializing Git repository...');
  exec('git init && git add . && git commit -m "Initial commit"', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error initializing Git: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

function getComponentBoilerplate(componentName, useTypeScript) {
  if (useTypeScript) {
    return `
import React from 'react';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div>
      {/* Add your component code here */}
      ${componentName} Component
    </div>
  );
};

export default ${componentName};
`;
  } else {
    return `
const ${componentName} = () => {
  return (
    <div>
      {/* Add your component code here */}
      ${componentName} Component
    </div>
  );
};

export default ${componentName};
`;
  }
}

async function main() {
  console.log('\n✨ Welcome to the Next.js Scaffold CLI! ✨\n');

  const { language, features, installDeps, initializeGit } = await askQuestions();
  const useTypeScript = language === 'TypeScript';
  const fileExtension = useTypeScript ? 'tsx' : 'js';

  if (features.includes('Pages')) {
    console.log('\n--- 📄 Creating Pages ---\n');
    const pagesInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'pages',
        message: 'Enter page names (comma separated):',
      },
    ]);
    const pages = pagesInput.pages.split(',').map((p) => p.trim()).filter(Boolean);
    for (const page of pages) {
      const pageDir = path.join('app', page.toLowerCase());
      createDirectory(pageDir);
      const pagePath = path.join(pageDir, `page.${fileExtension}`);
      const template = useTypeScript ? templates.typescript.page : templates.javascript.page;
      createFile(pagePath, template.replace('Page Title', page.charAt(0).toUpperCase() + page.slice(1)));

      // Create a matching components folder for each page
      const componentsFolder = path.join('app', 'components', page.charAt(0).toUpperCase() + page.slice(1));
      createDirectory(componentsFolder);
    }
  }

  if (features.includes('Components')) {
    console.log('\n--- 🧩 Creating Components ---\n');
    const componentsChoice = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'allComponents',
        message: 'Create all essential components?',
        default: true,
      },
    ]);
    let components = essentialComponents;
    if (!componentsChoice.allComponents) {
      const componentsInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'components',
          message: 'Enter component names (comma separated):',
        },
      ]);
      components = componentsInput.components.split(',').map((c) => c.trim()).filter(Boolean);
    }

    const componentsDir = path.join('app', 'components');
    createDirectory(componentsDir);

    for (const component of components) {
      if (component === 'Carousel') {
        const installCarousel = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'install',
            message: 'Would you like to install react-slick and slick-carousel?',
            default: true,
          },
        ]);
        if (!installCarousel.install) {
          console.log('Skipping Carousel component.');
          continue;
        }
      }

      const componentPath = path.join(componentsDir, `${component}.${fileExtension}`);
      const template = useTypeScript ? templates.typescript.components[component] : templates.javascript.components[component];
      if (template) {
        createFile(componentPath, template);
      } else {
        // Fallback: Create a basic boilerplate component
        const boilerplate = getComponentBoilerplate(component, useTypeScript);
        createFile(componentPath, boilerplate);
        console.log(`📄 Created fallback boilerplate for: ${component}`);
      }
    }
  }

  if (features.includes('API Routes')) {
    console.log('\n--- 🔗 Creating API Routes ---\n');
    const apiRoutesInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'apiRoutes',
        message: 'Enter API route names (comma separated):',
      },
    ]);
    const apiRoutes = apiRoutesInput.apiRoutes.split(',').map((r) => r.trim()).filter(Boolean);
    const apiDir = path.join('app', 'api');
    createDirectory(apiDir);
    for (const route of apiRoutes) {
      const routeDir = path.join(apiDir, `${route}`);
      createDirectory(routeDir);
      const routePath = path.join(routeDir, `route.${fileExtension}`);
      const template = useTypeScript ? templates.typescript.apiRoute : templates.javascript.apiRoute;
      createFile(routePath, template);
    }
  }

  if (installDeps) {
    const dependencies = ['react', 'next'];
    if (features.includes('CSS Modules')) dependencies.push('sass');
    if (features.includes('Testing')) dependencies.push('jest', 'cypress');
    if (features.includes('Internationalization')) dependencies.push('next-i18next');
    installDependencies(dependencies);
  }

  if (initializeGit) {
    initializeGit();
  }

  console.log('\n🎉 Scaffolding complete!');
  console.log('🚀 Happy coding with your Next.js app!\n');
}

main().catch(console.error);