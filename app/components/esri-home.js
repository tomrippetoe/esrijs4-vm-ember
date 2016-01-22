import Ember from 'ember';
import HomeVM from 'esri/widgets/Home/HomeViewModel';

export default Ember.Component.extend({

  classNames: ['home', 'action'],

  vm: null,

  createHome: Ember.observer('mapView', function() {
    let mapView = this.get('mapView');
    let vm = new HomeVM({ view: mapView });
    this.set('vm', vm);
  }),

  actions: {
    enable() {
      this.get('vm').goHome();
    }
  }

});
