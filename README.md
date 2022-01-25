## My example of a basic and secure NodeJS REST API

This is the basic API I use when I need to create a REST API.<br>
I focused on:
<br>🔓 <b>security</b>
<br>🎨 <b>clarity</b>
<br>🤝 <b>the reusability of the code.</b>

## Installation

Make sure to have installed <a href="https://nodejs.org/en/">NodeJS</a>
and <a href="https://docs.mongodb.com/manual/installation/">MongoDB</a>

If you don't need mongodb database you can comment mongodb connexion in <b>index.js</b>

```
//clone the project and go inside the folder
$> npm i
$> npm start

//the desired return is:
✅ Example app listening at http://localhost:3000
✅ MongoDB Connection Succeeded. URL: <url> //only if you need mongodb database

//if you have an error it may be due to a mongodb installation error
```

## Code structure details 

🎨 This api use <a href="https://eslint.org/">eslint</a> to controle code style. 
<br>You can use the following command to check that your code is clean.
<br>```
$> npm run lint
```
<br>You can change the writing rules in the file <b>.eslintrc.json</b>

🐶 This api use <a href="https://www.npmjs.com/package/husky">husky</a> to prevent from bad commits. The code style will be verified before every commits to prevent pushing bad code.
<br> You can modify the hook rules in the file <b>.husky/pre-commit</b>



## Credit:

Creator: nexus91<br>
Date: 01/2022