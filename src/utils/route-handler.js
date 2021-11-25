const exppress = require('express');
const defaultRoutes = require('../routes');
const router = exppress.Router();


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

module.exports = router