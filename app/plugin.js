/**
 * Created by nalantianyi on 2016/12/16.
 */
(function ($) {
    const shade = "#556b2f";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));