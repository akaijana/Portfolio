import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "37b18311-e6a9-42a8-99b6-f8d8ed6537de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
     if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
  id="contact"
  className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-cover bg-center "
>
  <h4 className="text-center mb-2 text-lg">
    Connect with me
  </h4>

  <h2 className="text-center text-5xl">
    Get in touch
  </h2>

  <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
    I would love to hear from you! If you have any questions, comments, or
    feedback, please use the form below.
  </p>

  <form
    className="max-w-2xl mx-auto"
    onSubmit={onSubmit}
    
  >
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8">
      <input
        type="text"
        placeholder="Enter Your Name"
        required
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
        name="name"
      />

      <input
        type="email"
        placeholder="Enter Your Email"
        required
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
        name="email"
      />
    </div>

    <textarea
      rows="6"
      placeholder="Enter your message"
      required
      className="w-full p-4 mb-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
      name="message"
    />

    <button
      type="submit"
      className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition-transform duration-500 hover:scale-105 cursor-pointer"
    >
      Submit now
    </button>

    <p className="mt-4">{result}</p>
  </form>
</div>

  )
}

export default Contact