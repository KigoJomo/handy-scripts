from PIL import Image
import os

def convert_images_to_webp(directory, traverse_subdirectories):
    # Make sure the directory exists
    if not os.path.isdir(directory):
        print(f"The directory {directory} does not exist.")
        return
    
    # Iterate over all files in the directory
    for filename in os.listdir(directory):
        # Construct full file path
        file_path = os.path.join(directory, filename)
        
        # Check if the file is a directory
        if os.path.isdir(file_path) and traverse_subdirectories:
            # Recursively call the function for subdirectories
            convert_images_to_webp(file_path, traverse_subdirectories)
        else:
            # Check for PNG or JPG files
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                # Open the image file
                with Image.open(file_path) as img:
                    # Define the new filename with .webp extension
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_file_path = os.path.join(directory, new_filename)
                    # Convert and save as WebP
                    img.save(new_file_path, 'webp')
                    print(f"Converted {filename} to {new_filename}")

# Specify the directory containing your images
directory = '/home/nova/Athena/GitHub/jomokigo/public/images/skills'

# Prompt the user for their preference
traverse_subdirectories = input("Do you want to traverse sub-directories? (y/n): ").lower() == 'y'

convert_images_to_webp(directory, traverse_subdirectories)