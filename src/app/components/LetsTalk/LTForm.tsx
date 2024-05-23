"use client";
import { sendEmail } from "@/app/utils/emailjs";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import LTButtons from "./LTButtons";
import { Form, Formik } from "formik";

const links = [
  { name: "/linkedin.svg", url: "https://www.linkedin.com/in/yaw-otuo/" },
  { name: "/whatsapp.png", url: "https://wa.me/+233203775123" },
  { name: "/github.png", url: "https://github.com/YawOtuo" },
];

function LTForm() {
  return (
    <div className="w-full bg-transparent max-w-[600px]">
      <div className="flex flex-col gap-5">
        <Formik
          initialValues={{
            fromName: "",
            fromEmail: "",
            message: "",
          }}>
          {({ handleChange, values }) => (
            <Form className="flex flex-col gap-9 ">
              <div className="flex flex-col gap-5">
                <TextInput
                  label="Name"
                  name="fromName"
                  value={values?.fromName}
                  handleChange={handleChange}
                />

                <TextInput
                  label="Email"
                  type="email"
                  name="fromEmail"
                  handleChange={handleChange}
                  value={values?.fromEmail}
                />
                <TextArea
                  label="Message"
                  name="message"
                  handleChange={handleChange}
                  value={values?.message}
                />
              </div>

              <button
                className="flex items-center justify-center py-2  rounded-xl bg-purple1 font-bold text-base hover:scale-[1.02] transition-all"
                type="submit"
                onClick={() =>
                  sendEmail(
                    values?.fromName,
                    values?.message,
                    values?.fromEmail
                  )
                }>
                Let&apos;s talk
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex flex-col gap-5 items-center  justify-center  mt-10 border-0 border-white py-5 rounded-xl ">
        <p className="text-xs">or reach out on</p>{" "}
        <div className="flex items-center gap-2 justify-center w-full">
          {links?.map((r, index: number) => (
            <LTButtons key={index} label={r?.name} url={r?.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LTForm;
