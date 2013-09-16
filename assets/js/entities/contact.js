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
		return contacts.models;
	};

	// Define a list of functions that will be publically accessible
	var API = {	// Note API itself is still private!
		getContactEntities: function(){
			var contacts = new Entities.ContactCollection();
			var defer = $.Deferred();
			contacts.fetch({
				success: function(data){
					defer.resolve(data);
				}
			});
			var promise = defer.promise();
			$.when(promise).done(function(contacts){
				if (contacts.length === 0){
					var models = initializeContacts();
					contacts.reset(models);
				}
			});
			return promise;
		},

		getContactEntity: function(contactId){
			var contact = new Entities.Contact({id: contactId});
			var defer = $.Deferred();
			setTimeout(function(){
				contact.fetch({
					success: function(data){
						defer.resolve(data);
					},
					error: function(data){
						defer.resolve(undefined);
					}
				});
			}, 2000);
			return defer.promise();
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