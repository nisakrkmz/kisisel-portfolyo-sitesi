
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Code2, 
  Send, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  MessageSquare,
  Sparkles,
  Calendar,
  MapPin,
  GraduationCap,
  Download,
  FileText,
  X,
  Award,
  Users,
  Briefcase,
  Heart
} from 'lucide-react';
// Note: GoogleGenAI removed from client bundle to avoid exposing API keys in browser.
// The AI chat uses local/mock responses in `AIChat` component.

const STUDENT_INFO = {
  name: "Nisa Naz KORKMAZ",
  title: "Bilgisayar Mühendisliği Öğrencisi & Araştırmacı",
  location: "Samsun, Türkiye",
  phone: "+90 543 767 5040",
  email: "korkmazn934@gmail.com",
  bio: "Doğal Dil İşleme (NLP) ve Makine Öğrenmesi alanında uzmanlaşmayı hedefleyen bir Yazılım Mühendisliği öğrencisiyim. C# ve Python dillerinde akademik projeler ve TÜBİTAK/TÜSEB destekli araştırmalarla deneyim kazanıyorum.",
  socials: {
    github: "https://github.com/nisakrkmz",
    linkedin: "https://www.linkedin.com/in/nisa-naz-korkmaz-35bba1285/",
    medium: "https://medium.com/@nisanaz",
  },
  skills: {
    languages: ["Python", "C#"],
    technologies: ["Visual Studio", "Kaggle", "Google Colab", "Roboflow", "OpenCV", "Git", "GitHub", ".NET Framework"],
    softSkills: ["Problem Çözme", "Ekip Çalışması", "Algoritmik Düşünme", "Veri Analizi"],
    interests: ["Yapay Zekâ", "Doğal Dil İşleme", "Makine Öğrenimi", "Veri Bilimi"]
  },
  experience: [
    {
      date: "Temmuz 2025",
      title: "Stajyer | Samsun Üniversitesi",
      description: "TEKNOFEST projesinde veri seti hazırlama, etiketleme ve proje sunumu süreçlerinde aktif rol. TÜSEB destekli projede ağız hastalıkları veri analizi ve nesne tespiti modellemeleri.",
      icon: <Briefcase size={20} />
    }
  ],
  education: [
    {
      date: "Ekim 2023 - Devam Ediyor",
      title: "Samsun Üniversitesi",
      description: "Lisans: Yazılım Mühendisliği",
      icon: <GraduationCap size={20} />
    },
    {
      date: "2019 - 2023",
      title: "Sinop Anadolu Lisesi",
      description: "Lise Eğitimi",
      icon: <MapPin size={20} />
    }
  ],
  volunteering: [
    {
      date: "Kasım 2025",
      title: "Keşif Kampüsü",
      description: "Gönüllü eğitmenlik, atölye çalışmaları ve mini dersler ile genç yeteneklerin gelişimine katkı.",
      icon: <Heart size={20} />
    },
    {
      date: "Günümüz",
      title: "SAMÜ Yazılım ve İnovasyon Kulübü",
      description: "Başkan Yardımcısı olarak çeşitli projelerin koordinasyonu ve yönetim süreçleri.",
      icon: <Users size={20} />
    }
  ],
  researchProjects: [
    {
      id: "tuseb-1",
      title: "TÜSEB Dijital Tabanlı Ağız Kanseri Tanı Sistemi",
      role: "Bursiyer",
      date: "Ocak 2025 - Temmuz 2025",
      description: "İntraoral ve histopatolojik görüntülerle ağız kanserinin erken teşhisini hedefleyen yapay zekâ destekli uzman sistem platformu geliştirilmesi. Proje kapsamında geliştirilmesinde rol aldığım bir web sitesi de bulunmaktadır.",
      tech: ["Yapay Zeka", "Tıbbi Görüntü İşleme", "Python"],
      link: "https://oralhealth-ai.com/"
    },
    {
      id: "tubitak-1",
      title: "TÜBİTAK 2209-A Afet Bölgelerinde Risk Haritalama",
      role: "Araştırmacı",
      date: "Nisan 2025",
      description: "Otonom İHA ve Yapay Zekâ destekli sistem ile afet bölgelerinde yangın, enkaz ve insan kalabalığı tespiti yapılması.",
      tech: ["İHA", "Görüntü İşleme", "Risk Haritalama"]
    }
  ]
};

