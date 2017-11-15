#!/bin/bash
set -o errexit

# Build static files with yarn
yarn install
yarn run build

# Remove `.gitignore`, otherwise the `dist/` folder will be ignored
rm -rf .gitignore
git add dist/
git commit -am "Deploy to Github Pages"
git subtree push --prefix dist origin gh-pages
