// Define the contact entity module
App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
	var alertPrivate = function(msg){
		alert("Private alert: " + msg);
	};

	Entities.Contact = Backbone.Model.extend({});

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: "firstName"
	});

});