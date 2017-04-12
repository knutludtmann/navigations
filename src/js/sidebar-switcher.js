(function($) {

    $('button.sidebar-left-toggle').on('click', function() {
        if (!$('.sidebar').hasClass('sidebar-left')) {
            $('.sidebar').addClass('sidebar-left');
        }
    });
    $('button.sidebar-right-toggle').on('click', function() {
        if ($('.sidebar').hasClass('sidebar-left')) {
            $('.sidebar').removeClass('sidebar-left');
        }
    });
    $('button.sidebar-hide-toggle').on('click', function() {

        $('.sidebar').toggleClass('hide');

    });
})(jQuery);