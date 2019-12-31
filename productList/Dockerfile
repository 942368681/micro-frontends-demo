# FROM关键字：取决于基于什么镜像构建
FROM nginx

# 将打包好的文件复制到容器中的该路径下
COPY dist/ /usr/share/nginx/html/

# 将修改的文件替换掉容器中的nginx配置
COPY default.conf /etc/nginx/conf.d/default.conf
