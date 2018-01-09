/**
 * 
 */
package com.stackroute.moviez.service;

import java.text.MessageFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.stackroute.moviez.configuration.ConfigProperties;
import com.stackroute.moviez.service.bean.ApiConfig;
import com.stackroute.moviez.service.bean.MovieData;
import com.stackroute.moviez.service.bean.SearchResult;
import com.stackroute.moviez.service.dao.MovieDAO;

/**
 * @author vlabuser35
 *
 */
@Service
public class MovieService {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private ConfigProperties config;
	
	@Autowired
	private ApiConfig apiConfig;
	
	@Autowired
	private MovieDAO movieDao;
	

	public SearchResult searchByMovieName(String movieName, Integer pageNumber) {
		String searchUrl = config.getSearchUrl();
		searchUrl = MessageFormat.format(searchUrl, config.getApiKey(), movieName, pageNumber);
		SearchResult result = restTemplate.getForObject(searchUrl, SearchResult.class);
		processImagePath(result);
		return result;
	}
	
	public SearchResult getUpcomingMovies(Integer pageNumber) {
		String upcomingUrl = config.getUpcomingUrl();
		upcomingUrl = MessageFormat.format(upcomingUrl, config.getApiKey(), pageNumber);
		SearchResult result = restTemplate.getForObject(upcomingUrl, SearchResult.class);
		processImagePath(result);
		return result;
	}
	
	public SearchResult getTrendingMovies(Integer pageNumber) {
		String trendingUrl = config.getTrendingUrl();
		trendingUrl = MessageFormat.format(trendingUrl, config.getApiKey(), pageNumber);
		SearchResult result = restTemplate.getForObject(trendingUrl, SearchResult.class);
		processImagePath(result);
		return result;
	}
	
	public SearchResult getRecommendedMovies(String movieId, Integer pageNumber) {
		String recommendedUrl = config.getRecommendedUrl();
		recommendedUrl = MessageFormat.format(recommendedUrl, movieId, config.getApiKey(), pageNumber);
		SearchResult result = restTemplate.getForObject(recommendedUrl, SearchResult.class);
		processImagePath(result);
		return result;
	}
	
	private void processImagePath(SearchResult result) {
		for (MovieData data : result.getMovieDataResults()) {
			data.setBackdropPath(getImagePath(config.getBackdropSize(), data.getBackdropPath()));
			data.setPosterPath(getImagePath(config.getPosterSize(),data.getPosterPath()));
		}
		
	}
	private String getImagePath(String size, String imageId) {
		String processedPath = null;
		if(imageId != null && imageId.length() > 0 && !imageId.equals("null")) {
			StringBuilder imageUrl = new StringBuilder(apiConfig.getImages().getSecureBaseUrl());
			imageUrl.append(size);
			imageUrl.append(imageId);
			processedPath = imageUrl.toString();
		}
		return processedPath;
	}
	
	public MovieData saveRecommendedMovie(MovieData movie) {
		return movieDao.save(movie);
	}
	
	public void deleteRecommendedMovie(String movieId) {
		movieDao.delete(movieId);
	}

	public List<MovieData> getSavedMovies() {
		return movieDao.findAll();
	}
	
}
