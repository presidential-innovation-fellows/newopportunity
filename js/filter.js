// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});



var filterFns = {
 
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});




/*Fall 2016 stuff*/

/*var $grid-fall2016 = $('.grid').isotope({
  itemSelector: '.element-item-fall2016',
  layoutMode: 'fitRows'
});

$('.filters-button-group-fall2016').on( 'click', 'button-fall2016', function() {
  var filterValuefall2016 = $( this ).attr('data-filter-fall2016');
  // use filterFn if matches value
  filterValuefall2016 = filterFns[ filterValuefall2016 ] || filterValuefall2016;
  $grid-fall2016.isotope({ filter: filterValuefall2016 });
});
// change is-checked class on buttons
$('.button-group-fall2016').each( function( i, buttonGroup ) {
  var $buttonGroupfall2016 = $( buttonGroupfall2016 );
  $buttonGroupfall2016.on( 'click', 'button-fall2016', function() {
    $buttonGroupfall2016.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$('.button-group-fall2016').each( function( i, buttonGroup ) {
  var $buttonGroupfall2016 = $( buttonGroupfall2016 );
  $buttonGroupfall2016.on( 'click', 'button-fall2016', function() {
    $buttonGroupfall2016.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});*/