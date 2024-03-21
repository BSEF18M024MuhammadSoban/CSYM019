function initMap() {
    const uonLocation = { lat: 52.230517350453376, lng: -0.8870532745856453 };

    const uonMap = new google.maps.Map(document.getElementById("uonMap"), {
      zoom: 4,
      center: uonLocation,
    });
    const marker = new google.maps.Marker({
      position: uonLocation,
      map: uonMap,
    });
  }
