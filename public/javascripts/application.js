/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {

  examTT();

  docLibrary();

  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()

})

// Upgrade any select with `.js-autocomplete` class
  let autocomplete = document.querySelector('.js-autocomplete')

  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: autocomplete.getAttribute('data-default-value'),
    selectElement: autocomplete
  })
///// EXAM TT FUNCTIONS //////

function examTT(){
  var selected = $('.examtimetable .govuk-select :selected').text();
  var existUrl = $('.formroute').attr('action')
  var route;

  $('.examtimetable .select').val(selected)

  $('.examtimetable .govuk-select').change(function() {
    selected = $('.govuk-select :selected').text();
    route = $('.examtimetable .govuk-select :selected').val();

    $('.examtimetable .select').val(selected)

    $('.route').show()
    $('.routeOpt').hide();
    $('.formroute').attr('action', 'item-'+route+'.html'+existUrl);

  });

  $('.route').click(function() {

      // $('.examtimetable div.'+route).show();
      // $(this).hide()
  });

}

///// DOCUMENT LIBRARY FUNCTIONS //////

//Note to self: This probably needs refactoring
function docLibrary(){

  var total_checked;
  var totalCheckboxes;
  var projectID;
  var selected;
  var docID = "";
  var docStr = "";
  var docStrm = "";
  var docMoveUrl = $('form.move').attr('action');
  var docUnpublishUrl = $('form.unpublish').attr('action');
  var docStatusUrl = $('form.status').attr('action');

  $('.documents input#file-selected[type="checkbox"]').change(function(){
    total_checked=  $(".documents input#file-selected:checked").length;
    projectId = $(this).parents("tr").attr("id");
    docID = $(this).data('id')

    //update count
    $("#docs-selected").html(total_checked);

    //add docs selected to depublish and move urls
    if ($(this).is(':checked')){
      selected = true;
      docStr += "&document[]=" + docID
    } else {
      docStr = docStr.replace("&document[]=" + docID,'')
    }

    $('form.move').attr('action', docMoveUrl + docStr)
    $('form.status').attr('action', docStatusUrl + docStr)
    $('form.unpublish').attr('action', docUnpublishUrl + docStr)

  });

  //Update number of documents selected
  total_checked=  $(".documents input#file-selected:checked").length
  totalCheckboxes = $(".documents input#file-selected").length;

  $("#docs-selected").html(total_checked);
  $(".doc-num").html(totalCheckboxes + " documents. Showing 1 - "+ totalCheckboxes + " documents" );
  $(".item-num").html(totalCheckboxes);

  //changed for later iterations
  $(".doc-number").html("There are " + totalCheckboxes + " documents in this folder" );
  
  //$(".doc-pub").html(totalCheckboxes + " documents." );

  //When select all checboxes is activated
  $('input#file-selected-all[type="checkbox"]').change(function(){

    if ($(this).is(':checked')){
      $('.documents input#file-selected[type="checkbox"]').each(function(){
        this.checked = true;
        docID = $(this).data('id');
        docStr += "&document[]=" + docID
      });

    } else {
      $('.documents input#file-selected[type="checkbox"]').each(function(){
        this.checked = false;
        docID = $(this).data('id')
        docStr = docStr.replace("&document[]=" + docID,'')
      });
    }

    $('form.move').attr('action', docMoveUrl + docStr)
    $('form.status').attr('action', docStatusUrl + docStr)
    $('form.unpublish').attr('action', docUnpublishUrl + docStr)

    total_checked=  $(".documents input#file-selected:checked").length;
    $("#docs-selected").html(total_checked);

  });

  //Remove item for mass actions
  $( ".removeItem" ).on( "click", function(e) {
    $(this).parents('.govuk-summary-list__row').css('display','none');
    $(this).parents('.govuk-table__row').css('display','none');
    e.preventDefault()
  });

  // Clear all selected status
  $( ".clear-all" ).on( "click", function(e) {
    $('input#file-selected-all[type="checkbox"]').removeAttr('checked');
    $('input#file-selected[type="checkbox"]').removeAttr('checked');
    $(".bo-documents .govuk-radios__input").removeAttr('checked');
    e.preventDefault()
  });

}
///// END DOCUMENT LIBRARY FUNCTIONS //////


///// FORM VALIDATION //////

//ALL: Global behaviour for error states
function errorStatus(e){
  $('.govuk-error-summary').css('display','block');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.preventDefault();
}

