import React, { useState } from 'react';
import ServiceHeader from '../componentsServices/ServiceHeader';
import CategoryFilter from '../componentsServices/CategoryFilter';
import ServiceCard from '../componentsServices/ServiceCard';
import RequestServiceBanner from '../componentsServices/RequestServiceBanner';

const servicesData = [
  {
    id: 1,
    category: 'Banking',
    title: 'Account Services & Loans',
    provider: 'National Bank of Egypt',
    description: 'Open accounts, apply for personal or home loans, request bank statements, and consult with financial advisors.',
    location: 'Nasr City, Cairo',
    duration: '20-30 min',
    waitTime: '8 min',
    rating: 4.8,
    reviewsCount: '1,420',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 2,
    category: 'Clinics',
    title: 'General Medicine Consultation',
    provider: 'Cairo University Hospital',
    description: 'Consult with general practitioners and specialists for routine checkups, chronic disease management, and referrals.',
    location: 'Giza, Cairo',
    duration: '15-25 min',
    waitTime: '12 min',
    rating: 4.7,
    reviewsCount: '2,310',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 3,
    category: 'Student Affairs',
    title: 'Enrollment & Registration',
    provider: 'Cairo University — Student Affairs',
    description: 'Handle semester enrollment, course add/drop requests, academic transcripts, and student ID renewals.',
    location: 'Giza, Cairo',
    duration: '10-20 min',
    waitTime: '15 min',
    rating: 4.5,
    reviewsCount: '830',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 4,
    category: 'Service Center',
    title: 'Utility Bill & Tax Payments',
    provider: 'Cairo Government Service Center',
    description: 'Pay electricity, gas, water, and telecom bills. Apply for property tax certificates and other government documents.',
    location: 'Heliopolis, Cairo',
    duration: '10-15 min',
    waitTime: '20 min',
    rating: 4.3,
    reviewsCount: '540',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 5,
    category: 'Banking',
    title: 'Trade Finance & Treasury',
    provider: 'Banque Misr',
    description: 'Letters of credit, foreign exchange consultations, wire transfers, and corporate treasury management services.',
    location: 'Downtown, Cairo',
    duration: '30-45 min',
    waitTime: '5 min',
    rating: 4.6,
    reviewsCount: '760',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1657978837950-03646a7c7b9e?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 6,
    category: 'Clinics',
    title: 'Pharmacy & Prescription Dispensing',
    provider: 'Ain Shams University Hospital',
    description: 'Collect prescribed medications, speak with clinical pharmacists about dosage, interactions, and treatment plans.',
    location: 'Abbassia, Cairo',
    duration: '5-10 min',
    waitTime: '3 min',
    rating: 4.9,
    reviewsCount: '1,890',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 7,
    category: 'Student Affairs',
    title: 'Graduation & Document Requests',
    provider: 'Alexandria University — Student Affairs',
    description: 'Request graduation certificates, equivalency letters, study verification documents, and official academic records.',
    location: 'Shatby, Alexandria',
    duration: '15-30 min',
    waitTime: '25 min',
    rating: 4.4,
    reviewsCount: '420',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1721702754494-fdd7189f946c?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 8,
    category: 'Service Center',
    title: 'Passport Renewal & Visa Services',
    provider: 'Ministry of Interior — Passport Office',
    description: 'Renew passports, apply for emergency travel documents, and inquire about visa processes and entry permits.',
    location: 'Nasr City, Cairo',
    duration: '20-40 min',
    waitTime: '35 min',
    rating: 4.1,
    reviewsCount: '3,200',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 9,
    category: 'Banking',
    title: 'Mortgage & Home Finance',
    provider: 'Housing & Development Bank',
    description: 'Apply for home purchase loans, review mortgage options, submit property valuations, and consult housing finance advisors.',
    location: 'Maadi, Cairo',
    duration: '45-60 min',
    waitTime: '12 min',
    rating: 4.5,
    reviewsCount: '610',
    isFullyBooked: true,
    image: 'https://images.unsplash.com/photo-1758598497476-c4a474397d9e?w=600&h=380&fit=crop&auto=format',
  },

  {
    id: 10,
    category: 'Clinics',
    title: 'Specialist Outpatient Clinic',
    provider: 'El-Demerdash Hospital',
    description: 'See cardiologists, neurologists, orthopedic surgeons, and other specialists. Bring referral letter from your GP.',
    location: 'Ramses, Cairo',
    duration: '20-35 min',
    waitTime: '18 min',
    rating: 4.6,
    reviewsCount: '980',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1629909614456-6b1c5c94cecc?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 11,
    category: 'Student Affairs',
    title: 'Scholarship & Financial Aid',
    provider: 'Ain Shams University — Student Affairs',
    description: 'Apply for merit scholarships, need-based grants, tuition waivers, and on-campus accommodation assistance.',
    location: 'Abbassia, Cairo',
    duration: '20-30 min',
    waitTime: '10 min',
    rating: 4.3,
    reviewsCount: '290',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1696395050055-eb7a315bb1cb?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: 12,
    category: 'Service Center',
    title: 'Vehicle Registration & Licensing',
    provider: 'Traffic Department Service Center',
    description: 'Renew vehicle licenses, transfer ownership, request replacement plates, and pay traffic fines in one visit.',
    location: 'Shoubra, Cairo',
    duration: '15-25 min',
    waitTime: '22 min',
    rating: 4.2,
    reviewsCount: '1,760',
    status: 'Today',
    image: 'https://images.unsplash.com/photo-1758691737278-3af15b37af48?w=600&h=380&fit=crop&auto=format',
  },
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      service.title.toLowerCase().includes(query) ||
      service.provider.toLowerCase().includes(query) ||
      service.location.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '32px 16px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
       <ServiceHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
          Showing <strong style={{ color: '#0f172a' }}>{filteredServices.length}</strong> services
        </div>
        
        {/* Responsive Grid System */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <RequestServiceBanner />
      </div>
    </div>
  );
};

export default ServicesPage;