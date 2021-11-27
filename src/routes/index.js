const authRoutes = require('./auth.route');

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes
    },
  
]

module.exports = defaultRoutes;