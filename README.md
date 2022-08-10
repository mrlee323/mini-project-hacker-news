# Hacker news 미니프로젝트 과제

## 해커뉴스 Reader 사이트 개발

2022.01.26 ~ 2022.02.11(2주 개인프로젝트 -UI/UX 협엽)

## [배포](https://mrlee323.github.io/mini-project-hacker-news)

## 요약

Y Combinator에서 운영하고 있는 소셜 뉴스 웹사이트 해커뉴스의 글을 읽을 수 있는 모바일 전용 Reader
사이트를 개발. Top, New, Show, Ask, Jobs 총 5가지 주제 별로 글 목록 조회가 가능하며 연결된 글의
내용과 글에 연결된 코멘트와 작성자의 정보를 볼 수 있습니다.

## 기능구현

1. 각 주제와 페이지에 맞는 글 목록을 조회할 수 있습니다.
    - 유저가 선택한 주제에 맞춰 알맞은 페이지의 글 목록을 조회해서 보여줍니다.
  
2. 선택한 글의 내용과 코멘트 목록을 볼 수 있다.
    - 조회한 글 목록에서 글을 클릭하면 연결된 링크를 새로운 탭으로 열람해야 합니다.
    - 또한 코멘트 개수를 클릭하면 글에 연결된 코멘트 목록을 볼 수 있습니다.

3. 글을 작성한 유저의 정보를 볼 수 있다.
    - 조회한 글 목록에서 유저 이름을 클릭하면 유저의 정보를 볼 수 있습니다.

## 실행 방법

```
# install
npm install

# run
npm start
```

## 구현 상세

### 랜딩페이지 
- Homd.jsx
<p align="center">
  <img src="https://user-images.githubusercontent.com/92876884/183937395-06b68c3e-94eb-4972-882a-f38c6f9a3bc3.gif"/>
</p>

- 랜딩 페이지에는 각 카테고리의 랭크 또는 일부를 가져와 보여줍니다.
- nav bar 를 통해 각페이지로 이동할수 있으며, today title으로도 이동가능합니다.
- 다크모드 아이콘을 통해 라이드모드/다크모드를 변경할수 있습니다.

### 각 페이지 공통 

<p align="center">
  <img src="https://user-images.githubusercontent.com/92876884/183949958-1eea51a9-1b3d-40b5-8685-45cecd442709.gif"/>
  <img src="https://user-images.githubusercontent.com/92876884/183949972-0da0c85e-5d30-478d-8cfc-0a5c5854a7ed.gif"/>
</p>

- post는 commnent/points/user의 karma 순으로 정렬이 가능합니다.
- 날짜기준으로 하루/일주일 기준으로 정렬이 가능합니다.
- post의 형태를 리스트형/카드형 두가지로 변경이 가능합니다.
- card 클릭시 Top/New 페에지 해당링크로 이동 Show/Ask 게시글로 이동합니다.
- comment클릭시 해당포스트의 comment를 보여줍니다.
- user클릭시 user 정보를 보여줍니다.

### Top 페이지

<p align="center">
  <img src="https://user-images.githubusercontent.com/92876884/183949991-3d2e7202-3ab9-4d2e-9d32-0af3f22c27de.gif"/>
</p>

- 슬라이드 버튼에서 user를 누르면 karma가 높은순의 user랭크를 보여줍니다.

### Job 페이지

<p align="center">
  <img src="https://user-images.githubusercontent.com/92876884/183953132-296fb266-0b65-429f-9c81-e096daadad23.gif"/>
</p>

- apply 클릭시 해당 링크 이동 
- 랜덤으로 슬라이드 형식의 job post 를 보여줍니다.
