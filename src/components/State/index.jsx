import React from 'react';
import StateCard from './StateCard';
import { states } from '../../data/states';

const StateList = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {states.map((state) => (
        <StateCard key={state.id} state={state} />
      ))}
    </div>
  );
};

export default StateList;
