import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <div className="display_flex">
          <img
            className="ui image"
            style={{ width: '400px', height: '400px' }}
            src="https://res.cloudinary.com/store-manager/image/upload/v1550391228/undraw_page_not_found_su7k.svg"
          />
        </div>

        <div className="white_color">
          <h1>Oops looks like you are lost</h1>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
