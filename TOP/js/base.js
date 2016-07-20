
$(document).ready(function(){
   /*切换*/
   $(".top_nav .state li a").click(function(){
		$(this).parent("li").siblings("li").children("a").removeClass("current");
		$(this).addClass('current');
	   });
	
	
  /*导航*/
    $(".m-nav .li1").mouseover(function() {
        $(this).children('a').addClass('on');
		$(this).children('.hide_shadow').show();
        $(this).children('.subnav').show();
    }).mouseout(function() {
        $(this).children('a').removeClass('on');
		$(this).children('.hide_shadow').hide();
        $(this).children('.subnav').hide();
    });
});
