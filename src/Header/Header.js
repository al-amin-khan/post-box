import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className='App'>
      <h1>Post Box</h1>
      <p>
        <strong>Post box</strong> shows all the post from user and click on each post's title or read more option it will show details of the post and in the bellow post it will show comments of the post. Here all the data is fetched from jsonplaceholder api. 
      </p>
    </div>
  );
};

export default Header;