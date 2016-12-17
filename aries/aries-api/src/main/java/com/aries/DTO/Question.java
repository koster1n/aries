package com.aries.DTO;

import java.util.List;

public class Question {
	private String question;
	private List<String> options;
	private int correct;

	
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	
	public List<String> getOptions() {
		return options;
	}
	public void setOptions(List<String> options) {
		this.options = options;
	}
	
	public int getAnswer() {
		return correct;
	}
	public void setAnswer(int correct) {
		this.correct = correct;
	}
}
