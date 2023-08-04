export interface Meta {
  id: number;
  scope: string;
  title: string;
  description: string;
  abstract: string;
  keywords: string;
}

export interface OgMeta {
  id: number;
  scope: string;
  pageUrl: string;
  title: string;
  desc: string;
  imageUrl: string;
}

export interface Testimonial {}

export type InformationEntry = Paragraph | List;

export interface Company {
  id: number;
  scope: string;
  name: string;
  type: string;
  color: string;
  website?: string | null;
  rank: number;
}

export interface Paragraph {
  type: "paragraph";
  data: string;
}

export interface List {
  type: "list";
  data: string;
}

export interface Card {
  title: string;
  description: string;
}

export interface Location {
  id: 1;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
  countryId: number;
  acronym: string;
}

export interface FAQItem {
  type: string;
  question: string;
  answer: Paragraph[];
}

export interface Scholarship {
  id: string;
  scope: string;
  name: string;
  description: InformationEntry[];
  location: Location;
  scholarshipStartDate: string;
  applicationEndDate: string;
  duration: number;
  position: string;
  about: InformationEntry[];
  tuition: number;
  totalValue: number;
  stipendPerMonth: number;
  stipendPerYear: number;
  remaining: string;
  studyCommitment: number;
  internshipCommitment: number;
  studyCommitmentText: string;
  internshipCommitmentText: string;
  workCommitment: number;
  workCommitmentDuration: string;
  workCommitmentType: string;
  credits: number;
  courses: number;
  degree: string;
  whatYouWillLearn: Card[];
  internshipDescription: InformationEntry[];
  internshipExpectation: InformationEntry[];
  internshipPotentialRoles: InformationEntry[];
  programDirectorIds: number[];
  programInstructorIds: number[];
  whoShouldApplyText: InformationEntry[];
  universityRequirements: List;
  internshipRequirements: List;
  encourageText: Paragraph[];
  faqs: {
    item: FAQItem[];
    categories: string[];
  };
  company: Company;
}

export interface GetDataScienceApprenticeshipZeptolabResponse {
  id: number;
  scope: string;
  slug: string;
  isPublished: false;
  scholarship: Scholarship;
}
