# 🍈 MEGA MELON

![mega-melon](https://user-images.githubusercontent.com/83896466/221178757-74624da2-72cd-4a87-831c-2b04a36a83bf.gif)


## 🚀배포
https://spdhsrnvl123.github.io/MEGA-MELON/


## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/spdhsrnvl123/MEGA-MELON.git
    ```
2. 패키지를 설치합니다.
    ```bash
    npm install
    ```
3. 프로젝트를 실행합니다.
    ```bash
    npm start
    ```


## 🧰 기술 스택 및 구현 사항
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled components&logoColor=black">
### 🌈 사용 라이브러리 버전 정보
- react 18.2.0
- styled-components 5.3.6
- redux 8.0.5
- redux-toolkit 1.9.2

### 구현 사항

### 🔨라이브러리를 활용한 구현 사항
- `Redux-toolkit`에 thunk를 이용하여 비동기 데이터 통신을 구현하였습니다.
- `Redux-toolkit`을 이용하여 상태관리를 구현하였습니다.
- `styled-components`를 이용하여 개별 CSS파일을 만들지 않고 하나의 컴포넌트들로 구성하였습니다.
- `styled-components`의 내장 API인 createGlobalStyle을 이용하여 전역 스타일링을 하였습니다.

## 📂 디렉토리 구조
```
src
 ├── components      
 |       ├── base
 |       |     ├── Button
 |       |     |      └── index.jsx
 |       |     ├── Input
 |       |     |      └── index.jsx
 |       |     └── SearchCount
 |       |            └── index.jsx
 |       └── domain
 |              ├── Card
 |              |     └── index.jsx
 |              ├── Footer
 |              |     └── index.jsx
 |              ├── Header
 |              |     └── index.jsx
 |              ├── Main
 |              |     └── index.jsx
 |              └── Nav
 |                    └── index.jsx
 ├──  redux
 |      ├── card   
 |      |     └── index.jsx
 |      ├── count  
 |      |     └── index.jsx 
 |      ├── search  
 |      |     └── index.jsx  
 |      └── store.jsx
 |
 └──  styles
        └── GlobalStyle.jsx
```

## ⚙️ 주요 컴포넌트 기능 사항
### 📌card 컴포넌트
- `thunk`를 이용한 비동기 데이터 통신 컴포넌트 입니다.
- `extraReducers`를 이용하여 state 상태에 따른 로직을 만들어 주었습니다.
- `sort()`메서드를 이용하여 데이터 값을 등록일(createdAt) 최신순으로 정렬해 주었습니다.

### 📌 count 컴포넌트
- 검색 결과(숫자)에 state 값을 저장하는 컴포넌트 입니다.

### 📌 search 컴포넌트
- 검색어 state 값을 저장하는 컴포넌트 입니다.

### 📌 Main 컴포넌트
- 데이터 통신이 실패했을 경우 Main 컴포넌트에서 ListJob 스타일 컴포넌트 안(card 컴포넌트 반복문)을 삼항 연산자로 오류에 대한 예외 처리를 만들어 주었습니다.
- `updateData()`함수는 한 cardData에 state값을 filter와 조건문을 이용하여 입력창에 입력된 타이틀 또는 키워드에 맞는 state값을 리턴하는 함수입니다. 해당 함수가 배열을 리턴하기 때문에 map() 메서드를 이용하여 검색어 입력 즉시 필터링(Card컴포넌트) 되도록 구현하였습니다.

### 📌 Card 컴포넌트
- `getDate()`함수는 오늘 날짜 기준으로 받아온 데이터의 등록일(createdAt)의 차이를 구하는 함수입니다.
- `resentData()`함수는 getDate()함수에서 반환된 값에 따라 당일일 경우 'Today', 2일 내 데이터 '${diff} days ago' 그 외의 데이터는 'YYYY.MM.DD' 포맷으로 반환하도록 조건식을 만들어 주었습니다.
- styled-components의 props의 기능으로 getDate()함수 반환값에 따라 List 스타일 컴포넌트에 삼항연산자를 만들어 조건에 맞는 props를 전달해 주어서 opactiy '0' 또는 '1'로 New 데이터를 표시하였습니다.

### 📌 Input 컴포넌트
- onChange 활용하여 input 값이 변경될 때마다 Redux 변경함수에 값을 넣어줘 state값을 업데이트 하였습니다.
