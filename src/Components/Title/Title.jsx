// import React from 'react'
// import './Title.css'

// const Title = (subTitle,title) => {
//   return (
//     <div className='title'>
//         <p>{subTitle}</p>
//         <h2>{title}</h2>
//     </div>
//   )
// }

// export default Title
// Title.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Title;

