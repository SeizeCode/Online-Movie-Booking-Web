window.onload=function(){//retreive updated cart count from localstorage then replacde the current number of ticketsz
   if(localStorage.getItem('totalincart')<=0){
      let table =document.getElementById('tbody');
     table.innerHTML+=
    '<h1 align="center"><I>No movies in the cart</h1>'
   }
   
   else{
       //t means totalcost
   //totalcost of each movie booked
   var total1=localStorage.getItem('total1');
   var total2=localStorage.getItem('total2');
   var total3=localStorage.getItem('total3');
   var total4=localStorage.getItem('total4');
   var totalamount=parseInt(total1) +parseInt(total2)+parseInt(total3)+parseInt(total4);
   localStorage.setItem('totalamount',totalamount.toFixed(2));
  // document.getElementById('totalamount').innerHTML=localStorage.getItem('totalamount')
   console.log(localStorage.getItem('totalamount'));
   //display movies that have been added to the cart
   document.getElementById('carttickets').innerHTML=localStorage.getItem('totalincart');
   let table =document.getElementById('tbody');
   table.innerHTML+=
   '<tr>'+
   `<td class="" id="" ><button onclick="removemovie()" class="fa fa-remove" style="background-color:red;border:2px oval;border-radius:12px;"></button >'<b>${localStorage.getItem('movieincart')}</b></td>`+//movie name
   
   `<td class="" id=""><b>${localStorage.getItem('ticket_price')}</b></td>`+//unit price
   `<td class="" ><button onclick="descrease1()" class="fa fa-arrow-left" style="background-color:lightblue;border:1px;border-radius:12px;"></button ><b id="q1">${localStorage.getItem('ticketcount1')}</b><button onclick="increase1()"  class="fa fa-arrow-right"  style="background-color:lightblue;border:1px;border-radius:12px;">   </button></td>`+//quanitity
   `<td class="" id=""><b>R<b id="updatedtotal1">${localStorage.getItem('total1')}</b></td>`+//totalcost
   '</tr>'

    //movie 2 //
  table.innerHTML+=
  '<tr>'+
  `<td class="td"  ><button onclick="removemovie()" class="fa fa-remove"  style="background-color:red;border:20px circle;border-radius:12px;"></button >'<b>${localStorage.getItem('movieincart1')}</b></td>`+//movie name
  
  `<td class="td" id="" ><b>${localStorage.getItem('ticket_price1')}</b></td>`+//unit price
  `<td class="" id=""><button onclick="descrease2()" class="fa fa-arrow-left" style="background-color:lightblue;border:1px;border-radius:12px;"></button ><b id="q2">${localStorage.getItem('ticketcount2')}</b><button onclick="increase2()" class="fa fa-arrow-right"  style="background-color:lightblue;border:1px;border-radius:12px;">   </button></td>`+//quanitity
  `<td class="" id=""><b>R<b id="updatedtotal2">${localStorage.getItem("total2")}</b></td>`+//totalcost
  '</tr>'

  //movie 3
  table.innerHTML+=
  '<tr>'+
  `<td class="" id="" ><button onclick="removemovie()" class="fa fa-remove" style="background-color:red;border:2px circle;border-radius:12px;"></button ><b>${localStorage.getItem('movieincart2')}</b></td>`+//movie name
  
  `<td class="" id="" ><b>${localStorage.getItem('ticket_price2')}</b></td>`+//unit price
  `<td class="" id=""><button onclick="descrease3()" class="fa fa-arrow-left" style="background-color:lightblue;border:1px;border-radius:12px;"></button ><b id="q3">${localStorage.getItem('ticketcount3')}</b><button onclick="increase3()" class="fa fa-arrow-right"  style="background-color:lightblue;border:1px;border-radius:12px;">   </button></td>`+//quanitity
  `<td class="" id=""><b>R<b id="updatedtotal3">${localStorage.getItem('total3')}</b></td>`+//totalcost
  '</tr>'
   //movie 4
   table.innerHTML+=
   '<tr>'+
   `<td class="" id="" ><button onclick="removemovie()" class="fa fa-remove" style="background-color:red;border:2px circle;border-radius:12px;"></button >'<b>${localStorage.getItem('movieincart3')}</b></td>`+//movie name
   
   `<td class="" id="" ><b>${localStorage.getItem('ticket_price3')}</b></td>`+//unit price
   `<td class="" id=""><button onclick="descrease4()" class="fa fa-arrow-left" style="background-color:lightblue;border:1px;border-radius:12px;"></button ><b id="q4">${localStorage.getItem('ticketcount4')}</b><button onclick="increase4()" class="fa fa-arrow-right"  style="background-color:lightblue;border:1px;border-radius:12px;">   </button></td>`+//quanitity
   `<td class="" id=""><b>R<b id="updatedtotal4">${localStorage.getItem('total4')}</b></td>`+//totalcost
  
   '</tr>'+ //footer
   '<tr>'+
   `<td class="" id=""><b></b></td>`+
   `<td class="" id=""><b></b></td>`+
   `<td class="" id=""><b>Total:</b></td>`+
   `<td class="" id=""><b>R<i id="totalamount">${localStorage.getItem('totalamount')}</b></td>`+
   '</tr>'
   
   }

 
 

}
//onload ends here

