import React, { useState } from "react";

function BankDetails() {
  const [userDetails, setuserDetails] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    bankCity: "",
    branchName: "",
    relation: "",
    consent: "off",
  });

  //To update all inpute values in userDetails object
  const updateValue = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  //Handling form submit
  const handleForm = (e) => {
    e.preventDefault();
    // checking if any of input value is empty or not.
    //if it is then firing alert
    if (
      userDetails.accountHolderName === "" ||
      userDetails.accountNumber === "" ||
      userDetails.ifscCode === "" ||
      userDetails.bankName === "" ||
      userDetails.branchName === "" ||
      userDetails.relation === "" ||
      userDetails.consent === "off"
    ) {
      alert("Require all input feilds");
      return;
    }

    //fetching all input element //
    let inputs = document.getElementsByClassName("input");
    //fetching consent checkbox, dateElement and  save button
    let consent = document.getElementsByClassName("consent");
    let conentCheckbox = document.querySelector(".consent input");
    let consentDate = document.querySelector(".consent #date");
    let saveButton = document.getElementById("saveButton");

    //Iterating all input elements and changing thier background and disabling thier input fields
    for (let element of inputs) {
      element.style.backgroundColor = "#E4F0EB";
      element.disabled = true;
    }
    //hidding consent checkbox and save button  //
    conentCheckbox.style.display = "none";
    consent[0].style.backgroundColor = "#E4F0EB";
    saveButton.style.display = "none";

    //fetching current date
    let date = new Date();
    //converting into string //
    let stringDate = date.toDateString();
    let finalDate = stringDate.slice(4);
    //putting current date in dateElement //
    consentDate.innerHTML = "FILLED ON " + finalDate;
  };

  return (
    <div
      id="bankDetailForm"
      className=" lg:w-[77.6%]  xl:w-[75%] pb-10 lg:pb-6 w-full space-y-4 px-6 lg:px-10 py-4 pt-8 lg:pt-14"
    >
      <h1 className="text-3xl pl-2 font-bold lg:font-semibold">
        Update Bank Details
      </h1>
      <p className="pl-2 pb-4 lg:w-[90%] ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="px-5 lg:px-8 w-[100%] lg:w-[85%] space-y-5 flex  flex-col gap-x-4 lg:space-y-4 py-4 border-[1px] rounded-md border-[#D3D3D3]">
        <div className="flex flex-col lg:flex-row gap-y-3 lg:items-center">
          <p className="font-bold text-sm  lg:text-base  pl-3 lg:pl-0 lg:w-[50%]">
            ACCOUNT HOLDER NAME
          </p>
          <input
            type={"text"}
            name="accountHolderName"
            onChange={updateValue}
            className=" input lg:w-[50%] w-full   border-[1px] font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Account Holder Name"
            required
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-3   lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            ACCOUNT NUMBER
          </p>
          <input
            type={"text"}
            name="accountNumber"
            onChange={updateValue}
            className="border-[1px] lg:w-[50%] w-full  input font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Account Number"
            required
          ></input>
        </div>{" "}
        <div className="flex flex-col lg:flex-row  gap-y-3  lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            IFSC CODE
          </p>
          <input
            type={"text"}
            onChange={updateValue}
            name="ifscCode"
            className="border-[1px] lg:w-[50%] w-full  input font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="IFSC Code"
            required
          ></input>
        </div>{" "}
        <div className="flex flex-col lg:flex-row  gap-y-3  lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            BANK NAME
          </p>
          <input
            type={"text"}
            onChange={updateValue}
            name="bankName"
            className="border-[1px] input lg:w-[50%] w-full  font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Bank Name"
            required
          ></input>
        </div>{" "}
        <div className="flex flex-col lg:flex-row  gap-y-3  lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            BANK CITY
          </p>
          <input
            type={"text"}
            name="bankCity"
            onChange={updateValue}
            className="border-[1px] input lg:w-[50%] w-full  font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Bank City"
            required
          ></input>
        </div>{" "}
        <div className="flex flex-col lg:flex-row gap-y-3   lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            BRANCH NAME
          </p>
          <input
            type={"text"}
            onChange={updateValue}
            name="branchName"
            className="border-[1px] lg:w-[50%] w-full  input font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Branch Name"
            required
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-3  lg:items-center">
          <p className="font-bold text-sm  lg:text-base pl-3 lg:pl-0 lg:w-[50%]">
            RELATION WITH ACCOUNT HOLDER
          </p>
          <input
            type={"text"}
            name="relation"
            onChange={updateValue}
            className="border-[1px] lg:w-[50%] w-full  input font-semibold rounded-[4px] border-[#D3D3D3] outline-none px-4 py-2 "
            placeholder="Relation with Account Holder"
            required
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-3  ">
          <p className="font-bold text-sm lg:pt-2   lg:text-base pl-3 lg:pl-0   lg:w-[50%]">
            CONSENT
          </p>

          <div className=" consent lg:w-[50%] w-full  space-y-3 px-4 py-2 rounded-[4px]  border-[1px] border-[#D3D3D3]  ">
            <div className="flex  gap-x-2">
              <input
                className="lg:mb-12 mb-16 checkbox w-5"
                onChange={updateValue}
                type={"checkbox"}
                name="consent"
                required
              ></input>
              <p className="text-sm w-[100%]">
                I confirm that the information given in this form is true,
                complete and accurate. I understand that in case of incorrect
                details, Exambazaar will not be responsible for any loss of pay.
              </p>
            </div>
            <p id="date" className="font-bold  text-sm"></p>
          </div>
        </div>
        <div className="justify-end flex ">
          <button
            onClick={handleForm}
            id="saveButton"
            className="bg-[#3AA078]  w-28 h-12 text-white border-none font-semibold rounded-md"
          >
            Save
          </button>
        </div>
      </div>
      <p className="border-b-[1px] lg:w-[85%] w-full text-center py-6 border-[#D3D3D3]">
        THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
        THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
        EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
      </p>
    </div>
  );
}

export default BankDetails;
