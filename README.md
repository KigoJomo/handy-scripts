# Handy Scripts

This repository contains a collection of handy scripts for various purposes. Each script is designed to solve a specific problem or automate a particular task. Below is an overview of the scripts included in this repository, along with their purposes, usage instructions, installation instructions, prerequisites, and necessary dependencies.

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
