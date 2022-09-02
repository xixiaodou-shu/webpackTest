# Git使用
### 换一个新仓库上传
git remote set-url origin 你新的远程仓库地址
git remote -v 获取远程仓库地址
git add . 添加记录
git commit -m '修改仓库' 添加描述
git push -u origin master 将本地仓库的上传至码云库
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
mmm
ddd
ddd
dddd
ddd