import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Sauce from '../components/Sauce';

const Home = () => {
  const { loading, data } = useQuery(GET_ME);
  const hotsauces = data?.product || [];
    // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <Sauce hotsauces={hotsauces} />}</div>
    </main>
  );
};

export default Home;