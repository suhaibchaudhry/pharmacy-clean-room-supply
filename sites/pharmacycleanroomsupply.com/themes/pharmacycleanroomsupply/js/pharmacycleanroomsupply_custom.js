/***********************************
*     Author: Asad Hasan           *
*     Author: Suhaib Chaudhry      *
***********************************/

(function ($) {
  // Handle user toolbar when user is admin and have admin toolbar enabled.
  Drupal.behaviors.moveSocialLinks = {
  	attach: function(context, settings) {
		    $("a.learn-more-link", context).click(this.clickLearnMore);
  	},
    clickLearnMore: function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.location = $(this).parents(".node-product-display").find("h2 a").attr("href");
    }
 }
})(jQuery);
