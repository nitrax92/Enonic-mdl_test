
function handleGet(req) {
    return {
        body : '{message: "Empty.."}',
        contentType : "application/json"
    }
}


function handlePost(req) {
    var my_data = req.formParams.data;

    log.info("Data has been posted successfully.. %s", my_data);


    return {
        body : result,
        contentType : "application/json"
    }
}

exports.get = handleGet;
exports.post = handlePost;