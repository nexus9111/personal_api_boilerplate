const myModel = require("../models/myModel");


exports.examplePost = (req, res) => {
    return res.status(200).json({
        success: true,
        data: {
            message: "Success message, let me show you the body you sent",
            body: req.body
        }
    });
};

/**
 * example of how to use my model with mongodb
 */
exports.showAllMyModels = async () => {
    let myModels = await myModel.find({});
    return myModels;
};
