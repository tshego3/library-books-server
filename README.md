# library-books-server

YouTube Link Used (Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial): https://youtu.be/vjf774RKrLc
Helper Links:

https://codeforgeek.com/render-html-file-expressjs/#:~:text=%20Render%20HTML%20file%20in%20Node.js%20and%20Express.js,develop%20a%20simple%20website%20consisting%20of...%20More%20

NodeJS Cheatsheet:
1. Run the command, to create the NodeJS project:
```
npm init
```

2. Run the command, to install the packages:
```	
npm install express nodemon mongoose@6.5.2 devenv body-parser cors
```

3. Run the command, to launch the project:
```
npm start
```

4. Press the shortcut, to stop the project:
```
Ctrl + C (in the node terminal)
```

5. VS Git CMD Terminal Source Control Commands:
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

6. Deploy NodeJS App on Netlify:

<a href="https://docs.netlify.com/integrations/frameworks/express/">Express on Netlify</a>

<a href="https://youtu.be/8x0Dty5D6CA?si=fUqHGOZhKRRxr52X">Deploy NodeJS App on Netlify for Free (Heroku Alternative) | NEW 2023 Tutorial</a>

<a href="https://youtu.be/hQAu0YEIF0g?si=C3tFTeZ0udck5QRu">How to deploy express.js on Netlify</a>

<a href="https://youtu.be/OBmhKQhrO6U?si=kegQ20vIA3mk5pzv">Using VS Code with Azure DevOps Git Repos</a>

<a href="https://youtu.be/9JPga11NGUE?si=oOip1RmT7W4rTHkr">How to Deploy a Node.js App in Microsoft Azure | Azure DevOps for creating CI/CD</a>

```
npm install netlify-cli -g
npm install serverless-http netlify-lambda @netlify/functions @types/express
```

7. MongoDB librarybooks collection (table) CRUD functions:
* GET
```
db.librarybooks.aggregate({$unwind:'$books'},{$match:{'books.year':{$lt:2000}}}).pretty();
db.librarybooks.aggregate({$match:{author: "John Grisham"}}).pretty();
db.librarybooks.aggregate({$match:{author: {$ne:"John Grisham"}}}).pretty();
db.librarybooks.aggregate({$unwind:'$books'},{$match:{'books.year':{$gte: 2000, $lte: 2009}}}).pretty();
db.librarybooks.aggregate({$unwind:'$books'},{$match:{'books.year':{$gt: 2009}}},{$count:'books'}).pretty();
```

* DELETE
```
db.librarybooks.deleteMany( { "books": { $elemMatch: { year: { $lt: 2000 } } } } )
db.librarybooks.deleteMany( { author: "John Grisham" } )
db.librarybooks.deleteMany( { author: { $ne: "John Grisham" } } )
db.librarybooks.deleteMany( { "books": { $elemMatch: { year: { $gte: 2000, $lte: 2009 } } } } )
```

