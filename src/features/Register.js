/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { register } from '../slices/auth';
import { clearMessage } from '../slices/message';

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20,
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) => val && val.toString().length >= 6 && val.toString().length <= 40,
      )
      .required('This field is required!'),
  });

  const handleRegister = (formValue) => {
    const {
      name, email, password,
    } = formValue;

    setSuccessful(false);
    dispatch(register({
      name, email, password,
    }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        navigate('/cells');
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <Field
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <Field
                    name="password_confirmation"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div
            className={
              successful ? 'alert alert-success' : 'alert alert-danger'
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
