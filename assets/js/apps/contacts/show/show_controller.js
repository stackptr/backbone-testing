App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Controller = {
		showContact: function(id){
			var contacts = App.request("contact:entities");
			var model = contacts.get(id);
			var contactView;

			if (model !== undefined){
				contactView = new Show.Contact({
					model: model
				});
			} else {
				contactView = new Show.MissingContact();
			}
			
			App.contacts.show(contactView);
		}
	}
});