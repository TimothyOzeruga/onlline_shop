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
      this.map = L.map("mapContainer").setView(this.centerCoordinates, 13);
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

      this.map.setMaxBounds(bounds);
      this.map.on("drag", function () {
        this.map.panInsideBounds(bounds, { animate: false });
      });
    },
  },
};
</script>

<style lang='scss'>
#mapContainer {
  cursor: default;
  width: 100%;
  height: 500px;
  border: 1px solid #999;
  margin-top: 50px;
  position: relative;
  z-index: 8;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //   }
}
// #map_link {
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: #fff;
//   text-align: center;
//   line-height: 500px;
//   font-size: 24px;
//   text-decoration: none;
//   opacity: 0;
//   transition: all 0.2s ease;
//   &:hover {
//     opacity: 1;
//   }
// }
</style>