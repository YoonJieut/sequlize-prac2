// app.js (또는 서버 파일)

const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const userRoutes = require("./routes/userRoutes.js");

// Sequelize 초기화
const sequelize = new Sequelize("test2", "postgres", "root", {
  dialect: "postgres", // 사용하는 데이터베이스 종류
  host: "localhost", // 데이터베이스 호스트
});

// 데이터베이스 연결 테스트
sequelize
  .authenticate()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error("데이터베이스 연결 오류:", err);
  });

// 모델 정의 및 연결
// models/users.js 파일을 참고하여 User 모델을 정의하고 Sequelize와 sequelize 인스턴스를 전달합니다.
const User = require("./models/users.js")(sequelize, Sequelize);

// 미들웨어 설정 등...
app.use(express.json()); // JSON 파싱 미들웨어 추가
// 나머지 Express 설정 및 라우팅 추가
app.use("/api", userRoutes); // /api 경로에 라우터 적용

// 서버 시작 코드 등...
app.listen(3000, () => {
  console.log("서버가 http://localhost:3000 포트에서 실행 중입니다.");
});

module.exports = app; // 테스트 코드에서 사용하기 위해 app을 내보냅니다.
