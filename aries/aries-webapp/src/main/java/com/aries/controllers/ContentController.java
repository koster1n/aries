package com.aries.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aries.DTO.ContentDTO;

@Controller
@RequestMapping(value = "/api/content")
public class ContentController {

	@ResponseBody
	@RequestMapping(value = "/{contentId}", method = RequestMethod.GET)
	public ContentDTO get(@PathVariable int contentId) {
		return content0();
	}

	// Will create database if there is time.
	private ContentDTO content0() {
		ContentDTO content = new ContentDTO();
		content.setTitle("William Ury- Five Barriers to Cooperation");
		
		content.setContent(
"1. Your Reaction: Often, people are so stressed out about their interests, they act impulsively, inducing an equally damaging reaction from the other person. You have already damaged the relationship immediately by having an extreme reaction, which can leave you vulnerable further on in the negotiation process. Can you think of an example where your reaction might have ruined a negotiation? \n\n" +
"2. Their Emotion:  You’re not the only one that can act impulsively. How do you manage the possible anger and frustration exhibited by the other party? The tendency here might be to hit back and forth with offensive comments to prove each party is right.  Have you been caught in this cycle? \n\n" +
"3. Their Position: Instead of working at the problem together to improve your individual interests in a mutually beneficial way, the other party just want what they want, and it’s about convincing you. Their position, and framing of the negotiation process is guiding you’re lopsided attempt at negotiation! \n\n" +
"4. Their Dissatisfaction: You may encounter someone who just won’t work with you. You might be working towards a goal that could be mutually beneficial, but because the ideas and suggestions are coming from supposed negotiating partner won’t accept them. They don’t want to seem weak by accepting a positive outcome, so they might not accept your proposal merely based on this.\n\n" +
"5. Their Power: Power dynamics are important in any negotiation- from a chat with your four year old about how much ice cream constitutes “enough,” or negotiating a collective bargaining agreement. The other party wants what is theirs, and if they can get more, they definitely will.\n\n");
	
		return content;
	}
}