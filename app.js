 function choice (){
    let giveChoise = confirm('sorry ! We are still working on this app, for informations about us , kindly contact us! Would you like to mail us?');
    if(giveChoise){
      alert ('Thank you for your interest! Mail us by clicking on "use our Email-address" on the right of your screen!');
      let myContact = document.getElementById("contact");
      myContact.innerHTML= "use our Email-address"
    
    } 
   }


 let signIn = document.getElementById('signin')
   
 function studentSignIn (){
   
  // registration conditions
    const studentName= prompt ('Kindly Type in the username  your Insttitution assigned to you !')
    let allstudents = JSON.parse(localStorage.getItem('registerdIntitutions'));
    console.log(allstudents);
     console.log(localStorage.getItem('registerdIntitutions'));
     let memberString = allstudents[0]['Institution']['Members']['memberNames'];                //document.getElementById("Stlist").value;
     let memberArray = memberString.split(",");
     console.log(memberArray);
     let keyString = allstudents[0]['Institution']['Members']['memberKeys'];
     let keyArray = keyString.split(",");
     console.log(keyArray)
   // console.log(memberStringToArray ()) ;

    if( //studentName.length >= 5 == false 
       //||
        memberArray.includes(studentName)==false ) {
      alert('Sorry The username you typed in is not valid!') 
    }else {
      let reg = prompt('Hello  '  +  studentName  + '!  what Registration Number did your Insttitution assign to you ?' )
    if( reg.length = 7 == false 
      || keyArray.includes(reg) == false){
    alert('Sorry, this registration number is not valid');
    } else{
    let newButton = document.createElement('button');
    newButton.id= 'btn'
    let buttonLink = document.getElementById ("SignInok");
    buttonLink.append(newButton);
    
    newButton.innerHTML = 'VISIT YOUR CAMPUS';
    
    const aboutUs = document.getElementById("about");
    let contact = document.getElementById ('contact');
   const signIn = document.getElementById("signin");
   let accounte = document.getElementById("accounte");
   accounte.innerHTML = '';
   contact.innerHTML = '';
    signIn.innerHTML= '';
    aboutUs.innerHTML='';
    alert('you have signed in seccessfully! Now you can visit your compus!');
    
  }
  
   
   }
   
  }
 

   
     
    
   
    let about = document.getElementById ("camp-about");

   function AboutFromCampus (){
   
      choice ()

}








   function accounteCondition (){
    //let accounte = document.getElementById("accounte");
    let restriction = confirm('Only Institutions can create an accounte! Members of Institution can only sign in with the details their Intitution attributed to them ! If you are an Intstitution, click ok to procede!');
    if (restriction == false){
        event.preventDefault () 
      let orSignIn = confirm('would you like to sign in?');
      if(orSignIn == true){
        studentSignIn () 
        
      } 
    }
    }

    function pseudoAvatar (){
      let nameForAvatar = prompt('welcome to your compus! let us personalize your profile in one click! Please type in your username as last action')
    let allstudents = JSON.parse(localStorage.getItem('registerdIntitutions'));
    console.log(allstudents);
     console.log(localStorage.getItem('registerdIntitutions'));
     let memberString = allstudents[0]['Institution']['Members']['memberNames'];                //document.getElementById("Stlist").value;
     let memberArray = memberString.split(",");
     console.log(memberArray);
     if(memberArray.includes (nameForAvatar) == false){
      //event.preventDefault;
      let tryAgain = confirm('Sorrry , this is not the name you used to sign in! Try again?');
      tryAgain ? pseudoAvatar():backHome();
     // alert('Sorrry , this is not the name you used to sign in, please try again');
     // pseudoAvatar()
     }else {
      let yourAvatar = nameForAvatar.slice(0,1) + nameForAvatar.slice(-1);
      function generateAvatar(
       text = `${yourAvatar}`,
       forgraoundColar = "white",
       backgroundColor = "black"
       ){
       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
       canvas.width = 100;
       canvas.height= 100;
       
       context.fillStyle = backgroundColor;
       context.fillRect(0, 0, canvas.width, canvas.height);
       context.font='bold 75px assistant';
       context.fillStyle = forgraoundColar;
       context.textAlign = 'center'
       context.textBaseline = 'middle'
       context.fillText(text, canvas.width/2, canvas.height/2);
       //document.body.appendChild(canvas);
       //let campusbody = document.getElementById("campus");
       //campusbody.appendChild(canvas);
       //canvas.appendChild(document.getElementById("avatar"));
       
       return canvas.toDataURL("image/png");
       }
       document.getElementById("avatar").src= generateAvatar( `${yourAvatar}` , 'white', '#009578') 

     }
    }

    function backHome(){
     // alert('Good bye!')
     let Campus = document.getElementById ('campus')
      
      let redirectionButton = document.createElement ('button')
      Campus.appendChild(redirectionButton);
      redirectionButton.id = 'fakebutton'
      let force = document.getElementById("forcedHome")
      //buttonFixer.append(redirectionButton)
      force.innerHTML="BACK HOME";
      redirectionButton.append(force)
      let noCompusheader = document.getElementById("compus-header");
      let noCompusdiv = document.getElementById("divCamp")
      //let buttonFixer =document.getElementById("forButton");
      noCompusheader.innerHTML = '';
      noCompusdiv.innerHTML = '';
     
    }
