var libs = {
    portal: require('/lib/xp/portal'), //??
    thymeleaf: require('/lib/xp/thymeleaf') // Templateing engine
};

exports.get = function (req) {
    // Page Content
    var content = libs.portal.getContent();
    var site = libs.portal.getSite();
    // Extract the main region, components parts.
    /*
    var mainRegion = content.page.regions.main;
    var pageTitle = "My Template Page";
    var model = {
        mainRegion: mainRegion,
        pageTitle: pageTitle
    };
    */

    var mainRegion = content.page.regions['mdl-content'];


    // Prepare the model that will be passed to the view
    var model = {
        mainRegion: mainRegion,
        pageTitle: "My Title"
    };

    var view = resolve('default.html');

    // Return the merged view and model in the response obj.
    return {
        body: libs.thymeleaf.render(view, model)
    }
};