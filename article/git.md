## 一 起步

* 工作流程 
	1. 在工作区修改文件（此时文件处于“已修改”状态）
	2. 将下次的待提交添加到暂存区（此时文件处于“已暂存”状态）
	3. 提交更新，将暂存区的文件提交到git仓库（此时文件处于“已提交”状态）
* 安装
	git官网太慢的话使用淘宝镜像
* 初次使用前的配置
	* 配置变量位置
		* system
			系统上的所有用户
		* global
			当前用户（配置文件位置：c:/Uses/xxx下的.gitconfig文件）
		* local
			当前仓库
	* 配置用户信息（每一次提交都会包含的用户信息）
		<br>git config --global user.name "liuzewei"
		<br>git config --global user.email "lzw556@outlook.com"

## 二 基础
* 获取git仓库
	* 1 将本地目录转换为git仓库
		<br>进入目录， 命令是(cd /e/xxx， cmd命令分2步：e: cd xxx)
		<br>git init
	* 2 从其他服务器clone一个 已存在的git仓库
		<br>git clone https://github.com/jquery/jquery.git 	
		这样就会在当前目录下创建一个jquery目录， 并在此目录下初始化一个.git文件夹
		<br>重命名
		git clone https://github.com/jquery/jquery.git mylibrary
* 记录每次更新到仓库
	* 检查当前文件状态
		git status
	* 跟踪新文件，使其处于已暂存状态
	  <br>暂存已修改的文件
	  <br>git add（参数如果是目录，就会跟踪该目录下所有的文件）			
	* 忽略文件，.gitignore文件
	* 比较工作区和暂存区之间的差异
		git diff
	* 比较暂存区和最后一次提交的差异	
		git diff --staged
	* 提交已暂存的文件	
		git commit -m "description"
	* 跳过使用暂存区直接提交	
		git commit -a
	* 移除文件	
		* 分三步：1 移除暂存区中文件 2 删除工作区文件 3 提交
		<br>有2种方法：
		* 手动删除工作区的文件， 然后git rm 
		* git rm -f（移除暂存区文件，并连带从工作区中删除）
* 查看历史记录
	<br>git log，退出时输入q
* 撤销操作
	* git commit --amend
		<br>修改最近一次提交的描述信息
	* git restore --staged
		<br>撤销对文件的暂存
	* git restore
		<br>撤销对文件的修改
* 远程仓库
		
	
	