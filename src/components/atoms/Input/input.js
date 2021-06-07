import React from 'react';

const Input = ({ id, type, ...rest }) => {
  return (
    <input
      className="input border border-gray-400 mb-5 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-white"
      id={id}
      type={type}
      autoFocus
      {...rest}
    />
  );
};

export default Input;
