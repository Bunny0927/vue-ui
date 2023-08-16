#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你打算部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你部署到 https://<USERNAME>.github.io
git push -f git@github.com:Bunny0927/vue-ui-deploy.git master

# 如果你部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master

cd -