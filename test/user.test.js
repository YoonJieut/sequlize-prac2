import chai from "chai";
import chaiHttp from "chai-http";
const app = require("../app"); // Express 애플리케이션을 가져옵니다.

// Chai 설정
chai.use(chaiHttp);
const expect = chai.expect;

describe("Users API", () => {
  // Create 테스트 케이스
  it("should create a new user", (done) => {
    chai
      .request(app)
      .post("/api/users")
      .send({ user_id: "newuser", user_pw: "password" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("user_id", "newuser");
        done();
      });
  });

  // Read, Update, Delete 테스트 케이스 등 추가 가능
});
