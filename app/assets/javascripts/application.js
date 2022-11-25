/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()



  //Another gross function for items on the doc library pages
  var total_checked;
  var totalCheckboxes;
  var projectID;

  $('input#file-selected[type="checkbox"]').change(function(){
    total_checked=  $("input#file-selected:checked").length;
    projectId = $(this).parents("tr").attr("id");

    $("#docs-selected").html(total_checked + " documents selected" );

  });

  total_checked=  $("input#file-selected:checked").length
  totalCheckboxes = $("input#file-selected").length;

  $("#docs-selected").html(total_checked + " documents selected" );
  $(".doc-num").html("This folder contains " + totalCheckboxes + " documents");




})



  //Dirty validation hack just to show error states

 function validateForm(e) {

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

      } else {
        errorID = $this.attr("id")
        $(this).parent('.govuk-form-group').removeClass("govuk-form-group--error");
        $(this).parent('.govuk-form-group').find('.govuk-error-message').css('display','none');
        $('.govuk-error-summary').find("#" + errorID).css('display', 'none');

        empty = false;
      }
   });


   $('.govuk-radios__input, .govuk-checkboxes__input').each(function(event) {
     if ($(this).is(':checked')){
       empty = false;
     } else {
       empty = true;
       $('.govuk-error-message, .govuk-error-summary__list li a').css('display','block');
      }
   });



   if (empty === true) {
     $('.govuk-error-summary').css('display','block');

    e.preventDefault()
   } else {
     //nada
  }

}
