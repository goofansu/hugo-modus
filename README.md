# hugo-modus

An opinionated Hugo theme using the [colour palette of the Modus themes](https://protesilaos.com/emacs/modus-themes-colors).

## Installation

### Hugo Modules
If your project is using [Hugo Modules](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme):

1. Get theme in your project
    ```shell
    hugo mod get github.com/goofansu/hugo-modus
    ```

2. Configure the theme in `hugo.toml`:
    ```toml
    [module]
      [[module.imports]]
        path = "github.com/goofansu/hugo-modus"
    ```

### Git submodule

1. Get theme in your project
    ```shell
    git submodule add https://github.com/goofansu/hugo-modus.git themes/hugo-modus
    git submodule update --init --recursive
    ```

2. Configure the theme in `hugo.toml`
    ```
    theme = "hugo-modus"
    ```

## Usage

### New section
```shell
hugo new -k section posts/_index.md
```

### New content
```shell
hugo new posts/your-first-post.md
```

## Development

### Watch for changes and rebuild CSS
```shell
make watch
```

### Serve exampleSite
```shell
make serve
```
