default:
    just --list

build-and-view: build view

view:
    evince resume.pdf

view-jp:
    evince resume-jp.pdf

typst_args := "--font-path assets/fonts"

build:
    typst compile {{typst_args}} resume.typ

build-watch:
    typst watch {{typst_args}} resume.typ

build-jp:
    typst compile {{typst_args}} resume-jp.typ

build-watch-jp:
    typst watch {{typst_args}} resume-jp.typ
