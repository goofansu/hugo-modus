# hugo-modus

A Hugo theme inspired by [Modus themes](https://protesilaos.com/emacs/modus-themes). 

## Installation

### Install with Git submodule

```shell
hugo new site blog
cd blog
git submodule add https://github.com/goofansu/hugo-modus.git themes/modus
cp -r themes/modus/exampleSite/* .
hugo server --disableFastRender
```

### Install with Nix flakes

```shell
nix flake new -t sourcehut:~goofansu/flake-templates#hugo-modus blog
cd blog
direnv allow
hugo new site . --force
cp -r themes/modus/exampleSite/* .
hugo server --disableFastRender
```

## Override partials

### Favicon

1. Copy the the `favicon.html` from theme to your own layouts.

    ```shell
    cd blog
    mkdir -p layouts/partials/head/
    cp themes/modus/layouts/partials/head/favicon.html layouts/partials/head/
    ```

2. Generate favicon using [Favicon Generator](https://realfavicongenerator.net/).
3. Download the favicon package and unzip it, put all files to `static` directory.
4. Put generated HTML code to `layouts/partials/head/favicon.html`.

## Development

```shell
git clone https://github.com/goofansu/hugo-modus.git
cd hugo-modus
make dev
```
