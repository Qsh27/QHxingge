export interface Option {
  text: string;
  mbti: string; // e.g., "E", "I", "S", "N", "T", "F", "J", "P"
  element: string; // "Fire", "Earth", "Air", "Water"
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "在社交场合，你通常是？",
    options: [
      { text: "主动破冰，带动全场气氛的“气氛组”", mbti: "E", element: "Fire" },
      { text: "安静观察，在角落里享受孤独的“旁观者”", mbti: "I", element: "Water" },
      { text: "关注细节，确保每个人都舒适的“照顾者”", mbti: "S", element: "Earth" },
      { text: "脑洞大开，和志同道合者聊哲学的“思想家”", mbti: "N", element: "Air" },
    ],
  },
  {
    id: 2,
    text: "面对突发危机，你的第一反应是？",
    options: [
      { text: "立刻行动，用最快速度解决问题的“救火员”", mbti: "J", element: "Fire" },
      { text: "冷静分析，寻找逻辑漏洞的“解密者”", mbti: "T", element: "Earth" },
      { text: "安抚情绪，确保大家心态不崩的“治愈系”", mbti: "F", element: "Water" },
      { text: "随遇而安，看看危机里藏着什么新机会", mbti: "P", element: "Air" },
    ],
  },
  {
    id: 3,
    text: "你理想的周末是？",
    options: [
      { text: "去最火的景点打卡，发朋友圈分享快乐", mbti: "E", element: "Fire" },
      { text: "在家钻研厨艺或整理房间，享受掌控感", mbti: "S", element: "Earth" },
      { text: "去书店或艺术展，寻找精神层面的共鸣", mbti: "N", element: "Air" },
      { text: "关掉手机，彻底消失在人群中的“隐居”", mbti: "I", element: "Water" },
    ],
  },
  {
    id: 4,
    text: "处理工作任务时，你更看重？",
    options: [
      { text: "绝对的逻辑正确与客观数据", mbti: "T", element: "Air" },
      { text: "团队成员的感受与人际和谐", mbti: "F", element: "Water" },
      { text: "严格的截止日期与执行计划", mbti: "J", element: "Earth" },
      { text: "过程中的灵感爆发与自由度", mbti: "P", element: "Fire" },
    ],
  },
  {
    id: 5,
    text: "看到一部感人的电影，你会？",
    options: [
      { text: "被画面和音效震撼，感叹技术流的强大", mbti: "S", element: "Fire" },
      { text: "分析剧情逻辑，思考导演想表达的深意", mbti: "T", element: "Earth" },
      { text: "哭得稀里哗啦，久久不能平复心情", mbti: "F", element: "Water" },
      { text: "联想到自己的人生，产生宏大的哲学思考", mbti: "N", element: "Air" },
    ],
  },
  {
    id: 6,
    text: "朋友向你抱怨上司，你会？",
    options: [
      { text: "帮他分析上司的心理，给出职场反击策略", mbti: "T", element: "Earth" },
      { text: "陪他一起吐槽，让他感受到你坚定的支持", mbti: "F", element: "Water" },
      { text: "带他去吃大餐或蹦迪，忘掉不愉快", mbti: "E", element: "Fire" },
      { text: "引导他思考这份工作的长远价值", mbti: "N", element: "Air" },
    ],
  },
  {
    id: 7,
    text: "你如何看待“计划”？",
    options: [
      { text: "没有计划就没有安全感，必须严格执行", mbti: "J", element: "Earth" },
      { text: "计划赶不上变化，随兴而至才最精彩", mbti: "P", element: "Fire" },
      { text: "计划应该以人为本，随时可以为了情感调整", mbti: "F", element: "Water" },
      { text: "计划是逻辑框架，是为了提高效率服务的", mbti: "T", element: "Air" },
    ],
  },
  {
    id: 8,
    text: "进入一个新环境，你最先注意到？",
    options: [
      { text: "这里的人是否热情，有没有有趣的灵魂", mbti: "E", element: "Fire" },
      { text: "这里的装修细节、气味和光线", mbti: "S", element: "Earth" },
      { text: "这里的整体氛围和潜藏的文化气息", mbti: "N", element: "Air" },
      { text: "这里是否能让我安静地待着不被打扰", mbti: "I", element: "Water" },
    ],
  },
  {
    id: 9,
    text: "你最不能接受的伴侣特质是？",
    options: [
      { text: "冷漠无情，无法理解你的情感波动", mbti: "F", element: "Water" },
      { text: "平庸无趣，没有共同的理想和话题", mbti: "N", element: "Air" },
      { text: "邋遢混乱，生活完全没有规律和目标", mbti: "J", element: "Earth" },
      { text: "死板固执，限制你的自由和探索欲", mbti: "P", element: "Fire" },
    ],
  },
  {
    id: 10,
    text: "如果可以穿越，你会去？",
    options: [
      { text: "未来世界，看看科技能达到什么高度", mbti: "E", element: "Fire" },
      { text: "古代王朝，体验那种森严的秩序与权谋", mbti: "J", element: "Earth" },
      { text: "平行时空，看看另一个自己的无限可能", mbti: "N", element: "Air" },
      { text: "世外桃源，过一种归园田居的恬静生活", mbti: "F", element: "Water" },
    ],
  },
  {
    id: 11,
    text: "在团队合作中，你通常扮演？",
    options: [
      { text: "冲锋陷阵的领袖，带领大家攻坚克难", mbti: "E", element: "Fire" },
      { text: "默默工作的基石，确保细节万无一失", mbti: "S", element: "Earth" },
      { text: "出谋划策的军师，提供各种奇思妙想", mbti: "N", element: "Air" },
      { text: "调和矛盾的润滑剂，关注大家的情绪", mbti: "F", element: "Water" },
    ],
  },
  {
    id: 12,
    text: "面对批评，你的反应是？",
    options: [
      { text: "立刻反驳，捍卫自己的尊严和立场", mbti: "E", element: "Fire" },
      { text: "表面接受，内心在逻辑上分析对方的对错", mbti: "T", element: "Earth" },
      { text: "感到受伤，反思自己是不是哪里做得不好", mbti: "F", element: "Water" },
      { text: "无所谓，反正批评也是一种不同的视角", mbti: "P", element: "Air" },
    ],
  },
  {
    id: 13,
    text: "你更喜欢哪种类型的书籍？",
    options: [
      { text: "热血传记，看牛人如何逆袭人生", mbti: "E", element: "Fire" },
      { text: "实用指南，学点马上能用的生活技能", mbti: "S", element: "Earth" },
      { text: "科幻悬疑，挑战大脑的想象力极限", mbti: "N", element: "Air" },
      { text: "唯美散文，治愈疲惫的内心世界", mbti: "I", element: "Water" },
    ],
  },
  {
    id: 14,
    text: "在购物时，你最看重？",
    options: [
      { text: "品牌知名度和它带来的社交价值", mbti: "E", element: "Fire" },
      { text: "性价比和实际的耐用程度", mbti: "S", element: "Earth" },
      { text: "设计感和它传达的独特个性", mbti: "N", element: "Air" },
      { text: "它带给你的情感慰藉和舒适感", mbti: "F", element: "Water" },
    ],
  },
  {
    id: 15,
    text: "当生活陷入枯燥时，你会？",
    options: [
      { text: "策划一场说走就走的旅行或大聚会", mbti: "E", element: "Fire" },
      { text: "培养一个新的实用爱好，比如木工或园艺", mbti: "S", element: "Earth" },
      { text: "沉浸在幻想世界，写小说或画画", mbti: "N", element: "Air" },
      { text: "找个安静的地方冥想，寻找内心的平静", mbti: "I", element: "Water" },
    ],
  },
  {
    id: 16,
    text: "你如何定义“成功”？",
    options: [
      { text: "获得社会认可，拥有强大的影响力", mbti: "E", element: "Fire" },
      { text: "生活安稳富足，家人健康快乐", mbti: "S", element: "Earth" },
      { text: "实现自我价值，活出独一无二的色彩", mbti: "N", element: "Air" },
      { text: "内心充盈宁静，不被世俗纷扰所动", mbti: "I", element: "Water" },
    ],
  },
  {
    id: 17,
    text: "在争论中，你通常？",
    options: [
      { text: "据理力争，一定要分出个子丑寅卯", mbti: "T", element: "Air" },
      { text: "为了和谐选择退让，不想破坏气氛", mbti: "F", element: "Water" },
      { text: "用幽默化解尴尬，让大家都有台阶下", mbti: "E", element: "Fire" },
      { text: "冷眼旁观，觉得争论本身就很无趣", mbti: "I", element: "Earth" },
    ],
  },
  {
    id: 18,
    text: "你更倾向于相信？",
    options: [
      { text: "眼见为实，只相信亲身经历和数据", mbti: "S", element: "Earth" },
      { text: "直觉和灵感，相信冥冥之中的指引", mbti: "N", element: "Air" },
      { text: "情感和缘分，相信人和人之间的羁绊", mbti: "F", element: "Water" },
      { text: "行动和意志，相信人定胜天", mbti: "E", element: "Fire" },
    ],
  },
  {
    id: 19,
    text: "面对海量的碎片化信息，你会？",
    options: [
      { text: "快速筛选，只看对自己有用的部分", mbti: "J", element: "Earth" },
      { text: "随性浏览，看到有趣的就停下来看看", mbti: "P", element: "Fire" },
      { text: "深度挖掘，试图找出信息背后的逻辑", mbti: "T", element: "Air" },
      { text: "感性吸收，寻找能引起情感共鸣的故事", mbti: "F", element: "Water" },
    ],
  },
  {
    id: 20,
    text: "你希望别人如何评价你？",
    options: [
      { text: "一个充满正能量、值得信赖的领袖", mbti: "E", element: "Fire" },
      { text: "一个踏实稳重、极其靠谱的伙伴", mbti: "S", element: "Earth" },
      { text: "一个聪明绝顶、富有创意的天才", mbti: "N", element: "Air" },
      { text: "一个温柔善良、洞察人心的智者", mbti: "I", element: "Water" },
    ],
  },
];

