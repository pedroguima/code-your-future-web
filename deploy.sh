REPO_NAME="pedroguima.github.io.git"
DATE=$(date +%Y%m%d_%H%M%s)
git clone git@github.com:pedroguima/$REPO_NAME
cd $REPO_NAME
git rm *
cp -a ../build/* .
git add .
git commit -m "Rebuild on $DATE"
git push
