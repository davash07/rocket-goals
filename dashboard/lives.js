(function ($) {

    $.fn.rating = function (method, options) {
        method = method || 'create';
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            limit: 13,
            value: 0,
            glyph: "glyphicon-heart",
            coloroff: "gray",
            coloron: "red",
            size: "1.2em",
        }, options);
        var style = "";
        style = style + "font-size:" + settings.size + "; ";
        style = style + "color:" + settings.coloroff + "; ";


        if (method == 'create') {
            for (var i = 0; i < settings.limit; i++) {
                this.append('<span data-value="' + (i + 1) + '" class="ratingicon glyphicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></span>');
            }
            $('.ratingicon').mouseover(function () {
                var starValue = $(this).data('value');
                var ratingIcons = $('.ratingicon');
                for (var i = 0; i < starValue; i++) {
                    $(ratingIcons[i]).css('color', settings.coloron);
                }
            }).mouseout(function () {
                var currentRate = $(this).parent().attr('data-rating');
                var ratingIcons = $('.ratingicon');
                for (var i = ratingIcons.length; i >= currentRate; i--) {
                    $(ratingIcons[i]).css('color', settings.coloroff);
                }
            });
            //paint
            this.each(function () {
                paint($(this));
            });

        }
        if (method == 'set') {
            this.attr('data-rating', options);
            this.each(function () {
                paint($(this));
            });
        }
        if (method == 'get') {
            return this.attr('data-rating');
        }
        function paint(div) {
            rating = parseInt(div.attr('data-rating'));
            div.find("input").val(rating);	//if there is an input in the div lets set it's value
            div.find("span.ratingicon").each(function () {	//now paint the stars

                var rating = parseInt($(this).parent().attr('data-rating'));
                var value = parseInt($(this).attr('data-value'));
                if (value > rating) {
                    $(this).css('color', settings.coloroff);
                }
                else {
                    $(this).css('color', settings.coloron);
                }
            })
        }
    };
}(jQuery));