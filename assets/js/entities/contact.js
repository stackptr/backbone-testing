// Define the contact entity module
App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

	// Model and collection definitions
	Entities.Contact = Backbone.Model.extend({
		urlRoot: "contacts"
	});

	Entities.configureStorage(Entities.Contact);

	Entities.ContactCollection = Backbone.Collection.extend({
		url: "contacts",
		model: Entities.Contact,
		comparator: "firstName"
	});

	Entities.configureStorage(Entities.ContactCollection);

	// Private data and functions

	var initializeContacts = function(){
		var contacts = new Entities.ContactCollection([
			{ id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184'},
			{ id: 2, firstName: 'Charles', lastName: 'Campbell', phoneNumber: '111-0133'},
			{ id: 3, firstName: 'Billy', lastName: 'Butler', phoneNumber: '999-0010'}
		]);
		contacts.forEach(function(contact) {
			contact.save();
		})
		return contacts;
	};

	// Define a list of functions that will be publically accessible
	var API = {	// Note API itself is still private!
		getContactEntities: function(){
			var contacts = new Entities.ContactCollection();
			contacts.fetch(); // Fetch contacs via defined url
			if (contacts.length === 0){
				return initializeContacts();
			}
			return contacts;
		},

		getContactEntity: function(contactId){
			var contact = new Entities.Contact({id: contactId});
			contact.fetch();
			return contact;
		}
	};

	// Set request handler for the module
	App.reqres.setHandler("contact:entities", function(){
		return API.getContactEntities();  // It is good policy to require handlers to only use public API functions
	});
	App.reqres.setHandler("contact:entity", function(id){
		return API.getContactEntity(id);  // It is good policy to require handlers to only use public API functions
	});

});