# 에너지 밸런스 검색 페이지 과제

원티드 프리온보딩 에너지 밸런스 검색 페이지 과제 리포입니다.

<br/>

## 📌 배포

- [배포링크](https://energy-balance.vercel.app/)

<br/>

## 📌 요구 사항 및 구현 방향

### 영문/한글, 브랜드/제품명 검색

- 검색창에 제품명과 브랜드명으로 검색이 가능합니다.

### 키워드 검색

- 카테고리, 제조국, 용량, 가격범위, 평점 등 상세 검색이 가능합니다.

### 검색페이지 구성

- 검색페이지는 제품명/브랜드명으로 검색가능한 input창과 필터링이 가능한 상세검색이 있습니다.
- 검색된 많은 약품을 효율적으로 보여주기위해 `pagination`으로 처리했습니다.

### 반응형 UI/UX

- 모바일에서도 이용 가능 하도록, `반응형` 웹을 구현했습니다.

<br/>

## 📌 기술 스택

- React
- TypeScript
- styled-components
- Redux
- ESLint + Prettier

<br/>

## 📌 로컬 환경 구동

프로젝트 클론

```bash
  git clone https://github.com/wanted-pre-onboading-10/energy-balance.git
```

프로젝트 디렉토리 들어가기

```bash
  cd energy-balance
```

패키지 설치 및 프로젝트 시작

```bash
  npm install && npm run dev
```

<br/>

## 📌 팀원
|[이욱창](https://github.com/wook95)|[김태희](https://github.com/tae100k)|[문현돈](https://github.com/hyundonny)|[이경은](https://github.com/2kyung19)|
| ----- | ---- | ----- |  ----- |
|<img src="https://avatars.githubusercontent.com/u/80494742?v=4" width="200"/>|<img src="https://avatars.githubusercontent.com/u/78027252?v=4" width="200" />| <img src="https://avatars.githubusercontent.com/u/10048956?v=4" width="200" />|<img src="https://avatars.githubusercontent.com/u/32586712?v=4" width="200" />


<br/>

## 📌 팀원별 역할 및 회고

### 김태희

- 역할
  - 상단 navbar 구현
  - 검색 결과 페이지 표시
- 회고
  - 이번 프로젝트하면서 작성한 블로그 : [김태희 - 영양제 쇼핑몰](https://fallacious-smash-138.notion.site/React-TS-82a6c7d5fd8b48a4914b1fc0d17e9e20)

### 문현돈
- 역할
  - Redux를 통해 검색 기록 관리하고 필터 및 필터된 제품 리스트 관리 기능 담당. Redux Toolkit을 활용해 필터, 검색 기록 슬라이스를 만들어 필요한 정보를 관리했다. 또한 custom hook (useFilter, useHistory)을 만들어 팀원들이 필요한 메소드를 쉽게 가져다 쓸 수 있도록 했다.

- 회고
  - 팀원마다 각기 다른 컴포넌트 및 기능을 담당했는데 팀원 별로 목적을 달성하기 위해 필요한 것들이 무엇인지 고민해야 했다. 또한 그들이 만든 개별적인 기능을 어떻게 하나의 종합적인 검색 기능으로 모을 지 또한 미리 내가 계산을 해야했다. 따라서 컴포넌트 별로, 그리고 기능 별로 필요한 메소드를 만들었고 팀원들이 쉽게 활용한 것 같아 뿌듯하다.

### 이경은
- 역할
  - 데이터전처리
  - 메인 페이지 및 검색 창 구현

- 회고
  - python pandas를 이용해서 데이터전처리를 진행했다. 팀원들과 실제로 페이지를 만들면 어떤 데이터가 들어갈까 고민을 하고, 주어진 데이터에서 더 살을 붙였다. 제조국, 가격, 키워드, 평점 등을 랜덤으로 부여했다.
  - 에이미 홈페이지를 클론하여 메인페이지를 만들었는데, CSS 애니메이션을 처음 써보는 계기가 되었다!

### 이욱창
- 역할
  - 상세검색 collapse와 검색 bar 구현

- 회고
  - 어떻게 하면 검색하기 편리할까? 라는 의문이 주어진 과제였다. 토론을 통해 상세검색 기능을 생각해내고, UI를 어떻게 할지 결정해 맡은 일을 책임감 있게 완수하는 협업 왕들이 될수 있었다!
  - 검색창을 맡아 dom 이벤트를 다룰 일이 많았는데, 다양한 이벤트를 만나면서 성장할 수 있는 기회였다!
  - 다른 팀원이 만들어놓은 필터링 로직을 스스로 만든 검색버튼에 붙여야 했다! 서로 개발하면서 궁금한 부분에 대해 계속 질문하면서 개발했기에 제대로 개발 할 수 있었다☺️