const Header = ({ onViewCV }: { onViewCV: () => void }) => (
  <header className="fixed top-0 w-full z-[60] bg-slate-800/95 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-all" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Nisa Naz
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-bold text-slate-300">
        <a href="#about" className="hover:text-white transition-all hover:translate-y-[-2px]">Hakkımda</a>
        <a href="#research" className="hover:text-white transition-all hover:translate-y-[-2px]">Araştırmalar</a>
        <a href="#timeline" className="hover:text-white transition-all hover:translate-y-[-2px]">Yolculuğum</a>
        <a href="#projects" className="hover:text-white transition-all hover:translate-y-[-2px]">GitHub</a>
        <a href="#writing" className="hover:text-white transition-all hover:translate-y-[-2px]">Yazılar</a>
      </nav>
      <div className="flex items-center space-x-3">
        <button 
          onClick={onViewCV}
          className="flex items-center gap-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-xs font-black transition-all shadow-xl shadow-indigo-500/20 text-white"
        >
          <FileText size={16} /> CV
        </button>
        <div className="h-6 w-px bg-slate-700 mx-2 hidden sm:block"></div>
        <a href={STUDENT_INFO.socials.linkedin} target="_blank" className="p-2 text-slate-300 hover:text-white transition-all hover:scale-110"><Linkedin size={20} /></a>
      </div>
    </div>
  </header>
);

const CVModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  const printCV = () => {
    const el = document.getElementById('cv-print-area');
    if (!el) return;
    const newWin = window.open('', '_blank');
    if (!newWin) {
      window.print();
      return;
    }
    const doc = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>CV - ${STUDENT_INFO.name}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: white; color: black; margin: 0; }
    @media print { body { background: white !important; color: black !important; } .no-print { display: none !important; } }
  </style>
