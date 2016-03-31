/**
 * need to wrap redirects to only be in the client because
 * login hook is part of the meteor core code but logout is
 * only available through package. Made both redirects client
 * side for consistency.
 */
if(Meteor.isClient) {
	/**
	 * If user logs in successfully, redirect to recipe-book
	 */
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	/**
	 * If user logs out, redirect to home
	 */
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

/**
 * If not user is logged in redirect to home route
 */
FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

/**
 * Default home page route
 */
FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

/**
 * Recipe book route
 */
FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'} );
	}
});

/**
 * Recipe details route
 */
FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'} );
	}
});

/**
 * Menu route
 */
FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

/**
 * Shopping-list route
 */
FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});