//q means quantity

var q1=localStorage.getItem('ticketcount1');
var q2=localStorage.getItem('ticketcount2');
var q3=localStorage.getItem('ticketcount3');
var q4=localStorage.getItem('ticketcount4');

var total=parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4);

localStorage.setItem('totalincart',total);
document.getElementById('carttickets').innerHTML=localStorage.getItem('totalincart');
console.log(total);


//cart of each movie
//POPULATE EACH CART WITH OBJECTS FROM LOCAL STORAGE AND MYDATA ARRAY
var cart1 =document.getElementById("table1");//1st movie
var cart2 =document.getElementById("table2");//2nd movie
var cart3 =document.getElementById("table3");//3rd movie
var cart4 =document.getElementById("table4");//4th movie
//addm movie and image objects into html card content
cart1.innerHTML+=//first movie
'<div class="container-fluid">'+
`<p>${localStorage.getItem("img1")}</p>`+//image1 in the array localstorage
//`<p class="">${Movies[0].id}</p>`+

`<p><b>${Movies[0].tittle}</b></p>`+
`<p>${Movies[0].description}</p>`+//description
`<div class="container-fluid" align="right">
<p><b>Ticket Price: R${Movies[0].ticket_price.toFixed(2)}</b></p>
</div><hr>`+//ticket price
'<div class="container-fluid">'+//div for buttons
'<input type="button" onclick="showdetails()" data-toggle="modal" data-target="#myModal" value="Show details" class="btn btn-link" style="border:2px solid"data-toggle="modal" data-target="#jsmodal">'+'<br><br>'+
'<input type="button" value="BOOK TICKET" class="btn btn-success" id="Ticket1" >'+
'</div>'


//add movie and image objects into html card-content
cart2.innerHTML+=//2ND movie
'<div class="container-fluid">'+
`<p>${localStorage.getItem("img2")}</p>`+//image 2 in the array
//`<p>${Movies[1].id}</p>`+ Movie unique identifier
`<p><b>${Movies[1].tittle}</b></p>`+
`<p>${Movies[1].description}</p>`+//description
`<div class="container-fluid" align="right"><br>
<p><b>Ticket Price: R${Movies[1].ticket_price.toFixed(2)}</b></p>
</div><hr>`+//ticket price
'<div class="container">'+//div for buttons
'<input type="button"onclick="showdetails()" data-toggle="modal" data-target="#myModal"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
'<input type="button" value="BOOK TICKET" class="btn btn-success" id="Ticket2">'+
'</div>'
'</div>';

