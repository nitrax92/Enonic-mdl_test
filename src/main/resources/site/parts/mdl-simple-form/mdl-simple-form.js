/**
 * Created by Martin on 6/14/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function

// Handle GET requests
exports.get = function(req) {
    // Resolve the view
    var view = resolve('mdl-simple-form.html');
    // Define the model
    var model = {};

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };
};

exports.post = function (req) {
    log.info("Post Received!");
    // Resolve the view
    var view = resolve('mdl-simple-form.html');
    // Define the model
    var model = {};

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };
};