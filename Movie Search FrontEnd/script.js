async function movieSearch() {
    let movieName = document.getElementById("movieInput").value;
    let movieResult = document.getElementById("movieResult");

    if(movieName.trim() === "") {
        movieResult.textContent = "Enter a movie name";
    } else {
        let url = `http://localhost:8080/movie?name=${movieName}`

        let response = await fetch(url);
        let data = await response.json();

        movieResult.style.display = "block";
        
        movieResult.innerHTML = `<img src=${data.Poster} class="poster"> <br>
                                 <strong>Movie Name:</strong>${data.Title}  <br>
                                 <strong>Release Year:</strong>${data.Year}   <br>
                                 <strong>Movie Genre:</strong>${data.Genre}  <br>
                                 <strong>Actors:</strong>${data.Actors} <br>
                                 <strong>Director:</strong>${data.Director}`;
    }
}