//add movie and image objects into html card-content
cart3.innerHTML+=//3RD movie
'<div class="container-fluid">'+
`<p>${localStorage.getItem("img3")}</p>`+
//`<p>${Movies[2].id}</p>`+ Movie unique identifier
`<p><b>${Movies[2].tittle}</b></p>`+
`<p>${Movies[2].description}</p>`+//description
`<div class="container-fluid" align="right"><br>
<p><b>Ticket Price: R${Movies[2].ticket_price.toFixed(2)}</b></p>
</div><hr>`+//ticket price
'<div class="container-fluid">'+//div for buttons
'<input type="button"onclick="showdetails()" data-toggle="modal" data-target="#myModal" id="button1"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
'<input type="button" value="BOOK TICKET" class="btn btn-success" id="Ticket3">'+
'</div>'
'</div>';

//add movie and image objects into html card-content
cart4.innerHTML+=//4TH movie
'<div class="container-fluid">'+
`<p class="">${localStorage.getItem("img4")}</p>`+
//`<p>${Movies[3].id}</p>`+ Movie unique identifier
`<p><b>${Movies[3].tittle}</b></p>`+
`<p>${Movies[3].description}</p>`+//description
`<div class="container-fluid" align="right">
<p><b>Ticket Price: R${Movies[3].ticket_price.toFixed(2)}</b></p>
</div><hr>`+//ticket price
'<div class="container-fluid">'+//div for buttons
'<input type="button"onclick="showdetails()" data-toggle="modal" data-target="#myModal"  value="Show details" class="btn btn-link" style="border:2px solid">'+'<br><br>'+
'<input type="button" value="BOOK TICKET" class="btn btn-success"  id="Ticket4">'+
'</div>'

'</div>';

//onclick function to show movie  details in modal view
function showdetails()//anonymous function
{
   alert("NB!! Movie information coming soon.....");
   
}

let ticketcount1=Movies[0].tickets_in_cart;
ticketcount1=0;
numberInCart=0;
//save movie 1 title,unit price, quantity and total cost into localstorage when the button ia clicked
document.getElementById('Ticket1').addEventListener('click',function(){
   
   numberInCart++;
   //retreive movie one objects from array and store them
  
   ticketcount1++;
   let movie_id=Movies[0].id;//movieID
   let movieInCart=Movies[0].tittle;//MOVIE_TITTLE
   let director=Movies[0].director;//DIRECTOR
   let runtime=Movies[0].runtime;//MOVIE_LENGTH
   let year=Movies[0].release_year;//release year
   let ticket_price=Movies[0].ticket_price;//TICKET PRICE
   let totalCost=ticket_price*ticketcount1;//TOTAL COST OF THE MOVIE BOOKED
   //increase the number of this ticket booked
   //console.log(movie_id,movieInCart,director,runtime,year,ticket_price,numberInCart,totalCost);
   //store objects in localstorage to display in the cart table
   localStorage.setItem('ticketcount1', ticketcount1);
   localStorage.setItem('movieincart',movieInCart);
   localStorage.setItem('totalCost1',totalCost.toFixed(2));
   localStorage.setItem('numberInCart',numberInCart);
   localStorage.setItem('numberInCart',numberInCart);
   localStorage.setItem('ticket_price',ticket_price);
   //store objects for fun
   localStorage.setItem('movie_id',movie_id);
   localStorage.setItem('year',year);
  
   //update the cart number
   document.getElementById('carttickets').innerHTML=localStorage.getItem('numberInCart');
   //document.getElementById('updatedtotal1').innerHTML=localStorage.getItem('total1');
  
});
let ticketcount2=Movies[1].tickets_in_cart;
 //save movie 2 into local storage ///save movie 2 title,unit price, quantity and total cost into localstorage when the button ia clicked
