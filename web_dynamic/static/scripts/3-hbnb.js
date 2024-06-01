$(function () {
  let amenitiesIds = [];
  let amenitiesNames = [];

  $.get('http://0.0.0.0:5001/api/v1/status/', showApiStatus);
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: showPlaces
  });

  $('.amenities input').on('click', function () {
    const dataId = $(this).attr('data-id');
    const dataName = $(this).attr('data-name');
    if (amenitiesNames.includes(dataName)) {
      amenitiesNames = amenitiesNames.filter((name) => name !== dataName);
      amenitiesIds = amenitiesIds.filter((id) => id !== dataId);
    } else {
      amenitiesNames.push(dataName);
      amenitiesIds.push(dataId);
    }

    $('div.amenities h4').text(`${amenitiesNames.join(', ')}`);
  });
});
function showApiStatus (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
}
function showPlaces (places) {
  places.forEach((place) => {
    const article = $('<article>');
    article.append(`
        <div class='title_box'>
        <h2>${place.name}</h2>
        <div class='price_by_night'>$${place.price_by_night}</div>
        </div>
        <div class='information'>
        <div class='max_guest'>${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
        <div class='number_rooms'>${place.number_rooms} Room${place.number_rooms !== 1 ? 's' : ''}</div>
        <div class='number_bathrooms'>${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
        </div>
        <div class='description'>${place.description}</div>
    `);
    $('section.places').append(article);
  });
}
