/*global kakao*/

import React, { useEffect } from "react";
const lat = 35.70538004340545;
const lon = 128.45527692168685;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    const kakao = (window as any).kakao;
    if (kakao) {
      let option = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };
      let map = new kakao.maps.Map(container, option);

      var markerPosition = new kakao.maps.LatLng(lat, lon);

      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [lat, lon]);

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
        id="map"
        className="map"
      ></div>
    </>
  );
};

export default Map;