export const mbtiDescriptions: Record<string, any> = {
  "INTJ": { title: "建筑师", tag: "理性深邃的远见者" },
  "INTP": { title: "逻辑学家", tag: "不拘一格的思考者" },
  "ENTJ": { title: "指挥官", tag: "果敢坚毅的领导者" },
  "ENTP": { title: "辩论家", tag: "充满好奇的挑战者" },
  "INFJ": { title: "提倡者", tag: "宁静神秘的理想主义者" },
  "INFP": { title: "调解员", tag: "温柔坚定的治愈者" },
  "ENFJ": { title: "主人公", tag: "富有魅力的演说家" },
  "ENFP": { title: "竞选者", tag: "热情自由的探索者" },
  "ISTJ": { title: "物流师", tag: "务实可靠的守护者" },
  "ISFJ": { title: "守卫者", tag: "细致周全的奉献者" },
  "ESTJ": { title: "总经理", tag: "高效严谨的执行者" },
  "ESFJ": { title: "执政官", tag: "热心周到的社交家" },
  "ISTP": { title: "鉴赏家", tag: "冷静灵活的匠人" },
  "ISFP": { title: "探险家", tag: "优雅感性的艺术家" },
  "ESTP": { title: "企业家", tag: "机敏果敢的行动派" },
  "ESFP": { title: "表演者", tag: "活力四射的快乐源泉" },
};

