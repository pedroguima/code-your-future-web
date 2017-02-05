REPO_NAME="code-your-future.github.io"
DATE=$(date +%Y%m%d_%H%M%s)
BRANCH=$1

git clone git@github.com:Code-Your-Future/$REPO_NAME.git
cd $REPO_NAME
git rm *
cp -a ../build/* .
git config --global user.email "admin@codeyourfuture.co"
git config --global user.name "Automated bot"
git add .
git commit -m "Rebuild on $DATE"
git push
