export const Community = ({ stats }) => {
  const defaultStats = [
    { number: '2000+', label: 'Étudiants actifs' },
    { number: '150+', label: 'Cours disponibles' },
    { number: '50+', label: 'Formateurs experts' },
    { number: '95%', label: 'Taux de satisfaction' },
  ];

  const features = [
    'Challenges mensuels pour tester tes connaissances',
    'Blog éducatif avec conseils et actualités',
    'Système de parrainage récompensé',
    'Classements publics pour te motiver',
    'Support entre pairs et entraide',
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="community">
      <div className="container">
        <div className="community-content">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Une communauté active et motivante
            </h2>
            <ul className="community-features">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="stats-grid">
            {displayStats.map((stat, index) => (
              <div key={index} className="stat-card hover-lift">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};