export const elementToZodiac: Record<string, string[]> = {
  "Fire": ["白羊座", "狮子座", "射手座"],
  "Earth": ["金牛座", "处女座", "摩羯座"],
  "Air": ["双子座", "天秤座", "水瓶座"],
  "Water": ["巨蟹座", "天蝎座", "双鱼座"],
};

export const elementDescriptions: Record<string, any> = {
  "Fire": {
    name: "火象特质",
    desc: "你像一团永不熄灭的火焰，生命中充满了向上的张力与纯粹的激情。你拒绝平庸，总是在寻找下一个能点燃灵魂的火种。你的存在本身就是一种光亮，能瞬间照亮周围人的阴霾。",
    social: "你是社交场上的天然磁场，直率、坦诚且极具感染力。虽然偶尔会因为过于直接而显得有些‘烫手’，但大家都爱你的那份真性情。你不需要刻意合群，因为你就是人群的中心。",
    love: "在感情中，你追求的是那种‘一眼万年’的宿命感。你爱得热烈且毫无保留，像飞蛾扑火般勇敢。你需要的伴侣是能与你并肩奔跑、共同燃烧的人，而不是试图熄灭你火焰的人。",
    career: "你天生适合站在舞台中央或冲在最前线。那些充满挑战、需要即兴发挥和强大领导力的领域（如创业、艺术创作、危机处理）是你的主场。你讨厌重复，热爱开创。",
    weakness: "当火焰过旺时，容易灼伤自己和他人。你的急躁和偶尔的自我中心是需要觉察的盲点。学会等待和忍受‘冷场’，是你进阶的必修课。",
  },
  "Earth": {
    name: "土象特质",
    desc: "你像大地一样深厚且令人心安，追求的是极致的质感、秩序与长久的价值。你拥有惊人的耐心和定力，擅长在喧嚣的世界中构筑属于自己的稳固城堡。你是现实主义的优雅践行者。",
    social: "你的社交风格是‘慢热而长情’。你不会轻易交心，但一旦认定，便是终身的依靠。你更倾向于高质量的小圈子，在朋友眼中，你就是那个永远不会倒下的精神支柱。",
    love: "你对爱的理解是‘细水长流的陪伴’。你不太擅长花言巧语，但会把爱意藏在每一顿精心准备的晚餐和每一个实际的行动中。你渴望的是那种基于信任与物质基础的双重安全感。",
    career: "你是天生的‘工匠’与‘管理者’。在需要严谨逻辑、精密计划和长期执行力的专业领域（如金融、建筑、科研、高级管理），你总能建立起令人敬畏的成就。你让混乱变得有序。",
    weakness: "大地有时会显得过于沉重和固执。你对未知的恐惧和对改变的抵触可能会让你错过一些轻盈的机会。试着打破常规，你会发现世界其实很有趣。",
  },
  "Air": {
    name: "风象特质",
    desc: "你像一阵自由流动的风，灵动、轻盈且充满了对万物的好奇。你拒绝被任何标签定义，思维永远跳跃在下一个维度。你热爱交流，更热爱那种灵魂在云端漫步的自由感。",
    social: "你是社交中的‘润滑剂’和‘情报站’。你博学多才，总能轻松切入任何话题。你追求的是智力上的博弈与共鸣，虽然看起来和谁都聊得来，但真正能走进你风眼的人寥寥无几。",
    love: "在爱中，你最看重的是‘灵魂的契合’。你需要一个能听懂你冷笑话、能陪你聊到深夜且不限制你自由的伴侣。对你来说，最好的爱情是两个独立灵魂的共同探索。",
    career: "你适合一切与信息、沟通和创意相关的行业。传媒、咨询、策划或跨领域研究是你的乐园。你擅长从海量信息中提取洞见，并以最优雅的方式传播出去。",
    weakness: "风有时会显得过于疏离或难以捉摸。你对深层情感投入的逃避和偶尔的‘三分钟热度’可能会让你显得有些不可靠。学会在某处停留，你会看到更美的风景。",
  },
  "Water": {
    name: "水象特质",
    desc: "你像深邃的海水，温柔、细腻且拥有极强的感知力。你拥有天生的同理心，能轻易读懂空气中流动的微妙情绪。你的内心世界是一个宏大的艺术馆，充满了梦幻与治愈的力量。",
    social: "你是天生的‘疗愈者’。在社交中，你总是那个安静的倾听者，能给疲惫的灵魂提供最温柔的港湾。你追求的是情感的深度而非广度，你的每一个微笑都带着理解的力量。",
    love: "你对爱有着近乎神圣的执着。你渴望的是那种‘灵魂交融’的极致体验，愿意为了爱人付出一切。你需要的伴侣是能看穿你的坚强、能温柔拥抱你所有情绪的人。",
    career: "你适合需要情感投入、直觉和人文关怀的领域。心理咨询、艺术、教育或公益事业能让你发挥最大的光芒。你不是在工作，你是在用灵魂与世界对话。",
    weakness: "水能载舟亦能覆舟。你过于敏感的神经和容易受外界影响的情绪是你的软肋。学会建立情感边界，不被他人的负能量淹没，是你保护自己的关键。",
  },
};

