const message = document.querySelector('#message')

const addmovie = (event) => {
    event.preventDefault()
 let inputField = document.querySelector('input')

 const movie = document.createElement('li')

 const movieTitle = document.createElement('span')
 movieTitle.textContent = inputField.value
 movieTitle.addEventListener('click', crossOffMovie)
 movie.appendChild(movieTitle)

 const deleteBtn = document.createElement('button')
 deleteBtn.textContent = 'x'
 deleteBtn.addEventListener('click', deleteMovie)
 movie.appendChild(deleteBtn)

 const movieList = document.querySelector('ul')
 movieList.appendChild(movie)

 inputField.value = ''
}

document.querySelector('form').addEventListener("submit", addmovie)

const deleteMovie = (event) => {
    message.textContent = 'Movie Deleted'
    
    
    event.target.parentNode.remove()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie Watched'
    } else {
        message.textContent = 'Movie Added Back!'
    }



}