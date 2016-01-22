import Ember from 'ember';
import LocateVM from 'esri/widgets/Locate/LocateViewModel';

export default Ember.Component.extend({

  classNames: ['locate', 'action'],

  createLocate: Ember.observer('mapView', function() {
    let mapView = this.get('mapView');
    let gl = mapView.map.getLayer('graphics');
    let vm = new LocateVM({ view:mapView, graphicsLayer:gl });
    //vm.initialize();
    this.set('vm', vm);
  }),

  actions: {
    enable() {
      this.get('vm').locate();
    }
  }

});
