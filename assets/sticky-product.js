function position_fix_product() {
  var window_w = jQuery(window).width();
	//alert(window_w);
  
  var container_w = 0;
  //if( (767 > window_w) && ( window_w> 320)){
  //	container_w = window_w-30;
  //}
  //else if( (991 > window_w) && ( window_w > 768)){
  //	container_w = 750;
  //}
  //else if( (1200 >= window_w) && ( window_w >= 992)){
  //	container_w = 970;
  //}
  //else{
  //  container_w = 1170;
  //}
  //alert(container_w);
  if( (1400 > window_w) && ( window_w > 1200)){
	container_w = 1170;
  }
 else if( (1600 > window_w) && ( window_w > 1400 )){
  	container_w = 1366;
  }
	else if( (1920 > window_w) && ( window_w> 1600 )){
  	container_w = 1400;
  }         
  else{
    container_w = window_w-30;
  }  
  
  
  // col right 
   var col_righ = 0;
  if( (767 > window_w) && ( window_w> 320)){
    col_righ = 100; // col-xs-12  	
  }
  else if( (991 > window_w) && ( window_w > 768)){
  	col_righ = 41.66666667; // col-sm-5
  }
  else if( (1200 >= window_w) && ( window_w >= 992)){
  	col_righ = 41.66666667; // col-sm-5
  }
  else{
  	col_righ = 41.66666667; // col-md-5
  }  

 //alert(col_righ); 
  
 
  var percent_r  = 0;
  var margin = 0;
  var header_height_o = 0;
  var height_br = 0;
  var height_toget = 0;
  
  if(window_w >= 767){
   
    
    
	//percent_r = container_w*col_righ/100;
	//alert(percent_r);
  	margin = ((window_w - container_w)/2);
  	header_height_o =  jQuery("#header-content").outerHeight(); 
 	height_br =jQuery('.breadcrumb-wrap').outerHeight();//get high parent element
    height_toget = header_height_o + height_br;
    
    jQuery(".product-shop").addClass("prod_fixed");	
	jQuery(".product-shop").css("margin-top",height_toget);  
  	jQuery(".product-shop").css("margin-right",height_toget);
	jQuery(".product-shop").css("width",percent_r);   
  	jQuery(".product-shop").css("top",0);     
  }	else{
   	percent_r = 0;
    margin = 0;
    header_height_o = 0;

    
  	jQuery(".product-shop").removeClass("prod_fixed");
    jQuery(".product-shop").css("margin-top","0");  
    jQuery(".product-shop").css("margin-right","0");
    jQuery(".product-shop").css("width","100%");   
    jQuery(".product-shop").css("top","0");    
 }
  	
 
 
}

function scroll_fix_product() {
  jQuery(window).scroll(function(){
      var window_w = jQuery(window).width();
      var container_w = 0;
      if( (767 > window_w) && ( window_w> 320)){
        container_w = window_w-30;
      }
      else if( (991 > window_w) && ( window_w > 768)){
        container_w = 750;
      }
      else if( (1200 >= window_w) && ( window_w >= 992)){
        container_w = 970;
      }
      else{
        container_w = 1170;
      } 
      var margin = ((window_w - container_w)/2);


      // col right 
      var col_left = 0;
      if( (767 > window_w) && ( window_w> 320)){
        col_left = 100; // col-xs-12  	
      }
      else if( (991 > window_w) && ( window_w > 768)){
        col_left = 58.3333333; // col-sm-5
      }
     else if( (1200 >= window_w) && ( window_w >= 992)){
        col_left = 58.3333333; // col-sm-5
      }
  
      else{
        col_left = 58.3333333; // col-md-5
      } 


      if(window_w > 767){
        var percent_l = container_w*col_left/100;


        var scroll_top = jQuery(this).scrollTop(); // get scroll position top


        var header_height =  jQuery("#header-content").outerHeight(); //get high parent element
		var height_brs =jQuery('.breadcrumb-wrap').outerHeight();//get high parent element
        
        var f_height_element_parent =  jQuery(".product").outerHeight(); //get high parent element
        var height_element = jQuery(".product-shop").height(); //get high of elemeneto
        var height_element_parent = (f_height_element_parent - header_height + height_brs);


        var position_fixed_max = height_element_parent - height_element; // get the maximum position of the elemen
        var position_fixed = scroll_top < 0 ? 0 - scroll_top : position_fixed_max > scroll_top ? 0 : position_fixed_max - scroll_top ;
        jQuery(".product-shop").css("top",position_fixed);
		
        // Product Scroll Top
        var scroll_div_w = jQuery(".contain-anchor-pdp").find("a").outerWidth();
        if (scroll_top > header_height) {
          	  jQuery(".product-shop").css("margin-top","0");  
              if (scroll_top > (position_fixed_max+(height_element/2))){
                jQuery(".contain-anchor-pdp").find("a").css("opacity","0");
                jQuery(".contain-anchor-pdp").find("a").css("left",(percent_l + margin - scroll_div_w - 15 ));   // margin right 15px
             }
             else{
              jQuery(".contain-anchor-pdp").find("a").css("opacity","1");
              jQuery(".contain-anchor-pdp").find("a").css("left",(percent_l + margin - scroll_div_w - 15 )); 
            }      
        }else{
              jQuery(".product-shop").css("margin-top",(jQuery("#header-content").outerHeight()));  
          
              jQuery(".contain-anchor-pdp").find("a").css("opacity","0");
              jQuery(".contain-anchor-pdp").find("a").css("left",(percent_l + margin - scroll_div_w - 15 ));
        }
      } else{
      	jQuery(".product-shop").css("top",0);
      }// end window 767

  });	
}





jQuery(document).ready(function() {

  	position_fix_product();
	scroll_fix_product();  
  
  
});
$(window).resize(function() {

 	position_fix_product();
	scroll_fix_product();  
 
  
});




function scroll_Bottom() { 
  var doc_h = jQuery(document).outerHeight();
  jQuery('body,html').animate({
   scrollTop: doc_h
  }, 5000);
  return false;
    
};
function scroll_Top() { 
  jQuery('body,html').animate({
   scrollTop: 0
  }, 5000);
  return false; 
};



jQuery('#anchor-pdp').click(function () {
  jQuery('body,html').animate({
   scrollTop: 0
  }, 1000);
  return false; 
});

