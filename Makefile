.PHONY: dev watch build

dev:
	hugo server \
		--contentDir exampleSite/content \
		--config exampleSite/hugo.toml \
		--buildDrafts \
		--disableFastRender \
		--navigateToChanged \
		--printI18nWarnings

watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize --watch

build:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize
