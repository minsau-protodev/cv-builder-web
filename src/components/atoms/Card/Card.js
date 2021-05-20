import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ className, children }) => {
  const cls = classNames(
    className,
    'bg-white rounded-md shadow-md border-gray-100 border py-3 px-4'
  );
  return <div className={cls}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
