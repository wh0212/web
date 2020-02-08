var mongoose  = require('mongoose')

var Schema = mongoose.Schema;
//定义模型
var produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    "checked":String,
    "productNum":Number
})
//自动匹配表名
module.exports = mongoose.model('Goods',produtSchema);
