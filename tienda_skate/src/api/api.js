//deberia venir del backend
import React from "react"
const products = [ 
    {
        id: 1,
        title:'tabla santa cruz',
        descrption:'tabla santa cruz con diseño de calaveras',
        price: 10000,
        pictureUrl:'eaeaeaa',
    },
    {
        id: 2,
        title:'tabla quicksilver',
        descrption:'tabla quicksilver con diseño floral',
        price: 9000,
        pictureUrl:'eaeaeaa',
    }
]
const promesa = new Promise(function(resolve, rejected){
    setTimeout(function(p){
        //retornar productos
        resolve(products)
    }, 2000)
})
