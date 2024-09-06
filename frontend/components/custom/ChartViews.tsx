'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

// Mock commuter data for each bus stop (for demonstration purposes)
const commuterData = {
  A: [0, 10, 15, 20, 5, 30, 25, 35, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
  B: [10, 0, 25, 30, 15, 40, 35, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
  C: [15, 25, 0, 35, 20, 45, 40, 50, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165],
  D: [20, 30, 35, 0, 25, 50, 45, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
  E: [5, 15, 20, 25, 0, 35, 30, 40, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155],
  F: [30, 40, 45, 50, 35, 0, 55, 60, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175],
  G: [25, 35, 40, 45, 30, 55, 0, 65, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
  H: [35, 45, 50, 55, 40, 60, 65, 0, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185],
  I: [40, 50, 55, 60, 45, 65, 70, 75, 0, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195],
  J: [50, 60, 65, 70, 55, 75, 80, 85, 95, 0, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205],
  K: [60, 70, 75, 80, 65, 85, 90, 95, 105, 115, 0, 135, 145, 155, 165, 175, 185, 195, 205, 215],
  L: [70, 80, 85, 90, 75, 95, 100, 105, 115, 125, 135, 0, 155, 165, 175, 185, 195, 205, 215, 225],
  M: [80, 90, 95, 100, 85, 105, 110, 115, 125, 135, 145, 155, 0, 175, 185, 195, 205, 215, 225, 235],
  N: [90, 100, 105, 110, 95, 115, 120, 125, 135, 145, 155, 165, 175, 0, 195, 205, 215, 225, 235, 245],
  O: [100, 110, 115, 120, 105, 125, 130, 135, 145, 155, 165, 175, 185, 195, 0, 215, 225, 235, 245, 255],
  P: [110, 120, 125, 130, 115, 135, 140, 145, 155, 165, 175, 185, 195, 205, 215, 0, 235, 245, 255, 265],
  Q: [120, 130, 135, 140, 125, 145, 150, 155, 165, 175, 185, 195, 205, 215, 225, 235, 0, 255, 265, 275],
  R: [130, 140, 145, 150, 135, 155, 160, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 0, 275, 285],
  S: [140, 150, 155, 160, 145, 165, 170, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 0, 295],
  T: [150, 160, 165, 170, 155, 175, 180, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 0],
};

const busStops = Object.keys(commuterData);

const ChartViews = () => {
  const [startStop, setStartStop] = useState(busStops[0]);
  const [endStop, setEndStop] = useState(busStops[1]);
  const [chartData, setChartData] = useState(null);

  const handleSearch = () => {
    const labels = [startStop, endStop];
    const data = [
      commuterData[startStop][busStops.indexOf(endStop)],
      commuterData[endStop][busStops.indexOf(startStop)],
    ];

    setChartData({
      labels,
      datasets: [
        {
          label: 'Number of Commuters',
          data,
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Commuter Data Analysis</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>Select the starting and ending bus stops to see the number of commuters.</p>
      </div>

      {/* Input Form */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <label style={{ marginRight: '15px' }}>
          <span style={{ marginRight: '10px', color: '#333', fontWeight: '500' }}>Start Stop:</span>
          <select value={startStop} onChange={(e) => setStartStop(e.target.value)} style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            {busStops.map((stop) => (
              <option key={stop} value={stop}>
                {stop}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span style={{ marginRight: '10px', color: '#333', fontWeight: '500' }}>End Stop:</span>
          <select value={endStop} onChange={(e) => setEndStop(e.target.value)} style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            {busStops.map((stop) => (
              <option key={stop} value={stop}>
                {stop}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={handleSearch}
          style={{
            marginLeft: '20px',
            padding: '5px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          Search
        </button>
      </div>

      {/* Chart */}
      {chartData && (
        <div style={{ width: '80%', maxWidth: '700px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Commuter Data Between Stops</h2>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
};

export default ChartViews;