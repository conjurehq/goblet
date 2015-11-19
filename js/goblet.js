/*
 * Goblet v0.0.1 (http://goblet.io)
 * Copyright 2015 Matthew Weber
 * Licensed under MIT (https://opensource.org/licenses/MIT)
*/

var g = {};


    function drawChart() {

        var chartIsDrawnHandler = function (){
            var aaa = footest;
            console.log("chart is drawn!" , chart);
            debugger;

            $(".stat-donut").find("svg").width()

        };

        $(".donut-bite-chart").each(function(){

            // get the data from the piechart


            var daWidth = $(this).width();
            var daPercentile = parseInt( $(this).find(".percentile").html().match(/\d+/) ); // note the .match bit will return the first integer if it is a mixed string like "35%"

             /* define your piecharts here! */
            var data = google.visualization.arrayToDataTable([
              ['Finding', 'Hours per Day'],
              ['Work',     11],
              ['Eat',      20]
            ]);

            var options = {
                pieHole: 0.4,
                enableInteractivity: false,
                backgroundColor: "#ccc",
                chartArea:{left:0,top:0,width:'100%',height:'100%', backgroundColor: "#ccc"},
                legend: {position: "none"},

            };

             var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            var footest = "abc";
            google.visualization.events.addListener(chart, 'ready', chartIsDrawnHandler);

            chart.draw(data, options);

        });

        
     

  
        
}





$( document ).ready(function() {


  // Gallery helper - dynamically adds thumbnail content to the modal dialog box

  g.zoomThis = function(thumbObj){
	console.log("in zoomthis " + $(document).width() );
  	if ($(document).width() < 768) // don't zoom on mobile devices
  		return;
  		
  	console.log("hmm");
    // get image src content, put in modal body
    $(".modal-body").html("");
    $(thumbObj).closest(".zoomable-thumbnail-wrapper").children("img").addClass("lightboxImage").clone().appendTo(".modal-body");
                
    // get image alt content, put in modal title
    var imageAltContent = $(thumbObj).closest(".zoomable-thumbnail-wrapper").children("img").attr("alt");           
    $(".modal-title").html(imageAltContent);
    
    // set max-height of dialog
    var daMaxImageHeight =  $(window).height() - $(".modal-header").height() - 200;
    $(".lightboxImage").css("max-height", daMaxImageHeight);

	// reset width of dialog
	var daImageRatio = $(".lightboxImage").width() / $(".lightboxImage").height();
	$(".modal-dialog").css("max-width",  daMaxImageHeight * daImageRatio);
                
    // trigger the modal dialog
    $('#myModal').modal({
      keyboard: false
    })
  }


  // make all gallery images zoomable (unless we are looking at it on a mobile device)

  $(".zoomable-thumbnail").each(function(){
	var zoomWrapper = $(this).wrap("<div class='zoomable-thumbnail-wrapper'></div>").parent();  // wrap the image in a div wrapper
	var zoomIcon = $("<span>").addClass("glyphicon glyphicon-search");
	$("<div>").addClass("glyphicon-search-container").append(zoomIcon).appendTo(zoomWrapper);
	$(zoomWrapper).click(function(){ g.zoomThis(zoomWrapper);});
  });


  // scroll to view
  $("#scrolldown, .zhero").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 300);
  });
  

  
  // Put sections in dropdown
  var daTOC = "";
  var daLinks = $("h1, h2").each(
  	function(){
  	
  		// Don't add this element if it has class "no-chapter". This allows people to exclude a heading from the TOC
		if ( ! $(this).hasClass("no-chapter")){

			// add an id to each h1 and h2 if they don't already have one
			if ($(this).attr("id") == undefined ){
				var daId = "id" + Math.round(Math.random() * 9999999999999999);
				$(this).attr("id",  daId);
			}	
			else {
				var daId = $(this).attr("id");
			}
			
			// create html
			 daTOC += "<li><a href='#" + daId + "'>" + $(this).text() + "</a></li>";
		}
  	}
  );
  // add daTOC to html
  console.log(daTOC);
  $("#sections").html(daTOC);
  
  
    $("#sections li a").click(function() {
		$('html, body').animate({ 	scrollTop: $(   $(this).attr("href")  ).offset().top - 80}, 500);
		$(".navbar-collapse").removeClass("in");
		console.log("removeit");
	});

  
  
});




