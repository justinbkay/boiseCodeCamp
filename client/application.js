Template.home.users = function () {
  if (Meteor.user()) {
    var id = Meteor.user()._id;
    return Meteor.users.find({ _id: {$ne: id } } , {sort: {"profile.name": 1}});
  } else {
    return Meteor.users.find();
  }
};

Template.profile.helpers({
  name: function() {
    Meteor.user().profile.name;
  }
});

Template.profile.events({
  'click #save': function(e) {
    var name = $('#name').val();
    var tagline = $('#tagline').val();
    Meteor.users.update(Meteor.user()._id, {$set: {"profile.name": name, "profile.tagline": tagline}});
    Router.go('home');
  }
});

