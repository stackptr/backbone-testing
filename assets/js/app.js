// Instantinate application
var App = new Marionette.Application();

// Define regions
App.addRegions({
	contacts: ".contact-region"
});

// When app is initialized, create the data and place it in the region
App.on("initialize:after", function(){
    App.ContactsApp.List.Controller.listContacts();
});
