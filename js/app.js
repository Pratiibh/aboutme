console.log('Welcome to my Guessing Game!');
        var name = prompt('What is your name?');
        var lname = name.toLowerCase();
        var j = 0
        console.log(lname)

        alert('Hi ' + name + ', it is nice to meet you!');
        console.log('Asked for a name, result: ' + name);

        var response = prompt('Do I have piercings? (Yes/No)');
        var lresponse = response.toLowerCase();
        if (lresponse === 'yes'){
            alert('Correct!');
            j++
        }
        else if(lresponse === 'no'){
            alert('Wrong!');
        }
        else {
            alert('I don\'t understand.');
        }
        console.log('asked if I had piercings, response was ' + lresponse);


        var response = prompt('Do I like dogs? (Yes/No)');
        var lresponse = response.toLowerCase();
        if (lresponse === 'yes'){
            alert('Correct!')
            j++
        }
        else if(lresponse === 'no'){
            alert('Wrong!')
        }
        else {
            alert('Yes or no answers only please.');
        }
        console.log('asked if I like dogs, response was ' + lresponse);

        var response = prompt('Do I like cats? (Yes/No)');
        var lresponse = response.toLowerCase();
        if (lresponse === 'yes'){
            alert('Correct!')
            j++
        }
        else if(lresponse === 'no'){
            alert('Wrong!')
        }
        else {
            alert('Yes/no answers only please.');
        }
        console.log('asked if I like cats, response was ' + lresponse);

        var response = prompt('Do I own any pets? (Yes/No)');
        var lresponse = response.toLowerCase();
        if (lresponse === 'no'){
            alert('Correct!')
            j++
        }
        else if(lresponse === 'yes'){
            alert('Wrong!')
        }
        else {
            alert('Yes/no answers only please.');
        }
        console.log('asked if I own pets, response was ' + lresponse);

        var response = prompt('Am I able to/be allowed to own a pet? (Yes/No)');
        var lresponse = response.toLowerCase();
        if (lresponse === 'no'){
            alert('Correct!')
            j++
        }
        else if(lresponse === 'yes'){
            alert('Wrong!')
        }
        else {
            alert('Yes/no answers only please.');
        }
        console.log('asked if I would be able to own any pets, response was ' + lresponse);

         var age = prompt('How old do you think I am?');
    
        if (age <= 20){
            alert('Your guess of '+ age + ' was low!');
            console.log('asked for an age, result : ' + age);
        }
        else if(age >= 22){
            alert('Your guess of ' + age + ' was high!')
        }
        if(age - 21 === 0){
            alert('You got it!')
            j++
        }
        else if ((age - 21 >= 1 && age - 21 <= 5) ||( age - 21 <= -1 && age - 21 >= -5)){
            alert('But you were close!')
        }

        var actualAge = '21';
        var guesses = 3;
        for(var i = 0; i < guesses; i++){ 
            var ageGuess = prompt('Take a guess!') 
            console.log('tried to guess age again, result : ' + ageGuess)
            if(ageGuess < actualAge){
                alert('Too low!')
            }
            else if(ageGuess > actualAge){
                alert('Too high!')
            }
            else if(ageGuess === actualAge){
                alert('You got it!')
                j++
            console.log('You successfully guessed my age!')
            break;
            }
        }

        var dataHolder = ['Canada', 'India', 'UK'];
        var sixGuess = 6;
        alert('Can you guess the names of the countries I have visited?')
        for(var i = 0; i < sixGuess; i++){
            console.log('Guess #' + i);
            var countryGuess = prompt('Take a guess!')
            console.log('attempt to guess country, result : ' + countryGuess)
            if(countryGuess === dataHolder[0] || countryGuess === dataHolder[1] || countryGuess === dataHolder[2]){
                alert('Correct answer!  The full list of correct answers is: ' + dataHolder)
                j++
                break;
            } else if(i === 5){
                alert('You ran out of guesses!  The full list of correct answers is: ' + dataHolder)
                break;
            }
                else {alert('Wrong!')}
            }
        
        if(j <= 3){
            alert('You only answered ' + j + ' of the 7 questions correctly!  Better luck next time!')
        } else if((j >= 4) && (j <= 5)){
            alert('Not bad!  You answered ' + j + ' of the 7 questions correctly!')
        } else {
            alert('Wow!  You answered ' + j + ' of the 7 questions correctly!  You know me so well!')
        }
        

    
