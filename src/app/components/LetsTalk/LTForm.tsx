"use client";
import { sendEmail } from "@/app/utils/emailjs";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import LTButtons from "./LTButtons";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "/linkedin.svg", url: "https://www.linkedin.com/in/yaw-otuo/" },
  { name: "/whatsapp.png", url: "https://wa.me/+233203775123" },
  { name: "/github.png", url: "https://github.com/YawOtuo" },
];

function LTForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await sendEmail(values.fromName, values.message, values.fromEmail);
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50"
    >
      <div className="flex flex-col gap-6">
        <div className="text-center mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">
            Let&apos;s Start a Conversation
          </h3>
          <p className="text-gray-400 text-sm">
            I&apos;ll get back to you within 24 hours
          </p>
        </div>

        <Formik
          initialValues={{
            fromName: "",
            fromEmail: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, isValid, dirty }) => (
            <Form className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <TextInput
                    label="Name"
                    name="fromName"
                    value={values?.fromName}
                    handleChange={handleChange}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <TextInput
                    label="Email"
                    type="email"
                    name="fromEmail"
                    handleChange={handleChange}
                    value={values?.fromEmail}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TextArea
                    label="Message"
                    name="message"
                    handleChange={handleChange}
                    value={values?.message}
                  />
                </motion.div>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  ❌ Something went wrong. Please try again or reach out via social media.
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting || !isValid || !dirty}
                className={`flex items-center justify-center py-3 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                  isSubmitting || !isValid || !dirty
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl'
                }`}
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Alternative Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-8 pt-6 border-t border-gray-800/50"
      >
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">or reach out directly on</p>
          <div className="flex items-center justify-center gap-4">
            {links?.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <LTButtons label={link?.name} url={link?.url} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LTForm;
