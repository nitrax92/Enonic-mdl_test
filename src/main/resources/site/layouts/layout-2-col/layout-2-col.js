/**
 * Created by Mello on 6/4/2017.
 */
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {

    // Find the current component.
    var component = portal.getComponent();

    // Resolve the view
    var view = resolve('./layout-2-col.html');

    // Define the model
    var model = {
        leftRegion: component.regions["left"],
        rightRegion: component.regions["right"]
    };

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};