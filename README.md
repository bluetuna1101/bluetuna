# bluetuna

/etc/nginx/nginxconf
에서 포트와 서버 내임으로 로드 밸런싱 가능

server {
listen 80;
listen [::]:80;
server*name *;
#root /usr/share/nginx/html;

        location / {
                proxy_buffering         off;
                proxy_pass              http://localhost:3000/;
        }

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
            }

}
