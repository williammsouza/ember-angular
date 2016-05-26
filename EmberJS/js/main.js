var App = Ember.Application.create({
  LOG_TRANSACTION: true
});

App.Router.map(function(){
  this.resource('users', function(){
    this.route('new')
  })
  this.resource('user', { path: '/users/:user_id' });
});

App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});

App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name']
});

App.UsersNewController = Ember.Controller.extend({
  name: "",
  last_name: "",
  actions: {
    createUser: function(model){
      var new_user = this.store.createRecord('user', {
        name: this.get('name'),
        last_name: this.get('last_name'),
        dob: (new Date()),
        isAlive: true
      });
      var controller = this;
      new_user.save().then(function(new_user){
        controller.set('name', '');
        controller.set('last_name', '');
        controller.model.addObject(new_user);
      })
    }
  }
})

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.User = DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr(),
  dob: DS.attr('date'),
  isAlive: DS.attr('boolean'),
  classAlive: function(){
    return this.get('isAlive') ? 'red' : ''
  }.property('isAlive')
});

App.User.FIXTURES = [
  {
    id: 1,
    name: "Richard",
    last_name: "Barr",
    dob: (new Date()),
    isAlive: true
  },{
    id: 2,
    name: "Alex",
    last_name: "Cabr",
    dob: (new Date()),
    isAlive: true
  },{
    id: 3,
    name: "Jairo",
    last_name: "Vax",
    dob: (new Date()),
    isAlive: true
  },{
    id: 4,
    name: "Stranger guy",
    last_name: "Dead",
    dob: (new Date()),
    isAlive: false
  }
]