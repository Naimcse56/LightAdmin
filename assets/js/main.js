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

  
  }());
