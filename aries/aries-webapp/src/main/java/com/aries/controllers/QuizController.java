package com.aries.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aries.DTO.Question;
import com.aries.DTO.QuizDTO;

@Controller
@RequestMapping(value = "/api/quiz")
public class QuizController {

	@ResponseBody
	@RequestMapping(value = "/{quizId}", method = RequestMethod.GET)
	public QuizDTO get(@PathVariable int quizId) {
		return test0();
	}
	public QuizDTO test0() {
		QuizDTO quiz = new QuizDTO();
		Question question1 = new Question();
		Question question2 = new Question();
		Question question3 = new Question();
	
		question1.setQuestion("What is your name?");
		List<String> options1 = new ArrayList();
		options1.add("Nobody");
		options1.add("Arthur, King of the Britians");
		question1.setOptions(options1);
		
		question2.setQuestion("What is your Quest?");
		List<String> options2 = new ArrayList();
		options2.add("Not a clue.");
		options2.add("To seek the Holy Grail");
		options2.add("To pass this class");
		question2.setOptions(options2);
		
		
		question3.setQuestion("What is the airspeed velocity of an unladen swallow?");
		List<String> options3 = new ArrayList();
		options3.add("Not a clue.");
		options3.add("What kind?");
		question3.setOptions(options3);
		
		List<Question> quizAnswers = new ArrayList();
		quizAnswers.add(question1);
		quizAnswers.add(question2);
		quizAnswers.add(question3);
		
		quiz.setQuestions(quizAnswers);
		
		return quiz;
	}
}