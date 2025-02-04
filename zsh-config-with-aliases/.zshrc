# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time Oh My Zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='nvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch $(uname -m)"

# Set personal aliases, overriding those provided by Oh My Zsh libs,
# plugins, and themes. Aliases can be placed here, though Oh My Zsh
# users are encouraged to define aliases within a top-level file in
# the $ZSH_CUSTOM folder, with .zsh extension. Examples:
# - $ZSH_CUSTOM/aliases.zsh
# - $ZSH_CUSTOM/macos.zsh
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias cls="clear"
alias exp="nautilus . &"
alias zshconfig="code ~/.zshrc"
alias zshsource="source ~/.zshrc"
alias update="sudo apt update && sudo apt upgrade -y"
alias py="python3"

alias ll="ls -alF"
alias up="cd .."
alias reload="exec zsh"
alias myip="curl ifconfig.me"

alias status="git status"
alias dev="cls && npm run dev"

function push() {
  local msg="$*"
  if [ -z "$msg" ]; then
    echo "Usage: push <commit message>"
    return 1
  fi
  git add .
  git commit -m "$msg"
  git push
}

function mkcd() {
  local dir="$1"
  [ -z "$dir" ] && echo "Usage: mkcd <dir>" && return 1
  mkdir -p "$dir" && cd "$dir"
}

function cdl() {
  cd "$1" && ls -lah
}

function setproxy() {
    if [ -z "$1" ]; then
        echo "Usage: setproxy <proxy_address>"
        echo "Example: setproxy 10.246.10.208"
        return 1
    fi
    
    echo "Configure proxy for:"
    echo "\033[0;32m  [1] System.\033[0m"
    echo "\033[0;32m  [2] Spotify.\033[0m"
    echo "\033[0;32m  [3] System + Spotify.\033[0m"
    echo "-----------------------------------"
    echo -n "  (default: 1)-> "
    read choice
    
    case $choice in
        1|"")  # System only (default if user just hits enter)
            configure_system_proxy "$1"
            ;;
        2)  # Spotify only
            configure_spotify_proxy "$1"
            ;;
        3)  # Both System and Spotify
            configure_system_proxy "$1"
            configure_spotify_proxy "$1"
            ;;
        *)
            echo "Invalid choice. No changes made."
            return 1
            ;;
    esac
}

function configure_system_proxy() {
    gsettings set org.gnome.system.proxy mode 'manual'
    gsettings set org.gnome.system.proxy.http host "$1"
    gsettings set org.gnome.system.proxy.http port 8080
    gsettings set org.gnome.system.proxy.https host "$1"
    gsettings set org.gnome.system.proxy.https port 8080
    gsettings set org.gnome.system.proxy.ftp host "$1"
    gsettings set org.gnome.system.proxy.ftp port 8080
    gsettings set org.gnome.system.proxy.socks host "$1"
    gsettings set org.gnome.system.proxy.socks port 8080
    
    echo "System proxy settings updated to $1:8080"
}

function configure_spotify_proxy() {
    CONFIG_FILE="$HOME/.config/spotify/prefs"
    PROXY_LINE="proxy=http://$1:8080"
    
    mkdir -p "$(dirname "$CONFIG_FILE")"
    
    if grep -q "^proxy=" "$CONFIG_FILE" 2>/dev/null; then
        sed -i "s/^proxy=.*$/$PROXY_LINE/" "$CONFIG_FILE"
    else
        echo "$PROXY_LINE" >> "$CONFIG_FILE"
    fi
    
    echo "Spotify proxy set to $1:8080"
    
    # Kill Spotify if it's running
    if pgrep -x "spotify" > /dev/null; then
        echo "Restarting Spotify..."
        killall spotify
        # Wait a moment for the process to fully terminate
        sleep 2
        # Start Spotify in the background
        spotify &>/dev/null &
    fi
}

function unsetproxy() {
    # Unset system proxy
    gsettings set org.gnome.system.proxy mode 'none'
    echo "System proxy settings disabled"
    
    # Unset Spotify proxy
    CONFIG_FILE="$HOME/.config/spotify/prefs"
    if [ -f "$CONFIG_FILE" ]; then
        sed -i '/^proxy=/d' "$CONFIG_FILE"
        echo "Spotify proxy settings removed"
        
        # Restart Spotify if it's running
        if pgrep -x "spotify" > /dev/null; then
            echo "Restarting Spotify..."
            killall spotify
            sleep 2
            spotify &>/dev/null &
        fi
    fi
}