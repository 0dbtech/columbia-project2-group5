module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      text: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         len: [1, 140],
       }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
    });
  
    
    return Students;
  };