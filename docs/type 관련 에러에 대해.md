# typescript 너란 녀석... 든든한건 확실하지만 그만큼 날 집착하게 만들지

## why ?

이번 프로젝트 리뉴얼의 목표 중 하나는 이전 `자바스크립트 기반 -> 타입스크립트로 전환` 이다.

타입스크립트를 프로젝트의 도입할 때마다 느끼는 것이지만, 근본적인 타입스크립트의 안정성 측면의 타입 정의는 굉장히 긍정적이다.

그에 반해, 사용하기 위한 마음의 준비가 필요한 이유에 대한 나의 의견은 `시작하기까지 사전 셋팅`과 `내가 사용하는 컴포넌트나 데이터에 대한 타입 파악` 그로인한 `잦은 에러로 인한 개발 속도 감소`라 생각한다.

그럼에도 불구하고 강력한 타입 시스템만 잘 핸들링하며 개발할 수 있다면 프로젝트에 대한 안정성은 보장되며 그만큼 심리적 안도감이 온달까...

어찌되었든, 최소한 이 프로젝트를 하면서 발생하는 타입 관련 에러에 대해 기록해보자.

## so..

1. semantic element 에 대해 적절하지 못한 이벤트를 등록하면 발생하는 에러

```tsx
const 컴포넌트 = () => {
  return <div onClick={...} />
}
```

예를 들어 `<div>` 태그와 같은 semantic 성질인 곳에 `onClick 이벤트` 등록하려하면 뱉어내는 에러

1️⃣

> Visible, non-interactive elements with click handlers must have at least one keyboard listener (.eslintjsx-a11y/click-events-have-key-events)

2️⃣

> Static HTML elements with event handlers require a role. (.eslintjsx-a11y/no-static-element-interactions)

🚀 해결방법

- 1번의 경우, 에러 메시지에서 가이드하는 것과 같이 최소한 하나 이상의 `keyboard 이벤트를 함께` 등록하면 해결된다.

  - 또는 `semantic 한 element 대신 위 상황은 click 이벤트니깐 그에 적절한 element (button 태그)로 변경해주면 해결된다.

- 2번의 경우, `jsx-a11y/no-static-element-interactions` 관련 rule 을 off 하면된다.

2. emotion 을 사용함에도 `Theme` 라는 type 을 정의하면, 기본적으로 `useTheme hooks` 의 반환값인 `Theme interface` 가 존재하며 이름 개인적으로 정의한 Theme 인터페이스와 useTheme 에서 반환한 Theme 인터페이스가 충돌한 것 같다.

이는 추가적으로 `type-safety` 를 의도한 것이라고 공식문서에 기재되어 있다.

[관련 문서](https://emotion.sh/docs/typescript)

🚀 해결방법

- define 파일을 생성하여 사용할 Theme 의 type 을 정의한다.
