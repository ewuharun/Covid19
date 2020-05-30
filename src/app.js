const Corona = require('./utils/api.js')

const hbs = require('hbs')
const express = require('express')
const path = require('path')
const app = express()



var dirLocation = path.join(__dirname, '../public')
var viewPath = path.join(__dirname, '../template/views')
var partialPath = path.join(__dirname, '../template/partial')

app.use(express.static(dirLocation))
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)





app.get('/', (req, res) => {
    res.render('index', {
        developedBy: "Md.Harun or rashid",
        university: "East West University",
        dept: "Computer Science and Engineering",
        starting_year: "2017"
    })
})

app.get('/news', (req, res) => {
    console.log(req.query.country)

    Corona(req.query.country, (error, data) => {
        if (error) {
            return res.send(error)
        } else {
            //console.log(undefined, data)
            res.send({

                all_data: data
            })
        }
    })




})


app.get('/about', (req, res) => {
    res.render('about', {
        developedBy: "Md.Harun or rashid",
        university: "East West University",
        dept: "Computer Science and Engineering",
        starting_year: "2017"


    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        developedBy: "Md.Harun or rashid",
        university: "East West University",
        dept: "Computer Science and Engineering",
        starting_year: "2017"
    })
})


app.listen(3000, () => {
    console.log("server started")
})