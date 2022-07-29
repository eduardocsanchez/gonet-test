
const salesOrders = [{

  'id': 'S1',

  'created': '2020-01-02',

  'quantity': 6

}, {

  'id': 'S2',

  'created': '2020-11-05',

  'quantity': 2

}, {

  'id': 'S3',

  'created': '2019-12-04',

  'quantity': 3

}, {

  'id': 'S4',

  'created': '2020-01-20',

  'quantity': 2

}, {

  'id': 'S5',

  'created': '2019-12-15',

  'quantity': 9

}];



const purchaseOrders = [{

  'id': 'P1',

  'receiving': '2020-01-04',

  'quantity': 4

}, {

  'id': 'P2',

  'receiving': '2020-01-05',

  'quantity': 3

}, {

  'id': 'P3',

  'receiving': '2020-02-01',

  'quantity': 5

}, {

  'id': 'P4',

  'receiving': '2020-03-05',

  'quantity': 1

}, {

  'id': 'P5',

  'receiving': '2020-02-20',

  'quantity': 7

}];





// Sales Orders are orders created by a customer for us to provide a product

// This is the demand.

// 'created': when the sales order was created

// 'quantity': how many items the customer wants



// Purchase Orders are orders created by us to receive a product

// This is the supply.

// 'receiving': when we expect to receive the product

// 'quantity': how many we will be receiving



// We want to supply the products to the customers in the order in which

// they were requested.



// Implement the function 'allocate'.

// The function should return an Array of elements. Each element should include

// -> the ID of the sales order

// -> the date the customer should expect to get the item



// Additional

// - we only send the product once we have enough for that sales order

// - (so if the sales order is for 2, we need to have 2 available before sending)

// - the function should support any number of sales orders or purchase orders

// - to make it simple we only have one product

function allocate(salesOrders, purchaseOrders) {
  var orders = []; //to store the new output format.

  if (typeof salesOrders === 'object' && salesOrders !== null) { //is not an empty object


    let stock = 8; // Additional validation for supply only the sales with enought items on stock.

    //Next function to re-order the sales by creation date to make firstable the sale made first.
    let salesOrderedByDate = salesOrders.sort(
      (objA, objB) => Number(Date.parse(objA.created)) - Number(Date.parse(objB.created)),
    );

    //Loop the salesOrder list and make the new out format validating if there are sufficent items on stock
    salesOrderedByDate.forEach(function (arrayItem) {
      var saleId = arrayItem['id'];
      var saleCreationDate = arrayItem['created'];
      var saleQuantity = arrayItem['quantity'];
      if (saleQuantity <= stock) {// Additional validation

        var orderObj = new Object();
        orderObj["id"] = saleId;
        orderObj["created"] = saleCreationDate;

        orders.push(orderObj);
      }

    });
  } else {
    orders = 'This is not an array objects';
  }
  return orders;
}

//output test
var ord = allocate(salesOrders, purchaseOrders);

document.write('<pre id="whereToPrint"></pre>');
document.getElementById("whereToPrint").innerHTML = JSON.stringify(ord, null, 4);

console.log(ord);