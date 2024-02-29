/////////////////////// Fonctions //////////////////////////////////
function inscriptionUtilisateur(){
    let user = $("#userRegister").val();
    let email = $("#emailRegister").val();
    let password = $("#passwordRegister").val();
    let passwordVerif = $("#passwordVerifRegister").val();
    var usersSaved = localStorage.getItem("users");

    
    if (!usersSaved) {
      usersSaved = [];
    }else{
        usersSaved=JSON.parse(usersSaved);
    }


    if (user && email && password && passwordVerif) {// si Tous les champs sont remplis
      if (password == passwordVerif) { // si les mots de passe correspondent
        for (let i=0; i<usersSaved.length;i++){
            if(usersSaved[i].user===user){
                var userExist=true;
            }}
        if(!userExist){ // si le nom d'utilisateur n'a pas été trouvé       
        usersSaved.push({ email: email, user: user, password: password });
        localStorage.setItem("users",JSON.stringify(usersSaved));
        alert("Félicitations " + user + " Le compte a bien été créé");
        window.location.href = "signin.html";
        }else{ 
            alert("L'identifiant ou l'adresse e-mail ont déjà été utilisés");            
        }
      } else {
        alert("Les mots de passe ne correspondent pas !");
      }
    } else {
      alert("Tous les champs ne sont pas remplis !");
    }
}

function connexion(){
    var validation=false;
    let user=$("#userSignIn").val();
    let password=$("#passwordSignIn").val();
    var usersSaved = JSON.parse(localStorage.getItem("users"));
    var userLogged=[];
    for (let i=0; i<usersSaved.length;i++){
        if((usersSaved[i].user===user)&&(usersSaved[i].password===password)){
            validation=true;
        }}
    if(validation){
        alert("Bonjour "+ user+ ", vous êtes bien connecté(e)");
        userLogged.push({user:user});
        sessionStorage.setItem("userLogged",JSON.stringify(userLogged));
        window.location.href = "profile.html";



    } else{
        alert("Identifiants incorrects");
    }
     } 


function savePreferences(){
    
}



                       //////////////////////////   MAIN   ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function () {

//////////////// Affichage l'utilisateur Logged

var profileLoggedDiv=$("#profileLogged");
if(profileLoggedDiv.length){
    var userLogged=sessionStorage.getItem("userLogged");
    if(userLogged){
        userLogged=JSON.parse(userLogged);
        $("<h1>").text("Bienvenue "+userLogged[0].user).appendTo("#profileLogged"); // Ajoute l'identifiant sur la page de profil
    }
}


  ///////////////////////////////////////////////////////////////// GESTION UTILISATEURS /////////////////////////////
  $("#registerRegister").click(function (e) {
    console.log("test");
   inscriptionUtilisateur();
  });

  $("#signInSignIn").click(function (e) {
    connexion();
  });

  /////////////////////////////////////////////////////////// LANCER UNE PARTIE ///////////////////////////////////////////////
  $("#play").click(function (e) {
    var choixMemory=$("#memoryProfile").val();
    userLogged.push({choixMemory:choixMemory});
        sessionStorage.setItem("userLogged",JSON.stringify(userLogged));
        console.log(choixMemory);
        console.log(userLogged);
    window.location.href = "play.html";
    console.log("test");
  });

  var nbClick=0;
  var disableClick=false;
  

  $("#card0").click(function (e) { 
    
    if(!disableClick){
    nbClick++;
    console.log("test");
    $("#card0").attr("src","./ressources/animaux/1.webp");
    imageSelected1= $("#card0").attr("src","./ressources/animaux/1.webp")
    setTimeout(function() {
        $("#card0").attr("src","./ressources/question.svg")
        console.log("Après 5 secondes...");
    }, 5000); // 5000 millisecondes = 5 secondes
    clearTimeout();
    
    if(nbClick==2){
        console.log("Vous vous êtes trompés, veuillez patienter 5 secondes");
        disableClick=true;
        setTimeout(function(){
        nbClick=0;
        disableClick=false;
      },5000);
      
      clearTimeout();
      }
  }});
  $("#card1").click(function (e) { 
    if(!disableClick){
    nbClick++;
    console.log("test");
    $("#card1").attr("src","./ressources/animaux/2.webp");
    setTimeout(function() {
        $("#card1").attr("src","./ressources/question.svg")
        console.log("Après 5 secondes...");
    }, 5000); // 5000 millisecondes = 5 secondes
    clearTimeout();
    if(nbClick==2){
        console.log("Vous vous êtes trompés, veuillez patienter 5 secondes");
        disableClick=true;
        setTimeout(function(){
        nbClick=0;
        disableClick=false;
      },5000);
      
      clearTimeout();
      }
  }});
  $("#card2").click(function (e) { 
    if(!disableClick){
    nbClick++;
    console.log("test");
    $("#card2").attr("src","./ressources/animaux/1.webp");
    setTimeout(function() {
        $("#card2").attr("src","./ressources/question.svg")
        console.log("Après 5 secondes...");
    }, 5000); // 5000 millisecondes = 5 secondes
    clearTimeout();
    if(nbClick==2){
        console.log("Vous vous êtes trompés, veuillez patienter 5 secondes");
        disableClick=true;
        setTimeout(function(){
        nbClick=0;
        disableClick=false;
      },5000);
      
      clearTimeout();
      }
  }});




// var click=0;
// var valeur1=3;
// var valeur2=4;



//   $('input[type="checkbox"]').change(function (e){
//     if($(this).is(":checked")){
//         console.log($(this).val());
//         valeur1=$(this).val();
//         click=1;
//     }
//     if(click=1)
//   })
//   if(valeur1==valeur2){
//     alert("Vous avez gagné !");
//   }
  


});
