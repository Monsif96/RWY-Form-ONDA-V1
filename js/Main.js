
function Pickup() { 

// <!--  Form 1............................................................................. -->
    var Id = document.getElementById("idplace").value;
    //var Id = document.getElementById("idplace").required;
    var Idpiste = document.getElementById("idpiste").value;
    var lrc_1 = document.getElementById("1LRC").value;
    var time = document.getElementById("time").value;
    //console.log(time);
    var MM = time.slice(5, 7);
    //console.log(MM);
    var DD = time.slice(8, 10);
    //console.log(DD);
    var HH = time.slice(11, 13);
    //console.log(HH);
    var mm = time.slice(14, 16);
    //console.log(mm);
    TIME=MM+DD+HH+mm;
    console.log(TIME);
    
// <!-- Form 2............................................................................. -->
    var RWYCC1 = document.getElementById("RWYCC1").value;
    var RWYCC2 = document.getElementById("RWYCC2").value;
    var RWYCC3 = document.getElementById("RWYCC3").value;

// <!-- Form 3............................................................................. -->
    var pRWYCC1 = document.getElementById("pRWYCC1").value;
    var pRWYCC2 = document.getElementById("pRWYCC2").value;
    var pRWYCC3 = document.getElementById("pRWYCC3").value;

// <!-- Form 4............................................................................. -->
    var Desc1 = document.getElementById("Desc1").value;
    var Desc2 = document.getElementById("Desc2").value;
    var Desc3 = document.getElementById("Desc3").value;

// <!-- Form 5............................................................................. -->
    var epaisseur1 = document.getElementById("epaisseur1").value;
    var epaisseur2 = document.getElementById("epaisseur2").value;
    var epaisseur3 = document.getElementById("epaisseur3").value;

// <!-- Form 6............................................................................. -->

    var largeur1 = document.getElementById("largeur1").value;

// <!-- .....................................-__-........................................ -->

// <!-- Form 1............................................................................. -->
    var longueur = document.getElementById("longueur").value;
    var lrc_2 = document.getElementById("2LRC").value;

// <!-- Form 2............................................................................. -->

    var neige = document.getElementById("neige").value;

// <!-- Form 3............................................................................. -->
    var sable = document.getElementById("sable").value;
    var lrc_3 = document.getElementById("3LRC").value;

// <!-- Form 4............................................................................. -->
    var chimie = document.getElementById("chimie").value;
    var lrc_4 = document.getElementById("4LRC").value;

// <!-- Form 5............................................................................. -->
    var RWYcongere = document.getElementById("RWYcongere").value;
    var Dis1 = document.getElementById("Dis1").value;
    var lrc_5 = document.getElementById("5LRC").value;
    var lrc_6 = document.getElementById("6LRC").value;

// <!-- Form 6............................................................................. -->
    var TWYcongere = document.getElementById("TWYcongere").value;
    var Dis2 = document.getElementById("Dis2").value;
    var lrc_7 = document.getElementById("7LRC").value;
    
// <!-- Form 7............................................................................. -->
    var RWYcongere2 = document.getElementById("RWYcongere2").value;
    var lrc_8 = document.getElementById("8LRC").value;

// <!-- Form 8............................................................................. -->
    var TWY = document.getElementById("TWY").value;
    var TWYstate = document.getElementById("TWYstate").value;
// <!-- Form 9............................................................................. -->

        var AIREstate = document.getElementById("AIREstate").value;

// <!-- Form 10............................................................................. -->
    var Extra = document.getElementById("Extra").value;


    // console.log(Id, Idpiste, lrc_1, time, RWYCC1, pRWYCC1, Desc3)
    // eel.Processing(Id, Idpiste, time, lrc_1, RWYCC1, RWYCC2, RWYCC3, pRWYCC1, pRWYCC2, pRWYCC3,Desc1 ,Desc2, Desc3, epaisseur1, epaisseur2, epaisseur3, largeur1, longueur, lrc_2, neige, sable, lrc_3, chimie, lrc_4, RWYcongere, Dis1, lrc_5, lrc_6, TWYcongere, Dis2, lrc_7, RWYcongere2, lrc_8, TWY, TWYstate, AIREstate, Extra )(Result)

// <!-- Textarea............................................................................. -->

    // <!-- First Section ............................................................................. -->

        msg1= Id+" "+TIME+" "+Idpiste+lrc_1+" ";

        if (Array.from(RWYCC1).length >= 1 ) {
            msg1=msg1+RWYCC1;
        }

        if (Array.from(RWYCC2).length >= 1 ) {
            msg1=msg1+"/"+RWYCC2;
        }

        if (Array.from(RWYCC3).length >= 1 ) {
            msg1=msg1+"/"+RWYCC3+" ";
        }

        if (Array.from(pRWYCC1).length >= 1 ) {
            msg1=msg1+pRWYCC1;
        }

        if (Array.from(pRWYCC2).length >= 1 ) {
            msg1=msg1+"/"+pRWYCC2;
        }

        if (Array.from(pRWYCC3).length >= 1 ) {
            msg1=msg1+"/"+pRWYCC3+ " ";
        }

        if (Array.from(epaisseur1).length >= 1 ) {
            msg1=msg1+epaisseur1;
        }

        if (Array.from(epaisseur2).length >= 1 ) {
            msg1=msg1+"/"+epaisseur2;
        }

        if (Array.from(epaisseur3).length >= 1 ) {
            msg1=msg1+"/"+epaisseur3+ " ";
        }

        if (Array.from(Desc1).length >= 1 ) {
            msg1=msg1+" "+Desc1;
        }

        if (Array.from(Desc2).length >= 1 ) {
            msg1=msg1+"/"+Desc2;
        }

        if (Array.from(Desc3).length >= 1 ) {
            msg1=msg1+"/"+Desc3+" ";
        }

         if (Array.from(largeur1).length >= 1 ) {
            msg1=msg1+largeur1;
        }
    //console.log(msg1);
    localStorage.setItem("SEC1", msg1);
    
    // <!-- Second Section  ............................................................................. -->
        msg2="";
        if (Array.from(longueur).length >= 1 ) {
            msg2="RWY "+Idpiste+lrc_2+" LDA RÉDUITE À "+longueur+". ";
        }

        if (Array.from(neige).length >= 1 ) {
            msg2=msg2+neige+". ";
        }

        if (Array.from(sable).length >= 1 ) {
            msg2=msg2+"RWY "+sable+lrc_3+" SABLE NON ADHÉRENT. ";
        }

        if (Array.from(chimie).length >= 1 ) {
            msg2=msg2+"RWY "+chimie+lrc_4+" TRAITÉE CHIMIQUEMENT. ";
        }

        if (Array.from(Dis1).length >= 1 ) {
            msg2=msg2+"RWY "+RWYcongere+lrc_5+" CONGÈRE "+Dis1+lrc_6+" FM CL. ";
        }

        if (Array.from(Dis2).length >= 1 ) {
            msg2=msg2+"TWY "+TWYcongere+" CONGÈRE "+lrc_7+Dis2+" FM CL. ";
        }

        if (Array.from(RWYcongere2).length >= 1 ) {
            msg2=msg2+"RWY "+RWYcongere2+lrc_8+" CONGÈRES ADJACENTS. ";
        }

        if (Array.from(TWYstate).length >= 1 ) {
            msg2=msg2+"TWY "+TWY+" "+TWYstate+". ";
        }

        if (Array.from(AIREstate).length >= 1 ) {
            msg2=msg2+"AIRE DE TRAFIC "+AIREstate+" MÉDIOCRE. ";
        }

        if (Array.from(Extra).length >= 1 ) {
            msg2=msg2+Extra+".\n ";
        }
    //console.log(msg2);
    localStorage.setItem("SEC2", msg2);

    // <!-- RCR Message  ............................................................................. -->

        msg3=msg1+'\n'+msg2;
    //console.log(msg3);
    localStorage.setItem("SEC3", msg3);


}

function Result (x) {
    var span = document.getElementById("state");
    span.textContent = x;
    console.log(x);
}

function Pic () {
    document.getElementById("state").href="Message.html";
}

