import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import { Input, Textarea } from "@headlessui/react";
import Button from "@mui/material/Button";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import doneAnimation from "../../public/img/done.json";
import Lottie from "lottie-react";
import contactAnimation from "../../public/img/contactAnimation.json";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjkvojqz");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <div
      id="Contact"
      className="pt-5 pb-16 flex items-center justify-between bg-gray-200 overflow-hidden dark:bg-slate-700"
    >
      <div className="  pl-5 pr-5  max-lg:basis-full  basis-2/3">
        <div className="flex gap-3 mb-2 items-center ">
          <MailIcon className="text-slate-800 !text-4xl" />
          <Typography
            className="!font-bold text-slate-800 dark:text-white"
            variant="h4"
          >
            Contact Us
          </Typography>
        </div>
        <Typography
          className="text-slate-800 dark:text-gray-400 mb-5 !text-sm"
          variant="h6"
        >
          This impressive paella is a perfect party dish and a fun meal
        </Typography>

        <form onSubmit={handleSubmit} className="form mt-10">
          <div className="flex items-center flex-wrap gap-5 ">
            <label className="text-slate-800 w-[98px] dark:text-gray-400">
              Your Email
            </label>
            <Input
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              placeholder="Your email"
              className="w-2/3 p-2 data-[focus]:outline-purple-900 data-[hover]:shadow"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex items-center flex-wrap gap-5 mt-10 mb-5 ">
            <label className="w-[98px] dark:text-gray-400">Your message</label>
            <Textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Your Message"
              className=" w-2/3 h-[150px]  resize-none p-2 data-[focus]:outline-purple-900 data-[hover]:shadow"
              id="message"
              name="message"
            ></Textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              disabled={state.submitting}
              className="!bg-purple-800 h-10"
              variant="contained"
            >
              Submit
            </Button>
          </div>
          {state.succeeded && (
            <p className="text-sm flex gap-2">
              <Lottie className="!h-8" loop={1} animationData={doneAnimation} />
              Thanks for joining!
            </p>
          )}
        </form>
      </div>
      <div className="max-lg:!hidden flex items-center justify-center basis-1/3">
        <Lottie className="!h-72" animationData={contactAnimation} />
      </div>
    </div>
  );
};
