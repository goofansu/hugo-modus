# hugo-modus

An opinioned Hugo theme using the [colour palette of the Modus themes](https://protesilaos.com/emacs/modus-themes-colors).

## Installation

### Git submodule
```shell
git submodule add https://github.com/goofansu/hugo-modus.git themes/hugo-modus
git submodule update --init --remote
```

### Hugo Modules

See https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme for details.

1. Enable Hugo Modules in your project
    ```shell
    hugo mod init github.com/<your_user>/<your_project>
    hugo mod get github.com/goofansu/hugo-modus
    ```

2. Import the theme in `hugo.toml`:
    ```toml
    [module]
      [[module.imports]]
        path = "github.com/goofansu/hugo-modus"
    ```

## Usage

### New section
```shell
hugo new -k section posts/_index.md
```

### New post
```shell
hugo new posts/<title>.md
```

## Development

### Watch for changes and rebuild CSS
```shell
make watch
```

### Serve exampleSite
```shell
make server
```
