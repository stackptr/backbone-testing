App.module("Common.Views", function(Views, App, Backbone, Marionette, $, _){

	Views.Loading = Marionette.ItemView.extend({
		template: "#loading-view",

		serializeData: function(){
			return {
				title: this.options.title || "Loading Data",
				message: this.options.message || "Please wait, data is loading"
			}
		},

		onShow: function(){
			$('.spinner').spin({
				lines: 13,
				length: 20,
				width: 10,
				radius: 30,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: '#000',
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: false,
				zIndex: 2e9,
				top: '30px',
				left: 'auto'
			})
		}
	})

});