# Handy Scripts

This repository contains a collection of handy scripts for various purposes. Each script is designed to solve a specific problem or automate a particular task.

## Table of Contents
- Scripts Overview
  - Image Conversion Script
  - LeetCode Challenge Scaffold Script
  - Next.js Essentials Scaffold Script
  - Code Analyzer Scripts
- Contributing
- License

## Scripts Overview

### 1. Image Conversion Script (`image-conversion/img_to_webp.py`)

#### Purpose
This script converts images in a specified directory from PNG or JPG format to WebP format.

#### Usage Instructions
1. Specify the directory containing your images by modifying the `directory` variable in the script.
2. Run the script and follow the prompt to choose whether to traverse subdirectories.

```bash
python img_to_webp.py
```

#### Installation Instructions
1. Ensure you have Python installed on your system.
2. Install the required dependencies using pip:

```bash
pip install pillow
```

#### Prerequisites
- Python
- Pillow library

#### Dependencies
- Pillow

### 2. LeetCode Challenge Scaffold Script (`leetcode-challenge-scaffold/create-challenge.js`)

#### Purpose
This script creates a scaffold for a new LeetCode challenge, including the necessary files and folder structure.

#### Usage Instructions
1. Run the script with the desired challenge name as an argument.

```bash
node create-challenge.js "Challenge Name"
```

#### Installation Instructions
1. Ensure you have Node.js installed on your system.

#### Prerequisites
- Node.js

#### Dependencies
- None

### 3. Next.js Essentials Scaffold Script (`nextjs-essentials-scaffold/scaffold.js`)

#### Purpose
This script scaffolds essential components, pages, and API routes for a Next.js project.

#### Usage Instructions
1. Run the script and follow the prompts to choose what to scaffold.

```bash
node scaffold.js
```

#### Installation Instructions
1. Ensure you have Node.js installed on your system.

#### Prerequisites
- Node.js

#### Dependencies
- react-slick (optional, for Carousel component)
- slick-carousel (optional, for Carousel component)

### 4. Code Analyzer Scripts (analyze-code)

#### Purpose
This directory contains scripts for analyzing code structures, interfaces, and components across different files. It includes a main analyzer script and a token counter utility.

#### Scripts
- `analyze_code.py`: Main script for code analysis and structure visualization
- `token_counter.py`: Utility for counting tokens in code files

#### Usage Instructions
1. Run the analyzer script, providing the path to the codebase you want to analyze:

```bash
python analyze_code.py
```

2. For token counting specifically:

```bash
python token_counter.py
```

#### Installation Instructions
1. Ensure you have Python installed on your system.
2. Install the required dependencies:

```bash
pip install -r analyze-code/requirements.txt
```

#### Prerequisites
- Python 3.6+

#### Dependencies
- Various Python libraries for code parsing and analysis

## Contributing

Contributions are welcome! If you have a script that you'd like to add to this collection, please follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-script`)
3. Add your script to the appropriate directory
4. Update the README.md to include your script following the established format
5. Commit your changes (`git commit -m 'Add amazing script'`)
6. Push to the branch (`git push origin feature/amazing-script`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Found a bug? Have a cool script to contribute? Or just want to say hi?

You can reach out through:
- ✉️ Email: kigojomo@gmail.com
- 🌐 Website: [jomokigo.vercel.app](https://jomokigo.vercel.app)

I'm always up for a collaboration! Drop a line anytime :-)