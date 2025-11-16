# 📡 MODE OFFLINE - 100% ACADEMY

## 🎯 Vue d'ensemble

L'application React 100% ACADEMY intègre un **système de fallback automatique** qui permet de fonctionner même lorsque l'API backend n'est pas disponible.

---

## ✨ Fonctionnalités

### Mode Online (API disponible)
- ✅ Données en temps réel depuis l'API
- ✅ Toutes les fonctionnalités (commentaires, likes, etc.)
- ✅ Synchronisation complète

### Mode Offline (API indisponible)
- ✅ **Données mockées** affichées automatiquement
- ✅ **Interface fonctionnelle** à 100%
- ✅ **Banner d'avertissement** visible
- ✅ **Expérience utilisateur** préservée
- ⚠️ Actions non synchronisées (likes, commentaires)

---

## 📂 Fichiers impliqués

### 1. Données mockées
**Fichier:** `src/data/mockData.js`

Contient :
- 6 articles complets avec contenu HTML
- Article featured
- Catégories (5)
- Tags (8)
- Commentaires (3)
- Stats globales
- Témoignages (3)
- Services (4)

### 2. Services modifiés
**Fichiers:**
- `src/services/blogService.js` - Fallback pour blog
- `src/services/dataService.js` - Fallback pour données

**Fonctionnement:**
```javascript
try {
  // Tentative d'appel API
  const response = await apiRequest.get(endpoint);
  return response.data;
} catch (error) {
  console.warn('API non disponible, utilisation des données mockées');
  // Retourne les données mockées
  return mockData;
}
```

### 3. Composant OfflineBanner
**Fichiers:**
- `src/components/common/OfflineBanner.jsx`
- `src/components/common/OfflineBanner.css`

**Fonctionnalités:**
- Détection automatique de l'état de l'API
- Vérification toutes les 30 secondes
- Banner orange avec icône ⚠️
- Animation slide-down

---

## 🔧 Configuration

### Variables d'environnement
```env
# .env
REACT_APP_API_URL=https://api.100academy.com/v1
```

### Personnaliser les données mockées

Éditer `src/data/mockData.js` :

```javascript
export const mockArticles = [
  {
    id: '1',
    title: 'Votre titre',
    excerpt: 'Votre extrait...',
    content: '<p>Votre contenu HTML...</p>',
    category: 'Catégorie',
    author: 'Auteur',
    icon: '📰',
    publishedAt: '2025-11-10T10:00:00Z',
    // ...
  },
  // Ajouter plus d'articles
];
```

---

## 🎨 Personnalisation du Banner

### Modifier le style
Éditer `src/components/common/OfflineBanner.css` :

```css
.offline-banner {
  background: linear-gradient(135deg, #ff9800 0%, #ff6b00 100%);
  /* Personnaliser couleur, padding, etc. */
}
```

### Modifier le texte
Éditer `src/components/common/OfflineBanner.jsx` :

```jsx
<span className="offline-text">
  Votre message personnalisé
</span>
```

### Désactiver le banner
Dans `src/App.jsx`, commenter la ligne :

```jsx
// <OfflineBanner />
```

---

## 🧪 Tester le mode offline

### Méthode 1 : Désactiver l'API
Dans `.env`, mettre une URL invalide :
```env
REACT_APP_API_URL=https://api-invalide.com
```

### Méthode 2 : Outils développeur
1. Ouvrir Chrome DevTools (F12)
2. Onglet "Network"
3. Cocher "Offline"
4. Rafraîchir la page

### Méthode 3 : Simuler une erreur réseau
Utiliser un outil comme:
- Charles Proxy
- Fiddler
- Network Link Conditioner (Mac)

---

## 📊 Comportement des fonctionnalités

