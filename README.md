# 🏘️ 동네 기반 소모임 SNS 플랫폼 <Town Talk>

**저희 프로젝트 <Town Talk>는 본인이 원하는 카테고리의 소모임을 모집하는 글을 게시하면서 가까운 곳에 사는 다른 유저들과 소통도 하고, 직접 만남을 가지면서 즐거운 동네 생활을 경험할 수 있는 SNS 플랫폼을 목표로 제작되었습니다.**

---
## ⏳ 제작 기간

- 24/06/17 ~ 24/06/21

 ---

## 기술 환경 및 스택


<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" /> <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" /> <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" /> 

 ---
  
## 🧑‍💻 역할 및 업무 분담



- 김민수(팀장)
  - 서버와의 통신 api 제작과 redux를 통한 전역 상태 관리를 위한 reducer들의 제작 담당
- 선지원
  - 게시물 상세 페이지, 댓글 CRUD 담당
- 전재연
  - 메인 페이지 담당
- 윤새라
  - 게시물 등록 페이지 담당
  
---

## 📑 메인 페이지

- 최신순으로 각자 올린 식단을 메인 화면에 노출
- 칼로리 별로 확인 가능한 정렬 버튼

---

## 📑 상세 페이지

- 댓글 기능 구현
- instagram 등 sns들의 좋아요 기능 구현

---

## 📑 개인 프로필 페이지

- 회원별 닉네임, 이미지 수정 기능 구현
  
---

## 📑 게시물 생성, 수정 페이지

- SNS 포스트를 생성 그리고 수정할 수 있도록 페이지로 구현
---



## 📑 MyPosts 페이지
- 회원별, 나의 게시물만 모아서 확인할 수 있도록 구현
---



## 📑 로그인, 회원가입 페이지
- supabase의 auth api를 활용하여 로그인, 회원가입 구현

---

## 📑 페이지 구성

- 메인 페이지
- 사용자 개인 페이지

  - 회원별 게시물 페이지
  - 회원 정보 페이지

- 게시물 관련 페이지

  - 게시물 생성 페이지
  - 게시물 수정 페이지
  - 게시물 상세 정보 페이지

- 인증 관련 페이지
  - 로그인 페이지
  - 회원가입 페이지



---
## 부가 라이브러리


<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> 

- kakao map API ??? 

---

# Trouble Shooting

 ## 문제 확인 : 게시물 상세 페이지에서 사용자가 댓글 수정 버튼을 클릭해도 수정이 되지 않는 오류 발생
  1. 문제 재현을 위해 다시 수정 버튼을 클릭해보기
  2. 어떤 에러가 발생했는지 확인하기 위해 브라우저 콘솔을 확인하기
  3. 에러가 발생한 수정 버튼 클릭 이벤트 핸들러와 관련된 코드와 supabase 서버 통신 함수 검토하기
  4. 여러가지 가설을 설정: 클릭이벤트가 발생한 포스트의 id를 넘겨주지 않은건지 / 요청이 제대로 전송되지 않은건지
  5. 가설 검증하기: 이벤트핸들러 콘솔에 넘겨받은 id가 잘 출력되는지 확인하기 / 네트워크 탭 확인하기
  6. 문제 해결: 이벤트핸들러의 인자로 잘못된 id가 넘겨진 것을 확인하고, 오류 수정
  7. 유사한 문제가 발생하지 않도록 발생했던 문제와 해결방법에 대해 잘 기록해두기(e.g 코드리뷰)
