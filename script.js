require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
  var map = new Map({
    basemap: "satellite"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.71511, 34.09042], // longitude, latitude
    zoom: 11
  });
  view.ui.remove("attribution");
  document.querySelector(".btn-min").addEventListener("click", function() {
    document
      .querySelector(".section-view__t-content")
      .classList.toggle("section-view__t-content--toggle");
    //   console.log("hey");
    document
      .querySelector(".section-view__map")
      .classList.toggle("section-view__map--toggle");
  });

  // function openSide() {
  //   document.getElementById("mySidepanel").style.width = "35rem";
  // }

  // function closeSide() {
  //   document.getElementById("mySidepanel").style.width = "0";
  // }
});
