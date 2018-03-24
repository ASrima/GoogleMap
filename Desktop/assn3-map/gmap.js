// Variable that is going to hold the map
var map;
var marker;

// Maps variables
var london = "#london", india = "#india",
sylhet = "#sylhet", chittagong = "#chitt", boston = "#boston", des=$("#desc");

var desc = ["I have visited this place in 2013 it was the best experience of my life. The best place I have ever been.", 
" Loved the weather of shilong though I didn't like the food but it was an enjoyable trip.", 
            "Sylhet is the place I was born and spend the most precious time of my life. Love this place a lot.", "loved the natural beauty", 
            "Nice place. Loved the Harverd campus", "Loved bostons weather."];
var placeImg = $("#placeImg");
// Keeps image invisible
placeImg.hide();

  // Initialization of map
  function initMap() {

    // Creates the map object
    map = new google.maps.Map(document.getElementById('map'), {
    // Sets location for the map to be centered on based on lat and lng
    center: {lat: 51.528308, lng: -0.3817765},
    // Sets the zoom of the map, the greater the value the closer it gets
    zoom: 10
  });

  // Initializes object to put marker
    marker = new google.maps.Marker({
    // Sets location for the market to be centered
    position: {lat: 51.528308, lng: -0.3817765},
    // Sets the object map to the map you created
    map: map,
    // Title for the marker t display after hover
    title: 'Found it'
  });

    marker.addListener('click', function() {
      placeImg.fadeIn();
    });

  }

  // Maps positions
  mapData(london, 51.528308, -0.3817812, desc[0], "london.jpg");
  mapData(india, 25.5900646, 91.7526835, desc[1], "india.jpg");
  mapData(sylhet, 24.8996985, 91.7221499, desc[2], "sylhet.jpg");
  mapData(chittagong, 21.4508401, 91.8631476, desc[3], "chitt.jpg");
  mapData(boston, 42.313034,-71.3366911, desc[5], "boston.jpg");

  function mapData(btn, mlat, mlng, desc, img) {
    $(btn).click(function(){
      map.setCenter({lat: mlat, lng: mlng});
      marker.setPosition({lat: mlat, lng: mlng});
      map.setZoom(8);
      des.text(desc);
      placeImg.attr({
        src: "img/" + img
      })
      placeImg.hide();
    })
  }