import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();
      
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  if (!creator) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/">← Back to All Creators</Link>
      
      <div style={{ marginTop: '20px' }}>
        {creator.imageURL && (
          <img 
            src={creator.imageURL} 
            alt={creator.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '20px'
            }}
          />
        )}
        
        <h1>{creator.name}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '20px 0' }}>
          {creator.description}
        </p>
        
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >
          Visit Channel →
        </a>
        
        <Link to={`/edit/${creator.id}`}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}>
            Edit Creator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCreator;