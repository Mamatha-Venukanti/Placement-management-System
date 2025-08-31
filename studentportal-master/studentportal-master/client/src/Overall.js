import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip } from 'recharts';

const Overall = () => {
  const [tokenData, setTokenData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/complaints');
      const complaints = response.data;

      const raisedTokens = complaints.filter((complaint) => complaint.status === 'Pending'||'InProgress').length;
      ;
      const resolvedTokens = complaints.filter((complaint) => complaint.status === 'Completed').length;

      setTokenData({
        labels: ['Raised Tokens', 'Resolved Tokens'],
        datasets: [
          {
            data: [
              { name: 'Raised Tokens', value: raisedTokens },
              { name: 'Resolved Tokens', value: resolvedTokens },
            ],
            backgroundColor: ['#000000', '#000000'], // Set both colors to black
            borderColor: '#ffffff', // Set border color to white
            borderWidth: 1,
          },
        ],
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <PieChart width={600} height={600}>
          <Pie dataKey="value" data={tokenData.datasets[0].data} cx={300} cy={300} outerRadius={120} fill="#000000" label />
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default Overall;
