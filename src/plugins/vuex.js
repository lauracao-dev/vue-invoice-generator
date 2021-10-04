import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleInvoice: {
      "companyName": "COMPANY NAME",
      "companyDetails": "ABN: 32 123 456 789\n15 Example Rd\nSydney NSW 1234\n(+61) 412 123 123",
      "invoiceOrQuote": "Invoice",
      "invoiceNumber": "4987",
      "dates": [
        {
          "id": 100,
          "value": "Issue Date: 01/09/2021"
        },
        {
          "id": 101,
          "value": "Due Date: 01/09/2021"
        }
      ],
      "customerName": "Jordan Stevenson",
      "customerDetails": "Customer Company\n123 Example Road, Sydney NSW 1234\n(+61) 432 321 321\nj.stevenson@company.com",
      "items": [
        {
          "id": 1,
          "type": "Branding",
          "desc": "Branding & Promotion",
          "unitPrice": 98,
          "quantity": 15
        },
        {
          "id": 2,
          "type": "SMM",
          "desc": "Social media templates",
          "unitPrice": 49,
          "quantity": 14
        },
        {
          "id": 3,
          "type": "Web Design",
          "desc": "Web designing package",
          "unitPrice": 30,
          "quantity": 12
        }
      ],
      "bizRep": "Tom Cook",
      "thanks": "Thanks for your business",
      "fees": [
        {
          "id": 1000,
          "key": "GST",
          "value": -251.6
        },
        {
          "id": 1001,
          "key": "Deposit",
          "value": -1000
        }
      ],
      "note": "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
    }
  }
})