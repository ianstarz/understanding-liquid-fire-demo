window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Passing the dependentKeys after the callback function in Ember.observer is deprecated. Ensure the callback function is the last argument." }
  ]
};
