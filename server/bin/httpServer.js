const app= require('../app.js')
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`listening to port: ${port}`);
})

