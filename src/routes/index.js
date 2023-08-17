import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', {title: 'SISGOADEM'}))
router.get('/somos',(req, res) => res.render('somos', {title: 'Quienes Somos'}))
router.get('/proyecto',(req, res) => res.render('proyecto', {title: 'Proyecto'}))
router.get('/contacto',(req, res) => res.render('contacto', {title: 'Contacto'}))


export default router