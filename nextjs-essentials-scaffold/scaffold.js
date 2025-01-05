#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const essentialComponents = [
  'Button',
  'Footer',
  'Header',
  'Carousel',
];

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

async function askQuestion(question, defaultAnswer = '') {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer || defaultAnswer);
    });
  });
}

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dirPath}`);
  }
}

function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`📄 Created file: ${filePath}`);
  } else {
    console.log(`⚠️ File already exists: ${filePath}`);
  }
}

async function main() {
  console.log('\n✨ Welcome to the Next.js Scaffold CLI! ✨\n');
  console.log('What would you like to scaffold?');
  console.log('1. Pages');
  console.log('2. Components');
  console.log('3. API Routes');
  console.log('4. All of the above');

  const choice = await askQuestion('> ');

  const useTypeScript = (await askQuestion('\n🛠️ Would you like to use TypeScript? (y/N): ')).toLowerCase() === 'y';
  const fileExtension = useTypeScript ? 'tsx' : 'js';

  if (choice === '1' || choice === '4') {
    console.log('\n--- 📄 Creating Pages ---\n');
    const pagesInput = await askQuestion('Enter page names (comma separated): ');
    const pages = pagesInput.split(',').map((p) => p.trim()).filter(Boolean);
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

  if (choice === '2' || choice === '4') {
    console.log('\n--- 🧩 Creating Components ---\n');
    const componentsChoice = await askQuestion('Create all essential components? (Y/n): ');
    let components = essentialComponents;
    if (componentsChoice.toLowerCase() === 'n') {
      const componentsInput = await askQuestion('Enter component names (comma separated): ');
      components = componentsInput.split(',').map((c) => c.trim()).filter(Boolean);
    }

    const componentsDir = path.join('app', 'components');
    createDirectory(componentsDir);

    for (const component of components) {
      if (component === 'Carousel') {
        const installCarousel = await askQuestion('Would you like to install react-slick and slick-carousel? (Y/n): ');
        if (installCarousel.toLowerCase() === 'n') {
          console.log('Skipping Carousel component.');
          continue;
        }
      }

      const componentPath = path.join(componentsDir, `${component}.${fileExtension}`);
      const template = useTypeScript ? templates.typescript.components[component] : templates.javascript.components[component];
      if (template) {
        createFile(componentPath, template);
      } else {
        console.error(`❌ Template for ${component} not found.`);
      }
    }
  }

  if (choice === '3' || choice === '4') {
    console.log('\n--- 🔗 Creating API Routes ---\n');
    const apiRoutesInput = await askQuestion('Enter API route names (comma separated): ');
    const apiRoutes = apiRoutesInput.split(',').map((r) => r.trim()).filter(Boolean);
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

  console.log('\n🎉 Scaffolding complete!');
  console.log('🚀 Happy coding with your Next.js app!\n');
  rl.close();
}

main().catch(console.error);
