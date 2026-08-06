function updateAmount() {
  let service = document.getElementById("service").value;
  let amountField = document.getElementById("amount");
  if (service === "Online Form") amountField.value = 100;
  if (service === "Printing") amountField.value = 50;
  if (service === "Scanning") amountField.value = 10;
  if (service === "Lamination") amountField.value = 25;
}

function placeOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let amount = document.getElementById("amount").value;
  let message = document.getElementById("message").value;

  let text = "New Order%0aName: " + name + "%0aPhone: " + phone + "%0aService: " + service + "%0aAmount: ₹" + amount + "%0aDetails: " + message;

  let whatsappURL = "https://wa.me/917979812374?text=" + text;
  let paymentURL = "upi://pay?pa=7979812374@ptsbi&pn=Ranjeet%20Kumar&am=" + amount + "&cu=INR";

  window.open(whatsappURL, "_blank");
  setTimeout(() => { window.open(paymentURL, "_blank"); }, 2000);
}
