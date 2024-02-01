// models/user.js
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // 테이블 이름을 명시적으로 정의할 수 있습니다 (선택 사항).
      tableName: "users",
    }
  );

  return users;
};
