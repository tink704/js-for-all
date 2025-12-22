        let age = 18;
        let haslicense = false;

        if (age >= 18) {
            console.log("You can drive.");
            if (haslicense) {
                console.log("You have a license.");
            } else {
                console.log("You do not have a license.");
            }
        } else {
            console.log("You must be at least 18 to drive.");
        }

        let age2 =14;
        let school = false;

        if(age2 >= 14){
            console.log("you can start high school.");
            if(school){
                console.log("you have to score good marks.");
            } else {
                console.log("you have to enroll in school.");
            }   
        }
        else {
            console.log("you are too young for high school.");
        }

        let age3 = -1;

        if(age3 >= 18){
            console.log("you are old enough to enter this site.")
        } else if (age3 < 0){
            console.log(" you haven't been born yet.")
        } else if(age3 > 100){
            console.log("you are too old to enter this site.")
        } else{
            console.log("you must be 18+ to enter this site.")
        }