//GENERAL: validation - need to update across prototype to replace older ones below
function validate(e) {
   var $this,
       errorId;

  // inputs
  $('.govuk-input, .govuk-textarea').each(function($this) {
     $this = $(this);
     errorID = $this.attr("id")

     if ($(this).val() === "") {
       if (!$this.hasClass('optional')) {
         //lets validate

         console.log($this)

         $this.css("border-color", "#d4351c")
         $('.govuk-error-summary__list li').find("#" + errorID).css('display', 'block');

         if ($this.hasClass('govuk-date-input__input')) {
           //just for time and date errors
           $this.parents('.govuk-form-group.date').addClass("govuk-form-group--error");
           $this.parents('.govuk-form-group.date').find('.govuk-error-message').css('display','block');
         } else {
           $this.parent('.govuk-form-group').addClass("govuk-form-group--error");
           $this.parent('.govuk-form-group').find('.govuk-error-message').css('display','block');
         }

         errorStatus(e)
       }

    } else {
      //remove errors
      $this.css("border-color", "#000")
      $('.govuk-error-summary__list li').find("#" + errorID).css('display', 'none');

      if ($this.hasClass('govuk-date-input__input')) {
        //just for time and date errors
        $this.parents('.govuk-form-group.date').removeClass("govuk-form-group--error");
        $this.parents('.govuk-form-group.date').find('.govuk-error-message').css('display','none');
      } else {
        $this.parent('.govuk-form-group').removeClass("govuk-form-group--error");
        $this.parent('.govuk-form-group').find('.govuk-error-message').css('display','none');
      }

    }
  })

  //radios
  if( $(".govuk-radios__input").length > 0){
    if( $(".govuk-radios__input:checked").length == 0){
      $('.govuk-error-summary__list li a').css('display','block');
      $('.govuk-error-message').css('display','block');
      $('.govuk-form-group').addClass("govuk-form-group--error");

      errorStatus(e)
    } else{
      $('.govuk-error-summary__list li a').css('display','none');
      $('.govuk-error-message').css('display','none');
      $('.govuk-form-group').removeClass("govuk-form-group--error");
    }
  }
}



function validateForm(e) {

 var empty;
 var errorMess = $('.govuk-error-summary a');
 var errorId;
 var $this;

 $('.govuk-input, .govuk-textarea').each(function($this) {

   $this = $(this);

    if ($(this).val() === "") {

      errorID = $this.attr("id")

      $('.govuk-error-summary').css('display','block');
      $this.parent('.govuk-form-group').addClass("govuk-form-group--error");
      $this.parent('.govuk-form-group').find('.govuk-error-message').css('display','block');
      $('.govuk-error-summary').find("#" + errorID).css('display', 'block');
      e.preventDefault()

    } else {
      errorID = $this.attr("id")
      $(this).parent('.govuk-form-group').removeClass("govuk-form-group--error");
      $(this).parent('.govuk-form-group').find('.govuk-error-message').css('display','none');
      $('.govuk-error-summary').find("#" + errorID).css('display', 'none');
    }
 });
}




///// END FORM VALIDATION //////



///// DOCUMENT VALIDATION //////



//ALL: Validating if any documents have been selected
function documentSelect(e) {

  if( $(".projectDocs .govuk-checkboxes__input:checked").length === 0){
    $('a#select-docs').css('display','block');
    $('.govuk-error-message#select-docs').css('display','block');
    $('.govuk-form-group.docs').addClass("govuk-form-group--error");

    errorStatus(e)
  }
  else if( $(".projectDocs .govuk-checkboxes__input:checked").length > 0){
    $('a#select-docs').css('display','none');
    $('.govuk-error-message#select-docs').css('display','none');
    $('.govuk-form-group.docs').removeClass("govuk-form-group--error");
  }
}


//DOC LIBRARY: Move and Unpublish
function validateDocLib(e){
  var isMeta;
  var isPublished;
  var isAction = e.target.classList[1]

  documentSelect(e)

  if( $(".projectDocs .govuk-checkboxes__input:checked").length > 0){

    $(".projectDocs .govuk-checkboxes__input:checked").each(function(){
      isMeta = $(this).closest('tr').find('.status');



      //check if published and if so decline
      $(isMeta).each(function(){
        isPublished = $(this).text()

        //if action is move,
        if (isAction === 'move') {
          //block if it has been published
          if (isPublished === "Published") {
            $('a#select-published').css('display','block');
            $('.govuk-error-message#select-published').css('display','block');
            $('.govuk-form-group.status').addClass("govuk-form-group--error");

            errorStatus(e)
          }
        }

        //if action is unpublish,
        if (isAction === "unpublish") {
          //block if not published
          if (isPublished !== "Published") {
            $('a#select-unpublished').css('display','block');
            $('.govuk-error-message#select-unpublished').css('display','block');

            errorStatus(e)
          }
        }

      });
    });
  }
}


