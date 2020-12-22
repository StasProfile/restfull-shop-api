const expess = require('express');
const router = expess.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.get('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Order details'
    });
});

router.post('/',(req,res,next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(201).json({
        message: 'Order was created',
        order: order

    });
});

router.delete('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Order deleted'
    });
});

module.exports = router;
