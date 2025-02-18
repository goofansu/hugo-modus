build:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize

watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize -w

server:
	hugo server --disableFastRender --config exampleSite/hugo.toml --themesDir . -c exampleSite/content/ -t ""
