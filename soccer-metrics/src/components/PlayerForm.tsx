'use client';

import { useState } from 'react';

export default function PlayerForm({ player }: { player: { id: string, name: string } }) {
  const metrics = ['Technical Skill', 'Physical Fitness', 'Tactical Awareness'];
  const [ratings, setRatings] = useState<{ [metric: string]: number }>({});
  const date = new Date().toLocaleDateString('en-GB');

  const handleChange = (metric: string, value: number) => {
    setRatings(prev => ({ ...prev, [metric]: value }));
  };

  const handleSubmit = () => {
    console.log(`Ratings for ${player.name} on ${date}:`, ratings);
    alert('Ratings submitted!');
  };

  return (
    <>
      <p className="mb-4">
        How well did {player.name} perform on the training day of {date}? (1-5)
      </p>
      <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
        {metrics.map(metric => (
          <div key={metric} className="mb-2">
            <label className="block mb-1">{metric}</label>
            <select
              value={ratings[metric] || 1}
              onChange={e => handleChange(metric, +e.target.value)}
              className="border rounded p-1"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit Ratings
        </button>
      </form>
    </>
  );
}