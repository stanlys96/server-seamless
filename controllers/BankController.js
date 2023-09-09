const axiosCustom = require("../utils/axios");

class BankController {
  static async getBankInquiry(req, res, next) {
    try {
      const inquire = await axiosCustom.post("/bank-account-inquiry", req.body);
      return inquire.data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = BankController;
