import { Link } from 'react-router-dom';

const Card = ({ creator }) => {
  // Debug: log the creator data
  console.log('Card creator data:', creator);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '300px',
      minWidth: '280px' // Ensure minimum width
    }}>
      {creator.imageURL && (
        <img 
          src={creator.imageURL} 
          alt={creator.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '5px',
            marginBottom: '15px'
          }}
        />
      )}
      
      {/* Make sure name is clearly visible */}
      <h3 style={{
        margin: '0 0 10px 0',
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 'bold'
      }}>
        {creator.name || 'No Name'}
      </h3>
      
      <p style={{ 
        color: '#666', 
        fontSize: '14px', 
        marginBottom: '15px',
        lineHeight: '1.4'
      }}>
        {creator.description || 'No description'}
      </p>
      
      <div style={{ marginBottom: '15px' }}>
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#007bff', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Visit Channel →
        </a>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to={`/creator/${creator.id}`}>
          <button style={{ 
            padding: '8px 16px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            View
          </button>
        </Link>
        <Link to={`/edit/${creator.id}`}>
          <button style={{ 
            padding: '8px 16px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;