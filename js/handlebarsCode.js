$.ajax({
   type: 'GET',
   url: '../data/sampleData.json',
   dataType: 'json',
   success: function( data ) {
      

      // Gallery items build
      var thumbnailSource = $('#galleryTemplate').html();
      var thumbnailTemplate = Handlebars.compile(thumbnailSource);
      var thumbnailHTML = thumbnailTemplate(data);
      $('#gallery-opp-proj').append(thumbnailHTML);
      console.log(data);

   }
})