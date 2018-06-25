
$(document).ready(function(){
  $('input[type="checkbox"]').change(function(e) {
    var checked = $(this).prop("checked"),
    container = $(this).parent();

    container.find('input[type="checkbox"]').prop({
      checked: checked 
    });
    
    checkSiblings(container);

    function checkSiblings(el) {
      var parent = el.parent().parent(),
      all = true;
      el.siblings().each(function() {
      return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
      });

      if (all && checked) {
        parent.children('input[type="checkbox"]').prop({
        checked: checked });
        checkSiblings(parent);
      } else if (all && !checked) {
        parent.children('input[type="checkbox"]').prop("checked", checked);
        checkSiblings(parent);
      } 
      else {
        el.parents("li").children('input[type="checkbox"]').prop({
    checked: true});
      }
    }
  }); 
});