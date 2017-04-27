$( document ).ready(function() {
	$("a").click(function(event){
        event.preventDefault();
    });
 
$(".readmore").click(showText);
	function showText(){
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
}

$(".readless").click(concealText);
	function concealText(){
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show();
	 }

$(".learnmore").click(showLearnMoreText);
	function showLearnMoreText(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	}

});