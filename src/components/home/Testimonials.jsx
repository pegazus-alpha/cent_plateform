export const Testimonials = ({ testimonials }) => {
  const defaultTestimonials = [
    {
      text: '100% ACADEMY m\'a permis de passer de 10/20 à 16/20 de moyenne en mathématiques. Les cours sont clairs et les formateurs très pédagogues !',
      author: 'Marie ATANGANA',
      role: 'Étudiante en Terminale C',
      rating: 5,
    },
    {
      text: 'L\'accompagnement personnalisé et le tuteur IA m\'ont aidé à combler mes lacunes rapidement. Je recommande vivement !',
      author: 'Jean KENFACK',
      role: 'Étudiant en Licence 2',
      rating: 5,
    },
    {
      text: 'Une plateforme moderne avec une communauté bienveillante. Les challenges me motivent à progresser chaque jour !',
      author: 'Sarah NGUEMA',
      role: 'Étudiante en 1ère D',
      rating: 5,
    },
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Ce qu'ils disent de nous</h2>
        <p className="section-subtitle">Les témoignages authentiques de notre communauté</p>
        <div className="testimonials-grid">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-on-scroll">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{getInitials(testimonial.author)}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                  <div className="stars">{'⭐'.repeat(testimonial.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};