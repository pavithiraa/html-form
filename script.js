var row=1;
var entry=document.getElementById('entry');
entry.addEventListener('click',displayDetails());
function displayDetails(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var gender=document.getElementById('gender').value;
    var pcode=document.getElementById('pcode').value;
    var adress=document.getElementById('adress').value;
    var fchoice=document.getElementById('food').value;
    var state=document.getElementById('state').value;
    var cname=document.getElementById('cname').value;
   


    // if(!fname || !lname ||!gender || !pcode || !adress1 || !adress2  || !fchoice || !state || !cname){
    //     alert("Please fill all the boxes");
    //     return;
    // }
    var display=document.getElementById('display');

    var newRow=display.insertRow(row);
    
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
 
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);
    var cell8=newRow.insertCell(7);

     cell1.innerHTML=fname;
     cell2.innerHTML=lname;
     cell3.innerHTML=gender;
     cell4.innerHTML=pcode;
     cell5.innerHTML=adress;
     
     cell6.innerHTML=fchoice;
     cell7.innerHTML=state;
     cell8.innerHTML=cname;

row++;
}