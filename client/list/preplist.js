var ListItem = new Meteor.Collection("list_item");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.add_todo.events({
    'click #add_item': function () {
      var item = $('#input').val();
      ListItem.insert({
        list_item: item
      });
      var list = ListItem.find();
console.log(item);
      console.log(list);
      
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
