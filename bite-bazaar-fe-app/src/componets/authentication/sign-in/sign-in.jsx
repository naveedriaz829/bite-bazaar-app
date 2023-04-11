import React from "react";
import useSignIn from "./use-sign-in";
import { Formik, Form, Field } from "formik";
import "./sigin-in.css";
import AppAlert from "../../app-alert/app-alert";
import { Link } from "react-router-dom";
import { Alert, Grid } from "@mui/material";

export const SignIn = () => {
  const { initialValuesSignIn, signInSchema, signInHandler, error } =
    useSignIn();

  return (
    <>
      <Grid className="mx-3 mt-3 border-bottom">
        <h1 className="fw-bold text-success">
          Bite <span className="text-secondary">Bazaar</span>
        </h1>
      </Grid>
      <main className="form-signin text-center  mt-5 m-auto">
        <Formik
          initialValues={initialValuesSignIn}
          validationSchema={signInSchema}
          onSubmit={signInHandler}
        >
          {({ errors, touched }) => (
            <Form>
              <h1 className="h3 fw-bold text-center mb-3 fw-normal">
                Please sign in
              </h1>
              <h6 className="text-center text-danger">{error}</h6>

              <div className="form-floating">
                <Field
                  name="email"
                  type="email"
                  className="col-4 field-input"
                  placeholder="Enter Email"
                />
                {errors?.email && touched?.email && (
                  <div className="text-danger">{errors?.email}</div>
                )}
              </div>
              <div className="form-floating my-2">
                <Field
                  name="password"
                  type="password"
                  className="col-4  field-input"
                  placeholder="Password"
                />
                {errors?.password && touched.password && (
                  <div className="text-danger">{errors?.password}</div>
                )}
              </div>
              <div className="flex flex-column">
                <div>

                  <button className="col-4 btn btn-lg btn-success" type="submit">
                    Sign in
                  </button>
                </div>

                <Link to="/signup">
                  <span
                    type="button"
                    className="bottom-3"
                  >
                    Create New Account
                  </span>
                </Link>
              </div>


            </Form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default SignIn;
