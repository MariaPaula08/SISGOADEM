import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', {title: 'SISGOADEM'}))
router.get('/somos',(req, res) => res.render('somos', {title: 'Quienes Somos'}))
router.get('/proyectos',(req, res) => res.render('proyectos', {title: 'Proyectos'}))
router.get('/contacto',(req, res) => res.render('contacto', {title: 'Contacto'}))


export default router