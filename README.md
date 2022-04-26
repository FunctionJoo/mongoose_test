## RESTful API using MongoDB & Mongoose & Express
VELOPERT 블로그에 작성한 강좌에 사용된 프로젝트 입니다.  
MongoDB, Mongoose 와 Express 를 사용하여 간단한 RESTful API 를 구현합니다.  


```
$ npm install
$ node app.js
```

### API 목록
| ROUTE                     | METHOD | DESCRIPTION               |
|---------------------------|--------|---------------------------|
| /api/books                | GET    | 모든 book 데이터 조회     |
| /api/books/:book_id       | GET    | _id 값으로 데이터 조회    |
| /api/books/author/:author | GET    | author 값으로 데이터 조회 |
| /api/books                | POST   | book 데이터 생성          |
| /api/books/:book_id       | PUT    | book 데이터 수정          |
| /api/books/:book_id       | DELETE | book 데이터 제거          |

링크: https://velopert.com/594

psuh

-----------------------------

혼자 죽쑤다가 찾은 사막의 단물임
백엔드 세팅은 나중에 또 배워야할듯
현재 사용하고자 하는 방식에 맞게 수정해서 사용중

스키마 만들면 그 이름에 따라 컬렉션 추가되는 방식인듯 함.
하나 데이터 내부에 계속해서 추가하는 방식 db control 은 찾아봐야할거같음

- FunctionJoo