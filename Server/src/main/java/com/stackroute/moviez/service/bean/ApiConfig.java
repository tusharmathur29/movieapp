package com.stackroute.moviez.service.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiConfig {
	
	private String[] changeKeys;

	private Images images;

	@JsonProperty("change_keys")
	public String[] getChangeKeys() {
		return changeKeys;
	}
	
	@JsonProperty("change_keys")
	public void setChangeKeys(String[] changeKeys) {
		this.changeKeys = changeKeys;
	}

	public Images getImages() {
		return images;
	}

	public void setImages(Images images) {
		this.images = images;
	}

	@Override
	public String toString() {
		return "ClassPojo [changeKeys = " + changeKeys + ", images = " + images + "]";
	}
}
