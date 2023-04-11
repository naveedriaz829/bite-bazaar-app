import React from "react";
import "./sign-up.css";
import { Field, Form, Formik } from "formik";
import useSignUp from "./use-sign-up";
import AppAlert from "../../app-alert/app-alert";
import { Grid } from "@mui/material";

export const SignUp = () => {

  const { initialValuesSignUp, signUpSchema, signUpHandler, error } = useSignUp();

  return (
    <>
      <Grid className="mx-3 mt-3 border-bottom">
        <h1 className="fw-bold text-success">
          Bite <span className="text-secondary">Bazaar</span>
        </h1>
      </Grid>
      <div className="container ">
        {error && <div class="alert col-3 position-absolute top-2 end-0 alert-warning alert-dismissible fade show" role="alert">
          {error}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        <main className="form-signin w-50 mt-5 m-auto">
          <Formik
            initialValues={initialValuesSignUp}
            validationSchema={signUpSchema}
            onSubmit={signUpHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <h1 className="h3 text-center mb-3 fw-normal">Please Sign Up</h1>
                <div className="form-floating mb-2">
                  <Field name='name' type='text' className='col-12 field-input' placeholder="Name" />
                  {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                </div>
                <div className="form-floating">
                  <Field name='email' type='email' className='col-12 field-input' placeholder="Enter Email" />
                  {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                </div>
                <div className="form-floating my-2">
                  <Field name='password' type='password' className='col-12  field-input' placeholder='Password' />
                  {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}
                </div>
                <div className="form-floating my-2">
                  <Field name='confirmpassword' type='password' className='col-12  field-input' placeholder=' Confirm Password' />
                  {errors.confirmpassword && touched.confirmpassword && <div className='text-danger'>{errors.confirmpassword}</div>}
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up</button>
              </Form>)}
          </Formik>
        </main>

      </div>
    </>
  );
};

export default SignUp;
