// Note the shared module name: we can use the same sub-module for controllers and views while
//   using separate files

App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _){
	List.Controller = {
		listContacts: function() {

			// Initialize the Collection through a request, handled in the Entities module
    		var contacts = App.request("contact:entities")

    		// In the contacts region, instantiate a collection view of contacts
    		var contactsListView = new List.Contacts({
				collection: contacts
			});

			contactsListView.on("itemview:contact:show", function(childView, model){
				App.trigger("contact:show", model.get('id'));
			});

			contactsListView.on("itemview:contact:delete", function(childView, model){
				model.destroy();
			});

    		App.contacts.show(contactsListView);
		}
	}

});