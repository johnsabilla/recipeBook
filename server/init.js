  Meteor.startup(function () {
    // code to run on server at startup
    console.log(Meteor.settings.public.ga.account);
  });