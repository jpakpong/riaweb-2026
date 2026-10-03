export interface Course {
  code: string;
  nameTh: string;
  nameEn: string;
  credits: number;
  format: string; // e.g., "(3-0-6)" or "(2-2-5)"
  category: 'general' | 'core' | 'major-compulsory' | 'project-cwie' | 'major-elective' | 'free-elective';
  module?: string;
  year?: number;
  semester?: 'term1' | 'term2' | 'summer';
  descriptionTh?: string;
  descriptionEn?: string;
  prerequisite?: string;
}

export interface AcademicStaff {
  id: string;
  nameTh: string;
  nameEn: string;
  positionTh: string;
  positionEn: string;
  role: 'responsible' | 'faculty';
  degrees: {
    degree: string;
    field: string;
    institution: string;
    country?: string;
    year: string;
  }[];
  expertise: string[];
  email: string;
  office: string;
  image: string;
}

export interface CareerPathItem {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  responsibilities: string[];
  skills: string[];
  targetSectors: string[];
  averageStartingSalary: string;
}

export interface StudentServiceLink {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  url: string;
  category: 'academic' | 'facility' | 'it' | 'student-affair';
  icon: string;
  isExternal?: boolean;
}

export const PROGRAM_INFO = {
  universityTh: 'มหาวิทยาลัยบูรพา',
  universityEn: 'Burapha University',
  facultyTh: 'คณะวิศวกรรมศาสตร์',
  facultyEn: 'Faculty of Engineering',
  departmentTh: 'ภาควิชาวิศวกรรมเครื่องกล',
  departmentEn: 'Department of Mechanical Engineering',
  programNameTh: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม (หลักสูตรใหม่ พ.ศ. 2569)',
  programNameEn: 'Bachelor of Engineering Program in Robotics and Industrial Automation Engineering',
  degreeFullTh: 'วิศวกรรมศาสตรบัณฑิต (วิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม)',
  degreeAbbrTh: 'วศ.บ. (วิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม)',
  degreeFullEn: 'Bachelor of Engineering (Robotics and Industrial Automation Engineering)',
  degreeAbbrEn: 'B.Eng. (Robotics and Industrial Automation Engineering)',
  minCredits: 123,
  durationYears: 4,
  academicSystem: 'ระบบทวิภาค (2 ภาคการศึกษาปกติ ภาคละไม่น้อยกว่า 15 สัปดาห์ และภาคฤดูร้อน 3 ภาค ภาคละไม่น้อยกว่า 8 สัปดาห์)',
  approvalStatus: [
    { council: 'สภาวิชาการมหาวิทยาลัยบูรพา', meeting: 'ครั้งที่ 11/2568', date: '26 พฤศจิกายน พ.ศ. 2568' },
    { council: 'สภามหาวิทยาลัยบูรพา', meeting: 'ครั้งที่ 12/2568', date: '20 ธันวาคม พ.ศ. 2568' },
  ],
  startSemester: 'ภาคการศึกษาต้น ปีการศึกษา 2569',
  tuitionFee: 'ประมาณ 28,000 บาท / ภาคการศึกษา',
  philosophy: 'หลักสูตรมุ่งพัฒนาวิศวกรที่เชี่ยวชาญด้านหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม มีความคิดเชิงระบบในการบูรณาการองค์ความรู้ด้านวิศวกรรมเครื่องกล อิเล็กทรอนิกส์ และซอฟต์แวร์ ผ่านการเรียนรู้ที่ผสมผสานทฤษฎีกับการปฏิบัติจริง ยึดมั่นจรรยาบรรณวิชาชีพ และพัฒนาตนเองอย่างต่อเนื่องเพื่อขับเคลื่อนอุตสาหกรรมไทยสู่ระดับสากล',
};

export const HIGHLIGHTS = [
  {
    title: 'หลักสูตรบูรณาการครบวงจร (Fully Integrated)',
    desc: 'ครอบคลุมองค์ความรู้หลักของระบบอัตโนมัติ: เครื่องกล, หุ่นยนต์, ระบบควบคุม, อิเล็กทรอนิกส์, AI และ Industrial IoT สำหรับอุตสาหกรรมยุคใหม่',
  },
  {
    title: 'การเรียนรู้แบบโมดูลเชื่อมโยง (Modular & Progressive)',
    desc: 'ไต่ระดับจากพื้นฐานวิศวกรรม สู่การออกแบบจริงและการประยุกต์ใช้ในโรงงานอัจฉริยะ ตอบโจทย์ Personalized Learning',
  },
  {
    title: 'ฝึกจริงกับอุปกรณ์อุตสาหกรรม (Hands-on Learning)',
    desc: 'ฝึกปฏิบัติกับหุ่นยนต์ 6 แกนอุตสาหกรรม (KUKA, ABB, Yaskawa), แขนกล Dobot MG400, PLC Mitsubishi iQ-R, SCADA, Digital Twin และชุดจำลอง Smart Factory',
  },
  {
    title: 'โครงงานบูรณาการ 4 ขั้น & CWIE สหกิจศึกษา',
    desc: 'ทำโครงงานต่อเนื่องปี 1-3 (Cornerstone, Keystone, Capstone) และสหกิจศึกษาในสถานประกอบการจริงนานถึง 1-2 ภาคการศึกษา',
  },
  {
    title: 'เครือข่ายความร่วมมืออุตสาหกรรมเข้มแข็ง',
    desc: 'ร่วมมือกับบริษัทยักษ์ใหญ่และสมาคมหุ่นยนต์ไทย (TARA) อาทิ Mitsubishi Electric Factory Automation, TBKK, Fabrinet, Robot System, RoboCloud, ThaiNamthip ฯลฯ',
  },
];

export const PEOS = [
  {
    code: 'PEO1',
    title: 'เชี่ยวชาญการออกแบบและพัฒนา',
    desc: 'สามารถประกอบวิชาชีพวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ โดยประยุกต์ใช้ความรู้คณิตศาสตร์ วิทยาศาสตร์ และวิศวกรรมในการออกแบบ พัฒนา และปรับปรุงระบบอุตสาหกรรม',
  },
  {
    code: 'PEO2',
    title: 'บูรณาการเทคโนโลยีขั้นสูงสู่สากล',
    desc: 'สามารถบูรณาการและประยุกต์ใช้เทคโนโลยีขั้นสูงที่เกี่ยวข้องกับระบบอัตโนมัติอุตสาหกรรม พร้อมปรับตัวเรียนรู้เทคโนโลยีใหม่เพื่อเพิ่มศักยภาพแข่งขันของประเทศ',
  },
  {
    code: 'PEO3',
    title: 'ทำงานเป็นทีมและจรรยาบรรณวิชาชีพ',
    desc: 'สามารถทำงานเป็นทีมสหวิทยาการอย่างมืออาชีพ ยึดมั่นในจรรยาบรรณ สื่อสารอย่างมีประสิทธิภาพทั้งไทยและอังกฤษ โดยคำนึงถึงสังคมและสิ่งแวดล้อม',
  },
  {
    code: 'PEO4',
    title: 'บริหารโครงการและการพัฒนาที่ยั่งยืน',
    desc: 'สามารถบริหารจัดการโครงการและพัฒนาระบบวิศวกรรมอย่างยั่งยืน ทั้งด้านเศรษฐกิจ สังคม สิ่งแวดล้อม และพัฒนาตนเองต่อเนื่องตลอดชีวิต',
  },
];

