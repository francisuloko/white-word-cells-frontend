import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import { fetchUser, updateUser } from '../../slices/user';
// import { Trash } from 'react-bootstrap-icons';
import AlertContext from '../Alerts/AlertProvider';

const Profile = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const alert = useContext(AlertContext);
  const { name, email } = useSelector((state) => state.user);
  const params = {
    name,
    email,
    password: '',
    newPassword: '',
    confirm: '',
  };

  const [userObject, setUserObject] = useState(params);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserObject({
      ...userObject,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleSubmit = (userObject) => {
    if (userObject.name) {
      dispatch(updateUser(userObject)).then(
        alert.success('Profile update succesful!'),
      );
    } else {
      alert.success('Name can\'t be blank');
    }
  };

  return (
    <Container>
      <Stack
        gap={2}
        className="col-md-6 col-lg-4 p-3 pb-4 mx-auto mt-3 position-relative"
      >
        <h2>Update profile</h2>
        <Form.Control
          name="name"
          type="text"
          value={userObject.name}
          onChange={handleChange}
          size="lg"
        />
        <Form.Control
          name="email"
          type="text"
          value={userObject.email}
          onChange={handleChange}
          size="lg"
          disabled
        />
        <Form.Control
          name="password"
          type="password"
          value={userObject.password}
          onChange={handleChange}
          size="lg"
          placeholder="Old Password"
        />
        <Form.Control
          name="newPassword"
          type="password"
          value={userObject.newPassword}
          onChange={handleChange}
          size="lg"
          placeholder="New password"
        />
        <Form.Control
          name="confirm"
          type="password"
          value={userObject.confirm}
          onChange={handleChange}
          size="lg"
          placeholder="Confirm new password"
        />
        <Button variant="primary" onClick={() => handleSubmit(userObject)}>
          Update
        </Button>
      </Stack>
    </Container>
  );
};

export default Profile;