export const harmonySuggestions: Record<string, string> = {
  "金": "【刚柔并济】你骨子里那份坚毅是你的铠甲，但也可能成为你的束缚。建议在生活中多尝试一些‘无用’的消遣，比如看一场没有目的的电影，或是在雨后散步。学会放下对结果的执着，去感受过程中的柔软与模糊，这会让你的生命更有弹性。",
  "木": "【向上生长，向下扎根】你拥有极强的生命力，但有时会因为想得太多而显得枝蔓丛生。建议定期进行‘心理断舍离’，修剪掉那些消耗你的负面关系和琐碎目标。专注核心，像古木一样深扎大地，你的成长才会更加稳健且不可撼动。",
  "水": "【汇聚能量，静水流深】你的灵动让你能适应任何环境，但也容易让你在随波逐流中迷失自我。建议建立一些‘硬性’的生活秩序，比如固定的早起时间或每日冥想。这就像是给流水准备了一个精致的容器，能帮助你更好地汇聚能量，将感性转化为创造力。",
  "火": "【温火慢炖，持久绽放】你的热情是你的天赋，但爆发式的燃烧容易带来疲惫。建议在生活中加入一些‘慢节奏’的元素，比如练习书法、茶道或长距离徒步。学会控制火焰的节奏，让它从‘爆燃’转为‘恒温’，你的影响力和生命力将会更加持久。",
  "土": "【轻盈起舞，拥抱变幻】你的稳重是所有人依赖的基石，但过度的责任感可能会让你感到沉重。建议偶尔打破自己的‘规矩’，去做一件完全不在计划内的小事，比如去一个从未听过的小镇，或是尝试一种全新的穿衣风格。给生活加点风，你会发现轻盈的自己更有魅力。",
};
