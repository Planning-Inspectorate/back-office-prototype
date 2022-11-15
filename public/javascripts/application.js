/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()



})


  //Dirty validation hack just to show error states

 function validateForm() {

   var empty = true;
   var errorMess = $('.govuk-error-summary a');
   var errorId;
   var $this;


   $('.govuk-input, .govuk-textarea').each(function($this) {

     $this = $(this);

      if ($(this).val() === "") {

        errorID = $this.attr("id")

        $this.parent('.govuk-form-group').addClass("govuk-form-group--error");
        $this.parent('.govuk-form-group').find('.govuk-error-message').css('display','block');
        $('.govuk-error-summary').find("#" + errorID).css('display', 'block');



         empty = true;
         // return false;
      } else {
        // $(this).parent('.govuk-form-group').removeClass("govuk-form-group--error");
        // $(this).parent('.govuk-form-group').find('.govuk-error-message').css('display','none');
        // $('.govuk-error-summary').css('display','none');
          empty = false
      }

   });


   $('.govuk-radios__input, .govuk-checkboxes__input').each(function() {
     if ($(this).is(':checked')){

       empty = false;

     } //else {
     //   empty = false;
     //}
   });


   if (empty === true) {
      $('.govuk-error-summary').css('display','block');
    // $('.govuk-error-summary').find("#" + errorID).css('display', 'block')


     return false;
   } else {
//return false; //for testing only, remember to remove
   }

}
