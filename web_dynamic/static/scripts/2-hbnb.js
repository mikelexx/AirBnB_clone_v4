$(function () {
  let amenitiesIds = [];
  let amenitiesNames = [];

  $.get('http://0.0.0.0:5001/api/v1/status/', showApiStatus);

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
