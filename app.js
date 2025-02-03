let formValues = {
    name: document.getElementById('victimName'),
    user: document.getElementById('userName'),
    date: document.getElementById('userDate'),
    setAllText: function(){
        certificate.setAllText(this.name.value,this.user.value,this.date.value);
    }
};

let certificate = {
    Name: document.getElementById('victim'),
    user: document.getElementById('user'),
    date: document.getElementById('notedDate'),
    setText: function(element, text){
        element.innerHTML = text;
    },
    setAllText: function(victimName, userName, date){
        this.setText(this.Name,victimName);
        this.setText(this.user,userName);
        this.setText(this.date,date);
    },
    print: function(){
        print()
    }
};