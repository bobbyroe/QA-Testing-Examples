// Allow :active styles to work in your CSS on a page in Mobile Safari:
document.addEventListener("touchstart", function(){}, true);

// Expander toggle
$( ".expander-toggle" ).click(function() { 
  if( $(this).attr('aria-expanded') == 'false' ) {
    $(this).attr('aria-expanded', 'true').next(".expander-content" ).addClass('visible').attr('aria-hidden', 'false');
  } else if( $(this).attr('aria-expanded') == 'true' ) {
    $(this).attr('aria-expanded', 'false').next(".expander-content" ).removeClass('visible').attr('aria-hidden', 'true');             
  }   
});

$("[name='expanderList']").on('change', function() {
  $("[name='expanderList']").not(this).prop('checked', false); 
  $(this).prop('checked', true); 
});

$("[name='paymentOptionsAlt']").on('change', function() {
    if($("#radioAlpha").is(":checked")) {
      $('#radioAlphaOffers').removeClass('display-none');  
    } else {
      $('#radioAlphaOffers').addClass('display-none');  
    }
    if($("#radioBravo").is(":checked")) {
      $('#radioBravoOffers').removeClass('display-none');  
    } else {
      $('#radioBravoOffers').addClass('display-none');  
    }
      
});


$("#show-password").on('change', function() {
  if($(this).is(":checked")) {
    $('#password').attr('type', 'text')  
  } else if($(this).is(":not(:checked)")) {
    $('#password').attr('type', 'password')  
  }                 
});


$("#effectiveDatePicker").on('change', function(){
    $(this).attr('aria-disabled', 'false');  
    $('#radioBravoEffectiveDate').prop('checked', true);
});

$("[name='effectiveDateAlpha']").on('change', function() {
  if($("#radioBravoEffectiveDate").is(":checked")) {
    $('#effectiveDatePicker').attr('aria-disabled', 'true');  
  } else if($("#radioBravoEffectiveDate").is(":not(:checked)")) {
    $('#effectiveDatePicker').attr('aria-disabled', 'false');  
  }                 
});

$("#radioBravoEffectiveDate").next('label').click(function() {
  setTimeout(function(){ 
    if($('#radioBravoEffectiveDate').is(":checked")) {
      $('#effectiveDatePicker').focus()  
    }                 
  }, 25);
});

$("#checkboxAlphaEffectiveDate").on('change', function() {
  if($(this).is(":checked")) {
    $("#effectiveDatePickerBravo").attr('disabled', 'disabled').attr('aria-disabled', 'false');
  } else {
    $("#effectiveDatePickerBravo").removeAttr('disabled').attr('aria-disabled', 'true');
  }                 
});

$(".animated-summary").click(function(){
    $(this).closest(".animated-details").addClass("opening");
    setTimeout(function(){ 
      console.log('lolz');
      $(".animated-details").addClass("opened");
    }, 1000);
});

$(".payment-amounts").on('change', function() {
  var $amountalpha = $("#payment-alpha").val();
  var $amountbravo = $("#payment-bravo").val();
  var $paymentTotal;
  var $paymentTotal = parseInt($amountalpha) + parseInt($amountbravo);

  $("#totaloutput").html($paymentTotal); 
});


(function() {
  var updateButton = document.getElementById('modalLaunchButton');
  var cancelButton = document.getElementById('cancel');
  var dialog = document.getElementById('favDialog');
  dialog.returnValue = 'favAnimal';

  function openCheck(dialog) {
    if(dialog.open) {
      console.log('Dialog open');
    } else {
      console.log('Dialog closed');
    }
  }

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function() {
    dialog.showModal();
    openCheck(dialog);
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener('click', function() {
    dialog.close('animalNotChosen');
    openCheck(dialog);
    $("#modalLaunchButton").focus();
  });

});
$("#radioBravoAlphaButton").attr('disabled',true);

$("input[name='paymentMethodAlpha']").change(function(){
  if($('#radioBravoAlpha').is(':checked')) {
    $("#radioBravoAlphaButton").attr('disabled',false);        
    // console.log(' CHECKED');
  } else {
    $("#radioBravoAlphaButton").attr('disabled',true);
      console.log('NOT CHECKED');
  }
});

var isDialogSupported = true;
if (!window.HTMLDialogElement) {
  document.body.classList.add("no-dialog");
  isDialogSupported = false;
}

showModal.onclick = () => {
  if (isDialogSupported) {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
    $('#pageContainer').css('display','none');
  }
  //   Focus first input when dialog opens
  modal.focus();
};

closeModal.onclick = () => {
  if (isDialogSupported) {
    modal.close();
  } else {
    modal.removeAttribute("open", "");
    $('#pageContainer').css('display','block');
  }
  setTimeout(function(){ 
    showModal.focus();
  }, 25);
};

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    if (isDialogSupported) {
      modal.close();
    } else {
      modal.removeAttribute("open", "");
      $('#pageContainer').css('display','block');
    }
    setTimeout(function(){ 
      showModal.focus();
    }, 25);
  }
});

