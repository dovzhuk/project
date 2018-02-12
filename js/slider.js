$(() => {

  const slider = $('.slider').bxSlider({
    pager: false,
    onSliderLoad: () => {
      console.log('slider is loaded!');
    }
  });

  $('#button').on('click', e => {
    slider.goToSlide(2);
  })

});