# server.js
페이지 만들기

```
$ node server.js

# response 확인하기 (mac 기본 내장)
$ curl -i http://localhost:5000

# 존재하는 페이지 /, /admin, /data
```


참고: https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server

---

# server.js로 웹팩 설정

`webpack.config.js`
```
// ./src/index.js를 ./public/bundle.js로 번들링

const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
    }, 
    target: "node",
}

// 실행
$ npx webpack
```

---

# zipcode.js

- 다른 작업

```
$ node main.js

# http://localhost:3000/?zipCode=10016
```

참고: https://www.sitepoint.com/build-a-simple-web-server-with-node-js/#:~:text=To%20get%20started%20with%20a,the%20project%20with%20npm%20init%20.