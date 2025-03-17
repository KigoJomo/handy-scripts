import os

# Define the directory to search and the output file
directory_to_search = "/home/roci/Athena/GitHub/qa-qe-fullstack/assignments/express/library"

# Define the output file name
output_file = "output.md"

# Define the file extensions to include
valid_extensions = {".ts", ".tsx", ".js", ".jsx", ".css", ".d.ts", ".json", ".html"}

# Define directories to exclude (case-insensitive)
excluded_dirs = {
  "node_modules",
  ".git",
  ".venv",
  ".vscode",
  "venv",
  "dist",
  "build",
  "__pycache__",
  ".next",
  "images",
  "videos",
  "fonts",
}

# Define files to ignore (exact file names)
excluded_files = {
  "scaffold.js",
  "jsonconfig.json",
  "package-lock.json",
  ".eslintrc.json",
  # "tsconfig.json",
  # "package.json",
  "package-lock.json",
  "globals.css",
  "output.css",
  "rough.js",
  "rough.ts",
  "rough.tsx",
  "rough.json",
  "rough.md",
  "rough.txt",
}

# Open the output file for writing
with open(output_file, "w", encoding="utf-8") as outfile:
  # Walk through the directory
  for root, dirs, files in os.walk(directory_to_search):
    # Skip excluded directories by modifying the 'dirs' list in-place
    dirs[:] = [d for d in dirs if d.lower() not in excluded_dirs]
    
    for file in files:
      # Skip files that are in the excluded_files set
      if file in excluded_files:
        continue

      # Get the file extension
      _, ext = os.path.splitext(file)
      if ext in valid_extensions:
        # Construct the full file path
        file_path = os.path.join(root, file)
        # Write the file path to the output file
        outfile.write(f"{file_path}\n")
        outfile.write(f"```{ext[1:]}\n")
        # Read and write the file content
        try:
          with open(file_path, "r", encoding="utf-8") as infile:
            outfile.write(infile.read())
            outfile.write(f"\n```")
        except UnicodeDecodeError:
          print(f"Skipped binary/unreadable file: {file_path}")
        # Add a separator between files
        outfile.write("\n\n---\n\n")

print(f"All code has been written to {output_file}")