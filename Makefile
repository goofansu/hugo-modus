.PHONY: dev watch dist

dev:
	hugo server \
		--contentDir exampleSite/content \
		--config exampleSite/hugo.toml \
		--buildDrafts \
		--disableFastRender \
		--navigateToChanged \
		--printI18nWarnings

watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize -w

dist:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize
