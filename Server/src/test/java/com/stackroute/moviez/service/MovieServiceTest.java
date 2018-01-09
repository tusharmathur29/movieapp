package com.stackroute.moviez.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.stackroute.moviez.configuration.ConfigProperties;
import com.stackroute.moviez.service.bean.ApiConfig;
import com.stackroute.moviez.service.bean.Images;
import com.stackroute.moviez.service.bean.MovieData;
import com.stackroute.moviez.service.bean.SearchResult;
import com.stackroute.moviez.service.dao.MovieDAO;

@RunWith(SpringRunner.class)
public class MovieServiceTest {

	@TestConfiguration
	static class MovieServiceTestContextConfiguration {

		@Bean
		public MovieService movieService() {
			return new MovieService();
		}
		
		@Bean
		public ConfigProperties configProps() {
			ConfigProperties props = new ConfigProperties();
			props.setApiKey("abcd1234");
			String mockUrl = "abcd1234{0}asd{1}askjd{2}";
			props.setSearchUrl(mockUrl);
			props.setBackdropSize("testSize");
			props.setPosterSize("testSize");
			props.setRecommendedUrl(mockUrl);
			props.setTrendingUrl(mockUrl);
			props.setUpcomingUrl(mockUrl);
			return props;
		}
	}
	
	@Autowired
	MovieService movieService;

	@MockBean
	RestTemplate restTemplate;

	@MockBean
	ApiConfig apiConfig;

	@Autowired
	ConfigProperties configProps;

	@MockBean
	MovieDAO movieDao;

	@Before
	public void createSearchResult() {
		SearchResult searchResult = new SearchResult();
		List<MovieData> resultList = new ArrayList<>();
		MovieData movie = new MovieData();
		movie.setPosterPath("/abc.jpg");
		resultList.add(movie);
		searchResult.setMovieDataResults(resultList);
		Images images = new Images();
		images.setBaseUrl("testUrl");
		images.setSecureBaseUrl("https://testUrl/");
		when(restTemplate.getForObject(any(String.class), eq(SearchResult.class))).thenReturn(searchResult);
		when(apiConfig.getImages()).thenReturn(images);
	}

	@Test
	public void testSearchMovie() {
		SearchResult result = movieService.searchByMovieName("abc", 1);
		assertNotNull(result);
		assertEquals("https://testUrl/testSize/abc.jpg", result.getMovieDataResults().get(0).getPosterPath());
	}
	
	@Test 
	public void testTrendingMovies() {
		SearchResult result = movieService.getTrendingMovies(1);
		assertNotNull(result);
		assertEquals("https://testUrl/testSize/abc.jpg", result.getMovieDataResults().get(0).getPosterPath());
	}
	
	@Test 
	public void testUpcomingMovies() {
		SearchResult result = movieService.getUpcomingMovies(1);
		assertNotNull(result);
		assertEquals("https://testUrl/testSize/abc.jpg", result.getMovieDataResults().get(0).getPosterPath());
	}
}
