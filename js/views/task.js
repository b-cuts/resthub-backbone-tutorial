define(['backbone', 'hbs!templates/task'], function(Backbone, taskTemplate) {

  var TaskView = Backbone.View.extend({
    root: '.task-list',
    strategy: 'append',
    template: taskTemplate,
    className: 'task',
    events: {
      click: 'toggleDetails'
    },
    initialize: function() {
      this.model.on('change', this.render, this);
    },
    render: function() {
      this.$el.fadeOut(function() {
        TaskView.__super__.render.apply(this);
        this.$el.fadeIn();
      }.bind(this));
      return this;
    },
    toggleDetails: function() {
      this.$('p').slideToggle();
    }
  });

  return TaskView;
});
