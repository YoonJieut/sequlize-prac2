// controllers/userController.js

const { User } = require("../models/users"); // User 모델을 import

// 사용자 생성 함수
async function createUser(req, res) {
  try {
    const { user_id, user_pw } = req.body; // 요청 데이터에서 사용자 정보 추출
    const newUser = await User.create({ user_id, user_pw }); // 새 사용자 생성
    res.status(201).json(newUser); // 생성된 사용자 정보 반환
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "사용자 생성 중 오류 발생" });
  }
}

// 모든 사용자 조회 함수
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll(); // 모든 사용자 조회
    res.status(200).json(users); // 사용자 목록 반환
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "사용자 조회 중 오류 발생" });
  }
}

// 사용자 정보 수정 함수
async function updateUser(req, res) {
  const { id } = req.params; // URL에서 사용자 ID 추출
  const { user_id, user_pw } = req.body; // 요청 데이터에서 사용자 정보 추출

  try {
    const user = await User.findByPk(id); // 해당 ID의 사용자 조회
    if (!user) {
      return res.status(404).json({ error: "사용자가 존재하지 않습니다" });
    }

    // 사용자 정보 업데이트
    user.user_id = user_id;
    user.user_pw = user_pw;
    await user.save();

    res.status(200).json(user); // 업데이트된 사용자 정보 반환
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "사용자 정보 업데이트 중 오류 발생" });
  }
}

// 사용자 삭제 함수
async function deleteUser(req, res) {
  const { id } = req.params; // URL에서 사용자 ID 추출

  try {
    const user = await User.findByPk(id); // 해당 ID의 사용자 조회
    if (!user) {
      return res.status(404).json({ error: "사용자가 존재하지 않습니다" });
    }

    await user.destroy(); // 사용자 삭제

    res.status(204).end(); // 응답은 성공이지만 본문은 비어있는 상태
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "사용자 삭제 중 오류 발생" });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
