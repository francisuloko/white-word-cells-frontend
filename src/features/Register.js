/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import {
  Container, Stack,
} from 'react-bootstrap';
import * as Yup from 'yup';
import logo from '../wwc.png';

import { register } from '../slices/auth';
import { clearMessage } from '../slices/message';

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <>
      <Container>
        <Stack
          gap={2}
          className="col col-md-6 col-lg-4 p-4 mx-auto mt-3 border border-1 rounded shadow text-center"
        >
          <img src={logo} alt="createIcon" style={{ width: '80px', margin: '0 auto' }} />
          <h2>Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form>
              <div>
                <div className="form-group">
                  <Field
                    name="name"
                    type="text"
                    className="form-control my-2"
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
                    className="form-control my-2"
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
                    className="form-control my-2"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary btn-block form-control">
                    Sign Up
                  </button>
                </div>
              </div>
              <Link to="/login">Sign in</Link>
            </Form>
          </Formik>

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
        </Stack>
      </Container>
    </>
  );
};

export default Register;
