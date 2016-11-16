$(function(){

/*
var MOCK_QUESTIONS = new Quiz {
  "questions": [
    {
    "Number": 1,
    "question": "What are the components of a nucleotide?",
    "correctAnswer": "deoxyribose sugar, a phosphate and a base"
  },
    {
    "Number": 2,
    "question": "What are the four DNA bases?",
    "correctAnswer": "guanine, cytosine, thymine and adenine"
  },
    {
    "Number": 3,
    "question": "Which base does RNA have instead of thymine?"
    "correctAnswer": "uracil",
  }
  ]
};

var MOCK_QUIZ_DATES = {
  "dates" : [
    {
     "quiz1": "11/15/16"
   },
   {
     "quiz2": "11/22/16"
   },
   {
     "quiz3": "11/29/16"
   }
  ]
};

function getQuizQuestions(callbackFn) {
  setTimeout(function() {
    callbackFn(MOCK_QUESTIONS)
  }, 100);
}

function displayQuizQuestions(data) {
  for (index in data.quizQuestions) {
    $('.quiz').append('<p>'+ data.quizQuestions[index].text + '</p');
  }
}
function getAndDisplayQuizQuestions() {
  getQuizQuestions(displayQuizQuestions);
}

$(function() {
  getAndDisplayQuizQuestions();
})

// select user's date value, determine spaced repetition dates
  $("#submitDate").click(function(e) {
    e.preventDefault();
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var currentDate = year+"-"+(monthIndex + 1)+"-"+day;
    console.log(currentDate);
    function parseDate(str) {
        var mdy = str.split('-');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }

    function daydiff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    }
    var testDate = $("#date").val();
    console.log(testDate);
  //  var currentDate = new Date();
    console.log(currentDate);
  //convert testDate and currentDate to equivalent formats --> need help with this
  alert(daydiff(parseDate(currentDate), parseDate(testDate)));
  //find number of days from currentDate to testDate
  var testDelay = (testDate - currentDate);
  //find number of days to space each review interval by
  var reviewInterval = Math.round(testDelay * 0.15)
  //add reviewInterval to currentDate until you reach testDate
  for (var i = currentDate; i < testDate; i++) {
    var reviewDates = currentDate + reviewInterval;
  }
  // place reviewDates generated in calendar.html -- is it okay/good practice use one js file for multiple html files?
  var dateDisplay = $(".reviewDates").html(reviewDates);
//add button next to each review date allowing user to add reviewDates to Google calendar
  $(dateDisplay).html("<button class='calendarAdd'><a href='#'>Add to Google Calendar</a><button>");
});
// link calendarAdd to google calendar api
/*  $(".calendarAdd").click(function() {
    var CLIENT_ID = '28385772516-6kh9mkc75o2kira2q31i71htifqih87f.apps.googleusercontent.com';
    var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
    function checkAuth() {
      gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope' : SCOPES.join(' '),
        'immediate' : true
      }, handleAuthResult);
    function handleAuthResult(authResult) {
      var authorizeDiv = document.getElementById('authorize-div');
      if (authResult && !authResult.error) {
        authorizeDiv.style.display = 'none';
        loadCalendarApi();}
      else {
        authorizeDiv.style.display = 'inline';
      }
    }
    function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }
    function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', addCalendarEvent);
        }
    function addCalendarEvent() {
      var request = gapi.client.calendar.events.insert({

      })
  }
})
}
*/
//link to quizlet API
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
