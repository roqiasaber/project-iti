import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    gap: '16px',
    flexWrap: 'wrap'
  },
  list: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto'
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s'
  },
  dropdown: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '13px',
    color: '#374151',
    cursor: 'pointer',
    background: '#fff'
  }
};

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { name: 'All', count: 12 },
    { name: 'Banking', count: 3 },
    { name: 'Clinics', count: 3 },
    { name: 'Student Affairs', count: 3 },
    { name: 'Service Center', count: 3 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.list}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                ...styles.btn,
                backgroundColor: isActive ? '#0070f3' : '#f3f4f6',
                color: isActive ? '#ffffff' : '#374151',
              }}
            >
              {cat.name}
              <span
                style={{
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#e5e7eb',
                  color: isActive ? '#ffffff' : '#4b5563',
                  fontSize: '11px',
                  padding: '1px 6px',
                  borderRadius: '6px',
                }}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;