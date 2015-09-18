$(document).ready(function(){

  initPage();

  if($('#checklist-default').length > 0) {
    $('#checklist-default').checklist();
  }

  if($('#checklist-tick-cross').length > 0) {
    $('#checklist-tick-cross').checklist({
      type: 'tickandcross'
    });
  }

});
