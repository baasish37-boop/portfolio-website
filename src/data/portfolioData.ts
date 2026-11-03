import { SkillItem, EducationItem, ExperienceItem, ProjectItem, PhilosophyPrinciple, AchievementItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Aasish Bhatt',
  greeting: "HELLO, I'M AASISH BHATT",
  headline: 'Exploring Mathematics. Inspiring Minds. Creating Possibilities.',
  subtitles: [
    'Mathematics Graduate',
    'Secondary Level Teacher',
    'Mathematical Modelling Enthusiast',
    'Creative Learning Advocate'
  ],
  bio: 'I am a Mathematics graduate and secondary level educator passionate about transforming complex mathematical concepts into meaningful learning experiences. I believe mathematics is not just about numbers and equations; it is a language of logic, creativity, and discovery.',
  extendedBio: [
    'With a Bachelor of Science in Mathematics and hands-on experience in secondary education, my mission is to bridge theoretical mathematical rigor with accessible, intuitive teaching.',
    'I believe that every student possesses the innate capacity to think analytically when guided through visualization, logical exploration, and real-world context rather than rote memorization.',
    'Beyond the classroom, my intellectual curiosity extends into applied mathematical modelling, computational problem-solving, and developing interactive instructional tools that make abstract concepts tangible.'
  ],
  degree: 'Bachelor of Science (B.Sc.) in Mathematics',
  currentRole: 'Secondary Level Mathematics Teacher',
  location: 'Nepal',
  email: 'baasish37@gmail.com',
  interests: ['Mathematics', 'Education', 'Mathematical Modelling', 'Research', 'Technology', 'Creative Learning'],
  socials: {
    email: 'baasish37@gmail.com',
    linkedin: 'https://linkedin.com/in/aasish-bhatt',
    facebook: 'https://facebook.com/aasish.bhatt',
    github: 'https://github.com/aasishbhatt'
  }
};

