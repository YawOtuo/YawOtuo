"use client"
import { sendEmail } from "@/app/utils/emailjs";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import LTButtons from "./LTButtons";
import { Form, Formik } from "formik";

const links = [
  { name: "google", url: "https://www.google.com/" },
  { name: "facebook", url: "http://www.facebook.com" },
  { name: "twitter", url: "https://twitter.com/" },
];

function LTForm() {
  return (
    <div className="w-full bg-transparent max-w-[700px]">
      <div className="flex flex-col gap-5">
        <Formik initialValues={{
          fromName:"",
          fromEmail:"",
          message: ""
        }}>
          {({ handleChange, values }) => (
            <Form className="flex flex-col gap-5 ">

              <TextInput label="Full Name" name="fromName"
              value={values?.fromName}
              handleChange={handleChange} />

              <TextInput
                label="Email"
                type="email"
                name="fromEmail"
                handleChange={handleChange}
                value={values?.fromEmail}

              />
              <TextArea label="Message" name="message"
                handleChange={handleChange}
                value={values?.message}
              />

              <button className="flex items-center justify-center py-2 border-2 border-white rounded-md" type="submit" onClick={() => sendEmail(values?.fromName, values?.message, values?.fromEmail)}>
                Send Mail
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex items-center gap-5 mt-5 ">
        {links?.map((r, index: number) => (
          <LTButtons key={index} label={r?.name} url={r?.url} />
        ))}
      </div>
    </div>
  );
}

export default LTForm;
