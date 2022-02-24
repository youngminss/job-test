# emtion - css object style 사용하기 위해 최상단에 주석 처리 생략하기

## why ?

emotion 을 사용해보면서 기존에 styled-component 에서는 지원하지 않는 css object style 을 지원한다는 점에 조금?은 더 편리한 스타일링 라이브러리가 아닌가 생각이 들었다.

다만, 이러한 css object style 을 import 만 해서 사용하려하면 `css 모듈이 존재하지 않는다는 에러가 발생한다.`

또는 빌드가 되는 경우에도 css object style 로 스타일링한 내용이 적용되지 않고 inspect 해볼 경우 다음과 같은 문구가 확인 될 수도 있다.

> You have tried to stringify object returned from css function. It isn't supposed to be used directly (e.g. as value of the className prop), but rather handed to emotion so it can handle it (e.g. as value of css prop).

그렇기 때문에 공식문서에서 가이드하는 방식은 다음과 같다.

```tsx
/** @jsx jsx */*
```

또는

```tsx
/** @jsxImportSource @emotion/react */
```

를 최상단에 선언할 것을 언급하고 있다.

## so...

emotion 의 `css` 모듈을 가져와 사용할 때마다 이를 신경쓰는 것은 현명하지 못한 것 같아서 추천하는 방식은 다음과 같다.

> @emotion/babel-preset-css-prop 를 설치하고 설정할 것

[관련 링크](https://stackoverflow.com/questions/61741076/css-emotion-library-getting-css-props-error-when-using-css-prop)

또한 추가적인 `tsconfig.json` 의 수정이 필요

[관련 링크](https://github.com/emotion-js/emotion/issues/2111#issuecomment-732763318)

## conclusion

- 각각의 파일에서 emotion css object style 을 사용하기 위해 주석처리하지 않고, `emotion-babel-preset` 플러그인과 몇 가지 tsconfig 수정을 통해서 한 큐?에 해결하자.

- 참고로 emotion css object style 방식과 비슷하게 현재는 `@emotion/react` 에 통합된 `template literal` 방식으로도 동일한 기능을 수행할 수 있다.

- css object style 방식에서는 camelCase 방식으로 작성해야하는 반면, template literal 방식으로 사용하면 css 원래 방식대로 사용이 가능하기 때문에 어색함이 덜하다.
