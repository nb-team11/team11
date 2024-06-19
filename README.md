# 🏘️ 동네 기반 소모임 SNS 플랫폼 <Town Talk>

**저희 프로젝트 Town Talk는 본인이 원하는 카테고리의 소모임을 모집하는 글을 게시하면서 가까운 곳에 사는 다른 유저들과 소통도 하고, 직접 만남을 가지면서 즐거운 동네 생활을 경험할 수 있는 SNS 플랫폼을 목표로 제작되었습니다.**

---
## ⏳ 제작 기간

- 24/06/17 ~ 24/06/21

 ---

## 기술 환경 및 스택


<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" /> <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" /> <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" /> 

 ---
  
## 🧑‍💻 역할 및 업무 분담

- 김민수(팀장)
  - 카카오맵 api를 이용한 위치 정보 불러오는 로직 및 redux를 통한 전역 상태 관리 reducer들의 제작 담당
- 선지원
  - 게시물 상세 페이지, 댓글 CRUD 담당
- 전재연
  - 메인 페이지 담당
- 윤새라
  - 게시물 등록 페이지 담당
  
---

## 📑 메인 페이지

- 본인이 위치한 곳과, 그 위치에서 가까운 곳의 모임 정보들을 메인 화면에 노출
- 최신순/거리순 별로 확인 가능한 정렬 버튼

---

## 📑 상세 페이지

- 메인페이지에서 클릭한 게시물의 상세 정보 노출
- 댓글 기능 구현

---

## 📑 게시물 생성 페이지

- SNS 포스트를 생성할 수 있도록 구현

---

## 📑 페이지 구성

- 메인 페이지

- 게시물 관련 페이지
  - 게시물 생성 페이지
  - 게시물 수정 페이지(보류)
  - 게시물 상세 정보 페이지

---
## 부가 라이브러리


<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> 

- kakao map API ??? 

---

# Trouble Shooting

 ## 문제 확인 : 게시물 상세 페이지에서 사용자가 댓글 수정 버튼을 클릭해도 수정이 되지 않는 오류 발생
  1. 문제 재현을 위해 다시 수정 버튼을 클릭해보기
  2. 어떤 에러가 발생했는지 확인하기 위해 브라우저 콘솔을 확인하기
  3. 에러가 발생한 수정 버튼 클릭 이벤트 핸들러와 관련된 코드, supabase 서버 통신 함수 검토하기
  4. 여러가지 가설을 설정: 클릭 이벤트가 발생한 댓글의 id를 넘겨주지 않은건지 / 요청이 제대로 전송되지 않은건지
  5. 가설 검증하기: 이벤트핸들러 콘솔에 넘겨받은 commentId가 잘 출력되는지 확인하기 / 네트워크 탭 확인하기
  6. 문제 해결: 출력은 잘 되나, 뮤테이션 함수의 인자로 commentId를 넘겨주었을 때 undefined로 전달되는 것을 확인하고 오류 수정
  7. 유사한 문제가 발생하지 않도록 발생했던 문제와 해결방법에 대해 잘 기록해두기(e.g 코드리뷰)
