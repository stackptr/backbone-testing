// Define the contact entity module
App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

	// Model and collection definitions
	Entities.Contact = Backbone.Model.extend({});

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: "firstName"
	});

	// Private data and functions

	var contacts;

	var initializeContacts = function(){
		contacts = new Entities.ContactCollection([
			{ id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184'},
			{ id: 2, firstName: 'Charles', lastName: 'Campbell', phoneNumber: '111-0133'},
			{ id: 3, firstName: 'Billy', lastName: 'Butler', phoneNumber: '999-0010'}
		]);
	};

	// Define a list of functions that will be publically accessible
	var API = {	// Note API itself is still private!
		getContactEntities: function(){
			if (contacts === undefined){
				initializeContacts();
			}
			return contacts;
		}
	};

	// Set request handler for the module
	App.reqres.setHandler("contact:entities", function(){
		return API.getContactEntities();  // It is good policy to require handlers to only use public API functions
	});

});