var order1 = {
  orderNumber: 10011,
  customerName: "Muhammed",
  customerMobile: "+911223331",
  totalAmount: 25000,
};

var order2 = {
  orderNumber: 3411,
  customerName: "Rajesh",
  customerMobile: "+94545331",
  totalAmount: 48000,
};

if (order1.totalAmount > order2.totalAmount) {
  console.log(order1.customerName);
  console.log(order1.totalAmount);
}
else{
    console.log(order2.customerName);
    console.log(order2.totalAmount);
}
