# Git使用
### 换一个新仓库上传
'''
git remote set-url origin 你新的远程仓库地址
git remote -v 获取远程仓库地址
git add . 添加记录
git commit -m '修改仓库' 添加描述
git push -u origin master 将本地仓库的上传至码云库
'''
### 创建新分支
git branch 查看分支
git branch XXX 创建分支
git checkout XXX 切换分支
git add . 添加记录
git commit -m '修改仓库' 添加描述 
git push -u origin XXX 将本地仓库的上传至码云库XXX是新分支名字

### 分支合并
git checkout master 切换到master分支
git pull origin master 确保master代码是最新的代码
git merge test 然后我们把test分支的代码合并到master上
git status 然后查看状态及执行提交命令

### 版本回退
git log 查看详细历史记录，按提交时间倒叙排列，包含提交时间，提交作者，提交备注以及提交的hash值；
git log --pretty=oneline 格式化log形式，每条log只有一行，只包含 完整的hash值 和 提交的备注；
git log --oneline 格式化log形式，每条log只有一行，只包含 短hash值 和 提交的备注；
git reset  --hard 七位版本号 如 git reset  --hard b7c6000
 
### 删除
git push origin --delete main 删除远程main分支命令
git branch -d test 删除test本地分支

### 使用 切换分支的时候 git错误解决-Your local changes to the following files would be overwritten by checkout
发起一个commit 存到提交历史
git add.
git commit -m "commit message"

### 冲突   ! [rejected]     
### error: failed to push some refs to 'https://github.com/xixiaodou-shu/webpackTest.git'
### hint: Updates were rejected because the remote contains work that you do
'''
方法一
git push origin master -f  强制push
方法二 
git pull origin 远程分支名 获得最新版本
$ git push origin 远程分支名
'''

### 使用 切换分支的时候 git错误解决-Your local changes to the following files would be overwritten by checkout
发起一个commit 存到提交历史
git add.
git commit -m "commit message"

### 如果希望保留生产服务器上所做的改动,仅仅并入新配置项, 处理方法如下:
git stash 
git pull 
git stash pop
后可以使用git diff -w +文件名 来确认代码自动合并的情况.
### 同步数据
'''
git pull 同步数据
git blame git.md 每行的修改记录
### git fetch和git pull 都可以用来更新本地库，
git fetch只是将本地所关联的远程库commit id更新至最新；
git pull是将本地库更新到远程库的最新状态！
### 删除分支
'''
git branch -D master //删除本地master分支
git push origin :master //删除远程master分支
'''

