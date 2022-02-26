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
