export type Programme = {
  slug: string;
  title: string;
  cardTitle: string;
  age: string;
  schedule: string;
  blurb: string;
  action: string;
  dashed?: boolean;
  summary: string;
  kicker: string;
  detailAge?: string;
  detailSchedule?: string;
  experienceTitle?: string;
  developsTitle?: string;
  moreLists?: { title: string; items: string[] }[];
  hero?: {
    src: string;
    alt: string;
    aspect: string;
    position: string;
  };
  ctaLines?: [string, string];
  ctaLabel?: string;
  overview: string[];
  about: string[];
  experience: string[];
  develops: string[];
  cta: string;
};

export const programmesIntro = {
  kicker: "Programmes Overview",
  title: "A meaningful beginning for every age and stage.",
  lead: "A meaningful beginning",
  accent: "for every age and stage.",
  body: "No two children begin in exactly the same place. Our programmes are thoughtfully designed around each developmental stage while allowing every child to progress at their own pace.",
};

export const programmes: Programme[] = [
  {
    slug: "preschool",
    title: "Preschool",
    cardTitle: "Preschool",
    age: "Ages 2–4",
    schedule: "Weekday Programme",
    blurb:
      "A joyful, play-led foundation that develops language, early numeracy, creativity, independence and social confidence.",
    action: "View Programme",
    summary:
      "A joyful, play-led foundation that nurtures language, creativity, independence and social confidence—preparing children not only for school, but for everything that comes after.",
    kicker: "Early years",
    hero: {
      src: "/images/preschool-hero.jpg",
      alt: "A child holding a handmade Happy first day of school sign",
      aspect: "700/416",
      position: "center 28%",
    },
    ctaLines: ["Give Their Curiosity Somewhere", "Beautiful to Grow."],
    ctaLabel: "Book a Preschool Visit",
    overview: [
      "At The Crayon Box, preschool is not about rushing children into formal academics. It is about creating the right environment for curiosity, confidence and a genuine love of learning to emerge.",
      "Our curriculum combines Montessori foundations, purposeful play, storytelling, creative expression and guided exploration. Every experience is thoughtfully designed to support the whole child—intellectually, socially, emotionally and physically.",
    ],
    about: [
      "Children learn best when they can touch, move, question, imagine and discover.",
      "Our educators introduce early concepts through engaging, hands-on experiences rather than passive instruction. Children explore language, numbers, nature, art, movement and everyday life while gradually learning to communicate, collaborate and work independently.",
      "The programme follows a familiar daily rhythm that gives children security while allowing enough freedom for individual exploration.",
    ],
    experience: [
      "Storytelling, phonics and vocabulary-building activities",
      "Early numeracy through sorting, counting, patterns and comparison",
      "Montessori-inspired practical-life experiences",
      "Art, music, movement and imaginative play",
      "Sensory exploration and hands-on discovery",
      "Fine- and gross-motor development",
      "Group activities that encourage sharing and cooperation",
      "Daily routines that build independence and responsibility",
    ],
    develops: [
      "Confident communication",
      "Early literacy and numeracy foundations",
      "Curiosity and problem-solving",
      "Emotional awareness",
      "Social confidence",
      "Physical coordination",
      "Creativity and self-expression",
      "School readiness without unnecessary pressure",
    ],
    cta: "Give Their Curiosity Somewhere Beautiful to Grow.",
  },
  {
    slug: "parent-toddler",
    title: "Parent–Toddler",
    cardTitle: "Parent–Toddler",
    age: "Ages 1–2.5",
    schedule: "Parent-Accompanied",
    blurb:
      "A gentle first step into structured learning through music, movement, sensory exploration and shared parent-child experiences.",
    action: "View Programme",
    summary:
      "A gentle introduction to learning beyond home—where toddlers explore new experiences with the reassurance of having their parent or caregiver beside them.",
    kicker: "First steps",
    detailSchedule: "Parent-Accompanied Programme",
    hero: {
      src: "/images/parent-toddler-hero.jpg",
      alt: "A toddler in a floral dress waving beside a chalkboard and a paper fish craft",
      aspect: "700/393",
      position: "center 18%",
    },
    ctaLines: ["Their First Learning Journey", "Begins With You."],
    ctaLabel: "Join a Parent–Toddler Session",
    overview: [
      "The Parent–Toddler programme creates a comfortable bridge between home and a child’s first structured social environment.",
      "Through music, movement, sensory play and shared activities, toddlers become familiar with new people, spaces and routines without being separated too quickly from their trusted caregiver.",
      "Parents participate alongside their child while gaining a deeper understanding of how toddlers communicate, explore and develop.",
    ],
    about: [
      "Each session is intentionally relaxed, responsive and age-appropriate. Children are encouraged to participate at their own pace—whether they begin by observing, exploring independently or joining the group immediately.",
      "There is no pressure to perform. The focus is on connection, discovery and helping toddlers associate learning with comfort, joy and togetherness.",
      "Over time, children become more confident in unfamiliar settings and better prepared for future independent programmes.",
    ],
    experience: [
      "Music, rhythm and action songs",
      "Sensory and messy-play activities",
      "Stories, puppets and early language experiences",
      "Movement and coordination games",
      "Parent-child creative activities",
      "Guided exploration with open-ended materials",
      "Gentle interaction with other toddlers",
      "Simple routines that introduce group participation",
    ],
    develops: [
      "Parent-child bonding",
      "Early speech and communication",
      "Sensory development",
      "Physical coordination",
      "Social awareness",
      "Emotional security",
      "Confidence in new environments",
      "A smoother transition into preschool",
    ],
    cta: "Their First Learning Journey Begins With You.",
  },
  {
    slug: "playdates",
    title: "Playdates",
    cardTitle: "Playdates",
    age: "Ages 1–5",
    schedule: "Weekend Programme",
    blurb:
      "Thoughtfully guided gatherings where children explore new themes, express themselves, make friends and simply enjoy being children.",
    action: "View Programme",
    summary:
      "Joyful themed gatherings where children create, explore and make new friends—with enough guidance to stay engaged and enough freedom to simply play.",
    kicker: "Together",
    hero: {
      src: "/images/playdates-hero.jpg",
      alt: "Children’s hands painting with bright colours on a shared sheet of paper",
      aspect: "700/475",
      position: "center",
    },
    ctaLines: ["Because the Best Childhood", "Memories Begin With Play."],
    ctaLabel: "Join the Next Playdate",
    overview: [
      "The Crayon Box Playdates transform ordinary weekends into meaningful opportunities for creativity, connection and discovery.",
      "Every session is built around a fresh, child-friendly theme and combines guided activities with unstructured play. Children can participate in ways that feel natural to them while gradually becoming more comfortable interacting with new people and environments.",
      "It is enrichment without the pressure of a formal class.",
    ],
    about: [
      "Play is how young children understand themselves, other people and the world around them.",
      "Our playdates create a warm, inclusive setting where children can experiment with materials, express ideas, move freely and build friendships. Activities are carefully planned, but the experience remains flexible enough to respect different personalities and comfort levels.",
      "Whether a child is naturally outgoing or needs time to observe, every child is welcomed without expectation.",
    ],
    experience: [
      "Seasonal and imaginative themes",
      "Art, craft and sensory exploration",
      "Stories, puppets and role-play",
      "Music and movement",
      "Collaborative games",
      "Hands-on discovery activities",
      "Guided group experiences",
      "Time for child-led free play",
    ],
    develops: [
      "Natural social interaction",
      "Creativity and imagination",
      "Communication and self-expression",
      "Sharing and cooperation",
      "Confidence in group settings",
      "Curiosity about new experiences",
      "Meaningful weekend engagement",
      "A sense of belonging and community",
    ],
    cta: "Because the Best Childhood Memories Begin With Play.",
  },
  {
    slug: "extracurricular",
    title: "Extracurricular",
    cardTitle: "Extracurricular",
    age: "Ages 3–8",
    schedule: "After-School & Weekends",
    blurb:
      "Creative and skill-building clubs that introduce children to art, robotics, music, communication and exciting new interests.",
    action: "View Programme",
    summary:
      "Creative and skill-building clubs that help children discover new interests, develop real abilities and experience the confidence of doing something they love.",
    kicker: "Beyond the day",
    detailSchedule: "After-School & Weekend Programmes",
    hero: {
      src: "/images/extracurricular-hero.jpg",
      alt: "Two children building with colourful blocks beside an adult",
      aspect: "700/445",
      position: "center 52%",
    },
    ctaLines: ["One New Interest Could", "Become a Lifelong Passion."],
    ctaLabel: "Find the Right Programme",
    overview: [
      "Children’s interests often extend far beyond the regular classroom. Our extracurricular programmes give them the space, tools and encouragement to explore those interests meaningfully.",
      "From creative arts and music to robotics and public speaking, every club is designed to make learning active, enjoyable and developmentally appropriate.",
      "Experienced mentors guide children through progressive experiences while ensuring that curiosity—not pressure—continues to lead the way.",
    ],
    about: [
      "Our extracurricular programmes are designed around exploration before specialisation.",
      "Children are introduced to new disciplines through hands-on activities, creative challenges and collaborative projects. They develop practical abilities while also strengthening communication, persistence, problem-solving and independent thinking.",
      "The objective is not only to teach a particular skill, but to help children discover what excites them and feel confident pursuing it.",
    ],
    experience: [
      "Creative arts and visual expression",
      "Robotics and early technology",
      "Music, rhythm and movement",
      "Public speaking and communication",
      "STEM-based discovery",
      "Theatre and imaginative performance",
      "Practical life skills",
      "Collaborative problem-solving",
    ],
    develops: [
      "Creative confidence",
      "Communication and presentation",
      "Logical and critical thinking",
      "Focus and persistence",
      "Collaboration and teamwork",
      "Independent decision-making",
      "Practical, real-world abilities",
      "Openness to new interests and challenges",
    ],
    cta: "One New Interest Could Become a Lifelong Passion.",
  },
  {
    slug: "day-care",
    title: "Day-Care",
    cardTitle: "Day-Care",
    age: "Flexible Care",
    schedule: "Weekdays",
    blurb:
      "A safe and nurturing extension of home, with attentive care, familiar routines, meaningful play and restful moments throughout the day.",
    action: "Explore Day-Care",
    dashed: true,
    summary:
      "A thoughtful extension of home where children feel secure, understood and meaningfully engaged throughout the day.",
    kicker: "Through the day",
    detailAge: "Flexible Weekday Care",
    detailSchedule: "Safe, Structured and Nurturing",
    hero: {
      src: "/images/day-care-hero.jpg",
      alt: "A child arranging coloured pencils beside a box of crayons",
      aspect: "700/373",
      position: "center 60%",
    },
    ctaLines: ["Care They Can Feel.", "Confidence You Can See."],
    ctaLabel: "Schedule a Day-Care Visit",
    experienceTitle: "A Typical Day Includes",
    developsTitle: "What Parents Can Expect",
    overview: [
      "Day-care should provide much more than supervision.",
      "At The Crayon Box, children spend their day in a warm, carefully prepared environment shaped around attentive care, familiar routines, meaningful play and age-appropriate independence.",
      "Our educators and caregivers take time to understand each child’s habits, preferences and comfort needs—creating continuity between home and day-care while helping children gradually become more confident.",
    ],
    about: [
      "Young children thrive when their days feel predictable but never monotonous.",
      "Our day-care rhythm balances active play, creative exploration, social interaction, meals, quiet activities and rest. Children receive the freedom to explore while remaining supported by attentive adults and consistent routines.",
      "Every part of the experience—from arrival to departure—is designed to help children feel safe, settled and genuinely cared for.",
    ],
    experience: [
      "Warm arrival and settling-in time",
      "Age-appropriate learning activities",
      "Indoor movement and active play",
      "Stories, art and creative exploration",
      "Meals and snack routines",
      "Quiet activities and rest",
      "Social interaction and group play",
      "Calm preparation for departure",
    ],
    develops: [
      "Attentive, individualised care",
      "Safe and child-friendly surroundings",
      "Consistent hygiene practices",
      "A balanced daily rhythm",
      "Meaningful engagement beyond screen time",
      "Support for everyday independence",
      "Clear communication about the child’s day",
      "A caring team that understands young children",
    ],
    moreLists: [
      {
        title: "What to Bring",
        items: [
          "Labelled water bottle",
          "Meals or snacks, where applicable",
          "A change of clothes",
          "Child-specific care essentials",
          "A familiar comfort item, if required",
          "Any important care or routine instructions",
        ],
      },
    ],
    cta: "Care They Can Feel. Confidence You Can See.",
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
