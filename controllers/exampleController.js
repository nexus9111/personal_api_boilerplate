
exports.examplePost = (req, res) => {
    return res.status(200).json({
        success: true,
        data: {
            message: "Success message, let me show you the body you sent",
            body: req.body
        }
    });
};

