import React from 'react';
import InputField from '../../molecules/InputField';
import Card from '../../atoms/Card';
import { Cv } from '../../atoms/Icons';

const Register = () => {
  return (
    <div className="bg-gray-200 min-h-full w-full">
      <div className="flex items-center justify-center h-screen">
        <Card className="w-1/2 px-10 py-8 flex">
          <div className="w-3/5">
            <h2 className="text-4xl font-semibold mb-6">Sign Up</h2>
            <InputField id="username" name="username" label="Username" />
            <InputField id="password" name="password" label="Password" />
            <InputField
              id="password2"
              name="password2"
              label="Confirm password"
            />
            <InputField id="email" name="email" label="Email" />
            <InputField id="firstName" name="firstName" label="First name" />
            <InputField id="lastName" name="lastName" label="Last Name" />
          </div>
          <div className="w-2/5">
            <Cv width="100%" className="ml-7" />
          </div>
        </Card>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
