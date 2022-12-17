(function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  $( document ).ready(function() {
      console.log()
  });
  $(document).on('click', '.openbtn', function(){
    if (document.getElementById("mySidebar").style.width == "250px") {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main-content").style.marginLeft = "0";
    } else {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main-content").style.marginLeft = "250px";
    }
  });

  $(document).on('click', '.sidebar-navigation > ul li a', function(){
      if ($(this).closest("li").children("ul").length > 0) {
        $('li.selected').removeClass('selected');
        $(this).closest("li").addClass('selected');
        $(this).closest("li").children('ul').toggle();
      } else {
        $('li.selected').removeClass('selected');
        $(this).closest("li").addClass('selected');
      }
  });

  
  
  $('.sidebar-navigation > ul li ul').each(function(i){
    if($(this).find('>li>ul').length > 0){
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft   = parseInt(paddingLeft);
      var result      = (pIntPLeft == 0) ? 45 : (pIntPLeft +10);
      $(this).find('>li>a').css('padding-left',result);
    }else{
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft   = parseInt(paddingLeft);
      var result      = (pIntPLeft == 0) ? 45 : (pIntPLeft +10);
      $(this).find('>li>a').css('padding-left',result).parent().addClass('selected--last');
    }
  });
  $(document).ready(function () {
    if ($('#primary_datatable1').length) {
      $('#primary_datatable1').dataTable({
        language: {
          'paginate': {
            'previous': '<i class="fa fa-arrow-left"></i>',
            'next': '<i class="fa fa-arrow-right"></i>'
          }
        },
        oLanguage: {
            sLengthMenu: "_MENU_",
         },
         responsive: true
      });
    }
      
    if ($('#primary_datatable2').length) {
      $('#primary_datatable2').DataTable( {
        language: {
          'paginate': {
            'previous': '<i class="fa fa-arrow-left"></i>',
            'next': '<i class="fa fa-arrow-right"></i>'
          }
        },
        "bDestroy": false,
        lengthChange: false,
        dom: 'Bfrtip',
        buttons: [
              {
                  extend: 'copyHtml5',
                  text: '<i class="fa fa-copy"></i>',
                  title: "Copy HTML",
                  titleAttr: 'Copy',
                  footer: true,
                  exportOptions: {
                      columns: ':visible',
                      columns: ':not(:last-child)',
                  }
              },
              {
                  extend: 'csvHtml5',
                  text: '<i class="fa fa-file-excel"></i>',
                  titleAttr: 'CSV',
                  footer: true,
                  exportOptions: {
                      columns: ':visible',
                      columns: ':not(:last-child)',
                  }
              },
              {
                  extend: 'pdfHtml5',
                  text: '<i class="fa fa-file-pdf"></i>',
                  title: "PDF",
                  titleAttr: 'PDF',
                  exportOptions: {
                      columns: ':visible',
                      columns: ':not(:last-child)',
                  },
                  orientation: 'landscape',
                  pageSize: 'A4',
                  margin: [0, 0, 0, 0],
                  alignment: 'center',
                  header: true,
                  footer: true
              },
              {
                  extend: 'print',
                  text: '<i class="fa fa-print"></i>',
                  titleAttr: 'Print',
                  alignment: 'center',
                  title: $("#header_title").text(),
                  footer: true,
                  exportOptions: {
                      columns: ':not(:last-child)',
                  }
              },
              {
                  extend: 'colvis',
                  text: '<i class="fa fa-columns"></i>',
                  postfixButtons: ['colvisRestore']
              }
          ],
          columnDefs: [{
              visible: false
          }],
      });
    }
  });

  jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }());
