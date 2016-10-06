$.ajax({
   type: 'GET',
   url: '../data/sampleDataV7noTextHelp.json',
   dataType: 'json',
   success: function( data ) {
      
      $(document).ready( function() {
      // Gallery items build
      var thumbnailSource = $('#galleryTemplate').html();
      var thumbnailTemplate = Handlebars.compile(thumbnailSource);
      var thumbnailHTML = thumbnailTemplate(data);
      $('#gallery-body').prepend(thumbnailHTML);
      })

   }
})