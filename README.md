<p align="middle" >
  <img src="https://media.vlpt.us/images/youngminss/post/606a7d2f-90e9-45a2-8114-92156c0d0812/image.png" width="700">
</p>
<h2 align="middle">직업심리검사 웹 서비스 - Renewal</h2>
<p align="middle">커리어넷 Open API를 이용한 React - Typescript 사이드 프로젝트</p>
<p align="middle"><a href="https://react-job-test.netlify.app/" target="_blank">Go To Demo 🚀</a></p>

<br />

## 🔧 Clone - Install & Run

```bash
# Clone
git clone https://github.com/youngminss/job-test.git

# Install
npm install or yarn install

# Local Run
npm start or yarn start
```

<br />

## 🎯 프로젝트 목표

> [React 직업심리검사( ver. Javascript )](https://github.com/youngminss/react_psychology_test) 를 `Typescript` 프로젝트로 새롭게 리팩토링 해보자.

✔️ 이전 버전보다 `넓은 범위의 서비스`가 가능하도록 구현해보자.

✔️ 효율적인 `Data Fetching` 을 고민해보자.

✔️ `재사용` 가능한 컴포넌트에 대해 고민해보자.

<br />

## 🚩 핵심 구현 사항

✔️ 기존 `직업적성검사 - 일반 & 대학생용` 서비스만 가능한 것에서 `진로개발준비도검사`, `이공계전공적합도검사`, `주요능력효능감검사` 서비스까지 가능토록 구현

✔️ React-Query 를 통한 Data Fetching 관리, Loading, Error State 에 대한 UX 처리

✔️ React-hooks-form 을 통한 사용자 폼 데이터 입력 구현

<br />

## 🧐 에러 해결 & 고민한 점

- [🎯 default URL redirect 적용해보기](https://github.com/youngminss/job-test/blob/master/docs/default%20URL%20redirect%20%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0.md)

- [🎯 typescript 절대경로로 import 하기](https://github.com/youngminss/job-test/blob/master/docs/typescript%20%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C%EB%A1%9C%20import%20%ED%95%98%EA%B8%B0.md)

- [🎯 type 관련 에러에 대해](https://github.com/youngminss/job-test/blob/master/docs/type%20%EA%B4%80%EB%A0%A8%20%EC%97%90%EB%9F%AC%EC%97%90%20%EB%8C%80%ED%95%B4.md)

- [🎯 webpack & babel error 관련](https://github.com/youngminss/job-test/blob/master/docs/webpack%20%26%20babel%20error%20%EA%B4%80%EB%A0%A8.md)

- [🎯 검사번호 파라미터를 넘기는 과정에서](https://github.com/youngminss/job-test/blob/master/docs/%EA%B2%80%EC%82%AC%EB%B2%88%ED%98%B8%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A5%BC%20%EB%84%98%EA%B8%B0%EB%8A%94%20%EA%B3%BC%EC%A0%95%EC%97%90%EC%84%9C.md)

- [🎯 여러 input 의 check 값을 한 번에 처리하는 방법](https://github.com/youngminss/job-test/blob/master/docs/%EC%97%AC%EB%9F%AC%20input%20%EC%9D%98%20check%20%EA%B0%92%EC%9D%84%20%ED%95%9C%20%EB%B2%88%EC%97%90%20%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%97%90%20%EB%8C%80%ED%95%B4.md)

<br />

## 📝 ETC

### Skills Set

- Typescript
- React, React-Query, React-Hooks-Form, React-Router-Dom@6
- emotion
- Webpack & Babel
- ESLint & Prettier

### Folder Structure

    .
    ├── public/
    	├── index.html			# root index.html
    ├── src/
    	├── common/				# 공통사용모듈(상수, 특정시스템 함수) 디렉터리
    	├── components/			# 공통 단위 컴포넌트 디렉터리
    	├── pages/				# 페이지 단위 컴포넌트 디렉터리
    	├── hooks/				# 커스텀 훅 디렉터리
    	├── service/			# API 관련 모듈 디렉터리
    	├── shared/
    		├── components/		# 글로벌 단위 컴포넌트 디렉터리
    		├── style/			# 글로벌 단위 스타일링 파일 디렉터리
    	├── utils/
    ├── webpack/                # webpack 설정 디렉터리
    ├── .babelrc                # babel 설정 파일
    ├── .eslintrc.js            # lint 설정 파일
    ├── .prettierrc.js			# code format 설정 파일
    ├── package.json
    ├── tsconfig.json
    └── README.md

### API

- Base URL

```javascript
TestPage : https://www.career.go.kr/inspct/openapi/test
ReportPage : https://inspct.career.go.kr/inspct/api/psycho
```

- [API Contents Detail 🚀](https://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do)

### VSCode Dev Env

- [https://github.dev/youngminss/job-test 🚀](https://github.dev/youngminss/job-test)
