import React from 'react';

const getCategoryColor = (category) => {
  switch (category) {
    case 'Banking': return '#0284c7';
    case 'Clinics': return '#10b981';
    case 'Student Affairs': return '#4f46e5';
    case 'Service Center': return '#f59e0b';
    default: return '#0284c7';
  }
};

const ServiceCard = ({ service }) => {
  const themeColor = getCategoryColor(service.category);

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    }}>
      <div>
        {/* Card Media */}
        <div style={{ position: 'relative', height: '180px', width: '100%' }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span style={{
            position: 'absolute', top: '12px', left: '12px', padding: '4px 12px',
            borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: '#fff',
            backgroundColor: themeColor
          }}>
            {service.category}
          </span>
          <span style={{
            position: 'absolute', top: '12px', right: '12px', background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(4px)', color: '#ffffff', padding: '4px 10px',
            borderRadius: '20px', fontSize: '11px', fontWeight: '500'
          }}>
            Wait ~{service.waitTime}
          </span>
        </div>

        {/* Card Body */}
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: 0 }}>{service.title}</h3>
            {service.status && (
              <span style={{
                fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '12px',
                backgroundColor: service.status === 'Today' ? '#ecfdf5' : '#eff6ff',
                color: service.status === 'Today' ? '#10b981' : '#2563eb'
              }}>
                • {service.status}
              </span>
            )}
          </div>

          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 10px 0' }}>{service.provider}</p>
          <p style={{
            fontSize: '12px', color: '#4b5563', margin: '0 0 14px 0', lineHeight: '1.4',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>
            {service.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px', fontSize: '12px', color: '#6b7280' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{service.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Avg. duration: {service.duration}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
            <span style={{ color: '#f59e0b' }}>★ ★ ★ ★ ★</span>
            <span style={{ fontWeight: '600', color: '#111827' }}>{service.rating}</span>
            <span style={{ color: '#9ca3af' }}>· {service.reviewsCount} reviews</span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div style={{ padding: '0 16px 16px 16px' }}>
        <button
          disabled={service.isFullyBooked}
          style={{
            width: '100%', padding: '10px', borderRadius: '10px', border: 'none',
            fontSize: '13px', fontWeight: '600', color: service.isFullyBooked ? '#9ca3af' : '#ffffff',
            backgroundColor: service.isFullyBooked ? '#e5e7eb' : themeColor,
            cursor: service.isFullyBooked ? 'not-allowed' : 'pointer'
          }}
        >
          {service.isFullyBooked ? 'Fully Booked' : 'Book Now →'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;