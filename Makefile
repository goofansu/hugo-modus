build:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize

watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize -w

dev:
	hugo server \
		--config hugo.toml \
		--theme "" --themesDir . \
		--contentDir content \
		--disableFastRender --navigateToChanged --printI18nWarnings
