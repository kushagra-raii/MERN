console.log("hello jee");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else{
    alert("abc");
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  }