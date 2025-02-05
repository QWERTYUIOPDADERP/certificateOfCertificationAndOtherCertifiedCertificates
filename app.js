let formValues = {
    name: document.getElementById('victimName'),
    user: document.getElementById('userName'),
    date: document.getElementById('userDate'),
    background: document.getElementById('template'),
    setAllText: function(){
        if(this.date.value){
            certificate.setAllText(this.name.value,this.user.value,this.date.value);
        } else {
            certificate.setTextNotDate(this.name.value,this.user.value);
        }
    },
    setBackground: function(){
        console.log(this.background.value);
        certificate.setBackground(this.background.value);
    },
    setAll: function(){
        this.setAllText();
        this.setBackground();
    }
};

let certificate = {
    Name: document.getElementById('victim'),
    user: document.getElementById('user'),
    date: document.getElementById('notedDate'),
    background: document.getElementById('certificateBackground'),

    setText: function(element, text){
        element.innerHTML = text;
    },
    setAllText: function(victimName, userName, date){
        if(victimName){
            this.setText(this.Name,victimName);
        }
        if(userName){
            this.setText(this.user,userName);
        }
        this.setText(this.date,date);
    },
    setTextNotDate: function(victimName, userName){
        if(victimName){
            this.setText(this.Name,victimName);
        }
        if(userName){
            this.setText(this.user,userName);
        }
    },
    setDate: function(date){
        this.setText(this.date,date);
    },
    setBackground: function(str){
        this.background.src = "images/"+str+".png";
        if(str.includes('Cert')){
            this.user.style.top = "66%";
            this.date.style.top = "65%";
        } else {
            this.user.style.top = "76%";
            this.date.style.top = "75%";
        }
    },
    print: function(){
        window.print()
    }
};

function setDate(){
    let date = new Date();
    let now = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();
    certificate.setDate(now);
}

function setCertificate(){
    formValues.setBackground();
}

function onLoad(){
    setDate();
    setCertificate();
}