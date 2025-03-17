import tiktoken

def count_tokens(file_path, encoding_name="cl100k_base"):
    """
    Count the number of tokens in a text file using the specified encoding.
    
    :param file_path: Path to the text file.
    :param encoding_name: Name of the encoding to use (default is "cl100k_base" for GPT-4).
    :return: Number of tokens in the file.
    """
    # Load the encoding
    encoding = tiktoken.get_encoding(encoding_name)
    
    # Read the file
    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read()
    
    # Tokenize the text and count tokens
    tokens = encoding.encode(text)
    return len(tokens)

# Replace './output.md' with the path to your file
file_path = "./output.md"
token_count = count_tokens(file_path)
print(f"File: {file_path} \nToken Count: {token_count}")