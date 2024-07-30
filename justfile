build-and-view: build view

build: npm-install
    npm run build

npm-install:
    npm install

view:
    evince resume.pdf
