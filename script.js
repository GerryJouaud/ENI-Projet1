
//////////////////////// Fonctions //////////////////////////////////



/////////////////////////////    MAIN   /////////////////////////////


$(function(){

    ///////////////////////////////////////////////////////////////// GESTION UTILISATEURS /////////////////////////////

        // localStorage.setItem("userId","gerry");
        // let donnee=localStorage.getItem("nom");
        // console.log(donnee)

        // localStorage.removeItem("userId");
        // localStorage.removeItem("email");

        let usersID=localStorage.getItem("userId"); // on charge les utilisateurs dans le local storage
        let usersMail=localStorage.getItem("email"); // on charge les mails dans le local storage
   
       $("#registerRegister").click(function (e) {  
        let user=$("#userRegister").val();
        let email=$("#emailRegister").val();
        let password=$("#passwordRegister").val();
        let passwordVerif=$("#passwordVerifRegister").val();
        
        if(user&&email&&password&&passwordVerif){ // si Tous les champs sont remplis
            if(password==passwordVerif){    // si les mots de passe correspondent
                    if(usersID&&usersMail){ // Si local storage déjà existant
                            if(usersID.includes(user)){
                                alert("L'identifiant "+user+" existe déjà !");                  
                            } else{
                                var okUser=true;
                            }
                            if(usersMail.includes(email)){
                                    alert("L'adresse email "+email+" existe déjà !");
                            }else{
                                var okMail=true; 
                            }
                            if(okMail&&okUser){
                                    localStorage.setItem("userId",usersID+", "+user);
                                    localStorage.setItem("email",usersMail+", "+email);
                                    alert("Félicitations "+ user +" Le compte a bien été créé");
                                    window.location.href = "signin.html";
                                }
                
                    }else{ // sinon on créé le local storage
                        localStorage.setItem("userId",user);
                        localStorage.setItem("email",email);
                        alert("Félicitations "+ user +" Le compte a bien été créé");
                        window.location.href = "signin.html";

                    }
                }else{
                    alert("Les mots de passe ne correspondent pas !")
                }
        }else{
            alert("Tous les champs ne sont pas remplis !");
        }
});

       
       console.log(usersID);
       console.log(usersMail);

       ////////////////////////////////////////////////////////// Reconnaissance Utilisateur ///////////////////////////////////////////////
       $("#play").click(function (e) { 
            let user=$("#userProfile").val();   
        if(user&&usersID.includes(user)){
            console.log("ok");
            window.location.href = "play.html";
        } else{
            alert("Le compte n'existe pas !")
        }
        
       });

       $("#signInSignIn").click(function (e) { 
        let email=$("#emailSignIn").val();    //////////////////bug ici 
        if(email&&usersMail.includes(email)){
            console.log("ok");
            window.location.href= "profile.html";
        } else{
            alert("Le compte n'existe pas !")
        }
        
       });
    })
