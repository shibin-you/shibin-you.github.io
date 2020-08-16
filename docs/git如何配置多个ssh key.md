# git如何配置多个ssh key
创建密钥
```
ssh-keygen -t rsa -C youremail@xxx.com
```
然后会出现提示(仅供参考)
```
Generating public/private rsa key pair.
Enter file in which to save the key (/cygdrive/c/Users/admin/.ssh/id_rsa):
```
输入生成公钥 的文件名（默认为id_rsa） ，如果配置单个ssh key,按回车就可以
然后会出现下面，一般我们按两个回车就可以了
``` 
//填写密码后每次使用 SSH 方式推送代码时都会要求输入密码
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
``` 
这样公钥文件和私钥文件就已经生成了  

经过上面的操作单个ssh key登录没问题，但如果要使用多个，需要重复上面操作生成多个秘钥和私钥文件。

编写config文件(已windows下码云和github为例)
```
# gitee
Host gitee.com  //仓库地址的域名
HostName gitee.com
PreferredAuthentications publickey
IdentityFile C:\\Users\\ASUS\\.ssh\\gitee_id_rsa  //生成公钥和密钥文件位置
User shibin
# GitHub
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile C:\\Users\\ASUS\\.ssh\\id_rsa
User shibin
```
最后，将公钥配置到相应的托管平台上  

最后测试（已gitee为例）
```
ssh -T git @gitee.com
```
出现下面的，则表示成功了
```
Hi XX! You've successfully authenticated, but GITEE.COM does not provide shell access.
```

