const Koa = require('koa')
const Router = require('koa-router')
const auth = require('koa-basic-auth')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')

const PORT = 8081
const { USERNAME, PASSWORD } = process.env

const app = new Koa()
const router = new Router()
app.use(bodyParser())

const editHandler = async (ctx) => {
    // TODO: Add Error Handling
    console.log("Edit REQUEST RECEIVED!")
    const componentsLocation = `${__dirname}/src/data/`
    const componentRequested = `${ctx.request.body.component}.json`
    
    const files = fs.readdirSync(componentsLocation)
    
    if(files.includes(componentRequested)) {
        const componentData = fs.readFileSync(`${componentsLocation}${componentRequested}`)
        ctx.status = 200
        ctx.body  = componentData
    } else {
        ctx.status = 404
    }
}

router.use("/edit", auth({ name: USERNAME, pass: PASSWORD }))
router.post("/edit", editHandler)
router.get("/login", (ctx) => ctx.status=200)


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
console.log(`🌍  Server listening on port ${PORT}`)