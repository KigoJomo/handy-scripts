# Handy Scripts

Old one-off scripts that were useful enough to keep. Some are dated, and most expect you to read the source and change a path before running them.

## What is here

| Directory | What it does |
| --- | --- |
| [`image-conversion`](image-conversion) | Converts PNG and JPEG files to WebP with Pillow |
| [`leetcode-challenge-scaffold`](leetcode-challenge-scaffold) | Creates a challenge folder with a solution file, Jest test, and README |
| [`nextjs-essentials-scaffold`](nextjs-essentials-scaffold) | Interactive generator for an older Next.js Pages Router setup |
| [`analyze-code`](analyze-code) | Flattens selected source files into `output.txt` and counts tokens |
| [`zsh-config-with-aliases`](zsh-config-with-aliases) | An old personal `.zshrc` with aliases and shell functions |

Each directory has its own README and dependency notes.

## A few warnings

The image converter and code analyser contain placeholder or machine-specific paths. Edit those before running either script.

The Next.js generator targets older conventions and can initialise Git or install packages. Use it only if that is what you want. It is not a current `create-next-app` replacement.

Do not copy the included `.zshrc` over your own configuration without reviewing it. It contains OS-specific commands and old proxy helpers that may not belong on your machine.

## Examples

```bash
python -m pip install -r image-conversion/requirements.txt
python image-conversion/img_to_webp.py

node leetcode-challenge-scaffold/create-challenge.js "Two Sum"

python -m pip install -r analyze-code/requirements.txt
python analyze-code/analyze_code.py
python analyze-code/token_counter.py
```

These scripts do not share a package or test runner. Treat each directory as a separate utility.
