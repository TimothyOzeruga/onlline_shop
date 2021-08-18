<template>
  <div id="mapContainer">
    <!-- <img
      src="../assets/images/map.png"
      alt="map_screen"
      class="lazy"
      id="map_pic"
    />
    <a href="javascript:void(0)" id="map_link">Click for Interact Map</a> -->
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import Marker from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: Marker,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
  name: "MapComponent",
  data() {
    return {
      centerCoordinates: [51.505, -0.09],
      map: null,
      tileLayer: null,
      marker: null,
    };
  },

  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("mapContainer").setView(this.centerCoordinates, 14);
      this.tileLayer = L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 30,
          id: "mapbox/satellite-v9",
          accessToken:
            "pk.eyJ1IjoidGltYW96OTAwIiwiYSI6ImNrcjBqYjludzFzZnAyd282cWhydDZteDAifQ.4A_M9m369cOAEYSCc0qi5w",
        }
      );
      this.marker = L.marker([51.505, -0.09]).addTo(this.map);
      this.tileLayer.addTo(this.map);

      let southWest = L.latLng(51.505, -0.09),
        northEast = L.latLng(51.505, -0.09);
      let bounds = L.latLngBounds(southWest, northEast);

      this.map.scrollWheelZoom.disable();
      this.map.setMaxBounds(bounds);
      this.map.on("drag", function () {
        this.map.panInsideBounds(bounds, { animate: false });
      });
      this.map.on("click", function () {
        if (this.map.scrollWheelZoom.disable()) {
          this.map.scrollWheelZoom.enable();
        }
      });
    },
  },
};
</script>

<style lang='scss'>
#mapContainer {
  cursor: default;
  width: 48%;
  height: 320px;
  border: 1px solid #999;

  position: relative;
  z-index: 8;
}
</style>