//DOC LIBRARY: Changing a status & validating metadata completetion for 'ready to publish'
function validateStatusLib(e){
  var status;

  if( $(".bo-documents .govuk-radios__input:checked").length == 0){
    $('a#select-status').css('display','block');
    $('.govuk-error-message#select-status').css('display','block');
    $('.govuk-form-group.status').addClass("govuk-form-group--error");

    errorStatus(e)
  } else {
    status = $(".bo-documents .govuk-radios__input:checked").val();

    if (status === "Ready to publish") {
      validateDetails(e)
    }
  }



  documentSelect(e)

}


//PUBLISHING: Metadata
function validatePublished(e){
  $('.govuk-error-summary, .govuk-error-summary__list li a').css('display','block');

  errorStatus(e)
}

function validateDetails(e) {
  var $this;
  var $thisText;
  var $isMeta;
  var isEmpty;

  if ($(".govuk-checkboxes__input:checked").length > 0) {

    $(".govuk-checkboxes__input:checked").each(function(){
      $isMeta = $(this).closest('tr');
      isEmpty = $isMeta.find('.govuk-table__cell span div')

      $(isEmpty).each(function() {
        var $this = $(this);
        var $thisText = $this.text();

        if (!$thisText) {

          $('.govuk-error-summary, a#publish-docs').css('display','block');
          $this.parents('tr').addClass("govuk-form-group--error");
          $(".govuk-form-group--error .govuk-error-message").css('display','block');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          e.preventDefault();
        }
      })
    })
  }
}
///// END DOCUMENT VALIDATION //////




