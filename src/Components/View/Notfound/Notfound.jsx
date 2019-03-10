import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <div className="not-found">
          <div className="align-image">
            <img
              className="ui image"
              style={{ width: '400px', height: '400px' }}
              src="https://res.cloudinary.com/dx8yi1fsi/image/upload/v1552161739/undraw_page_not_found_su7k.svg"
            />
            <h2>Oops looks like you are lost</h2>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