document.getElementById('Ticket2').addEventListener('click',function(){
    
   //retreive movie one objects from array and store them
//  numberInCart++;
numberInCart++;
ticketcount2++;
   let movie_id=Movies[1].id;//movieID
   let movieInCart=Movies[1].tittle;//MOVIE_TITTLE
   let director=Movies[1].director;//DIRECTOR
   let runtime=Movies[1].runtime;//MOVIE_LENGTH
   let year=Movies[1].release_year;//release year
   let ticket_price=Movies[1].ticket_price;//TICKET PRICE
   let totalCost=ticket_price*ticketcount2;//TOTAL COST OF THE MOVIE BOOKED
   //increase the number of this ticket booked
   //console.log(movie_id,movieInCart,director,runtime,year,ticket_price,numberInCart,totalCost);
   //store objects in localstorage to display in the cart table
   localStorage.setItem('ticketcount2',ticketcount2);
   localStorage.setItem('movieincart1',movieInCart);
   localStorage.setItem('totalCost2',totalCost.toFixed(2));
   localStorage.setItem('numberInCart1',numberInCart);
   localStorage.setItem('ticket_price1',ticket_price);
   //store objects for fun
   localStorage.setItem('movie_id1',movie_id);
   localStorage.setItem('year1',year);
  
   //update the cart number
   document.getElementById('carttickets').innerHTML=localStorage.getItem('numberInCart1');
});
let ticketcount3=Movies[2].tickets_in_cart;
////save movie 3 into local storage ///save movie 3 title,unit price, quantity and total cost into localstorage when the button ia clicked
document.getElementById('Ticket3').addEventListener('click',function(){
 numberInCart++;
   //retreive movie one objects from array and store them
   ticketcount3++;
   let movie_id=Movies[2].id;//movieID
   let movieInCart=Movies[2].tittle;//MOVIE_TITTLE
   let director=Movies[2].director;//DIRECTOR
   let runtime=Movies[2].runtime;//MOVIE_LENGTH
   let year=Movies[2].release_year;//release year
   let ticket_price=Movies[2].ticket_price;//TICKET PRICE
   let totalCost=ticket_price*ticketcount3;//TOTAL COST OF THE MOVIE BOOKED
   //increase the number of this ticket booked
   //console.log(movie_id,movieInCart,director,runtime,year,ticket_price,numberInCart,totalCost);
   //store objects in localstorage to display in the cart table
   localStorage.setItem('movieincart2',movieInCart);
   localStorage.setItem('totalCost3',totalCost.toFixed(2));
   localStorage.setItem('numberInCart2',numberInCart);
   localStorage.setItem('ticket_price2',ticket_price);
   localStorage.setItem('ticketcount3',ticketcount3);
   //store objects for fun
   localStorage.setItem('movie_id2',movie_id);
   localStorage.setItem('year2',year);
  
   //update the cart number
   document.getElementById('carttickets').innerHTML=localStorage.getItem('numberInCart2');
});
let ticketcount4=Movies[3].tickets_in_cart;
////save movie 4 into local storage ///save movie 4 title,unit price, quantity and total cost into localstorage when the button ia clicked
document.getElementById('Ticket4').addEventListener('click',function(){
   
   //retreive movie one objects from array and store them
  numberInCart++;
  //ticket in cart
  ticketcount4++;
   let movie_id=Movies[3].id;//movieID
   let movieInCart=Movies[3].tittle;//MOVIE_TITTLE
   let director=Movies[3].director;//DIRECTOR
   let runtime=Movies[3].runtime;//MOVIE_LENGTH
   let year=Movies[3].release_year;//release year
   let ticket_price=Movies[3].ticket_price;//TICKET PRICE
   let totalCost=ticket_price*ticketcount4;//TOTAL COST OF THE MOVIE BOOKED
   //increase the number of this ticket booked
   //console.log(movie_id,movieInCart,director,runtime,year,ticket_price,numberInCart,totalCost);
   //store objects in localstorage to display in the cart table
   localStorage.setItem('ticketcount4',ticketcount4);
   localStorage.setItem('totalCost4',totalCost.toFixed(2));
   localStorage.setItem('numberInCart3',numberInCart);
   localStorage.setItem('ticket_price3',ticket_price);
   //store objects for fun
   localStorage.setItem('movie_id3',movie_id);
   localStorage.setItem('year3',year);
  
   //update the cart number
   document.getElementById('carttickets').innerHTML=localStorage.getItem('numberInCart3');
});

//var updatedtotal1=localStorage.getItem('updatedtotal1');

//leftarrow to decreament for first row in the cart table

