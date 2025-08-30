package com.feedback.controller;

import com.feedback.model.Feedback;
import com.feedback.repository.FeedbackRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    private final FeedbackRepository repo;

    public FeedbackController(FeedbackRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Feedback> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Feedback create(@RequestBody Feedback feedback) {
        return repo.save(feedback);
    }
}