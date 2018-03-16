var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:9999/') //http://yourdomain.com
xhr.withCredentials = true;
xhr.send()
