# #!/bin/bash
# clear dist folder 
sudo rm -rf dist
# set the remote to new forked
git remote set-url origin https://github.com/CityScope/CS_CityScopeJS_UI/
# build the dist for public url 
sudo parcel build js/index.html --public-url https://github.com/CityScope/CS_CityScopeJS_UI/
# make sure to add dist to commit if .gitignored 
git add dist -f
#commit the GH pages changes 
git commit -m "gh-pages commit"
#push to subtree remote [Force and remove all] 
git push origin `git subtree split --prefix dist master`:gh-pages --force