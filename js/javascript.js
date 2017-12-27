$(document).ready(function(){
  
  $("#navHome").click(function(){
    $("li").removeClass("active");
		$("#navHome").addClass("active");
  })
  
  $("#navContact").click(function(){
    $("li").removeClass("active");
		$("#navContact").addClass("active");
  })
	
	$("#navPortfolio").click(function(){
    $("li").removeClass("active");
		$("#navPortfolio").addClass("active");
  })
	
	$("#navAbout").click(function(){
    $("li").removeClass("active");
		$("#navAbout").addClass("active");
  })
})