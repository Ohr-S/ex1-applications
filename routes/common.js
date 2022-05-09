class Common {

    /** send an error message as response */
    sendErrMsg(errMsg, res) {
        let errObj = {
            message: errMsg
        };
        res.status(404).json(errObj);
    }

}

module.exports = new Common();