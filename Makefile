build:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize

watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize -w

dev:
	hugo server --buildDrafts --disableFastRender --navigateToChanged --printI18nWarnings
