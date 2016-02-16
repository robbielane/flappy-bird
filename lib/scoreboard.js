const $ = require('jquery');

var addScore = (score) => {
  var name
  $('.form').append(`<input id="name" type="text"></input><input id="submit" type="submit"></input>`)
  $('#submit').on('click', function(){
    name = $('#name').val();
    appendScore(name, score);
    $('.form').children().remove();
  });
}

var appendScore = (name, score) => {
  $('#scoreboard').append(
    `<tr>
      <td>${name}</td>
      <td>${score}</td>
    </td>`
  )
}

module.exports = { addScore: addScore };
