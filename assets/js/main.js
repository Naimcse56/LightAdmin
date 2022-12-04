(function() {
    
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

  }());
