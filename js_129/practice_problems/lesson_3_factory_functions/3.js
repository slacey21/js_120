function createInvoice(services = {}) {
  let phoneService = 3000;
  if (services.hasOwnProperty("phone")) {
    phoneService = services.phone;
  }

  let internetService = 5500;
  if (services.hasOwnProperty("internet")) {
    internetService = services.internet;
  }

  return {
    phone: phoneService,
    internet: internetService,

    total() {
      return this.phone + this.internet;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000