var map = L.map("map").setView([22.386573, 114.144555], 17.5);
L.tileLayer(
  "https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/wgs84/{z}/{x}/{y}.png",
  {
    attribution:
      'Image ©2002 NASA/USGS|Image ©2016 NASA/USGS|Contains modified Copernicus Sentinel data [2022]|<a href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyright">&copy;Map information from Lands Department </a><img src="https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg" height=20></img>'
  }
).addTo(map);
var greenIcon = L.divIcon({
  className: "marker-pin",
  iconSize: [10, 10],
  iconAnchor: [5, 5]
});
var panoramas = [
  {
    position: [22.38663, 114.144434],
    url:
      "https://momento360.com/e/u/a39fac0af55f44c8961ccf4e82ba0f20?utm_campaign=embed&utm_source=other&heading=3&pitch=0&field-of-view=75&size=medium&display-plan=true"
  },
  {
    position: [22.386558, 114.144533],
    url:
      "https://momento360.com/e/u/3fc5d05be2724432bd13f539c4f10c18?utm_campaign=embed&utm_source=other&heading=-86.3&pitch=-16.6&field-of-view=75&size=medium&display-plan=true"
  },
  {
    position: [22.386522, 114.144699],
    url:
      "https://momento360.com/e/u/1e96217eaf2e4c38a9c25ee7a7545847?utm_campaign=embed&utm_source=other&heading=-184.66&pitch=-13.51&field-of-view=75&size=medium&display-plan=true"
  },
  {
    position: [22.38651, 114.14484],
    url:
      "https://momento360.com/e/u/576a09f1ce2442cab10f606fb67b5326?utm_campaign=embed&utm_source=other&heading=-130.76&pitch=7.93&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.386364, 114.144731],
    url:
      "https://momento360.com/e/u/1fcc35375e2041da9950890de5900e22?utm_campaign=embed&utm_source=other&heading=537.43&pitch=10.77&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38636389, 114.1447083],
    url:
      "https://momento360.com/e/u/fe0cf82c001342df99a6bcac0616056f?utm_campaign=embed&utm_source=other&heading=100.47&pitch=-10.68&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38629167, 114.1445861],
    url:
      "https://momento360.com/e/u/e57ecfa168d547e79330e43e4d56e65e?utm_campaign=embed&utm_source=other&heading=66.25&pitch=-15.43&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38629444, 114.1445944],
    url:
      "https://momento360.com/e/u/2045ea4f94144ccbbae4383cccc7716c?utm_campaign=embed&utm_source=other&heading=112.75&pitch=7.2&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38629167, 114.1445861],
    url:
      "https://momento360.com/e/u/e57ecfa168d547e79330e43e4d56e65e?utm_campaign=embed&utm_source=other&heading=121.46&pitch=3.61&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38628056, 114.1445611],
    url:
      "https://momento360.com/e/u/53f60a27424344f48dd1503f94178596?utm_campaign=embed&utm_source=other&heading=23.12&pitch=-4.53&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.386286, 114.144557],
    url:
      "https://momento360.com/e/u/08234fc5a9c3482988e4dfbcb50c26ef?utm_campaign=embed&utm_source=other&heading=46.83&pitch=-1.68&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.386271, 114.144441],
    url:
      "https://momento360.com/e/u/d7a38985df434015b6e629e5647a6826?utm_campaign=embed&utm_source=other&heading=29.04&pitch=0.15&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38621667, 114.1451111],
    url:
      "https://momento360.com/e/u/e5273570dae74ebcbefd4262919a98f0?utm_campaign=embed&utm_source=other&heading=138.47&pitch=-0.59&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38619722, 114.1450833],
    url:
      "https://momento360.com/e/u/580989aed1d74c15a195d4d2b520cc42?utm_campaign=embed&utm_source=other&heading=108.48&pitch=-4.77&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38617222, 114.1450361],
    url:
      "https://momento360.com/e/u/6913805d3ab94af2b9cd2446f6fac3d6?utm_campaign=embed&utm_source=other&heading=98.75&pitch=11.24&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38616667, 114.1449278],
    url:
      "https://momento360.com/e/u/d94d64d2ff8d467f8086ada9d03e9492?utm_campaign=embed&utm_source=other&heading=102.3&pitch=-5.26&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38624167, 114.1449],
    url:
      "https://momento360.com/e/u/700bcd3b60114df08fd0896edf34c2dc?utm_campaign=embed&utm_source=other&heading=109.31&pitch=-1.52&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38643056, 114.1451139],
    url:
      "https://momento360.com/e/u/7b52502254c24d0996f311dd8abb6017?utm_campaign=embed&utm_source=other&heading=67.76&pitch=2.41&field-of-view=100&size=medium&display-plan=true"
  },
  {
    position: [22.38636667, 114.1452944],
    url:
      "https://momento360.com/e/u/6429c1e4b9334aab8d394b7e0236ca86?utm_campaign=embed&utm_source=other&heading=53.96&pitch=-9.82&field-of-view=100&size=medium&display-plan=true"
  }
];
var markers = [];
panoramas.forEach(function (panorama, index) {
  var marker = L.marker(panorama.position, {
    icon: greenIcon
  }).addTo(map);
  var iframe =
    '<iframe src="' +
    panorama.url +
    '" frameborder="0" allowfullscreen></iframe>';
  marker.bindPopup(iframe, {
    maxWidth: "100%",
    maxHeight: "100%"
  });
  markers.push(marker);
});
var currentIndex = 0;
markers[currentIndex].openPopup();
document.getElementById("prev-btn").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + markers.length) % markers.length;
  map.panTo(markers[currentIndex].getLatLng());
  markers[currentIndex].openPopup();
});
document.getElementById("next-btn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % markers.length;
  map.panTo(markers[currentIndex].getLatLng());
  markers[currentIndex].openPopup();
});