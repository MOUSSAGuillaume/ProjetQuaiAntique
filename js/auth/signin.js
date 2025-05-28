const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSignIn = document.getElementById('btnSignin');

btnSignin.addEventListener('click', checkCredentials);

function checkCredentials() {
    //ici, il faudra appeler l'API pour vérifier les credentials en BDD

    if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
        //Ici faudra recuperer le vrai token
        const token = "lkeiofivbiviuhotgoitnhbtgibhoinviornvroinrfvrnogvnronoiroi";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "client", 7);
        window.location.replace("/"); // Redirection vers la page de compte
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}