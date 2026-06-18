# AfriLang — Site des langues d'Afrique + Algorithme de similarité

Un site web moderne et interactif pour explorer les langues d'Afrique et découvrir leurs similitudes grâce à un algorithme de reconnaissance.

## Fonctionnalités

- **Explorer** : Plus de 2 600 langues documentées (données SIL)
- **Lexique de base** : 26 langues avec 6 mots comparables (eau, mère, un/deux/trois, bonjour)
- **Algorithme de similitude** :
  - Distance de Levenshtein sur les mots
  - Bonus famille + sous-famille
  - Bonus région
  - Score final sur 100
- **Comparateur interactif** : Choisissez n'importe quelle paire
- **Top correspondances** : Les langues les plus proches
- **Données ouvertes** : Export JSON + CSV

## Lancer le site

```bash
# Option 1 : Python
python3 -m http.server 8080

# Option 2 : npx (si installé)
npx serve .
```

Ouvrez ensuite `http://localhost:8080`

## Structure

```
index.html     # Interface complète
app.js         # Logique + algorithme de similarité
data/
  languages_full.json   # 2 646 langues (SIL)
```

## Algorithme (simplifié mais réel)

```js
function calculateSimilarity(lang1, lang2) {
  // 1. Similarité lexicale (6 mots de base)
  levSim = 1 - levenshtein(w1, w2) / maxLen
  
  // 2. Bonus
  if (sameFamily) familyBonus = 22–35
  if (sameRegion) regionBonus = 12
  
  score = (0.70 * avgLexSim) + familyBonus + regionBonus
}
```

Le projet est prêt à être étendu (ajout de plus de mots, API, etc.).

**AfriLang 2026** — Patrimoine linguistique africain