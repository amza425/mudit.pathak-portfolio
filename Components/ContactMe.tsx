import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:muditpathak2003@gmail.com?subject=${formData.subject}&body=
            Hi, my name is ${formData.name}. ${formData.message}. ${formData.email}`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center 
                    md:text-left md:flex-row
                    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px]
                        text-gray-500 text-2xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-{#C60001}/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#C60001] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+825-882-3435</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#C60001] h-7 w-7 animate-pulse" />
            <p className="text-2xl">muditpathak2003@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#C60001] h-7 w-7 animate-pulse" />
            <p className="text-2xl">2312, 1620 70th st S.E.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#C60001] py-5 px-10 rounded-md
                            text-white font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
