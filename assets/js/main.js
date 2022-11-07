$(document).ready(function(){
    $('.navbar-icon').on('click', function(){
        if ($('body').hasClass('sidebar-open')) {
            $('body').removeClass('sidebar-open');
        }else {
            $('body').addClass('sidebar-open');
        }
    });
});