App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Contact = Marionette.ItemView.extend({
		template: "#contact-view"
	});

	Show.MissingContact = Marionette.ItemView.extend({
		template: "#missing-contact-view"
	});
	
});