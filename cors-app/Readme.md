# Node.js app with CORS, used for Cross Domain tracking

To build your image locally
```bash
docker build -t cors-app .
```

To run the app as a docker container
```bash
docker run -d --name cors-app -p 9999:9999 -it cors-app
```

Visit http://localhost:9999/

Open any other website from your browser and try the POC script.

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:9999/') //http://yourdomain.com
xhr.withCredentials = true;
xhr.send()
```

Now *tracking_uuid* cookie will be set in your localhost domain and remain constant for repeated requests coming to the domain from any other site. So you can keep track of the user coming from any site.
