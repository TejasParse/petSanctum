$('[data-toggle="collapse"]').on('mouseenter', function() {
    $(this).parents('.card').find('.collapse').collapse('show');
});