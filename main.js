// Household chores games     
var vChores = null
var vScore=0
 var vPlay=null
 var isExtra=null
alert('Welcome to Household Chore Games! Each chores has corresponding points. You have to score 15 points to be able to watch TV' );
var conPlay=confirm('Do you want to play now?')
if (conPlay===true){
    vChores= prompt('Each chores have corresponding points. Type the LETTERS of your choices. A. Help make dinner - 5 pts B. Vaccum living room- 10 pts. C. Laundry - 15 pts. D. Load dishwasher - 10pts')
    if (vChores=='A' || vChores== 'a'){
        vScore=5
        // alert('you can relax and watch TV!')      
    }
    else if (vChores=='B' || vChores=='b')  {
            vScore=10 
    }
    else if (vChores=='C' || vChores=='c'){
        vScore=15 
    } 
    else if (vChores=='D' || vChores=='d'){
        vScore=10 
    }
}else {
    vScore=null
    alert('Goodbye')
    
}// 





if ((vScore<15) && (vScore>0)){
    vPlay=confirm('You needed more points to watch tv. Do you want to play again?')
    if(vPlay===true){
        vChores= prompt('Each chores have corresponding points. Type the LETTERS of your choices. A. Help make dinner - 5 pts B. Vaccum living room- 10 pts. C. Laundry - 15 pts. D. Load dishwasher - 10pts')
        if (vChores=='A' || vChores=='a'){
            vScore=vScore+5    
        } else if (vChores=='B' || vChores=='b') {
            vScore=vScore+10
        } else if (vChores=='C' || vChores=='c') {
            vScore=vScore+15
        } else if (vChores=='D' || vChores=='d') {
            vScore=vScore+10
        }
        
    }else {
        alert('You are not allowed to watch TV!')
    }



    // else (vScore>=15){
}else if (vScore>0){   
  var Again=confirm('You can enjoy watching TV. Do you want ice cream?')
  if (Again===true){  
      var iCream=confirm('You have to put away groceries added to your chores')
      if (iCream){
        isExtra=true
      }
    else{
        alert('You can watch but no ice cream')
    }
    }
//   else {
//       isExtra=false
//   }
}

if (vScore>15){
    isExtra=true
}
else if (vScore===15) {
    isExtra=false
}
if (isExtra) {
    alert('You Rock! You Deserve an ice cream while watching tv!')
} else if ((!isExtra) && (isExtra!=null)){
    alert('You deserve to watch tv!')
}else if (vScore<15){
    alert('No TV for you!')
}