</head>
<body class="bg-white text-slate-900">${el.innerHTML}</body>
</html>`;
    newWin.document.open();
    newWin.document.write(doc);
    newWin.document.close();
    newWin.focus();
    setTimeout(() => {
      newWin.print();
    }, 1200);
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/98 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="bg-white text-slate-900 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative no-scrollbar">
        <div className="sticky top-0 right-0 p-5 flex justify-between items-center bg-white/95 backdrop-blur-md z-20 border-b border-slate-100 no-print">
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={14} /> PDF için yazdır'ı (Ctrl+P) kullanın
          </div>
          <div className="flex gap-3">
            <button onClick={printCV} className="px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all flex items-center gap-2 text-sm font-black shadow-lg shadow-indigo-600/20">
              <Download size={20} /> Yazdır & Kaydet
            </button>
            <button onClick={onClose} className="p-3 bg-slate-100 text-slate-500 rounded-2xl hover:bg-slate-200 transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div id="cv-print-area" className="p-12 md:p-20">
          <div className="border-b-[10px] border-indigo-600 pb-10 mb-12">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-5 text-slate-900 leading-none">{STUDENT_INFO.name}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-bold italic">
              <span className="flex items-center gap-2"><MapPin size={18} className="text-indigo-600" /> {STUDENT_INFO.location}</span>
              <span className="flex items-center gap-2"><Mail size={18} className="text-indigo-600" /> {STUDENT_INFO.email}</span>
              <span className="flex items-center gap-2 tracking-tight"><Linkedin size={18} className="text-indigo-600" /> in/nisa-naz-korkmaz-35bba1285</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-14">
              <section>
                <h2 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-4">
                  <div className="w-10 h-1.5 bg-indigo-600 rounded-full"></div> Hedef
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-semibold">{STUDENT_INFO.bio}</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-4">
                  <div className="w-10 h-1.5 bg-indigo-600 rounded-full"></div> Deneyim
                </h2>
                {STUDENT_INFO.experience.map((exp, i) => (
                  <div key={i} className="mb-8 relative pl-8 border-l-4 border-slate-100">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-xl text-slate-800 leading-tight">{exp.title}</h3>
                      <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-tighter whitespace-nowrap">{exp.date}</span>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">{exp.description}</p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-4">
                  <div className="w-10 h-1.5 bg-indigo-600 rounded-full"></div> Araştırma & Projeler
                </h2>
                {STUDENT_INFO.researchProjects.map((proj, i) => (
                  <div key={i} className="mb-10 relative pl-8 border-l-4 border-slate-100">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-xl text-slate-800 leading-tight">{proj.title}</h3>
                      <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-tighter whitespace-nowrap">{proj.date}</span>
                    </div>
                    <p className="text-[10px] font-black text-indigo-700 mb-3 uppercase tracking-widest bg-indigo-50 w-fit px-3 py-1 rounded">ROL: {proj.role}</p>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">{proj.description}</p>
                  </div>
                ))}
              </section>
            </div>

            <div className="space-y-14">
              <section>
                <h2 className="text-xl font-black text-slate-900 uppercase mb-6 border-b-4 border-slate-100 pb-2">Eğitim</h2>
                {STUDENT_INFO.education.map((edu, i) => (
                  <div key={i} className="mb-8">
                    <h3 className="font-black text-slate-800 mb-1 leading-tight">{edu.title}</h3>
                    <p className="text-xs font-black text-indigo-600 mb-2 uppercase tracking-tight">{edu.date}</p>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </section>

              <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h2 className="text-xl font-black text-slate-900 uppercase mb-6 border-b-2 border-slate-200 pb-2">Beceriler</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[11px] font-black text-slate-400 uppercase mb-3 tracking-[0.2em]">Programlama</h4>
                    <div className="flex flex-wrap gap-2">
                      {STUDENT_INFO.skills.languages.map(s => <span key={s} className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-black text-slate-700 shadow-sm">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-400 uppercase mb-3 tracking-[0.2em]">Teknolojiler</h4>
                    <div className="flex flex-wrap gap-2">
                      {STUDENT_INFO.skills.technologies.map(s => <span key={s} className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 shadow-sm">{s}</span>)}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIChat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Preset questions and third-person answers
  const PRESET: {label: string; answer: string}[] = [
    { label: 'Nisa kaç yaşında?', answer: 'Nisa 20 yaşında.' },
    { label: 'Nisa nerede yaşıyor?', answer: 'Nisa Samsun’da yaşıyor.' },
    { label: 'Nisa ne okuyor?', answer: 'Nisa, Samsun Üniversitesi’nde Yazılım Mühendisliği 3. sınıf öğrencisi.' },
    { label: 'Projeleri nelerdir?', answer: 'Nisa’nın projeleri: TÜSEB Ağız Kanseri Tanı Sistemi ve TÜBİTAK 2209-A Afet Bölgelerinde Risk Haritalama.' }
  ];

  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: "Merhaba — aşağıdaki sorulardan birini seçerek Nisa hakkında bilgi alabilirsin." }
  ]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendPreset = (q: string, a: string) => {
    if (isLoading) return;
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: q }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: a }]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-slate-700/60 border border-white/10 rounded-[3rem] p-8 flex flex-col h-[520px] shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl animate-float">
      <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
        <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
          <Sparkles size={28} className="text-white" />
        </div>
        <div>
          <h4 className="text-lg font-black text-white leading-none mb-1">Nisa AI (Preset)</h4>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-black uppercase tracking-widest"><div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" /> Seçerek sor</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-5 mb-6 pr-2 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm font-medium ${m.role === 'user' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-800/80 text-slate-100 border border-white/5'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && <div className="text-indigo-300 text-[11px] font-black uppercase tracking-widest ml-4 animate-pulse">Düşünüyor...</div>}
      </div>

      <div className="flex flex-wrap gap-3">
        {PRESET.map(p => (
          <button key={p.label} onClick={() => sendPreset(p.label, p.answer)} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-black text-sm shadow-md transition-all">
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/users/nisakrkmz/repos?sort=updated&per_page=2`);
        const repoData = await repoRes.json();
        setRepos(Array.isArray(repoData) ? repoData : []);

        const postRes = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nisanaz`);
        const postData = await postRes.json();
        setPosts(postData.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.3 });

    ['about', 'research', 'timeline', 'projects', 'writing'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    ...STUDENT_INFO.education,
    ...STUDENT_INFO.experience,
    ...STUDENT_INFO.volunteering
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100 selection:bg-indigo-500/30 font-sans transition-all duration-700">
      <Header onViewCV={() => setIsCVOpen(true)} />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      
      {/* Hero Section */}
      <section id="about" className="pt-48 pb-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-black uppercase tracking-[0.2em] mb-12">
              <Sparkles size={16} /> NLP & AI Araştırmacısı
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.8] text-white">
              {STUDENT_INFO.name.split(' ')[0]} {STUDENT_INFO.name.split(' ')[1]}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 drop-shadow-2xl">
                {STUDENT_INFO.name.split(' ')[2]}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-14 max-w-xl leading-relaxed font-bold italic opacity-90">
              Samsun Üniversitesi Yazılım Mühendisliği öğrencisiyim. Akademik çalışmalarımda özellikle Yapay Zekâ ve Görüntü İşleme alanlarında çözüm odaklı projeler geliştiriyorum.
            </p>
            <div className="flex flex-wrap gap-8">
              <button 
                onClick={() => setIsCVOpen(true)}
                className="px-12 py-6 bg-indigo-500 hover:bg-indigo-400 rounded-3xl font-black transition-all shadow-2xl shadow-indigo-500/40 flex items-center gap-4 text-white hover:translate-y-[-4px] active:scale-95"
              >
                CV'yi İncele <FileText size={24} />
              </button>
              <div className="flex items-center gap-6">
                <a href={STUDENT_INFO.socials.github} target="_blank" className="p-6 bg-slate-700/50 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all text-white hover:translate-y-[-4px] shadow-2xl"><Github size={30} /></a>
                <a href={STUDENT_INFO.socials.linkedin} target="_blank" className="p-6 bg-slate-700/50 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all text-white hover:translate-y-[-4px] shadow-2xl"><Linkedin size={30} /></a>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute -inset-24 bg-indigo-400/10 rounded-full blur-[140px] animate-pulse"></div>
            <AIChat />
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-40 bg-slate-700/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="text-6xl font-black mb-6 tracking-tight">Akademik Araştırmalar</h2>
            <div className="w-24 h-2 bg-indigo-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-300 text-xl font-bold italic">Sağlık ve afet yönetimi odaklı yenilikçi projeler.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {STUDENT_INFO.researchProjects.map(proj => (
              <div key={proj.id} className="p-12 bg-slate-700/50 border border-white/10 rounded-[4rem] hover:bg-slate-700 hover:border-indigo-500/50 transition-all group shadow-3xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <span className="px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-[11px] font-black uppercase tracking-widest border border-indigo-400/20">{proj.role}</span>
                  <div className="flex items-center gap-3 text-slate-400 text-sm font-black uppercase">
                    <Calendar size={18} /> {proj.date}
                  </div>
                </div>
                <h3 className="text-4xl font-black mb-8 group-hover:text-indigo-300 transition-colors leading-tight text-white">{proj.title}</h3>
                <p className="text-slate-200 text-lg mb-12 leading-relaxed font-bold italic border-l-8 border-indigo-500 pl-8 bg-indigo-500/5 py-6 rounded-r-3xl">
                  {proj.description}
                </p>
                {(proj as any).link && (
                  <a href={(proj as any).link} target="_blank" className="text-white hover:bg-indigo-500 flex items-center gap-4 text-xs font-black bg-slate-700 px-8 py-4 rounded-3xl transition-all border border-white/10 uppercase tracking-widest shadow-2xl">
                    Siteyi Ziyaret Et <ExternalLink size={20} />
                  </a>
                )}
                <div className="flex flex-wrap gap-4">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[12px] font-black px-5 py-2.5 bg-slate-900 text-slate-400 font-mono rounded-2xl uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-black mb-8 tracking-tight">Gelişim Yolculuğum</h2>
            <p className="text-slate-300 text-xl font-bold italic">Adım adım teknoloji dünyasında bıraktığım izler.</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-700 -translate-x-1/2 hidden md:block rounded-full"></div>
            {timelineData.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-16 mb-24 group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                <div className={`flex-1 text-right w-full ${idx % 2 === 0 ? 'md:text-right text-left' : 'md:text-left text-left'}`}>
                  <div className="p-10 bg-slate-700/40 border border-white/5 rounded-[3.5rem] group-hover:border-indigo-500/40 transition-all hover:bg-slate-700/60 shadow-2xl">
                    <span className="text-indigo-300 text-sm font-black mb-4 block uppercase tracking-[0.3em]">{item.date}</span>
                    <h3 className="text-3xl font-black mb-4 text-white leading-none">{item.title}</h3>
                    <p className="text-slate-200 text-base font-bold italic leading-relaxed opacity-80">{item.description}</p>
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-slate-900 border-[6px] border-slate-700 rounded-full flex items-center justify-center text-white shadow-2xl z-10 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-700 group-hover:border-indigo-400/30">
                    {'icon' in item ? (item as any).icon : <Award size={32} />}
                  </div>
                </div>
                <div className="flex-1 w-full hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Real-time from GitHub */}
      <section id="projects" className="py-40 bg-slate-700/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-24">
            <div>
              <h2 className="text-6xl font-black mb-6 tracking-tight">GitHub Repolarım</h2>
              <p className="text-slate-300 text-xl font-bold italic">Canlı olarak güncellenen açık kaynak kodlarım.</p>
            </div>
            <a href={STUDENT_INFO.socials.github} target="_blank" className="text-white hover:bg-indigo-500 flex items-center gap-4 text-xs font-black bg-slate-700 px-8 py-4 rounded-3xl transition-all border border-white/10 uppercase tracking-widest shadow-2xl">
              GitHub Profili <ExternalLink size={20} />
            </a>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[1, 2].map(i => <div key={i} className="h-80 bg-slate-700/50 rounded-[4rem] animate-pulse"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {repos.filter(r => !r.fork).map(repo => (
                <a 
                  key={repo.id} 
                  href={repo.html_url}
                  target="_blank"
                  className="group relative bg-slate-700/40 border border-white/5 rounded-[4rem] p-12 hover:bg-slate-700 hover:border-indigo-500/60 transition-all flex flex-col h-full hover:translate-y-[-12px] shadow-3xl"
                >
                  <div className="flex items-center justify-between mb-10">
                    <div className="p-5 bg-indigo-500/20 rounded-[1.5rem] text-indigo-300 group-hover:scale-110 transition-transform shadow-lg">
                      <Code2 size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors capitalize text-slate-200 leading-tight">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-500">
                    <span>{new Date(repo.updated_at).getFullYear()}</span>
                    <span className="flex items-center gap-3 group-hover:text-indigo-300 transition-all">Projeyi İncele <ChevronRight size={20} /></span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-40 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-black mb-8 tracking-tight">Medium Yazılarım</h2>
            <p className="text-slate-300 text-xl font-bold italic">Teknik bilgi birikimimi paylaştığım dijital notlar.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts.slice(0, 2).map((post, idx) => (
              <a 
                key={idx} 
                href={post.link}
                target="_blank"
                className="flex flex-col md:flex-row gap-10 p-12 bg-slate-700/30 border border-white/5 rounded-[4.5rem] hover:border-indigo-500/50 hover:bg-slate-700/60 transition-all group relative overflow-hidden shadow-3xl"
              >
                <div className="flex-1 z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="px-5 py-2 bg-purple-500/20 rounded-full text-[11px] font-black text-purple-300 uppercase tracking-widest border border-purple-400/20">Makale</div>
                    <span className="text-[11px] text-slate-400 font-black uppercase tracking-widest">{new Date(post.pubDate).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 group-hover:text-indigo-300 transition-colors line-clamp-2 leading-tight text-white">{post.title}</h3>
                </div>
                <div className="flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-slate-900 flex items-center justify-center group-hover:bg-indigo-500 transition-all group-hover:rotate-12 group-hover:scale-110 shadow-2xl">
                    <ExternalLink size={36} className="text-white" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-24 text-center">
            <a href={STUDENT_INFO.socials.medium} target="_blank" className="inline-flex items-center gap-5 px-14 py-6 bg-white text-slate-900 font-black rounded-3xl hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] active:scale-95">
              <BookOpen size={28} /> Tüm Makalelerim
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 border-t border-white/5 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-24">
             <h2 className="text-7xl font-black mb-12 tracking-tighter text-white leading-none">Bağlantıda Kalalım</h2>
             <p className="text-slate-300 max-w-2xl mx-auto mb-16 text-2xl font-bold italic leading-relaxed opacity-80">
                Yapay zekâ, akademik araştırmalar veya iş birliği için bir mail uzağınızdayım.
             </p>
             <div className="flex justify-center gap-10">
                <a href={`mailto:${STUDENT_INFO.email}`} className="w-24 h-24 bg-slate-800 border border-white/10 rounded-[2.5rem] flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-400 transition-all hover:translate-y-[-8px] text-white shadow-3xl">
                  <Mail size={40} />
                </a>
                <a href={STUDENT_INFO.socials.linkedin} target="_blank" className="w-24 h-24 bg-slate-800 border border-white/10 rounded-[2.5rem] flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-400 transition-all hover:translate-y-[-8px] text-white shadow-3xl">
                  <Linkedin size={40} />
                </a>
                <a href={STUDENT_INFO.socials.github} target="_blank" className="w-24 h-24 bg-slate-800 border border-white/10 rounded-[2.5rem] flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-400 transition-all hover:translate-y-[-8px] text-white shadow-3xl">
                  <Github size={40} />
                </a>
             </div>
          </div>
          <div className="pt-20 border-t border-white/5 text-slate-500 text-[12px] font-black uppercase tracking-[0.4em]">
             {STUDENT_INFO.name} • {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);
