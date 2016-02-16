const $ = require('jquery');
const Firebase = require("firebase");
const fireDb = new Firebase("https://flappy-jorge.firebaseio.com/");
let scoreboardRecords = []

var populateScoreboard = () => {
  fireDb.child('scoreboard').on('value', function(scores) {
    $('#scoreboard').empty();
    scores.val().forEach(function(record) {
      scoreboardRecords.push(record);
      appendScore(record);
    })
  })
}

var addScore = (score) => {
  var name
  $('.form').append(`<input id="name" type="text"></input><input id="submit" type="submit"></input>`)
  $('#submit').on('click', function(){
    name = $('#name').val();
    scoreboardRecords.push({name: name, score: score})
    fireDb.set({ scoreboard: scoreboardRecords });
    $('.form').children().remove();
  });
}

var appendScore = (record) => {
  $('#scoreboard').append(
    `<tr>
      <td>${record.name}</td>
      <td>${record.score}</td>
    </td>`
  )
}

module.exports = { addScore: addScore, populateScoreboard: populateScoreboard };
