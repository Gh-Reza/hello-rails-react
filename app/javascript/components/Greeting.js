import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div className='container'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default Greeting;

// Command to install redux toolkit: yarn add @reduxjs/toolkit