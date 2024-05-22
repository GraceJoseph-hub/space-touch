import React, { useState } from "react";

const MainForm = () => {
  const [nameField, setNameField] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [complaintBox, setComplainBox] = "";

  const nameFieldHandler = (e) => {
    setNameField(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const complaintHandler = (e) => {
    setComplainBox(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault("")
  } 
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col gap-6">
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
        onChange={complaintHandler}
        value={complaintBox}
        className="w-[32rem] text-darkShade text-sm border px-4 py-3 rounded-md outline-none"
      >
        Type your message here*
      </textarea>
    </form>
  );
};

export default MainForm;
