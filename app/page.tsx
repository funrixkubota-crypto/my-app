"use client";
import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  TrendingUp, 
  Clock, 
  Calendar, 
  Heart, 
  Target, 
  ShieldCheck, 
  ArrowRight,
  MapPin,
  Wallet,
  Users,
  CheckCircle2,
  HardHat
} from 'lucide-react';

// --- データ定義 ---

const JOB_TYPES = [
  {
    id: 'counter-sales',
    title: 'カウンターセールス',
    icon: <Users className="w-5 h-5" />,
    slides: [
      {
        type: 'definition',
        title: '職種定義：待ちの営業への変換',
        content: '飛込や架電ではなく、来店されたニーズのある顧客へ提案。坂戸様の「年間100台」の販売実績は、ここでも「成約率の高さ」として直接転用可能です。',
        stats: '成約率：業界平均 25-35%',
        image: 'https://images.unsplash.com/photo-1556740734-7f96267b118a?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'path',
        title: 'キャリアパス：マネジメントへの再現性',
        content: 'メンバー → 店長代理 → 店長 → エリアマネージャー。属人性を排除した「店舗運営マニュアル」があるため、努力の方向性が明確です。',
        milestones: ['1年目: 業務習得', '3年目: リーダー', '5年目: 店長候補'],
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'focus',
        title: '重点訴求：評価の透明性',
        content: '「誰に気に入られるか」ではなく「KPI（成約数・単価）をどれだけ達成したか」で評価。中古車販売で培った数字への執着心がそのまま報酬に直結します。',
        badge: '成果連動型'
      },
      {
        type: 'relief',
        title: '不安払拭：ワークライフバランス',
        content: 'サービス業ですが、シフト管理が徹底されており、サービス残業は皆無。業界平均残業時間は月15〜20時間程度に抑制されています（厚生労働省統計比較）。',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'match',
        title: 'スキルマッチ：坂戸様の強み',
        content: '「顧客ヒアリングをもとに課題分析」という職務経歴書の強みは、プラン提案の要。1分単位の残業代支給など、ホワイトな環境で営業力を再定義できます。',
        checks: ['対人折衝力', '課題分析力', '安定した成約実績']
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'ものづくり（技能職）',
    icon: <Briefcase className="w-5 h-5" />,
    slides: [
      {
        type: 'definition',
        title: '職種定義：技術の資産化',
        content: '大手メーカー内での製造・検査業務。坂戸様が経験された「整備補助（タイヤ・オイル交換）」の正確性と、立ち仕事への耐性が即戦力として評価されます。',
        stats: '未経験からの習得率 95%以上',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'path',
        title: 'キャリアパス：班長・労務管理',
        content: '現場のスペシャリストだけでなく、リーダー（班長）や、派遣スタッフを管理する「労務管理職」への転向パスが用意されています。',
        milestones: ['2年目: 工程リーダー', '5年目: 労務管理/正社員登用'],
        image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'focus',
        title: '重点訴求：岩手で腰を据えて稼ぐ',
        content: 'トヨタ紡織東北等の大手工場勤務。交代制勤務による深夜手当・残業手当が確実に付帯し、月収例24万〜30万円と地方でも高水準を維持。',
        badge: '地域密着・高収入'
      },
      {
        type: 'relief',
        title: '不安払拭：10年で1000万貯金',
        content: '寮完備・住宅手当があるため、可処分所得が極めて高いのが特徴。営業のような浮き沈みがなく、計画的な資産形成が可能です。',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'match',
        title: 'スキルマッチ：坂戸様の強み',
        content: '「軽整備経験」は製造現場での機械理解に直結。また、飲食・営業で培った「指示を正確に理解し動く力」は、高度な生産ラインで重宝されます。',
        checks: ['整備補助経験', '体力・忍耐力', '正確な業務遂行']
      }
    ]
  },
  {
    id: 'engineer-support',
    title: '施工管理・技術補助',
    icon: <HardHat className="w-5 h-5" />,
    slides: [
      {
        type: 'definition',
        title: '職種定義：プロジェクトの指揮者',
        content: '工事が図面通り進むよう、写真撮影や工程管理を行う「管理のプロ」。坂戸様の「マルチタスク能力」と「調整力」が武器になります。',
        stats: '求人倍率 6.0倍以上の超安定市場',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'path',
        title: 'キャリアパス：国家資格での市場価値',
        content: '施工管理技士などの国家資格を取得することで、会社に依存しない「個人の価値」が最大化。年収700万以上のシニアクラスも現実的です。',
        milestones: ['1-3年目: 資格取得・補助', '5年目: 一人前・年収アップ'],
        image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'focus',
        title: '重点訴求：資格による確実な昇給',
        content: '「頑張れば上がる」という曖昧な評価ではなく、「この資格を取れば月○万円アップ」という明確な規程。坂戸様の学習意欲を成果に変換します。',
        badge: '手に職・資格重視'
      },
      {
        type: 'relief',
        title: '不安払拭：未経験研修の充実',
        content: '入社後1ヶ月の集中研修（BREXAやアーキ・ジャパン）により、専門知識ゼロからスタート。同期の多くが異業種（販売・飲食）出身です。',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
      },
      {
        type: 'match',
        title: 'スキルマッチ：坂戸様の強み',
        content: '営業で培った「クレーム対応力」や「関係構築力」は、現場の職人さんとの円滑なコミュニケーションに不可欠。調整のプロとしての素質があります。',
        checks: ['コミュニケーション力', '学習意欲', '調整・管理能力']
      }
    ]
  }
];

const COMPANIES = [
  {
    name: '株式会社アーキ・ジャパン',
    tag: '施工管理・環境保全',
    slides: [
      {
        title: '企業概要：圧倒的な育成体制',
        content: '建設プロジェクトを支える管理者を育成。未経験からでも「市場価値の高い技術者」へ育てることに特化した、成長率No.1の建設コンサル企業。',
        points: ['従業員数 3,447名', '平均残業 20時間以内', '全国各所に配属可能']
      },
      {
        title: '重点：手に職×年収アップ推移',
        content: '資格取得を強力にサポート。取得した資格に応じて手当が加算され、20代で年収500万を突破する実例が多数あります。',
        income: '年収例: 382万円(20歳) → 504万円(26歳) → 756万円(32歳)',
        badge: '資格手当充実'
      },
      {
        title: 'ライフイベント支援',
        content: '産休・育休の取得実績100%（2023年度）。結婚・育児という将来のライフイベントを、経済的・時間的ゆとりを持って迎えることが可能です。',
        perks: ['社宅制度', '帰省旅費支給', '家族手当']
      },
      {
        title: '勤務条件（事実確認済み）',
        content: '土日祝休み（週休2日）。年間休日114日＋有給取得を推奨。勤務地は希望を考慮し、地元岩手や東北エリアでの就業も相談可能。',
        terms: ['給与: 月給25万〜（残業代別途）', '昇給: 年1回', '賞与: 年2回']
      }
    ]
  },
  {
    name: 'エヌエス・テック株式会社',
    tag: '技能職（トヨタ紡織東北）',
    slides: [
      {
        title: '企業概要：大手メーカーの製造パートナー',
        content: '設立50年の安定企業。今回は岩手県金ヶ崎町の「トヨタ紡織東北」工場での勤務。車内装品（シート等）の製造に携わります。',
        points: ['岩手県内での就業確実', '大手トヨタグループの安心感', '車通勤必須（駐車場完備）']
      },
      {
        title: '重点：未経験から月収30万超へ',
        content: '基本給に加え、深夜・交替・残業手当が合算。2直交代制により、手取り25万〜（坂戸様の現職不満を解消）を実現しやすい構造。',
        income: '想定年収: 300万円 〜 350万円（初年度）',
        badge: '高収入・低支出'
      },
      {
        title: 'ライフイベント支援',
        content: '独身寮・家族寮完備。引越費用全額会社負担。将来的に「製造から労務管理」へのキャリアチェンジパスもあり、長く勤められる環境。',
        perks: ['賞与年2回', '社会保険完備', '退職金制度(規定有)']
      },
      {
        title: '勤務条件（事実確認済み）',
        content: '年間休日121日。GW・夏季・年末年始の長期休暇あり。オンオフを切り替え、趣味や貯金に充てる時間を確保できます。',
        terms: ['給与: 時給1,250円〜', '休日: 土日休み', '勤務地: 岩手県胆沢郡金ケ崎町']
      }
    ]
  },
  {
    name: '株式会社BREXA Engineering',
    tag: '施工管理（旧 共同エンジニアリング）',
    slides: [
      {
        title: '企業概要：グローバル展開の建設コンサル',
        content: '国内22拠点、海外にも展開する大手。建築・土木・プラントと幅広く、坂戸様の「整備補助」の経験を技術者としての土台に活かせます。',
        points: ['従業員数 4,302名', '東証プライム上場グループ', '充実のWeb研修']
      },
      {
        title: '重点：研修中も給与全額支給',
        content: '入社後のオンライン研修期間中も給与支給。現場配属後は基本給22万＋残業代全額支給。1分単位の計算で、サービス残業を根絶。',
        income: '配属時基本給: 220,000円〜',
        badge: '透明な給与体系'
      },
      {
        title: 'ライフイベント支援',
        content: '福利厚生倶楽部など、プライベートの充実を支援する制度。借上寮制度により、固定費を抑えて1,000万貯金の目標を加速させます。',
        perks: ['引越費用会社負担', '帰省旅費', '資格取得支援金']
      },
      {
        title: '勤務条件（事実確認済み）',
        content: '完全週休2日制（土日祝）。年間休日120日前後。岩手・宮城などの希望勤務地への配属を最大限考慮。',
        terms: ['残業: 全額支給(1分単位)', '面接: オンライン1回(即日内定有)', '最短2週間入社可能']
      }
    ]
  }
];

// --- メインコンポーネント ---

export default function App() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobIndex, setJobIndex] = useState(0);
  const [compIndex, setCompIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentJob = JOB_TYPES[jobIndex];
  const currentComp = COMPANIES[compIndex];

 const nextSlide = (max: number) => 
  setSlideIndex((prev: number) => (prev + 1) % max);

const prevSlide = (max: number) => 
  setSlideIndex((prev: number) => (prev - 1 + max) % max);
  const resetSlide = () => setSlideIndex(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <TrendingUp size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight">坂戸様向け：キャリア戦略・企業分析</h1>
              <p className="text-xs text-slate-500">Fact-Based Career Roadmaps</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-medium">
              Update: 2026.04.14
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Tabs */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 mb-8">
          <button 
            onClick={() => { setActiveTab('jobs'); resetSlide(); }}
            className={`flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'jobs' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Briefcase size={18} />
            職種別キャリア訴求
          </button>
          <button 
            onClick={() => { setActiveTab('companies'); resetSlide(); }}
            className={`flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'companies' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Building2 size={18} />
            企業別詳細比較
          </button>
        </div>

        {activeTab === 'jobs' ? (
          <div className="space-y-6">
            {/* Job Selector */}
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((job, idx) => (
                <button
                  key={job.id}
                  onClick={() => { setJobIndex(idx); resetSlide(); }}
                  className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border transition-all ${jobIndex === idx ? 'bg-blue-100 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600'}`}
                >
                  {job.icon}
                  {job.title}
                </button>
              ))}
            </div>

            {/* Slide Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
              <div className="p-6 md:p-10 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                    Step {slideIndex + 1} / {currentJob.slides.length}
                  </span>
                  <div className="h-1 flex-grow mx-4 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-300" 
                      style={{ width: `${((slideIndex + 1) / currentJob.slides.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                      {currentJob.slides[slideIndex].title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {currentJob.slides[slideIndex].content}
                    </p>

                    {/* Dynamic Parts based on type */}
                    {currentJob.slides[slideIndex].stats && (
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-3">
                        <TrendingUp className="text-blue-600" />
                        <span className="font-bold text-blue-800">{currentJob.slides[slideIndex].stats}</span>
                      </div>
                    )}

                    {currentJob.slides[slideIndex].milestones && (
                      <div className="space-y-2">
                        {currentJob.slides[slideIndex].milestones.map((m, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-700">
                            <CheckCircle2 size={18} className="text-blue-600" />
                            <span className="font-semibold">{m}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentJob.slides[slideIndex].checks && (
                      <div className="grid grid-cols-1 gap-2">
                        {currentJob.slides[slideIndex].checks.map((c, i) => (
                          <div key={i} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 font-bold text-slate-700">
                            ✓ {c}
                          </div>
                        ))}
                      </div>
                    )}

                    {currentJob.slides[slideIndex].badge && (
                      <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-black text-sm uppercase">
                        {currentJob.slides[slideIndex].badge}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    {currentJob.slides[slideIndex].image ? (
                      <img 
                        src={currentJob.slides[slideIndex].image} 
                        alt="Slide visualization" 
                        className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 md:h-80 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <Target size={48} className="text-slate-300" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-slate-200">
                <button 
                  onClick={() => prevSlide(currentJob.slides.length)}
                  className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-blue-600"
                >
                  <ChevronLeft size={32} />
                </button>
                <div className="flex gap-2">
                  {currentJob.slides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 rounded-full transition-all ${slideIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => nextSlide(currentJob.slides.length)}
                  className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-blue-600"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Company Selector */}
            <div className="flex flex-wrap gap-2">
              {COMPANIES.map((comp, idx) => (
                <button
                  key={comp.name}
                  onClick={() => { setCompIndex(idx); resetSlide(); }}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${compIndex === idx ? 'bg-orange-100 border-orange-600 text-orange-700' : 'bg-white border-slate-200 text-slate-600'}`}
                >
                  {comp.name}
                </button>
              ))}
            </div>

            {/* Slide Container (Companies) */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
              <div className="p-6 md:p-10 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded">COMPANY FILE</span>
                    <h3 className="font-bold text-slate-400 text-sm uppercase tracking-tighter">{currentComp.tag}</h3>
                  </div>
                  <span className="text-orange-600 font-bold tracking-widest text-xs">
                    Page {slideIndex + 1} / {currentComp.slides.length}
                  </span>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 border-l-8 border-orange-600 pl-6">
                    {currentComp.slides[slideIndex].title}
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                      {currentComp.slides[slideIndex].content}
                    </p>

                    {currentComp.slides[slideIndex].points && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentComp.slides[slideIndex].points.map((p, i) => (
                          <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center font-bold text-slate-700">
                            {p}
                          </div>
                        ))}
                      </div>
                    )}

                    {currentComp.slides[slideIndex].income && (
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100 shadow-inner">
                        <div className="flex items-center gap-2 text-orange-700 mb-2">
                          <Wallet size={20} />
                          <span className="font-bold uppercase text-xs tracking-wider">収入シミュレーション</span>
                        </div>
                        <div className="text-2xl font-black text-slate-800">
                          {currentComp.slides[slideIndex].income}
                        </div>
                      </div>
                    )}

                    {currentComp.slides[slideIndex].perks && (
                      <div className="flex flex-wrap gap-2">
                        {currentComp.slides[slideIndex].perks.map((p, i) => (
                          <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-bold border border-green-100 flex items-center gap-1">
                            <Heart size={14} /> {p}
                          </span>
                        ))}
                      </div>
                    )}

                    {currentComp.slides[slideIndex].terms && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentComp.slides[slideIndex].terms.map((t, i) => {
                          const [label, val] = t.split(': ');
                          return (
                            <div key={i} className="flex flex-col border-b border-slate-100 pb-2">
                              <span className="text-[10px] text-slate-400 font-bold uppercase">{label}</span>
                              <span className="font-bold text-slate-700">{val}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-slate-200">
                <button 
                  onClick={() => prevSlide(currentComp.slides.length)}
                  className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-orange-600"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={() => nextSlide(currentComp.slides.length)}
                  className="px-8 py-3 bg-orange-600 text-white rounded-full font-black flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg active:scale-95"
                >
                  NEXT PAGE <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Closing Message Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={48} className="text-blue-600" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black">坂戸さん、今の「不安」は「確信」に変えられます。</h3>
              <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
                地方での厳しい営業環境でも「年間100台」という数字を出せる坂戸さんにとって、足りないのは努力ではなく、<b>「正当に評価される構造」</b>と<b>「資産になる技術」</b>です。
                今回ご紹介した企業は、すべてその条件を満たしています。まずは一つ、気になる会社の詳細を深掘りしてみませんか？
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                  <MapPin size={16} /> 岩手・東北配属を全力交渉
                </div>
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                  <TrendingUp size={16} /> 5年後年収600万への設計図
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-slate-400 text-sm">
          <p>© 2026 Your Career Concierge. 全ての数値は提供資料に基づき作成されました。</p>
        </footer>
      </main>
    </div>
  );
}