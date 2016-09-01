$(function(){
  $("#flashcard").click(function() {
  var params = {
    scope: 'read write_set write_group',
    client_id: 'Nfdd9syE3S',
    response_type: 'code',
    state: 'random'
  };
  $.post('https://api.quizlet.com/2.0/sets', params, function(start){
  })
  })
})
