import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check required fields
    if (!creator.name || !creator.url || !creator.description) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Prepare data for insert - only include the fields we want to set
    const creatorData = {
      name: creator.name.trim(),
      url: creator.url.trim(),
      description: creator.description.trim()
    };
    
    // Only include imageURL if it's not empty
    if (creator.imageURL && creator.imageURL.trim()) {
      creatorData.imageURL = creator.imageURL.trim();
    }
    
    console.log('Submitting creator:', creatorData);
    
    try {
      const { data, error } = await supabase
        .from('creators')
        .insert([creatorData])
        .select(); // This returns the inserted data
      
      if (error) {
        console.error('Supabase error:', error);
        alert(`Database error: ${error.message}`);
      } else {
        console.log('Creator added successfully:', data);
        navigate('/');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Creator</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label>Name *:</label>
          <input
            type="text"
            name="name"
            value={creator.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>

        <div>
          <label>URL *:</label>
          <input
            type="url"
            name="url"
            value={creator.url}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>

        <div>
          <label>Description *:</label>
          <textarea
            name="description"
            value={creator.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>

        <div>
          <label>Image URL (optional):</label>
          <input
            type="url"
            name="imageURL"
            value={creator.imageURL}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>

        <button 
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        >
          Add Creator
        </button>
      </form>
    </div>
  );
};

export default AddCreator;