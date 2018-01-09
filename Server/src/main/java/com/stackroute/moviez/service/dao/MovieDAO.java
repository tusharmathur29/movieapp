/**
 * 
 */
package com.stackroute.moviez.service.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.moviez.service.bean.MovieData;

/**
 * @author vlabuser35
 *
 */
@Repository
public interface MovieDAO extends JpaRepository<MovieData, String> {

}
