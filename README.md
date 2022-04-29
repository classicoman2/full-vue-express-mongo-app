# Bookitsch
## Intro
**Bookitsch** és la millor aplicació del mercat per a registrar les teves lectures. No pots puntuar els llibres, però en pots fer ressenyes i comentaris, relacionar-los amb altres lectures, etc. APLICACIÓ EN CONSTRUCCIÓ
- [Inspiration](https://github.com/Project-Books/book-project)
- **Description**: Full stack app amb Tailwind, Vue 3, Express.js i MongoDB. Desplegament amb Heroku i Atlas MongoDB.

## Dev
```bash
# Servidor: directori .
# Alerta: la IP ha d'estar inclosa a la lista de Atlas MongoDB (explicat a sota)
npm run dev

# Client: directori /client
npm run serve
```

Els **TODO** s'indiquen en el codi mitjançant etiqueta //TODO
(Nota: emprar extensió TODO Tree per marcar els TODO)


## MongoDB
Database **uci_database**, Collection _cyclists_. Allotjada a [Atlas MongoDB](https://cloud.mongodb.com/v2/5ee9d0575a47887e5979df91#clusters)

Crear una Database+Collection i connectar-s'hi:

1. Iniciar sessió amb Gmail, Crear un cluster i usuari de base de dades - _dbUser_ per defecte
2. Crear un conexió Des de la pantalla de CLUSTER, espitjar Connexió, tria opció 2, _Connect with my Application_ o algo així. El token de conexió és similar a:

    `mongodb+srv://<elmeusuari>:<elmeuPassword>@cluster0-tuhp5.mongodb.net/<labasededades>?retryWrites=true&w=majority`

3. Cal guardar **usuari i contrasenya** a fitxer .env de variables d'entorn (cal incloure'l al .gitignore). Exemple de fitxer .env:
```bash
NODE_ENV=development
USER=dbUser
PASSWORD=my_password
```

### IP Access 
Molt important: cal assegurar que el servidor en Node.js pot accedir a Mongo Altas. 
- Entrar a Atlas, a l'opció _Network Access_, afegir a la _IP Whitelist_ el següent: `0.0.0.0/0` que vol dir que qualsevol hi pot accedir. [Accés](https://cloud.mongodb.com/v2/5ee9d0575a47887e5979df91#security/network/whitelist) o una IP fixa (suposo que és més segur)

## HEROKU: Desplegament
- En general, seguint les instruccions disponibles al [manual de Nodejs per Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) no hi ha problemes.
- Entrar a Heroku. Anar al desplegament que toca, clicar _Settings_ i a sota, botó _Reveal Config Vars_ i afegir  allà:
  - Usuari i la contrasenya segons noms del fitxer .env
  - Afegir la variable `PORT=80`
  - Afegir la variable `NODE_ENV=development`

## Peticions a Rest API
Guardades  en fitxer `proves_api.rest` - emprant extensió REST CLIENT de vscode (Millor seria una collection a Postman, més pràctic)

## Webgrafia

### Dev

- Full Stack Vue.js, Express & MongoDB - TraversyMedia: tutorial que he seguit. He emprat _Mongoose_ per connectar a Mongo i Atlas MongoDB (que ha absorbit **mLab** des de Febrer 2019.
  - [Part I: Back amb npm, Express.js, MongoDB allotjat a Atlas](https://www.youtube.com/watch?v=j55fHUJqtyw)
  - [Part II: Front amb VUE CLI i classe estàtica PostService.js per accés a API](https://www.youtube.com/watch?v=X-JZ-QPApUs&t=1s)
  - [Part III: Desplegament a Heroku](https://www.youtube.com/watch?v=W-b9KGwVECs)

- [CRUD Operations with Mongoose and MongoDB Atlas - Digital Ocean](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas). Amb `Mongoose` puc fer CRUD en un _back_ amb Express.js molt fàcilment
3. [Complete REST API with MongoDB Atlas cloud, Node, and Express in 10 minutes](https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1). No ho he consultat encara, però pot servir per complementar l'anterior
4. [Emprar variables d'entorn a Node](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html). També he hagut de crear una variable d'entorn (anomenades _Config Var_) als settings de la meva app a **Heroku**

### Desplegament

- [Manual de desplegament amb Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
