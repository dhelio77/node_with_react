const middleware = {
    requireAuthentiation: (req, res, next) => {
        console.log("Private Route Hit");
        next();
    },
    logger: (req, res, next) => {
        console.log("Request: " + new Date().toString() + " " + req.method + " " + req.originalUrl);
        next();
    }
};

module.exports = middleware;