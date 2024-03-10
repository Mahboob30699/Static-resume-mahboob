import {
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Google,
  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  Travelling,
  Udemy,
  mtm_logo,
  inboxLogo,
  skm,
  dice_logo,
  vu_logo,
  punjab_uni_logo,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "March 2005 ",
      endDate: "February 2013",
      position: "Database Administrator",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: mtm_logo,
        name: "Masood Textile Faisalabad",
        info: "Textile industry",
      },
      description:
        "Replicate the data between two different site database  Managing production and standby databases for 9i  Rights Managementt  Database & other Oracle Product Installation & Configuration  Database Backup & Recovery as well as future Planning  Provide technical Database Support across a Multi-platform infrastructure  (Linux, Windows)  Managing, Configuring & Creating Primary and Standby Database Servers  The Monitor capacity, integrity, and performance of production database  Maintain monitoring systems to provide 24x7 cove",
      links: [
        {
          label: "Oracle Database Job",
          url: "",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "February 2013",
      endDate: "January 2014",
      position: "Oracle Technical Consultant",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: inboxLogo,
        name: "Inbox",
        info: "Software base company",
      },
      description:
        " Project: eARM, Purchasing & System Administration  Worked in oracle developer 10G (Reports & Form)  Report Development Using XML Publisher & Oracle Report Builder Customization using Oracle Application Framework (OAF) Deployment of RDF Report with concurrent program completely  Attached customization Form with the application completelys",
      links: [
        {
          label: "Project Implementation",
          url: "",
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "June 2014 ",
      endDate: "Current",
      position: "Principal Software Engineer",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: skm,
        name: "Shaukat Khanum Memorial Cancer Hospital and Research Centre",
        info: "Cancer Hospital",
      },
      description:
        "Oracle Apex development / Oracle Form and Report / PLSQL Developer managing below modules  User Management Module  Application Security  Credentials  Change Request System Contingency Human Resource Management System Employee Information Module Duty Roster On Call Duty Roster Attendance Module Performance Appraisal 360 Module Employee Leave Module Travel Request Module Hiring Request Module Continuing Medical Education Module Employee clearance/final settlement Training Management system OPD Management System Payroll Management System RFID Management System Token System",
      links: [],
    },
    
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: vu_logo,
      course: "MCS",
      institution: "Virtual University",
      degree: "Degree",
      startDate: "2008",
      endDate: "2010",
    },
    {
      id: "edu_2",
      icon: punjab_uni_logo,
      course: "B.A ",
      institution: "Punjab University Lahor",
      degree: "Degree",
      startDate: "2002",
      endDate: "2004",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "F.A",
      institution: "Faisalabad Board",
      degree: "Intermediate",
      startDate: "1998",
      endDate: "2000",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "S.S.C",
      institution: "Faisalabad Board",
      degree: "Inter",
      startDate: "1996",
      endDate: "1998",
    },
    
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillFigma,
      name: "Web Development",
      description: "Web Design, Web application development, web page design",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: SkillPhotoshop,
      name: "React Js",
      description: "Web development in React JS",
    },
    {
      id: "skill_5",
      icon: SkillSketch,
      name: "Node JS",
      description: "Desgin backend in Node js",
    },
    {
      id: "skill_6",
      icon: SkillTrello,
      name: "MongoDB",
      description: "When you design your data model in MongoDB, consider the structure of your documents and the ways your application uses data from related entities. To link related data, you can either: Embed related data within a single document. Store related data in a separate collection and access it with a reference.",
    },
    {
      id: "skill_7",
      icon: SkillWireframe,
      name: "Wireframing",
      description: "Creating wireframes prior to design",
    },
    {
      id: "skill_8",
      icon: SkillXd,
      name: "Adobe XD",
      description: "Adobe Tool for UI Design",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "Coursera",
      course: "UI/UX Advance Course",
      startDate: "Dec 2021",
      endDate: "Feb 2022",
    },
    {
      id: "cert_award_2",
      icon: Google,
      provider: "Google",
      course: "Google UX Design Professional Certificate",
      startDate: "Mar 2021",
      endDate: "Jun 2021",
    },
    {
      id: "cert_award_3",
      icon: Udemy,
      provider: "Udemy",
      course: "Fundamental of UI/UX for Students",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Blogging,
      name: "Blogging",
    },
  ],
};

export default DATA;
