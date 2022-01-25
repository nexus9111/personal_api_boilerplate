//CHECK AVAILABLES ROUTES
const allowedRoutes = ["/", "/example"];
exports.allowedRoutesCheck = (route) => {
    return (allowedRoutes.indexOf("/"+route.originalUrl.split("/")[1]) > -1);
};