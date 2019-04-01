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

const getComponent = async (ctx) => {
  // TODO: Add Error Handling
  console.log(`Retrieving ${ctx.params.component || "all"} Component(s)`)
  const componentsLocation = `${__dirname}/src/data/`
  const componentRequested = ctx.params.component ? `${ctx.params.component.toLowerCase()}.json` : ''
  
  const components = fs.readdirSync(componentsLocation)

  if(!componentRequested) {
    const componentNames = components.map(component => {
        const name = component.split(".json")[0]
        const camelCasedName = name.charAt(0).toUpperCase() + name.slice(1)
        return camelCasedName
    })
    ctx.status = 200
    ctx.body = {
      result: componentNames
    }
    return
  }

  if(components.includes(componentRequested)) {
    const componentData = fs.readFileSync(`${componentsLocation}${componentRequested}`)
    ctx.status = 200
    ctx.body  = {
      result: JSON.parse(componentData)
    }
  } else {
    ctx.status = 404
  }
}

const editHandler = async (ctx) => {
  console.log("Edit Request Received!")
  ctx.status = 200
  ctx.body = {
    result: "Wait for it"
  }
}

router.use("/edit/:component", auth({ name: USERNAME, pass: PASSWORD }))
router.post("/edit/:component", editHandler)
router.get("/get/:component", getComponent)
router.get("/get", getComponent)
router.get("/login", (ctx) => ctx.status=200)


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
console.log(`🌍  Server listening on port ${PORT}`)