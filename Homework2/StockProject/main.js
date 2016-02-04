'use strict';
'use script'
$(document).ready(function(){

  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

$('#submitButton').on('click', function(){

var input = $('#stockName').val();

  $.ajax({
    async: true,
    crossDomain: true,
    url: 'https://stockvider.p.mashape.com/indicator/DATA/'+input+'/?end_date=2015-07-20&start_date=2015-05-20',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {
      $('.content-placeholder').html(theTemplate(data));
      console.log(data);
    },
    error: function (err) {
      console.log(err);
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8');
    }
  });
});

	// $(#submitButton).on('click', function(){
		//var input = $(#stockName).val();
		// $.ajax({
		//    url: "http://www.google.com/finance/info?q=BOM:524091",
		//    crossDomain: true,
		//    success: function(data){
		// 		// Define our data object
		// 		  // var context={
		// 		  //   "city": "London",
		// 		  //   "street": "Baker Street",
		// 		  //   "number": "221B"
		// 		  // };

		// 		  // Pass our data to the template
		// 		  var theCompiledHtml = theTemplate(data);

		// 		  // Add the compiled html to the page
		// 		  $('.content-placeholder').html(data);
		//    },
		// });
	// });
});


