function chooseProduct(segment) {
    switch(segment){
        case 'Beverage':
            return 'Soda'
        break;
        case 'Fruit':
            return 'Apple'
        break;
        case 'Hygiene':
            return 'Soap'
        break;
    }
}

module.exports = chooseProduct;
