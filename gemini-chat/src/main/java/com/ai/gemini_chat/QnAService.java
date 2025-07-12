package com.ai.gemini_chat;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class QnAService {

    //Access to APIKey and URL [Gemini]
    @Value("${gemini.api.url}")
    private String geminiAPIURL;

    @Value("${gemini.api.key}")
    private String geminiAPIKey;

    private final WebClient webClient;

    // Constructor to initialize webClient
    public QnAService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String getAnswer(String question) {
        //construct the request payload
        //{"contents": [{"parts": [{"text": "Explain how AI works"}]}]} break down
      Map<String, Object> requestBody = Map.of(
    "contents", List.of(
        Map.of("parts", List.of(
            Map.of("text", question)
        ))
    )
);

        //make API call
        String response = webClient.post()
                .uri(geminiAPIURL + geminiAPIKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        //Return Response
        return response;
        
    }
}
