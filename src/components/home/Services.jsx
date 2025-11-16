export const Services = ({ services }) => {
  const defaultServices = [
    {
      icon: '📚',
      title: 'Cours de soutien en ligne',
      description: 'Des cours interactifs avec nos meilleurs formateurs pour maîtriser toutes les matières',
    },
    {
      icon: '🎥',
      title: 'Packs vidéo de formation',
      description: 'Bibliothèque complète de vidéos pédagogiques accessibles 24/7 à ton rythme',
    },
    {
      icon: '👥',
      title: 'Formations présentielles',
      description: 'Ateliers pratiques et sessions intensives pour un apprentissage immersif',
    },
    {
      icon: '🤖',
      title: 'IA Tuteur personnel',
      description: 'Assistant intelligent disponible 24/7 pour répondre à toutes tes questions',
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Nos services qui font la différence</h2>
        <p className="section-subtitle">Des solutions complètes pour accompagner ton succès académique</p>
        <div className="services-grid">
          {displayServices.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll hover-lift">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="learn-more">En savoir plus →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};