package com.aries.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aries.DTO.CiteDTO;
import com.aries.DTO.ContentDTO;

@Controller
@RequestMapping(value = "/api/content")
public class ContentController {

	@ResponseBody
	@RequestMapping(value = "/{contentId}/cite", method = RequestMethod.GET)
	public List<CiteDTO> getCitation(@PathVariable int contentId) {
		List<CiteDTO> citation = new ArrayList<CiteDTO>();
		
		CiteDTO temp1 = new CiteDTO();
		temp1.setAuthor("Tester McTesterson");
		temp1.setTitle("How to walk");

		CiteDTO temp2 = new CiteDTO();
		temp2.setAuthor("Tester McTesterson");
		temp2.setTitle("How to run");


		CiteDTO temp3 = new CiteDTO();
		temp3.setAuthor("Tester McTesterson");
		temp3.setTitle("How to Fly");
		
		switch(contentId) {
			case 0:
				citation.add(temp1);
				citation.add(temp2);
				break;
			case 1:
				citation.add(temp2);
				break;
			case 2:
				citation.add(temp1);
				citation.add(temp2);
				citation.add(temp3);
				break;
		}
		return citation;
	}
	
	
	// I really should have a database at this point... but I don't want to configure it.
	@ResponseBody
	@RequestMapping(value = "/{chapterId}/{pageId}", method = RequestMethod.GET)
	public ContentDTO get(@PathVariable int chapterId, @PathVariable int pageId) {
		 ContentDTO[][] content = new ContentDTO[3][];
		
		 
		content[0] = new ContentDTO[2];
		content[0][0] = new ContentDTO();
		content[0][0].setTitle("WHY IS IT SO HARD FOR HUMANS TO NEGOTIATE");
		content[0][0].setLength(content[0].length);
		content[0][0].setContent(
				"1. Your Reaction: Often, people are so stressed out about their interests, they act impulsively, inducing an equally damaging reaction from the other person. You have already damaged the relationship immediately by having an extreme reaction, which can leave you vulnerable further on in the negotiation process. Can you think of an example where your reaction might have ruined a negotiation? \n\n" +
				"2. Their Emotion:  You’re not the only one that can act impulsively. How do you manage the possible anger and frustration exhibited by the other party? The tendency here might be to hit back and forth with offensive comments to prove each party is right.  Have you been caught in this cycle? \n\n" +
				"3. Their Position: Instead of working at the problem together to improve your individual interests in a mutually beneficial way, the other party just want what they want, and it’s about convincing you. Their position, and framing of the negotiation process is guiding you’re lopsided attempt at negotiation! \n\n" +
				"4. Their Dissatisfaction: You may encounter someone who just won’t work with you. You might be working towards a goal that could be mutually beneficial, but because the ideas and suggestions are coming from supposed negotiating partner won’t accept them. They don’t want to seem weak by accepting a positive outcome, so they might not accept your proposal merely based on this.\n\n" +
				"5. Their Power: Power dynamics are important in any negotiation- from a chat with your four year old about how much ice cream constitutes “enough,” or negotiating a collective bargaining agreement. The other party wants what is theirs, and if they can get more, they definitely will.\n\n");
		
		
		content[0][1] = new ContentDTO();
		content[0][1].setTitle("Tips to Remember about Body Language and Negotiating");			
		content[0][1].setLength(content[0].length);
		content[0][1].setContent(
				"How does your body language affect how your negotiating partner might see you, and how you might see yourself?\n\n" +
				"1. Our non-verbal communication govern how others see us. If we are in a dominant pose, others will see us this way.\n\n" +
				"2. Our non-verbal communication governs how we feel about ourselves.  If we are in a dominant pose, we will feel dominant. Likewise is true if we are in a weak pose.\n\n" +
				"3. If you’re demonstrating a powerful non-verbal- your negotiating partner often will mirror the opposite. They will become defensive.\n\n" +
				"Negotiating successfully is getting a grasp on different aspects of yourself. You need to assess how you want the opposition (or negotiating party) to view yourself.\n\n");
	
	
		content[1] = new ContentDTO[7];
		content[1][0] = new ContentDTO();
		content[1][0].setTitle("MAPPING OUT THE WAY TO AGREEMENT");		
		content[1][0].setLength(content[1].length);
		content[1][0].setContent(
				"Preparation \n\n"
				+ "Preparation is crucial to the success of any negotiation. There will be missed opportunities for gain if one is not properly prepared, and it can slow down even the simplest negotiation situation.  Preparation can provide the best facilitation to agreement between parties. We can “map” out the way to agreement.");
		
		content[1][1] = new ContentDTO();
		content[1][1].setTitle("MAPPING OUT THE WAY TO AGREEMENT");
		content[1][1].setLength(content[1].length);
		content[1][1].setContent("1. Interests\n"
					+ "A) Define your interests and determine exactly what it is you want from the negotiation, what you’re willing to give up, and what you can compromise on.\n"
					+ "Ask yourself: “why” are you in this situation in the first place? This is important to prepare before hand, so that in the middle of a negotiation you don’t give up or compromise on a specific issue (e.g. wage increase) that you later realize is vital to your interests. \n\n"
					+ "B) Define their interests. In order to figure out what it is you’ll be able to get from the negotiation it is crucial to predict within reason what they are going to want. From here, you’ll be able to refine your interests and see where compromise can be made. You need to determine their “perception” of the issues at stake, no matter what the “facts” to you might be. In order to persuade the other person you need to understand how they can be persuaded.");
		
		content[1][2] = new ContentDTO();
		content[1][2].setTitle("MAPPING OUT THE WAY TO AGREEMENT");	
		content[1][2].setLength(content[1].length);
		content[1][2].setContent("2. Options\n"
					+ "A) Options are about satisfying interests: You must be able to identify how you will satisfy your interests, while meeting the interests of your partner. You may have an objective in mind that is your ideal goal, but this may not be realistic when placed with your goal.\n\n"
					+ "B) Do not focus on a single solution: It is easy to idealize the perfect solution into the “only” solution, and start to criticize any options that defy this. However, this doesn’t lead to any solution-based approach to negotiation. In order to do this, you must be willing to accept and think about another option as feasible.\n\n"
					+ "C) Standards: In order for both sides to be happy we need to think about how to divide up what has just been discussed. Interests of both parties are on the table, and now how do both parties agree on something?\n\n"
					+ "1.     “Contest of Wills”: In many cases, Ury (2007) indicates that a contest of wills will occur. Both parties hold their position until the, most likely, weaker party decides to give in. If this occurs, most likely the relationship will be broken between them, as one side has been burned by the negotiation. Future negotiations and relations will be strained, and many may say the negotiation failed."
					+ "2.     Fair Standards: In order to avoid the contest of wills, successful negotiators will attempt to avoid this, and try to come up with options and solutions that benefit and satisfy both parties interests. Fair standards are rules that are universal to a fair outcome, regardless of each party’s interests.\n\n"
					+ "3.     Examples of “Fair Standards”: Ury (2007) gives are Market values, the law, precedent, and equal standards. Examples: For example, if you were to be negotiating a salary increase with your boss, you may survey the average market value of your position to levy your position with “fair standards”. Even if you don’t get the exact salary increase to that specific market value, you may get something of equal value that is of benefit to both you and the employer.");
		
		content[1][3] = new ContentDTO();
		content[1][3].setTitle("MAPPING OUT THE WAY TO AGREEMENT");
		content[1][3].setLength(content[1].length);
		content[1][3].setContent("3. Alternatives and your BATNA: It is important to determine your alternatives prior to discussing your solution with the other party.  Ury (2007) identifies that negotiation does not always have to be to reach an agreement.  He explains that in order to reach an agreement, your interests must be satisfied, and the other party might not always be willing to satisfy your interests in negotiating an agreement. This is where your Best Alternative to a Negotiated Agreement (BATNA) comes in.");
		
		content[1][4] = new ContentDTO();
		content[1][4].setTitle("MAPPING OUT THE WAY TO AGREEMENT");
		content[1][4].setLength(content[1].length);
		content[1][4].setContent("A)   Defining BATNA: " 
					+"This is the best possible alternative if the negotiations aren’t meeting your interests, and the other party is not willing to compromise. It is not always beneficial to concede merely to reach an agreement, if your interests are not met, sometimes your best alternative might be to leave the negotiations. You keep your BATNA in your back pocket- it is the key to your power in a negotiation. The other party may or may not be able to predict your BATNA, and depending on their interests in you or your party, it may influence them to compromise on their interests in return."	 
					+"B)   How do we identify our BATNA? :"					 
					+"Ury (2007) identifies three types of alternatives to consider when identifying BATNA:\n\n"
					+"1.     Can you satisfy your interests without the help of the other party? (Ex. Walking out, another supplier, etc.).\n\n"
					+"2.     Is there anything you could do to make the other party respect your interests? (Ex: Strike, stopping trade, etc.)\n\n"
					+"3.     Can a third party be brought in to advance your interests in negotiation? (Ex: court, mediation, etc.)\n\n"
					 
					+"Your BATNA will be the key to power in negotiations. As discussed previously, if you are a union negotiating a bargaining agreement with your employer, for those who are able to, the BATNA may be to strike, and the employer will likely be able to predict this – Ex. Canadian Union of Postal Workers Vs. Federal Government.\n\n"
					+"C)   Boost your BATNA:\n\n"
					+"It is possible that in a situation you might have a weak BATNA. You can take steps to improve this. The example Ury (2007) uses is if your BATNA in wage negotiations is to start looking for another job, maybe you need to actively search and find a job offer before you enter the negotiations, in order to boost your BATNA. Another example might be if you are a producer working with one of your suppliers to lower their price on a specific commodity. You know the market price is much lower, and your BATNA is to possibly move to another supplier. To boost your BATNA, have an alternative supplier lined up that supplies at the price you are after.\n\n"
					+"D)   Decide if you should Negotiate:\n\n"
					+"In the example of the producer and supplier, you might have been working with supplier A for over a year to lower their price, and no matter how much you boost your BATNA, they still won’t budge. It might be that your BATNA is your best option, and you walk away from supplier A to supplier B, who has more reasonable prices.\n\n"
					+"A negotiation may continue to be beneficial only if your interests can still be satisfied. If you can do that without negotiating with the other party, you might be better off. However, as in the previous example, it could be that switching suppliers all together would have its costs. Perhaps supplier B is slower and people have complained they don’t receive their shipments on time; or possibly, Supplier B is cheaper on some commodities, but actually more expensive on other items. All of these factors may go into your decision to either negotiate further with Supplier A, or move on to your BATNA at Supplier B\n\n"
					+"E)   Identify their BATNA: \n\n"
					 
					+"You can identify many aspects of what you think might be the other sides BATNA. Is it weak or strong? Will/can they walk away? Will they change vendors? Depending on your interests, you may want the other party to continue negotiations and come to an agreement, rather than walking away.  In this case, you want to identify their BATNA so you can combat this, and develop a superior alternative. Identifying the other sides BATNA may be difficult- their may be times when the other party wants you to know their BATNA as leverage in negotiations, and other times, where they want to keep this a secret. Either way, doing everything reasonably possible to identify their BATNA will help you satisfy your interests as well.");
		
		content[1][5] = new ContentDTO();
		content[1][5].setTitle("MAPPING OUT THE WAY TO AGREEMENT");
		content[1][5].setLength(content[1].length);
		content[1][5].setContent("4.     Proposals:\n\n"
					+"We have developed solid foundation on how options and alternatives are shaped and formed to meet your interests and the other party’s interests. In order to develop an exceptional proposal, you want to exceed the benefits of both your BATNA and the other side’s BATNA, and meets fair standards. If this doesn’t occur, reasonably, one would conclude that either you or the other party will turn to your BATNA and a proposal would not be met. Ury (2007) identifies three proposals to consider when forming one for yourself:\n\n" 
					+"1.     What do you aspire to?\n\n"
					+"If we have low-aspiring goals when going into the negotiation, there will be a bit of a self-fulfilling prophecy that will likely be fulfilled. “Aspirations” must be kept within the bounds of reality of course, but they need to be aspiring. You need to meld both interests to see the best possible solution for the future.\n\n"
					+"2.     What would you be content with?\n\n"
					+"This is fairly straightforward. What would you be “okay” with? Is there a solution that will satisfy the bottom line interests so that an agreement could be made. Likely this will still be better than your BATNA.\n\n"
					+"3.     What could you live with?\n\n"
					+"This would be directly related to your BATNA. Is there a proposal that has marginal differences that still makes it slightly better than your BATNA? This also could be worse than you BATNA, and if this is in your proposal, it’s possible you may want to walk away entirely.");
		
		content[1][6] = new ContentDTO();
		content[1][6].setTitle("MAPPING OUT THE WAY TO AGREEMENT");
		content[1][6].setLength(content[1].length);
		content[1][6].setContent("RECAP: We have discussed how our basic five barriers to cooperation and how our body language affects us. We then moved on to how we might possibly get past this, with a bit of preparation, and we identified the path to agreement. Now we will take a short quiz.");
		
		return content[chapterId][pageId];
	}
}