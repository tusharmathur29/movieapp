package com.stackroute.moviez.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.moviez.configuration.ConfigProperties;
import com.stackroute.moviez.service.MovieService;
import com.stackroute.moviez.service.bean.ApiConfig;
import com.stackroute.moviez.service.bean.MovieData;
import com.stackroute.moviez.service.dao.MovieDAO;

/**
 * 
 * @author vlabuser35
 *
 */
@RunWith(SpringRunner.class)
@WebMvcTest(MoviesController.class)
public class MoviesControllerTest {

	@Autowired
	private MockMvc mvc;

	@MockBean
	private MovieService movieService;

	@MockBean
	private RestTemplate restTemplate;

	@MockBean
	private ConfigProperties config;

	@MockBean
	private ApiConfig apiConfig;

	@MockBean
	private MovieDAO movieDao;

	@Test
	public void testSearchMovie() throws Exception {
		mvc.perform(get("/api/search/abc").accept(MediaType.APPLICATION_JSON_UTF8_VALUE)).andExpect(status().isOk());
	}
	
	@Test
	public void testUpcomingMovies() throws Exception {
		mvc.perform(get("/api/upcoming").accept(MediaType.APPLICATION_JSON_UTF8_VALUE)).andExpect(status().isOk());
	}
	
	@Test
	public void testTrendingMovies() throws Exception {
		mvc.perform(get("/api/trending").accept(MediaType.APPLICATION_JSON_UTF8_VALUE)).andExpect(status().isOk());
	}

	@Test
	public void testGetSavedMovies() throws Exception {
		mvc.perform(get("/api/getSavedRecommendations").accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
				.andExpect(status().isOk());
	}

	@Test
	public void testSaveMovie() throws Exception {
		MovieData movie = new MovieData();
	    movie.setId("123456");
	    movie.setTitle("Test");
	    movie.setOverview("TestOverview");
	    movie.setPosterPath("abc.jpg");

		mvc.perform(post("/api/recommendMovie").contentType(MediaType.APPLICATION_JSON_UTF8_VALUE).content(getJsonFromObject(movie))
				.accept(MediaType.APPLICATION_JSON_UTF8_VALUE)).andExpect(status().isOk());
	}
	
	@Test
	public void testGetMovieRecommendations() throws Exception {
		mvc.perform(get("/api/recommendations/abc").accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
				.andExpect(status().isOk());
	}
	
	public static String getJsonFromObject(final Object obj) {
	    try {
	        final ObjectMapper mapper = new ObjectMapper();
	        final String jsonContent = mapper.writeValueAsString(obj);
	        return jsonContent;
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}

}