export const CORE_QUALITIES = [
  {
    title: 'Analytical Thinking',
    icon: 'BrainCircuit',
    description: 'Deconstructing multi-layered problems into fundamental axiomatic principles and clear logical progressions.'
  },
  {
    title: 'Problem-Solving',
    icon: 'Compass',
    description: 'Cultivating systematic methodologies to tackle unfamiliar challenges with mathematical precision.'
  },
  {
    title: 'Communication Skills',
    icon: 'MessageSquareText',
    description: 'Translating dense mathematical notation into crystal-clear explanations accessible to diverse learners.'
  },
  {
    title: 'Teaching & Mentoring',
    icon: 'GraduationCap',
    description: 'Nurturing student confidence, curiosity, and independent inquiry within an encouraging classroom.'
  },
  {
    title: 'Mathematical Research',
    icon: 'FlaskConical',
    description: 'Investigating dynamical systems, differential equations, and computational methods in applied mathematics.'
  },
  {
    title: 'Creative Learning Approaches',
    icon: 'Sparkles',
    description: 'Employing visual geometry, interactive digital tools, and physical analogies to illuminate abstract theory.'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Mathematics',
    field: 'Pure & Applied Mathematics',
    institution: '[University / College Name Placeholder — e.g., Tribhuvan University Affiliated Campus]',
    isPlaceholderInstitution: true,
    period: '[Graduation Year Placeholder — e.g., 2020 – 2024]',
    location: 'Nepal',
    description: 'Comprehensive undergraduate degree focusing on higher mathematical theory, analytical rigor, and applied computational modelling.',
    coreSubjects: [
      'Mathematical Modelling',
      'Ordinary & Partial Differential Equations',
      'Real & Complex Mathematical Analysis',
      'Abstract & Linear Algebra',
      'Numerical Methods',
      'Probability & Mathematical Statistics'
    ],
    highlights: [
      'Conducted undergraduate study on mathematical modelling and differential equation dynamics',
      'Extensive coursework in advanced calculus, vector analysis, and linear systems',
      'Synthesized theoretical proofs with practical problem-solving applications'
    ]
  },
  {
    degree: 'Higher Secondary Education (+2 Science / Mathematics)',
    field: 'Physical Sciences & Mathematics',
    institution: '[Higher Secondary Institution Placeholder]',
    isPlaceholderInstitution: true,
    period: '[Academic Years Placeholder — e.g., 2018 – 2020]',
    location: 'Nepal',
    description: 'Solid foundational studies in advanced secondary mathematics, physics, and chemistry laying the groundwork for mathematical inquiry.',
    coreSubjects: [
      'Calculus & Coordinate Geometry',
      'Algebra & Trigonometry',
      'Physics & Mechanics',
      'Scientific Methodology'
    ],
    highlights: [
      'Top-tier marks in core mathematics and mechanics',
      'Participated in science exhibitions and mathematical problem-solving circles'
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    role: 'Secondary Level Mathematics Teacher',
    institution: '[Secondary School Name Placeholder]',
    isPlaceholderInstitution: true,
    period: '[Joining Date / Current Tenure Placeholder — e.g., 2024 – Present]',
    location: 'Nepal',
    tagline: 'Dedicated to helping students understand mathematical concepts through logical explanations, practical examples, interactive lessons, and problem-solving activities.',
    responsibilities: [
      'Teaching mathematics at secondary level across algebra, geometry, trigonometry, and arithmetic.',
      'Developing structured lesson plans, diagnostic worksheets, and conceptual learning materials.',
      'Simplifying complex mathematical concepts into digestible, sequential milestones.',
      'Encouraging critical thinking, exploratory questioning, and analytical skills among learners.',
      'Evaluating student performance, diagnostic assessments, and tracking academic progress.',
      'Creating an engaging, inclusive classroom environment where questions are celebrated.'
    ],
    teachingMethods: [
      'Socratic Questioning & Inquiry-Based Learning',
      'Step-by-Step Visual Geometry & Coordinate Mapping',
      'Connecting Equations to Real-World Physical Phenomena',
      'Formative Continuous Feedback & Remedial Mentorship'
    ]
  }
];

export const SKILLS_LIST: SkillItem[] = [
  // Mathematics
  {
    name: 'Algebra',
    category: 'mathematics',
    icon: 'Variable',
    description: 'Polynomial rings, linear equation systems, matrices, quadratic theory, and structural symmetry.',
    topics: ['Matrix Inverses & Determinants', 'Eigenvalues & Vectors', 'Polynomial Factorization']
  },
  {
    name: 'Calculus',
    category: 'mathematics',
    icon: 'TrendingUp',
    description: 'Differential & integral calculus, multivariate limits, optimization, and fundamental theorems.',
    topics: ['Definite & Indefinite Integrals', 'Taylor & Maclaurin Series', 'Rates of Change & Optimization']
  },
  {
    name: 'Differential Equations',
    category: 'mathematics',
    icon: 'Sigma',
    description: 'Analytical & numerical solutions for first and second order ODEs, boundary value problems, and dynamical trajectories.',
    topics: ['Separable & Exact Equations', 'Harmonic Oscillators', 'Phase Space Trajectories']
  },
  {
    name: 'Mathematical Modelling',
    category: 'mathematics',
    icon: 'Network',
    description: 'Translating real-world biological, physical, and economic phenomena into predictive mathematical frameworks.',
    topics: ['SIR Epidemic Models', 'Population Growth Dynamics', 'Sensitivity Analysis']
  },
  {
    name: 'Statistics & Probability',
    category: 'mathematics',
    icon: 'BarChart3',
    description: 'Descriptive & inferential statistics, probability distributions, variance analysis, and regression modelling.',
    topics: ['Normal & Binomial Distributions', 'Hypothesis Testing', 'Least-Squares Regression']
  },
  {
    name: 'Mathematical Analysis',
    category: 'mathematics',
    icon: 'Binary',
    description: 'Rigorous epsilon-delta definitions, convergence of sequences, metric spaces, and continuity.',
    topics: ['Epsilon-Delta Continuity', 'Bolzano-Weierstrass Theorem', 'Riemann Integration Proofs']
  },

  // Teaching
  {
    name: 'Lesson Planning',
    category: 'teaching',
    icon: 'CalendarDays',
    description: 'Designing structured, scaffolded instructional roadmaps with clear cognitive milestones and target learning outcomes.',
    topics: ['Scaffolded Instruction', 'Curriculum Mapping', 'Differentiated Objectives']
  },
  {
    name: 'Classroom Management',
    category: 'teaching',
    icon: 'Users',
    description: 'Fostering an organized, respectful, and lively learning atmosphere that maximizes student focus and collaborative safety.',
    topics: ['Active Participation Techniques', 'Positive Behavioral Support', 'Time Orchestration']
  },
  {
    name: 'Student Mentoring',
    category: 'teaching',
    icon: 'HeartHandshake',
    description: 'Individualized academic guidance, demystifying math anxiety, and coaching students toward competitive excellence.',
    topics: ['One-on-One Remediation', 'Overcoming Math Anxiety', 'Talent Mentorship']
  },
  {
    name: 'Curriculum Development',
    category: 'teaching',
    icon: 'BookOpen',
    description: 'Aligning national secondary syllabus requirements with contemporary pedagogical innovations and supplementary enrichment.',
    topics: ['Syllabus Alignment', 'Enrichment Modules', 'Interdisciplinary Problem Sets']
  },
  {
    name: 'Educational Assessment',
    category: 'teaching',
    icon: 'CheckCircle2',
    description: 'Designing authentic diagnostic quizzes, rubric-based formative evaluations, and insightful summative examinations.',
    topics: ['Rubric-Based Evaluation', 'Formative Diagnostic Quizzes', 'Performance Tracking']
  },

  // Technology & Digital Skills
  {
    name: 'Microsoft Office',
    category: 'technology',
    icon: 'FileSpreadsheet',
    description: 'Advanced Excel calculation sheets, automated grading templates, Word equation typesetting, and academic records.',
    topics: ['Formulas & Pivot Analysis', 'Document Typesetting', 'Data Record Keeping']
  },
  {
    name: 'PowerPoint Presentations',
    category: 'technology',
    icon: 'Presentation',
    description: 'Crafting visually captivating, animated slide decks that visually break down geometric constructions and proof stages.',
    topics: ['Dynamic Geometric Step Builds', 'Visual Concept Diagrams', 'Interactive Slide Quizzes']
  },
  {
    name: 'Digital Learning Tools',
    category: 'technology',
    icon: 'MonitorSmartphone',
    description: 'Leveraging dynamic math software (GeoGebra, Desmos) and learning platforms to demonstrate parametric graphing.',
    topics: ['GeoGebra Dynamic Geometry', 'Desmos Graphing Visuals', 'Digital Whiteboards']
  },
  {
    name: 'AI-Assisted Content Creation',
    category: 'technology',
    icon: 'Cpu',
    description: 'Harnessing modern computational and AI tools to generate diversified practice problems, adaptive drills, and explanatory analogies.',
    topics: ['Problem Variation Generation', 'Concept Explanation Synthesis', 'Visual Aid Prompting']
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'project-modelling',
    title: 'Mathematical Modelling Research [Placeholder]',
    category: 'modelling',
    categoryLabel: 'Mathematical Modelling',
    summary: 'Investigation of differential equations applied to dynamical systems and natural growth phenomena.',
    description: 'An academic exploration examining how system of ordinary differential equations (ODEs) can accurately predict real-world phenomena such as population fluctuations and resource equilibrium.',
    technologies: ['Differential Equations', 'Numerical Analysis', 'Euler & Runge-Kutta Methods', 'Data Visualization'],
    methods: ['Dynamical Systems Formulation', 'Equilibrium Point Stability Analysis', 'Phase Portrait Mapping'],
    equationSample: 'dN/dt = rN(1 - N/K)',
    status: 'Active Exploration',
    details: {
      problemStatement: 'Investigating how nonlinear continuous functions model the carrying capacity constraints in closed biological environments.',
      methodology: 'Formulating first-order autonomous differential systems, solving for fixed points, and plotting numerical phase trajectories.',
      educationalImpact: 'Provides secondary students with a direct real-life application of calculus beyond abstract algebraic drills.',
      keyTakeaway: 'Demonstrates the power of calculus as the language that governs change in physical and ecological systems.'
    }
  },
  {
    id: 'project-resources',
    title: 'Mathematics Teaching Resources [Placeholder]',
    category: 'resources',
    categoryLabel: 'Teaching Resources',
    summary: 'A curated pedagogical repository of interactive worksheets, visual geometry guides, and step-by-step problem breakdowns.',
    description: 'Designed specifically for secondary level learners to bridge the gap between rote formula memorization and deep intuitive comprehension of trigonometry, algebra, and coordinate geometry.',
    technologies: ['Curriculum Design', 'GeoGebra Visuals', 'LaTeX Typography', 'Interactive Worksheets'],
    methods: ['Concept Scaffolding', 'Visual Geometric Proofs', 'Error-Analysis Guided Exercises'],
    equationSample: 'sin²(θ) + cos²(θ) = 1',
    status: 'Teaching In Use',
    details: {
      problemStatement: 'Many secondary learners experience math anxiety due to premature formula memorization without geometric intuition.',
      methodology: 'Constructing unit-circle interactive diagrams where sine, cosine, and tangent are understood as physical line segment lengths.',
      educationalImpact: 'Students showed heightened retention and enthusiasm when exploring dynamic visual models before writing algebraic equations.',
      keyTakeaway: 'Visual intuition provides an indelible mental scaffold that makes subsequent algebraic proofs self-evident.'
    }
  },
  {
    id: 'project-presentations',
    title: 'Educational Presentations [Placeholder]',
    category: 'presentations',
    categoryLabel: 'Digital Learning',
    summary: 'High-impact multimedia slide decks engineered for secondary classroom engagement and concept animation.',
    description: 'A comprehensive suite of structured PowerPoint presentations combining animated proof steps, mathematical history vignettes, and real-time checkpoint questions to maintain classroom energy.',
    technologies: ['Microsoft PowerPoint', 'Digital Canvas Tools', 'Multimedia Pedagogics', 'Visual Storytelling'],
    methods: ['Progressive Information Reveal', 'Color-Coded Variable Tracking', 'Interactive Poll Checkpoints'],
    equationSample: 'ax² + bx + c = 0 ⟹ x = (-b ± √(b² - 4ac)) / 2a',
    status: 'Curriculum Material',
    details: {
      problemStatement: 'Traditional static blackboard lectures can struggle to keep 40+ secondary students synchronized through multi-stage proofs.',
      methodology: 'Color-coding each variable through its algebraic transformation so students never lose track of where terms originate.',
      educationalImpact: 'Enhanced attention span and decreased common arithmetic sign mistakes by over 30% during algebraic manipulations.',
      keyTakeaway: 'Intentional visual design and progressive reveals transform passive listeners into active participants.'
    }
  },
  {
    id: 'project-research',
    title: 'Academic Research Projects [Placeholder]',
    category: 'research',
    categoryLabel: 'Academic Research',
    summary: 'Undergraduate research inquiry focusing on numerical approximation methods and rate-of-convergence analysis.',
    description: 'A structured investigation examining the computational trade-offs, stability thresholds, and error propagation across diverse iterative root-finding and numerical integration techniques.',
    technologies: ['Numerical Methods', 'Mathematical Analysis', 'Matrix Algebra', 'Algorithm Analysis'],
    methods: ['Newton-Raphson Convergence Testing', 'Taylor Remainder Bound Estimation', 'Error Propagation Modelling'],
    equationSample: 'x_{n+1} = x_n - f(x_n)/f\'(x_n)',
    status: 'Ready for Review',
    details: {
      problemStatement: 'Analyzing the conditions under which iterative algorithms converge quadratically versus when they diverge or cycle in ill-conditioned functions.',
      methodology: 'Evaluating convergence orders, asymptotic error constants, and formulating criteria for starting value selection.',
      educationalImpact: 'Translates high-level numerical analysis into concrete examples for introducing senior secondary students to computational thinking.',
      keyTakeaway: 'Numerical methods illuminate the vital bridge connecting pure theoretical mathematics with modern computing algorithms.'
    }
  }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'Understand Before Memorizing',
    tagline: 'Formulas fade; fundamental logic endures.',
    description: 'A formula is merely the final shorthand of an insightful journey. When students understand why an equation works through its underlying geometric or logical roots, memorization becomes effortless and natural.',
    classroomApplication: 'Deconstruct theorems into intuitive visual diagrams before introducing algebraic symbols.',
    icon: 'Lightbulb'
  },
  {
    number: '02',
    title: 'Learn Through Exploration',
    tagline: 'Active discovery sparks authentic retention.',
    description: 'Mathematics is an active verb, not a spectator sport. By presenting engaging puzzles, encouraging educated hypotheses, and analyzing mistakes as learning data, students build enduring analytical confidence.',
    classroomApplication: 'Start units with open-ended exploratory problems that motivate the need for new mathematical tools.',
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Connect Theory with Real Life',
    tagline: 'Bridging the abstract with everyday experience.',
    description: 'From the parabolic arc of a thrown ball to the compound interest in banking or geometric symmetry in architecture, mathematics is the underlying operating system of our physical and social world.',
    classroomApplication: 'Every major concept is linked to a practical application in engineering, nature, or technology.',
    icon: 'Globe'
  },
  {
    number: '04',
    title: 'Make Math Enjoyable & Accessible',
    tagline: 'Dismantling anxiety through empathy and patience.',
    description: 'Math anxiety is widespread but entirely preventable. By creating a warm, encouraging environment where wrong answers are viewed as constructive stepping stones, every student can experience the joy of the "Aha!" moment.',
    classroomApplication: 'Celebrate innovative attempts, reward clarity of thought, and provide multiple pathways to a solution.',
    icon: 'Smile'
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: 'Bachelor of Science (B.Sc.) in Mathematics Degree',
    category: 'Academic',
    issuer: '[University / Academic Board Placeholder]',
    year: '[Year Placeholder]',
    description: 'Successfully completed rigorous four-year undergraduate mathematics program with emphasis on analysis, algebra, and applied modelling.',
    isPlaceholder: true
  },
  {
    title: 'Secondary Level Teaching Qualification & Practice',
    category: 'Teaching',
    issuer: '[Education Board / Institution Placeholder]',
    year: '[Year Placeholder]',
    description: 'Dedicated pedagogical service delivering curriculum-aligned mathematics education to secondary level students in Nepal.',
    isPlaceholder: true
  },
  {
    title: 'Pedagogical Workshop & Modern Teaching Methodologies',
    category: 'Training & Workshop',
    issuer: '[Teacher Training Workshop / Program Placeholder]',
    year: '[Year Placeholder]',
    description: 'Participated in advanced instructional design and interactive teaching methodologies for STEM educators.',
    isPlaceholder: true
  },
  {
    title: 'Mathematics Exhibition & Mentorship Recognition',
    category: 'Award',
    issuer: '[School / Community Science Forum Placeholder]',
    year: '[Year Placeholder]',
    description: 'Guidance and mentorship for student-led mathematical model displays and problem-solving circles.',
    isPlaceholder: true
  }
];

export const FAMOUS_FORMULAS = [
  { label: 'Calculus Integral', expr: '∫ f(x) dx = F(x) + C' },
  { label: "Euler's Identity", expr: 'e^(iπ) + 1 = 0' },
  { label: 'Mass-Energy Equivalence', expr: 'E = mc²' },
  { label: 'Basel Series Sum', expr: '∑ 1/n² = π²/6' },
  { label: 'Fundamental Limit', expr: 'lim (x→∞) (1 + 1/x)ˣ = e' },
  { label: 'Pythagorean Theorem', expr: 'a² + b² = c²' },
  { label: 'Gaussian Normal Integral', expr: '∫ e^(-x²) dx = √π' }
];
