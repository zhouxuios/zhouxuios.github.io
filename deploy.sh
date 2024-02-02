#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/zhouxuios/zhouxuios.github.io main:gh-pages
cd -
rm -rf docs/.vitepress/dist