build-and-view: build view

build: npm-install
    npm run build

build-and-view-jp: build-jp view-jp

build-jp: npm-install
    npm run build-jp

npm-install:
    npm install

view:
    evince resume.pdf

view-jp:
    evince resume_jp.pdf
