import { Router } from './router.js'

const router = new Router() 
router.add('/', "/pages/home.html")
router.add('/sobre', "/pages/sobre.html")
router.add('/contato', "/pages/contato.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

/* 
              OBJECT LITERALS

const routes = {
  "/": "/pages/home.html",
  "/sobre": "/pages/sobre.html",
  "/contato": "/pages/contato.html",
  404: "/pages/404.html",

}
*/