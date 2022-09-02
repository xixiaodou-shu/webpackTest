# Git使用
### 换一个新仓库上传
git remote set-url origin 你新的远程仓库地址
git remote -v 获取远程仓库地址
git add . 添加记录
git commit -m '修改仓库' 添加描述
git push -u origin master  将本地仓库的上传至码云库
### 创建新分支
git branch 查看分支
git branch XXX  创建分支
git checkout XXX 切换分支
git add . 添加记录
git commit -m '修改仓库' 添加描述 
git push -u origin XXX  将本地仓库的上传至码云库XXX是新分支名字

### 分支合并
git checkout master  切换到master分支
git pull origin master 确保master代码是最新的代码
git merge test   然后我们把test分支的代码合并到master上
git status  然后查看状态及执行提交命令