function descrease1(){
   
   //retreive information from local storage
   var ticketcount1=localStorage.getItem('ticketcount1');//quantity of first row
   let cartctickets=localStorage.getItem('totalincart'); //total number of tickets in the carts
   var totalamount=localStorage.getItem('totalamount');
   localStorage.setItem('totalamount',(totalamount-150).toFixed(2));
   var ticket_price=150;//ticket price of this.ticket
   //calculate total price of movie 
   var total1=ticketcount1*ticket_price-ticket_price;
   localStorage.setItem('total1',total1.toFixed(2));
   ticketcount1--;//decrease quantity
 
   cartctickets--;//descrease number of tickets in the cart
   //store them into local storage
   localStorage.setItem('ticketcount1',ticketcount1)
   localStorage.setItem('cartctickets',cartctickets)
   //display updated quantity and number of tickets in the cart
   document.getElementById('q1').innerHTML=localStorage.getItem('ticketcount1');
   document.getElementById('carttickets').innerHTML=localStorage.getItem('cartctickets');
   document.getElementById('updatedtotal1').innerHTML=localStorage.getItem('total1');
   document.getElementById('totalamount').innerHTML=localStorage.getItem('totalamount')
//

}

//rightarrow to increase for first row in the cart table
function increase1(){
 
  //retreive information from local storage
  var ticketcount1=localStorage.getItem('ticketcount1');
  var cartctickets=localStorage.getItem('totalincart');
  var totalamount=localStorage.getItem('totalamount');
  localStorage.setItem('totalamount',totalamount);
  //
  var ticket_price=150;//ticket price of this.ticket
  //calculate total price of movie 
  var total=ticketcount1*ticket_price+ticket_price;
  localStorage.setItem('total1',total.toFixed(2));
  ticketcount1++;//increase quantity

cartctickets+1;//incerease tcket
localStorage.setItem('ticketcount1',ticketcount1)//save the current quantity in local storage

localStorage.setItem('cartticket',cartctickets)
//display updated quantity and number of tickets in the cart
document.getElementById('q1').innerHTML=localStorage.getItem('ticketcount1');//didsplay current updated quanityt
document.getElementById('carttickets').innerHTML=localStorage.getItem('cartticket');
//document.getElementById('carttickets').innerHTML=localStorage.getItem('totalincart');
document.getElementById('updatedtotal1').innerHTML=localStorage.getItem('total1');
document.getElementById('totalamount').innerHTML=localStorage.getItem('totalamount')
}

//leftarrow to decreament for 2nd row in the cart table
function descrease2(){
   
    //retreive information from local storage
    var ticketcount2=localStorage.getItem('ticketcount2');
    var cartctickets=localStorage.getItem('totalincart');
    
    var ticket_price=205;//ticketprice of movie
    //calculate total price of movie 
    var total2=ticketcount2*ticket_price-205;
     localStorage.setItem('total2',total2.toFixed(2));
   
  ticketcount2--;//decrease quantity
  
  cartctickets--;;
  
  localStorage.setItem('ticketcount2',ticketcount2)
  localStorage.setItem('cartctickets',cartctickets)//save the current quantity in local storage
  //display updated quantity and number of tickets in the cart
 document.getElementById('q2').innerHTML=localStorage.getItem('ticketcount2');
 document.getElementById('carttickets').innerHTML=localStorage.getItem('cartctickets');
 document.getElementById('updatedtotal2').innerHTML=localStorage.getItem('total2');
}
//rightarrow to increase for 2nd row in the cart table
function increase2(){
  

  //retreive information from local storage
  var ticketcount2=localStorage.getItem('ticketcount2');
  var cartctickets=localStorage.getItem('totalincart');

  var ticket_price=205;
  var total=ticketcount2*ticket_price+ticket_price;
 localStorage.setItem('total2',total.toFixed(2))
ticketcount2++;//increase quantity

cartctickets+1;//incerease tcket
localStorage.setItem('ticketcount2',ticketcount2)//save the current quantity in local storage

localStorage.setItem('cartticket',cartctickets)
//display updated quantity and number of tickets in the cart
document.getElementById('q2').innerHTML=localStorage.getItem('ticketcount2');//didsplay current updated quanityt
document.getElementById('carttickets').innerHTML=localStorage.getItem('cartticket');
document.getElementById('updatedtotal2').innerHTML=localStorage.getItem('total2');
}

