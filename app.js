/* Form values */
let formValues = {
    name: document.getElementById('victimName'), /* Reciever name input */
    user: document.getElementById('userName'), /* Giver name input */
    date: document.getElementById('userDate'), /* Date input */
    background: document.getElementById('template'), /* Background input */
    formattedDate: "",
    setAllText: function(){
        if(this.date.value){ /* Checks if the date has a value */
            this.formattedDate = this.date.value.split('-');
            this.formattedDate = parseInt(this.formattedDate[1])+"/"+parseInt(this.formattedDate[2])+"/"+this.formattedDate[0];
            certificate.setAllText(this.name.value,this.user.value,this.formattedDate);
        } else {
            certificate.setTextNotDate(this.name.value,this.user.value);
        }
    },
    setBackground: function(){ /* Sets the background to match the form value */
        certificate.setBackground(this.background.value);
    },
    setAll: function(){ /* Sets the background and the text */
        this.setAllText();
        this.setBackground();
    }
};

let certificate = {
    Name: document.getElementById('victim'), /* Reciever name text element */
    user: document.getElementById('user'), // Giver name text element
    date: document.getElementById('notedDate'), // Date text element
    background: document.getElementById('certificateBackground'), // Background text element

    setText: function(element, text){ // Sets the element's text to a string input
        element.innerHTML = text;
    },
    setAllText: function(victimName, userName, date){ // Sets all text elements to match three strings
        if(victimName){
            this.setText(this.Name,victimName);
        }
        if(userName){
            this.setText(this.user,userName);
        }
        this.setText(this.date,date);
    },
    setTextNotDate: function(victimName, userName){ // Sets all text elements excluding the date
        if(victimName){
            this.setText(this.Name,victimName);
        }
        if(userName){
            this.setText(this.user,userName);
        }
    },
    setDate: function(date){ // Sets only the date text element
        this.setText(this.date,date);
    },
    setBackground: function(str){ // Sets the background based on a string input
        this.background.src = "images/"+str+".png"; // Formats the string to look like the image's url
        if(str.includes('Cert')){ // Moves text position based on certificate type
            this.user.style.top = "66%";
            this.date.style.top = "65%";
        } else {
            this.user.style.top = "76%";
            this.date.style.top = "75%";
        }
    },
    print: function(){ // opens the print dialogue
        window.print()
    }
};

function setDate(){ // Sets the date to the current date
    let date = new Date(); // Gets an instance of the Date
    // let now = "test";
    let now = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear(); // Formats a string with the date information
    certificate.setDate(now); // Sets the date to the formatted string
}

function onLoad(){ // Called on first site load
    formValues.setBackground(); // Formats the background so the text is in the correct position
    setDate(); // Sets the date to the current date
}