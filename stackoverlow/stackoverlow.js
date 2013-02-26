Users = new Meteor.Collection("users");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to Stackoverlow.";
  };

   Template.new_user.events({
    'click input.add' : function () {
      var new_user_name = document.getElementById("new_user_name").value;
      Users.insert({name: new_user_name});
      Session.set("new_user_name", new_user_name);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


// Template.hello.events({
  //   'click input' : function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button");
  //   }
  // });
  