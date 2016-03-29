//New mongo collection
Recipes = new Meteor.Collection('recipes');

//allow signed-in users to insert
Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});

//Create new schema for recipes
RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

//Attach the schema
Recipes.attachSchema( RecipeSchema );