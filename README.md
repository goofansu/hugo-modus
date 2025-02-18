# hugo-modus

An opinioned Hugo theme using the [colour palette of the Modus themes](https://protesilaos.com/emacs/modus-themes-colors).

## Installation

Import the theme in `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/goofansu/hugo-modus"
```

Ref: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme

## Development

### Watch for changes and rebuild CSS
```shell
make watch
```

### Serve exampleSite
```shell
make server
```
