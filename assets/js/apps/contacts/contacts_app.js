App.module("ContactsApp", function(ContactsApp, App, Backbone, Marionette, $, _){

	// Create the router class that extends Marionette.AppRouter
	ContactsApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			// URL fragment : callback method
			"contacts": "listContacts",
			"contacts/:id": "showContact"
		}
	});

	// Create the public API listing functions for use in routing
	var API = {
		listContacts: function(){
			ContactsApp.List.Controller.listContacts();
		},
		showContact: function(id){
			ContactsApp.Show.Controller.showContact(id);
		}
	};

	App.on("contacts:list", function(){
		App.navigate("contacts");
		API.listContacts();
	})

	App.on("contact:show", function(id){
		App.navigate("contacts/"+id);
		API.showContact(id);
	})

	// Add initializer which instantiates the defined router, using the API as available calllback functions
	// Note that we're not listening on initalize:after because we want routing to happen before initialize:after event
	App.addInitializer(function(){
		new ContactsApp.Router({
			controller: API
		});
	});
});