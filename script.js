"use strict"

let dogs=[]
//<image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrtsyjcslwFFinDa74K1UE_nIFzxHQgCK7rf-0p4RBAHKMZItVxoTq2KuufR6gKdFcSI&usqp=CAU"></image>
dogs.push({name:"Fluffy",Breed:"Poodle",picture:"https://vetstreet.brightspotcdn.com/dims4/default/b5fcb62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F38%2Fec%2Ffd4eecbe4f57a282b707f097ef33%2Fpoodle-ap-1j99ae-645-x-380.jpg",Age:"4"})
dogs.push({name:"Otto",Breed:"Chihuahua",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJY3uoHLAj7muTnr4hZXzTq5MiuI7Vi6JDzg&usqp=CAU",Age:"7"})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQ7xC7XLae2cIJ_OEe5q0AxbaabCdD6-pKA&usqp=CAU",Age:"3"})
dogs.push({name:"Apollo",Breed:"Shiba Inu",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYDi2KeFxPldmg20L1c0ARyCPNOyxRun7mw&usqp=CAU",Age:"8"})
dogs.push({name:"Ash",Breed:"Dobermann",picture:"",Age:"2"})
dogs.push({name:"Barney",Breed:"Rottweiler",picture:"",Age:"6"})



//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name
    let image=document.createElement("img")
    image.src=dogs[i].picture
    card.appendChild(image)
}

