module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      text: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         len: [1, 140],
        //  customRule: function(value) {
        //   if (value !== 1) {
  
        //   }
        //  }
       }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
    });
  
    
    return Students;
  };