document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  var elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 10000,
  });

  const ac = document.querySelector(".autocomplete");
  M.Autocomplete.init(ac, {
    data: {
      عربستان: null,
      مکزیک: null,
      هاوایی: null,
      فلوریدا: null,
      کالیفورنیا: null,
      چابهار: null,
      جاماییکا: null,
      اروپا: null,
    },
  });

  var Select_elem = document.querySelectorAll('select');
  M.FormSelect.init(Select_elem, {});

  var tooltip_elem = document.querySelectorAll('.tooltipped');
   M.Tooltip.init(tooltip_elem, {});

  var ss = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(ss, {});

  var coache_elems = document.querySelectorAll('.carousel');
  M.Carousel.init(coache_elems, {
    numVisible:10,
    padding:20,
  });

});
