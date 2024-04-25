function initMap() {
  // Sets location of initial map load
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.6532, lng: -79.3832 }, // Toronto
    zoom: 13,
  });

  // Marker Data Array
  const markersData = [
    {
      location: { lat: 43.67131, lng: -79.34668 },
      icon: "https://img.icons8.com/nolan/marker.png",
      content: `<h2>Riverdale Perk Cafe</h2><h4>Hi!</h4><p>5 stars</p>`,
    },
    {
      location: { lat: 43.66127, lng: -79.33866 },
      icon: "https://img.icons8.com/nolan/marker.png",
      content: `<h2>Leslie's Sandwich Room</h2><h4>Welcome!</h4><p>5 stars</p>`,
    },
    {
      location: { lat: 43.66459, lng: -79.32523 },
      icon: "https://img.icons8.com/nolan/marker.png",
      content: `<h2>Lambo's Deli</h2><h4>Greetings!</h4><p>5 stars</p>`,
    },
  ];

  // Loop through Marker array and add each marker to map
  markersData.forEach(addMarker);

  function addMarker({ location, icon, content }) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon,
    });

    const infoWindow = new google.maps.InfoWindow({ content: content });

    marker.addListener("mouseover", () => infoWindow.open(map, marker));
    marker.addListener("mouseout", () => infoWindow.close());
  }
}
