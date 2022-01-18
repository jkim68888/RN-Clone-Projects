# 리액트 네이티브 클론 프로젝트

<img src="https://user-images.githubusercontent.com/75922558/144962997-6aa5a537-1e1d-4e8e-a61d-083731601523.jpg" width="250"/>

<br/>

## 1. Instagram App

### Screens

<br>

<div>
    <span>
        <img src="https://user-images.githubusercontent.com/75922558/149903210-732a1aa3-cc1e-4e11-ab8e-68162978031c.png" width="200"/>
    </span>
    <span>
        <img src="https://user-images.githubusercontent.com/75922558/149903510-c32fb591-03ab-431c-9a25-0d77979b80af.png" width="188"/>
    </span>
    <span>
        <img src="https://user-images.githubusercontent.com/75922558/149903580-b1a69b37-9ab9-4586-aecc-d6f252ffd5c1.png" width="191"/>
    </span>
    <span>
        <img src="https://user-images.githubusercontent.com/75922558/149903763-e5aa8da8-9c58-4db3-9436-97ed666c199f.png" width="196"/>
    </span>
</div>

<br>

[ Home ]

- 회원가입 한 유저들 상단에 출력 : firebase의 "Users" collection 에서 `데이터를 불러옴`
- 작성된 포스트 출력 : firebase의 "Posts" collectionGroup 에서 데이터를 불러옴

<br>
  
[ Post ]

- CurrentUser 정보를 불러와서 해당 유저 콜렉션 밑에 포스트 콜렉션을 생성 : `Collection Group`
- `Yup` 라이브러리를 활용하여 imgUrl `validation check` 진행

<br>
  
[ Login ]

- `Formik` 라이브러리를 활용하여 `폼 구현`
- `Yup` 라이브러리를 활용하여 회원가입 유효성 검사 진행 진행
- 회원가입 정보를 `firestore`의 "Users" 테이블에 저장

<br>
  
[ Login ]

- `firebase authentication` 의 `signInWithEmailAndPassword()` 메소드로 로그인 구현

<br>

### Database

<br>

Firebase Authentication & Firestore 사용

<br>

#### Users Collection - 유저 데이터

 <img src="https://user-images.githubusercontent.com/75922558/149906245-37165368-72a0-4183-b8ae-9942e8cb9e61.png" width="700"/>

<br>

#### Posts Collection Group - 포스트 데이터

 <img src="https://user-images.githubusercontent.com/75922558/149906293-09b5016c-99db-4f95-ad71-67ea9119d119.png" width="700"/>
