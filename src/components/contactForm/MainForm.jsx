import React, { useState, useEffect } from "react";

const MainForm = () => {
  // states
  const [nameField, setNameField] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [complaintBox, setComplainBox] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const isFormValid =
      nameField !== "" &&
      email !== "" &&
      emailPattern.test(email) &&
      subject !== "" &&
      complaintBox !== "";
    
     setCanSubmit(isFormValid);
  }, [nameField, email, subject, complaintBox]);

  const nameFieldHandler = (e) => {
    setNameField(e.target.value);
    console.log(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
    console.log(e.target.value);
  };

  const complaintHandler = (e) => {
    setComplainBox(e.target.value);
    console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault("");

    if (!canSubmit) {
      console.log(
        "Form cannot be submitted. Please fill all fields correctly."
      )
      return;
    }
    const userData = {
      nameField: nameField,
      email: email,
      subject: subject,
      complaintBox: complaintBox,
    };

    console.log(userData);

    setNameField("");
    setEmail("");
    setSubject("");
    setComplainBox("")
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name*"
          onChange={nameFieldHandler}
          value={nameField}
          className="w-[32rem] text-darkShade text-sm border px-4 py-3 rounded-md outline-none"
        />
        <input
          type="email"
          placeholder="Your Email*"
          onChange={emailHandler}
          value={email}
          className="w-[32rem] text-darkShade text-sm border px-4 py-3 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Subject*"
          onChange={subjectHandler}
          value={subject}
          className="w-[32rem] text-darkShade text-sm border px-4 py-3 rounded-md outline-none"
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your message here*"
          onChange={complaintHandler}
          value={complaintBox}
          className="w-[32rem] text-darkShade text-sm border px-4 py-3 rounded-md outline-none"
        />
      </div>
      <button
        className={`px-6 py-3 rounded-md text-light mt-4 ${
          canSubmit ? "bg-red" : "bg-lightGrey cursor-not-allowed"
        }`}
        onClick={formSubmitHandler}
        disabled={!canSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default MainForm;
