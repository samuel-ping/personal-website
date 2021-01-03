#!/bin/bash
npm run export
echo "# Hi!" > out/README.md
echo "You're currently looking at the build artifacts of my website. To check out the code, switch over to the Main branch! Note: This message was automatically generated." >> out/README.md
git add out
git commit -m "deploy to gh-pages"
cd ..
git subtree push --prefix client/out origin gh-pages
cd client