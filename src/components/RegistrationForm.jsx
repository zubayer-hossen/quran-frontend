import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Import
import { baseUrl } from "../services/constant";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const RegistrationForm = () => {
  const [isRegistered, setIsRegistered] = useState(false); // State to handle registration success
  const navigate = useNavigate(); // useNavigate hook for navigation

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),

    // Age validation (required, number)
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required"),

    // Phone validation for Bangladeshi phone numbers (starts with 01 and has 11 digits)
    phone: Yup.string()
      .matches(/^01[3-9]\d{8}$/, "Phone number must be a valid Bangladeshi number")
      .required("Phone is required"),

    // Email validation for valid Gmail address
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a valid Gmail address")
      .required("Email is required"),

    // Surah is optional now
    surah: Yup.string().optional(),
  });

  // **Form Submit Handler**
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${baseUrl}/api/register/something`, values);

      // Show success toast
      toast.success(response.data.message); // Success Toast
      setIsRegistered(true); // Set registration state to true for success view
      resetForm();
    } catch (error) {
      if (error.response) {
        // Handle specific error messages from server
        if (error.response.data.message === "এই ইমেইল বা ফোন নম্বর টি আগে ব্যবহৃত হয়েছে।") {
          toast.error("এই ইমেইল বা ফোন নম্বর টি আগে ব্যবহৃত হয়েছে। নতুন মেইল এবং নম্বর ব্যবহার করুন");
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              {!isRegistered ? (
                <>
                  <h2 className="text-center text-primary mb-4">Quran Competition Registration</h2>

                  <Formik
                    initialValues={{ name: "", age: "", phone: "", email: "", surah: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        {/* Name Field */}
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <Field name="name" className="form-control" placeholder="Enter your full name" />
                          <ErrorMessage name="name" component="div" className="text-danger small" />
                        </div>

                        {/* Age Field */}
                        <div className="mb-3">
                          <label className="form-label">Age</label>
                          <Field name="age" type="number" className="form-control" placeholder="Enter your age" />
                          <ErrorMessage name="age" component="div" className="text-danger small" />
                        </div>

                        {/* Phone Field */}
                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <Field name="phone" className="form-control" placeholder="Enter your phone number" />
                          <ErrorMessage name="phone" component="div" className="text-danger small" />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <Field name="email" type="email" className="form-control" placeholder="Enter your email" />
                          <ErrorMessage name="email" component="div" className="text-danger small" />
                        </div>

                        {/* Surah Field */}
                        <div className="mb-3">
                          <label className="form-label">Preferred Surah</label>
                          <Field name="surah" className="form-control" placeholder="Enter the Surah name" />
                          <ErrorMessage name="surah" component="div" className="text-danger small" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              ) : (
                // Congratulations view after registration
                <div className="congratulations-container text-center">
                  <div className="congratulations-box">
                    <h2 className="text-success congratulations-heading">🎉 Congratulations! 🎉</h2>
                    <p className="congratulations-message">Your registration was successful! 🌟</p>
                    
                    <p>We look forward to your participation in the Quran Competition. Keep up the great work!</p>
                    <button
                      className="btn btn-success mt-4"
                      onClick={() => navigate("/")} // Redirect to homepage
                    >
                      Go to Homepage
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default RegistrationForm;
