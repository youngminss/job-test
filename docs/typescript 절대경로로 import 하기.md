# 상대경로가 아닌 절대경로로 import 하기 ( in Typescript Webpack Babel )

## why ?

일반적으로 프로젝트 내에서 모듈 경로를 설정할 경우 `상대경로`로 했었다.

프로젝트 구조를 효율적으로 구성해놓았다면 import 시 모듈의 상대경로로 import 해도 보기 싫진 않을 것이다.

하지만, 그렇지 않은 경우 다음과 같은 사태가 발생할 수 있다.

```tsx
// B 컴포넌트에서 가정
import A컴포넌트 from '../../../../../../../../A컴포넌트;
```

## so..

이럴 때 `절대경로` 를 적용한다면 탐색의 시작은 언제나 root 로 설정해놓은 경로부터 시작이기에 복잡한 `상대경로 탐색` 에에서 벗어날 수 있다.

절대경로 import 를 typescript 에 설정하기 위해선 다음과 같은 작업이 필요

- tsconfig.json 의 `baseUrl`, `paths` 옵션 설정
- `babel-plugin-module-resolver 패키지 설치` & `.babelrc 수정`
- (eslint 사용시) `.eslint settings 옵션에 import/resolver 옵션 추가`
- 그럼에도 불구하고 eslint 에러가 발생 시, eslint rules 에 `import/no-unresolved` 프로퍼티 `off`

## conclusion

- 이제, 상대경로가 아닌 절대경로로 모듈을 import 해올 수 있다.
- 정말..밑바닥부터 환경설정을 하려고하면 시간을 상당히 소모하는 것 같긴하다.
- 이러면서 보일러 플레이트의 소중함을 느끼는 것인가..ㅎㅎ ;;