export const PLOS = [
  {
    code: 'PLO1',
    title: 'การประยุกต์พื้นฐานวิศวกรรม',
    desc: 'ประยุกต์ใช้ความรู้ด้านคณิตศาสตร์ วิทยาศาสตร์ และวิศวกรรมพื้นฐาน เพื่อวิเคราะห์ ออกแบบ และพัฒนาหุ่นยนต์และระบบอัตโนมัติให้เหมาะสมกับบริบทของอุตสาหกรรม',
  },
  {
    code: 'PLO2',
    title: 'การออกแบบตามมาตรฐานอุตสาหกรรม',
    desc: 'ออกแบบและพัฒนา หุ่นยนต์ ระบบอัตโนมัติ และกระบวนการผลิต โดยใช้เทคโนโลยีให้สอดคล้องกับมาตรฐานอุตสาหกรรมอย่างมีประสิทธิภาพ',
  },
  {
    code: 'PLO3',
    title: 'การใช้ซอฟต์แวร์วิเคราะห์และจำลองระบบ',
    desc: 'เลือกใช้และบูรณาการซอฟต์แวร์ออกแบบ จำลอง และวิเคราะห์ระบบ ร่วมกับอุปกรณ์ควบคุมที่เกี่ยวข้อง เพื่อประเมินและเพิ่มประสิทธิภาพของระบบ',
  },
  {
    code: 'PLO4',
    title: 'การทำงานเป็นทีมสหวิทยาการและจริยธรรม',
    desc: 'ทำงานร่วมกับทีมสหวิทยาการได้อย่างมีประสิทธิภาพ วิเคราะห์และตัดสินใจประเด็นทางจริยธรรม โดยคำนึงถึงผลกระทบต่อสังคมและสิ่งแวดล้อม',
  },
  {
    code: 'PLO5',
    title: 'การบริหารจัดการโครงการอย่างยั่งยืน',
    desc: 'บริหารจัดการและควบคุมโครงการหรือระบบการผลิต โดยพิจารณาด้านเศรษฐกิจ สังคม สิ่งแวดล้อม และความยั่งยืน',
  },
  {
    code: 'PLO6',
    title: 'การสื่อสารและนำเสนอระดับวิชาชีพ',
    desc: 'สื่อสารและนำเสนอแนวคิด การออกแบบ และผลลัพธ์ทางวิศวกรรมได้อย่างชัดเจนและเหมาะสมทั้งภาษาไทยและภาษาอังกฤษ โดยใช้สารสนเทศสนับสนุน',
  },
  {
    code: 'PLO7',
    title: 'การบูรณาการสู่การปฏิบัติงานจริง (CWIE)',
    desc: 'บูรณาการความรู้และทักษะวิชาชีพจากการปฏิบัติงานจริงในสถานประกอบการ เพื่อปฏิบัติงานและแก้ปัญหาทางวิศวกรรมได้อย่างมีประสิทธิภาพ',
  },
];

export const CURRICULUM_STRUCTURE = {
  totalCredits: 123,
  categories: [
    {
      id: 'general',
      nameTh: 'หมวดวิชาศึกษาทั่วไป',
      nameEn: 'General Education',
      credits: 24,
      modules: [
        { code: 'Module 1', name: 'การสื่อสารภาษาอังกฤษ (English Communication)', credits: 6 },
        { code: 'Module 2', name: 'การแก้ไขปัญหาอย่างสร้างสรรค์ในยุคดิจิทัล (Creative Problem Solving in Digital Era)', credits: 6 },
        { code: 'Module 3', name: 'การจัดการชีวิตในสังคมหลากวัฒนธรรม (Living in Multicultural Society)', credits: 6 },
        { code: 'Module 4', name: 'ความเป็นผู้ประกอบการยุคใหม่ (Modern Entrepreneurship)', credits: 6 },
      ],
    },
    {
      id: 'core-specialized',
      nameTh: 'หมวดวิชาเฉพาะ',
      nameEn: 'Specialized Courses',
      credits: 93,
      subcategories: [
        {
          id: 'core',
          nameTh: 'วิชาแกน (Core Courses)',
          credits: 28,
          modules: [{ code: 'Module 1', name: 'คณิตศาสตร์และพื้นฐานวิศวกรรม (Mathematics & Engineering Fundamentals)', credits: 28 }],
        },
        {
          id: 'major-compulsory',
          nameTh: 'วิชาเอกบังคับ (Major Compulsory)',
          credits: 36,
          modules: [
            { code: 'Module 2', name: 'เทคโนโลยีหุ่นยนต์ (Robotics Technology)', credits: 15 },
            { code: 'Module 3', name: 'ระบบอัตโนมัติอุตสาหกรรม (Industrial Automation)', credits: 15 },
            { code: 'Module 4', name: 'ปัญญาประดิษฐ์ (Artificial Intelligence)', credits: 6 },
          ],
        },
        {
          id: 'project-cwie',
          nameTh: 'โครงงานและการบูรณาการการเรียนรู้กับการทำงาน (Projects & CWIE)',
          credits: 17,
          desc: 'โครงงาน 3 ระดับ (Cornerstone, Keystone, Capstone), เตรียมสหกิจศึกษา, จริยธรรมวิศวกรรม และ สหกิจศึกษา 12 หน่วยกิต',
        },
        {
          id: 'major-elective',
          nameTh: 'วิชาเอกเลือก (Major Electives)',
          credits: 12,
          desc: 'เลือกเรียนจากรายวิชาเอกเลือกขั้นสูง เช่น AI Maintenance, Robot Programming, AR/VR, Green Mfg ฯลฯ',
        },
      ],
    },
    {
      id: 'free-elective',
      nameTh: 'หมวดวิชาเลือกเสรี',
      nameEn: 'Free Electives',
      credits: 6,
      desc: 'เลือกเรียนรายวิชาใดๆ ที่เปิดสอนในมหาวิทยาลัยบูรพา หรือสถาบันอุดมศึกษาอื่นทั้งในและต่างประเทศ',
    },
  ],
};

