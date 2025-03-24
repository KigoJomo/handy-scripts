# Code Analysis Tools

A collection of Python scripts for extracting and analyzing code from a project directory, primarily designed to prepare code for AI chatbot interactions.

## Tools

### 1. Code Extractor (`analyze_code.py`)

Extracts code from specified directories, excluding unwanted files and directories, and formats it into a single output file.

### 2. Token Counter (`token_counter.py`)

Counts the number of tokens in the output file to determine if it's suitable for AI chatbot interactions (like OpenAI's GPT models).

## Requirements

- Python 3.6+
- Tiktoken library for token counting: `pip install tiktoken`

## Usage

### Step 1: Extract Code

1. Edit `analyze_code.py` to specify your target directory:

   ```python
   directory_to_search = "/path/to/your/project"
   ```

2. Customize excluded directories and files as needed

3. Run the extraction script:

   ```bash
   python analyze_code.py
   ```

4. The script will create an `output.txt` file with all the collected code

### Step 2: Count Tokens

Run the token counter to check if the output is within suitable limits for an AI chatbot:

```bash
python token_counter.py
```

## Customization

### Valid File Extensions

```python
valid_extensions = {".ts", ".tsx", ".js", ".jsx", ".css", ".d.ts", ".json", ".html"}
```

### Excluded Directories

The script ignores common non-source directories:

```python
excluded_dirs = {
  "node_modules",
  ".git",
  ".venv",
  ".vscode",
  # and more...
}
```

### Excluded Files

The script skips configuration and temporary files:

```python
excluded_files = {
  "package-lock.json",
  "tsconfig.json",
  "angular.json",
  # and more...
}
```

## Token Counting for AI Models

The token counter uses the "cl100k_base" encoding by default (suitable for GPT-4) but can be modified for other AI models by changing the encoding parameter:

```python
token_count = count_tokens(file_path, encoding_name="your_encoding")
```

Common token limits:

- GPT-3.5 Turbo: 4,096 tokens (input + output)
- GPT-4: 8,192 tokens (input + output)
- GPT-4-32k: 32,768 tokens (input + output)

## Example

1. Extract code from a React project:

   ```python
   directory_to_search = "/home/user/projects/my-react-app"
   ```

2. Run both scripts:

   ```bash
   python analyze_code.py && python token_counter.py
   ```

3. Check if the token count is under your AI model's context limit

## Tips

- Exclude more directories/files if the token count is too high
- For large projects, consider analyzing only specific directories
- Add more file extensions if your project uses languages not in the default list
