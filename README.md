#Prettier
prettier.io
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

# Ignore artifacts:

build
coverage

npx mrm@2 lint-staged
#package.json
"devDependencies": {
"husky": "^8.0.3",
"lint-staged": "^15.2.0",
"prettier": "3.1.1"
},
"lint-staged": {
"\*.{js,css,md,ts,tsx}": "prettier --write"
}
git add .husky

#to make eslint work with prettier #https://github.com/prettier/eslint-config-prettier
npm add eslint-config-prettier -d
#package json edit
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest",
"prettier"
]
},

https://npm.io/package/jigma-dev-tool
