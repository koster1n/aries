package com.aries.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aries.DTO.Question;
import com.aries.DTO.QuizDTO;

@Controller
@RequestMapping(value = "/api/quiz")
public class QuizController {

	@ResponseBody
	@RequestMapping(value = "/{quizId}", method = RequestMethod.GET)
	public QuizDTO get(@PathVariable int quizId) {
		switch (quizId) {
			case 0:
				return test0();
		}
		return null;
	}
	
	private QuizDTO test0() {
		QuizDTO quiz = new QuizDTO();
		Question question1 = new Question();
		Question question2 = new Question();
		Question question3 = new Question();
		Question question4 = new Question();
		Question question5 = new Question();
		Question question6 = new Question();
		Question question7 = new Question();
		Question question8 = new Question();
		Question question9 = new Question();
		Question question10 = new Question();
	
		question1.setQuestion("What are the Five Barriers to Cooperation identified by Ury (2007)?");
		List<String> options1 = new ArrayList<String>();
		options1.add("your emotion, their money, their dissatisfaction, their position, your power");
		options1.add("your power, their money, your dissatisfaction, their power, their stubbornness");
		options1.add("your reaction, their emotion, their position, their dissatisfaction, their power");
		options1.add("their reaction, your emotion, your position, their dissatisfaction, their money");
		
		question1.setOptions(options1);
		question1.setAnswer(2);
		
		question2.setQuestion("Non-Verbal Communication can have an affect on the negotiation process by governing how other see us, and how we view ourselves in that moment. True or False?");
		List<String> options2 = new ArrayList<String>();
		options2.add("True");
		options2.add("False");
		question2.setOptions(options2);
		question2.setAnswer(0);

		question3.setQuestion("Why is identifying your own interests so important before entering a negotiation?");
		List<String> options3 = new ArrayList<String>();
		options3.add("So you don’t compromise on issues later realizing they were vital to your interests");
		options3.add("To identify what you can compromise on");
		options3.add("To identify why you are negotiating");
		options3.add("To identify what we can give up");
		options3.add("All of the above");
		question3.setOptions(options3);
		question3.setAnswer(4);
		
		question4.setQuestion("It is important to focus solely on one single solution, as this is the best way to approach negotiations. True or false?");
		List<String> options4 = new ArrayList<String>();
		options4.add("True");
		options4.add("False");
		question4.setOptions(options4);
		question4.setAnswer(1);
		
		question5.setQuestion("Some examples of “Fair Standards” in line with the definition put forward by Ury (2007) that are used in the negotiating process might be?");
		List<String> options5 = new ArrayList<String>();
		options5.add("Market Values");
		options5.add("Geographic Location");
		options5.add("IQ levels");
		options5.add("Regulation and law");
		options5.add("A & B");
		options5.add("A & D");
		question5.setOptions(options5);
		question5.setAnswer(5);
		
		question6.setQuestion("In a negotiation you must always reach an agreement, as per the official rules? True or False?");
		List<String> options6 = new ArrayList<String>();
		options6.add("True");
		options6.add("False");
		question6.setOptions(options6);
		question6.setAnswer(1);
		
		question7.setQuestion("What is your BATNA intended to identify?");
		List<String> options7 = new ArrayList<String>();
		options7.add("The location of batman");
		options7.add("Identify the ”fair standards” in a negotiation.");
		options7.add("Identify the best type of body language to use.");
		options7.add("Determine the best alternative to an agreement.");
		question7.setOptions(options7);
		question7.setAnswer(3);
		

		question8.setQuestion("You can boost your BATNA to strengthen your position in an argument. True or False?");
		List<String> options8 = new ArrayList<String>();
		options8.add("True");
		options8.add("False");
		question8.setOptions(options8);
		question8.setAnswer(0);
		
		question9.setQuestion("You never want to identify your opposing partner’s BATNA, as this might weaken your negotiating position. True or False?");
		List<String> options9 = new ArrayList<String>();
		options9.add("True");
		options9.add("False");
		question9.setOptions(options9);
		question9.setAnswer(1);
		
		question10.setQuestion("Each option is a proposal Ury (2007) identifies EXCEPT:");
		List<String> options10 = new ArrayList<String>();
		options10.add("What do you aspire to?");
		options10.add("What would you absolutely regret?");
		options10.add("What would you be content with?");
		options10.add("What could you live with?");
		question10.setOptions(options10);
		question10.setAnswer(3);
		
		List<Question> quizQuestions = new ArrayList<Question>();
		quizQuestions.add(question1);
		quizQuestions.add(question2);
		quizQuestions.add(question3);
		quizQuestions.add(question4);
		quizQuestions.add(question5);
		quizQuestions.add(question6);
		quizQuestions.add(question7);
		quizQuestions.add(question8);
		quizQuestions.add(question9);
		quizQuestions.add(question10);
		
		quiz.setQuestions(quizQuestions);
		
		return quiz;
	}
}
