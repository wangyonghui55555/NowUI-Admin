echo 'deploy start'
sleep 2s

docker login --username=nowui@aliyun.com --password=shengli.2010 registry.cn-hangzhou.aliyuncs.com

docker build -t registry.cn-hangzhou.aliyuncs.com/nowui/nowui-admin .

docker push registry.cn-hangzhou.aliyuncs.com/nowui/nowui-admin

ssh root@118.31.229.16 docker pull registry.cn-hangzhou.aliyuncs.com/nowui/nowui-admin

ssh root@118.31.229.16 docker stop nowui-admin

ssh root@118.31.229.16 docker rm nowui-admin

ssh root@118.31.229.16 docker run -d --name nowui-admin -p 3000:3000 registry.cn-hangzhou.aliyuncs.com/nowui/nowui-admin