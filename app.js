const button = document.getElementById('monBouton')
const p = document.getElementById('monParagraphe')
const ul = document.getElementById('maListe')

button.addEventListener('click', function() {
    p.textContent ='Je suis un paragraphe modifié !'
    let li = document.createElement('li')
    li.textContent = 'Nouvel élement !'
    ul.appendChild(li)
  
//     alert('Bienvenue parmis nous !')
})

p.addEventListener('mouseover', function() {
    p.style.color = "green";
    p.style.fontSize = '100px';
})


