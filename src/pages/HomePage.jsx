import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero, About, Services, Community, Testimonials, CTAFinal } from '../components/home';
import { useApi } from '../hooks/userApi';
import dataService from '../services/dataService';

const HomePage = () => {
  // Fetch data from API
  const getStats = useCallback(() => {
    return dataService.getGlobalStats();
  }, []);
  
  const { data: stats, loading: statsLoading } = useApi(
    getStats,
    null,
    true
  );

  const getTestimonials = useCallback(() => {
    return dataService.getTestimonials();
  }, []);
  
  const { data: testimonials, loading: testimonialsLoading } = useApi(
    getTestimonials,
    null,
    true
  );

  const getServices = useCallback(() => {
    return dataService.getServices();
  }, []);
  
  const { data: services, loading: servicesLoading } = useApi(
    getServices,
    null,
    true
  );

  // Setup scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Retirer les dépendances pour éviter les re-runs inutiles

  return (
    <>
      <Helmet>
        <title>100% ACADEMY - Apprends, progresse et réussis</title>
        <meta
          name="description"
          content="Rejoins une communauté de 2000+ apprenants passionnés. Cours de soutien, formations en ligne et IA tuteur pour transformer ton parcours académique."
        />
        <meta name="keywords" content="formation, cours en ligne, soutien scolaire, IA tuteur, éducation, Cameroun" />
        <meta property="og:title" content="100% ACADEMY - Apprends, progresse et réussis" />
        <meta property="og:description" content="Rejoins une communauté de 2000+ apprenants passionnés" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero />
      <About />
      <Services services={services} loading={servicesLoading} />
      <Community stats={stats} loading={statsLoading} />
      <Testimonials testimonials={testimonials} loading={testimonialsLoading} />
      <CTAFinal />
    </>
  );
};

export default HomePage;