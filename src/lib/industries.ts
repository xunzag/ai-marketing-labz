export type SolutionBlock = {
  title: string;
  // Part of the title rendered in the brand colour
  highlight: string;
  subtitle: string;
  body: string;
  included: string[];
  outcomes: string[];
};

export type Industry = {
  slug: string;
  name: string;
  cardTitle: string;
  tagline: string;
  hero: { before: string; highlight: string; after: string; body: string };
  overview: { title: string; body: string };
  solutions: SolutionBlock[];
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    cardTitle: "Real Estate Solutions",
    tagline: "Buyer Acquisition & Project Marketing",
    hero: {
      before: "Real Estate",
      highlight: "Solutions",
      after: "That Generate Qualified Buyers",
      body: "We help real estate developers, agencies, and property consultants attract high-quality leads, launch projects successfully, and convert inquiries into sales through data-driven digital marketing and automation.",
    },
    overview: {
      title: "Accelerate Your Real Estate Growth",
      body: "From buyer acquisition to CRM automation and campaign analytics, we provide end-to-end marketing solutions designed to increase visibility, generate qualified leads, and maximize your return on investment.",
    },
    solutions: [
      {
        title: "Buyer Acquisition System™",
        highlight: "Acquisition System™",
        subtitle: "Turn Marketing Into Qualified Buyer Inquiries",
        body: "Reach the right audience through highly targeted Meta and Google advertising campaigns. We create optimized landing pages, integrate your CRM, and implement lead tracking to ensure every inquiry is captured and managed efficiently.",
        included: [
          "Meta Advertising Campaigns",
          "Google Ads Management",
          "High-Converting Landing Pages",
          "CRM Integration",
          "Lead Tracking & Reporting",
        ],
        outcomes: ["Qualified Buyer Inquiries"],
      },
      {
        title: "Project Launch Marketing",
        highlight: "Launch Marketing",
        subtitle: "Launch Your Projects with Maximum Impact",
        body: "Whether you're introducing a new residential community or a commercial development, we build strategic launch campaigns that create awareness, generate demand, and drive early sales.",
        included: [
          "Campaign Strategy & Planning",
          "Digital Marketing Campaigns",
          "Offline Marketing Support",
          "Sales Funnel Setup",
        ],
        outcomes: ["Faster Project Visibility & Higher Demand"],
      },
      {
        title: "Billboard & Offline Campaign Integration",
        highlight: "Offline Campaign Integration",
        subtitle: "Connect Offline Advertising with Digital Tracking",
        body: "Traditional advertising becomes more powerful when combined with digital technology. We integrate billboard campaigns with QR tracking and digital analytics, allowing you to measure the performance of offline marketing efforts.",
        included: [
          "Out-of-Home (OOH) Campaign Coordination",
          "QR Code Tracking",
          "Offline-to-Digital Integration",
          "Performance Monitoring",
        ],
        outcomes: ["Measurable Offline Marketing Performance"],
      },
      {
        title: "Lead Conversion & CRM Setup",
        highlight: "CRM Setup",
        subtitle: "Convert More Leads Into Sales",
        body: "A lead is valuable only when it's properly managed. We streamline your sales process with CRM automation, intelligent lead routing, WhatsApp integration, and customized sales pipelines.",
        included: [
          "CRM Configuration",
          "Lead Routing Automation",
          "WhatsApp Automation",
          "Sales Pipeline Setup",
        ],
        outcomes: ["Faster Project Visibility & Higher Demand"],
      },
      {
        title: "Real Estate Performance Analytics",
        highlight: "Performance Analytics",
        subtitle: "Make Smarter Marketing Decisions",
        body: "Track every campaign with detailed performance reporting. Understand where your leads come from, measure cost per lead, and optimize your marketing budget using real-time insights.",
        included: [
          "Cost Per Lead Analysis",
          "Marketing Channel Attribution",
          "ROI Reporting",
          "Performance Dashboards",
        ],
        outcomes: ["Data-Driven Business Decisions"],
      },
    ],
  },
  {
    slug: "medical",
    name: "Medical & Aesthetic Clinic",
    cardTitle: "Medical & Aesthetic Clinic Solutions",
    tagline: "Patient Acquisition & Booking Systems",
    hero: {
      before: "Grow Your Clinic with",
      highlight: "Data-Driven",
      after: "Patient Acquisition",
      body: "We help medical practices and aesthetic clinics attract qualified patients, increase appointment bookings, and improve treatment conversions through targeted digital marketing, automation, and performance analytics.",
    },
    overview: {
      title: "Complete Growth Solutions for Modern Clinics",
      body: "From patient acquisition and appointment automation to conversion optimization and analytics, our solutions are designed to help clinics build trust, increase bookings, and achieve sustainable growth.",
    },
    solutions: [
      {
        title: "Patient Acquisition System™",
        highlight: "Acquisition System™",
        subtitle: "Attract High-Quality Patients",
        body: "Reach people actively searching for your treatments with highly targeted Google and Meta advertising campaigns. We create optimized landing pages that convert visitors into qualified patient inquiries.",
        included: [
          "Google Ads Campaign Management",
          "Meta Advertising Campaigns",
          "Treatment-Specific Audience Targeting",
          "High-Converting Landing Pages",
        ],
        outcomes: ["High-Quality Patient Leads"],
      },
      {
        title: "Appointment Booking Automation",
        highlight: "Booking Automation",
        subtitle: "Simplify the Patient Booking Journey",
        body: "Reduce missed opportunities with automated appointment scheduling, WhatsApp communication, and timely follow-up reminders that keep patients engaged.",
        included: [
          "WhatsApp Integration",
          "Automated Follow-Up Messages",
          "Appointment Reminder System",
          "Booking Workflow Automation",
        ],
        outcomes: ["More Booked Consultations"],
      },
      {
        title: "Local Clinic Visibility Campaigns",
        highlight: "Visibility Campaigns",
        subtitle: "Increase Your Presence in the Local Community",
        body: "Strengthen your clinic's visibility with location-based advertising campaigns that reach nearby patients and support offline brand awareness.",
        included: [
          "Geo-Targeted Advertising Campaigns",
          "Local Audience Targeting",
          "Offline Awareness Mapping",
          "Local Brand Visibility Strategy",
        ],
        outcomes: ["Increased Walk-In Patients", "Stronger Local Brand Trust"],
      },
      {
        title: "Treatment Funnel Optimization",
        highlight: "Funnel Optimization",
        subtitle: "Convert More Inquiries into Patients",
        body: "Optimize every step of the patient journey by improving treatment offers, refining landing pages, and creating conversion-focused marketing funnels.",
        included: [
          "Treatment Offer Strategy",
          "Landing Page Optimization",
          "Patient Conversion Funnel Setup",
          "Conversion Rate Improvements",
        ],
        outcomes: ["Better Lead-to-Patient Conversion Rate"],
      },
      {
        title: "Patient Analytics & Tracking",
        highlight: "Analytics & Tracking",
        subtitle: "Track Performance with Confidence",
        body: "Measure the effectiveness of every campaign with detailed analytics. Identify your best-performing marketing channels, monitor acquisition costs, and make smarter business decisions.",
        included: [
          "Patient Lead Source Tracking",
          "Cost Per Patient Analysis",
          "Campaign Performance Reporting",
          "ROI Analytics Dashboard",
        ],
        outcomes: [
          "Clear ROI Visibility",
          "Smarter Marketing Decisions",
          "Optimized Patient Acquisition Costs",
        ],
      },
    ],
  },
  {
    slug: "education",
    name: "Education & Institute",
    cardTitle: "Education & Institute Solutions",
    tagline: "Student Enrollment Systems",
    hero: {
      before: "Drive Student Enrollment with",
      highlight: "Smarter",
      after: "Digital Strategies",
      body: "We help schools, colleges, universities, and training institutes attract prospective students, streamline admissions, and increase enrollments through data-driven marketing, automation, and analytics.",
    },
    overview: {
      title: "End-to-End Student Enrollment Solutions",
      body: "From generating inquiries and optimizing admission funnels to automating follow-ups and tracking performance, our solutions are designed to help educational institutions achieve consistent and predictable enrollment growth.",
    },
    solutions: [
      {
        title: "Student Enrollment System™",
        highlight: "Enrollment System™",
        subtitle: "Attract More Prospective Students",
        body: "Reach the right audience through highly targeted Meta and Google advertising campaigns. We build lead generation funnels and inquiry capture systems that turn interest into qualified student inquiries.",
        included: [
          "Meta Advertising Campaigns",
          "Google Ads Management",
          "Student Lead Generation Funnels",
          "Inquiry Capture Systems",
          "Campaign Performance Monitoring",
        ],
        outcomes: ["Increased Student Inquiries"],
      },
      {
        title: "Admission Funnel Setup",
        highlight: "Funnel Setup",
        subtitle: "Optimize the Admission Journey",
        body: "Create a seamless inquiry experience with conversion-focused landing pages, optimized forms, and multi-step enrollment workflows that improve inquiry quality.",
        included: [
          "High-Converting Landing Pages",
          "Admission Form Optimization",
          "Multi-Step Inquiry Flows",
          "Conversion-Focused User Journey",
        ],
        outcomes: ["Higher Quality Student Inquiries"],
      },
      {
        title: "Campaigns for Intake Seasons",
        highlight: "Intake Seasons",
        subtitle: "Maximize Enrollment During Admission Periods",
        body: "Launch strategic campaigns around admission seasons, open houses, and educational events to generate awareness and drive enrollment demand.",
        included: [
          "Admission Campaign Planning",
          "Seasonal Enrollment Campaigns",
          "Event-Based Promotions",
          "Multi-Channel Marketing Strategy",
        ],
        outcomes: ["Enrollment Spikes During Intake Periods"],
      },
      {
        title: "Inquiry Follow-Up Automation",
        highlight: "Follow-Up Automation",
        subtitle: "Convert More Inquiries into Enrollments",
        body: "Keep prospective students engaged with automated WhatsApp and email communication, reminders, and nurturing sequences that improve conversion rates.",
        included: [
          "WhatsApp Automation",
          "Email Nurturing Campaigns",
          "Inquiry Follow-Up Sequences",
          "Reminder & Engagement Automation",
        ],
        outcomes: ["Higher Inquiry-to-Enrollment Conversions"],
      },
      {
        title: "Enrollment Tracking Dashboard",
        highlight: "Tracking Dashboard",
        subtitle: "Make Smarter Admission Decisions",
        body: "Gain complete visibility into your enrollment performance with dashboards that track inquiry sources, conversion rates, and campaign effectiveness.",
        included: [
          "Student Lead Source Tracking",
          "Inquiry-to-Enrollment Conversion Tracking",
          "Campaign Performance Reporting",
          "Enrollment Analytics Dashboard",
        ],
        outcomes: [
          "Predictable and Data-Driven Admissions",
          "Improved Marketing Performance",
          "Better Enrollment Forecasting",
        ],
      },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    cardTitle: "Automotive Solutions",
    tagline: "Showroom Traffic & Lead Systems",
    hero: {
      before: "Drive More",
      highlight: "Buyer Inquiries",
      after: "and Showroom Visits",
      body: "We help automotive dealerships and showrooms attract high-intent buyers, increase test drive bookings, and improve sales conversions through targeted marketing, automation, and performance tracking.",
    },
    overview: {
      title: "Complete Growth Solutions for Automotive Businesses",
      body: "From generating qualified leads and increasing showroom traffic to optimizing sales funnels and tracking campaign performance, our solutions are designed to help dealerships achieve measurable growth and higher vehicle sales.",
    },
    solutions: [
      {
        title: "Showroom Lead System™",
        highlight: "Lead System™",
        subtitle: "Generate High-Intent Buyer Inquiries",
        body: "Reach potential car buyers at the right moment through targeted Google and Meta advertising campaigns. We create lead generation systems that capture and nurture prospects throughout their buying journey.",
        included: [
          "Google Ads for High-Intent Searches",
          "Meta Advertising & Retargeting Campaigns",
          "Automotive Lead Generation Strategy",
          "Campaign Performance Monitoring",
        ],
        outcomes: ["Increased Buyer Inquiries"],
      },
      {
        title: "Test Drive Booking System",
        highlight: "Booking System",
        subtitle: "Convert Interest into Showroom Appointments",
        body: "Simplify the customer journey with dedicated landing pages and automated appointment scheduling that encourages more prospects to book test drives.",
        included: [
          "High-Converting Landing Pages",
          "Test Drive Appointment Scheduling",
          "Booking Workflow Automation",
          "Customer Inquiry Management",
        ],
        outcomes: ["More Test Drive Bookings"],
      },
      {
        title: "Local Visibility Campaigns",
        highlight: "Visibility Campaigns",
        subtitle: "Increase Showroom Foot Traffic",
        body: "Build local awareness and drive more visitors to your dealership with geo-targeted advertising and integrated offline activation strategies.",
        included: [
          "Geo-Targeted Advertising Campaigns",
          "Local Audience Targeting",
          "Offline Activation Mapping",
          "Showroom Visibility Strategy",
        ],
        outcomes: ["Increased Showroom Visits", "Stronger Local Brand Awareness"],
      },
      {
        title: "Lead Tracking & Call Attribution",
        highlight: "Call Attribution",
        subtitle: "Know Exactly Which Campaign Drives Buyers",
        body: "Track every call, inquiry, and lead source to understand which marketing channels are delivering the highest-quality buyers and the best return on investment.",
        included: [
          "Call Tracking Numbers",
          "CRM Integration",
          "Lead Source Attribution",
          "Campaign Performance Reporting",
        ],
        outcomes: [
          "Clear Marketing Attribution",
          "Better Budget Allocation",
          "Data-Driven Decision Making",
        ],
      },
      {
        title: "Conversion Optimization",
        highlight: "Optimization",
        subtitle: "Turn More Leads into Vehicle Sales",
        body: "Align your sales funnel and automate follow-ups to ensure every inquiry is nurtured efficiently, helping your team close more deals.",
        included: [
          "Sales Funnel Optimization",
          "Lead Follow-Up Automation",
          "Customer Journey Improvements",
          "Conversion Performance Monitoring",
        ],
        outcomes: [
          "Higher Closing Rates",
          "Improved Sales Efficiency",
          "Increased Revenue Opportunities",
        ],
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
