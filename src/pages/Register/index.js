import React from 'react';
import InputField from '../../molecules/InputField';

const Register = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InputField id="username" name="username" label="Email" />
    </div>
  );
};

Register.propTypes = {};

export default Register;