export const COURSES: Course[] = [
  // หมวดศึกษาทั่วไป Module 1
  { code: '89510169', nameTh: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน', nameEn: 'English for Everyday Communication', credits: 3, format: '3 (2-2-5)', category: 'general', module: 'ศึกษาทั่วไป Module 1 (ภาษาอังกฤษ)' },
  { code: '89510269', nameTh: 'ภาษาอังกฤษเพื่อการสื่อสารในการทำงาน', nameEn: 'English Communication for Workplace', credits: 3, format: '3 (2-2-5)', category: 'general', module: 'ศึกษาทั่วไป Module 1 (ภาษาอังกฤษ)' },
  { code: '89510369', nameTh: 'ภาษาอังกฤษสำหรับนักวิทยาศาสตร์และนวัตกร', nameEn: 'English for Scientists and Innovators', credits: 3, format: '3 (2-2-5)', category: 'general', module: 'ศึกษาทั่วไป Module 1 (ภาษาอังกฤษ)' },
  
  // หมวดศึกษาทั่วไป Module 2
  { code: '89520169', nameTh: 'การคิดแก้ปัญหาอย่างสร้างสรรค์', nameEn: 'Creativity in Problem Solving', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 2 (ดิจิทัลและการแก้ปัญหา)' },
  { code: '89520269', nameTh: 'ทักษะดิจิทัลและใช้ปัญญาประดิษฐ์อย่างฉลาด', nameEn: 'Smart Digital and Artificial Intelligence Usage Skills', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 2 (ดิจิทัลและการแก้ปัญหา)' },
  { code: '89520369', nameTh: 'การคิดเชิงระบบกับการแก้ปัญหา', nameEn: 'System Thinking and Problem Solving', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 2 (ดิจิทัลและการแก้ปัญหา)' },
  { code: '89520469', nameTh: 'การวิเคราะห์ข้อมูลเพื่อการตัดสินใจในยุคดิจิทัล', nameEn: 'Data Analytics for Decision in Digital Era', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 2 (ดิจิทัลและการแก้ปัญหา)' },

  // หมวดศึกษาทั่วไป Module 3
  { code: '89530169', nameTh: 'สุขภาวะและบุคลิกภาพในยุคดิจิทัล', nameEn: 'Wellness and Personality in Digital Age', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 3 (ชีวิตและสังคม)' },
  { code: '89530269', nameTh: 'พลังแห่งความต่าง เสริมความสำเร็จให้ทีม', nameEn: 'Diversity Drives Team Success', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 3 (ชีวิตและสังคม)' },
  { code: '89530469', nameTh: 'สมดุลดี ชีวีมีสุขในยุคดิจิทัล', nameEn: 'Healthy Work-Life Balance in the Digital Edge', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 3 (ชีวิตและสังคม)' },

  // หมวดศึกษาทั่วไป Module 4
  { code: '89540169', nameTh: 'การบริหารการเงินและความเป็นผู้ประกอบการสำหรับชีวิตยุคใหม่', nameEn: 'Financial Management and Entrepreneurship for Modern Life', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 4 (ผู้ประกอบการ)' },
  { code: '89540369', nameTh: 'ภาวะผู้นำและการจัดการทีมสำหรับผู้ประกอบการยุคใหม่', nameEn: 'Leadership and Team Management for Modern Entrepreneurs', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 4 (ผู้ประกอบการ)' },
  { code: '89540769', nameTh: 'ก้าวสู่ความเป็นผู้ประกอบการที่ขับเคลื่อนด้วยนวัตกรรม', nameEn: 'Towards Innovation-driven Entrepreneurship', credits: 2, format: '2 (1-2-3)', category: 'general', module: 'ศึกษาทั่วไป Module 4 (ผู้ประกอบการ)' },

  // วิชาแกน 28 หน่วยกิต (Module 1)
  { code: '30212169', nameTh: 'คณิตศาสตร์วิศวกรรม 1', nameEn: 'Engineering Mathematics I', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '30222169', nameTh: 'คณิตศาสตร์วิศวกรรม 3', nameEn: 'Engineering Mathematics III', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '30810269', nameTh: 'ฟิสิกส์พื้นฐานสำหรับวิศวกรรม', nameEn: 'Introductory Physics for Engineering', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '50122369', nameTh: 'ปฏิบัติงานทางวิศวกรรม', nameEn: 'Engineering Workshop', credits: 1, format: '1 (0-3-1)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '50123269', nameTh: 'ความน่าจะเป็นและสถิติ', nameEn: 'Probability and Statistics', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '51310169', nameTh: 'การเขียนโปรแกรมวิศวกรรม', nameEn: 'Engineering Programming', credits: 3, format: '3 (2-2-5)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '51310269', nameTh: 'การใช้คอมพิวเตอร์ช่วยในการออกแบบทางวิศวกรรม', nameEn: 'Computer-Aided Design for Engineering Design', credits: 3, format: '3 (2-2-5)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '50318169', nameTh: 'อุณหพลศาสตร์และกลศาสตร์ของไหล', nameEn: 'Thermodynamics and Fluid Mechanics', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '50318269', nameTh: 'กลศาสตร์วิศวกรรมและของแข็ง', nameEn: 'Engineering and Solid Mechanics', credits: 3, format: '3 (3-0-6)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },
  { code: '50328469', nameTh: 'วิศวกรรมกลไกและชิ้นส่วนทางกล', nameEn: 'Engineering Mechanisms and Machine Components', credits: 3, format: '3 (2-2-5)', category: 'core', module: 'วิชาแกน: คณิตและพื้นฐานวิศวกรรม' },

  // วิชาเอกบังคับ: Module 2 เทคโนโลยีหุ่นยนต์ (15 หน่วยกิต)
  { code: '50336269', nameTh: 'การบูรณาการการออกแบบและจำลองระบบทางกล', nameEn: 'Design Integration and Mechanical Simulation', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: เทคโนโลยีหุ่นยนต์' },
  { code: '51320169', nameTh: 'การเขียนโปรแกรมไมโครคอนโทรลเลอร์', nameEn: 'Microcontroller Programming', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: เทคโนโลยีหุ่นยนต์' },
  { code: '51320269', nameTh: 'ระบบสมองกลฝังตัว', nameEn: 'Embedded Systems', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: เทคโนโลยีหุ่นยนต์' },
  { code: '51320369', nameTh: 'มอเตอร์และการขับเคลื่อนด้วยไฟฟ้า', nameEn: 'Electric Motors and Drives', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: เทคโนโลยีหุ่นยนต์' },
  { code: '51320469', nameTh: 'วิทยาการหุ่นยนต์อุตสาหกรรม', nameEn: 'Industrial Robotics', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: เทคโนโลยีหุ่นยนต์' },

  // วิชาเอกบังคับ: Module 3 ระบบอัตโนมัติอุตสาหกรรม (15 หน่วยกิต)
  { code: '51330169', nameTh: 'การควบคุมแบบตรรกะและระบบอัตโนมัติ', nameEn: 'Programmable Logic Control and Automation', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ระบบอัตโนมัติอุตสาหกรรม' },
  { code: '51330269', nameTh: 'การควบคุมแบบตรรกะและระบบอัตโนมัติขั้นสูง', nameEn: 'Advanced Programmable Logic Control and Automation', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ระบบอัตโนมัติอุตสาหกรรม' },
  { code: '51330369', nameTh: 'การจำลองระบบการผลิตและระบบอัตโนมัติ', nameEn: 'Manufacturing and Automation System Simulation', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ระบบอัตโนมัติอุตสาหกรรม' },
  { code: '51330469', nameTh: 'ระบบควบคุม', nameEn: 'Control Systems', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ระบบอัตโนมัติอุตสาหกรรม' },
  { code: '51330569', nameTh: 'สกาด้าและการประยุกต์ใช้งานในอุตสาหกรรม', nameEn: 'SCADA and Industrial Applications', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ระบบอัตโนมัติอุตสาหกรรม' },

  // วิชาเอกบังคับ: Module 4 ปัญญาประดิษฐ์ (6 หน่วยกิต)
  { code: '51340169', nameTh: 'การประมวลผลภาพและคอมพิวเตอร์วิทัศน์', nameEn: 'Image Processing and Computer Vision', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ปัญญาประดิษฐ์' },
  { code: '51340269', nameTh: 'ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง', nameEn: 'Artificial Intelligence and Machine Learning', credits: 3, format: '3 (2-2-5)', category: 'major-compulsory', module: 'วิชาเอก: ปัญญาประดิษฐ์' },

  // โครงงานและการบูรณาการ CWIE (17 หน่วยกิต)
  { code: '50010169', nameTh: 'จริยธรรมและจรรยาบรรณวิชาชีพวิศวกรรม', nameEn: 'Ethics and Code of Conduct in Engineering Profession', credits: 1, format: '1 (1-0-2)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },
  { code: '50030069', nameTh: 'เตรียมสหกิจศึกษา', nameEn: 'Pre-cooperative Education', credits: 1, format: '1 (0-3-1)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },
  { code: '51360169', nameTh: 'โครงงานบูรณาการฐานราก', nameEn: 'Cornerstone Design Project', credits: 1, format: '1 (0-3-1)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },
  { code: '51360269', nameTh: 'โครงงานบูรณาการเชื่อมโยง', nameEn: 'Keystone Design Project', credits: 1, format: '1 (0-3-1)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },
  { code: '51360369', nameTh: 'โครงงานบูรณาการเชี่ยวชาญ', nameEn: 'Capstone Design Project', credits: 1, format: '1 (0-3-1)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },
  { code: '51360469', nameTh: 'สหกิจศึกษาด้านวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม 1', nameEn: 'Cooperative Education in Robotics and Industrial Automation I', credits: 12, format: '12 (0-36-12)', category: 'project-cwie', module: 'โครงงานและการบูรณาการ' },

  // วิชาเอกเลือก (12 หน่วยกิต)
  { code: '51350169', nameTh: 'ระบบการผลิตสีเขียว', nameEn: 'Green Manufacturing Systems', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350269', nameTh: 'การบำรุงรักษาเชิงพยากรณ์ด้วยปัญญาประดิษฐ์', nameEn: 'Predictive Maintenance with Artificial Intelligence', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350369', nameTh: 'การเขียนโปรแกรมคอมพิวเตอร์สำหรับหุ่นยนต์', nameEn: 'Robot Programming', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350469', nameTh: 'ระบบนิวเมติกส์สำหรับระบบอัตโนมัติ', nameEn: 'Pneumatic Systems for Automation', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350569', nameTh: 'ความเป็นจริงเสริมและความเป็นจริงเสมือน', nameEn: 'Augmented and Virtual Reality', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350669', nameTh: 'หัวข้อคัดสรรด้านวิทยาการหุ่นยนต์', nameEn: 'Selected Topics in Robotics', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350769', nameTh: 'หัวข้อคัดสรรด้านการผลิตอัจฉริยะ', nameEn: 'Selected Topic in Smart Manufacturing', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350869', nameTh: 'หัวข้อคัดสรรด้านปัญญาประดิษฐ์', nameEn: 'Selected Topic in Artificial Intelligence', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51350969', nameTh: 'หัวข้อคัดสรรด้านระบบควบคุมอัจฉริยะ', nameEn: 'Selected Topics in Intelligent Control Systems', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51351069', nameTh: 'หัวข้อคัดสรรด้านวิศวกรรมเพื่อความยั่งยืน', nameEn: 'Selected Topics in Sustainable Engineering', credits: 3, format: '3 (2-2-5)', category: 'major-elective', module: 'วิชาเอกเลือก' },
  { code: '51360569', nameTh: 'สหกิจศึกษาด้านวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม 2', nameEn: 'Cooperative Education in Robotics and Industrial Automation II', credits: 12, format: '12 (0-36-12)', category: 'major-elective', module: 'วิชาเอกเลือก (สำหรับแผน 2)' },
];

export interface StudyPlanSemester {
  year: number;
  termTitle: string;
  termKey: string;
  totalCredits: number;
  courses: {
    categoryTh: string;
    code: string;
    nameTh: string;
    nameEn: string;
    credits: number;
    format: string;
  }[];
}

export const STUDY_PLAN_1: StudyPlanSemester[] = [
  {
    year: 1,
    termTitle: 'ปีที่ 1 ภาคการศึกษาต้น',
    termKey: 'Y1T1',
    totalCredits: 17,
    courses: [
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 1', nameTh: 'การสื่อสารภาษาอังกฤษ', nameEn: 'English Communication', credits: 3, format: '3' },
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 4', nameTh: 'ความเป็นผู้ประกอบการยุคใหม่', nameEn: 'Modern Entrepreneurship', credits: 4, format: '4' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '30212169', nameTh: 'คณิตศาสตร์วิศวกรรม 1', nameEn: 'Engineering Mathematics I', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '30810269', nameTh: 'ฟิสิกส์พื้นฐานสำหรับวิศวกรรม', nameEn: 'Introductory Physics for Engineering', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50010169', nameTh: 'จริยธรรมและจรรยาบรรณวิชาชีพวิศวกรรม', nameEn: 'Ethics and Code of Conduct in Engineering Profession', credits: 1, format: '1 (1-0-2)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '51310169', nameTh: 'การเขียนโปรแกรมวิศวกรรม', nameEn: 'Engineering Programming', credits: 3, format: '3 (2-2-5)' },
    ],
  },
  {
    year: 1,
    termTitle: 'ปีที่ 1 ภาคการศึกษาปลาย',
    termKey: 'Y1T2',
    totalCredits: 17,
    courses: [
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 1', nameTh: 'การสื่อสารภาษาอังกฤษ', nameEn: 'English Communication', credits: 3, format: '3' },
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 4', nameTh: 'ความเป็นผู้ประกอบการยุคใหม่', nameEn: 'Modern Entrepreneurship', credits: 2, format: '2' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '50123269', nameTh: 'ความน่าจะเป็นและสถิติ', nameEn: 'Probability and Statistics', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '51310269', nameTh: 'การใช้คอมพิวเตอร์ช่วยในการออกแบบทางวิศวกรรม', nameEn: 'Computer-Aided Design for Engineering Design', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '50318269', nameTh: 'กลศาสตร์วิศวกรรมและของแข็ง', nameEn: 'Engineering and Solid Mechanics', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51320169', nameTh: 'การเขียนโปรแกรมไมโครคอนโทรลเลอร์', nameEn: 'Microcontroller Programming', credits: 3, format: '3 (2-2-5)' },
    ],
  },
  {
    year: 1,
    termTitle: 'ปีที่ 1 ภาคฤดูร้อน (Summer)',
    termKey: 'Y1TS',
    totalCredits: 1,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51360169', nameTh: 'โครงงานบูรณาการฐานราก', nameEn: 'Cornerstone Design Project', credits: 1, format: '1 (0-3-1)' },
    ],
  },
  {
    year: 2,
    termTitle: 'ปีที่ 2 ภาคการศึกษาต้น',
    termKey: 'Y2T1',
    totalCredits: 17,
    courses: [
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 2', nameTh: 'การแก้ไขปัญหาอย่างสร้างสรรค์ในยุคดิจิทัล', nameEn: 'Creativity in Problem Solving in Digital Era', credits: 4, format: '4' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '30222169', nameTh: 'คณิตศาสตร์วิศวกรรม 3', nameEn: 'Engineering Mathematics III', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '50122369', nameTh: 'ปฏิบัติงานทางวิศวกรรม', nameEn: 'Engineering Workshop', credits: 1, format: '1 (0-3-1)' },
      { categoryTh: 'วิชาเฉพาะ (แกน)', code: '50318169', nameTh: 'อุณหพลศาสตร์และกลศาสตร์ของไหล', nameEn: 'Thermodynamics and Fluid Mechanics', credits: 3, format: '3 (3-0-6)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51320269', nameTh: 'ระบบสมองกลฝังตัว', nameEn: 'Embedded Systems', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330169', nameTh: 'การควบคุมแบบตรรกะและระบบอัตโนมัติ', nameEn: 'Programmable Logic Control and Automation', credits: 3, format: '3 (2-2-5)' },
    ],
  },
  {
    year: 2,
    termTitle: 'ปีที่ 2 ภาคการศึกษาปลาย',
    termKey: 'Y2T2',
    totalCredits: 16,
    courses: [
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 2', nameTh: 'การแก้ไขปัญหาอย่างสร้างสรรค์ในยุคดิจิทัล', nameEn: 'Creativity in Problem Solving in Digital Era', credits: 2, format: '2' },
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 3', nameTh: 'การจัดการชีวิตในสังคมหลากวัฒนธรรม', nameEn: 'Living in Multicultural Society', credits: 2, format: '2' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50328469', nameTh: 'วิศวกรรมกลไกและชิ้นส่วนทางกล', nameEn: 'Engineering Mechanisms and Machine Components', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51320369', nameTh: 'มอเตอร์และการขับเคลื่อนด้วยไฟฟ้า', nameEn: 'Electric Motors and Drives', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51320469', nameTh: 'วิทยาการหุ่นยนต์อุตสาหกรรม', nameEn: 'Industrial Robotics', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330269', nameTh: 'การควบคุมแบบตรรกะและระบบอัตโนมัติขั้นสูง', nameEn: 'Advanced Programmable Logic Control and Automation', credits: 3, format: '3 (2-2-5)' },
    ],
  },
  {
    year: 2,
    termTitle: 'ปีที่ 2 ภาคฤดูร้อน (Summer)',
    termKey: 'Y2TS',
    totalCredits: 1,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51360269', nameTh: 'โครงงานบูรณาการเชื่อมโยง', nameEn: 'Keystone Design Project', credits: 1, format: '1 (0-3-1)' },
    ],
  },
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคการศึกษาต้น',
    termKey: 'Y3T1',
    totalCredits: 16,
    courses: [
      { categoryTh: 'ศึกษาทั่วไป', code: 'Module 3', nameTh: 'การจัดการชีวิตในสังคมหลากวัฒนธรรม', nameEn: 'Living in Multicultural Society', credits: 4, format: '4' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330369', nameTh: 'การจำลองระบบการผลิตและระบบอัตโนมัติ', nameEn: 'Manufacturing and Automation System Simulation', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330469', nameTh: 'ระบบควบคุม', nameEn: 'Control Systems', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51340169', nameTh: 'การประมวลผลภาพและคอมพิวเตอร์วิทัศน์', nameEn: 'Image Processing and Computer Vision', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเลือกเสรี', code: 'xxxxxx69', nameTh: 'วิชาเลือกเสรี 1', nameEn: 'Free Elective I', credits: 3, format: '3 (x-y-z)' },
    ],
  },
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคการศึกษาปลาย',
    termKey: 'Y3T2',
    totalCredits: 15,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50336269', nameTh: 'การบูรณาการการออกแบบและจำลองระบบทางกล', nameEn: 'Design Integration and Mechanical Simulation', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330569', nameTh: 'สกาด้าและการประยุกต์ใช้งานในอุตสาหกรรม', nameEn: 'SCADA and Industrial Applications', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51340269', nameTh: 'ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง', nameEn: 'Artificial Intelligence and Machine Learning', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกเลือก)', code: '5135xx69', nameTh: 'วิชาเอกเลือก 1', nameEn: 'Major Elective I', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเลือกเสรี', code: 'xxxxxx69', nameTh: 'วิชาเลือกเสรี 2', nameEn: 'Free Elective II', credits: 3, format: '3' },
    ],
  },
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคฤดูร้อน (Summer)',
    termKey: 'Y3TS',
    totalCredits: 1,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51360369', nameTh: 'โครงงานบูรณาการเชี่ยวชาญ', nameEn: 'Capstone Design Project', credits: 1, format: '1 (0-3-1)' },
    ],
  },
  {
    year: 4,
    termTitle: 'ปีที่ 4 ภาคการศึกษาต้น',
    termKey: 'Y4T1',
    totalCredits: 10,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50030069', nameTh: 'เตรียมสหกิจศึกษา', nameEn: 'Pre-cooperative Education', credits: 1, format: '1 (0-3-1)' },
      { categoryTh: 'วิชาเฉพาะ (เอกเลือก)', code: '5135xx69', nameTh: 'วิชาเอกเลือก 2', nameEn: 'Major Elective II', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกเลือก)', code: '5135xx69', nameTh: 'วิชาเอกเลือก 3', nameEn: 'Major Elective III', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกเลือก)', code: '5135xx69', nameTh: 'วิชาเอกเลือก 4', nameEn: 'Major Elective IV', credits: 3, format: '3 (2-2-5)' },
    ],
  },
  {
    year: 4,
    termTitle: 'ปีที่ 4 ภาคการศึกษาปลาย',
    termKey: 'Y4T2',
    totalCredits: 12,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (CWIE)', code: '51360469', nameTh: 'สหกิจศึกษาด้านวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม 1', nameEn: 'Cooperative Education in Robotics and Industrial Automation I', credits: 12, format: '12 (0-36-12)' },
    ],
  },
];

export const STUDY_PLAN_2: StudyPlanSemester[] = [
  // ปี 1 และ 2 เหมือนแผน 1
  ...STUDY_PLAN_1.slice(0, 6),
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคการศึกษาต้น',
    termKey: 'Y3T1-P2',
    totalCredits: 16,
    courses: STUDY_PLAN_1[6].courses,
  },
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคการศึกษาปลาย (แผน 2 เตรียมสหกิจ)',
    termKey: 'Y3T2-P2',
    totalCredits: 13,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50030069', nameTh: 'เตรียมสหกิจศึกษา', nameEn: 'Pre-cooperative Education', credits: 1, format: '1 (0-3-1)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '50336269', nameTh: 'การบูรณาการการออกแบบและจำลองระบบทางกล', nameEn: 'Design Integration and Mechanical Simulation', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51330569', nameTh: 'สกาด้าและการประยุกต์ใช้งานในอุตสาหกรรม', nameEn: 'SCADA and Industrial Applications', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51340269', nameTh: 'ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง', nameEn: 'Artificial Intelligence and Machine Learning', credits: 3, format: '3 (2-2-5)' },
      { categoryTh: 'วิชาเลือกเสรี', code: 'xxxxxx69', nameTh: 'วิชาเลือกเสรี 2', nameEn: 'Free Elective II', credits: 3, format: '3' },
    ],
  },
  {
    year: 3,
    termTitle: 'ปีที่ 3 ภาคฤดูร้อน (Summer)',
    termKey: 'Y3TS-P2',
    totalCredits: 1,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกบังคับ)', code: '51360369', nameTh: 'โครงงานบูรณาการเชี่ยวชาญ', nameEn: 'Capstone Design Project', credits: 1, format: '1 (0-3-1)' },
    ],
  },
  {
    year: 4,
    termTitle: 'ปีที่ 4 ภาคการศึกษาต้น (สหกิจศึกษา 1)',
    termKey: 'Y4T1-P2',
    totalCredits: 12,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (CWIE)', code: '51360469', nameTh: 'สหกิจศึกษาด้านวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม 1', nameEn: 'Cooperative Education in Robotics and Industrial Automation I', credits: 12, format: '12 (0-36-12)' },
    ],
  },
  {
    year: 4,
    termTitle: 'ปีที่ 4 ภาคการศึกษาปลาย (สหกิจศึกษา 2 เข้มข้น)',
    termKey: 'Y4T2-P2',
    totalCredits: 12,
    courses: [
      { categoryTh: 'วิชาเฉพาะ (เอกเลือก CWIE)', code: '51360569', nameTh: 'สหกิจศึกษาด้านวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม 2', nameEn: 'Cooperative Education in Robotics and Industrial Automation II', credits: 12, format: '12 (0-36-12)' },
    ],
  },
];

export const ACADEMIC_STAFFS: AcademicStaff[] = [
  {
    id: 'pakpong',
    nameTh: 'ผศ.ดร.ภัคพงศ์ จันทเปรมจิตต์',
    nameEn: 'Asst. Prof. Dr. Pakpong Jantapremjit',
    positionTh: 'ผู้ช่วยศาสตราจารย์ (อาจารย์ผู้รับผิดชอบหลักสูตร / ประธานหลักสูตร)',
    positionEn: 'Assistant Professor / Program Director',
    role: 'responsible',
    image: '/images/pakpong.jpg',
    email: 'pakpong@eng.buu.ac.th',
    office: 'อาคารวิศวกรรมศาสตร์ 1 ภาควิชาวิศวกรรมเครื่องกล มหาวิทยาลัยบูรพา',
    degrees: [
      { degree: 'Ph.D.', field: 'Engineering', institution: 'University of Southampton', country: 'UK', year: 'พ.ศ. 2551' },
      { degree: 'M.Eng.Sc.', field: 'Mechanical Engineering', institution: 'University of New South Wales', country: 'Australia', year: 'พ.ศ. 2543' },
      { degree: 'วศ.บ.', field: 'วิศวกรรมเครื่องกล', institution: 'สถาบันเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)', country: 'Thailand', year: 'พ.ศ. 2539' },
    ],
    expertise: ['Robotics & Industrial Automation', 'Advanced Control Systems', 'Sensor Integration & Microcontrollers', 'Mechatronic System Design'],
  },
  {
    id: 'paiboon',
    nameTh: 'ดร.ไพบูลย์ ลิ้มปิติพานิชย์',
    nameEn: 'Dr. Paiboon Limpitiphanich',
    positionTh: 'อาจารย์ (อาจารย์ผู้รับผิดชอบหลักสูตร)',
    positionEn: 'Lecturer / Program Committee',
    role: 'responsible',
    image: '/images/paiboon.jpg',
    email: 'paiboon.l@eng.buu.ac.th',
    office: 'อาคารวิศวกรรมศาสตร์ 1 ภาควิชาวิศวกรรมเครื่องกล มหาวิทยาลัยบูรพา',
    degrees: [
      { degree: 'วศ.ด.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเชียงใหม่', country: 'Thailand', year: 'พ.ศ. 2563' },
      { degree: 'วศ.ม.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเชียงใหม่', country: 'Thailand', year: 'พ.ศ. 2543' },
      { degree: 'วศ.บ.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเชียงใหม่', country: 'Thailand', year: 'พ.ศ. 2541' },
    ],
    expertise: ['Programmable Logic Control (PLC)', 'Industrial Motion Control', 'Industrial SCADA Systems', 'Factory Automation'],
  },
  {
    id: 'jitti',
    nameTh: 'ผศ.ดร.จิตติ พัทธวณิช',
    nameEn: 'Asst. Prof. Dr. Jitti Phatthawanit',
    positionTh: 'ผู้ช่วยศาสตราจารย์ (อาจารย์ผู้รับผิดชอบหลักสูตร)',
    positionEn: 'Assistant Professor / Program Committee',
    role: 'responsible',
    image: '/images/jitti.jpg',
    email: 'jitti.p@eng.buu.ac.th',
    office: 'อาคารวิศวกรรมศาสตร์ 1 ภาควิชาวิศวกรรมเครื่องกล มหาวิทยาลัยบูรพา',
    degrees: [
      { degree: 'Ph.D.', field: 'Mechanical Engineering', institution: 'The University of Manchester', country: 'UK', year: 'พ.ศ. 2554' },
      { degree: 'วศ.ม.', field: 'วิศวกรรมเครื่องกล', institution: 'สถาบันเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)', country: 'Thailand', year: 'พ.ศ. 2547' },
      { degree: 'วศ.บ.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเทคโนโลยีมหานคร', country: 'Thailand', year: 'พ.ศ. 2544' },
    ],
    expertise: ['Mechanical Simulation & CAD/CAE', 'Dynamics & Solid Mechanics', 'Mechanism Design', 'Robotic Kinematics'],
  },
  {
    id: 'pareecha',
    nameTh: 'ผศ.ดร.ปารีชา รัตนศิริ',
    nameEn: 'Asst. Prof. Dr. Pareecha Rattanasiri',
    positionTh: 'ผู้ช่วยศาสตราจารย์ (อาจารย์ผู้รับผิดชอบหลักสูตร)',
    positionEn: 'Assistant Professor / Program Committee',
    role: 'responsible',
    image: '/images/pareecha.jpg',
    email: 'pareecha@eng.buu.ac.th',
    office: 'อาคารวิศวกรรมศาสตร์ 1 ภาควิชาวิศวกรรมเครื่องกล มหาวิทยาลัยบูรพา',
    degrees: [
      { degree: 'Ph.D.', field: 'Engineering', institution: 'University of Southampton', country: 'UK', year: 'พ.ศ. 2557' },
      { degree: 'M.Sc.', field: 'Maritime Engineering Science', institution: 'University of Southampton', country: 'UK', year: 'พ.ศ. 2551' },
      { degree: 'วศ.ม.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเชียงใหม่', country: 'Thailand', year: 'พ.ศ. 2546' },
      { degree: 'วศ.บ.', field: 'วิศวกรรมเครื่องกล', institution: 'มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.)', country: 'Thailand', year: 'พ.ศ. 2543' },
    ],
    expertise: ['Thermo-Fluids & Flow Simulation', 'Green & Sustainable Engineering', 'Marine & Autonomous Vehicles', 'Engineering Optimization'],
  },
  {
    id: 'natthapol',
    nameTh: 'ดร.นัฐพล ศรีรัตนศักดิ์',
    nameEn: 'Dr. Natthapol Srirattanasak',
    positionTh: 'อาจารย์ (อาจารย์ผู้รับผิดชอบหลักสูตร)',
    positionEn: 'Lecturer / Program Committee',
    role: 'responsible',
    image: '/images/natthapol.jpg',
    email: 'natthapol.s@eng.buu.ac.th',
    office: 'อาคารวิศวกรรมศาสตร์ 1 ภาควิชาวิศวกรรมเครื่องกล มหาวิทยาลัยบูรพา',
    degrees: [
      { degree: 'Ph.D.', field: 'Manufacturing Engineering', institution: 'University of Nottingham', country: 'UK', year: 'พ.ศ. 2567' },
      { degree: 'M.Sc.', field: 'Robotics', institution: 'University of Bristol', country: 'UK', year: 'พ.ศ. 2563' },
      { degree: 'วศ.บ.', field: 'วิศวกรรมเครื่องกล', institution: 'จุฬาลงกรณ์มหาวิทยาลัย', country: 'Thailand', year: 'พ.ศ. 2561' },
    ],
    expertise: ['Artificial Intelligence & Computer Vision', 'Smart Manufacturing & Industry 4.0', 'Autonomous Mobile Robots (AMR)', 'Industrial Machine Learning'],
  },
];

export const CAREER_PATHS: CareerPathItem[] = [
  {
    id: 'robotics-engineer',
    titleTh: '1. วิศวกรหุ่นยนต์และระบบอัตโนมัติ',
    titleEn: 'Robotics and Industrial Automation Engineer',
    descriptionTh: 'วิศวกรผู้ออกแบบ ติดตั้ง วางโปรแกรม และทดสอบระบบแขนกลอุตสาหกรรม (6-axis Robot, SCARA, Delta, Cobot) ในสายการประกอบและกระบวนการผลิตอัจฉริยะ',
    responsibilities: [
      'ออกแบบเซลล์หุ่นยนต์ (Robot Cell Layout) และทางวิ่งระบบอัตโนมัติ',
      'เขียนโปรแกรมควบคุมการเคลื่อนที่ การหยิบจับ และเชื่อมประกอบชิ้นงาน',
      'ผสานรวมหุ่นยนต์กับระบบ PLC, วิชั่นซิสเต็ม และระบบความปลอดภัย Safety PLC',
      'วิเคราะห์และปรับปรุงรอบเวลาการทำงาน (Cycle Time) และความแม่นยำ',
    ],
    skills: ['Robot Kinematics', 'KUKA/ABB/Yaskawa Robot Language', 'Offline Simulation (Visual Components)', 'Safety Interlocks'],
    targetSectors: ['อุตสาหกรรมยานยนต์และ EV', 'อิเล็กทรอนิกส์อัจฉริยะ', 'สายการผลิตอาหารและเครื่องดื่ม', 'เขตเศรษฐกิจพิเศษ EEC'],
    averageStartingSalary: '32,000 - 48,000 บาท/เดือน (Senior: 70,000+ บาท)',
  },
  {
    id: 'automation-planner',
    titleTh: '2. วิศวกรวางแผนและควบคุมการผลิตอัตโนมัติ',
    titleEn: 'Automated Production Planning and Control Engineer',
    descriptionTh: 'ควบคุมการทำงานของไลน์การผลิตอัตโนมัติ ออกแบบระบบ PLC/SCADA เพื่อการส่งผ่านสัญญาณ ตรวจสอบสถานะการผลิตแบบ Real-time และลด Down Time',
    responsibilities: [
      'เขียนโปรแกรมและดีบักระบบ PLC (Mitsubishi iQ-R, Siemens, Omron)',
      'พัฒนาหน้าจอควบคุม HMI และระบบมอนิเตอร์ SCADA (Genesis64)',
      'วางแผนสมดุลสายการผลิต (Line Balancing) และบำรุงรักษาระบบไฟฟ้า-กลไก',
      'จัดการความต่อเนื่องของกระบวนการผลิตตามมาตรฐานอุตสาหกรรม',
    ],
    skills: ['PLC Programming (Ladder, FBD, SCL)', 'SCADA & HMI Design', 'Industrial Communication (CC-Link, Profinet, Modbus)', 'Production OEE'],
    targetSectors: ['โรงงานผลิตชิ้นส่วนยานยนต์', 'อุตสาหกรรมเคมีภัณฑ์และบรรจุภัณฑ์', 'โรงกลั่นและพลังงาน', 'คลังสินค้าอัตโนมัติ'],
    averageStartingSalary: '30,000 - 45,000 บาท/เดือน',
  },
  {
    id: 'software-data-engineer',
    titleTh: '3. วิศวกรซอฟต์แวร์และระบบข้อมูลอุตสาหกรรม',
    titleEn: 'Industrial Software and Data Systems Engineer',
    descriptionTh: 'พัฒนาซอฟต์แวร์เชื่อมโยงเครื่องจักรในสายการผลิตเข้ากับระบบสารสนเทศระดับองค์กร (MES / ERP) ประมวลผลข้อมูลการผลิตเพื่อการตัดสินใจ',
    responsibilities: [
      'เชื่อมโยงฐานข้อมูลการผลิตจากหน้างาน (Shop Floor) สู่ระบบ Q-ERP',
      'พัฒนาสคริปต์เชื่อมต่อ API ระหว่างเครื่องจักรกับฐานข้อมูล SQL',
      'ออกแบบแดชบอร์ดติดตามค่า KPI และตรวจจับสัญญาณความผิดปกติ',
      'ควบคุมความปลอดภัยเครือข่ายอุตสาหกรรม (OT Cybersecurity)',
    ],
    skills: ['Python / C# / C++', 'Industrial IoT Protocols (MQTT, OPC-UA)', 'Database Systems & SQL', 'MES & ERP Integration'],
    targetSectors: ['Smart Factory Solutions', 'ซอฟต์แวร์เฮาส์สายอุตสาหกรรม', 'บริษัท System Integrator (SI)', 'นิคมอุตสาหกรรมมาบตาพุด-แหลมฉบัง'],
    averageStartingSalary: '35,000 - 55,000 บาท/เดือน',
  },
  {
    id: 'ai-iiot-engineer',
    titleTh: '4. วิศวกรระบบอินเทอร์เน็ตและปัญญาประดิษฐ์สำหรับระบบอัตโนมัติ',
    titleEn: 'Industrial IoT and AI Engineer for Automation Systems',
    descriptionTh: 'ประยุกต์ใช้ Computer Vision และ Machine Learning ในการตรวจสอบคุณภาพชิ้นงาน (Visual Quality Inspection) และการพยากรณ์ความเสียหายเครื่องจักร',
    responsibilities: [
      'สร้างโมเดล AI ตรวจจับรอยตำหนิชิ้นงานด้วย Industrial Camera (CiRA Core, OpenCV)',
      'ติดตั้งระบบเซนเซอร์ตรวจวัดแรงสั่นสะเทือน อุณหภูมิ เพื่อ Predictive Maintenance',
      'พัฒนาระบบนำทางหุ่นยนต์เคลื่อนที่อัตโนมัติ (AMR / AGV) ด้วย SLAM',
      'ประมวลผลข้อมูล Big Data จาก Edge Device สู่ Cloud Platform',
    ],
    skills: ['Computer Vision (OpenCV, YOLO)', 'CiRA Core Framework', 'Edge AI & Embedded Linux', 'Sensor Fusion & Vibration Analysis'],
    targetSectors: ['อุตสาหกรรมเซมิคอนดักเตอร์', 'ยานยนต์ไฟฟ้า (EV Battery)', 'ศูนย์วิจัยเทคโนโลยีขั้นสูง', 'บริษัทเทคโนโลยีอัตโนมัติ'],
    averageStartingSalary: '38,000 - 60,000 บาท/เดือน',
  },
  {
    id: 'rd-engineer',
    titleTh: '5. นักวิจัยและพัฒนาดำเนินการด้านหุ่นยนต์และระบบอัตโนมัติ',
    titleEn: 'R&D Engineer in Robotics and Automation Systems',
    descriptionTh: 'วิจัยและสร้างสรรค์นวัตกรรมระบบหุ่นยนต์บริการ หุ่นยนต์การแพทย์ ระบบอัตโนมัติทางการเกษตร และเทคโนโลยีใหม่สำหรับอนาคต',
    responsibilities: [
      'ศึกษาและวิจัยเทคโนโลยีใหม่ (Digital Twin, Mixed Reality, HoloLens)',
      'สร้างและทดสอบระบบต้นแบบ (Rapid Prototyping ด้วย 3D Printing)',
      'ตีพิมพ์ผลงานวิจัยหรือจดสิทธิบัตรทางวิศวกรรม',
      'ร่วมมือกับองค์กรวิจัยทั้งในและต่างประเทศ',
    ],
    skills: ['ROS / ROS2', 'Digital Twin Simulation', 'Advanced Mathematical Modeling', 'Scientific Writing & Prototyping'],
    targetSectors: ['สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยี', 'ศูนย์วิจัยบริษัทข้ามชาติ', 'มหาวิทยาลัยและสถาบันการศึกษา', 'อุตสาหกรรมการแพทย์และการบิน'],
    averageStartingSalary: '32,000 - 50,000 บาท/เดือน',
  },
  {
    id: 'tech-entrepreneur',
    titleTh: '6. ผู้ประกอบการด้านเทคโนโลยีหุ่นยนต์และระบบอัตโนมัติ',
    titleEn: 'Robotics and Automation Technology Entrepreneur / System Integrator',
    descriptionTh: 'ก่อตั้งธุรกิจ System Integrator (SI) ให้คำปรึกษา ออกแบบ และติดตั้งระบบหุ่นยนต์และสายการผลิตอัตโนมัติแก่โรงงานอุตสาหกรรมในพื้นที่ EEC และทั่วประเทศ',
    responsibilities: [
      'ประเมินความต้องการของโรงงานและเสนอโซลูชันระบบอัตโนมัติ (ROI / Payback)',
      'บริหารจัดการโครงการ วิศวกรรมจัดซื้อ และส่งมอบงานให้แก่ลูกค้า',
      'ประสานงานกับผู้ผลิตอุปกรณ์ระดับโลก (Global Automation Vendors)',
      'ต่อยอดนวัตกรรมสู่ผลิตภัณฑ์และบริการเชิงพาณิชย์',
    ],
    skills: ['Technopreneurship & Cost Estimation', 'Project Management & Team Leadership', 'Contracting & Standards', 'Client Consultation'],
    targetSectors: ['ธุรกิจ System Integrator ของตนเอง', 'Startup ด้านหุ่นยนต์และ IoT', 'บริษัทที่ปรึกษาด้านวิศวกรรม', 'เครือข่ายพันธมิตร EEC'],
    averageStartingSalary: 'รายได้ตามผลประกอบการและขนาดโครงการธุรกิจ (เฉลี่ย 500,000 - 3,000,000+ บาท/ปี)',
  },
];

export const INDUSTRY_PARTNERS = [
  { name: 'บริษัท มิตซูบิชิ อีเล็คทริค แฟคทอรี่ ออโตเมชั่น (ประเทศไทย) จำกัด', desc: 'สนับสนุนอุปกรณ์ฝึก PLC ซีรีส์ iQ-F/iQ-R, เซอร์โวมอเตอร์, SCADA และซอฟต์แวร์อุตสาหกรรม' },
  { name: 'บริษัท ทีบีเคเค (ประเทศไทย) จำกัด', desc: 'สถานประกอบการชั้นนำด้านชิ้นส่วนยานยนต์ รองรับการฝึกงานและสหกิจศึกษา CWIE' },
  { name: 'บริษัท ฟาบริเนท จำกัด', desc: 'ผู้นำด้านการผลิตชิ้นส่วนอิเล็กทรอนิกส์และออปติคอลความแม่นยำสูงระดับโลก' },
  { name: 'บริษัท โรบอท ซิสเต็ม จำกัด', desc: 'ผู้เชี่ยวชาญด้านการออกแบบและบูรณาการระบบหุ่นยนต์อุตสาหกรรม (System Integrator)' },
  { name: 'บริษัท โรโบคลาวด์ จำกัด', desc: 'ผู้ให้บริการระบบอัตโนมัติ คลาวด์ และแพลตฟอร์มจัดการโรงงานอัจฉริยะ' },
  { name: 'บริษัท ไทยน้ำทิพย์ คอร์ปอเรชั่น จำกัด', desc: 'โรงงานผลิตเครื่องดื่มขนาดใหญ่ที่มีสายการผลิตอัตโนมัติความเร็วสูง' },
  { name: 'บริษัท ควิก ทรานส์ฟอร์เมชั่น จำกัด (มหาชน)', desc: 'พันธมิตรด้านการยกระดับดิจิทัลและระบบโรงงานอัจฉริยะในภาคตะวันออก' },
  { name: 'บริษัท ยูนิโปร แมนูแฟคเจอริ่ง จำกัด', desc: 'ผู้ผลิตชิ้นส่วนโลหะและระบบกลไกความแม่นยำสูง' },
  { name: 'สมาคมผู้ประกอบการระบบอัตโนมัติและหุ่นยนต์ไทย (TARA)', desc: 'เครือข่ายผู้ประกอบการหุ่นยนต์แห่งประเทศไทย สนับสนุนทุน โครงงาน และการรับรองวิชาชีพ' },
];

export const LAB_FACILITIES = {
  software: [
    { name: 'SolidWorks', spec: '200 Licenses (ออกแบบและจำลองระบบกลไก 3D)' },
    { name: 'Visual Components', spec: '20 Licenses (จำลองสายการผลิต 3D Digital Twin)' },
    { name: 'Technomatrix', spec: '21 Licenses (ซอฟต์แวร์วิเคราะห์และจำลองกระบวนการ)' },
    { name: 'CiRA Core', spec: 'Unlimited (แพลตฟอร์ม Deep Learning & Computer Vision สัญชาติไทย)' },
    { name: 'Genesis64 SCADA', spec: 'Trial License ไม่จำกัดจำนวนครั้ง (ระบบมอนิเตอร์และควบคุมโรงงาน)' },
    { name: 'Q-ERP', spec: '30 & 50 Users (ระบบวางแผนทรัพยากรองค์กรและการผลิต)' },
  ],
  hardware: [
    { category: 'PLC & Control', items: ['ชุดฝึก PLC Mitsubishi Q, iQ-F, iQ-R (33 ชุด)', 'ชุด HMI GOT2000 CC-Link IE (33 เครื่อง)', 'ชุดฝึก Servo & Motion Control Q (22 เครื่อง)', 'ชุดฝึก Electro-pneumatic, Inverter + Motor + PLC (13 ชุด)'] },
    { category: 'Robotics', items: ['หุ่นยนต์อุตสาหกรรม 6 แกน (SCARA, KUKA, ABB, Yaskawa Coop Robot) รวม 6 ชุด', 'Delta Robot ABB (3 ชุด)', 'แขนกล Dobot Magician MG400 สำหรับฝึกควบคุมและ AI (20 ชุด)'] },
    { category: 'IoT & Smart Factory', items: ['ชุด IIoT Siemens 2050 (10 ชุด)', 'ชุดฝึกระบบอัตโนมัติ MPU-A/B/C Autodidactic', 'ชุดฝึกสายการผลิตบรรจุสินค้า (1 ชุด)', 'Collaborative Robot ASSISTA with AMR (หุ่นยนต์ร่วมปฏิบัติงานกับรถนำทางอัตโนมัติ 1 ชุด)', 'Visual Inspection ระบบวิทัศน์ตรวจสอบฉลาก (1 ชุด)'] },
    { category: 'VR & Prototyping', items: ['Hololens 2 Regular Edition (แว่น Mixed Reality 1 ชุด)', 'ชุดจำลอง Smart Factory – Model Line (1 ชุด)', 'ชุด AS/RS Shuttle Rack M คลังสินค้าอัตโนมัติพร้อมซอฟต์แวร์ (1 ชุด)', '3D Printer Maker XYZ Snap & Maker 3-in-1 (7 ชุด)'] },
    { category: 'Computing Stations', items: ['โน้ตบุ๊ก Intel Core i5/i7 ประมวลผลระดับสูง (30 เครื่อง)', 'เครื่องคอมพิวเตอร์เวิร์กสเตชันประมวลผลระดับสูงสำหรับ CAD/AI (40 เครื่อง)'] },
  ],
};

export const STUDENT_SERVICES: StudentServiceLink[] = [
  {
    id: 'buu-reg',
    titleTh: 'ระบบบริการการศึกษา (BUU REG)',
    titleEn: 'Burapha University Registrar System',
    descriptionTh: 'ลงทะเบียนเรียน ตรวจสอบผลการเรียน (เกรด) ตารางเรียน ตารางสอบ ใบเสร็จรับเงิน และสถานะทางวิชาการ',
    url: 'https://reg.buu.ac.th',
    category: 'academic',
    icon: 'GraduationCap',
    isExternal: true,
  },
  {
    id: 'buu-lms',
    titleTh: 'ระบบการเรียนรู้ออนไลน์ (BUU LMS)',
    titleEn: 'Learning Management System',
    descriptionTh: 'เข้าสู่ห้องเรียนออนไลน์ ส่งการบ้าน ทำแบบทดสอบ เข้าถึงเอกสารคำสอน และดูคลิปการสอนย้อนหลัง',
    url: 'https://lms.buu.ac.th',
    category: 'academic',
    icon: 'Laptop',
    isExternal: true,
  },
  {
    id: 'buu-lib',
    titleTh: 'สำนักหอสมุด มหาวิทยาลัยบูรพา',
    titleEn: 'BUU Library & E-Databases',
    descriptionTh: 'สืบค้นหนังสือ วารสาร วิทยานิพนธ์ ฐานข้อมูลงานวิจัย IEEE Xplore, ScienceDirect, Web of Science และยืมระหว่างห้องสมุด',
    url: 'https://library.buu.ac.th',
    category: 'facility',
    icon: 'BookOpen',
    isExternal: true,
  },
  {
    id: 'buunet-wifi',
    titleTh: 'ระบบเครือข่ายและอีเมล (BUUNet / O365)',
    titleEn: 'IT Services, Wi-Fi & Office 365',
    descriptionTh: 'บริการ Wi-Fi ทุกอาคาร, บริการ VPN สำหรับใช้งานฐานข้อมูลนอกมหาวิทยาลัย, บัญชีอีเมล Google Workspace & Microsoft 365 ฟรีสำหรับนิสิต',
    url: 'https://buu.ac.th/it-services',
    category: 'it',
    icon: 'Wifi',
    isExternal: true,
  },
  {
    id: 'eng-forms',
    titleTh: 'งานบริการการศึกษา คณะวิศวกรรมศาสตร์',
    titleEn: 'Faculty of Engineering Academic Forms',
    descriptionTh: 'ดาวน์โหลดแบบฟอร์มคำร้องทั่วไป, ขอเพิ่ม-ถอนรายวิชา, ลาพักการศึกษา, ลงทะเบียนเทียบโอน และคำร้องขอทำโครงงานวิศวกรรม',
    url: 'https://eng.buu.ac.th/academic-services',
    category: 'academic',
    icon: 'FileText',
    isExternal: true,
  },
  {
    id: 'cwie-portal',
    titleTh: 'ระบบศูนย์สหกิจศึกษา (CWIE Portal)',
    titleEn: 'Cooperative & Work-Integrated Education',
    descriptionTh: 'สมัครเข้าร่วมโครงการสหกิจศึกษา บันทึกรายงานการฝึกงานในสถานประกอบการ รายชื่อบริษัทพันธมิตรรองรับ และเกณฑ์การประเมินผล',
    url: 'https://eng.buu.ac.th/cwie',
    category: 'academic',
    icon: 'Briefcase',
    isExternal: true,
  },
  {
    id: 'mech-robotics-club',
    titleTh: 'ชมรมวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ',
    titleEn: 'Robotics & Automation Student Chapter',
    descriptionTh: 'กิจกรรมนอกหลักสูตร แข่งขันหุ่นยนต์ระดับชาติ TPA Robot, สัมมนาเทคโนโลยี, ค่ายติวน้อง และโครงงานนวัตกรรมนิสิต',
    url: 'https://facebook.com/buurobotics',
    category: 'student-affair',
    icon: 'Users',
    isExternal: true,
  },
  {
    id: 'tuition-scholarship',
    titleTh: 'ทุนการศึกษาและกิจการนิสิต',
    titleEn: 'Scholarships & Student Welfare',
    descriptionTh: 'ข้อมูลทุนการศึกษาของคณะวิศวกรรมศาสตร์ ทุนกู้ยืม กยศ./กรอ. ทุนจากภาคอุตสาหกรรม และประกันอุบัติเหตุสำหรับนิสิต',
    url: 'https://eng.buu.ac.th/scholarships',
    category: 'student-affair',
    icon: 'HeartHandshake',
    isExternal: true,
  },
];

export const FAQS = [
  {
    q: 'หลักสูตรวิศวกรรมหุ่นยนต์ฯ ม.บูรพา เป็นหลักสูตรเปิดใหม่หรือไม่?',
    a: 'เป็นหลักสูตรใหม่ พ.ศ. 2569 ที่ผ่านความเห็นชอบจากสภาวิชาการมหาวิทยาลัยบูรพา (26 พ.ย. 2568) และสภามหาวิทยาลัยบูรพา (20 ธ.ค. 2568) โดยเริ่มเปิดรับนิสิตรุ่นแรกในภาคการศึกษาต้น ปีการศึกษา 2569 สังกัดภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์',
  },
  {
    q: 'โครงสร้างหลักสูตรเรียนกี่หน่วยกิต และใช้เวลาเรียนกี่ปี?',
    a: 'หลักสูตรเรียนรวมไม่น้อยกว่า 123 หน่วยกิต ออกแบบเป็นหลักสูตร 4 ปี จัดการศึกษาแบบระบบทวิภาค (2 ภาคการศึกษาปกติ และ 3 ภาคฤดูร้อนสำหรับวิชาโครงงานบูรณาการ 1 หน่วยกิต)',
  },
  {
    q: 'ความแตกต่างระหว่าง แผนการศึกษา 1 และ แผนการศึกษา 2 คืออะไร?',
    a: 'แผน 1 เน้นวิชาเอกเลือกขั้นสูง 4 วิชา (12 หน่วยกิต) ในชั้นปีที่ 4 ภาคต้น และไปปฏิบัติงานสหกิจศึกษา CWIE ในปี 4 ภาคปลาย (12 หน่วยกิต) ส่วน แผน 2 เหมาะสำหรับผู้ที่ต้องการฝึกปฏิบัติงานในสถานประกอบการเข้มข้นต่อเนื่องตลอดทั้งปี 4 (สหกิจศึกษา 1 ในภาคต้น และ สหกิจศึกษา 2 ในภาคปลาย รวม 24 หน่วยกิต)',
  },
  {
    q: 'นิสิตจะได้ฝึกปฏิบัติกับอุปกรณ์จริงอะไรบ้างในหลักสูตรนี้?',
    a: 'นิสิตจะได้ฝึกกับหุ่นยนต์ 6 แกนอุตสาหกรรม (KUKA, ABB, Yaskawa), แขนกล Dobot MG400 จำนวน 20 เครื่อง, ชุด PLC Mitsubishi ซีรีส์ iQ-R, GOT2000 HMI, ระบบ SCADA Genesis64, ซอฟต์แวร์ SolidWorks, Visual Components (Digital Twin), ชุด IIoT Siemens, รถลำเลียงอัตโนมัติ AMR และแว่น HoloLens 2',
  },
  {
    q: 'จบแล้วสามารถทำงานในพื้นที่ระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC) ได้อย่างไร?',
    a: 'มหาวิทยาลัยบูรพาตั้งอยู่ใจกลางพื้นที่ EEC (ชลบุรี-ระยอง) ซึ่งมีนิคมอุตสาหกรรมชั้นนำกว่า 30 แห่ง และหลักสูตรมีความร่วมมือกับสมาคมหุ่นยนต์ไทย (TARA) และบริษัทอุตสาหกรรม เช่น Mitsubishi Electric, TBKK, Fabrinet ทำให้นิสิตมีโอกาสสูงมากในการได้งานทันทีหลังจบการศึกษาหรือได้รับการจ้างงานตั้งแต่ระหว่างทำสหกิจศึกษา',
  },
];
