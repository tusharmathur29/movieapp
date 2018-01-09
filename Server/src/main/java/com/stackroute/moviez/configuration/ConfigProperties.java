package com.stackroute.moviez.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * 
 * @author vlabuser35
 *
 */
@Configuration
@PropertySource("classpath:configprops.properties")
@ConfigurationProperties(prefix = "moviez")
public class ConfigProperties {
    private String apiKey;
    
    private String searchUrl;
    
    private String upcomingUrl;
    
    private String trendingUrl;
    
    private String recommendedUrl;
    
    private String apiConfig;
    
    private String backdropSize;
    
    private String posterSize;
    
	public String getBackdropSize() {
		return backdropSize;
	}
	public void setBackdropSize(String backdropsize) {
		this.backdropSize = backdropsize;
	}
	public String getPosterSize() {
		return posterSize;
	}
	public void setPosterSize(String postersize) {
		this.posterSize = postersize;
	}
	public String getApiConfig() {
		return apiConfig;
	}
	public void setApiConfig(String apiconfig) {
		this.apiConfig = apiconfig;
	}
	public String getUpcomingUrl() {
		return upcomingUrl;
	}
	public void setUpcomingUrl(String upcomingUrl) {
		this.upcomingUrl = upcomingUrl;
	}
	public String getTrendingUrl() {
		return trendingUrl;
	}
	public void setTrendingUrl(String trendingUrl) {
		this.trendingUrl = trendingUrl;
	}
	public String getRecommendedUrl() {
		return recommendedUrl;
	}
	public void setRecommendedUrl(String recommendedUrl) {
		this.recommendedUrl = recommendedUrl;
	}
	public String getApiKey() {
		return apiKey;
	}
	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}
	public String getSearchUrl() {
		return searchUrl;
	}
	public void setSearchUrl(String searchUrl) {
		this.searchUrl = searchUrl;
	}
}
