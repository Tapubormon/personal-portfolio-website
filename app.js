const express = require('express')

const app = express()
app.use(express.static("public"))

const PORT = 3000 || process.env.PORT

app.get("/", function(req, res) {
    res.sendFile('index.html')
})



app.get('*', (req, res) => {
    res.send("<h1>Error page</h1>")
})





app.listen(PORT, function(){
    console.log(`server is running on http://localhost:${PORT}`)
})