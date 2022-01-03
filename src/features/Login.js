import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { login } from '../slices/auth';
import { clearMessage } from '../slices/message';

const Login = () => {
  const [loading, setLoading] = useState(false);

  // const { isLoggedIn } = useSelector((state) => state.auth);
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
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/cells');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
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
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm" />
                )}
                <span>Login</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
