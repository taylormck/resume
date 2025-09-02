build-and-view: build view

view:
    evince resume.pdf

view-jp:
    evince resume_jp.pdf

typst_args := "--font-path assets/fonts"

build:
    typst compile {{typst_args}} resume.typ

build-watch:
    typst watch {{typst_args}} resume.typ

