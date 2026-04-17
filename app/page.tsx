"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  Info,
  Coffee,
  Calendar,
  Home,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('job'); // 'job' or 'company'
  const [currentSlide, setCurrentSlide] = useState(0);

  const candidateName = "市原 舞吏菜";
  const location = "香川県 高松市 (はしおか駅)";

  // Section A: Job Types (5 slides per job)
  const jobSlides = [
    {
      title: "一般事務・営業事務",
      slides: [
        {
          id: 1,
          tag: "職種定義",
          header: "未経験から始める「支える」プロフェッショナル",
          content: "書類作成やデータ入力を通じて、企業の円滑な運営を支える重要なポジションです。市原様の「店舗マニュアル作成」や「正確な書類確認」の経験がそのまま活かせます。",
          points: ["PCによるデータ入力・集計", "各種伝票整理・管理", "来客・電話対応"],
          image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=800",
          footer: "※事務職の有効求人倍率は他職種より低めですが、サポート力重視の企業が多数あります。"
        },
        {
          id: 2,
          tag: "キャリアパス",
          header: "安定と専門性を手に入れるステップ",
          content: "まずは一般事務として基礎を固め、将来的には専門事務や管理職への道も。市原様の「教えるのが好き」という強みは、将来のリーダー候補としても期待されます。",
          points: ["1-2年目：実務習得、効率化の提案", "3-5年目：リーダー、新人教育担当", "将来：管理部門の責任者や専門職"],
          image: "https://images.unsplash.com/photo-1454165833968-5179399952d7?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          tag: "重点訴求",
          header: "ライフスタイルを最優先できる「時間」の確保",
          content: "事務職の最大の魅力は、予測可能なスケジュールです。愛犬のお世話や、自分自身の休息時間をしっかりと確保できる環境を目指せます。",
          points: ["土日祝休みが基本", "残業月10h〜20h以下の求人が中心", "定時退社でプライベート時間を充実"],
          image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          tag: "不安払拭",
          header: "「正社員×事務」の安定性（事実データ）",
          content: "doda等の市場調査によると、事務職は離職率が低く、一度スキルを身につければ全国どこでも通用する「手に職」の側面を持っています。",
          points: ["業界平均残業時間：10.3時間（事務職全般）", "ワークライフバランス満足度：全職種中トップクラス", "派遣から「無期雇用派遣」への転換で雇用安定"],
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
          footer: "出典：厚生労働省「賃金構造基本統計調査」および求人市場トレンド"
        },
        {
          id: 5,
          tag: "スキルマッチ",
          header: "市原様の「今」が、事務にどう繋がるか",
          content: "調理師時代の「マルチタスク管理」と施工管理補助の「正確な書類作成・確認力」は、事務職において最も求められる『正確性』に直結します。",
          points: ["店舗運営経験 ＝ 自律的な判断力", "施工管理補助 ＝ 期日厳守と確認のプロ", "マニュアル作成 ＝ 業務フロー構築力"],
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "施工管理（安定環境）",
      slides: [
        {
          id: 1,
          tag: "職種定義",
          header: "街づくりの司令塔としてキャリアを再構築",
          content: "現在の経験を無駄にせず、より「ホワイト」な環境での施工管理です。現在の「味方がいない」状況ではなく、チームで協力する体制が整った企業を厳選します。",
          points: ["工程・安全・品質の管理", "現場写真の整理、書類作成", "協力会社との調整業務"],
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          tag: "キャリアパス",
          header: "資格取得で市場価値を最大化",
          content: "実務経験を積みながら「施工管理技士」の資格を取得。一度取得すれば、香川県内でも一生仕事に困らない強固なキャリアとなります。",
          points: ["3年以内：2級施工管理技士取得", "5年以降：1級取得、大規模案件担当", "年収：400万円〜600万円以上も可能"],
          image: "https://images.unsplash.com/photo-1541888941259-7927ed14375f?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          tag: "重点訴求",
          header: "「移動なし・香川限定」の働き方を実現",
          content: "現在の「片道2時間」「ガソリン代自腹」という過酷な状況を解消します。通勤時間を短縮し、心身の負担を最小限に抑えます。",
          points: ["香川県内案件100%の企業を選定", "通勤手当の全額支給（または車両手当）", "直行直帰で自由な時間を最大化"],
          image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          tag: "不安払拭",
          header: "建設業界の働き方改革（2024年問題）",
          content: "2024年4月から残業上限規制が完全適用。大手・準大手を中心に、休日数が増加し、サービス残業が厳格に禁止されるようになっています。",
          points: ["建設業の週休2日推進率：約70%（向上中）", "ICT導入による書類作成時間の削減", "コンプライアンス重視の企業増加"],
          image: "https://images.unsplash.com/photo-1503387762-592dea580446?auto=format&fit=crop&q=80&w=800",
          footer: "出典：国土交通省「建設業における働き方改革の現状」"
        },
        {
          id: 5,
          tag: "スキルマッチ",
          header: "即戦力としての価値",
          content: "BREXAでの半年以上の実務経験は、未経験者とは一線を画します。「安全書類」「墨出し」「写真管理」が理解できている点は大きな武器です。",
          points: ["現場の空気感がわかる ＝ 即戦力", "専門用語がわかる ＝ 研修コスト低", "市原様独自の「誠実な対応」が強み"],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  ];

  // Section B: Company Specific (4 slides per company)
  const companySlides = [
    {
      name: "スタッフサービス（ミラエール）",
      slides: [
        {
          id: 1,
          tag: "概要",
          header: "常用型派遣で叶える「事務職正社員」",
          content: "スタッフサービスの「ミラエール」は、自社の正社員として採用し、契約企業へ派遣する形。未経験者のサポートに特化しています。",
          points: ["雇用形態：正社員（無期雇用派遣）", "研修：Word/Excel/マナーの充実", "実績：累計1万人以上の事務職を輩出"],
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          tag: "重点訴求",
          header: "残業が少なく、香川県内でずっと働ける",
          content: "求人票記載の通り、残業を抑制する方針。過度な残業がある場合は、スタッフサービスの担当者が企業に指導します。",
          points: ["勤務地：香川県（転勤なし）", "残業：月平均実績10時間程度（全社平均）", "土日祝休みでプライベート優先"],
          image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          tag: "ライフイベント支援",
          header: "女性が長く続けられる福利厚生",
          content: "産休・育休の取得実績が豊富。将来、家庭環境が変わっても続けやすい環境が整っています。",
          points: ["産前産後休暇・育児休業制度完備", "メンタルヘルスケア制度", "定期健康診断の実施"],
          image: "https://images.unsplash.com/photo-1522204538344-922f76cee040?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          tag: "勤務条件（Fact）",
          header: "求人票に基づく正確なデータ",
          content: "給与面の不安を解消するため、固定月給を約束。現在の「現場がないと給与が出ない」という状況はありません。",
          points: ["想定年収：200〜250万円", "賞与：年2回支給あり", "交通費：全額支給"],
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "マンパワーグループ",
      slides: [
        {
          id: 1,
          tag: "概要",
          header: "グローバル企業の安定性と手厚いフォロー",
          content: "世界70カ国で展開する大手。日本初の派遣会社としてのノウハウを活かし、あなたのキャリアを丁寧に設計します。",
          points: ["雇用形態：正社員（無期雇用派遣）", "転勤：なし（地域密着型）", "在宅ワーク実績あり（配属先による）"],
          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          tag: "重点訴求",
          header: "残業月平均5時間で、愛犬との時間を",
          content: "求人票にて「月平均5時間」という非常に低い数値を掲げています。ワークライフバランスを最重視する方に最適です。",
          points: ["年間休日：120日以上", "残業：ほぼなし（月平均5時間）", "配属先も厳選されたホワイト企業"],
          image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          tag: "ライフイベント支援",
          header: "充実の福利厚生と「安心」",
          content: "マンパワーグループ独自のベネフィットプランが利用可能。プライベートの充実を会社が支援します。",
          points: ["マンパワーグループ・クラブオフ（宿泊・レジャー割引）", "教育訓練（キャリアアップ支援）", "各種社会保険完備"],
          image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          tag: "勤務条件（Fact）",
          header: "給与・待遇の透明性",
          content: "現在の「自腹」負担をゼロに。しっかりとした条件面で、将来への不安を取り除きます。",
          points: ["年収：200〜300万円（香川エリア：月給17.5万〜）", "試用期間：6ヶ月（条件変動なし）", "昇給あり・交通費全額支給"],
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "ウィルオブ・コンストラクション",
      slides: [
        {
          id: 1,
          tag: "概要",
          header: "建設業界の地位向上を目指す革新企業",
          content: "「Chance-Making-Company」を掲げ、未経験者や女性の活躍を強力に支援している急成長企業です。",
          points: ["中途採用実績1000名以上", "女性比率 45.5% (業界トップクラス)", "徹底した入社時研修制度"],
          image: "https://images.unsplash.com/photo-1427751840561-9852463b02e2?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          tag: "重点訴求",
          header: "残業抑制と「香川・愛媛」重点採用",
          content: "施工管理でありながら、ICTの活用やチーム制の導入で、長時間労働の削減に本気で取り組んでいます。",
          points: ["勤務地：中四国支店管轄（香川等希望考慮）", "残業：適切な管理（直行直帰OK）", "休日：完全週休2日制（土日祝）"],
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          tag: "ライフイベント支援",
          header: "資格取得で「将来の不安」をゼロに",
          content: "市原様が心配されていた「長く働けるか」という点。資格があれば、どんなライフイベントがあっても復職が容易です。",
          points: ["資格取得補助金・お祝い金制度", "専任サポート（キャリアカウンセラー）", "育児休暇等の取得促進"],
          image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          tag: "勤務条件（Fact）",
          header: "正社員としての確かな保障",
          content: "賞与年2回、決算賞与など、頑張りがダイレクトに収入に反映される仕組みです。",
          points: ["昇給年2回・賞与年2回支給", "各種手当（残業・現場・通勤）", "雇用形態：正社員"],
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  ];

  const currentJobIndex = currentSlide % jobSlides.length;
  const currentSubSlideIndex = Math.floor(currentSlide / jobSlides.length);
  
  const totalJobSlides = jobSlides[0].slides.length;
  const currentJobData = jobSlides[currentSlide >= 5 ? 1 : 0];
  const currentSlideData = currentJobData.slides[currentSlide % 5];

  const totalCompanySubSlides = 4;
  const currentCompanyIndex = Math.floor(currentSlide / totalCompanySubSlides);
  const currentCompanySlideIndex = currentSlide % totalCompanySubSlides;
  const currentCompanyData = companySlides[currentCompanyIndex];
  const currentCompanySlideData = currentCompanyData?.slides[currentCompanySlideIndex];

  const nextSlide = () => {
    const max = activeTab === 'job' ? 10 : companySlides.length * 4;
    if (currentSlide < max - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

const handleTabChange = (tab: string) => {
  setActiveTab(tab);
  setCurrentSlide(0);
};

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">キャリアパス・企業比較 提案資料</h1>
        <p className="text-slate-600">候補者：{candidateName} 様</p>
      </div>

      {/* Main Tabs */}
      <div className="max-w-5xl mx-auto mb-6 bg-white rounded-xl shadow-sm p-1 flex">
        <button 
          onClick={() => handleTabChange('job')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'job' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <Briefcase size={20} />
          職種別キャリア訴求
        </button>
        <button 
          onClick={() => handleTabChange('company')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'company' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <Building2 size={20} />
          企業別詳細比較
        </button>
      </div>

      {/* Slide Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col relative">
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-100">
          <div 
            className={`h-full transition-all duration-300 ${activeTab === 'job' ? 'bg-blue-600' : 'bg-orange-500'}`}
            style={{ width: `${((currentSlide + 1) / (activeTab === 'job' ? 10 : companySlides.length * 4)) * 100}%` }}
          ></div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Side: Image & Tags */}
          <div className="w-full md:w-5/12 relative h-48 md:h-auto overflow-hidden">
            <img 
              src={activeTab === 'job' ? currentSlideData.image : currentCompanySlideData.image} 
              alt="Slide visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-lg ${activeTab === 'job' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                {activeTab === 'job' ? currentSlideData.tag : currentCompanySlideData.tag}
              </span>
            </div>
            {activeTab === 'company' && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg border-l-4 border-orange-500">
                <p className="text-xs text-slate-500 font-bold uppercase">対象企業</p>
                <p className="font-bold text-orange-700">{currentCompanyData.name}</p>
              </div>
            )}
            {activeTab === 'job' && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg border-l-4 border-blue-600">
                <p className="text-xs text-slate-500 font-bold uppercase">職種</p>
                <p className="font-bold text-blue-900">{currentJobData.title}</p>
              </div>
            )}
          </div>

          {/* Right Side: Information */}
          <div className="w-full md:w-7/12 p-8 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                {activeTab === 'job' ? currentSlideData.header : currentCompanySlideData.header}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {activeTab === 'job' ? currentSlideData.content : currentCompanySlideData.content}
              </p>

              <div className="space-y-4">
                {(activeTab === 'job' ? currentSlideData.points : currentCompanySlideData.points).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-1 ${activeTab === 'job' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Fact/Info */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-2 text-slate-400 italic text-sm">
              <Info size={16} className="shrink-0 mt-0.5" />
              <p>{activeTab === 'job' ? currentSlideData.footer || "業界平均データに基づいた将来予測です。" : "※提出された求人票の情報を正確に反映しています。"}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 bg-slate-50 border-t flex items-center justify-between">
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-full hover:bg-white border disabled:opacity-30 transition-all text-slate-600"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === (activeTab === 'job' ? 9 : companySlides.length * 4 - 1)}
              className="p-3 rounded-full hover:bg-white border disabled:opacity-30 transition-all text-slate-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="text-sm font-bold text-slate-400">
            {currentSlide + 1} / {activeTab === 'job' ? 10 : companySlides.length * 4}
          </div>
        </div>
      </div>

      {/* Message Section for Candidate */}
      <div className="max-w-5xl mx-auto mt-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-inner border border-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden shrink-0 border-4 border-white">
             <Heart className="text-pink-400" size={48} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{candidateName} 様へ</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                まずは、これまでお一人で不安と戦いながら、現場を支えてこられたこと、本当にお疲れ様でした。
                徳島まで往復4時間の通勤や、自腹での負担、そして「味方がいない」と感じる中での勤務...。市原様がどれほど強い責任感を持って取り組まれてきたか、そのお話を聞くだけで頭が下がる思いです。
              </p>
              <p>
                今回の転職で叶えたい<span className="bg-orange-200 px-1 rounded font-bold">「香川県内での安定」</span>と<span className="bg-orange-200 px-1 rounded font-bold">「自分と愛犬の時間」</span>。これは決して贅沢な望みではありません。
                市原様が調理師時代に店舗マニュアルを一人で作り上げた実行力、そして施工管理補助として身につけた正確な事務処理能力は、どの企業も欲しがる素晴らしい「武器」です。
              </p>
              <p>
                これからは、営業担当が「敵」ではなく「最大の味方」としてあなたを守る環境を選びましょう。
                給与の不安がない、毎日ちゃんと眠れる、犬の世話ができる。そんな「当たり前の幸せ」を、一緒に取り戻していきたいと思っています。
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">#香川県内勤務厳守</span>
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">#残業ほぼなし</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">#土日祝休み</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">#正社員の安定</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-slate-400 text-sm">
        <p>© 2024 Your Career Partner. すべての事実に寄り添い、あなたの未来を応援します。</p>
      </div>
    </div>
  );
};

export default App;