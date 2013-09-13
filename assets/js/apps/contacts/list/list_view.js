// List is a submodule of ContactsApp even if ContactsApp doesn't exist (it will be created automatically)
App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _){
	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		className: "contact",
		template: "#contact-item",

		events: {
			"click": function(){
				this.$el.toggleClass('warning');
			},

			"click td a.js-show": function(e){
				e.preventDefault();	// Stop event from following link
				e.stopPropagation();
				this.trigger("contact:show", this.model);
			},

			"click button.js-delete": function(e){
				e.stopPropagation();
				this.trigger("contact:delete", this.model);
			}
		},

		remove: function(){
			this.$el.fadeOut(function(){
				$(this).remove();
			});
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#contact-list",
		itemView: List.Contact,
		itemViewContainer: "tbody"
	});
});