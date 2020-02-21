(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{257:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chat"}},[e._v("#")]),e._v(" Chat")]),e._v(" "),a("Bot"),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Interview Bot is built and trained to act as a virtual interview candidate. Built using two Azure Cognitive Services offerings: QnA Maker and Web App Chat Bot, the bot's knowledge base was built with predefined questions and answers, then fed into the QnA maker service which trains a model to be able to intelligently answer the questions. This model is then passed along to the Web App Chat Bot, which provides the interface for being able to query the model with user input and present the responses.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("h3",{attrs:{id:"azure-qna-maker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-qna-maker"}},[e._v("#")]),e._v(" Azure QnA Maker")]),e._v(" "),a("p",[e._v("The creation of the bots knowledge base is done using Azure QnA Maker. QnA Maker is an Azure service designed to prepare structured and semistructured data and turn it into a trained model which can be used by the Bot Framework. QnA Maker has many advanced features, such as no code bot creation, automatic extraction of content in a QnA format from FAQ pages, support websites, PDFs, etc. These features give users a very easy way of taking a collection of documents and building an entity that has some basic understanding of the content, enough to be able to present possible answers to a user. For this bot, a short FAQ list was prepared and manually inputted into QnA maker. Additionally, links to each project on this site were fed into the bot so that the bot could answer questions about the various projects.")]),e._v(" "),a("h3",{attrs:{id:"azure-web-app-chat-bot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-web-app-chat-bot"}},[e._v("#")]),e._v(" Azure Web App Chat Bot")]),e._v(" "),a("p",[e._v("The Azure Bot Service has an offering called the Web App Chat Bot. Essentially, it is the Bot Framework packaged in a web friendly format, interfacing with which includes AJAX calls and the DirectLine API, created by Microsoft for features required for the deployment of bots. The Web App Chat Bot in this case acts as a frontend for the above knowledge base, routing user input from the browser to the knowledge base and back.")]),e._v(" "),a("h3",{attrs:{id:"blog-intergration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blog-intergration"}},[e._v("#")]),e._v(" Blog Intergration")]),e._v(" "),a("p",[e._v("There are two methods of deploying the bot as per the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft documentation"),a("OutboundLink")],1),e._v(".  The first method involves using the "),a("a",{attrs:{href:"https://github.com/microsoft/BotFramework-WebChat",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript library"),a("OutboundLink")],1),e._v(" to setup authentication using the DirectLine API while the second simpler method allows the embedding of an iframe directly into a web page. Unfortunately, while the second method is much simpler the Web App Bot has a "),a("a",{attrs:{href:"https://github.com/Microsoft/BotBuilder-V3/issues/71",target:"_blank",rel:"noopener noreferrer"}},[e._v("known bug"),a("OutboundLink")],1),e._v(' that prevents the bot from showing a greeting, effectively requiring the user to initiating the conversation, breaking the immersion and the user experience . Because the Bot is embedded in an iframe with CORS enforcement turned on, it is not possible to add the require work around which directly pings the "user connected" event, prompting the greeting. So instead, this page implemented the first method by building out a VueJS control around the Web App Bot using the JavaScript API and initiating that user connected event.')]),e._v(" "),a("h2",{attrs:{id:"ethical-and-safety-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethical-and-safety-considerations"}},[e._v("#")]),e._v(" Ethical and Safety Considerations")]),e._v(" "),a("h3",{attrs:{id:"ai-interviewers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-interviewers"}},[e._v("#")]),e._v(" AI Interviewers")]),e._v(" "),a("p",[e._v("AI has been deployed in the employment field for a long time already but were limited to simple techniques such as keyword analysis of resumes. With the advancements in Natural Language Processing and Computer Vision, we are now starting to see the scope of AI's increase. Several startups such as "),a("a",{attrs:{href:"https://interviewer.ai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interviewer.AI"),a("OutboundLink")],1),e._v(" go beyond the traditional resume keyword searches to having a realtime interview with candidates via a web camera, where the AI attempts to analyze the candidates face, tone and emotion to assess them. Such technologies are already being deployed by many big name companies including Unilever, IBM and Dunkin Donuts to name a few.")]),e._v(" "),a("p",[e._v('Technologies such as facial recognition and in fact the whole idea of a machine making a decision as important as whether some should or shouldn\'t get a job leave many people concerned. Facial recognition technologies in their current state, while impressive in some ways are greatly lacking in others, especially when it comes to human bias. These technologies are currently fallible enough that entire business are starting to be built around training people to beat AI interviewers with people learning things like "smile with your eyes" to ensure that the limited facial recognition systems can accurately classify you where you want to be.')]),e._v(" "),a("p",[e._v("However, the value proposition for the businesses using these technologies are high. Hiring for jobs is a time consuming task if one aims for thoroughness. Between reviewing hundreds of resumes, interviews, second interviews, offer cycles and negotiations the process of filing a single position could take weeks to months and several peoples worth of man power. The idea that one more step can be automated by prescreening the candidates at another stage before reaching humans is appealing.")]),e._v(" "),a("p",[e._v("Some Relevant Articles")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.insidehighered.com/news/2019/11/04/ai-assessed-job-interviewing-grows-colleges-try-prepare-students",target:"_blank",rel:"noopener noreferrer"}},[e._v("Your Interview With AI"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.inc.com/minda-zetlin/ai-is-now-analyzing-candidates-facial-expressions-during-video-job-interviews.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI Is Now Analyzing Candidates' Facial Expressions During Video Job Interviews"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.vox.com/recode/2019/12/12/20993665/artificial-intelligence-ai-job-screen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Artificial intelligence will help determine if you get your next job"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=QfuGRCmXmCs",target:"_blank",rel:"noopener noreferrer"}},[e._v("We tried the AI software companies like Goldman Sachs and Unilever use to analyze job applicants"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.reuters.com/article/us-southkorea-artificial-intelligence-jo/smile-with-your-eyes-how-to-beat-south-koreas-ai-hiring-bots-and-land-a-job-idUSKBN1ZC022",target:"_blank",rel:"noopener noreferrer"}},[e._v("'Smile with your eyes': How to beat South Korea's AI hiring bots and land a job"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.washingtonpost.com/technology/2019/10/22/ai-hiring-face-scanning-algorithm-increasingly-decides-whether-you-deserve-job/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A face-scanning algorithm increasingly decides whether you deserve the job"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.standard.co.uk/tech/ai-interviews-city-jobs-graduates-a3951296.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graduates are taking £9k courses to help beat AI interviews for City jobs"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.theguardian.com/technology/2018/mar/04/robots-screen-candidates-for-jobs-artificial-intelligence",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to persuade a robot that you should get the job"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("It clear that this isn't going away anytime soon and will likely get deployed across every industry in the near future. In the mean time, our goals as both candidates and interviewers should be to understand their true purpose and limitations and to use these recommendations as just that - suggestions to be passed to a human for further evaluation. And as AI researchers and engineers, we must continue to be diligent and design our systems so that they accurate serve the goals of their intended design.")]),e._v(" "),a("h3",{attrs:{id:"ai-for-everyone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-for-everyone"}},[e._v("#")]),e._v(" AI for Everyone")]),e._v(" "),a("p",[e._v("The core belief in the AI community is that AI should be for everyone. AI Democratization, the belief that AI tools, technologies and techniques should be accessible to everyone are being pushed forward by organizations such as fast.ai, Microsoft and OpenAI. The immense powered of such technologies should not be centralized for use only by huge corporations and should exist to benefit all of the human race.")]),e._v(" "),a("p",[e._v("Similar to the interview process, the job hunting process is largely repetitive, involving answering the same questions regarding background, skills, experience, etc. to many recruiters and interviewers. Similar to how AI Interviewers help businesses streamline and accelerate the hiring process, this bot is intended to accelerate the job hunting process by allowing recruiters to ask the questions they need to to determine if a candidate fits their requirements before moving forward with contact.")]),e._v(" "),a("h3",{attrs:{id:"middle-ground-through-thoughtful-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middle-ground-through-thoughtful-design"}},[e._v("#")]),e._v(" Middle Ground Through Thoughtful Design")]),e._v(" "),a("p",[e._v("In light of the above factors, it is clear that the technology is not going away and can be of great benefit to all involved, if done correctly. While this article doesn't have all the answers, here are some considerations that went into this bots design to begin the process of alignment.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('Do not attempt to make the bot appear to be a real human - there is no benefit in starting off a relationship with deception. This includes things such as not implement a "..." or "typing..." feature or implementing "uhs" and "umms". The bot should make it clear from the very first interaction that the bot is a bot, trained by someone to act on their behalf.')])]),e._v(" "),a("li",[a("p",[e._v('It is acceptable to allow the bot to personify you but only if the above considerations have made it clear that the bot isn\'t you. For example, saying "my creator enjoys long walks on the beach" while more transparent is clunkier and requires more thought on the part of the interviewer than simply "I enjoy long walks on the beach".')])])]),e._v(" "),a("h3",{attrs:{id:"the-future-ai-to-ai-interviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-future-ai-to-ai-interviews"}},[e._v("#")]),e._v(" The Future: AI to AI Interviews?")]),e._v(" "),a("p",[e._v("This does raise a new questions: with AI Interviews and AI Candidates, will AI's one day conduct AI to AI interviews to represent and make decisions for their humans? This does seems like the natural evolution of the technology - imagine being able to apply to every job automatically, but does raise additional concerns. A flaw in this AI to AI system could lead to unseen negative feedback loops, where AI's make decisions with no reporting to humans. This scenario has not been extensively studied for the purposes of this post due to the required consumer technologies not being in place yet but should be kept in mind moving forward.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);