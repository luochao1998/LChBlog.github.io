npm run build

cd public

git init
git add -A
git commit -m 'firtTest'

git push -f https://github.com/luochao1998/LChBlog.github.io.git master:gh-pages

cd ../
rm -rf public