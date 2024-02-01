// models/post.js
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    "posts",
    {
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // 테이블 이름을 명시적으로 정의할 수 있습니다 (선택 사항).
      tableName: "posts",
    }
  );

  return posts;
};
