App.module("ContactsApp", function(ContactsApp, App, Backbone, Marionette, $, _){

	// Create the router class that extends Marionette.AppRouter
	ContactsApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			// URL fragment : callback method
			"contacts": "listContacts"
		}
	});

	// Create the public API listing functions for use in routing
	var API = {
		listContacts: function(){
			console.log("route to list contacts was triggered");
		}
	};

	// Add initializer which instantiates the defined router, using the API as available calllback functions
	App.addInitializer(function(){
		new ContactsApp.Router({
			controller: API
		});
	});
});