//decrease for arrow in row 3 in the cart table
function descrease3(){
    //retreive information from local storage
    var ticketcount3=localStorage.getItem('ticketcount3');
    var cartctickets=localStorage.getItem('totalincart');
    //var ticket_price=localStorage.getItem('ticket_price');
    //var cartctickets=localStorage.getItem('totalincart');
    var ticket_price=180;
    var total3=ticketcount3*ticket_price-180;
     localStorage.setItem('total3',total3.toFixed(2));
    
   
  ticketcount3--;//decrease quantity
  
  cartctickets-1;
  
  localStorage.setItem('ticketcount3',ticketcount3)
  localStorage.setItem('cartctickets',cartctickets)//save the current quantity in local storage
  //display updated quantity and number of tickets in the cart
 document.getElementById('q3').innerHTML=localStorage.getItem('ticketcount3');
 document.getElementById('carttickets').innerHTML=localStorage.getItem('cartctickets');
 document.getElementById('updatedtotal3').innerHTML=localStorage.getItem('total3');
 console.log(localStorage.getItem('total3'))
}
//increase for arrow in row 3 in the cart table
function increase3(){
    //retreive information from local storage
    var ticketcount3=localStorage.getItem('ticketcount3');
    var cartctickets=localStorage.getItem('totalincart');
    var ticket_price=180;
    var total3=ticketcount3*ticket_price+180;
     localStorage.setItem('total3',total3.toFixed(2));
  
  ticketcount3++;//increase quantity
  
  cartctickets+1;//incerease tcket
  localStorage.setItem('ticketcount3',ticketcount3)//save the current quantity in local storage
  
  localStorage.setItem('cartticket',cartctickets)
  //display updated quantity and number of tickets in the cart
  document.getElementById('q3').innerHTML=localStorage.getItem('ticketcount3');//didsplay current updated quanityt
  document.getElementById('carttickets').innerHTML=localStorage.getItem('cartticket');
  document.getElementById('updatedtotal3').innerHTML=localStorage.getItem('total3')
}
//descrease for arrow in row 4 in the cart table
function descrease4(){
   var ticketcount4=localStorage.getItem('ticketcount4');
   var cartctickets=localStorage.getItem('totalincart');
  
   //var cartctickets=localStorage.getItem('totalincart');
   var ticket_price=141;
    var total4=ticketcount4*ticket_price-141;
     localStorage.setItem('total4',total4.toFixed(2));
  
 ticketcount4--;//decrease quantity
 
 cartctickets-1;
 
 localStorage.setItem('ticketcount4',ticketcount4)
 localStorage.setItem('cartctickets',cartctickets)//save the current quantity in local storage
 //display updated quantity and number of tickets in the cart
document.getElementById('q4').innerHTML=localStorage.getItem('ticketcount4');
document.getElementById('carttickets').innerHTML=localStorage.getItem('cartctickets');
document.getElementById('updatedtotal4').innerHTML=localStorage.getItem('total4');
}
//increase for arrow in row 4 in the cart table
function increase4(){
    //retreive information from local storage
    var ticketcount4=localStorage.getItem('ticketcount4');
    var cartctickets=localStorage.getItem('totalincart');
  //
  var ticket_price=141;
    var total4=ticketcount4*ticket_price+141;
     localStorage.setItem('total4',total4.toFixed(2));
  
  ticketcount4++;//increase quantity
  
  cartctickets+1;//incerease tcket
  localStorage.setItem('ticketcount4',ticketcount4)//save the current quantity in local storage
  
  localStorage.setItem('cartticket',cartctickets)
  //display updated quantity and number of tickets in the cart
  document.getElementById('q4').innerHTML=localStorage.getItem('ticketcount4');//didsplay current updated quanityt
  document.getElementById('carttickets').innerHTML=localStorage.getItem('cartticket');
  document.getElementById('updatedtotal4').innerHTML=localStorage.getItem('total4');
}
 
  



