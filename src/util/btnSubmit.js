export function btnSubmit() {
    var name, age, gender, male, female;
    name = document.getElementById("inputName").value;
    age = document.getElementById("inputAge").value;
    male = document.getElementById("rdbMale");
    female = document.getElementById("rdbFemale");

    //erase your inputs in text area and uncheck radio button
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";

    //validation
    if (name == "" && age == "" && male.checked == false && female.checked == false) {
        alert("Your name, age and gender must be filled out!");
    }

    //input name condition
    if (name == "") {
        alert("Please input your name.");
        return false;
    } else {
        document.getElementById("name").innerHTML = name;
    }

    //input age condition
    if (age == "") {
        alert("Please input your age.")
        return false;
    } else {
        document.getElementById("age").innerHTML = age;
    }

    //selecting radio button gender condition
    if (female.checked == false && male.checked == false) {
        alert("Please choose a gender.")
        return false;
    }
    if (male.checked) {
        gender = male.value;
        document.getElementById("gender").innerHTML = gender;
    } else if (female.checked) {
        gender = female.value;
        document.getElementById("gender").innerHTML = gender;
    }

}