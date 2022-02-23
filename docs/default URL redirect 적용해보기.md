## React Router v6 Redirect 적용해보기

### Why ?

- 이 글을 작성하는 시점에서 분리한 페이지는 총 3 페이지
- 메인(시작), 테스트, 결과 페이지
- 각각 /main, /test/, /result 로 생각하고 있었다.
- 그러나, 어떠한 처리 없이 react 앱을 build 해보면 client 단에서는 root 페이지로 빌드된다.
- 예를 들면, 로컬에서 빌드시 `http://localhost:포트번호/` 와 같다.
- 뭐, 사실 중요한 건 아닐 수 있지만 문득 서버의 개입없이 client 단에서 default url 을 변경할 수 있는 방법이 없을까 ? 생각하게 되었다.

### So...

프로젝트에 `react-router-dom@v6` 를 사용하여 라우팅을 하고 있다. 이전 버전과 상당히 많은 변화가 있는 만큼 기존 방식에서 redirect 하는 방법 또한 다르다는 것을 알 수 있었다.

- v6 이전

```jsx
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
}
```

- 예시 코드와 같이 이전 버전까지는 `Redirect` 라는 컴포넌트가 따로 존재하는 것을 알 수 있으며 `from = 기준 path` 에서 `to = 타겟 path` 로 리다이렉팅 해주는 것을 알 수 있다.

* v6 부터

```jsx
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}
```

- 일단, V6 부터 Redirect 컴포넌트는 사라졌다.
- 대신 Navigate 컴포넌트가 새로 생겼으며, 이를 통해 redirect 하는 방법은 위의 예시와 같다.
- 현재 프로젝트의 내가 원했던 리다이렉팅도 위와 같은 형태로 구현되어있다.

## conclusion

- [이번 이슈의 도움이 된 글](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb#not-server-rendering)

- [위 글에서 유념할 부분](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb#notes-on-the-navigate-api)

- SSR 의 경우는 redirect 하는 방식이 다를 수 있다는 것은 인지하자.
