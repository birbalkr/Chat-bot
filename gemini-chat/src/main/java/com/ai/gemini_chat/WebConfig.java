package com.ai.gemini_chat;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // TODO Auto-generated method stub
        
        registry.addMapping("/**")
        .allowedOrigins("http://localhost:5173/")
        .allowedMethods("GET","PUT","DELETE","POST")
        .allowedHeaders("*")
        .allowCredentials(true);
    }

}
