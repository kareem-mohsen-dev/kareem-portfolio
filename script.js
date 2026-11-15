// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}));

// Smooth reveal, with a graceful fallback for older browsers
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.availability': 'OPEN TO JUNIOR OPPORTUNITIES',
    'hero.eyebrow': "HELLO, I'M KAREEM MOHSEN",
    'hero.title': 'Thoughtful design.<br><span class="accent">Clean code.</span><br>Better experiences.',
    'hero.description': "I'm a Computer Science & AI graduate focused on front-end development. I build responsive, user-friendly websites with attention to detail and a passion for learning.",
    'hero.projects': 'Explore my work <span>↘</span>',
    'hero.contact': "Let's connect",
    'hero.scroll': 'SCROLL TO EXPLORE',
    'hero.name': 'KAREEM MOHSEN',
    'hero.role': 'FRONT-END DEVELOPER',
    'hero.noteTop': 'Building for the web<small>One detail at a time</small>',
    'hero.noteBottom': 'Clean & responsive<small>HTML · CSS · JavaScript</small>',
    'stats.label': 'Quick facts',
    'stats.graduate': 'GRADUATE',
    'stats.tools': 'CORE TOOLS',
    'stats.projects': 'FEATURED PROJECT',
    'stats.location': 'BASED IN EGYPT',
    'about.eyebrow': '01 / ABOUT ME',
    'about.title': 'Driven by curiosity.<br><span class="accent">Focused on the details.</span>',
    'about.lead': 'I’m Kareem, a Computer Science & Artificial Intelligence graduate with a passion for front-end development.',
    'about.description': 'I enjoy turning ideas into accessible, responsive interfaces. I’m continuously strengthening my foundations through learning and hands-on practice, with a focus on writing clear code and creating useful experiences.',
    'about.linkedin': 'Connect on LinkedIn <span>↗</span>',
    'about.education': 'Education',
    'about.degree': 'Computer Science and Artificial Intelligence graduate',
    'about.direction': 'Primary direction',
    'about.frontend': 'Front-End Development',
    'about.values': 'What I value',
    'about.valueDescription': 'Responsive design, clarity & continuous learning',
    'skills.eyebrow': '02 / TECH STACK',
    'skills.title': 'Tools behind <span class="accent">the work.</span>',
    'skills.description': 'The technologies I’m using as I grow as a front-end developer.',
    'skills.disclaimer': 'A practical toolkit I’m continuously developing through hands-on work.',
    'skills.foundation': 'FOUNDATION',
    'skills.html': 'Semantic structure, accessible markup and clean page foundations.',
    'skills.styling': 'STYLING',
    'skills.css': 'Responsive layouts, visual design, spacing and modern styling.',
    'skills.developing': 'DEVELOPING',
    'skills.javascript': 'Learning and applying interactivity, logic and dynamic behavior.',
    'skills.workflow': 'WORKFLOW',
    'skills.git': 'Version control, repositories and publishing projects online.',
    'projects.eyebrow': '03 / SELECTED WORK',
    'projects.title': 'Things I’ve <span class="accent">built.</span>',
    'projects.description': 'A practical project where I bring my front-end learning together.',
    'projects.projectEyebrow': 'WEB DEVELOPMENT / 01',
    'projects.projectDescription': 'A simple Islamic website bringing together useful spiritual content, including Quran-related content, audio recitations, stories, digital tasbeeh and daily azkar.',
    'projects.previewSubtitle': 'A PLACE FOR FAITH & REFLECTION',
    'projects.live': 'Live demo ↗',
    'projects.source': 'Source code ↗',
    'projects.comingTitle': 'More in progress.',
    'projects.comingDescription': 'New projects will appear here as I build and learn.',
    'process.eyebrow': '04 / MY APPROACH',
    'process.title': 'Simple process.<br><span class="accent">Thoughtful results.</span>',
    'process.understand': 'Understand',
    'process.understandDescription': 'Start with the goal, the user and what the experience needs to achieve.',
    'process.build': 'Build',
    'process.buildDescription': 'Turn the idea into a clean, responsive interface with solid foundations.',
    'process.improve': 'Improve',
    'process.improveDescription': 'Test, refine details and keep learning from every project.',
    'contact.eyebrow': '05 / GET IN TOUCH',
    'contact.title': 'Let’s create something<br><span class="accent">worth experiencing.</span>',
    'contact.description': 'I’m open to junior front-end opportunities, internships and meaningful connections in the web development community.',
    'contact.whatsapp': 'Message on WhatsApp <span>↗</span>',
    'contact.linkedin': 'Connect on LinkedIn <span>↗</span>',
    'contact.email': 'Email me <span>↗</span>',
    'footer.credit': 'Designed & built by Kareem Mohsen',
    'footer.top': 'BACK TO TOP ↑',
    'footer.rights': 'All rights reserved.'
  },
  ar: {
    'nav.about': 'نبذة عني',
    'nav.stack': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معي',
    'hero.availability': 'متاح لفرص العمل للمبتدئين',
    'hero.eyebrow': 'أهلًا، أنا كريم محسن',
    'hero.title': 'تصميم باهتمام.<br><span class="accent">كود نظيف.</span><br>تجربة أفضل.',
    'hero.description': 'خريج علوم الحاسب والذكاء الاصطناعي، مهتم بتطوير الواجهات الأمامية. أبني مواقع متجاوبة وسهلة الاستخدام باهتمام بالتفاصيل وشغف بالتعلم.',
    'hero.projects': 'شاهد أعمالي <span>↘</span>',
    'hero.contact': 'لنتواصل',
    'hero.scroll': 'مرر لاستكشاف الموقع',
    'hero.name': 'كريم محسن',
    'hero.role': 'مطور واجهات أمامية',
    'hero.noteTop': 'أبني للويب<small>اهتمام بكل تفصيلة</small>',
    'hero.noteBottom': 'كود نظيف ومتجاوب<small>HTML · CSS · JavaScript</small>',
    'stats.label': 'معلومات سريعة',
    'stats.graduate': 'خريج',
    'stats.tools': 'أدوات أساسية',
    'stats.projects': 'مشروع مميز',
    'stats.location': 'مقيم في مصر',
    'about.eyebrow': '01 / نبذة عني',
    'about.title': 'يقودني الفضول.<br><span class="accent">وأهتم بالتفاصيل.</span>',
    'about.lead': 'أنا كريم، خريج علوم الحاسب والذكاء الاصطناعي، وشغوف بتطوير الواجهات الأمامية.',
    'about.description': 'أستمتع بتحويل الأفكار إلى واجهات سهلة الاستخدام ومتجاوبة. أعمل باستمرار على تطوير مهاراتي بالتعلم والتطبيق العملي، مع التركيز على كتابة كود واضح وبناء تجارب مفيدة.',
    'about.linkedin': 'تواصل معي على LinkedIn <span>↗</span>',
    'about.education': 'التعليم',
    'about.degree': 'خريج علوم الحاسب والذكاء الاصطناعي',
    'about.direction': 'مجال التركيز',
    'about.frontend': 'تطوير الواجهات الأمامية',
    'about.values': 'ما أهتم به',
    'about.valueDescription': 'تصميم متجاوب، وضوح، وتعلم مستمر',
    'skills.eyebrow': '02 / المهارات التقنية',
    'skills.title': 'الأدوات التي <span class="accent">أستخدمها.</span>',
    'skills.description': 'تقنيات أستخدمها وأطوّر مهاراتي فيها كمطوّر واجهات أمامية.',
    'skills.disclaimer': 'أواصل تطوير مهاراتي بالتطبيق العملي والتعلم المستمر.',
    'skills.foundation': 'الأساس',
    'skills.html': 'بنية صفحات واضحة، ووسوم سهلة الوصول، وأساس سليم للموقع.',
    'skills.styling': 'التنسيق',
    'skills.css': 'تصميم متجاوب، وتنسيق بصري، ومسافات مناسبة، وأساليب حديثة.',
    'skills.developing': 'تطوير',
    'skills.javascript': 'أتعلم وأطبّق التفاعل والمنطق والسلوك الديناميكي.',
    'skills.workflow': 'سير العمل',
    'skills.git': 'إدارة الإصدارات والمستودعات ونشر المشاريع عبر الإنترنت.',
    'projects.eyebrow': '03 / أعمال مختارة',
    'projects.title': 'مشاريع <span class="accent">أنجزتها.</span>',
    'projects.description': 'مشروع عملي جمعت فيه ما تعلمته في تطوير الواجهات الأمامية.',
    'projects.projectEyebrow': 'تطوير مواقع / 01',
    'projects.projectDescription': 'موقع إسلامي بسيط يجمع محتوى مفيدًا، مثل محتوى القرآن والتلاوات الصوتية والقصص والسبحة الإلكترونية والأذكار اليومية.',
    'projects.previewSubtitle': 'مساحة للإيمان والتأمل',
    'projects.live': 'عرض المشروع ↗',
    'projects.source': 'الكود المصدري ↗',
    'projects.comingTitle': 'مشاريع جديدة قيد التنفيذ.',
    'projects.comingDescription': 'ستُضاف مشاريعي الجديدة هنا مع استمرار التعلم والتطوير.',
    'process.eyebrow': '04 / أسلوبي في العمل',
    'process.title': 'خطوات بسيطة.<br><span class="accent">ونتائج مدروسة.</span>',
    'process.understand': 'الفهم',
    'process.understandDescription': 'أبدأ بفهم الهدف والمستخدم وما الذي يجب أن تحققه التجربة.',
    'process.build': 'التنفيذ',
    'process.buildDescription': 'أحوّل الفكرة إلى واجهة واضحة ومتجاوبة بأساس تقني متين.',
    'process.improve': 'التطوير',
    'process.improveDescription': 'أختبر التفاصيل وأحسّنها وأتعلم من كل مشروع.',
    'contact.eyebrow': '05 / تواصل معي',
    'contact.title': 'لنبنِ شيئًا<br><span class="accent">يستحق التجربة.</span>',
    'contact.description': 'منفتح على فرص العمل للمبتدئين والتدريب والتواصل مع المهتمين بتطوير الويب.',
    'contact.whatsapp': 'راسلني على واتساب <span>↗</span>',
    'contact.linkedin': 'تواصل معي على LinkedIn <span>↗</span>',
    'contact.email': 'راسلني بالبريد <span>↗</span>',
    'footer.credit': 'تصميم وتطوير كريم محسن',
    'footer.top': 'العودة للأعلى ↑',
    'footer.rights': 'جميع الحقوق محفوظة.'
  }
};

const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  document.documentElement.lang = currentLanguage;
  document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.innerHTML = translations[currentLanguage][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', translations[currentLanguage][element.dataset.i18nAriaLabel]);
  });

  languageToggle.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
  languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch language to Arabic' : 'Switch language to English');
});
