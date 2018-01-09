/**
 * 
 */
package com.stackroute.moviez.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.moviez.service.MovieService;
import com.stackroute.moviez.service.bean.MovieData;
import com.stackroute.moviez.service.bean.SearchResult;

/**
 * @author vlabuser35
 *
 */
@RestController
@RequestMapping("/api")
public class MoviesController {

	@Autowired
	MovieService movieService;

	@RequestMapping(value = "/search/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<SearchResult> searchByMovieName(@PathVariable("name") String name,
			@RequestParam(value = "page", required = false) Integer pageNumber) {
		if (pageNumber == null || pageNumber.equals(0)) {
			pageNumber = 1;
		}
		SearchResult result = movieService.searchByMovieName(name, pageNumber);
		return ResponseEntity.ok(result);
	}

	@RequestMapping(value = "/upcoming", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<SearchResult> getUpcomingMovies(
			@RequestParam(value = "page", required = false) Integer pageNumber) {
		if (pageNumber == null || pageNumber.equals(0)) {
			pageNumber = 1;
		}
		SearchResult result = movieService.getUpcomingMovies(pageNumber);
		return ResponseEntity.ok(result);
	}

	@RequestMapping(value = "/trending", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<SearchResult> getTrendingMovies(
			@RequestParam(value = "page", required = false) Integer pageNumber) {
		if (pageNumber == null || pageNumber.equals(0)) {
			pageNumber = 1;
		}
		SearchResult result = movieService.getTrendingMovies(pageNumber);
		return ResponseEntity.ok(result);
	}

	@RequestMapping(value = "/recommendations/{movieid}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<SearchResult> getMovieRecommendations(@PathVariable("movieid") String movieId,
			@RequestParam(value = "page", required = false) Integer pageNumber) {
		if (pageNumber == null || pageNumber.equals(0)) {
			pageNumber = 1;
		}
		SearchResult result = movieService.getRecommendedMovies(movieId, pageNumber);
		return ResponseEntity.ok(result);
	}
	
	@RequestMapping(value = "/recommendMovie", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<MovieData> saveRecommendedMovie(@RequestBody MovieData movieData) {
		movieService.saveRecommendedMovie(movieData);
		return ResponseEntity.ok(movieData);
	}
	
	@RequestMapping(value = "/unrecommendMovie/{movieId}", method = RequestMethod.DELETE)
	public void deleteRecommendedMovie(@PathVariable("movieId") String movieId) {
		movieService.deleteRecommendedMovie(movieId);
	}
	
	@RequestMapping(value = "/getSavedRecommendations", method = RequestMethod.GET)
	public ResponseEntity<SearchResult> getSavedMovie() {
		SearchResult result = new SearchResult();
		List<MovieData> savedMovies = movieService.getSavedMovies();
		result.setMovieDataResults(savedMovies);
		return ResponseEntity.ok(result);
	}

}
