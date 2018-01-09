/**
 * 
 */
package com.stackroute.moviez.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Wiring to enable refresh when on an angular route 
 * while serving from springboot
 * 
 * @author vlabuser35
 *
 */
@Controller
public class ViewController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @RequestMapping("/dashboard")
    public String dashboard() {
        return "index.html";
    }
    
    @RequestMapping("/my-recommendations")
    public String recommendations() {
        return "index.html";
    }
}