| Fonctionnalité | Online | Offline |
|----------------|--------|---------|
| Liste articles | ✅ API | ✅ Mock (6 articles) |
| Détail article | ✅ API | ✅ Mock |
| Recherche | ✅ API | ✅ Filtrage local |
| Filtrage catégorie | ✅ API | ✅ Filtrage local |
| Pagination | ✅ API | ✅ Locale |
| Commentaires | ✅ API | ✅ Mock (3) |
| Ajouter commentaire | ✅ Sync | ⚠️ Non sync |
| Like article | ✅ Sync | ⚠️ Non sync |
| Articles similaires | ✅ API | ✅ Mock |
| Catégories sidebar | ✅ API | ✅ Mock (5) |
| Tags | ✅ API | ✅ Mock (8) |
| Newsletter | ✅ Sync | ⚠️ Non sync |
| Stats | ✅ API | ✅ Mock |
| Témoignages | ✅ API | ✅ Mock (3) |
| Services | ✅ API | ✅ Mock (4) |

---

## 🚀 Ajout de nouvelles données mockées

### Ajouter un article
```javascript
// src/data/mockData.js
export const mockArticles = [
  // ... articles existants
  {
    id: '7', // ID unique
    title: 'Nouveau titre',
    excerpt: 'Nouvel extrait...',
    content: '<p>Nouveau contenu...</p>',
    category: 'Formations',
    categoryColor: '#037d7b',
    author: 'Nom Auteur',
    icon: '🎯',
    publishedAt: new Date().toISOString(),
    views: 0,
    likesCount: 0,
    commentsCount: 0,
  },
];
```

### Ajouter une catégorie
```javascript
export const mockCategories = [
  // ... catégories existantes
  { 
    slug: 'nouvelle-categorie', 
    name: 'Nouvelle Catégorie', 
    icon: '🔥', 
    count: 5 
  },
];
```

### Ajouter un tag
```javascript
export const mockTags = [
  // ... tags existants
  { name: 'Nouveau Tag' },
];
```

---

## ⚡ Performance

### Avantages du mode offline
- ✅ **Chargement instantané** (pas d'appel réseau)
- ✅ **Pas de délai** d'attente
- ✅ **Expérience fluide**
- ✅ **Développement** sans backend

### Limitations
- ⚠️ Données non à jour
- ⚠️ Actions non synchronisées
- ⚠️ Nombre d'articles limité (6 par défaut)

---

## 🔍 Debugging

### Logs console
Le système affiche des warnings quand l'API est indisponible :
```
API non disponible, utilisation des données mockées
```

### Vérifier l'état
Dans la console développeur :
```javascript
// Vérifier si offline banner est visible
document.querySelector('.offline-banner') !== null
```

---

## 📝 Recommandations

### Production
1. ✅ Toujours tester avec API désactivée
2. ✅ Vérifier que toutes les pages fonctionnent
3. ✅ Personnaliser le message du banner
4. ✅ Ajouter plus de données mockées si nécessaire

### Développement
1. ✅ Utiliser le mode offline pour développer sans backend
2. ✅ Tester régulièrement les deux modes
3. ✅ Maintenir les données mockées à jour

---

## 🆘 Troubleshooting

### Le banner ne s'affiche pas
- Vérifier que `<OfflineBanner />` est dans `App.jsx`
- Vérifier la console pour les erreurs

### Les données mockées ne s'affichent pas
- Vérifier que `mockData.js` est bien importé dans les services
- Vérifier les try/catch dans les services

### Les articles ne se chargent pas
- Vérifier la structure des données mockées
- Vérifier que les IDs sont uniques

---

## 📞 Support

Pour toute question sur le mode offline :
- Consulter la documentation
- Vérifier les logs console
- Tester avec API désactivée

---

## ✅ Checklist

Avant de déployer :
- [ ] Tester le mode offline
- [ ] Vérifier que le banner s'affiche
- [ ] Tester toutes les pages en offline
- [ ] Vérifier les données mockées
- [ ] Personnaliser le message si nécessaire

---

**Mode offline = Résilience & Expérience utilisateur optimale ! 🚀**