# ANGULAR CARNET DE VOYAGE 🏞️

* Fonctionnalités

  L'application permet de : 

   * Afficher la liste des voyages
   * Consulter les détails des voyages
   * Voir en version mobile
   * Voir la météo actuelle

* Utilisation 

  * Cloner ce dépôt de code sur votre machine locale
  * Exécuter npm install pour installer les dépendances
  * Exécuter ng s -o pour lancer l'application

  ---
### Fichiers

* Dans ce projet, il y a :

  - 2 pages :
    - home
    - article

  - 11 composant :
    - avis
    - button-retour
    - footer
    - header
    - dernier-article
    - lien-vers-les-autres-articles
    - pour-voyager-un-peu-plus
    - title-article
    - voyage-summery
    - weather-api

  - 1 mock :
    - travel

  - 2 service : 
    - article
    - weather

---

### Pages 

###### Home : 
  - Afficher la listes des voyages grâce à service et les datas de mock.
  - Afficher header et footer.

###### Article : 
   - Afficher les details des voyage qui sont trouvé par id.
   - Appelle button-retour pour retourner vers Home page.
  
---
### Composants 

###### Header & Footer : 
  - ils sont affiché sur toutes les pages en version mobile & desktop

###### Avis : 
  - Afficher la section Avis sur la page details.
  - Si length > 0 ne pas afficher son container

###### Button-retour : 
  - retourner vers Home page.

###### Dernier-article :
  - si l'article est isMainArticle, afficher en tête avec son ticket.
  - Diriger vers sa page détails grâce à son routerLink.

###### Lien-vers-les-autres-articles :
  - Afficher les articles qui sont isMainArticle === false.
  - Diriger vers sa page détails grâce à son routerLink.

###### pour-voyager-un-peu-plus : 
  - Afficher les secondaryImageDisplay en bouclant

###### Title-article : 
  - Sur la page détails, afficher ses main elements (img, date, country..).

###### Voyage-summery : 
  - afficher résumé, voyage section. 
  - reçevoir ses contenu grâce à @Input.

###### Weather : 
  - Afficher les Api elements sur Header.


---

### mock 

###### Travel : 
  - Travel mock contient les datas qui sont appelé partout dans cette application.

---

### service 

###### Article : 
  - ce service appelle la lists des articles grâce à getArticles() et cherche par id grâce à getArticle().

###### Weather : 
  - Récupère les données météorologique de l'API Visual Crossing Weather pour Paris, France.

  - les deux méthodes qui sont là getCurrentTemperature() & getCurrentWeather() retourne "Observable < any >"

  - Envoie HTTP Request à l'API de Visual Crossing Weather  


