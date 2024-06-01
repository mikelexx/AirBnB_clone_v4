$(function () {
  let amenitiesIds = [];
  let amenitiesNames = [];

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
