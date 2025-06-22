import { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select();
      
      setCreators(data || []);
    };

    fetchCreators();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Creators</h2>
      
      {creators.length === 0 ? (
        <p>No creators found. Add some creators to get started!</p>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {creators.map(creator => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;