
// addEventListener (jenis event, function yang dilakukan)
document.getElementById('registerForm').addEventListener('submit', function (event){

    //preventDefaut --> Mencegah page kita kena refresh
    event.preventDefault();

    let usernameField = document.getElementById('username')
    //sesuain ID dengan ID yang di html
    let pwField = document.getElementById('password')
    let emailField = document.getElementById('email')
    let confirmPwField = document.getElementById('confirmPassword')
    let dobField = document.getElementById('dob')

    let username = usernameField.value 
    let pw = pwField.value 
    let email = emailField.value 
    let confirmPw = confirmPwField.value
    let dob = dobField.value

    // console.log(username)
    // console.log(pw)
    // console.log(email)
    // console.log(confirmPw)
    // console.log(dob)
    // console.log(terms)

    // alert

    if(username.length <= 3){
        alert('Username must consist more than 3 letter')
        return
    }

    // indexOf --> return index dari suatu huruf pertama kali ditemukan, apabila tidak ditemukan, maka returnnya -1
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('Email must be valid')
        return
    }

    if(pw.length < 8){
        alert('Password must contain at least 8 letters')
        return
    }

    if(confirmPw !== pw){
        alert('Confirm Password must be the same as password')
        return
    }

    // Validasi kalo suatu field gaboleh null, kalo yg string, hrs username !== null. Sedangkan DOB boleh tinggal !dob

    if(!dob){
        alert('DOB must be filled')
        return
    }

    //  
    let dobDate = new Date(dob);
    let currDate = new Date();
    // klo new Date(), krn gada parameter, maka akan tampilin date saat ini
    let age = currDate.getFullYear() - dobDate.getFullYear();
    
    let monthDiff = currDate.getMonth - dobDate.getMonth

    if(monthDiff < 0 || (monthDiff == 0 && currDate.getDate() < dobDate.getDate)){
        age --;
    }

    if(age < 18){
        alert('Age must be at least 18 years old')
        return
    }

    alert('Data is valid')

    window.location.href = "../pages/login.html";

})