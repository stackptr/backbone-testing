App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Controller = {
		showContact: function(id){
			var loadingView = new App.Common.Views.Loading({
				title: "Test",
				message: "Test"
			});
			App.contacts.show(loadingView);

			var fetchingContact = App.request("contact:entity", id);

			$.when(fetchingContact).done(function(contact){
				var contactView;

				if (contact !== undefined){
					contactView = new Show.Contact({
						model: contact
					});
				} else {
					contactView = new Show.MissingContact();
				}
				
				App.contacts.show(contactView);
			});
		}
	}
});