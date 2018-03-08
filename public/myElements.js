//callback for button copy contact info to clipboard
function copyTextToClipBoard() {
    var succeed = false;
    try {
        var copyText = document.getElementById("mailAddrHolder");
		copyText.select();
			console.log(copyText);
        document.execCommand("Copy");
        succeed = true;
    } catch(e) {
        succeed = false;
        console.log("unable to copy email adress to clipboard for the following debug reason: " + e);
    }
    if(succeed) {
        console.log("email copied to clipboard with success: \"" + copyText.value + "\"");
    }
}

//synchronize menu item highlighting with active section
//todo: make this work: it seems like the this.scrolltop or this.offset.top are not properly set
/*$(document).ready(function(){
  var $sections = $('.mainSections');
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection = $(this);
    $sections.each(function(){
      var divPosition = $(this).offset().top;
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);
      var id = $currentSection.attr('id');
//   	 $('a').removeClass('sectionActive');
        //$('[href=#' + id + ']').addClass('sectionActive');
			//or add attribute pseudo selector 'active'?
//        $('#id_' + id).addClass('sectionActive');
			console.log("currentSection id = " + id);
      }
    })
  });
});
*/

//another one, does not seem to work all the time
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
  var $sections = $('.mainSections');
    $sections.each(function(){
    //$('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
		var refElementPos = refElement.position();
	if(typeof refElementPos !== 'undefined' &&
		typeof refElementPos.top !== 'undefined' &&
		refElement.position().top <= scrollPos &&
		refElement.position().top + refElement.height() > scrollPos) {
            //$('#menu-center ul li a').removeClass("active");
		//$('#navbarCollapse li').removeClass('active');
    		window.location.hash = "";//#" + hash;
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/*form method called before validation sent to server*/
function cvalidateForm(){
   let vname = document.forms["contactForm"]["mailerName"].value,
   	vmail = document.forms["contactForm"]["mailerMail"].value,
   	vmesg = document.forms["contactForm"]["mailerMessage"].value;
   if (!validator.isEmail(vmail)  ||
	!validator.isAlphanumeric(vname) ||
	!vmesg.length > 0 || !vmesg.length < 5000){
       alert("error in the input fields");
       return false;
   }
   return true;
}

 /*function scrollTo(hash) {
    location.hash = "#" + hash;
}*/

/**
 * animated href scroll
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
/*
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");
    
    // You could easily calculate this dynamically if you prefer
    var fromTop = 50;
    
    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0) {
        var $target = $(href);
        
        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}   
// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);
// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);
*/

//todo: finish with feedback message when form has been succesfully submitted (or not)
//var formProcessed = "{{formProcessed}}";
//if(typeof formProcessed === 'undefined'){
console.log("value of formProcessed=" + formProcessed + $("formProcessed")); 
if(formProcessed === "true"){
   scrollTop(contactForm);
   $('body').append('<div id="alert">ALL data was saved</div>');
   $('#alert').fadeOut('slow')
	console.log("defined");
}


/*$('.selector').click(function(e){*/
    /*$(this).toggleClass('new-class');*/
    /*e.preventDefault();*/
/*});*/
