// start ready for anythingSlider, home page slider
$(document).ready(function() {
	$('#slider3').anythingSlider({
		buildArrows : true,
		autoPlay : true,
		autoplayLocked: true,
		buildNavigation :true,
		buildStartStop: true,
		delay: 6000,
		resumeDelay : 5000,
		animationTime: 300,
		delayBeforeAnimate:0,
		
	});

});
$(function(){
 $('#slider3')
  .anythingSlider()
  /* this "custom" code is the equivalent of the base caption functions */
  .anythingSliderFx({
   inFx: {
    '.caption-top'    : { top: 0, opacity: 0.8, duration: 400 },
    '.caption-right'  : { right: 0, opacity: 0.8, duration: 400 },
    '.caption-bottom' : { bottom: 0, opacity: 0.8, duration: 400 },
    '.caption-left'   : { left: 0, opacity: 0.8, duration: 400 }
   },
   outFx: {
    '.caption-top'    : { top: -50, opacity: 0, duration: 350 },
    '.caption-right'  : { right: -150, opacity: 0, duration: 350 },
    '.caption-bottom' : { bottom: -50, opacity: 0, duration: 350 },
    '.caption-left'   : { left: -150, opacity: 0, duration: 350 }
   }
  })
  /* add a close button (x) to the caption */
  .find('div[class*=caption]')
    .css({ position: 'absolute' })
    .prepend('<span class="close">x</span>')
    .find('.close').click(function(){
     var cap = $(this).parent(),
       ani = { bottom : -50 }; // bottom
      if (cap.is('.caption-top')) { ani = { top: -50 }; }
      if (cap.is('.caption-left')) { ani = { left: -150 }; }
      if (cap.is('.caption-right')) { ani = { right: -150 }; }
      cap.animate(ani, 400, function(){ cap.hide(); } );
    });
});



//start for slide up and down for .limeGreen (bjottom section)
 $(function() {
// run the currently selected effect
function runEffect() {
// get effect type from
var selectedEffect = $( "#effectTypes" ).val();
// most effect types need no options passed by default
var options = {};
// some effects have required parameters
if ( selectedEffect === "scale" ) {
options = { percent: 0};
} else if ( selectedEffect === "size" ) {
options = { to: { width: 0, height: 6000} };
}

// run the effect
$( ".limeGreen" ).toggle( selectedEffect, options, 2000 );
};
// set effect from select menu value
$( "#button, #buttonAbout, #buttonServices, #buttonMission, #buttonTest, #buttonService, #buttonLand, #buttonDesign, #buttonHard, #buttonFire, #buttonNews, #buttonRecent, #buttonGallery").click(function() {
runEffect();
});
});
//end slide up and down





//main vertical navigation 
var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open()
{  jsddm_canceltimer();
   jsddm_close();
   ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

function jsddm_close()
{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{  closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
      closetimer = null;}}



$(document).ready(function()
{  $('.main_nav>li').bind('mouseover', jsddm_open)
   $('.main_nav>li').bind('mouseout',  jsddm_timer)});

document.onclick = jsddm_close;
//end main navigation

//Changes button text
function change(ref) {
    ref.value="Thank You For Considering Shadow Landscaping!";
}
//End of Changing button text

//fancybox for gallery

 $(".fancybox").fancybox({
    beforeLoad: function () {
        var el, id = $(this.element).data('title-id');

        if (id) {
            el = $('#' + id);

            if (el.length) {
                this.title = el.html();
            }
        }
    }
});

(function ($, F) {
    F.transitions.resizeIn = function () {
        var previous = F.previous,
            current = F.current,
            startPos = previous.wrap.stop(true).position(),
            endPos = $.extend({
                opacity: 1
            }, current.pos);

        startPos.width = previous.wrap.width();
        startPos.height = previous.wrap.height();

        previous.wrap.stop(true).trigger('onReset').remove();

        delete endPos.position;

        current.inner.hide();

        current.wrap.css(startPos).animate(endPos, {
            duration: current.nextSpeed,
            easing: current.nextEasing,
            step: F.transitions.step,
            complete: function () {
                F._afterZoomIn();

                current.inner.fadeIn("fast");
            }
        });
    };

}(jQuery, jQuery.fancybox));

$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
    nextMethod: 'resizeIn',
    nextSpeed: 250,

    prevMethod: false,

    helpers: {
        title: {
            type: 'inside'
        }
    }
});

//End Anything Slider
//Form Valid

 $(document).ready(function(){
     
    $('#contact-form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
    email: {
    required: true,
    email: true
    },
    subject: {
    minlength: 2,
    required: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    }
    });
    }); // end document.ready
//end form validation




//Google maps





function initialize() {
  var myLatlng = new google.maps.LatLng(42.285607,-88.244376);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
	scaleControl : true,
    scaleControl : true,
    maptype : 'ROADMAP'
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Shadow Landscaping, Inc'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);





	
//End Google Maps
		



 
