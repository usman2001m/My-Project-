
$(document).ready(function () {
 var counter = 0;

 $("#addrow").on("click", function () {
     var newRow = $("<tr>");
     var cols = "";

     cols += '<td><input type="text" class="form-control" name="Item" placeholder="item' + counter + '"/></td>';
     cols += '<td><input type="text" class="form-control" name="Description" placeholder="description' + counter + '"/></td>';
     cols += '<td><input type="number" class="form-control" name="Quantity" placeholder="quantity' + counter + '"/></td>';
     cols += '<td><input type="number" class="form-control" name="Price" placeholder="price" onblur="findTotal()"' + counter + '"/></td>';
     cols += '<td> </td>';

     cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
     newRow.append(cols);
     $("table.order-list").append(newRow);
     counter++;
 });



 $("table.order-list").on("click", ".ibtnDel", function (event) {
     $(this).closest("tr").remove();       
     counter -= 1
 });


});



function calculateRow(row) {
 var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
 var grandTotal = 0;
 $("table.order-list").find('input[name^="price"]').each(function () {
     grandTotal += +$(this).val();
 });
 $("#grandtotal").text(grandTotal.toFixed(2));
}

function findTotal(){
    var arr = document.getElementsByName('Price');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}



const invoiceForm   = document.forms[0]
            function invoice_generator(){
                 let myform={};
              for (let i= 0; i < invoiceForm.length; i++) {
            //  localStorage
               myform[invoiceForm[i]['name']]=[invoiceForm[i]['value']]}  
              console.log(myform)


// debugger
// function reqListener () {
//   console.log( this.response );
// }
// let mydata = JSON.stringify(myform);
// // console.log(mydata)
// var newXHR = new XMLHttpRequest();
// newXHR.addEventListener( 'load', reqListener );
// // newXHR.open( 'POST', '');
// // newXHR.setRequestHeader('Content-Type', 'application/json');
// // newXHR.send( mydata );
// // console.log(mydata)  
// }     
function myfunction()  {
var aboutdata= document.getElementsByClassName('additionbox');
console.log(aboutdata.querySelector)



for (var i =0; i < aboutdata.length; i++){
  document.getElementsByClassName('additionbox').innerHTML

}


  
}


     

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
'use strict';
window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);
})();
if (true) {}






 



            }