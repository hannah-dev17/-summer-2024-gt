# Welcome to neordinary-template-react-ts-web

## Prerequisites
***
- npm = 8.19.2
- node = v18.12.1

## 환경변수
env폴더에 .env파일을 생성한 후 아래 변수를 담아주세요.
```shell
LOCAL_APP_API=https://api-sns.gridge-test.com
LOCAL_APP_ENV=development
LOCAL_APP_LOGIN_INFO=neordinary-template-web-info-development
LOCAL_KAKAO_JAVASCRIPT_API_KEY=2df66a4e26ee3c1f5d6b0d778bec2dba
LOCAL_KAKAO_REST_API_KEY=44a90896f3ee78d0e03712d6cd025cfd
LOCAL_KAKAO_REDIRECT_URI=http://localhost:3000/login/kakao

DEV_APP_API=https://api-sns.gridge-test.com
DEV_APP_ENV=development
DEV_APP_LOGIN_INFO=neordinary-template-web-info-development
DEV_KAKAO_JAVASCRIPT_API_KEY=2df66a4e26ee3c1f5d6b0d778bec2dba
DEV_KAKAO_REST_API_KEY=44a90896f3ee78d0e03712d6cd025cfd
DEV_KAKAO_REDIRECT_URI=http://localhost:3000/login/kakao

PROD_APP_API=https://~
PROD_APP_ENV=production
PROD_APP_LOGIN_INFO=neordinary-template-web-info-production
PROD_KAKAO_JAVASCRIPT_API_KEY=2df66a4e26ee3c1f5d6b0d778bec2dba
PROD_KAKAO_REST_API_KEY=44a90896f3ee78d0e03712d6cd025cfd
PROD_KAKAO_REDIRECT_URI=http://24-WEB.gridge-test.com/login/kakao

STAGE_APP_API=http://~
STAGE_APP_ENV=stage
STAGE_APP_LOGIN_INFO=neordinary-template-web-info-stage
STAGE_KAKAO_JAVASCRIPT_API_KEY=2df66a4e26ee3c1f5d6b0d778bec2dba
STAGE_KAKAO_REST_API_KEY=44a90896f3ee78d0e03712d6cd025cfd
STAGE_KAKAO_REDIRECT_URI=http://24-WEB.gridge-test.com/login/kakao
```

## 설치법
***
```sh
npm install
```

## 로컬 실행법 / 배포 소스 빌드법
***
```sh
npm run start # 로컬에서 실행

npm run build-dev # dev 환경용 build 파일 생성

npm run build-stage # stage 환경용 build 파일 생성

npm run build-prod # prod 환경용 build 파일 생성
```

## 폴더 구조 및 기능
```
상위에 노출된 폴더는 공용으로 사용됩니다.
- apis 폴더에는 endpoint와 axios interceptor를 정의합니다.
- assets 폴더에는 프로젝트에서 사용되는 icons와 images를 정의합니다.
- components에는 프로젝트에서 공용으로 사용되는 컴포넌트를 정의합니다.
- layouts는 레이아웃을 정의합니다.
- overrides에는 route를 오버라이드하는 컴포넌트를 정의합니다.
- pages에는 화면 기획서에 명시된 화면에 따라 정의합니다.
-- pages 내부에는 해당 페이지에서만 사용되는 component와 type들을 따로 파일로 관리합니다.
- queries는 react-query로 생성한 훅을 정의합니다.


src
 ┣ apis
 ┃ ┣ endpoints.ts
 ┃ ┗ interceptor.ts
 ┣ assets
 ┃ ┣ icons
 ┃ ┗ images
 ┣ components
 ┃ ┣ AppDownloadBadges
 ┃ ┣ Button
 ┃ ┣ Header
 ┃ ┣ InputField
 ┃ ┣ KakaoLoginButton
 ┃ ┣ ProfileMenu
 ┃ ┣ Spacing
 ┃ ┣ Text
 ┃ ┗ index.ts
 ┣ constants
 ┣ layout
 ┃ ┣ DefaultLayout.tsx
 ┃ ┗ index.ts
 ┣ overrides
 ┃ ┣ PrivateRoute.tsx
 ┃ ┣ PublicRoute.tsx
 ┃ ┗ index.ts
 ┣ pages
 ┃ ┣ Board
 ┃ ┣ Login
 ┃ ┃ ┣ components
 ┃ ┃ ┣ Login.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ LoginKakao
 ┃ ┣ SignUp
 ┃ ┃ ┣ components
 ┃ ┃ ┣ types
 ┃ ┃ ┣ SignUp.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┗ index.ts
 ┣ queries
 ┃ ┣ index.ts
 ┃ ┣ useKakaoAccessToken.ts
 ┃ ┣ useKakaoSignIn.ts
 ┃ ┣ useKakaoSignUp.ts
 ┃ ┣ useSignIn.ts
 ┃ ┗ useSignUp.ts
 ┣ recoil
 ┃ ┣ auth.ts
 ┃ ┗ index.ts
 ┣ repositories
 ┃ ┣ auth
 ┃ ┃ ┣ auth.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ types.ts
 ┃ ┣ kakao
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ kakao.ts
 ┃ ┃ ┗ types.ts
 ┃ ┗ index.ts
 ┣ styles
 ┃ ┣ colors.ts
 ┃ ┣ globalStyle.ts
 ┃ ┗ index.ts
 ┣ types
 ┃ ┣ index.ts
 ┃ ┗ types.ts
 ┣ App.tsx
 ┗ index.tsx
```
