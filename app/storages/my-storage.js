import StorageObject from 'ember-local-storage/local/object';
import Ember from 'ember';

const Storage = StorageObject.extend({
  thing1: Ember.inject.service('my-service'),

  serviceProp: Ember.computed(function() {
    return this.get('thing1.myProp');
  }),
});

export default Storage;
