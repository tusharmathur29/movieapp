/**
 * 
 */
package com.stackroute.moviez;

import java.text.MessageFormat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.stackroute.moviez.configuration.ConfigProperties;
import com.stackroute.moviez.service.bean.ApiConfig;

/**
 * @author vlabuser35
 *
 */
@SpringBootApplication
public class App {
	
	public static void main(String args[]) {
		SpringApplication.run(App.class, args);
	}
	
	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}
	
	@Bean
	public ApiConfig loadApiConfig(RestTemplate restTemplate, ConfigProperties config) {
		ApiConfig apiConfig;
		String configUrl = config.getApiConfig();
		configUrl = MessageFormat.format(configUrl, config.getApiKey());
		apiConfig = restTemplate.getForObject(configUrl, ApiConfig.class);
		return apiConfig;
	}

}
