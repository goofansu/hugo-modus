watch:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css -w

build:
	tailwindcss -i assets/css/main.css -o assets/css/dist/main.css --optimize

dev:
	foreman start
