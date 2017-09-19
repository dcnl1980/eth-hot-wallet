/**
*
* SendTo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function SendTo({ to, onChangeTo, locked }) {
  const inputStyle = {
    minWidth: 370,
  };

  return (
    <div>
      Send to address: <br />
      <label htmlFor="sendToBox">
        <input
          style={inputStyle}
          id="sendToBox"
          type="text"
          placeholder="Enter destenation address"
          value={to}
          onInput={onChangeTo}
          disabled={locked}
        />
      </label>
    </div>
  );
}

SendTo.propTypes = {
  to: PropTypes.string,
  onChangeTo: PropTypes.func,
  locked: PropTypes.func,
};

export default SendTo;