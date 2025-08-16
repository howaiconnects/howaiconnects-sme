// Course data structure for dynamic routing
export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: number;
  price: string;
  popular?: boolean;
  link: string;
  syllabus: string[];
  instructor: string;
  enrolled: number;
  rating: number;
}

export const coursesData: Course[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals for Business',
    description: 'Master the basics of artificial intelligence and its applications in modern business environments.',
    level: 'Beginner',
    duration: '6 weeks',
    modules: 12,
    price: '$299',
    popular: true,
    link: '/courses/ai-fundamentals',
    syllabus: [
      'Introduction to AI and Machine Learning',
      'AI Applications in Business',
      'Data and AI Strategy',
      'Implementing AI Solutions',
      'AI Ethics and Governance',
      'Future of AI in Business'
    ],
    instructor: 'Dr. Sarah Chen',
    enrolled: 2847,
    rating: 4.9
  },
  {
    id: 'automation-mastery',
    title: 'Business Process Automation Mastery',
    description: 'Transform your business operations with advanced automation techniques and tools.',
    level: 'Intermediate',
    duration: '8 weeks',
    modules: 16,
    price: '$499',
    link: '/courses/automation-mastery',
    syllabus: [
      'Process Analysis and Mapping',
      'Automation Tools Overview',
      'Workflow Design and Implementation',
      'Integration Strategies',
      'Monitoring and Optimization',
      'Advanced Automation Patterns'
    ],
    instructor: 'Michael Rodriguez',
    enrolled: 1923,
    rating: 4.8
  },
  {
    id: 'ai-strategy-executive',
    title: 'AI Strategy for Executives',
    description: 'Executive-level course on developing and implementing AI strategies for organizational transformation.',
    level: 'Advanced',
    duration: '4 weeks',
    modules: 8,
    price: '$799',
    link: '/courses/ai-strategy-executive',
    syllabus: [
      'AI Strategic Planning',
      'ROI and Business Case Development',
      'Organizational Change Management',
      'AI Governance and Risk Management',
      'Building AI Teams',
      'Scaling AI Initiatives'
    ],
    instructor: 'Jennifer Wang',
    enrolled: 1256,
    rating: 4.9
  },
  {
    id: 'data-analytics-ai',
    title: 'Data Analytics & AI Integration',
    description: 'Learn to leverage data analytics and AI for business insights and decision making.',
    level: 'Intermediate',
    duration: '10 weeks',
    modules: 20,
    price: '$649',
    link: '/courses/data-analytics-ai',
    syllabus: [
      'Data Collection and Management',
      'Statistical Analysis Fundamentals',
      'Machine Learning for Analytics',
      'Predictive Modeling',
      'Data Visualization',
      'AI-Powered Business Intelligence'
    ],
    instructor: 'David Kim',
    enrolled: 1678,
    rating: 4.7
  },
  {
    id: 'chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Build intelligent chatbots and conversational AI systems for customer service and support.',
    level: 'Intermediate',
    duration: '6 weeks',
    modules: 12,
    price: '$399',
    link: '/courses/chatbot-development',
    syllabus: [
      'Natural Language Processing Basics',
      'Chatbot Architecture Design',
      'Intent Recognition and Response',
      'Integration with Business Systems',
      'Testing and Optimization',
      'Advanced Conversation Flows'
    ],
    instructor: 'Alex Thompson',
    enrolled: 2134,
    rating: 4.6
  },
  {
    id: 'ai-marketing',
    title: 'AI-Powered Marketing Automation',
    description: 'Revolutionize your marketing efforts with AI-driven automation, personalization, and analytics.',
    level: 'Beginner',
    duration: '5 weeks',
    modules: 10,
    price: '$349',
    link: '/courses/ai-marketing',
    syllabus: [
      'Marketing Automation Fundamentals',
      'AI in Customer Segmentation',
      'Personalization Engines',
      'Predictive Marketing Analytics',
      'Campaign Optimization',
      'ROI Measurement and Analytics'
    ],
    instructor: 'Maria Garcia',
    enrolled: 3021,
    rating: 4.8
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getCoursesByLevel = (level: string): Course[] => {
  return coursesData.filter(course => course.level.toLowerCase() === level.toLowerCase());
};

export const getPopularCourses = (): Course[] => {
  return coursesData.filter(course => course.popular || course.enrolled > 2000);
};