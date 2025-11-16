// Mock data for offline/fallback mode
export const mockArticles = [
  {
    id: '1',
    title: 'Comment l\'Intelligence Artificielle révolutionne l\'apprentissage en 2025',
    excerpt: 'L\'IA transforme profondément les méthodes d\'enseignement. Découvrez comment notre tuteur intelligent personnalise votre parcours d\'apprentissage et s\'adapte à votre rythme...',
    content: `
      <p>L'intelligence artificielle a profondément transformé le paysage éducatif au cours des dernières années. Chez 100% ACADEMY, nous avons intégré ces technologies de pointe pour créer une expérience d'apprentissage véritablement personnalisée et efficace.</p>

      <h2>Une personnalisation sans précédent</h2>
      <p>Notre tuteur IA analyse en temps réel vos performances, votre rythme d'apprentissage et vos préférences pour adapter le contenu pédagogique. Contrairement aux méthodes traditionnelles où tous les étudiants suivent le même parcours, notre système crée un chemin unique pour chaque apprenant.</p>

      <p>Cette approche permet de :</p>
      <ul>
        <li>Identifier rapidement vos points faibles et y consacrer plus de temps</li>
        <li>Accélérer sur les concepts que vous maîtrisez déjà</li>
        <li>Proposer des exercices adaptés à votre niveau actuel</li>
        <li>Prédire les domaines où vous pourriez rencontrer des difficultés</li>
      </ul>

      <h2>Un assistant disponible 24/7</h2>
      <p>L'un des avantages majeurs de notre tuteur IA est sa disponibilité constante. Plus besoin d'attendre le prochain cours pour poser vos questions.</p>
    `,
    category: 'Formations',
    categoryColor: '#037d7b',
    author: 'Dr. Sophie MBARGA',
    icon: '📰',
    publishedAt: '2025-11-10T10:00:00Z',
    views: 1234,
    likesCount: 156,
    commentsCount: 24,
  },
  {
    id: '2',
    title: '10 astuces pour réussir tes examens sans stress',
    excerpt: 'Découvre les meilleures techniques de révision et de gestion du stress pour performer le jour J...',
    content: `
      <p>La période des examens peut être stressante, mais avec les bonnes techniques, tu peux maximiser tes chances de réussite tout en préservant ton bien-être mental.</p>

      <h2>1. Planifie tes révisions</h2>
      <p>Commence tes révisions au moins 3 semaines avant l'examen. Divise le programme en petites sections gérables.</p>

      <h2>2. Utilise la technique Pomodoro</h2>
      <p>Travaille par sessions de 25 minutes suivies de 5 minutes de pause. Cette méthode améliore la concentration et prévient l'épuisement.</p>
    `,
    category: 'Conseils',
    categoryColor: '#ff4f8b',
    author: 'Marc FONYUY',
    icon: '💡',
    publishedAt: '2025-11-08T14:00:00Z',
    views: 892,
    likesCount: 98,
    commentsCount: 15,
  },
  {
    id: '3',
    title: 'Nouveau : Les challenges mensuels arrivent sur la plateforme',
    excerpt: 'Teste tes connaissances et gagne des récompenses en participant aux défis académiques...',
    content: `
      <p>Nous sommes ravis d'annoncer le lancement de nos challenges mensuels ! Chaque mois, découvre de nouveaux défis pour tester tes connaissances et gagner des récompenses.</p>

      <h2>Comment ça marche ?</h2>
      <p>Les challenges sont ouverts à tous les membres de 100% ACADEMY. Participe, accumule des points et grimpe dans le classement.</p>
    `,
    category: 'Actualités',
    categoryColor: '#037d7b',
    author: 'Admin 100% ACADEMY',
    icon: '🎯',
    publishedAt: '2025-11-05T09:00:00Z',
    views: 1456,
    likesCount: 234,
    commentsCount: 42,
  },
  {
    id: '4',
    title: 'De 8/20 à 17/20 : Le parcours inspirant de Thomas',
    excerpt: 'Comment un étudiant en difficulté a transformé ses résultats en 6 mois avec 100% ACADEMY...',
    content: `
      <p>Thomas avait des difficultés en mathématiques. Avec de la détermination et les bons outils, il a complètement transformé ses résultats.</p>

      <h2>Le déclic</h2>
      <p>"J'étais sur le point d'abandonner les maths. Puis j'ai découvert 100% ACADEMY et tout a changé."</p>
    `,
    category: 'Témoignages',
    categoryColor: '#ff4f8b',
    author: 'Équipe éditoriale',
    icon: '⭐',
    publishedAt: '2025-11-03T16:00:00Z',
    views: 2103,
    likesCount: 312,
    commentsCount: 56,
  },
  {
    id: '5',
    title: 'Comment utiliser efficacement le tuteur IA ?',
    excerpt: 'Guide complet pour tirer le meilleur parti de ton assistant intelligent personnel...',
    content: `
      <p>Le tuteur IA de 100% ACADEMY est un outil puissant. Voici comment l'utiliser au maximum de ses capacités.</p>

      <h2>Pose des questions précises</h2>
      <p>Plus ta question est précise, meilleure sera la réponse de l'IA.</p>
    `,
    category: 'IA & Tech',
    categoryColor: '#037d7b',
    author: 'Dr. Claire NANA',
    icon: '🤖',
    publishedAt: '2025-11-01T11:00:00Z',
    views: 1789,
    likesCount: 201,
    commentsCount: 33,
  },
  {
    id: '6',
    title: 'Nouveaux packs vidéo : Mathématiques Terminale',
    excerpt: 'Plus de 50 heures de cours en vidéo pour maîtriser le programme de Terminale...',
    content: `
      <p>Découvre notre nouvelle collection de vidéos pédagogiques pour le programme de Mathématiques en Terminale.</p>

      <h2>Contenu complet</h2>
      <p>Analyse, algèbre, probabilités, géométrie... Tous les chapitres sont couverts en détail.</p>
    `,
    category: 'Formations',
    categoryColor: '#037d7b',
    author: 'Prof. Jean TALLA',
    icon: '📚',
    publishedAt: '2025-10-28T10:00:00Z',
    views: 967,
    likesCount: 145,
    commentsCount: 18,
  },
];

