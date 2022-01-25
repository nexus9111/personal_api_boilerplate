require("dotenv-safe").config();

const app = require("./config/express");
const mongoose = require("./config/mongoose");

const exampleCtrl = require("./controllers/exampleController");
const Utils = require("./utils/misc");

/**
 * open mongoose connection
 */
mongoose.connect(); //you can't comment this if you don't need database

/**
 * allow only authorized routes
 */
app.all("*", (req, res, next) => {
    if (!Utils.allowedRoutesCheck(req)) {
        return res.status(500).json({
            success: false,
            data: {
                message: "access denied"
            }
        });
    } else {
        console.log("🔵 called route " + req.originalUrl);
        next();
    }
});

/**
 * define routes, you can add as many routes as you need 
 */
app.route("/")
    .get((req, res) => {
        res.status(200).json({
            success: true,
            data: {
                message: "Welcome to this REST api"
            }
        });
    });
app.route("/example")
    .get((req, res) => {
        res.status(200).json({
            success: true,
            data: {
                message: "This is my example"
            }
        });
    })
    .post((req, res) => { exampleCtrl.examplePost(req, res); });



app.listen(process.env.API_PORT, () => {
    console.log(`✅ Example app listening at http://localhost:${process.env.API_PORT}`);
});