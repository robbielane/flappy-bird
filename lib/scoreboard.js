const $ = require('jquery');
const Firebase = require("firebase");
const fireDb = new Firebase("https://flappy-jorge.firebaseio.com/");
let scoreboardRecords = []
let sortedScores = []

var populateScoreboard = () => {
  fireDb.child('scoreboard').on('value', function(scores) {
    $('#scoreboard').empty();
    sortedScores = sortScores(scores.val());
    sortedScores.forEach(function(record) {
      scoreboardRecords.push(record);
      appendScore(record);
    })
  })
}

var addScore = (score) => {
  var name
  if (score > sortedScores[4].score) {
    $('.form').append(`<input id="name" type="text"></input><input id="submit" type="submit"></input>`)
    $('#submit').on('click', function(){
      name = $('#name').val();
      sortedScores.push({name: name, score: score});
      sortScores(sortedScores);
      fireDb.set({ scoreboard: sortedScores.slice(0, 5) });
      $('.form').children().remove();
    });
  }
}

var appendScore = (record) => {
  $('#scoreboard').append(
    `<tr>
      <td>${record.name}</td>
      <td>${record.score}</td>
    </td>`
  )
}

var sortScores = (scores) => {
  let sorted = scores.sort( (a, b) => {
    return b.score - a.score;
  });
  return sorted;
}

module.exports = { addScore: addScore, populateScoreboard: populateScoreboard };
