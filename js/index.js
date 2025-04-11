let data = [
    {
      movieName: "The Shawshank Redemption",
      rating: 4.8,
      bestScenes: [
        { title: "Escape", duration: "15 mins" },
        { title: "Brooks scene", duration: "10 mins" }
      ]
    },
    {
      movieName: "The Godfather",
      rating: 4.9,
      bestScenes: [
        { title: "Horse head", duration: "5 mins" },
        { title: "Cannoli", duration: "3 mins" }
      ]
    },
    {
      movieName: "The Dark Knight",
      rating: 4.8,
      bestScenes: [
        { title: "Bank robbery", duration: "12 mins" },
        { title: "Interrogation", duration: "8 mins" }
      ]
    },
    {
      movieName: "The Return of the King",
      rating: 4.9,
      bestScenes: [
        { title: "Rohirrim", duration: "10 mins" },
        { title: "Ring destroyed", duration: "7 mins" }
      ]
    }
  ];
  
  // 1. Longest scene duration per movie
  function longestScenes(movies) {
    return movies.map(movie => {
      let longest = 0;
      movie.bestScenes.forEach(scene => {
        let time = parseInt(scene.duration);
        if (time > longest) {
          longest = time;
        }
      });
      return { movieName: movie.movieName, longestScene: longest };
    });
  }
  
  
  function averageRating(movies) {
    let total = movies.reduce((sum, movie) => sum + movie.rating, 0);
    return (total / movies.length).toFixed(2);
  }
 
  function sortMovies(movies) {
    return movies.sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      } else {
        return a.movieName.localeCompare(b.movieName);
      }
    });
  }
  
 
  console.log("Longest Scene per Movie:");
  console.log(longestScenes(data));
  
  console.log("\nAverage Movie Rating:");
  console.log(averageRating(data));
  
  console.log("\nSorted Movies:");
  console.log(sortMovies(data));
  