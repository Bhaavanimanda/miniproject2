let billAmt = document.getElementById("billAmount");
  let percentageTipElement = document.getElementById("percentageTip");
  let tipAmountElement = document.getElementById("tipAmount");
  let totalAmountElement = document.getElementById("totalAmount");
  let errorMsg = document.getElementById("errorMessage");

  function calculateButton() {
      if (billAmt.value === "") {
          errorMsg.textContent = "Please Enter valid input";
      } else if (percentageTipElement.value === "") {
          errorMsg.textContent = "Please Enter valid input";
      } else {
          errorMsg.textContent = "";
          let bill = parseInt(billAmt.value);
          let percentage = parseInt(percentageTipElement.value);

          let tipAmount = (percentage / 100) * bill;
          let totalAmount = bill + tipAmount;

          tipAmountElement.value = tipAmount;
          totalAmountElement.value = totalAmount;


      }

  }