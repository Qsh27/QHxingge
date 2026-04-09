/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, RotateCcw, Share2, Heart, Briefcase, Users, Zap, ShieldAlert, Star, User, Calendar } from 'lucide-react';
import { questions, mbtiDescriptions, elementDescriptions, elementToZodiac, harmonySuggestions } from './data/personalityData';

type AppState = 'welcome' | 'login' | 'quiz' | 'calculating' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('welcome');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [birthday, setBirthday] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>(new Array(questions.length).fill(null));
  const [result, setResult] = useState<any>(null);

  // Helper: Get Zodiac from month and day
  const getZodiac = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "白羊座";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "金牛座";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return "双子座";
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "巨蟹座";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "狮子座";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "处女座";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return "天秤座";
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return "天蝎座";
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return "射手座";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "摩羯座";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "水瓶座";
    return "双鱼座";
  };

  // Helper: Get internal energy key from birth year (Logic remains, display changes)
  const getEnergyKey = (dateStr: string) => {
    const year = new Date(dateStr).getFullYear();
    const lastDigit = year % 10;
    if (lastDigit === 0 || lastDigit === 1) return "金";
    if (lastDigit === 2 || lastDigit === 3) return "水";
    if (lastDigit === 4 || lastDigit === 5) return "木";
    if (lastDigit === 6 || lastDigit === 7) return "火";
    return "土";
  };

  // Calculate result when quiz is finished
  useEffect(() => {
    if (state === 'calculating') {
      const timer = setTimeout(() => {
        const mbtiCounts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        const elementCounts: Record<string, number> = { Fire: 0, Earth: 0, Air: 0, Water: 0 };

        answers.forEach(ans => {
          if (ans) {
            mbtiCounts[ans.mbti]++;
            elementCounts[ans.element]++;
          }
        });

        const mbti = [
          mbtiCounts.E >= mbtiCounts.I ? 'E' : 'I',
          mbtiCounts.S >= mbtiCounts.N ? 'S' : 'N',
          mbtiCounts.T >= mbtiCounts.F ? 'T' : 'F',
          mbtiCounts.J >= mbtiCounts.P ? 'J' : 'P',
        ].join('');

        const element = Object.entries(elementCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
        const zodiac = getZodiac(birthday);
        const energyKey = getEnergyKey(birthday);

        setResult({
          mbti,
          mbtiInfo: mbtiDescriptions[mbti] || { title: mbti, tag: "独特的灵魂" },
          element,
          elementInfo: elementDescriptions[element],
          zodiac,
          harmonySuggestion: harmonySuggestions[energyKey],
          gender
        });
        setState('result');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state, answers, birthday, gender]);

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setState('calculating');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (answers[currentQuestionIndex] && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetTest = () => {
    setState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setResult(null);
    setName('');
    setBirthday('');
    setGender('');
  };

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-900/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {state === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)]"
                >
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight px-2">
                  星座是你的天生底色 <br />
                  MBTI 是你的灵魂形状 <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">你从来都独一无二</span>
                </h1>
                <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed px-4">
                  在星辰的指引与心理的坐标中，<br />
                  寻找你灵魂深处的双重色彩。
                </p>
              </div>

              <button
                onClick={() => setState('login')}
                className="group relative px-10 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  开启探索之旅 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          )}

          {state === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center space-y-8 sm:space-y-12"
            >
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold">建立你的灵魂档案</h2>
                <p className="text-white/40 text-sm sm:text-base">我们需要你的出生信息来对齐星辰</p>
              </div>

              <div className="w-full max-w-sm space-y-6 sm:space-y-8 bg-white/5 p-6 sm:p-8 rounded-[32px] border border-white/10 backdrop-blur-sm">
                <div className="space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3 h-3" /> 你的姓名 (可选)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="输入你的昵称或姓名"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 sm:py-4 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                    <Users className="w-3 h-3" /> 性别
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { id: 'male', label: '男' },
                      { id: 'female', label: '女' },
                      { id: 'other', label: '多元' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setGender(item.id as any)}
                        className={`py-3 rounded-xl border transition-all text-sm font-medium ${
                          gender === item.id 
                            ? 'bg-orange-500/20 border-orange-500 text-orange-400' 
                            : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> 出生日期
                  </label>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 sm:py-4 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all [color-scheme:dark] text-sm sm:text-base"
                  />
                </div>

                <button
                  disabled={!gender || !birthday}
                  onClick={() => setState('quiz')}
                  className="w-full py-4 bg-orange-500 disabled:bg-white/5 disabled:text-white/20 text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                >
                  进入测试
                </button>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col py-4 sm:py-8"
            >
              <div className="mb-8 sm:mb-12 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-orange-500 font-mono text-xs sm:text-sm tracking-widest">QUESTION {currentQuestionIndex + 1}/20</span>
                  <div className="h-1 w-24 sm:w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-orange-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestionIndex + 1) / 20) * 100}%` }}
                    />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight min-h-[4rem] sm:min-h-[5rem]">
                  {questions[currentQuestionIndex].text}
                </h2>
              </div>

              <div className="grid gap-3 sm:gap-4 flex-1">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className={`group text-left p-5 sm:p-6 rounded-2xl transition-all flex items-center justify-between border ${
                      answers[currentQuestionIndex]?.text === option.text
                        ? 'bg-orange-500/20 border-orange-500'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/50'
                    }`}
                  >
                    <span className="text-base sm:text-lg text-white/80 group-hover:text-white transition-colors pr-4">{option.text}</span>
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                      answers[currentQuestionIndex]?.text === option.text
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-white/20 group-hover:border-orange-500 group-hover:bg-orange-500/20'
                    }`}>
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white transition-opacity ${
                        answers[currentQuestionIndex]?.text === option.text ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quiz Navigation */}
              <div className="flex justify-between items-center pt-8 sm:pt-12">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-0 transition-all text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> 上一题
                </button>
                <div className="text-white/20 text-[10px] sm:text-xs font-mono tracking-widest">
                  {currentQuestionIndex + 1} OF 20
                </div>
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQuestionIndex] || currentQuestionIndex === questions.length - 1}
                  className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-0 transition-all text-sm sm:text-base"
                >
                  下一题 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {state === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-dashed border-orange-500/30 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase">正在解析灵魂坐标...</h2>
                <p className="text-white/40 text-xs sm:text-sm italic">星辰正在对齐，心理维度正在重组</p>
              </div>
            </motion.div>
          )}

          {state === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col space-y-8 pb-20"
            >
              {/* Result Header */}
              <div className="text-center space-y-6 pt-4 sm:pt-8">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-4"
                >
                  {name || '你'} 的探索报告已生成
                </motion.div>
                
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                    {result.mbtiInfo.title} <span className="text-orange-500">×</span> {result.zodiac}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/60 italic">“{result.mbtiInfo.tag}”</p>
                </div>

                <div className="flex justify-center gap-8 sm:gap-12 pt-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-orange-500">{result.mbti}</div>
                    <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase">MBTI 类型</div>
                  </div>
                  <div className="w-px h-8 sm:h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400">{result.elementInfo.name.slice(0, 2)}</div>
                    <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase">灵魂元素</div>
                  </div>
                </div>
              </div>

              {/* Character Card */}
              <div className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-16 h-16 sm:w-24 sm:h-24" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold flex items-center gap-2 text-orange-400">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> 性格核心
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                    {result.elementInfo.desc}
                  </p>
                </div>

                <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                  <h3 className="text-xs sm:text-sm font-bold flex items-center gap-2 text-orange-300">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 能量调和建议
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed italic">
                    {result.harmonySuggestion}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2 text-blue-400">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 社交模式
                    </h4>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{result.elementInfo.social}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2 text-pink-400">
                      <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 情感偏好
                    </h4>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{result.elementInfo.love}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2 text-green-400">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 职场定位
                    </h4>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{result.elementInfo.career}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold flex items-center gap-2 text-red-400">
                      <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 隐藏盲点
                    </h4>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{result.elementInfo.weakness}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8">
                <button
                  onClick={copyLink}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-2xl font-bold hover:bg-orange-50 transition-colors relative overflow-hidden text-sm sm:text-base"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        className="flex items-center gap-2"
                      >
                        已复制链接！
                      </motion.span>
                    ) : (
                      <motion.span
                        key="share"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        className="flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" /> 分享测试链接
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button
                  onClick={resetTest}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-colors text-sm sm:text-base"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" /> 重新测试
                </button>
              </div>

              <div className="text-center text-white/20 text-[9px] sm:text-[10px] tracking-widest uppercase pt-8 sm:pt-12">
                © 2026 ZODIAC MBTI DUALITY TEST • HEALING & INSIGHT
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

