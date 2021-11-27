const authRoutes = require('./auth.route');

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path:"/login",
        route: authRoutes
    },
    {
        path:"/otp",
        route:authRoutes
    },
    {
        path:'/resetPassword',
        route:authRoutes
    }

]

module.exports = defaultRoutes;