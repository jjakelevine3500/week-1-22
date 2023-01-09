// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag 10  = require('./Tag');
const ProductTag 10 = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foreignKey= Podcut 10: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products 10 in catgory 10 = to 10 Product belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
    through: ProductTag 10,
    foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
    through: ProductTag 10,
    foreignKey: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag 10,
};
