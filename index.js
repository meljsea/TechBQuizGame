/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question Page</title>
    <link rel="stylesheets" href="/styles.css">
    <script>
        var Countdown;
        var timerInterval;
        var array
        const maxtime = 5 * 60; //time in seconds
        function setCountdownTimer() {
            countdowntimer = maxTime;

        }

        //when the person clicks the begin button the timer starts
        //start time
        let timerInterval = setinterval(updatetimer, 1000);
        function updatetimer() {
            CountdownTimer = CountdownTimer - 1;
        }
        //Question is 
        function SetupQuestions() {
            let question1; = {}
                id: "quest0",
                question: "To select elements with a specific class:",
                answer1: "write a semicolon (;) character, allowed by",
                answer2: "write a period (.) character, followed by the class",
                answer3: "write a period (.) character",
                answer4: "write a comma (,) character",
                correctanswer: 2,
            };

        let question2 = {
            id: "quest1",
            question: "in Css, a color can be specified by using a ",
            answer1: "yes",
            answer2: "no",
            answer3: "null",
            answer4: "null",
            correctanswer: 1

        };
        {
        arrayOfQuestions.push(question1);
        arrayOfQuestions.push(question2);

        console.log("SetupQuestions arrayofQuestions:", arrayOfQuestions);

        };
        function nextQuestion() {
            for( let i = 0; i<arrayOfQuestions. length; i++); }


        function showQuestion(questionindex) {
            
            let questionSection = document.getElementID('question');
            let newQuestion = document.createElement('div');
            newQuestion.id = arrayOfQuestions(questionindex).id;
            newQuestion.innerText = arrayOfQuestions(questionindex).question;
            questionSection.appendChild

        }
        //if question is correct next question and add points and goto the next question
       
        

        //if question is incorrect put a time penalty
        //once all questions have been answered give options
        //once all question have been answered give options to save score
        //if user chooses to save score show the scoreboard
    
    </script>
</head>


<body>
    <div class="welcome">
        <span style="text-align:left">Time Remaining:</span>
        <span style="text-align:right">Score:</span>
    </div>
    <div id="question"> 
        <div> Question: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure enim veniam iusto beatae tempora non perferendis, eius architecto fugiat quo. Nisi quae laudantium architecto ad odit ratione voluptate error?</div>
    <div id="answer1">A1:  Hot> </div>    

    <div id="answer2">A1:  Cold> </div> 

    <div id="answer3">A1:  Wet> </div> 

    <div id="answer4">A1:  Warm> </div> 


    </div>


    <div>
        <p>Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
</body>

</html>
*/