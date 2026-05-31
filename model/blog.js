module.exports = (sequelize, DataTypes) => {
    const Blog= sequelize.define("blog", {
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      discription: {
        type: DataTypes.TEXT,
        allowNull:false
      }

    
    });
    return Blog;
  };