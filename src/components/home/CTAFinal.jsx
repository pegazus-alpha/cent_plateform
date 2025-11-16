import { Link } from 'react-router-dom';
import Button from '../common/Button';

export const CTAFinal = () => {
  return (
    <section className="cta-final">
      <div className="container">
        <div className="cta-icon">🎯</div>
        <h2>Prêt à transformer ton parcours académique ?</h2>
        <p>Rejoins 100% ACADEMY aujourd'hui et accède à tous nos services</p>
        <Link to="/register">
          <Button variant="primary" size="large">
            S'inscrire maintenant →
          </Button>
        </Link>
        <p className="cta-note">Essai gratuit 7 jours • Sans engagement</p>
      </div>
    </section>
  );
};