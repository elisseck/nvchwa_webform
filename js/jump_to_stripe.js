(function ($, Drupal) {
  Drupal.behaviors.myWebformBehavior = {
    attach: function (context, settings) {
      $('html, body').scrollTop($("#wf-crm-billing-items").offset().top);
    }
  };
})(jQuery, Drupal);
