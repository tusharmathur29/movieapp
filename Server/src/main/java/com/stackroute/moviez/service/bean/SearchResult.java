/**
 * 
 */
package com.stackroute.moviez.service.bean;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author vlabuser35
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class SearchResult {
	
    private List<MovieData> movieDataResults;

    private String page;

    private String totalPages;

    private String totalResults;
    
    @JsonProperty("results")
    public List<MovieData> getMovieDataResults ()
    {
        return movieDataResults;
    }
    
    @JsonProperty("results")
    public void setMovieDataResults (List<MovieData> results)
    {
        this.movieDataResults = results;
    }

    public String getPage ()
    {
        return page;
    }

    public void setPage (String page)
    {
        this.page = page;
    }
    
    @JsonProperty("total_pages")
    public String getTotalPages ()
    {
        return totalPages;
    }
    
    @JsonProperty("total_pages")
    public void setTotalPages (String totalPages)
    {
        this.totalPages = totalPages;
    }
    
    @JsonProperty("total_results")
    public String getTotalResults ()
    {
        return totalResults;
    }
    
    @JsonProperty("total_results")
    public void setTotalResults (String totalResults)
    {
        this.totalResults = totalResults;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [results = "+movieDataResults+", page = "+page+", totalPages = "+totalPages+", totalResults = "+totalResults+"]";
    }
}
