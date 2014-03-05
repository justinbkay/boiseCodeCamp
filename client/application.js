Template.content.users = function () {
  if (Meteor.user()) {
    var id = Meteor.user()._id;
    return Meteor.users.find({ _id: {$ne: id } } , {sort: {"profile.name": 1}});
  } else {
    return Meteor.users.find();
  }
};
