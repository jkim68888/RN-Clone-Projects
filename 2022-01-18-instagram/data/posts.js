import { USERS } from './users'

export const POSTS = [
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_1280.jpg',
    user: USERS[0].user,
    likes: 78,
    caption: '졸귀 멍뭉이🐶',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: USERS[1].user,
        comment: '우와! 너무 귀여워요~',
      },
      {
        user: USERS[2].user,
        comment: '안녕하세요~ 저희 집 강아지랑 친구해요:)',
      },
    ],
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg',
    user: USERS[1].user,
    likes: 25,
    caption: '오늘 아침 꿀맛😋',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: USERS[0].user,
        comment: '너무 맛있어 보여요!',
      },
      {
        user: USERS[4].user,
        comment: '헐 맛있겠다ㅠㅠ',
      },
    ],
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2017/01/03/22/00/tower-1950742_1280.jpg',
    user: USERS[2].user,
    likes: 57,
    caption: '에펠탑 구경중~',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: USERS[3].user,
        comment: '에펠탑 멋있네요^^',
      },
      {
        user: USERS[1].user,
        comment: '저도 파리 가고 싶어요ㅠ!!',
      },
    ],
  },
]
