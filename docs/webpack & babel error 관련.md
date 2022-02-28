# webpack & babel 로 프로젝트에서 신경쓰지 않으면 발생하는 에러들

## why ?

CRA 나 NEXT 같은 보일러 플레이트에서 프로젝트를 하다가 이 프로젝트처럼 webpack & babel 를 직접 설정해서 프로젝트를 진행하다보면 신경쓰지않아서 빈번하게 여러 에러가 발생한다.

## so...

1. regeneratorRuntime is not defined

- React 에서 ES8 의 `async/await` 를 그냥 사용하려하면 브라우저에서 다음과 같은 에러를 내뱉는다.

- 이는, 앱이 컴파일될 때, `regeratorRuntime` 이 async/await 문법을 번역하도록 했는데 해당 regenerator 를 제공하지 않아서 발생하는 에러라고 한다.

🚀 해결 방법

> @babel/runtime, @babel/plugin-transform-runtime 을 설치하고 설정

- 두 패키지 설치 후, babelrc 수정

```json
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

2. depth 가 1 이상인 url 에서 새로고침시 404 Not Found Error

- client side 에서 router 를 사용하기 때문에 새로고침에 의한 새로운 페이지를 서버로 바로 요청하면 보열줄 page 를 모른다.
- 따라서 서버에서 리다이렉트 페이지를 보여준다던지, 또는 `클라이언트에서 webpack 설정을 수정한다.`

🚀 해결 방법

> webpack.config 파일에서 devSever 설정을 다음과 같이 해준다.

```javascript
devServer: {
  historyApiFallback: true,
  hot: true,
},
```

그리고, output 에 `publicPath` 를 root 로 설정해준다. ( 나는 이 단계에서 해결했다. )

```javascript
output: {
  path: path.resolve(__dirname, '..', './build'),
  publicPath: '/',
  filename: 'bundle.js',
},
```

- 위 에서 `path` 는 번들된 결과 파일들의 저장 위치를, `publicPath` 는 webpack plugin 으로 생성되는 index.html 내부에서 bundle.js 파일의 path 와 관련있다고 한다.

- 결과적으로 설정 전과 후는 다음의 예시와 같다.

```javascript
// publicPath 전
<script defer src="bundle.js"></script>
// publicPath 후
<script defer src="/bundle.js"></script>
```
