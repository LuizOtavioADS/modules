//Por default, o commomJs ja vem setado em um arquivo javascript
//para alterar, é preciso ir no package.json e abaixo do "main",
//indicar o "type": "module", para setar o ecma script module
import * as database from "./utils/database.js"

database.connectToDatabase('my-base')
