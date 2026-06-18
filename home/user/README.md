# Khans — Langues d'Afrique + Algorithme de Fusion Probabiliste (v2.0)

Site web complet pour explorer **toutes les langues d'Afrique** et surtout **créer de nouvelles langues par fusion probabiliste**.

## Ce qui est nouveau et IMPORTANT (demande de l'utilisateur)

### Nouvel Algorithme de Probabilité + Fusion

C'est la fonctionnalité principale maintenant :

- **calculateFusionProbability()** → Calcule une vraie **probabilité de succès** (pas juste un score de similarité)
- **probabilisticWordFusion()** → Choisit les mots de façon probabiliste + peut créer des hybrides
- **fuseLanguages()** → Le vrai moteur de fusion : prend 2 à 4 langues et retourne :
  - Une nouvelle langue complète
  - Un pourcentage de probabilité de "viabilité"
  - Un niveau de confiance

### Comment ça marche (résumé)

1. On sélectionne 2-4 langues
2. L'algorithme calcule :
   - Similarité moyenne
   - Cohérence familiale
   - Chevauchement lexical
3. Il génère une **probabilité globale** (ex: 78%)
4. Il crée un nouveau lexique en choisissant les mots de manière probabiliste (pas toujours le même)
5. Il propose un nom de langue fusionnée

Exemples de résultats :
- Swahili + Kinyarwanda → Swah-Kiny (Fusion) → ~87%
- Hausa + Yoruba → Haus-Yoru (Fusion) → ~62%

## Fichiers

- `index.html` — Interface complète (inclut maintenant la section Fusion)
- `app.js` — Tout le code (ancien algorithme + **nouveau algorithme de fusion**)
- `data/languages_full.json` — 2 646 langues

## Lancer le site

```bash
python3 -m http.server 8080
```

Puis : http://localhost:8080

Allez dans la section **"Fusion Probabiliste de Langues"** (la plus importante).

Vous pouvez :
- Sélectionner des langues
- Lancer la fusion
- Voir la probabilité + le lexique généré
- Ajouter la langue fusionnée dans le catalogue principal

## Améliorations futures possibles

- Ajouter plus de mots au lexique (Swadesh 100+)
- Ajouter un vrai modèle de phonologie pour les hybrides
- Sauvegarder les langues fusionnées
- Exporter la langue fusionnée en format linguistique

Le projet est maintenant centré sur ce que vous vouliez : **la fusion de langues africaines avec un algorithme de probabilité**.

Prêt pour la suite ?