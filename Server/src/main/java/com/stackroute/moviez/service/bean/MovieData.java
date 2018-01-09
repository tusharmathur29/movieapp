/**
 * 
 */
package com.stackroute.moviez.service.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OrderColumn;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author vlabuser35
 *
 */
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieData {
    private String voteAverage;

    private String backdropPath;

    private String adult;

    @Id
    private String id;

    private String title;
    
    @Column(length=2000)
    private String overview;

    private String originalLanguage;

    @ElementCollection
    @OrderColumn(name="genre_sequence")
    private List<Integer> genreIds;

    private String releaseDate;

    private String originalTitle;

    private String voteCount;

    private String posterPath;

    private String video;

    private String popularity;
    
    @JsonProperty("vote_average")
    public String getVoteAverage ()
    {
        return voteAverage;
    }

    @JsonProperty("vote_average")
    public void setVoteAverage (String voteAverage)
    {
        this.voteAverage = voteAverage;
    }

    @JsonProperty("backdrop_path")
    public String getBackdropPath ()
    {
        return backdropPath;
    }

    @JsonProperty("backdrop_path")
    public void setBackdropPath (String backdropPath)
    {
        this.backdropPath = backdropPath;
    }

    public String getAdult ()
    {
        return adult;
    }

    public void setAdult (String adult)
    {
        this.adult = adult;
    }

    public String getId ()
    {
        return id;
    }

    public void setId (String id)
    {
        this.id = id;
    }

    public String getTitle ()
    {
        return title;
    }

    public void setTitle (String title)
    {
        this.title = title;
    }

    public String getOverview ()
    {
        return overview;
    }

    public void setOverview (String overview)
    {
        this.overview = overview;
    }

    @JsonProperty("original_language")
    public String getOriginalLanguage ()
    {
        return originalLanguage;
    }

    @JsonProperty("original_language")
    public void setOriginalLanguage (String originalLanguage)
    {
        this.originalLanguage = originalLanguage;
    }

    @JsonProperty("genre_ids")
    public List<Integer> getGenreIds ()
    {
        return genreIds;
    }

    @JsonProperty("genre_ids")
    public void setGenreIds (List<Integer> genreIds)
    {
        this.genreIds = genreIds;
    }

    @JsonProperty("release_date")
    public String getReleaseDate ()
    {
        return releaseDate;
    }

    @JsonProperty("release_date")
    public void setReleaseDate (String releaseDate)
    {
        this.releaseDate = releaseDate;
    }

    @JsonProperty("original_title")
    public String getOriginalTitle ()
    {
        return originalTitle;
    }

    @JsonProperty("original_title")
    public void setOriginalTitle (String originalTitle)
    {
        this.originalTitle = originalTitle;
    }

    @JsonProperty("vote_count")
    public String getVoteCount ()
    {
        return voteCount;
    }

    @JsonProperty("vote_count")
    public void setVoteCount (String vote_count)
    {
        this.voteCount = vote_count;
    }

    @JsonProperty("poster_path")
    public String getPosterPath ()
    {
        return posterPath;
    }

    @JsonProperty("poster_path")
    public void setPosterPath (String posterPath)
    {
        this.posterPath = posterPath;
    }

    public String getVideo ()
    {
        return video;
    }

    public void setVideo (String video)
    {
        this.video = video;
    }

    public String getPopularity ()
    {
        return popularity;
    }

    public void setPopularity (String popularity)
    {
        this.popularity = popularity;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [voteAverage = "+voteAverage+", backdropPath = "+backdropPath+", adult = "+adult+", id = "+id+", title = "+title+", overview = "+overview+", originalLanguage = "+originalLanguage+", genreIds = "+genreIds+", releaseDate = "+releaseDate+", originalTitle = "+originalTitle+", voteCount = "+voteCount+", posterPath = "+posterPath+", video = "+video+", popularity = "+popularity+"]";
    }
}
