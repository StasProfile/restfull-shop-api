const expess = require('express');
const router = expess.Router();
//http status
//200 + ok
//300 + ok bur redir
//400 + client error
//500 + server error
router.get('/',(req, res, next) => {
    res.status(200).json({
        message : 'handling GET req to /products'
    });
});

router.post('/',(req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(201).json({
        message : 'handling POST req to /products',
        createdProduct : product
    });
});

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'u discovered a special id',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'you passed an Id'
        });
    }
});

router.patch('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});

module.exports = router;
