//callback for button copy contact info to clipboard
function copyTextToClipBoard() {
    var succeed = false;
    try {
        var copyText = document.getElementById("mailAddrHolder");
        copyText.select();
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

function scrollTo(hash) {
    location.hash = "#" + hash;
}

/**
 * animated href scroll
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
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

//var formProcessed = "{{formProcessed}}";

//if(typeof formProcessed === 'undefined'){
console.log("value of formProcessed=" + formProcessed + $("formProcessed")); 
if(formProcessed === "true"){
   scrollTop(contactForm);
   $('body').append('<div id="alert">ALL data was saved</div>');
   $('#alert').fadeOut('slow')
	console.log("defined");
}


