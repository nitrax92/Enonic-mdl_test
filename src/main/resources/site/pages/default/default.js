var libs = {
    portal: require('/lib/xp/portal'), //??
    thymeleaf: require('/lib/xp/thymeleaf') // Templateing engine
};
exports.get = function (req) {
    log.info("DEFAULT PAGE LOADING...");
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
    var moment = require('/assets/momentjs/2.14.1/min/moment-with-locales.min.js');

    //var test_url = req.assetUrl();
    //log.info(test_url);
    var mainRegion = content.page.regions['mdl-content'];
    //var background_image = libs.portal.getComponent().config;
    // Find the current component from request
    //var component = libs.portal
    //log.error('My JSON %s', mainRegion );
    //var angular = require('/assets/angular/1.6.4/angular.js');

    var title = site.page.config['title'] || 'Default Title';
    var background_image = site.page.config['background-image'];
    var color_scheme = site.page.config['color_scheme'] || 'indigo-pink';

    // Prepare the model that will be passed to the view
    var model = {
        mainRegion: mainRegion,
        title: title,
        bg_img: background_image,
        scheme: color_scheme
    };

    var view = resolve('default.html');
    log.info("DEFAULT PAGE DONE");
    // Return the merged view and model in the response obj.
    return {
        body: libs.thymeleaf.render(view, model)
    }
};