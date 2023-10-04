//const { response } = require("express")

//codigo js
const url = "https://japceibal.github.io/japflix_api/movies-data.json"

fetch (url)
    .then(response => response.json())
    
    .then(data => console.log(data))
        //showData(data)

