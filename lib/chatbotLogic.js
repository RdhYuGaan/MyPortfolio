import portfolioData from '../data/portfolioData.json';

// Simple keyword-based intent matching
export const getChatbotResponse = (query) => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.trim() === "") return null;

  // Keyword Categories
  const keywords = {
    greeting: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "how are you"],
    personal: ["who are you", "about", "yourself", "name", "who is radith", "tell me about radith"],
    education: ["education", "degree", "university", "college", "study", "studied", "bachelor"],
    skills: ["skills", "tech", "technologies", "stack", "react", "programming languages", "frameworks"],
    projects: ["projects", "work", "portfolio", "built", "made", "created", "e-commerce"],
    experience: ["experience", "job", "work", "career", "company", "worked"],
    research: ["research", "paper", "publication", "thesis"],
    achievements: ["achievements", "awards", "hackathon", "certificate", "certifications"],
    contact: ["contact", "email", "phone", "reach", "linkedin", "github", "twitter"],
    cv: ["cv", "resume", "download"]
  };

  const matchesCategory = (categoryKeys) => {
    return categoryKeys.some(key => lowerQuery.includes(key));
  };

  if (matchesCategory(keywords.greeting)) {
    return "Hello! I am Radith's personal assistant. I can tell you about his projects, skills, education, and experience. What would you like to know?";
  }

  if (matchesCategory(keywords.personal)) {
    return `Radith is a ${portfolioData.personal.role}. ${portfolioData.personal.description} He is based in ${portfolioData.personal.location}.`;
  }

  if (matchesCategory(keywords.education)) {
    const edu = portfolioData.education.map(e => `${e.degree} at ${e.institution}`).join(" and ");
    return `Radith's educational background includes: ${edu}.`;
  }

  if (matchesCategory(keywords.skills)) {
    const frontend = portfolioData.skills.frontend.join(", ");
    const backend = portfolioData.skills.backend.join(", ");
    return `Radith is skilled in Frontend technologies like ${frontend}, and Backend technologies like ${backend}.`;
  }

  if (matchesCategory(keywords.projects)) {
    const projects = portfolioData.projects.map(p => `**${p.title}** (${p.techStack.join(", ")}): ${p.description}`).join('\n\n');
    return `Here are some of Radith's projects:\n\n${projects}`;
  }

  if (matchesCategory(keywords.experience)) {
    const exp = portfolioData.experience.map(e => `${e.role} at ${e.company} - ${e.summary}`).join("\n");
    return `Radith has worked as a:\n${exp}`;
  }

  if (matchesCategory(keywords.research)) {
    const research = portfolioData.research.map(r => `*${r.topic}*: ${r.summary}`).join("\n");
    return `Radith's research work includes:\n${research}`;
  }

  if (matchesCategory(keywords.achievements)) {
    return `Some of Radith's achievements are:\n- ${portfolioData.achievements.join("\n- ")}`;
  }

  if (matchesCategory(keywords.contact)) {
    return `You can reach Radith via email at ${portfolioData.personal.email}, or find him on [LinkedIn](${portfolioData.contactLinks.linkedin}) and [GitHub](${portfolioData.contactLinks.github}).`;
  }

  if (matchesCategory(keywords.cv)) {
    return `You can view or download Radith's CV by clicking the download button in the chat header, or I can tell you about his experience directly here!`;
  }

  // Fallback for unrelated questions
  return "I can only provide information related to the portfolio owner and their projects. Please ask about Radith's skills, experience, or work!";
};
