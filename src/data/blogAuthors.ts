export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export const blogAuthors: Record<string, BlogAuthor> = {
  "aniket-joshi": {
    id: "aniket-joshi",
    name: "Dr. Aniket Joshi",
    role: "Senior Toxicologist",
    bio: "Dr. Aniket Joshi has over 12 years of experience in regulatory toxicology. He specializes in OECD guideline studies, GLP compliance, and international regulatory submissions across pharmaceutical, chemical, and agrochemical sectors.",
    initials: "AJ",
    color: "blue",
  },
  "sneha-mehta": {
    id: "sneha-mehta",
    name: "Dr. Sneha Mehta",
    role: "Head of Biocompatibility",
    bio: "Dr. Sneha Mehta leads our biocompatibility division with 10+ years of expertise in ISO 10993 evaluation. She has guided over 200 medical device projects through EU MDR, FDA, and Health Canada submissions.",
    initials: "SM",
    color: "emerald",
  },
  "priya-sharma": {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Lead Microbiologist",
    bio: "Dr. Priya Sharma specializes in pharmaceutical microbiology and sterility assurance. With 8 years of experience in USP, EP, and ISO microbiological testing, she oversees sterile product safety evaluations.",
    initials: "PS",
    color: "purple",
  },
  "vikram-patil": {
    id: "vikram-patil",
    name: "Dr. Vikram Patil",
    role: "Director of Animal Research",
    bio: "Dr. Vikram Patil brings 15 years of expertise in laboratory animal science and welfare. He oversees our CPCSEA-approved breeding facility and advises on animal model selection for preclinical studies.",
    initials: "VP",
    color: "amber",
  },
};

export const getAuthor = (authorId: string): BlogAuthor | undefined => blogAuthors[authorId];

export const authorColors: Record<string, string> = {
  blue: "bg-blue-500/20 text-blue-600 border-blue-500/30",
  emerald: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
  purple: "bg-purple-500/20 text-purple-600 border-purple-500/30",
  amber: "bg-amber-500/20 text-amber-600 border-amber-500/30",
};
