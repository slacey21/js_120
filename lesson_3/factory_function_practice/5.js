// Update the createInvoice function so that it can add payment(s) to invoices. Use the following code as a guideline:
function createInvoice(services) {
  let invoice = {
    phone: 3000,
    internet: 5500,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum += payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };

  if (services) {
    Object.keys(services).forEach(key => {
      invoice[key] = services[key];
    });  
  }

  return invoice;
  
}

function createPayment(services) {
  let payment = {
    phone: 0,
    internet: 0,
    amount: null,
    total: function() {
      if (this.amount) {
        return this.amount;
      } else {
        return this.phone + this.internet;
    }}
  };

  if (services) {
    Object.keys(services).forEach(key => {
      payment[key] = services[key];
    });
  }

  return payment;

}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0