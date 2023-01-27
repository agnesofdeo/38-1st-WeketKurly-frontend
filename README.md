# 🟪 Market Kurly
<br />


## 🍎 프로젝트 소개 
> 맛있는 음식은 삶의 가장 큰 즐거움!
>
> 소비자에게 ‘진짜 맛’을 소개시켜드리는 푸드마켓 마켓컬리!
 
> 건강한 먹거리 상품 추천 및 주문을 위한 서비스, 마켓컬리의 클론 프로젝트입니다.
> 


<br />

## 🗓 개발 기간

2022.10.22 ~ 2022.10.28

<br />
<br />


## 💻  참여 개발자

- 👀  프론트엔드
    - [이진혁](https://github.com/zinukk) 
    - [윤수](https://github.com/yoonsueworks) 
    - [모유진](https://github.com/yuzinnee)
    
- 🗂  백엔드
    - [김경훈](https://github.com/kh881122) 
    - [김택수](https://github.com/Robinkim93)
<br />


## ⚡️ 기술 스택

- 프론트엔드

    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
    <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=React-Router&logoColor=white"> 
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> 
    <img src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=Createreactapp&logoColor=white">

- 백엔드

    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> 
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> 
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
    <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logoColor=white"> 
    <img src="https://img.shields.io/badge/dbmate-17202C?style=for-the-badge&logoColor=white"> 

- 협업

    <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> 
    <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> 
    <img src="https://img.shields.io/badge/trello-0052cc?style=for-the-badge&logo=trello&logoColor=white"> 



<br />
<br />

## 💻  프로젝트 시연 영상

[유튜브로 이동하여 시청하기](https://youtu.be/JpkRcpffVek) (04:10)
<br />
<br />

## 1. ERD
<br />

![Untitled](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbH4G9s%2FbtrPS0hZ86A%2FZ3a7zB2RocyPNjw2ysSm9k%2Fimg.png)
<br />
<br />
<br />
## 2. 프로젝트 페이지 구성 및 기능구현
<br />

| | 페이지 | 기능 |
|:---:|:---:|:---|
| `회원가입` | <img src="https://blog.kakaocdn.net/dn/6hekd/btrPQ4FaIr5/SlXARLTMBXxwA0X7YDV8sk/img.gif" width="400px"/>| - 유효성 검사에 따른 경고 문구<br /> - 회원가입 기능
| `로그인` | <img src="https://blog.kakaocdn.net/dn/k9Xkf/btrPRdIODj9/1KNgCcSDgA4NBe6KdAeuhK/img.gif" width="400px"/> |- 유효성 검사에 따른 경고 모달<br />- 로그인 기능 
| `메인페이지` | <img src="https://postfiles.pstatic.net/MjAyMjEwMjlfMTk3/MDAxNjY3MDM3MzA5MDg2.yDw2e9j-fpRVed3Dx-gIF3dIsb5_Ptc8phAOxhBkLF8g.Uw8t0TUYxzBqRvsQY5D4m2TSEEXYY4Rxssadb9Vyb5Ug.GIF.mrokr/carouselCartModal.gif?type=w966" width="400px"/> | - Carousel 2종(배너, 아이템)<br /> - 아이템 추가 시 ToastPopup<br />- 아이템 추가 시 장바구니 모달 |
| `메인페이지` | <img src="https://postfiles.pstatic.net/MjAyMjEwMjlfMTk2/MDAxNjY3MDM3MzA5NTMy.soF9FMSCVs3nKApA9GR_8WD6GFcyMUreU7XN2pOHnbAg.OwtXwIGO2sl8St16hSpesk-Tr73VkyXnl6Vkgfq470Yg.GIF.mrokr/filter.gif?type=w966" width="400px" /> | - 일일 특가 타이머<br />- 추천 카테고리 필터링 |
| `메인페이지` | <img src="https://blog.kakaocdn.net/dn/bqNj4M/btrPRciO2SQ/dlLnzVVN7TTY8Ica4uyUFk/img.gif" width="400px"/> | - 카테고리 호버, 카테고리 클릭 시 이동 |
| `리스트` |   <img src="https://blog.kakaocdn.net/dn/bvoF3p/btrPUnw94jp/WgOK6C5gODiRbrzzxOpqpk/img.gif" width="400px"/> | - 세부 카테고리로 제품 필터링<br />- 제품 이미지 클릭 시 상세페이지로 이동 |
| `상세페이지` |  <img src="https://blog.kakaocdn.net/dn/nv6lk/btrPUnKHbrT/kZ0304Ny0RnUniX338fqzK/img.gif" width="400px"/> | - 제품 상세 데이터 표시하기<br /> - 후기 목록 조회, 로그인 여부에 따른 작성<br /> - 찜하기<br /> - 공유하기 Tool Tip |
| `장바구니` | <img src="https://blog.kakaocdn.net/dn/qufHb/btrPR6JsKxh/qsWjZMmyahaoRK9UTf4pd1/img.gif" width="400px"/> | - 포장타입에 따른 분류<br /> - 수량 변경 및 삭제<br /> - 주문하기 후 장바구니 리셋 |




 


<br />

## Reference

> 이 프로젝트는 [마켓컬리](https://www.kurly.com/main) 사이트를 참조하여 학습 목적으로 제작되었습니다. <br />
> 실무의 플로우를 바탕으로 진행된 프로젝트이지만 무단 배포 시 법적으로 문제될 수 있습니다.

## 🔗 개인 회고록
[agnesofdeo.log [>wecode] 1차 프로젝트 회고록](https://velog.io/@agnesofdeo/wecode-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)
