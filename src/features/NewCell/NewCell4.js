import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { createCell } from '../../slices/cells';
import { clearMessage } from '../../slices/message';

const NewCell = () => {
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required!'),
    description: Yup.string().required('This field is required!'),
    // description: Yup.string().test(
    //   'len',
    //   'Must be less than 300 characters',
    //   (val) => val.length <= 300,
    // ),
  });

  const handleLogin = (formValue) => {
    const { title, description } = formValue;
    console.log(title, description);
    setLoading(true);

    dispatch(createCell({ title, description }))
      .unwrap()
      .then(() => {
        navigate('/new');
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
                name="title"
                type="text"
                className="form-control"
                placeholder="Word"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <Field
                name="description"
                type="text"
                className="form-control"
                placeholder="Description"
              />
              <ErrorMessage
                name="description"
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
                <span>Add</span>
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

export default NewCell;
