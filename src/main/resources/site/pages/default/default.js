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

    //var test_url = req.assetUrl();
    //log.info(test_url);
    var mainRegion = content.page.regions['mdl-content'];
    //var background_image = libs.portal.getComponent().config;
    // Find the current component from request
    //var component = libs.portal

    var title = site.page.config['title'] || 'Default Title';
    var background_image = site.page.config['background-image'];
    var color_scheme = site.page.config['color_scheme'] || 'indigo-pink';

    // Prepare the model that will be passed to the view
    var model = {
        mainRegion: mainRegion,
        title: "My Title",
        bg_img: background_image,
        scheme: color_scheme
    };

    var view = resolve('default.html');

    // Return the merged view and model in the response obj.
    return {
        body: libs.thymeleaf.render(view, model)
    }
};