import { MdRocketLaunch, MdVisibility, MdStars } from 'react-icons/md';

export const About = () => {
  const pillars = [
    {
      icon: <MdRocketLaunch />,
      title: 'Notre Mission',
      description: 'Démocratiser l\'accès à une éducation de qualité en offrant des cours de soutien, formations et ressources pédagogiques adaptées à chaque apprenant.',
    },
    {
      icon: <MdVisibility />,
      title: 'Notre Vision',
      description: 'Devenir la référence régionale de l\'éducation augmentée par l\'IA, créant un écosystème où chaque étudiant peut atteindre son plein potentiel.',
    },
    {
      icon: <MdStars />,
      title: 'Nos Valeurs',
      description: 'Excellence académique, proximité, innovation technologique et construction d\'une communauté solidaire et motivante.',
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Qui sommes-nous ?</h2>
        <p className="section-subtitle">
          100% ACADEMY est une communauté académique qui accompagne les élèves, étudiants et autodidactes vers l'excellence
        </p>
        <div className="pillars">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card animate-on-scroll" data-card={index}>
              <div className="card-glow"></div>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
