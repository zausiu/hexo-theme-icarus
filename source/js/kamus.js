(function ($) {
    var $signs = $('.menu_sign');
    $signs.click(function(){
        var $sign = $(this);
        var $menu_list = $sign.parents('.level').next();
        $menu_list.toggle('fast', function (){
            var display = $menu_list.css('display');
            if (display == 'none')
            {
                $sign.html('\u002b');
            }
            else
            {
                $sign.html('\u2212');
            }
        });
    });
})(jQuery);
