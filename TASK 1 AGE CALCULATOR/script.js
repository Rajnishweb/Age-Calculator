function calculateAge() {
    var dob = document.getElementById("dob").value;

    var birthDate = new Date(dob);
    
    var currentDate = new Date();
    
    var difference = currentDate - birthDate;
    
    var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    
    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
  }
  