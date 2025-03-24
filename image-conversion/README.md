# Image to WebP Converter

A simple yet powerful Python script that converts PNG, JPG, and JPEG images to the WebP format, offering superior compression and quality.

## Overview

This utility allows you to convert common image formats (PNG, JPG, JPEG) to the more efficient WebP format. WebP provides superior lossless and lossy compression for images on the web, resulting in smaller file sizes while maintaining visual quality.

## Features

- Convert PNG, JPG, and JPEG images to WebP format
- Process a single directory or recursively traverse subdirectories
- Interactive mode with user prompts
- Simple command-line interface
- Maintains original image quality while reducing file size

## Dependencies

- Python 3.6 or higher
- PIL (Python Imaging Library) / Pillow

## Installation

1. Ensure you have Python installed on your system
2. Install the required Pillow library:

```bash
pip install Pillow
```

3. Clone or download this repository:

```bash
git clone https://github.com/KigoJomo/handy-scripts.git
cd handy-scripts/image-conversion
```

## Usage

1. Modify the script to point to your target directory:

   Open `img_to_webp.py` and change the `directory` variable to your desired path:

   ```python
   # Specify the directory containing your images
   directory = '/path/to/your/images'
   ```

2. Run the script:

   ```bash
   python img_to_webp.py
   ```

3. When prompted, specify whether you want to traverse subdirectories:
   - Enter 'y' to process all images in the main directory and all subdirectories
   - Enter 'n' to process only the images in the specified directory

## How It Works

The script performs the following operations:

1. Verifies that the specified directory exists
2. Iterates through each file in the directory
3. For directories, it recursively processes them if the user has chosen to traverse subdirectories
4. For PNG, JPG, and JPEG files, it:
   - Opens the image using the Pillow library
   - Creates a new filename with the `.webp` extension
   - Converts and saves the image in WebP format
   - Displays a confirmation message for each converted image

## Benefits of WebP Format

- **Smaller File Sizes**: WebP images are typically 25-34% smaller than PNG and JPEG files of equivalent quality
- **Faster Website Loading**: Reduced file sizes lead to improved page load times
- **Supported by Major Browsers**: Chrome, Firefox, Edge, Opera, and most modern browsers support WebP
- **Transparency Support**: Unlike JPEG, WebP supports alpha channel transparency like PNG, but with better compression
- **Both Lossy and Lossless Compression**: WebP provides flexible compression options

## Customization Options

You can modify the script to:

- Change the quality of the WebP conversion by adding a quality parameter:

  ```python
  img.save(new_file_path, 'webp', quality=80)  # Adjust quality (0-100)
  ```

- Add an option to delete original files after conversion
- Implement parallel processing for larger directories
- Add command-line arguments for more flexibility

## Limitations

- The current implementation does not provide options for adjusting WebP quality settings
- Original files are kept intact (not deleted)
- No progress bar for large batches of images

## License

This script is released under the MIT License.

---

_Created with ❤️ as part of the handy-scripts collection_
