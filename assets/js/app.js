// Instantinate application
var App = new Marionette.Application();

// Define regions
App.addRegions({
	contacts: ".contact-region"
});

App.navigate = function(route, options){
	options || (options = {});
	Backbone.history.navigate(route, options);
}

App.getCurrentRuote = function(){
	return Backbone.history.fragment;
};

// When app is initialized, create the data and place it in the region
App.on("initialize:after", function(){
	if (Backbone.history){
		Backbone.history.start();

		if (this.getCurrentRuote() === ""){
			App.trigger("contacts:list");
		}
	}
});
