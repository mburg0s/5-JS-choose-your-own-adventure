// Household chores games.
// if the score 15 then can watch tv
// if the score is < 15 will ask to do another chores
// if more than 15 deserves to have an ice cream!
var vChores = null
var vScore=0
 var vPlay=null
 var isExtra=null
alert('Welcome to Household Chore Games! Each chores has corresponding points. You have to score 15 points to be able to watch TV' );
var conPlay=confirm('Do you want to do Chores now?')
if (conPlay===true){
    vChores= prompt('Each chores have corresponding points. Type the LETTERS of your choices. A. Help make dinner - 5 pts B. Vaccum living room- 10 pts. C. Laundry - 15 pts. D. Load dishwasher - 10pts')
    if (vChores=='A' || vChores== 'a'){
        vScore=5
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
    
}





if ((vScore<15) && (vScore>0)){
    vPlay=confirm('You got ' + vScore + '. You needed more points to watch tv. Do yo want to add chores?')
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



}else if (vScore>0){   
  var Again=confirm('You scored '+ vScore+ '. You can enjoy watching TV. Do you want ice cream?')
  if (Again===true){  
      var iCream=confirm('You have to put away groceries added to your chores')
      if (iCream){
        isExtra=true
      }
    else{
        vScore=null
        alert('You score ' + vScore +'. You can watch but no ice cream')
        
    }
    }
}

if (vScore>15){
    isExtra=true
}
else if (vScore===15) {
    isExtra=false
}
if (isExtra) {
    alert('You Rock!  You scored ' + vScore+ ' and you Deserve an ice cream while watching tv!')
} else if ((!isExtra) && (isExtra!=null)){
    alert('You deserve to watch tv!')
}else if ((vScore<15) && (vScore==null)){
    alert('No TV for you!')
}