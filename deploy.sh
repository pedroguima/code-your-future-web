REPO_NAME="pedroguima.github.io"
DATE=$(date +%Y%m%d_%H%M%s)
git clone git@github.com:pedroguima/$REPO_NAME.git
cd $REPO_NAME
git rm *
cp -a ../build/* .
git add .
git commit -m "Rebuild on $DATE"
git config --global user.email "bot@codeyourfuture.co"
git config --global user.name "Automated bot"
git push
