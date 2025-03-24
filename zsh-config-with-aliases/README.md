# ZSH Configuration with Useful Aliases and Functions

This repository contains a customized `.zshrc` configuration file with helpful aliases and functions to improve your terminal workflow.

## Overview

This configuration is designed for users of [Oh My Zsh](https://ohmyz.sh/), enhancing the terminal experience with:

- Useful aliases for common commands
- Custom functions for Git operations
- Directory management utilities
- Proxy configuration tools
- And more!

## Prerequisites

- Zsh shell
- [Oh My Zsh](https://ohmyz.sh/)
- The following Oh My Zsh plugins:
  - git
  - zsh-autosuggestions
  - zsh-syntax-highlighting

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/KigoJomo/handy-scripts.git
   ```

2. Copy the `.zshrc` file to your home directory:

   ```bash
   cd handy-scripts
   cp zsh-config-with-aliases/.zshrc ~/.zshrc
   ```

3. Reload your shell:
   ```bash
   source ~/.zshrc
   ```

## Features

### Aliases

| Alias       | Description                                            |
| ----------- | ------------------------------------------------------ |
| `cls`       | Clear the terminal screen                              |
| `exp`       | Open the current directory in file explorer (Nautilus) |
| `zshconfig` | Open `.zshrc` in VS Code                               |
| `zshsource` | Reload the zsh configuration                           |
| `update`    | Update and upgrade packages using apt                  |
| `py`        | Shortcut for python3                                   |
| `ll`        | List all files in long format                          |
| `up`        | Navigate to parent directory                           |
| `reload`    | Restart the zsh shell                                  |
| `myip`      | Display your public IP address                         |
| `status`    | Shortcut for `git status`                              |
| `dev`       | Clear screen and run `npm run dev`                     |

### Functions

#### Git Operations

- **push** - Add, commit, and push changes in one command
  ```bash
  push "Your commit message here"
  ```

#### Directory Management

- **mkcd** - Create a directory and navigate into it

  ```bash
  mkcd new-directory-name
  ```

- **cdl** - Change to a directory and list its contents
  ```bash
  cdl directory-name
  ```

#### Proxy Configuration

- **setproxy** - Configure proxy settings for system and/or Spotify

  ```bash
  setproxy 10.246.10.208
  ```

  This function provides options to:

  1. Configure system proxy only
  2. Configure Spotify proxy only
  3. Configure both system and Spotify proxies

- **unsetproxy** - Remove all proxy settings
  ```bash
  unsetproxy
  ```
  This removes proxy settings from both the system and Spotify.

## Customization

You can customize this configuration by editing the `.zshrc` file:

1. Use `zshconfig` alias to open the file in VS Code
2. Add your own aliases and functions
3. Modify existing settings
4. Save and use `zshsource` or `reload` to apply changes

## Oh My Zsh Theme

This configuration uses the default "robbyrussell" theme. To change themes:

1. Open `.zshrc`
2. Modify the `ZSH_THEME` variable
3. Reload your configuration

## Plugin Management

The configuration includes three plugins by default:

- git
- zsh-autosuggestions
- zsh-syntax-highlighting

To add more plugins, edit the `plugins` line in `.zshrc`.

## Contributing

Feel free to fork this repository and customize it for your needs. Pull requests with improvements are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
