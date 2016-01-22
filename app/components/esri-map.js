import Ember from 'ember';
import MapView from 'esri/views/MapView';

export default Ember.Component.extend({

  classNames: ['viewDiv'],

  mapService: Ember.inject.service('map'),

  didInsertElement() {
    let map = this.get('map');
    if (!map) {
      map = this.get('mapService').loadMap();
      this.set('map', map);
    }
  },

  createMap: Ember.observer('map', function() {
    let theMap = this.get('map');
    let mapView = new MapView({
      map: theMap,
      container: this.elementId,
      center: [-100.33, 25.69],
      zoom: 10
    });
    mapView.then(x => this.set('mapView', x));
  })

});
