const Koa = require('koa')
const Router = require('koa-router')
const auth = require('koa-basic-auth')

const PORT = 8081
const USERNAME = "docker4ed"
const PASSWORD = "docker4ed"

const app = new Koa()
const router = new Router()

const editHandler = async (ctx) => {
    console.log("Edit REQUEST RECEIVED!")
    ctx.status = 200
    ctx.body = {
        'data': 'Wait for it'
    }
}

router.use("/edit", auth({ name: USERNAME, pass: PASSWORD }))
router.post("/edit", editHandler)
router.get("/login", (ctx) => ctx.status=200)


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
console.log(`🌍  Server listening on port ${PORT}`)