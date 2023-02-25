Steps: 
	1. create app - npm create-react-app yourAppName
	2. Login/Signup to get TMDB API Key
	3. Setup Firebase Hosting
	4. Get All Movies
		1. create a request component
		2. store API Key in a Const variable
		3. create a request type object
		4. export your request object

	5. create axios component
		1. install axios globally for the app
		2. create instance, using axios.create({baseURL: "url here"})
		3. export your instance

	6. Build Rows
		1. create your html structure whatever you want
		2. create a var using useState hooks
		3. fetch movies using useEffect hooks and store in your create var using useState
		4. important: use async promise for creating your funcition inside useEffect and store data using await promis using axios in that function
		5. now set you fetched data in that varible you created for store movies
		6. now you can print your data on browser using map and make sure that you use condition "?."
		7. now you can style your html accordingly

	6. Build Banner
		1. build banner html structure
		2. fetch data as you fetched in row component
		3. now you can print you fetched data as banner 

	7. Build Navbar
	8. Add trailer popup
		1. install "react-youtube"
		2. install "movie-trailer"
		3. import react-youtube and movie-trailer in row component
		4. create a handleClick and call on movie card, so that you can get clicked movie name or title
		5. now create blank var using useState for store movie name on click
		6. const handleClick = (movie) => {
			  if (trailerUrl) {
			    setTrailerUrl("");
			  }
			  else {
			    movieTrailer(movie?.original_name || movie?.title)
			    .then(url => {
			      const urlParams = new URLSearchParams(new URL(url).search);
			      setTrailerUrl(urlParams.get("v"))
			    }).catch(error => console.log(error)) 
			  }
			}


	9. Deploy app on firebase
