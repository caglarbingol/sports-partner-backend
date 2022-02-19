module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Users',
    });
    return User
}