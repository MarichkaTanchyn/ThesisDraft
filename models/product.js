const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Category = require('./category')

const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
       type: Sequelize.DECIMAL,
        allowNull: false
    },
    other:  Sequelize.JSONB
});

module.exports = Product;