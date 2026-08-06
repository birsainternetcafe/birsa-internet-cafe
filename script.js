function updateAmount() {
  let service = document.getElementById("service").value;
  let amountField = document.getElementById("amount");
  if (service === "Online Form") amountField.value = 100;
  if (service === "Printing") amountField.value = 50;
  if (service === "Scanning") amountField.value = 10;
  if (service === "Lamination") amountField.value = 25;
}

async function placeOrder() {

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let amount = document.getElementById("amount").value;

  if (!name || !phone || !service) {
    alert("Please fill all fields");
    return;
  }

  // 🔥 SAVE TO FIREBASE
  await db.collection("orders").add({
    name: name,
    phone: phone,
    service: service,
    amount: amount,
    time: new Date()
  });

  alert("Order Saved Successfully!");

  // WhatsApp message
  let msg = `New Order\nName: ${name}\nPhone: ${phone}\nService: ${service}\nAmount: ₹${amount}`;
  window.open("https://wa.me/917979812374?text=" + encodeURIComponent(msg));

}
