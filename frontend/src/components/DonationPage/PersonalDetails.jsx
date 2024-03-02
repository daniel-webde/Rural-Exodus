import React, { Fragment, useState, useEffect } from "react";

const PersonalDetails = ({ donationAmount, paymentPlan, setDonationAmount }) => {

  const [formData, setFormData] = useState({
    // identity: '',
    email: '',
    paymentPlan: paymentPlan,
    donationAmount: donationAmount
  });

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      paymentPlan: paymentPlan,
      donationAmount: donationAmount
    }));
  }, [donationAmount, paymentPlan]);

  const onChangeHandler = (event) => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };




  const [identity, setIdentity] = useState(0); // Default to individual
  const handleIdentityChange = (event) => {
    setIdentity(parseInt(event.target.value));
  };



  return (
    <div className="flex flex-col px-4 lg:px-6 py-4 border-2 my-4 rounded-lg hover:shadow-md bg-white">
      <h2 className="text-center font-montreal font-bold border-b-2 lg:mx-28">Personal Details</h2>

      <label className="text-sm font-montreal text-gray-500">I am</label>
      <select
        className="rounded-lg text-lg shadow-md ps-4 py-1 text-slate-900 font-montreal text-center"
        id="identity"
        value={identity}
        onChange={handleIdentityChange}
      >
        <option value={0}>an Individual</option>
        <option value={1}>a company or organisation</option>
        <option value={2}>a foundation or trust</option>
      </select>

      {identity === 0 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">First Name</label>
          <input 
            type="text" 
            name="firstname" 
            id="firstname" 
            className="rounded-lg text-lg text-center shadow-md focus:outline-none py-1 text-slate-900 font-montreal" 
            onChange={onChangeHandler}
          />
          <label className="text-sm font-montreal text-gray-500">Last Name</label>
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            className="rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal" 
            onChange={onChangeHandler}
          />
        </Fragment>
      )}

      {identity === 1 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">Company/Organisation name:</label>
          <input 
            type="text" 
            name="companyName" 
            id="companyName" 
            className="rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal" 
            onChange={onChangeHandler}
          />
        </Fragment>
      )}

      {identity === 2 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">Foundation/Trust name:</label>
          <input 
            type="text" 
            name="trustName" 
            id="trustName" 
            className="rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal" 
            onChange={onChangeHandler}
          />
        </Fragment>
      )}

      <label className="text-sm font-montreal text-gray-500">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        className="rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal" 
        onChange={onChangeHandler}
      />

      <p className="text-xs font-montreal py-2 text-center sm:px-14">
        We process your personal data in accordance with our Company's{" "}
        <a href="#" className="text-red-600 border-b-2 hover:text-rose-500">
          Privacy Policy
        </a>
      </p>

      <button 
        type="submit" 
        className="bg-gray-900 text-white font-montreal font-bold text-sm mx-auto px-5 py-2 rounded-lg"
        onClick={() => console.log(formData)}
      >
        {/* Conditionally render the donation button text based on monthly selection */}
        {paymentPlan === 'monthly' ? `DONATE $${donationAmount} Monthly` : `DONATE $${donationAmount}`}
      </button>
    </div>
  );
};
  
export default PersonalDetails;
