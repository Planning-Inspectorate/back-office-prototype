/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
    // window.MOJFrontend.initAll()
window.MOJFrontend.initAll() 

///// document library functions /////

/// Document count ///
  var total_checked;
  var totalCheckboxes;
  var projectID;
  var selected;
  var docID = "";
  var docStr = "";
  var docStrm = "";
  var docMoveUrl = $('form.move').attr('action'); //update if this ends up needing to be mass update
  var docStatusUrl = $('form.status').attr('action');

  $('.documents input#file-selected[type="checkbox"]').change(function(){
    total_checked=  $(".documents input#file-selected:checked").length;
    projectId = $(this).parents("tr").attr("id");

    $("#docs-selected").html(total_checked + " document(s) selected" );

    if ($(this).is(':checked')){
      selected = true;
      docID = $(this).data('id')
      docStr += "&document[]=" + docID

      $('form.move').attr('action', docMoveUrl + docStr)
      $('form.status').attr('action', docStatusUrl + docStr)


    } else {
      docID = $(this).data('id')
      docStr = docStr.replace("&document[]=" + docID,'')

      $('form.move').attr('action', docMoveUrl + docStr)
      $('form.status').attr('action', docStatusUrl + docStr)


    }

  });

  total_checked=  $(".documents input#file-selected:checked").length
  totalCheckboxes = $(".documents input#file-selected").length;

  $("#docs-selected").html(total_checked + " document(s) selected" );
  $(".doc-num").html("This folder contains " + totalCheckboxes + " documents. Showing 1 - "+ totalCheckboxes + " documents" );


    $('input#file-selected-all[type="checkbox"]').change(function(){

      if ($(this).is(':checked')){

        $('.documents input#file-selected[type="checkbox"]').each(function(){
          this.checked = true;

          docID = $(this).data('id');
          docStr += "&document[]=" + docID

          $('form.move').attr('action', docMoveUrl + docStr)
          $('form.status').attr('action', docStatusUrl + docStr)


          total_checked=  $(".documents input#file-selected:checked").length;
          $("#docs-selected").html(total_checked + " document(s) selected" );
        });


      } else {
        $('.documents input#file-selected[type="checkbox"]').each(function(){
          this.checked = false;

          docID = $(this).data('id')
          docStr = docStr.replace("&document[]=" + docID,'')

          $('form.move').attr('action', docMoveUrl + docStr)
          $('form.status').attr('action', docStatusUrl + docStr)


          total_checked=  $(".documents input#file-selected:checked").length;
          $("#docs-selected").html(total_checked + " document(s) selected" );
        });
      }

    });

    /// remove items ///

    $( ".removeItem" ).on( "click", function() {

      $(this).parents('.govuk-summary-list__row').css('display','none');
    });

    ///

    $( ".clear-all" ).on( "click", function(e) {
      $('input#file-selected-all[type="checkbox"]').removeAttr('checked');
      $('input#file-selected[type="checkbox"]').removeAttr('checked');
      $(".bo-documents .govuk-radios__input").removeAttr('checked');
      e.preventDefault()
    });


})


///// end document library functions /////


///// Dirty validation hack just to show error states /////
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

       //empty = true;
      e.preventDefault()

    } else {
      errorID = $this.attr("id")
      $(this).parent('.govuk-form-group').removeClass("govuk-form-group--error");
      $(this).parent('.govuk-form-group').find('.govuk-error-message').css('display','none');
      $('.govuk-error-summary').find("#" + errorID).css('display', 'none');

      //empty = false;
    }

 });

}

//doc library validation
function validateDocLib(e){
  var isMeta;
  var isPublished;

  if( $(".projectDocs .govuk-checkboxes__input:checked").length == 0){
    $('.govuk-error-summary, a#select-docs').css('display','block');
    $('.govuk-error-message#select-docs').css('display','block');
     $('.govuk-form-group.docs').addClass("govuk-form-group--error");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    e.preventDefault();
  }

  if( $(".projectDocs .govuk-checkboxes__input:checked").length > 0){

    $(".projectDocs .govuk-checkboxes__input:checked").each(function(){
      isMeta = $(this).closest('tr').find('.status');

      $(isMeta).each(function(){
        isPublished = $(this).text()

        if (isPublished === "Published") {
          $('.govuk-error-summary, a#select-published').css('display','block');
          $('.govuk-error-message#select-published').css('display','block');
           $('.govuk-form-group.status').addClass("govuk-form-group--error");
          window.scrollTo({ top: 0, behavior: 'smooth' });
          e.preventDefault();
        }
      });

    });

  }
}

function validateStatusLib(e){

  if( $(".bo-documents .govuk-radios__input:checked").length == 0){
    $('.govuk-error-summary, a#select-status').css('display','block');
    $('.govuk-error-message#select-status').css('display','block');
     $('.govuk-form-group.status').addClass("govuk-form-group--error");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    e.preventDefault();
  }

  else if( $(".projectDocs .govuk-checkboxes__input:checked").length == 0){
    $('.govuk-error-summary, a#select-docs').css('display','block');
    $('.govuk-error-message#select-docs').css('display','block');
     $('.govuk-form-group.docs').addClass("govuk-form-group--error");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    e.preventDefault();
  }

}

function validatePublished(e){
  $('.govuk-error-summary, .govuk-error-summary__list li a').css('display','block');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.preventDefault();
}

function validateDetails(e) {
  var $this;
  var $thisText;
  var $isMeta;
  var isEmpty;

  if( $(".govuk-checkboxes__input:checked").length == 0){
    $('.govuk-error-summary, a#select-docs').css('display','block');
    $('.govuk-error-message#select-docs').css('display','block');
     $('.govuk-form-group').addClass("govuk-form-group--error");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    e.preventDefault();
  }


  if ($(".govuk-checkboxes__input:checked").length > 0) {

    $(".govuk-checkboxes__input:checked").each(function(){
      $isMeta = $(this).closest('tr');
      isEmpty = $isMeta.find('.govuk-table__cell span div')
      //$isMeta.addClass("meta")

      $(isEmpty).each(function() {
        var $this = $(this);
        var $thisText = $this.text();

        if (!$thisText) {
          $('.govuk-error-summary').css('display','block');
          $('a#publish-docs').css('display','block');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          $this.parent().addClass("govuk-form-group--error")
          e.preventDefault();
        }
      })

    })

  }

}
///// end validation //////




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
