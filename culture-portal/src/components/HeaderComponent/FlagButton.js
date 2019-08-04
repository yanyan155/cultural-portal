import React from 'react';

const Flagbutton = props => {
  const { callback, lang, flag, country } = props;
  return (
    <button
      type="button"
      onClick={callback}
      className="dropdown-item"
      value={lang}
      href="/"
    >
      <img
        className="flag-image"
        src={flag}
        width="25"
        height="25"
        alt={country}
      />
    </button>
  );
};

export default Flagbutton;
