import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import {
  Container, Stack,
} from 'react-bootstrap';
import * as Yup from 'yup';
import logo from '../../wwc.png';

import { login } from '../../slices/auth';
import { clearMessage } from '../../slices/message';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue) => {
    setLoading(true);

    dispatch(login(formValue))
      .unwrap()
      .then(() => {
        navigate('/cells');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Stack
          gap={2}
          className="col col-md-6 col-lg-4 p-4 mx-auto mt-3 text-center"
        >
          <img src={logo} alt="createIcon" className="rounded-circle shadow" style={{ width: '50px', margin: '0 auto' }} />
          <h3>Sign in</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                <Field
                  name="email"
                  type="text"
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
                <button
                  type="submit"
                  className="btn btn-primary btn-block form-control rounded"
                  disabled={loading}
                >
                  {loading && (
                  <span className="spinner-border spinner-border-sm" />
                  )}
                  <span>Login</span>
                </button>
              </div>
              <Link to="/signup">Sign up</Link>
            </Form>
          </Formik>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Login;
