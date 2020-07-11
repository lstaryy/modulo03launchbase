const express = require(`express`)
const nunjucks = require(`nunjucks`)

const videos = require("./data")
const server = express()

server.use(express.static(`public`))

server.set(`view engine`, `njk`)

nunjucks.configure(`views`, {
    express:server,
    // funcionalidade para (NÃO segurar) = false códigos html direto nas variáveis 
    // (padrão do nunjucks é (segurar) = true )
    autoescape: false
})

server.get("/", function(req, res) {
    
    const data = {
        avatar_url: "https://avatars1.githubusercontent.com/u/66566292?s=460&u=1275c29b2b17499976eabb348c4596933a154601&v=4",
        name: "Leonardo Stary Amaro",
        role: "3º semestre - Ciências da Computação - UNESP",
        links: [
            { name: "Github", url: "https://github.com/lstaryy"},
            { name: "LinkedIn", url: "https://br.linkedin.com/in/leonardo-stary-amaro-8b38a71aa"}
        ]
    }
    
    return res.render("about", { about: data })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log("server is running")
})