if(MOJFrontend.dragAndDropSupported() && MOJFrontend.formDataSupported() && MOJFrontend.fileApiSupported()) {
  MOJFrontend.MultiFileUpload = function(params) {
    this.defaultParams = {
      uploadFileEntryHook: $.noop,
      uploadFileExitHook: $.noop,
      uploadFileErrorHook: $.noop,
      fileDeleteHook: $.noop,
      uploadStatusText: 'Uploading files, please wait',
      dropzoneHintText: 'Drag and drop files here or',
      dropzoneButtonText: 'Select files'
    };
    this.params = $.extend({}, this.defaultParams, params);
    this.params.container.addClass('moj-multi-file-upload--enhanced');
    this.feedbackContainer = this.params.container.find('.moj-multi-file__uploaded-files');
    this.setupFileInput();
    this.setupDropzone();
    this.setupLabel();
    this.setupStatusBox();
    this.params.container.on('click', '.moj-multi-file-upload__delete', $.proxy(this, 'onFileDeleteClick'));
  };
  MOJFrontend.MultiFileUpload.prototype.setupDropzone = function() {
    this.fileInput.wrap('<div class="moj-multi-file-upload__dropzone" />');
    this.dropzone = this.params.container.find('.moj-multi-file-upload__dropzone');
    this.dropzone.on('dragover', $.proxy(this, 'onDragOver'));
    this.dropzone.on('dragleave', $.proxy(this, 'onDragLeave'));
    this.dropzone.on('drop', $.proxy(this, 'onDrop'));
    this.feedbackContainer.addClass('moj-hidden');
  };
  MOJFrontend.MultiFileUpload.prototype.setupLabel = function() {
    this.label = $('<label for="'+this.fileInput[0].id+'" class="govuk-button govuk-button--secondary">'+ this.params.dropzoneButtonText +'</label>');
    this.dropzone.append('<p class="govuk-body">' + this.params.dropzoneHintText + '</p>');
    this.dropzone.append(this.label);
  };
  MOJFrontend.MultiFileUpload.prototype.setupFileInput = function() {
    this.fileInput = this.params.container.find('.moj-multi-file-upload__input');
    this.fileInput.on('change', $.proxy(this, 'onFileChange'));
    this.fileInput.on('focus', $.proxy(this, 'onFileFocus'));
    this.fileInput.on('blur', $.proxy(this, 'onFileBlur'));
  };
  MOJFrontend.MultiFileUpload.prototype.setupStatusBox = function() {
    this.status = $('<div aria-live="polite" role="status" class="govuk-visually-hidden" />');
    this.dropzone.append(this.status);
  };
  MOJFrontend.MultiFileUpload.prototype.onDragOver = function(e) {
    e.preventDefault();
    this.dropzone.addClass('moj-multi-file-upload--dragover');
  };
  MOJFrontend.MultiFileUpload.prototype.onDragLeave = function() {
    this.dropzone.removeClass('moj-multi-file-upload--dragover');
  };
  MOJFrontend.MultiFileUpload.prototype.onDrop = function(e) {
    e.preventDefault();
    this.dropzone.removeClass('moj-multi-file-upload--dragover');
    this.feedbackContainer.removeClass('moj-hidden');
    this.status.html(this.params.uploadStatusText);
    this.uploadFiles(e.originalEvent.dataTransfer.files);
  };
  MOJFrontend.MultiFileUpload.prototype.uploadFiles = function(files) {
    for(var i = 0; i < files.length; i++) {
      this.uploadFile(files[i]);
    }
  };
  MOJFrontend.MultiFileUpload.prototype.onFileChange = function(e) {
    this.feedbackContainer.removeClass('moj-hidden');
    this.status.html(this.params.uploadStatusText);
    this.uploadFiles(e.currentTarget.files);
    this.fileInput.replaceWith($(e.currentTarget).val('').clone(true));
    this.setupFileInput();
    this.fileInput.focus();
  };
  MOJFrontend.MultiFileUpload.prototype.onFileFocus = function(e) {
    this.label.addClass('moj-multi-file-upload--focused');
  };
  MOJFrontend.MultiFileUpload.prototype.onFileBlur = function(e) {
    this.label.removeClass('moj-multi-file-upload--focused');
  };
  MOJFrontend.MultiFileUpload.prototype.getSuccessHtml = function(success) {
    return '<span class="moj-multi-file-upload__success"> <svg class="moj-banner__icon" fill="currentColor" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25"><path d="M25,6.2L8.7,23.2L0,14.1l4-4.2l4.7,4.9L21,2L25,6.2z"/></svg> ' + success.messageHtml + '</span>';
  };
  MOJFrontend.MultiFileUpload.prototype.getErrorHtml = function(error) {
    return '<span class="moj-multi-file-upload__error"> <svg class="moj-banner__icon" fill="currentColor" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="25" width="25"><path d="M13.6,15.4h-2.3v-4.5h2.3V15.4z M13.6,19.8h-2.3v-2.2h2.3V19.8z M0,23.2h25L12.5,2L0,23.2z"/></svg> '+ error.message +'</span>';
  };
  MOJFrontend.MultiFileUpload.prototype.getFileRowHtml = function(file) {
    var html = '';
    html += '<div class="govuk-summary-list__row moj-multi-file-upload__row">';
    html += '<dd class="govuk-summary-list__value moj-multi-file-upload__message">';
    html += '<span class="moj-multi-file-upload__filename">'+file.name+'</span>';
    html += '<span class="moj-multi-file-upload__progress">(0%)</span>';
    html += '</dd>';
    html += '<dd class="govuk-summary-list__actions moj-multi-file-upload__actions">';
    html += '<a class="remove-link moj-multi-file-upload__delete" href="#0" value="' + file.name + '">Remove <span class="govuk-visually-hidden">' + file.name + '</span></a>';
    html += '</dd>';
    html += '</div>';
    return html;
  };
  MOJFrontend.MultiFileUpload.prototype.uploadFile = function(file) {
    this.params.uploadFileEntryHook(this, file);
    var formData = new FormData();
    formData.append('documents', file);
    var item = $(this.getFileRowHtml(file));
    this.feedbackContainer.find('.moj-multi-file-upload__list').append(item);
    $.ajax({
      url: this.params.uploadUrl,
      type: 'post',
      data: formData,
      processData: false,
      contentType: false,
      success: $.proxy(function(response){
        if(response.error) {
          item.find('.moj-multi-file-upload__message').html(this.getErrorHtml(response.error));
          this.status.html(response.error.message);
        } else {
          item.find('.moj-multi-file-upload__message').html(this.getSuccessHtml(response.success));
          this.status.html(response.success.messageText);
        }
        this.params.uploadFileExitHook(this, file, response);
      }, this),
      error: $.proxy(function(jqXHR, textStatus, errorThrown) {
        this.params.uploadFileErrorHook(this, file, jqXHR, textStatus, errorThrown);
      }, this),
      xhr: function() {
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', function(e) {
          if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
            percentComplete = parseInt(percentComplete * 100, 10);
            item.find('.moj-multi-file-upload__progress').text(' (' + percentComplete + '%)');
          }
        }, false);
        return xhr;
      }
    });
  };
  MOJFrontend.MultiFileUpload.prototype.onFileDeleteClick = function(e) {
    e.preventDefault(); // if user refreshes page and then deletes
    var button = $(e.currentTarget);
    button.parents('.moj-multi-file-upload__row').remove();
    if(this.feedbackContainer.find('.moj-multi-file-upload__row').length === 0) {
      this.feedbackContainer.addClass('moj-hidden');
    }
  };
}
// Initialise MOJ multi file upload
if(typeof MOJFrontend.MultiFileUpload !== 'undefined') {
  new MOJFrontend.MultiFileUpload({
    container: $('.moj-multi-file-upload'),
    uploadUrl: 'upload',
    deleteUrl: 'upload'
  });
}

//Import autocomplete
import accessibleAutocomplete from 'accessible-autocomplete'

const countries = [
  'France',
  'Germany',
  'United Kingdom'
]

