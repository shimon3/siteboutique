# site-services

Site one-page en hébreu (RTL) pour présenter mes services locaux à Kiryat Malachi et environs :

- **Support IT complet** pour petites structures : dépannage, pare-feu, Wi-Fi, réseaux, systèmes et postes de travail, Microsoft 365, sauvegardes.
- **Sites vitrines simples** pour commerces (pas de projets complexes).

Site 100 % statique : HTML, CSS, JS. Pas de framework, pas de build, pas de backend. Le contact passe uniquement par WhatsApp.

## Contenu du dossier

```
site-services/
  index.html      → toute la page (textes en hébreu)
  css/style.css   → mise en page et couleurs
  js/main.js      → petit script (année du pied de page, bordure de l'en-tête)
  images/         → favicon.svg
  README.md       → ce fichier
```

## Ouvrir le site en local

1. Ouvrir le dossier `site-services` dans l'Explorateur Windows.
2. Double-cliquer sur `index.html`.
3. La page s'ouvre dans le navigateur par défaut. Aucune installation nécessaire.

Pour voir le rendu mobile : touche `F12` dans Chrome ou Edge, puis l'icône téléphone (ou `Ctrl+Shift+M`), et choisir une largeur de 360 px.

Les polices (Heebo, Outfit) viennent de Google Fonts : sans connexion internet, le navigateur utilise une police système, le site reste lisible.

## Modifier les textes

Tous les textes sont dans `index.html`. Chaque section est précédée d'un commentaire repère :

| Repère dans le fichier | Section |
|---|---|
| `===== HERO =====` | titre, sous-titre, bouton WhatsApp du haut |
| `===== SERVICES =====` | les deux familles de services |
| `===== WHY ME =====` | « pourquoi moi » |
| `===== PRICING =====` | tarifs |
| `===== CONTACT =====` | bloc contact final |

Ouvrir `index.html` avec un éditeur de texte (Bloc-notes, VS Code), modifier le texte entre les balises, enregistrer, puis recharger la page dans le navigateur (`F5`).

Le titre de l'onglet et la description pour Google sont dans les balises `<title>` et `<meta name="description">` en haut du fichier.

## Modifier les tarifs

Aucun prix n'est écrit pour l'instant. Chaque valeur à compléter est un **placeholder** visible en jaune sur la page, dans une balise comme :

```html
<span class="placeholder">[מחיר]</span>
```

Pour mettre un vrai prix, remplacer **toute la balise** par la valeur. Exemple :

```html
<!-- avant -->
<p class="price"><span class="placeholder">[מחיר]</span> ₪</p>
<!-- après -->
<p class="price">250 ₪</p>
```

Placeholders à remplir (chercher `placeholder` dans `index.html`) :

1. Appel de service : prix + unité (par heure / par visite).
2. Suivi IT mensuel : prix + ce qui est inclus.
3. Site vitrine : prix de départ + ce qui est inclus et délai.
4. Note de bas de tarifs : TVA, déplacements, hébergement, nom de domaine.

Vérification finale : une recherche de `placeholder` dans `index.html` ne doit plus rien trouver (sauf dans le commentaire au-dessus de la section tarifs).

## Modifier le numéro WhatsApp

Le numéro apparaît **4 fois** dans `index.html` :

- 3 liens `https://wa.me/972587967455` (en-tête, hero, contact) ;
- 1 affichage lisible `058-796-7455` dans le bloc contact.

Méthode : dans VS Code ou Bloc-notes, `Ctrl+H` (Rechercher/Remplacer) :

1. Remplacer `972587967455` par le nouveau numéro au format international, **sans `+`, sans espaces, sans le 0 initial** (exemple : `0521234567` devient `972521234567`).
2. Remplacer `058-796-7455` par le nouveau numéro au format local.

## Publication

> Rien de cette section n'a été exécuté. À faire soi-même, quand le site est prêt (prix remplis).

### 1. Créer le dépôt GitHub

1. Se connecter sur https://github.com.
2. Bouton **New** (nouveau dépôt).
3. Nom : `site-services`. Visibilité : Public ou Private, au choix.
4. **Ne cocher aucune option** (pas de README, pas de .gitignore, pas de licence) : le dossier local en contient déjà.
5. Cliquer **Create repository** et copier l'URL affichée (`https://github.com/<utilisateur>/site-services.git`).

### 2. Pousser le dossier local

Le dossier est déjà un dépôt git avec un premier commit. Dans un terminal ouvert dans `site-services` :

```bash
git branch -M main
git remote add origin https://github.com/<utilisateur>/site-services.git
git push -u origin main
```

Pour les modifications suivantes :

```bash
git add .
git commit -m "Mise à jour des tarifs"
git push
```

### 3. Connecter le dépôt à Cloudflare Pages

1. Se connecter sur https://dash.cloudflare.com.
2. **Workers & Pages** → **Create** → onglet **Pages** → **Connect to Git**.
3. Autoriser GitHub si demandé, puis choisir le dépôt `site-services`.
4. Réglages de build :
   - **Production branch** : `main`
   - **Framework preset** : `None`
   - **Build command** : laisser **vide**
   - **Build output directory** : `/` (la racine du dépôt)
   - **Root directory** : laisser vide (racine)
5. **Save and Deploy**.
6. Le site est en ligne sur `https://<nom-du-projet>.pages.dev`. Chaque `git push` sur `main` redéploie automatiquement.

Optionnel : brancher un nom de domaine dans le projet Pages → **Custom domains**.