export const mockFeaturedArticle = mockArticles[0];

export const mockCategories = [
  { slug: 'formations', name: 'Formations', icon: '📚', count: 24 },
  { slug: 'conseils', name: 'Conseils', icon: '💡', count: 18 },
  { slug: 'actualites', name: 'Actualités', icon: '🎯', count: 12 },
  { slug: 'temoignages', name: 'Témoignages', icon: '⭐', count: 8 },
  { slug: 'ia-tech', name: 'IA & Tech', icon: '🤖', count: 15 },
];

export const mockTags = [
  { name: 'Révisions' },
  { name: 'Examens' },
  { name: 'Méthodologie' },
  { name: 'Sciences' },
  { name: 'Maths' },
  { name: 'Motivation' },
  { name: 'IA' },
  { name: 'Orientation' },
];

export const mockComments = [
  {
    id: '1',
    author: 'Pierre KAMTO',
    content: 'Excellent article ! J\'utilise le tuteur IA depuis 3 semaines et mes notes ont déjà progressé. C\'est vraiment impressionnant de voir comment il s\'adapte à mon niveau.',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Il y a 2 heures
    likes: 5,
  },
  {
    id: '2',
    author: 'Émilie NKOLO',
    content: 'Je suis enseignante et je trouve cette approche fascinante. L\'IA ne remplace pas le professeur mais le complète parfaitement. Bravo pour cette innovation !',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // Il y a 5 heures
    likes: 12,
  },
  {
    id: '3',
    author: 'Thomas DJOUMESSI',
    content: 'Merci pour ces explications claires. J\'hésitais à m\'inscrire mais après avoir lu cet article, je suis convaincu. Rendez-vous la semaine prochaine sur la plateforme ! 🎓',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Il y a 1 jour
    likes: 8,
  },
];

export const mockStats = {
  studentsCount: 2000,
  coursesCount: 150,
  teachersCount: 50,
  satisfactionRate: 95,
};

export const mockTestimonials = [
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

export const mockServices = [
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