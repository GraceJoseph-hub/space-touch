import React from 'react'
import MainForm from './MainForm';

const ContactForm = () => {
  return (
    <div className="flex justify-between w-full p-20 bg-light">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-semibold">Get in touch</h2>
        <p className="text-grey">
          Hi there, We are available 24/7 by social media, e-mail or <br /> by
          phone. Drop us line so we can talk futher about that.
        </p>
        <div>
          <p className="text-[1rem] font-semibold">Email</p>
          <p className="text-grey text-sm">spacetouchtravel@gmail.com</p>
        </div>
        <div>
          <p className="text-[1rem] font-semibold">Visit Us</p>
          <p className="text-grey text-sm">
            Shop 1 Rufus Laniyan Estate, Idera Bus Stop, <br /> Ikorodu road, Lagos,
            Nigeria.
          </p>
        </div>
        <div>
          <p className="text-[1rem] font-semibold">Contact</p>
          <p className="text-grey text-sm">+2347060531170</p>
        </div>
      </div>
      <MainForm />
      
    </div>
  );
}

export default ContactForm