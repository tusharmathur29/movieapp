package com.stackroute.moviez.service.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Images {
	
	private String[] posterSizes;

	private String[] backdropSizes;

	private String[] stillSizes;

	private String[] logoSizes;

	private String secureBaseUrl;

	private String baseUrl;

	private String[] profileSizes;

	@JsonProperty("poster_sizes")
	public String[] getPosterSizes() {
		return posterSizes;
	}

	@JsonProperty("poster_sizes")
	public void setPosterSizes(String[] posterSizes) {
		this.posterSizes = posterSizes;
	}

	@JsonProperty("backdrop_sizes")
	public String[] getBackdropSizes() {
		return backdropSizes;
	}

	@JsonProperty("backdrop_sizes")
	public void setBackdropSizes(String[] backdropSizes) {
		this.backdropSizes = backdropSizes;
	}

	@JsonProperty("still_sizes")
	public String[] getStillSizes() {
		return stillSizes;
	}

	@JsonProperty("still_sizes")
	public void setStillSizes(String[] stillSizes) {
		this.stillSizes = stillSizes;
	}

	@JsonProperty("logo_sizes")
	public String[] getLogoSizes() {
		return logoSizes;
	}

	@JsonProperty("logo_sizes")
	public void setLogoSizes(String[] logoSizes) {
		this.logoSizes = logoSizes;
	}

	@JsonProperty("secure_base_url")
	public String getSecureBaseUrl() {
		return secureBaseUrl;
	}

	@JsonProperty("secure_base_url")
	public void setSecureBaseUrl(String secureBaseUrl) {
		this.secureBaseUrl = secureBaseUrl;
	}

	@JsonProperty("base_url")
	public String getBaseUrl() {
		return baseUrl;
	}

	@JsonProperty("base_url")
	public void setBaseUrl(String baseUrl) {
		this.baseUrl = baseUrl;
	}

	@JsonProperty("profile_sizes")
	public String[] getProfileSizes() {
		return profileSizes;
	}

	@JsonProperty("profile_sizes")
	public void setProfileSizes(String[] profileSizes) {
		this.profileSizes = profileSizes;
	}

	@Override
	public String toString() {
		return "ClassPojo [posterSizes = " + posterSizes + ", backdropSizes = " + backdropSizes + ", stillSizes = "
				+ stillSizes + ", logoSizes = " + logoSizes + ", secureBaseUrl = " + secureBaseUrl
				+ ", baseUrl = " + baseUrl + ", profileSizes = " + profileSizes + "]";
	}
}