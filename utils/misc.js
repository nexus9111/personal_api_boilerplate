//CHECK AVAILABLES ROUTES
const allowedRoutes = new Set(["/", "/example"]);
exports.allowedRoutesCheck = (route) => {
    return (allowedRoutes.has("/"+route.originalUrl.split("/")[1]));
};