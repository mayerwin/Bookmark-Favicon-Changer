const EMOJI_DATA = [
  {
    "char": "😀",
    "tags": "grinning face smileys & emotion (face-smiling)"
  },
  {
    "char": "😃",
    "tags": "grinning face with big eyes smileys & emotion (face-smiling)"
  },
  {
    "char": "😄",
    "tags": "grinning face with smiling eyes smileys & emotion (face-smiling)"
  },
  {
    "char": "😁",
    "tags": "beaming face with smiling eyes smileys & emotion (face-smiling)"
  },
  {
    "char": "😆",
    "tags": "grinning squinting face smileys & emotion (face-smiling)"
  },
  {
    "char": "😅",
    "tags": "grinning face with sweat smileys & emotion (face-smiling)"
  },
  {
    "char": "🤣",
    "tags": "rolling on the floor laughing smileys & emotion (face-smiling)"
  },
  {
    "char": "😂",
    "tags": "face with tears of joy smileys & emotion (face-smiling)"
  },
  {
    "char": "🙂",
    "tags": "slightly smiling face smileys & emotion (face-smiling)"
  },
  {
    "char": "🙃",
    "tags": "upside-down face smileys & emotion (face-smiling)"
  },
  {
    "char": "🫠",
    "tags": "melting face smileys & emotion (face-smiling)"
  },
  {
    "char": "😉",
    "tags": "winking face smileys & emotion (face-smiling)"
  },
  {
    "char": "😊",
    "tags": "smiling face with smiling eyes smileys & emotion (face-smiling)"
  },
  {
    "char": "😇",
    "tags": "smiling face with halo smileys & emotion (face-smiling)"
  },
  {
    "char": "🥰",
    "tags": "smiling face with hearts smileys & emotion (face-affection)"
  },
  {
    "char": "😍",
    "tags": "smiling face with heart-eyes smileys & emotion (face-affection)"
  },
  {
    "char": "🤩",
    "tags": "star-struck smileys & emotion (face-affection)"
  },
  {
    "char": "😘",
    "tags": "face blowing a kiss smileys & emotion (face-affection)"
  },
  {
    "char": "😗",
    "tags": "kissing face smileys & emotion (face-affection)"
  },
  {
    "char": "☺️",
    "tags": "smiling face smileys & emotion (face-affection)"
  },
  {
    "char": "☺",
    "tags": "smiling face smileys & emotion (face-affection)"
  },
  {
    "char": "😚",
    "tags": "kissing face with closed eyes smileys & emotion (face-affection)"
  },
  {
    "char": "😙",
    "tags": "kissing face with smiling eyes smileys & emotion (face-affection)"
  },
  {
    "char": "🥲",
    "tags": "smiling face with tear smileys & emotion (face-affection)"
  },
  {
    "char": "😋",
    "tags": "face savoring food smileys & emotion (face-tongue)"
  },
  {
    "char": "😛",
    "tags": "face with tongue smileys & emotion (face-tongue)"
  },
  {
    "char": "😜",
    "tags": "winking face with tongue smileys & emotion (face-tongue)"
  },
  {
    "char": "🤪",
    "tags": "zany face smileys & emotion (face-tongue)"
  },
  {
    "char": "😝",
    "tags": "squinting face with tongue smileys & emotion (face-tongue)"
  },
  {
    "char": "🤑",
    "tags": "money-mouth face smileys & emotion (face-tongue)"
  },
  {
    "char": "🤗",
    "tags": "smiling face with open hands smileys & emotion (face-hand)"
  },
  {
    "char": "🤭",
    "tags": "face with hand over mouth smileys & emotion (face-hand)"
  },
  {
    "char": "🫢",
    "tags": "face with open eyes and hand over mouth smileys & emotion (face-hand)"
  },
  {
    "char": "🫣",
    "tags": "face with peeking eye smileys & emotion (face-hand)"
  },
  {
    "char": "🤫",
    "tags": "shushing face smileys & emotion (face-hand)"
  },
  {
    "char": "🤔",
    "tags": "thinking face smileys & emotion (face-hand)"
  },
  {
    "char": "🫡",
    "tags": "saluting face smileys & emotion (face-hand)"
  },
  {
    "char": "🤐",
    "tags": "zipper-mouth face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🤨",
    "tags": "face with raised eyebrow smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😐",
    "tags": "neutral face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😑",
    "tags": "expressionless face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😶",
    "tags": "face without mouth smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🫥",
    "tags": "dotted line face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😶‍🌫️",
    "tags": "face in clouds smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😶‍🌫",
    "tags": "face in clouds smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😏",
    "tags": "smirking face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😒",
    "tags": "unamused face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🙄",
    "tags": "face with rolling eyes smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😬",
    "tags": "grimacing face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😮‍💨",
    "tags": "face exhaling smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🤥",
    "tags": "lying face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🫨",
    "tags": "shaking face smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🙂‍↔️",
    "tags": "head shaking horizontally smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🙂‍↔",
    "tags": "head shaking horizontally smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🙂‍↕️",
    "tags": "head shaking vertically smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "🙂‍↕",
    "tags": "head shaking vertically smileys & emotion (face-neutral-skeptical)"
  },
  {
    "char": "😌",
    "tags": "relieved face smileys & emotion (face-sleepy)"
  },
  {
    "char": "😔",
    "tags": "pensive face smileys & emotion (face-sleepy)"
  },
  {
    "char": "😪",
    "tags": "sleepy face smileys & emotion (face-sleepy)"
  },
  {
    "char": "🤤",
    "tags": "drooling face smileys & emotion (face-sleepy)"
  },
  {
    "char": "😴",
    "tags": "sleeping face smileys & emotion (face-sleepy)"
  },
  {
    "char": "🫩",
    "tags": "face with bags under eyes smileys & emotion (face-sleepy)"
  },
  {
    "char": "😷",
    "tags": "face with medical mask smileys & emotion (face-unwell)"
  },
  {
    "char": "🤒",
    "tags": "face with thermometer smileys & emotion (face-unwell)"
  },
  {
    "char": "🤕",
    "tags": "face with head-bandage smileys & emotion (face-unwell)"
  },
  {
    "char": "🤢",
    "tags": "nauseated face smileys & emotion (face-unwell)"
  },
  {
    "char": "🤮",
    "tags": "face vomiting smileys & emotion (face-unwell)"
  },
  {
    "char": "🤧",
    "tags": "sneezing face smileys & emotion (face-unwell)"
  },
  {
    "char": "🥵",
    "tags": "hot face smileys & emotion (face-unwell)"
  },
  {
    "char": "🥶",
    "tags": "cold face smileys & emotion (face-unwell)"
  },
  {
    "char": "🥴",
    "tags": "woozy face smileys & emotion (face-unwell)"
  },
  {
    "char": "😵",
    "tags": "face with crossed-out eyes smileys & emotion (face-unwell)"
  },
  {
    "char": "😵‍💫",
    "tags": "face with spiral eyes smileys & emotion (face-unwell)"
  },
  {
    "char": "🤯",
    "tags": "exploding head smileys & emotion (face-unwell)"
  },
  {
    "char": "🤠",
    "tags": "cowboy hat face smileys & emotion (face-hat)"
  },
  {
    "char": "🥳",
    "tags": "partying face smileys & emotion (face-hat)"
  },
  {
    "char": "🥸",
    "tags": "disguised face smileys & emotion (face-hat)"
  },
  {
    "char": "😎",
    "tags": "smiling face with sunglasses smileys & emotion (face-glasses)"
  },
  {
    "char": "🤓",
    "tags": "nerd face smileys & emotion (face-glasses)"
  },
  {
    "char": "🧐",
    "tags": "face with monocle smileys & emotion (face-glasses)"
  },
  {
    "char": "😕",
    "tags": "confused face smileys & emotion (face-concerned)"
  },
  {
    "char": "🫤",
    "tags": "face with diagonal mouth smileys & emotion (face-concerned)"
  },
  {
    "char": "😟",
    "tags": "worried face smileys & emotion (face-concerned)"
  },
  {
    "char": "🙁",
    "tags": "slightly frowning face smileys & emotion (face-concerned)"
  },
  {
    "char": "☹️",
    "tags": "frowning face smileys & emotion (face-concerned)"
  },
  {
    "char": "☹",
    "tags": "frowning face smileys & emotion (face-concerned)"
  },
  {
    "char": "😮",
    "tags": "face with open mouth smileys & emotion (face-concerned)"
  },
  {
    "char": "😯",
    "tags": "hushed face smileys & emotion (face-concerned)"
  },
  {
    "char": "😲",
    "tags": "astonished face smileys & emotion (face-concerned)"
  },
  {
    "char": "😳",
    "tags": "flushed face smileys & emotion (face-concerned)"
  },
  {
    "char": "🥺",
    "tags": "pleading face smileys & emotion (face-concerned)"
  },
  {
    "char": "🥹",
    "tags": "face holding back tears smileys & emotion (face-concerned)"
  },
  {
    "char": "😦",
    "tags": "frowning face with open mouth smileys & emotion (face-concerned)"
  },
  {
    "char": "😧",
    "tags": "anguished face smileys & emotion (face-concerned)"
  },
  {
    "char": "😨",
    "tags": "fearful face smileys & emotion (face-concerned)"
  },
  {
    "char": "😰",
    "tags": "anxious face with sweat smileys & emotion (face-concerned)"
  },
  {
    "char": "😥",
    "tags": "sad but relieved face smileys & emotion (face-concerned)"
  },
  {
    "char": "😢",
    "tags": "crying face smileys & emotion (face-concerned)"
  },
  {
    "char": "😭",
    "tags": "loudly crying face smileys & emotion (face-concerned)"
  },
  {
    "char": "😱",
    "tags": "face screaming in fear smileys & emotion (face-concerned)"
  },
  {
    "char": "😖",
    "tags": "confounded face smileys & emotion (face-concerned)"
  },
  {
    "char": "😣",
    "tags": "persevering face smileys & emotion (face-concerned)"
  },
  {
    "char": "😞",
    "tags": "disappointed face smileys & emotion (face-concerned)"
  },
  {
    "char": "😓",
    "tags": "downcast face with sweat smileys & emotion (face-concerned)"
  },
  {
    "char": "😩",
    "tags": "weary face smileys & emotion (face-concerned)"
  },
  {
    "char": "😫",
    "tags": "tired face smileys & emotion (face-concerned)"
  },
  {
    "char": "🥱",
    "tags": "yawning face smileys & emotion (face-concerned)"
  },
  {
    "char": "😤",
    "tags": "face with steam from nose smileys & emotion (face-negative)"
  },
  {
    "char": "😡",
    "tags": "enraged face smileys & emotion (face-negative)"
  },
  {
    "char": "😠",
    "tags": "angry face smileys & emotion (face-negative)"
  },
  {
    "char": "🤬",
    "tags": "face with symbols on mouth smileys & emotion (face-negative)"
  },
  {
    "char": "😈",
    "tags": "smiling face with horns smileys & emotion (face-negative)"
  },
  {
    "char": "👿",
    "tags": "angry face with horns smileys & emotion (face-negative)"
  },
  {
    "char": "💀",
    "tags": "skull smileys & emotion (face-negative)"
  },
  {
    "char": "☠️",
    "tags": "skull and crossbones smileys & emotion (face-negative)"
  },
  {
    "char": "☠",
    "tags": "skull and crossbones smileys & emotion (face-negative)"
  },
  {
    "char": "💩",
    "tags": "pile of poo smileys & emotion (face-costume)"
  },
  {
    "char": "🤡",
    "tags": "clown face smileys & emotion (face-costume)"
  },
  {
    "char": "👹",
    "tags": "ogre smileys & emotion (face-costume)"
  },
  {
    "char": "👺",
    "tags": "goblin smileys & emotion (face-costume)"
  },
  {
    "char": "👻",
    "tags": "ghost smileys & emotion (face-costume)"
  },
  {
    "char": "👽",
    "tags": "alien smileys & emotion (face-costume)"
  },
  {
    "char": "👾",
    "tags": "alien monster smileys & emotion (face-costume)"
  },
  {
    "char": "🤖",
    "tags": "robot smileys & emotion (face-costume)"
  },
  {
    "char": "😺",
    "tags": "grinning cat smileys & emotion (cat-face)"
  },
  {
    "char": "😸",
    "tags": "grinning cat with smiling eyes smileys & emotion (cat-face)"
  },
  {
    "char": "😹",
    "tags": "cat with tears of joy smileys & emotion (cat-face)"
  },
  {
    "char": "😻",
    "tags": "smiling cat with heart-eyes smileys & emotion (cat-face)"
  },
  {
    "char": "😼",
    "tags": "cat with wry smile smileys & emotion (cat-face)"
  },
  {
    "char": "😽",
    "tags": "kissing cat smileys & emotion (cat-face)"
  },
  {
    "char": "🙀",
    "tags": "weary cat smileys & emotion (cat-face)"
  },
  {
    "char": "😿",
    "tags": "crying cat smileys & emotion (cat-face)"
  },
  {
    "char": "😾",
    "tags": "pouting cat smileys & emotion (cat-face)"
  },
  {
    "char": "🙈",
    "tags": "see-no-evil monkey smileys & emotion (monkey-face)"
  },
  {
    "char": "🙉",
    "tags": "hear-no-evil monkey smileys & emotion (monkey-face)"
  },
  {
    "char": "🙊",
    "tags": "speak-no-evil monkey smileys & emotion (monkey-face)"
  },
  {
    "char": "💌",
    "tags": "love letter smileys & emotion (heart)"
  },
  {
    "char": "💘",
    "tags": "heart with arrow smileys & emotion (heart)"
  },
  {
    "char": "💝",
    "tags": "heart with ribbon smileys & emotion (heart)"
  },
  {
    "char": "💖",
    "tags": "sparkling heart smileys & emotion (heart)"
  },
  {
    "char": "💗",
    "tags": "growing heart smileys & emotion (heart)"
  },
  {
    "char": "💓",
    "tags": "beating heart smileys & emotion (heart)"
  },
  {
    "char": "💞",
    "tags": "revolving hearts smileys & emotion (heart)"
  },
  {
    "char": "💕",
    "tags": "two hearts smileys & emotion (heart)"
  },
  {
    "char": "💟",
    "tags": "heart decoration smileys & emotion (heart)"
  },
  {
    "char": "❣️",
    "tags": "heart exclamation smileys & emotion (heart)"
  },
  {
    "char": "❣",
    "tags": "heart exclamation smileys & emotion (heart)"
  },
  {
    "char": "💔",
    "tags": "broken heart smileys & emotion (heart)"
  },
  {
    "char": "❤️‍🔥",
    "tags": "heart on fire smileys & emotion (heart)"
  },
  {
    "char": "❤‍🔥",
    "tags": "heart on fire smileys & emotion (heart)"
  },
  {
    "char": "❤️‍🩹",
    "tags": "mending heart smileys & emotion (heart)"
  },
  {
    "char": "❤‍🩹",
    "tags": "mending heart smileys & emotion (heart)"
  },
  {
    "char": "❤️",
    "tags": "red heart smileys & emotion (heart)"
  },
  {
    "char": "❤",
    "tags": "red heart smileys & emotion (heart)"
  },
  {
    "char": "🩷",
    "tags": "pink heart smileys & emotion (heart)"
  },
  {
    "char": "🧡",
    "tags": "orange heart smileys & emotion (heart)"
  },
  {
    "char": "💛",
    "tags": "yellow heart smileys & emotion (heart)"
  },
  {
    "char": "💚",
    "tags": "green heart smileys & emotion (heart)"
  },
  {
    "char": "💙",
    "tags": "blue heart smileys & emotion (heart)"
  },
  {
    "char": "🩵",
    "tags": "light blue heart smileys & emotion (heart)"
  },
  {
    "char": "💜",
    "tags": "purple heart smileys & emotion (heart)"
  },
  {
    "char": "🤎",
    "tags": "brown heart smileys & emotion (heart)"
  },
  {
    "char": "🖤",
    "tags": "black heart smileys & emotion (heart)"
  },
  {
    "char": "🩶",
    "tags": "grey heart smileys & emotion (heart)"
  },
  {
    "char": "🤍",
    "tags": "white heart smileys & emotion (heart)"
  },
  {
    "char": "💋",
    "tags": "kiss mark smileys & emotion (emotion)"
  },
  {
    "char": "💯",
    "tags": "hundred points smileys & emotion (emotion)"
  },
  {
    "char": "💢",
    "tags": "anger symbol smileys & emotion (emotion)"
  },
  {
    "char": "💥",
    "tags": "collision smileys & emotion (emotion)"
  },
  {
    "char": "💫",
    "tags": "dizzy smileys & emotion (emotion)"
  },
  {
    "char": "💦",
    "tags": "sweat droplets smileys & emotion (emotion)"
  },
  {
    "char": "💨",
    "tags": "dashing away smileys & emotion (emotion)"
  },
  {
    "char": "🕳️",
    "tags": "hole smileys & emotion (emotion)"
  },
  {
    "char": "🕳",
    "tags": "hole smileys & emotion (emotion)"
  },
  {
    "char": "💬",
    "tags": "speech balloon smileys & emotion (emotion)"
  },
  {
    "char": "👁️‍🗨️",
    "tags": "eye in speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "👁‍🗨️",
    "tags": "eye in speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "👁️‍🗨",
    "tags": "eye in speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "👁‍🗨",
    "tags": "eye in speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "🗨️",
    "tags": "left speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "🗨",
    "tags": "left speech bubble smileys & emotion (emotion)"
  },
  {
    "char": "🗯️",
    "tags": "right anger bubble smileys & emotion (emotion)"
  },
  {
    "char": "🗯",
    "tags": "right anger bubble smileys & emotion (emotion)"
  },
  {
    "char": "💭",
    "tags": "thought balloon smileys & emotion (emotion)"
  },
  {
    "char": "💤",
    "tags": "zzz smileys & emotion (emotion)"
  },
  {
    "char": "👋",
    "tags": "waving hand people & body (hand-fingers-open)"
  },
  {
    "char": "👋🏻",
    "tags": "waving hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "👋🏼",
    "tags": "waving hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "👋🏽",
    "tags": "waving hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "👋🏾",
    "tags": "waving hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "👋🏿",
    "tags": "waving hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🤚",
    "tags": "raised back of hand people & body (hand-fingers-open)"
  },
  {
    "char": "🤚🏻",
    "tags": "raised back of hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🤚🏼",
    "tags": "raised back of hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🤚🏽",
    "tags": "raised back of hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🤚🏾",
    "tags": "raised back of hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🤚🏿",
    "tags": "raised back of hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖐️",
    "tags": "hand with fingers splayed people & body (hand-fingers-open)"
  },
  {
    "char": "🖐",
    "tags": "hand with fingers splayed people & body (hand-fingers-open)"
  },
  {
    "char": "🖐🏻",
    "tags": "hand with fingers splayed: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖐🏼",
    "tags": "hand with fingers splayed: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖐🏽",
    "tags": "hand with fingers splayed: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖐🏾",
    "tags": "hand with fingers splayed: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖐🏿",
    "tags": "hand with fingers splayed: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "✋",
    "tags": "raised hand people & body (hand-fingers-open)"
  },
  {
    "char": "✋🏻",
    "tags": "raised hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "✋🏼",
    "tags": "raised hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "✋🏽",
    "tags": "raised hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "✋🏾",
    "tags": "raised hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "✋🏿",
    "tags": "raised hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖖",
    "tags": "vulcan salute people & body (hand-fingers-open)"
  },
  {
    "char": "🖖🏻",
    "tags": "vulcan salute: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖖🏼",
    "tags": "vulcan salute: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖖🏽",
    "tags": "vulcan salute: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖖🏾",
    "tags": "vulcan salute: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🖖🏿",
    "tags": "vulcan salute: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫱",
    "tags": "rightwards hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫱🏻",
    "tags": "rightwards hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫱🏼",
    "tags": "rightwards hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫱🏽",
    "tags": "rightwards hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫱🏾",
    "tags": "rightwards hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫱🏿",
    "tags": "rightwards hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫲",
    "tags": "leftwards hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫲🏻",
    "tags": "leftwards hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫲🏼",
    "tags": "leftwards hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫲🏽",
    "tags": "leftwards hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫲🏾",
    "tags": "leftwards hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫲🏿",
    "tags": "leftwards hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫳",
    "tags": "palm down hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫳🏻",
    "tags": "palm down hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫳🏼",
    "tags": "palm down hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫳🏽",
    "tags": "palm down hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫳🏾",
    "tags": "palm down hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫳🏿",
    "tags": "palm down hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫴",
    "tags": "palm up hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫴🏻",
    "tags": "palm up hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫴🏼",
    "tags": "palm up hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫴🏽",
    "tags": "palm up hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫴🏾",
    "tags": "palm up hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫴🏿",
    "tags": "palm up hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫷",
    "tags": "leftwards pushing hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫷🏻",
    "tags": "leftwards pushing hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫷🏼",
    "tags": "leftwards pushing hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫷🏽",
    "tags": "leftwards pushing hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫷🏾",
    "tags": "leftwards pushing hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫷🏿",
    "tags": "leftwards pushing hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫸",
    "tags": "rightwards pushing hand people & body (hand-fingers-open)"
  },
  {
    "char": "🫸🏻",
    "tags": "rightwards pushing hand: light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫸🏼",
    "tags": "rightwards pushing hand: medium-light skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫸🏽",
    "tags": "rightwards pushing hand: medium skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫸🏾",
    "tags": "rightwards pushing hand: medium-dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "🫸🏿",
    "tags": "rightwards pushing hand: dark skin tone people & body (hand-fingers-open)"
  },
  {
    "char": "👌",
    "tags": "ok hand people & body (hand-fingers-partial)"
  },
  {
    "char": "👌🏻",
    "tags": "ok hand: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "👌🏼",
    "tags": "ok hand: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "👌🏽",
    "tags": "ok hand: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "👌🏾",
    "tags": "ok hand: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "👌🏿",
    "tags": "ok hand: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌",
    "tags": "pinched fingers people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌🏻",
    "tags": "pinched fingers: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌🏼",
    "tags": "pinched fingers: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌🏽",
    "tags": "pinched fingers: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌🏾",
    "tags": "pinched fingers: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤌🏿",
    "tags": "pinched fingers: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏",
    "tags": "pinching hand people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏🏻",
    "tags": "pinching hand: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏🏼",
    "tags": "pinching hand: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏🏽",
    "tags": "pinching hand: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏🏾",
    "tags": "pinching hand: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤏🏿",
    "tags": "pinching hand: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "✌️",
    "tags": "victory hand people & body (hand-fingers-partial)"
  },
  {
    "char": "✌",
    "tags": "victory hand people & body (hand-fingers-partial)"
  },
  {
    "char": "✌🏻",
    "tags": "victory hand: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "✌🏼",
    "tags": "victory hand: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "✌🏽",
    "tags": "victory hand: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "✌🏾",
    "tags": "victory hand: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "✌🏿",
    "tags": "victory hand: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞",
    "tags": "crossed fingers people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞🏻",
    "tags": "crossed fingers: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞🏼",
    "tags": "crossed fingers: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞🏽",
    "tags": "crossed fingers: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞🏾",
    "tags": "crossed fingers: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤞🏿",
    "tags": "crossed fingers: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰",
    "tags": "hand with index finger and thumb crossed people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰🏻",
    "tags": "hand with index finger and thumb crossed: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰🏼",
    "tags": "hand with index finger and thumb crossed: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰🏽",
    "tags": "hand with index finger and thumb crossed: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰🏾",
    "tags": "hand with index finger and thumb crossed: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🫰🏿",
    "tags": "hand with index finger and thumb crossed: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟",
    "tags": "love-you gesture people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟🏻",
    "tags": "love-you gesture: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟🏼",
    "tags": "love-you gesture: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟🏽",
    "tags": "love-you gesture: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟🏾",
    "tags": "love-you gesture: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤟🏿",
    "tags": "love-you gesture: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘",
    "tags": "sign of the horns people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘🏻",
    "tags": "sign of the horns: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘🏼",
    "tags": "sign of the horns: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘🏽",
    "tags": "sign of the horns: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘🏾",
    "tags": "sign of the horns: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤘🏿",
    "tags": "sign of the horns: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙",
    "tags": "call me hand people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙🏻",
    "tags": "call me hand: light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙🏼",
    "tags": "call me hand: medium-light skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙🏽",
    "tags": "call me hand: medium skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙🏾",
    "tags": "call me hand: medium-dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "🤙🏿",
    "tags": "call me hand: dark skin tone people & body (hand-fingers-partial)"
  },
  {
    "char": "👈",
    "tags": "backhand index pointing left people & body (hand-single-finger)"
  },
  {
    "char": "👈🏻",
    "tags": "backhand index pointing left: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👈🏼",
    "tags": "backhand index pointing left: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👈🏽",
    "tags": "backhand index pointing left: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👈🏾",
    "tags": "backhand index pointing left: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👈🏿",
    "tags": "backhand index pointing left: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👉",
    "tags": "backhand index pointing right people & body (hand-single-finger)"
  },
  {
    "char": "👉🏻",
    "tags": "backhand index pointing right: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👉🏼",
    "tags": "backhand index pointing right: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👉🏽",
    "tags": "backhand index pointing right: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👉🏾",
    "tags": "backhand index pointing right: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👉🏿",
    "tags": "backhand index pointing right: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👆",
    "tags": "backhand index pointing up people & body (hand-single-finger)"
  },
  {
    "char": "👆🏻",
    "tags": "backhand index pointing up: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👆🏼",
    "tags": "backhand index pointing up: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👆🏽",
    "tags": "backhand index pointing up: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👆🏾",
    "tags": "backhand index pointing up: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👆🏿",
    "tags": "backhand index pointing up: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🖕",
    "tags": "middle finger people & body (hand-single-finger)"
  },
  {
    "char": "🖕🏻",
    "tags": "middle finger: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🖕🏼",
    "tags": "middle finger: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🖕🏽",
    "tags": "middle finger: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🖕🏾",
    "tags": "middle finger: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🖕🏿",
    "tags": "middle finger: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👇",
    "tags": "backhand index pointing down people & body (hand-single-finger)"
  },
  {
    "char": "👇🏻",
    "tags": "backhand index pointing down: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👇🏼",
    "tags": "backhand index pointing down: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👇🏽",
    "tags": "backhand index pointing down: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👇🏾",
    "tags": "backhand index pointing down: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👇🏿",
    "tags": "backhand index pointing down: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "☝️",
    "tags": "index pointing up people & body (hand-single-finger)"
  },
  {
    "char": "☝",
    "tags": "index pointing up people & body (hand-single-finger)"
  },
  {
    "char": "☝🏻",
    "tags": "index pointing up: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "☝🏼",
    "tags": "index pointing up: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "☝🏽",
    "tags": "index pointing up: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "☝🏾",
    "tags": "index pointing up: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "☝🏿",
    "tags": "index pointing up: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🫵",
    "tags": "index pointing at the viewer people & body (hand-single-finger)"
  },
  {
    "char": "🫵🏻",
    "tags": "index pointing at the viewer: light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🫵🏼",
    "tags": "index pointing at the viewer: medium-light skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🫵🏽",
    "tags": "index pointing at the viewer: medium skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🫵🏾",
    "tags": "index pointing at the viewer: medium-dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "🫵🏿",
    "tags": "index pointing at the viewer: dark skin tone people & body (hand-single-finger)"
  },
  {
    "char": "👍",
    "tags": "thumbs up people & body (hand-fingers-closed)"
  },
  {
    "char": "👍🏻",
    "tags": "thumbs up: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👍🏼",
    "tags": "thumbs up: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👍🏽",
    "tags": "thumbs up: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👍🏾",
    "tags": "thumbs up: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👍🏿",
    "tags": "thumbs up: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👎",
    "tags": "thumbs down people & body (hand-fingers-closed)"
  },
  {
    "char": "👎🏻",
    "tags": "thumbs down: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👎🏼",
    "tags": "thumbs down: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👎🏽",
    "tags": "thumbs down: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👎🏾",
    "tags": "thumbs down: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👎🏿",
    "tags": "thumbs down: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "✊",
    "tags": "raised fist people & body (hand-fingers-closed)"
  },
  {
    "char": "✊🏻",
    "tags": "raised fist: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "✊🏼",
    "tags": "raised fist: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "✊🏽",
    "tags": "raised fist: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "✊🏾",
    "tags": "raised fist: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "✊🏿",
    "tags": "raised fist: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👊",
    "tags": "oncoming fist people & body (hand-fingers-closed)"
  },
  {
    "char": "👊🏻",
    "tags": "oncoming fist: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👊🏼",
    "tags": "oncoming fist: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👊🏽",
    "tags": "oncoming fist: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👊🏾",
    "tags": "oncoming fist: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👊🏿",
    "tags": "oncoming fist: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛",
    "tags": "left-facing fist people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛🏻",
    "tags": "left-facing fist: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛🏼",
    "tags": "left-facing fist: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛🏽",
    "tags": "left-facing fist: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛🏾",
    "tags": "left-facing fist: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤛🏿",
    "tags": "left-facing fist: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜",
    "tags": "right-facing fist people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜🏻",
    "tags": "right-facing fist: light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜🏼",
    "tags": "right-facing fist: medium-light skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜🏽",
    "tags": "right-facing fist: medium skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜🏾",
    "tags": "right-facing fist: medium-dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "🤜🏿",
    "tags": "right-facing fist: dark skin tone people & body (hand-fingers-closed)"
  },
  {
    "char": "👏",
    "tags": "clapping hands people & body (hands)"
  },
  {
    "char": "👏🏻",
    "tags": "clapping hands: light skin tone people & body (hands)"
  },
  {
    "char": "👏🏼",
    "tags": "clapping hands: medium-light skin tone people & body (hands)"
  },
  {
    "char": "👏🏽",
    "tags": "clapping hands: medium skin tone people & body (hands)"
  },
  {
    "char": "👏🏾",
    "tags": "clapping hands: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "👏🏿",
    "tags": "clapping hands: dark skin tone people & body (hands)"
  },
  {
    "char": "🙌",
    "tags": "raising hands people & body (hands)"
  },
  {
    "char": "🙌🏻",
    "tags": "raising hands: light skin tone people & body (hands)"
  },
  {
    "char": "🙌🏼",
    "tags": "raising hands: medium-light skin tone people & body (hands)"
  },
  {
    "char": "🙌🏽",
    "tags": "raising hands: medium skin tone people & body (hands)"
  },
  {
    "char": "🙌🏾",
    "tags": "raising hands: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🙌🏿",
    "tags": "raising hands: dark skin tone people & body (hands)"
  },
  {
    "char": "🫶",
    "tags": "heart hands people & body (hands)"
  },
  {
    "char": "🫶🏻",
    "tags": "heart hands: light skin tone people & body (hands)"
  },
  {
    "char": "🫶🏼",
    "tags": "heart hands: medium-light skin tone people & body (hands)"
  },
  {
    "char": "🫶🏽",
    "tags": "heart hands: medium skin tone people & body (hands)"
  },
  {
    "char": "🫶🏾",
    "tags": "heart hands: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🫶🏿",
    "tags": "heart hands: dark skin tone people & body (hands)"
  },
  {
    "char": "👐",
    "tags": "open hands people & body (hands)"
  },
  {
    "char": "👐🏻",
    "tags": "open hands: light skin tone people & body (hands)"
  },
  {
    "char": "👐🏼",
    "tags": "open hands: medium-light skin tone people & body (hands)"
  },
  {
    "char": "👐🏽",
    "tags": "open hands: medium skin tone people & body (hands)"
  },
  {
    "char": "👐🏾",
    "tags": "open hands: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "👐🏿",
    "tags": "open hands: dark skin tone people & body (hands)"
  },
  {
    "char": "🤲",
    "tags": "palms up together people & body (hands)"
  },
  {
    "char": "🤲🏻",
    "tags": "palms up together: light skin tone people & body (hands)"
  },
  {
    "char": "🤲🏼",
    "tags": "palms up together: medium-light skin tone people & body (hands)"
  },
  {
    "char": "🤲🏽",
    "tags": "palms up together: medium skin tone people & body (hands)"
  },
  {
    "char": "🤲🏾",
    "tags": "palms up together: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🤲🏿",
    "tags": "palms up together: dark skin tone people & body (hands)"
  },
  {
    "char": "🤝",
    "tags": "handshake people & body (hands)"
  },
  {
    "char": "🤝🏻",
    "tags": "handshake: light skin tone people & body (hands)"
  },
  {
    "char": "🤝🏼",
    "tags": "handshake: medium-light skin tone people & body (hands)"
  },
  {
    "char": "🤝🏽",
    "tags": "handshake: medium skin tone people & body (hands)"
  },
  {
    "char": "🤝🏾",
    "tags": "handshake: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🤝🏿",
    "tags": "handshake: dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏻‍🫲🏼",
    "tags": "handshake: light skin tone, medium-light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏻‍🫲🏽",
    "tags": "handshake: light skin tone, medium skin tone people & body (hands)"
  },
  {
    "char": "🫱🏻‍🫲🏾",
    "tags": "handshake: light skin tone, medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏻‍🫲🏿",
    "tags": "handshake: light skin tone, dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏼‍🫲🏻",
    "tags": "handshake: medium-light skin tone, light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏼‍🫲🏽",
    "tags": "handshake: medium-light skin tone, medium skin tone people & body (hands)"
  },
  {
    "char": "🫱🏼‍🫲🏾",
    "tags": "handshake: medium-light skin tone, medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏼‍🫲🏿",
    "tags": "handshake: medium-light skin tone, dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏽‍🫲🏻",
    "tags": "handshake: medium skin tone, light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏽‍🫲🏼",
    "tags": "handshake: medium skin tone, medium-light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏽‍🫲🏾",
    "tags": "handshake: medium skin tone, medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏽‍🫲🏿",
    "tags": "handshake: medium skin tone, dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏾‍🫲🏻",
    "tags": "handshake: medium-dark skin tone, light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏾‍🫲🏼",
    "tags": "handshake: medium-dark skin tone, medium-light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏾‍🫲🏽",
    "tags": "handshake: medium-dark skin tone, medium skin tone people & body (hands)"
  },
  {
    "char": "🫱🏾‍🫲🏿",
    "tags": "handshake: medium-dark skin tone, dark skin tone people & body (hands)"
  },
  {
    "char": "🫱🏿‍🫲🏻",
    "tags": "handshake: dark skin tone, light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏿‍🫲🏼",
    "tags": "handshake: dark skin tone, medium-light skin tone people & body (hands)"
  },
  {
    "char": "🫱🏿‍🫲🏽",
    "tags": "handshake: dark skin tone, medium skin tone people & body (hands)"
  },
  {
    "char": "🫱🏿‍🫲🏾",
    "tags": "handshake: dark skin tone, medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🙏",
    "tags": "folded hands people & body (hands)"
  },
  {
    "char": "🙏🏻",
    "tags": "folded hands: light skin tone people & body (hands)"
  },
  {
    "char": "🙏🏼",
    "tags": "folded hands: medium-light skin tone people & body (hands)"
  },
  {
    "char": "🙏🏽",
    "tags": "folded hands: medium skin tone people & body (hands)"
  },
  {
    "char": "🙏🏾",
    "tags": "folded hands: medium-dark skin tone people & body (hands)"
  },
  {
    "char": "🙏🏿",
    "tags": "folded hands: dark skin tone people & body (hands)"
  },
  {
    "char": "✍️",
    "tags": "writing hand people & body (hand-prop)"
  },
  {
    "char": "✍",
    "tags": "writing hand people & body (hand-prop)"
  },
  {
    "char": "✍🏻",
    "tags": "writing hand: light skin tone people & body (hand-prop)"
  },
  {
    "char": "✍🏼",
    "tags": "writing hand: medium-light skin tone people & body (hand-prop)"
  },
  {
    "char": "✍🏽",
    "tags": "writing hand: medium skin tone people & body (hand-prop)"
  },
  {
    "char": "✍🏾",
    "tags": "writing hand: medium-dark skin tone people & body (hand-prop)"
  },
  {
    "char": "✍🏿",
    "tags": "writing hand: dark skin tone people & body (hand-prop)"
  },
  {
    "char": "💅",
    "tags": "nail polish people & body (hand-prop)"
  },
  {
    "char": "💅🏻",
    "tags": "nail polish: light skin tone people & body (hand-prop)"
  },
  {
    "char": "💅🏼",
    "tags": "nail polish: medium-light skin tone people & body (hand-prop)"
  },
  {
    "char": "💅🏽",
    "tags": "nail polish: medium skin tone people & body (hand-prop)"
  },
  {
    "char": "💅🏾",
    "tags": "nail polish: medium-dark skin tone people & body (hand-prop)"
  },
  {
    "char": "💅🏿",
    "tags": "nail polish: dark skin tone people & body (hand-prop)"
  },
  {
    "char": "🤳",
    "tags": "selfie people & body (hand-prop)"
  },
  {
    "char": "🤳🏻",
    "tags": "selfie: light skin tone people & body (hand-prop)"
  },
  {
    "char": "🤳🏼",
    "tags": "selfie: medium-light skin tone people & body (hand-prop)"
  },
  {
    "char": "🤳🏽",
    "tags": "selfie: medium skin tone people & body (hand-prop)"
  },
  {
    "char": "🤳🏾",
    "tags": "selfie: medium-dark skin tone people & body (hand-prop)"
  },
  {
    "char": "🤳🏿",
    "tags": "selfie: dark skin tone people & body (hand-prop)"
  },
  {
    "char": "💪",
    "tags": "flexed biceps people & body (body-parts)"
  },
  {
    "char": "💪🏻",
    "tags": "flexed biceps: light skin tone people & body (body-parts)"
  },
  {
    "char": "💪🏼",
    "tags": "flexed biceps: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "💪🏽",
    "tags": "flexed biceps: medium skin tone people & body (body-parts)"
  },
  {
    "char": "💪🏾",
    "tags": "flexed biceps: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "💪🏿",
    "tags": "flexed biceps: dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦾",
    "tags": "mechanical arm people & body (body-parts)"
  },
  {
    "char": "🦿",
    "tags": "mechanical leg people & body (body-parts)"
  },
  {
    "char": "🦵",
    "tags": "leg people & body (body-parts)"
  },
  {
    "char": "🦵🏻",
    "tags": "leg: light skin tone people & body (body-parts)"
  },
  {
    "char": "🦵🏼",
    "tags": "leg: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "🦵🏽",
    "tags": "leg: medium skin tone people & body (body-parts)"
  },
  {
    "char": "🦵🏾",
    "tags": "leg: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦵🏿",
    "tags": "leg: dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦶",
    "tags": "foot people & body (body-parts)"
  },
  {
    "char": "🦶🏻",
    "tags": "foot: light skin tone people & body (body-parts)"
  },
  {
    "char": "🦶🏼",
    "tags": "foot: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "🦶🏽",
    "tags": "foot: medium skin tone people & body (body-parts)"
  },
  {
    "char": "🦶🏾",
    "tags": "foot: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦶🏿",
    "tags": "foot: dark skin tone people & body (body-parts)"
  },
  {
    "char": "👂",
    "tags": "ear people & body (body-parts)"
  },
  {
    "char": "👂🏻",
    "tags": "ear: light skin tone people & body (body-parts)"
  },
  {
    "char": "👂🏼",
    "tags": "ear: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "👂🏽",
    "tags": "ear: medium skin tone people & body (body-parts)"
  },
  {
    "char": "👂🏾",
    "tags": "ear: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "👂🏿",
    "tags": "ear: dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦻",
    "tags": "ear with hearing aid people & body (body-parts)"
  },
  {
    "char": "🦻🏻",
    "tags": "ear with hearing aid: light skin tone people & body (body-parts)"
  },
  {
    "char": "🦻🏼",
    "tags": "ear with hearing aid: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "🦻🏽",
    "tags": "ear with hearing aid: medium skin tone people & body (body-parts)"
  },
  {
    "char": "🦻🏾",
    "tags": "ear with hearing aid: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "🦻🏿",
    "tags": "ear with hearing aid: dark skin tone people & body (body-parts)"
  },
  {
    "char": "👃",
    "tags": "nose people & body (body-parts)"
  },
  {
    "char": "👃🏻",
    "tags": "nose: light skin tone people & body (body-parts)"
  },
  {
    "char": "👃🏼",
    "tags": "nose: medium-light skin tone people & body (body-parts)"
  },
  {
    "char": "👃🏽",
    "tags": "nose: medium skin tone people & body (body-parts)"
  },
  {
    "char": "👃🏾",
    "tags": "nose: medium-dark skin tone people & body (body-parts)"
  },
  {
    "char": "👃🏿",
    "tags": "nose: dark skin tone people & body (body-parts)"
  },
  {
    "char": "🧠",
    "tags": "brain people & body (body-parts)"
  },
  {
    "char": "🫀",
    "tags": "anatomical heart people & body (body-parts)"
  },
  {
    "char": "🫁",
    "tags": "lungs people & body (body-parts)"
  },
  {
    "char": "🦷",
    "tags": "tooth people & body (body-parts)"
  },
  {
    "char": "🦴",
    "tags": "bone people & body (body-parts)"
  },
  {
    "char": "👀",
    "tags": "eyes people & body (body-parts)"
  },
  {
    "char": "👁️",
    "tags": "eye people & body (body-parts)"
  },
  {
    "char": "👁",
    "tags": "eye people & body (body-parts)"
  },
  {
    "char": "👅",
    "tags": "tongue people & body (body-parts)"
  },
  {
    "char": "👄",
    "tags": "mouth people & body (body-parts)"
  },
  {
    "char": "🫦",
    "tags": "biting lip people & body (body-parts)"
  },
  {
    "char": "👶",
    "tags": "baby people & body (person)"
  },
  {
    "char": "👶🏻",
    "tags": "baby: light skin tone people & body (person)"
  },
  {
    "char": "👶🏼",
    "tags": "baby: medium-light skin tone people & body (person)"
  },
  {
    "char": "👶🏽",
    "tags": "baby: medium skin tone people & body (person)"
  },
  {
    "char": "👶🏾",
    "tags": "baby: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👶🏿",
    "tags": "baby: dark skin tone people & body (person)"
  },
  {
    "char": "🧒",
    "tags": "child people & body (person)"
  },
  {
    "char": "🧒🏻",
    "tags": "child: light skin tone people & body (person)"
  },
  {
    "char": "🧒🏼",
    "tags": "child: medium-light skin tone people & body (person)"
  },
  {
    "char": "🧒🏽",
    "tags": "child: medium skin tone people & body (person)"
  },
  {
    "char": "🧒🏾",
    "tags": "child: medium-dark skin tone people & body (person)"
  },
  {
    "char": "🧒🏿",
    "tags": "child: dark skin tone people & body (person)"
  },
  {
    "char": "👦",
    "tags": "boy people & body (person)"
  },
  {
    "char": "👦🏻",
    "tags": "boy: light skin tone people & body (person)"
  },
  {
    "char": "👦🏼",
    "tags": "boy: medium-light skin tone people & body (person)"
  },
  {
    "char": "👦🏽",
    "tags": "boy: medium skin tone people & body (person)"
  },
  {
    "char": "👦🏾",
    "tags": "boy: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👦🏿",
    "tags": "boy: dark skin tone people & body (person)"
  },
  {
    "char": "👧",
    "tags": "girl people & body (person)"
  },
  {
    "char": "👧🏻",
    "tags": "girl: light skin tone people & body (person)"
  },
  {
    "char": "👧🏼",
    "tags": "girl: medium-light skin tone people & body (person)"
  },
  {
    "char": "👧🏽",
    "tags": "girl: medium skin tone people & body (person)"
  },
  {
    "char": "👧🏾",
    "tags": "girl: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👧🏿",
    "tags": "girl: dark skin tone people & body (person)"
  },
  {
    "char": "🧑",
    "tags": "person people & body (person)"
  },
  {
    "char": "🧑🏻",
    "tags": "person: light skin tone people & body (person)"
  },
  {
    "char": "🧑🏼",
    "tags": "person: medium-light skin tone people & body (person)"
  },
  {
    "char": "🧑🏽",
    "tags": "person: medium skin tone people & body (person)"
  },
  {
    "char": "🧑🏾",
    "tags": "person: medium-dark skin tone people & body (person)"
  },
  {
    "char": "🧑🏿",
    "tags": "person: dark skin tone people & body (person)"
  },
  {
    "char": "👱",
    "tags": "person: blond hair people & body (person)"
  },
  {
    "char": "👱🏻",
    "tags": "person: light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏼",
    "tags": "person: medium-light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏽",
    "tags": "person: medium skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏾",
    "tags": "person: medium-dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏿",
    "tags": "person: dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👨",
    "tags": "man people & body (person)"
  },
  {
    "char": "👨🏻",
    "tags": "man: light skin tone people & body (person)"
  },
  {
    "char": "👨🏼",
    "tags": "man: medium-light skin tone people & body (person)"
  },
  {
    "char": "👨🏽",
    "tags": "man: medium skin tone people & body (person)"
  },
  {
    "char": "👨🏾",
    "tags": "man: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👨🏿",
    "tags": "man: dark skin tone people & body (person)"
  },
  {
    "char": "🧔",
    "tags": "person: beard people & body (person)"
  },
  {
    "char": "🧔🏻",
    "tags": "person: light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏼",
    "tags": "person: medium-light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏽",
    "tags": "person: medium skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏾",
    "tags": "person: medium-dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏿",
    "tags": "person: dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔‍♂️",
    "tags": "man: beard people & body (person)"
  },
  {
    "char": "🧔‍♂",
    "tags": "man: beard people & body (person)"
  },
  {
    "char": "🧔🏻‍♂️",
    "tags": "man: light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏻‍♂",
    "tags": "man: light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏼‍♂️",
    "tags": "man: medium-light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏼‍♂",
    "tags": "man: medium-light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏽‍♂️",
    "tags": "man: medium skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏽‍♂",
    "tags": "man: medium skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏾‍♂️",
    "tags": "man: medium-dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏾‍♂",
    "tags": "man: medium-dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏿‍♂️",
    "tags": "man: dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏿‍♂",
    "tags": "man: dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔‍♀️",
    "tags": "woman: beard people & body (person)"
  },
  {
    "char": "🧔‍♀",
    "tags": "woman: beard people & body (person)"
  },
  {
    "char": "🧔🏻‍♀️",
    "tags": "woman: light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏻‍♀",
    "tags": "woman: light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏼‍♀️",
    "tags": "woman: medium-light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏼‍♀",
    "tags": "woman: medium-light skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏽‍♀️",
    "tags": "woman: medium skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏽‍♀",
    "tags": "woman: medium skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏾‍♀️",
    "tags": "woman: medium-dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏾‍♀",
    "tags": "woman: medium-dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏿‍♀️",
    "tags": "woman: dark skin tone, beard people & body (person)"
  },
  {
    "char": "🧔🏿‍♀",
    "tags": "woman: dark skin tone, beard people & body (person)"
  },
  {
    "char": "👨‍🦰",
    "tags": "man: red hair people & body (person)"
  },
  {
    "char": "👨🏻‍🦰",
    "tags": "man: light skin tone, red hair people & body (person)"
  },
  {
    "char": "👨🏼‍🦰",
    "tags": "man: medium-light skin tone, red hair people & body (person)"
  },
  {
    "char": "👨🏽‍🦰",
    "tags": "man: medium skin tone, red hair people & body (person)"
  },
  {
    "char": "👨🏾‍🦰",
    "tags": "man: medium-dark skin tone, red hair people & body (person)"
  },
  {
    "char": "👨🏿‍🦰",
    "tags": "man: dark skin tone, red hair people & body (person)"
  },
  {
    "char": "👨‍🦱",
    "tags": "man: curly hair people & body (person)"
  },
  {
    "char": "👨🏻‍🦱",
    "tags": "man: light skin tone, curly hair people & body (person)"
  },
  {
    "char": "👨🏼‍🦱",
    "tags": "man: medium-light skin tone, curly hair people & body (person)"
  },
  {
    "char": "👨🏽‍🦱",
    "tags": "man: medium skin tone, curly hair people & body (person)"
  },
  {
    "char": "👨🏾‍🦱",
    "tags": "man: medium-dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "👨🏿‍🦱",
    "tags": "man: dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "👨‍🦳",
    "tags": "man: white hair people & body (person)"
  },
  {
    "char": "👨🏻‍🦳",
    "tags": "man: light skin tone, white hair people & body (person)"
  },
  {
    "char": "👨🏼‍🦳",
    "tags": "man: medium-light skin tone, white hair people & body (person)"
  },
  {
    "char": "👨🏽‍🦳",
    "tags": "man: medium skin tone, white hair people & body (person)"
  },
  {
    "char": "👨🏾‍🦳",
    "tags": "man: medium-dark skin tone, white hair people & body (person)"
  },
  {
    "char": "👨🏿‍🦳",
    "tags": "man: dark skin tone, white hair people & body (person)"
  },
  {
    "char": "👨‍🦲",
    "tags": "man: bald people & body (person)"
  },
  {
    "char": "👨🏻‍🦲",
    "tags": "man: light skin tone, bald people & body (person)"
  },
  {
    "char": "👨🏼‍🦲",
    "tags": "man: medium-light skin tone, bald people & body (person)"
  },
  {
    "char": "👨🏽‍🦲",
    "tags": "man: medium skin tone, bald people & body (person)"
  },
  {
    "char": "👨🏾‍🦲",
    "tags": "man: medium-dark skin tone, bald people & body (person)"
  },
  {
    "char": "👨🏿‍🦲",
    "tags": "man: dark skin tone, bald people & body (person)"
  },
  {
    "char": "👩",
    "tags": "woman people & body (person)"
  },
  {
    "char": "👩🏻",
    "tags": "woman: light skin tone people & body (person)"
  },
  {
    "char": "👩🏼",
    "tags": "woman: medium-light skin tone people & body (person)"
  },
  {
    "char": "👩🏽",
    "tags": "woman: medium skin tone people & body (person)"
  },
  {
    "char": "👩🏾",
    "tags": "woman: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👩🏿",
    "tags": "woman: dark skin tone people & body (person)"
  },
  {
    "char": "👩‍🦰",
    "tags": "woman: red hair people & body (person)"
  },
  {
    "char": "👩🏻‍🦰",
    "tags": "woman: light skin tone, red hair people & body (person)"
  },
  {
    "char": "👩🏼‍🦰",
    "tags": "woman: medium-light skin tone, red hair people & body (person)"
  },
  {
    "char": "👩🏽‍🦰",
    "tags": "woman: medium skin tone, red hair people & body (person)"
  },
  {
    "char": "👩🏾‍🦰",
    "tags": "woman: medium-dark skin tone, red hair people & body (person)"
  },
  {
    "char": "👩🏿‍🦰",
    "tags": "woman: dark skin tone, red hair people & body (person)"
  },
  {
    "char": "🧑‍🦰",
    "tags": "person: red hair people & body (person)"
  },
  {
    "char": "🧑🏻‍🦰",
    "tags": "person: light skin tone, red hair people & body (person)"
  },
  {
    "char": "🧑🏼‍🦰",
    "tags": "person: medium-light skin tone, red hair people & body (person)"
  },
  {
    "char": "🧑🏽‍🦰",
    "tags": "person: medium skin tone, red hair people & body (person)"
  },
  {
    "char": "🧑🏾‍🦰",
    "tags": "person: medium-dark skin tone, red hair people & body (person)"
  },
  {
    "char": "🧑🏿‍🦰",
    "tags": "person: dark skin tone, red hair people & body (person)"
  },
  {
    "char": "👩‍🦱",
    "tags": "woman: curly hair people & body (person)"
  },
  {
    "char": "👩🏻‍🦱",
    "tags": "woman: light skin tone, curly hair people & body (person)"
  },
  {
    "char": "👩🏼‍🦱",
    "tags": "woman: medium-light skin tone, curly hair people & body (person)"
  },
  {
    "char": "👩🏽‍🦱",
    "tags": "woman: medium skin tone, curly hair people & body (person)"
  },
  {
    "char": "👩🏾‍🦱",
    "tags": "woman: medium-dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "👩🏿‍🦱",
    "tags": "woman: dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "🧑‍🦱",
    "tags": "person: curly hair people & body (person)"
  },
  {
    "char": "🧑🏻‍🦱",
    "tags": "person: light skin tone, curly hair people & body (person)"
  },
  {
    "char": "🧑🏼‍🦱",
    "tags": "person: medium-light skin tone, curly hair people & body (person)"
  },
  {
    "char": "🧑🏽‍🦱",
    "tags": "person: medium skin tone, curly hair people & body (person)"
  },
  {
    "char": "🧑🏾‍🦱",
    "tags": "person: medium-dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "🧑🏿‍🦱",
    "tags": "person: dark skin tone, curly hair people & body (person)"
  },
  {
    "char": "👩‍🦳",
    "tags": "woman: white hair people & body (person)"
  },
  {
    "char": "👩🏻‍🦳",
    "tags": "woman: light skin tone, white hair people & body (person)"
  },
  {
    "char": "👩🏼‍🦳",
    "tags": "woman: medium-light skin tone, white hair people & body (person)"
  },
  {
    "char": "👩🏽‍🦳",
    "tags": "woman: medium skin tone, white hair people & body (person)"
  },
  {
    "char": "👩🏾‍🦳",
    "tags": "woman: medium-dark skin tone, white hair people & body (person)"
  },
  {
    "char": "👩🏿‍🦳",
    "tags": "woman: dark skin tone, white hair people & body (person)"
  },
  {
    "char": "🧑‍🦳",
    "tags": "person: white hair people & body (person)"
  },
  {
    "char": "🧑🏻‍🦳",
    "tags": "person: light skin tone, white hair people & body (person)"
  },
  {
    "char": "🧑🏼‍🦳",
    "tags": "person: medium-light skin tone, white hair people & body (person)"
  },
  {
    "char": "🧑🏽‍🦳",
    "tags": "person: medium skin tone, white hair people & body (person)"
  },
  {
    "char": "🧑🏾‍🦳",
    "tags": "person: medium-dark skin tone, white hair people & body (person)"
  },
  {
    "char": "🧑🏿‍🦳",
    "tags": "person: dark skin tone, white hair people & body (person)"
  },
  {
    "char": "👩‍🦲",
    "tags": "woman: bald people & body (person)"
  },
  {
    "char": "👩🏻‍🦲",
    "tags": "woman: light skin tone, bald people & body (person)"
  },
  {
    "char": "👩🏼‍🦲",
    "tags": "woman: medium-light skin tone, bald people & body (person)"
  },
  {
    "char": "👩🏽‍🦲",
    "tags": "woman: medium skin tone, bald people & body (person)"
  },
  {
    "char": "👩🏾‍🦲",
    "tags": "woman: medium-dark skin tone, bald people & body (person)"
  },
  {
    "char": "👩🏿‍🦲",
    "tags": "woman: dark skin tone, bald people & body (person)"
  },
  {
    "char": "🧑‍🦲",
    "tags": "person: bald people & body (person)"
  },
  {
    "char": "🧑🏻‍🦲",
    "tags": "person: light skin tone, bald people & body (person)"
  },
  {
    "char": "🧑🏼‍🦲",
    "tags": "person: medium-light skin tone, bald people & body (person)"
  },
  {
    "char": "🧑🏽‍🦲",
    "tags": "person: medium skin tone, bald people & body (person)"
  },
  {
    "char": "🧑🏾‍🦲",
    "tags": "person: medium-dark skin tone, bald people & body (person)"
  },
  {
    "char": "🧑🏿‍🦲",
    "tags": "person: dark skin tone, bald people & body (person)"
  },
  {
    "char": "👱‍♀️",
    "tags": "woman: blond hair people & body (person)"
  },
  {
    "char": "👱‍♀",
    "tags": "woman: blond hair people & body (person)"
  },
  {
    "char": "👱🏻‍♀️",
    "tags": "woman: light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏻‍♀",
    "tags": "woman: light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏼‍♀️",
    "tags": "woman: medium-light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏼‍♀",
    "tags": "woman: medium-light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏽‍♀️",
    "tags": "woman: medium skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏽‍♀",
    "tags": "woman: medium skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏾‍♀️",
    "tags": "woman: medium-dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏾‍♀",
    "tags": "woman: medium-dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏿‍♀️",
    "tags": "woman: dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏿‍♀",
    "tags": "woman: dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱‍♂️",
    "tags": "man: blond hair people & body (person)"
  },
  {
    "char": "👱‍♂",
    "tags": "man: blond hair people & body (person)"
  },
  {
    "char": "👱🏻‍♂️",
    "tags": "man: light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏻‍♂",
    "tags": "man: light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏼‍♂️",
    "tags": "man: medium-light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏼‍♂",
    "tags": "man: medium-light skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏽‍♂️",
    "tags": "man: medium skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏽‍♂",
    "tags": "man: medium skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏾‍♂️",
    "tags": "man: medium-dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏾‍♂",
    "tags": "man: medium-dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏿‍♂️",
    "tags": "man: dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "👱🏿‍♂",
    "tags": "man: dark skin tone, blond hair people & body (person)"
  },
  {
    "char": "🧓",
    "tags": "older person people & body (person)"
  },
  {
    "char": "🧓🏻",
    "tags": "older person: light skin tone people & body (person)"
  },
  {
    "char": "🧓🏼",
    "tags": "older person: medium-light skin tone people & body (person)"
  },
  {
    "char": "🧓🏽",
    "tags": "older person: medium skin tone people & body (person)"
  },
  {
    "char": "🧓🏾",
    "tags": "older person: medium-dark skin tone people & body (person)"
  },
  {
    "char": "🧓🏿",
    "tags": "older person: dark skin tone people & body (person)"
  },
  {
    "char": "👴",
    "tags": "old man people & body (person)"
  },
  {
    "char": "👴🏻",
    "tags": "old man: light skin tone people & body (person)"
  },
  {
    "char": "👴🏼",
    "tags": "old man: medium-light skin tone people & body (person)"
  },
  {
    "char": "👴🏽",
    "tags": "old man: medium skin tone people & body (person)"
  },
  {
    "char": "👴🏾",
    "tags": "old man: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👴🏿",
    "tags": "old man: dark skin tone people & body (person)"
  },
  {
    "char": "👵",
    "tags": "old woman people & body (person)"
  },
  {
    "char": "👵🏻",
    "tags": "old woman: light skin tone people & body (person)"
  },
  {
    "char": "👵🏼",
    "tags": "old woman: medium-light skin tone people & body (person)"
  },
  {
    "char": "👵🏽",
    "tags": "old woman: medium skin tone people & body (person)"
  },
  {
    "char": "👵🏾",
    "tags": "old woman: medium-dark skin tone people & body (person)"
  },
  {
    "char": "👵🏿",
    "tags": "old woman: dark skin tone people & body (person)"
  },
  {
    "char": "🙍",
    "tags": "person frowning people & body (person-gesture)"
  },
  {
    "char": "🙍🏻",
    "tags": "person frowning: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏼",
    "tags": "person frowning: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏽",
    "tags": "person frowning: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏾",
    "tags": "person frowning: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏿",
    "tags": "person frowning: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍‍♂️",
    "tags": "man frowning people & body (person-gesture)"
  },
  {
    "char": "🙍‍♂",
    "tags": "man frowning people & body (person-gesture)"
  },
  {
    "char": "🙍🏻‍♂️",
    "tags": "man frowning: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏻‍♂",
    "tags": "man frowning: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏼‍♂️",
    "tags": "man frowning: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏼‍♂",
    "tags": "man frowning: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏽‍♂️",
    "tags": "man frowning: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏽‍♂",
    "tags": "man frowning: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏾‍♂️",
    "tags": "man frowning: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏾‍♂",
    "tags": "man frowning: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏿‍♂️",
    "tags": "man frowning: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏿‍♂",
    "tags": "man frowning: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍‍♀️",
    "tags": "woman frowning people & body (person-gesture)"
  },
  {
    "char": "🙍‍♀",
    "tags": "woman frowning people & body (person-gesture)"
  },
  {
    "char": "🙍🏻‍♀️",
    "tags": "woman frowning: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏻‍♀",
    "tags": "woman frowning: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏼‍♀️",
    "tags": "woman frowning: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏼‍♀",
    "tags": "woman frowning: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏽‍♀️",
    "tags": "woman frowning: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏽‍♀",
    "tags": "woman frowning: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏾‍♀️",
    "tags": "woman frowning: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏾‍♀",
    "tags": "woman frowning: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏿‍♀️",
    "tags": "woman frowning: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙍🏿‍♀",
    "tags": "woman frowning: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎",
    "tags": "person pouting people & body (person-gesture)"
  },
  {
    "char": "🙎🏻",
    "tags": "person pouting: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏼",
    "tags": "person pouting: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏽",
    "tags": "person pouting: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏾",
    "tags": "person pouting: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏿",
    "tags": "person pouting: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎‍♂️",
    "tags": "man pouting people & body (person-gesture)"
  },
  {
    "char": "🙎‍♂",
    "tags": "man pouting people & body (person-gesture)"
  },
  {
    "char": "🙎🏻‍♂️",
    "tags": "man pouting: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏻‍♂",
    "tags": "man pouting: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏼‍♂️",
    "tags": "man pouting: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏼‍♂",
    "tags": "man pouting: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏽‍♂️",
    "tags": "man pouting: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏽‍♂",
    "tags": "man pouting: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏾‍♂️",
    "tags": "man pouting: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏾‍♂",
    "tags": "man pouting: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏿‍♂️",
    "tags": "man pouting: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏿‍♂",
    "tags": "man pouting: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎‍♀️",
    "tags": "woman pouting people & body (person-gesture)"
  },
  {
    "char": "🙎‍♀",
    "tags": "woman pouting people & body (person-gesture)"
  },
  {
    "char": "🙎🏻‍♀️",
    "tags": "woman pouting: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏻‍♀",
    "tags": "woman pouting: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏼‍♀️",
    "tags": "woman pouting: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏼‍♀",
    "tags": "woman pouting: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏽‍♀️",
    "tags": "woman pouting: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏽‍♀",
    "tags": "woman pouting: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏾‍♀️",
    "tags": "woman pouting: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏾‍♀",
    "tags": "woman pouting: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏿‍♀️",
    "tags": "woman pouting: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙎🏿‍♀",
    "tags": "woman pouting: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅",
    "tags": "person gesturing no people & body (person-gesture)"
  },
  {
    "char": "🙅🏻",
    "tags": "person gesturing no: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏼",
    "tags": "person gesturing no: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏽",
    "tags": "person gesturing no: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏾",
    "tags": "person gesturing no: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏿",
    "tags": "person gesturing no: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅‍♂️",
    "tags": "man gesturing no people & body (person-gesture)"
  },
  {
    "char": "🙅‍♂",
    "tags": "man gesturing no people & body (person-gesture)"
  },
  {
    "char": "🙅🏻‍♂️",
    "tags": "man gesturing no: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏻‍♂",
    "tags": "man gesturing no: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏼‍♂️",
    "tags": "man gesturing no: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏼‍♂",
    "tags": "man gesturing no: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏽‍♂️",
    "tags": "man gesturing no: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏽‍♂",
    "tags": "man gesturing no: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏾‍♂️",
    "tags": "man gesturing no: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏾‍♂",
    "tags": "man gesturing no: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏿‍♂️",
    "tags": "man gesturing no: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏿‍♂",
    "tags": "man gesturing no: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅‍♀️",
    "tags": "woman gesturing no people & body (person-gesture)"
  },
  {
    "char": "🙅‍♀",
    "tags": "woman gesturing no people & body (person-gesture)"
  },
  {
    "char": "🙅🏻‍♀️",
    "tags": "woman gesturing no: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏻‍♀",
    "tags": "woman gesturing no: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏼‍♀️",
    "tags": "woman gesturing no: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏼‍♀",
    "tags": "woman gesturing no: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏽‍♀️",
    "tags": "woman gesturing no: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏽‍♀",
    "tags": "woman gesturing no: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏾‍♀️",
    "tags": "woman gesturing no: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏾‍♀",
    "tags": "woman gesturing no: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏿‍♀️",
    "tags": "woman gesturing no: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙅🏿‍♀",
    "tags": "woman gesturing no: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆",
    "tags": "person gesturing ok people & body (person-gesture)"
  },
  {
    "char": "🙆🏻",
    "tags": "person gesturing ok: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏼",
    "tags": "person gesturing ok: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏽",
    "tags": "person gesturing ok: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏾",
    "tags": "person gesturing ok: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏿",
    "tags": "person gesturing ok: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆‍♂️",
    "tags": "man gesturing ok people & body (person-gesture)"
  },
  {
    "char": "🙆‍♂",
    "tags": "man gesturing ok people & body (person-gesture)"
  },
  {
    "char": "🙆🏻‍♂️",
    "tags": "man gesturing ok: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏻‍♂",
    "tags": "man gesturing ok: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏼‍♂️",
    "tags": "man gesturing ok: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏼‍♂",
    "tags": "man gesturing ok: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏽‍♂️",
    "tags": "man gesturing ok: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏽‍♂",
    "tags": "man gesturing ok: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏾‍♂️",
    "tags": "man gesturing ok: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏾‍♂",
    "tags": "man gesturing ok: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏿‍♂️",
    "tags": "man gesturing ok: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏿‍♂",
    "tags": "man gesturing ok: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆‍♀️",
    "tags": "woman gesturing ok people & body (person-gesture)"
  },
  {
    "char": "🙆‍♀",
    "tags": "woman gesturing ok people & body (person-gesture)"
  },
  {
    "char": "🙆🏻‍♀️",
    "tags": "woman gesturing ok: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏻‍♀",
    "tags": "woman gesturing ok: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏼‍♀️",
    "tags": "woman gesturing ok: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏼‍♀",
    "tags": "woman gesturing ok: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏽‍♀️",
    "tags": "woman gesturing ok: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏽‍♀",
    "tags": "woman gesturing ok: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏾‍♀️",
    "tags": "woman gesturing ok: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏾‍♀",
    "tags": "woman gesturing ok: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏿‍♀️",
    "tags": "woman gesturing ok: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙆🏿‍♀",
    "tags": "woman gesturing ok: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁",
    "tags": "person tipping hand people & body (person-gesture)"
  },
  {
    "char": "💁🏻",
    "tags": "person tipping hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏼",
    "tags": "person tipping hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏽",
    "tags": "person tipping hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏾",
    "tags": "person tipping hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏿",
    "tags": "person tipping hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁‍♂️",
    "tags": "man tipping hand people & body (person-gesture)"
  },
  {
    "char": "💁‍♂",
    "tags": "man tipping hand people & body (person-gesture)"
  },
  {
    "char": "💁🏻‍♂️",
    "tags": "man tipping hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏻‍♂",
    "tags": "man tipping hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏼‍♂️",
    "tags": "man tipping hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏼‍♂",
    "tags": "man tipping hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏽‍♂️",
    "tags": "man tipping hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏽‍♂",
    "tags": "man tipping hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏾‍♂️",
    "tags": "man tipping hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏾‍♂",
    "tags": "man tipping hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏿‍♂️",
    "tags": "man tipping hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏿‍♂",
    "tags": "man tipping hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁‍♀️",
    "tags": "woman tipping hand people & body (person-gesture)"
  },
  {
    "char": "💁‍♀",
    "tags": "woman tipping hand people & body (person-gesture)"
  },
  {
    "char": "💁🏻‍♀️",
    "tags": "woman tipping hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏻‍♀",
    "tags": "woman tipping hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏼‍♀️",
    "tags": "woman tipping hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏼‍♀",
    "tags": "woman tipping hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏽‍♀️",
    "tags": "woman tipping hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏽‍♀",
    "tags": "woman tipping hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏾‍♀️",
    "tags": "woman tipping hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏾‍♀",
    "tags": "woman tipping hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏿‍♀️",
    "tags": "woman tipping hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "💁🏿‍♀",
    "tags": "woman tipping hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋",
    "tags": "person raising hand people & body (person-gesture)"
  },
  {
    "char": "🙋🏻",
    "tags": "person raising hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏼",
    "tags": "person raising hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏽",
    "tags": "person raising hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏾",
    "tags": "person raising hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏿",
    "tags": "person raising hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋‍♂️",
    "tags": "man raising hand people & body (person-gesture)"
  },
  {
    "char": "🙋‍♂",
    "tags": "man raising hand people & body (person-gesture)"
  },
  {
    "char": "🙋🏻‍♂️",
    "tags": "man raising hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏻‍♂",
    "tags": "man raising hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏼‍♂️",
    "tags": "man raising hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏼‍♂",
    "tags": "man raising hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏽‍♂️",
    "tags": "man raising hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏽‍♂",
    "tags": "man raising hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏾‍♂️",
    "tags": "man raising hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏾‍♂",
    "tags": "man raising hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏿‍♂️",
    "tags": "man raising hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏿‍♂",
    "tags": "man raising hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋‍♀️",
    "tags": "woman raising hand people & body (person-gesture)"
  },
  {
    "char": "🙋‍♀",
    "tags": "woman raising hand people & body (person-gesture)"
  },
  {
    "char": "🙋🏻‍♀️",
    "tags": "woman raising hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏻‍♀",
    "tags": "woman raising hand: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏼‍♀️",
    "tags": "woman raising hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏼‍♀",
    "tags": "woman raising hand: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏽‍♀️",
    "tags": "woman raising hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏽‍♀",
    "tags": "woman raising hand: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏾‍♀️",
    "tags": "woman raising hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏾‍♀",
    "tags": "woman raising hand: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏿‍♀️",
    "tags": "woman raising hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙋🏿‍♀",
    "tags": "woman raising hand: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏",
    "tags": "deaf person people & body (person-gesture)"
  },
  {
    "char": "🧏🏻",
    "tags": "deaf person: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏼",
    "tags": "deaf person: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏽",
    "tags": "deaf person: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏾",
    "tags": "deaf person: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏿",
    "tags": "deaf person: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏‍♂️",
    "tags": "deaf man people & body (person-gesture)"
  },
  {
    "char": "🧏‍♂",
    "tags": "deaf man people & body (person-gesture)"
  },
  {
    "char": "🧏🏻‍♂️",
    "tags": "deaf man: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏻‍♂",
    "tags": "deaf man: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏼‍♂️",
    "tags": "deaf man: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏼‍♂",
    "tags": "deaf man: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏽‍♂️",
    "tags": "deaf man: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏽‍♂",
    "tags": "deaf man: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏾‍♂️",
    "tags": "deaf man: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏾‍♂",
    "tags": "deaf man: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏿‍♂️",
    "tags": "deaf man: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏿‍♂",
    "tags": "deaf man: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏‍♀️",
    "tags": "deaf woman people & body (person-gesture)"
  },
  {
    "char": "🧏‍♀",
    "tags": "deaf woman people & body (person-gesture)"
  },
  {
    "char": "🧏🏻‍♀️",
    "tags": "deaf woman: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏻‍♀",
    "tags": "deaf woman: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏼‍♀️",
    "tags": "deaf woman: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏼‍♀",
    "tags": "deaf woman: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏽‍♀️",
    "tags": "deaf woman: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏽‍♀",
    "tags": "deaf woman: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏾‍♀️",
    "tags": "deaf woman: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏾‍♀",
    "tags": "deaf woman: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏿‍♀️",
    "tags": "deaf woman: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧏🏿‍♀",
    "tags": "deaf woman: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇",
    "tags": "person bowing people & body (person-gesture)"
  },
  {
    "char": "🙇🏻",
    "tags": "person bowing: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏼",
    "tags": "person bowing: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏽",
    "tags": "person bowing: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏾",
    "tags": "person bowing: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏿",
    "tags": "person bowing: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇‍♂️",
    "tags": "man bowing people & body (person-gesture)"
  },
  {
    "char": "🙇‍♂",
    "tags": "man bowing people & body (person-gesture)"
  },
  {
    "char": "🙇🏻‍♂️",
    "tags": "man bowing: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏻‍♂",
    "tags": "man bowing: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏼‍♂️",
    "tags": "man bowing: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏼‍♂",
    "tags": "man bowing: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏽‍♂️",
    "tags": "man bowing: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏽‍♂",
    "tags": "man bowing: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏾‍♂️",
    "tags": "man bowing: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏾‍♂",
    "tags": "man bowing: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏿‍♂️",
    "tags": "man bowing: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏿‍♂",
    "tags": "man bowing: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇‍♀️",
    "tags": "woman bowing people & body (person-gesture)"
  },
  {
    "char": "🙇‍♀",
    "tags": "woman bowing people & body (person-gesture)"
  },
  {
    "char": "🙇🏻‍♀️",
    "tags": "woman bowing: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏻‍♀",
    "tags": "woman bowing: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏼‍♀️",
    "tags": "woman bowing: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏼‍♀",
    "tags": "woman bowing: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏽‍♀️",
    "tags": "woman bowing: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏽‍♀",
    "tags": "woman bowing: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏾‍♀️",
    "tags": "woman bowing: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏾‍♀",
    "tags": "woman bowing: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏿‍♀️",
    "tags": "woman bowing: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🙇🏿‍♀",
    "tags": "woman bowing: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦",
    "tags": "person facepalming people & body (person-gesture)"
  },
  {
    "char": "🤦🏻",
    "tags": "person facepalming: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏼",
    "tags": "person facepalming: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏽",
    "tags": "person facepalming: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏾",
    "tags": "person facepalming: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏿",
    "tags": "person facepalming: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦‍♂️",
    "tags": "man facepalming people & body (person-gesture)"
  },
  {
    "char": "🤦‍♂",
    "tags": "man facepalming people & body (person-gesture)"
  },
  {
    "char": "🤦🏻‍♂️",
    "tags": "man facepalming: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏻‍♂",
    "tags": "man facepalming: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏼‍♂️",
    "tags": "man facepalming: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏼‍♂",
    "tags": "man facepalming: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏽‍♂️",
    "tags": "man facepalming: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏽‍♂",
    "tags": "man facepalming: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏾‍♂️",
    "tags": "man facepalming: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏾‍♂",
    "tags": "man facepalming: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏿‍♂️",
    "tags": "man facepalming: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏿‍♂",
    "tags": "man facepalming: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦‍♀️",
    "tags": "woman facepalming people & body (person-gesture)"
  },
  {
    "char": "🤦‍♀",
    "tags": "woman facepalming people & body (person-gesture)"
  },
  {
    "char": "🤦🏻‍♀️",
    "tags": "woman facepalming: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏻‍♀",
    "tags": "woman facepalming: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏼‍♀️",
    "tags": "woman facepalming: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏼‍♀",
    "tags": "woman facepalming: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏽‍♀️",
    "tags": "woman facepalming: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏽‍♀",
    "tags": "woman facepalming: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏾‍♀️",
    "tags": "woman facepalming: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏾‍♀",
    "tags": "woman facepalming: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏿‍♀️",
    "tags": "woman facepalming: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤦🏿‍♀",
    "tags": "woman facepalming: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷",
    "tags": "person shrugging people & body (person-gesture)"
  },
  {
    "char": "🤷🏻",
    "tags": "person shrugging: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏼",
    "tags": "person shrugging: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏽",
    "tags": "person shrugging: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏾",
    "tags": "person shrugging: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏿",
    "tags": "person shrugging: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷‍♂️",
    "tags": "man shrugging people & body (person-gesture)"
  },
  {
    "char": "🤷‍♂",
    "tags": "man shrugging people & body (person-gesture)"
  },
  {
    "char": "🤷🏻‍♂️",
    "tags": "man shrugging: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏻‍♂",
    "tags": "man shrugging: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏼‍♂️",
    "tags": "man shrugging: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏼‍♂",
    "tags": "man shrugging: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏽‍♂️",
    "tags": "man shrugging: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏽‍♂",
    "tags": "man shrugging: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏾‍♂️",
    "tags": "man shrugging: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏾‍♂",
    "tags": "man shrugging: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏿‍♂️",
    "tags": "man shrugging: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏿‍♂",
    "tags": "man shrugging: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷‍♀️",
    "tags": "woman shrugging people & body (person-gesture)"
  },
  {
    "char": "🤷‍♀",
    "tags": "woman shrugging people & body (person-gesture)"
  },
  {
    "char": "🤷🏻‍♀️",
    "tags": "woman shrugging: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏻‍♀",
    "tags": "woman shrugging: light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏼‍♀️",
    "tags": "woman shrugging: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏼‍♀",
    "tags": "woman shrugging: medium-light skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏽‍♀️",
    "tags": "woman shrugging: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏽‍♀",
    "tags": "woman shrugging: medium skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏾‍♀️",
    "tags": "woman shrugging: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏾‍♀",
    "tags": "woman shrugging: medium-dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏿‍♀️",
    "tags": "woman shrugging: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🤷🏿‍♀",
    "tags": "woman shrugging: dark skin tone people & body (person-gesture)"
  },
  {
    "char": "🧑‍⚕️",
    "tags": "health worker people & body (person-role)"
  },
  {
    "char": "🧑‍⚕",
    "tags": "health worker people & body (person-role)"
  },
  {
    "char": "🧑🏻‍⚕️",
    "tags": "health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏻‍⚕",
    "tags": "health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍⚕️",
    "tags": "health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍⚕",
    "tags": "health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍⚕️",
    "tags": "health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍⚕",
    "tags": "health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍⚕️",
    "tags": "health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍⚕",
    "tags": "health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍⚕️",
    "tags": "health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍⚕",
    "tags": "health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍⚕️",
    "tags": "man health worker people & body (person-role)"
  },
  {
    "char": "👨‍⚕",
    "tags": "man health worker people & body (person-role)"
  },
  {
    "char": "👨🏻‍⚕️",
    "tags": "man health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏻‍⚕",
    "tags": "man health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍⚕️",
    "tags": "man health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍⚕",
    "tags": "man health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍⚕️",
    "tags": "man health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍⚕",
    "tags": "man health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍⚕️",
    "tags": "man health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍⚕",
    "tags": "man health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍⚕️",
    "tags": "man health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍⚕",
    "tags": "man health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍⚕️",
    "tags": "woman health worker people & body (person-role)"
  },
  {
    "char": "👩‍⚕",
    "tags": "woman health worker people & body (person-role)"
  },
  {
    "char": "👩🏻‍⚕️",
    "tags": "woman health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏻‍⚕",
    "tags": "woman health worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍⚕️",
    "tags": "woman health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍⚕",
    "tags": "woman health worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍⚕️",
    "tags": "woman health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍⚕",
    "tags": "woman health worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍⚕️",
    "tags": "woman health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍⚕",
    "tags": "woman health worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍⚕️",
    "tags": "woman health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍⚕",
    "tags": "woman health worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🎓",
    "tags": "student people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🎓",
    "tags": "student: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🎓",
    "tags": "student: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🎓",
    "tags": "student: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🎓",
    "tags": "student: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🎓",
    "tags": "student: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🎓",
    "tags": "man student people & body (person-role)"
  },
  {
    "char": "👨🏻‍🎓",
    "tags": "man student: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🎓",
    "tags": "man student: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🎓",
    "tags": "man student: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🎓",
    "tags": "man student: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🎓",
    "tags": "man student: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🎓",
    "tags": "woman student people & body (person-role)"
  },
  {
    "char": "👩🏻‍🎓",
    "tags": "woman student: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🎓",
    "tags": "woman student: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🎓",
    "tags": "woman student: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🎓",
    "tags": "woman student: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🎓",
    "tags": "woman student: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🏫",
    "tags": "teacher people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🏫",
    "tags": "teacher: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🏫",
    "tags": "teacher: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🏫",
    "tags": "teacher: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🏫",
    "tags": "teacher: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🏫",
    "tags": "teacher: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🏫",
    "tags": "man teacher people & body (person-role)"
  },
  {
    "char": "👨🏻‍🏫",
    "tags": "man teacher: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🏫",
    "tags": "man teacher: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🏫",
    "tags": "man teacher: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🏫",
    "tags": "man teacher: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🏫",
    "tags": "man teacher: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🏫",
    "tags": "woman teacher people & body (person-role)"
  },
  {
    "char": "👩🏻‍🏫",
    "tags": "woman teacher: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🏫",
    "tags": "woman teacher: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🏫",
    "tags": "woman teacher: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🏫",
    "tags": "woman teacher: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🏫",
    "tags": "woman teacher: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍⚖️",
    "tags": "judge people & body (person-role)"
  },
  {
    "char": "🧑‍⚖",
    "tags": "judge people & body (person-role)"
  },
  {
    "char": "🧑🏻‍⚖️",
    "tags": "judge: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏻‍⚖",
    "tags": "judge: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍⚖️",
    "tags": "judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍⚖",
    "tags": "judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍⚖️",
    "tags": "judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍⚖",
    "tags": "judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍⚖️",
    "tags": "judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍⚖",
    "tags": "judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍⚖️",
    "tags": "judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍⚖",
    "tags": "judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍⚖️",
    "tags": "man judge people & body (person-role)"
  },
  {
    "char": "👨‍⚖",
    "tags": "man judge people & body (person-role)"
  },
  {
    "char": "👨🏻‍⚖️",
    "tags": "man judge: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏻‍⚖",
    "tags": "man judge: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍⚖️",
    "tags": "man judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍⚖",
    "tags": "man judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍⚖️",
    "tags": "man judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍⚖",
    "tags": "man judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍⚖️",
    "tags": "man judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍⚖",
    "tags": "man judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍⚖️",
    "tags": "man judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍⚖",
    "tags": "man judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍⚖️",
    "tags": "woman judge people & body (person-role)"
  },
  {
    "char": "👩‍⚖",
    "tags": "woman judge people & body (person-role)"
  },
  {
    "char": "👩🏻‍⚖️",
    "tags": "woman judge: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏻‍⚖",
    "tags": "woman judge: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍⚖️",
    "tags": "woman judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍⚖",
    "tags": "woman judge: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍⚖️",
    "tags": "woman judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍⚖",
    "tags": "woman judge: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍⚖️",
    "tags": "woman judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍⚖",
    "tags": "woman judge: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍⚖️",
    "tags": "woman judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍⚖",
    "tags": "woman judge: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🌾",
    "tags": "farmer people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🌾",
    "tags": "farmer: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🌾",
    "tags": "farmer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🌾",
    "tags": "farmer: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🌾",
    "tags": "farmer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🌾",
    "tags": "farmer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🌾",
    "tags": "man farmer people & body (person-role)"
  },
  {
    "char": "👨🏻‍🌾",
    "tags": "man farmer: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🌾",
    "tags": "man farmer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🌾",
    "tags": "man farmer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🌾",
    "tags": "man farmer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🌾",
    "tags": "man farmer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🌾",
    "tags": "woman farmer people & body (person-role)"
  },
  {
    "char": "👩🏻‍🌾",
    "tags": "woman farmer: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🌾",
    "tags": "woman farmer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🌾",
    "tags": "woman farmer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🌾",
    "tags": "woman farmer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🌾",
    "tags": "woman farmer: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🍳",
    "tags": "cook people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🍳",
    "tags": "cook: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🍳",
    "tags": "cook: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🍳",
    "tags": "cook: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🍳",
    "tags": "cook: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🍳",
    "tags": "cook: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🍳",
    "tags": "man cook people & body (person-role)"
  },
  {
    "char": "👨🏻‍🍳",
    "tags": "man cook: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🍳",
    "tags": "man cook: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🍳",
    "tags": "man cook: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🍳",
    "tags": "man cook: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🍳",
    "tags": "man cook: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🍳",
    "tags": "woman cook people & body (person-role)"
  },
  {
    "char": "👩🏻‍🍳",
    "tags": "woman cook: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🍳",
    "tags": "woman cook: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🍳",
    "tags": "woman cook: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🍳",
    "tags": "woman cook: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🍳",
    "tags": "woman cook: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🔧",
    "tags": "mechanic people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🔧",
    "tags": "mechanic: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🔧",
    "tags": "mechanic: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🔧",
    "tags": "mechanic: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🔧",
    "tags": "mechanic: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🔧",
    "tags": "mechanic: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🔧",
    "tags": "man mechanic people & body (person-role)"
  },
  {
    "char": "👨🏻‍🔧",
    "tags": "man mechanic: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🔧",
    "tags": "man mechanic: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🔧",
    "tags": "man mechanic: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🔧",
    "tags": "man mechanic: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🔧",
    "tags": "man mechanic: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🔧",
    "tags": "woman mechanic people & body (person-role)"
  },
  {
    "char": "👩🏻‍🔧",
    "tags": "woman mechanic: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🔧",
    "tags": "woman mechanic: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🔧",
    "tags": "woman mechanic: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🔧",
    "tags": "woman mechanic: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🔧",
    "tags": "woman mechanic: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🏭",
    "tags": "factory worker people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🏭",
    "tags": "factory worker: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🏭",
    "tags": "factory worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🏭",
    "tags": "factory worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🏭",
    "tags": "factory worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🏭",
    "tags": "factory worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🏭",
    "tags": "man factory worker people & body (person-role)"
  },
  {
    "char": "👨🏻‍🏭",
    "tags": "man factory worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🏭",
    "tags": "man factory worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🏭",
    "tags": "man factory worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🏭",
    "tags": "man factory worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🏭",
    "tags": "man factory worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🏭",
    "tags": "woman factory worker people & body (person-role)"
  },
  {
    "char": "👩🏻‍🏭",
    "tags": "woman factory worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🏭",
    "tags": "woman factory worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🏭",
    "tags": "woman factory worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🏭",
    "tags": "woman factory worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🏭",
    "tags": "woman factory worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍💼",
    "tags": "office worker people & body (person-role)"
  },
  {
    "char": "🧑🏻‍💼",
    "tags": "office worker: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍💼",
    "tags": "office worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍💼",
    "tags": "office worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍💼",
    "tags": "office worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍💼",
    "tags": "office worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍💼",
    "tags": "man office worker people & body (person-role)"
  },
  {
    "char": "👨🏻‍💼",
    "tags": "man office worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍💼",
    "tags": "man office worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍💼",
    "tags": "man office worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍💼",
    "tags": "man office worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍💼",
    "tags": "man office worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍💼",
    "tags": "woman office worker people & body (person-role)"
  },
  {
    "char": "👩🏻‍💼",
    "tags": "woman office worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍💼",
    "tags": "woman office worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍💼",
    "tags": "woman office worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍💼",
    "tags": "woman office worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍💼",
    "tags": "woman office worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🔬",
    "tags": "scientist people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🔬",
    "tags": "scientist: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🔬",
    "tags": "scientist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🔬",
    "tags": "scientist: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🔬",
    "tags": "scientist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🔬",
    "tags": "scientist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🔬",
    "tags": "man scientist people & body (person-role)"
  },
  {
    "char": "👨🏻‍🔬",
    "tags": "man scientist: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🔬",
    "tags": "man scientist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🔬",
    "tags": "man scientist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🔬",
    "tags": "man scientist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🔬",
    "tags": "man scientist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🔬",
    "tags": "woman scientist people & body (person-role)"
  },
  {
    "char": "👩🏻‍🔬",
    "tags": "woman scientist: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🔬",
    "tags": "woman scientist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🔬",
    "tags": "woman scientist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🔬",
    "tags": "woman scientist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🔬",
    "tags": "woman scientist: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍💻",
    "tags": "technologist people & body (person-role)"
  },
  {
    "char": "🧑🏻‍💻",
    "tags": "technologist: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍💻",
    "tags": "technologist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍💻",
    "tags": "technologist: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍💻",
    "tags": "technologist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍💻",
    "tags": "technologist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍💻",
    "tags": "man technologist people & body (person-role)"
  },
  {
    "char": "👨🏻‍💻",
    "tags": "man technologist: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍💻",
    "tags": "man technologist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍💻",
    "tags": "man technologist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍💻",
    "tags": "man technologist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍💻",
    "tags": "man technologist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍💻",
    "tags": "woman technologist people & body (person-role)"
  },
  {
    "char": "👩🏻‍💻",
    "tags": "woman technologist: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍💻",
    "tags": "woman technologist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍💻",
    "tags": "woman technologist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍💻",
    "tags": "woman technologist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍💻",
    "tags": "woman technologist: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🎤",
    "tags": "singer people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🎤",
    "tags": "singer: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🎤",
    "tags": "singer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🎤",
    "tags": "singer: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🎤",
    "tags": "singer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🎤",
    "tags": "singer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🎤",
    "tags": "man singer people & body (person-role)"
  },
  {
    "char": "👨🏻‍🎤",
    "tags": "man singer: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🎤",
    "tags": "man singer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🎤",
    "tags": "man singer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🎤",
    "tags": "man singer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🎤",
    "tags": "man singer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🎤",
    "tags": "woman singer people & body (person-role)"
  },
  {
    "char": "👩🏻‍🎤",
    "tags": "woman singer: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🎤",
    "tags": "woman singer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🎤",
    "tags": "woman singer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🎤",
    "tags": "woman singer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🎤",
    "tags": "woman singer: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🎨",
    "tags": "artist people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🎨",
    "tags": "artist: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🎨",
    "tags": "artist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🎨",
    "tags": "artist: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🎨",
    "tags": "artist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🎨",
    "tags": "artist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🎨",
    "tags": "man artist people & body (person-role)"
  },
  {
    "char": "👨🏻‍🎨",
    "tags": "man artist: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🎨",
    "tags": "man artist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🎨",
    "tags": "man artist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🎨",
    "tags": "man artist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🎨",
    "tags": "man artist: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🎨",
    "tags": "woman artist people & body (person-role)"
  },
  {
    "char": "👩🏻‍🎨",
    "tags": "woman artist: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🎨",
    "tags": "woman artist: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🎨",
    "tags": "woman artist: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🎨",
    "tags": "woman artist: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🎨",
    "tags": "woman artist: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍✈️",
    "tags": "pilot people & body (person-role)"
  },
  {
    "char": "🧑‍✈",
    "tags": "pilot people & body (person-role)"
  },
  {
    "char": "🧑🏻‍✈️",
    "tags": "pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏻‍✈",
    "tags": "pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍✈️",
    "tags": "pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍✈",
    "tags": "pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍✈️",
    "tags": "pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍✈",
    "tags": "pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍✈️",
    "tags": "pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍✈",
    "tags": "pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍✈️",
    "tags": "pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍✈",
    "tags": "pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍✈️",
    "tags": "man pilot people & body (person-role)"
  },
  {
    "char": "👨‍✈",
    "tags": "man pilot people & body (person-role)"
  },
  {
    "char": "👨🏻‍✈️",
    "tags": "man pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏻‍✈",
    "tags": "man pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍✈️",
    "tags": "man pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍✈",
    "tags": "man pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍✈️",
    "tags": "man pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍✈",
    "tags": "man pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍✈️",
    "tags": "man pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍✈",
    "tags": "man pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍✈️",
    "tags": "man pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍✈",
    "tags": "man pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍✈️",
    "tags": "woman pilot people & body (person-role)"
  },
  {
    "char": "👩‍✈",
    "tags": "woman pilot people & body (person-role)"
  },
  {
    "char": "👩🏻‍✈️",
    "tags": "woman pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏻‍✈",
    "tags": "woman pilot: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍✈️",
    "tags": "woman pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍✈",
    "tags": "woman pilot: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍✈️",
    "tags": "woman pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍✈",
    "tags": "woman pilot: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍✈️",
    "tags": "woman pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍✈",
    "tags": "woman pilot: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍✈️",
    "tags": "woman pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍✈",
    "tags": "woman pilot: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🚀",
    "tags": "astronaut people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🚀",
    "tags": "astronaut: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🚀",
    "tags": "astronaut: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🚀",
    "tags": "astronaut: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🚀",
    "tags": "astronaut: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🚀",
    "tags": "astronaut: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🚀",
    "tags": "man astronaut people & body (person-role)"
  },
  {
    "char": "👨🏻‍🚀",
    "tags": "man astronaut: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🚀",
    "tags": "man astronaut: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🚀",
    "tags": "man astronaut: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🚀",
    "tags": "man astronaut: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🚀",
    "tags": "man astronaut: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🚀",
    "tags": "woman astronaut people & body (person-role)"
  },
  {
    "char": "👩🏻‍🚀",
    "tags": "woman astronaut: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🚀",
    "tags": "woman astronaut: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🚀",
    "tags": "woman astronaut: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🚀",
    "tags": "woman astronaut: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🚀",
    "tags": "woman astronaut: dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑‍🚒",
    "tags": "firefighter people & body (person-role)"
  },
  {
    "char": "🧑🏻‍🚒",
    "tags": "firefighter: light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏼‍🚒",
    "tags": "firefighter: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏽‍🚒",
    "tags": "firefighter: medium skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏾‍🚒",
    "tags": "firefighter: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🧑🏿‍🚒",
    "tags": "firefighter: dark skin tone people & body (person-role)"
  },
  {
    "char": "👨‍🚒",
    "tags": "man firefighter people & body (person-role)"
  },
  {
    "char": "👨🏻‍🚒",
    "tags": "man firefighter: light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏼‍🚒",
    "tags": "man firefighter: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👨🏽‍🚒",
    "tags": "man firefighter: medium skin tone people & body (person-role)"
  },
  {
    "char": "👨🏾‍🚒",
    "tags": "man firefighter: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👨🏿‍🚒",
    "tags": "man firefighter: dark skin tone people & body (person-role)"
  },
  {
    "char": "👩‍🚒",
    "tags": "woman firefighter people & body (person-role)"
  },
  {
    "char": "👩🏻‍🚒",
    "tags": "woman firefighter: light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏼‍🚒",
    "tags": "woman firefighter: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👩🏽‍🚒",
    "tags": "woman firefighter: medium skin tone people & body (person-role)"
  },
  {
    "char": "👩🏾‍🚒",
    "tags": "woman firefighter: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👩🏿‍🚒",
    "tags": "woman firefighter: dark skin tone people & body (person-role)"
  },
  {
    "char": "👮",
    "tags": "police officer people & body (person-role)"
  },
  {
    "char": "👮🏻",
    "tags": "police officer: light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏼",
    "tags": "police officer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏽",
    "tags": "police officer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👮🏾",
    "tags": "police officer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏿",
    "tags": "police officer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👮‍♂️",
    "tags": "man police officer people & body (person-role)"
  },
  {
    "char": "👮‍♂",
    "tags": "man police officer people & body (person-role)"
  },
  {
    "char": "👮🏻‍♂️",
    "tags": "man police officer: light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏻‍♂",
    "tags": "man police officer: light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏼‍♂️",
    "tags": "man police officer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏼‍♂",
    "tags": "man police officer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏽‍♂️",
    "tags": "man police officer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👮🏽‍♂",
    "tags": "man police officer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👮🏾‍♂️",
    "tags": "man police officer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏾‍♂",
    "tags": "man police officer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏿‍♂️",
    "tags": "man police officer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏿‍♂",
    "tags": "man police officer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👮‍♀️",
    "tags": "woman police officer people & body (person-role)"
  },
  {
    "char": "👮‍♀",
    "tags": "woman police officer people & body (person-role)"
  },
  {
    "char": "👮🏻‍♀️",
    "tags": "woman police officer: light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏻‍♀",
    "tags": "woman police officer: light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏼‍♀️",
    "tags": "woman police officer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏼‍♀",
    "tags": "woman police officer: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👮🏽‍♀️",
    "tags": "woman police officer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👮🏽‍♀",
    "tags": "woman police officer: medium skin tone people & body (person-role)"
  },
  {
    "char": "👮🏾‍♀️",
    "tags": "woman police officer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏾‍♀",
    "tags": "woman police officer: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏿‍♀️",
    "tags": "woman police officer: dark skin tone people & body (person-role)"
  },
  {
    "char": "👮🏿‍♀",
    "tags": "woman police officer: dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵️",
    "tags": "detective people & body (person-role)"
  },
  {
    "char": "🕵",
    "tags": "detective people & body (person-role)"
  },
  {
    "char": "🕵🏻",
    "tags": "detective: light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏼",
    "tags": "detective: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏽",
    "tags": "detective: medium skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏾",
    "tags": "detective: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏿",
    "tags": "detective: dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵️‍♂️",
    "tags": "man detective people & body (person-role)"
  },
  {
    "char": "🕵‍♂️",
    "tags": "man detective people & body (person-role)"
  },
  {
    "char": "🕵️‍♂",
    "tags": "man detective people & body (person-role)"
  },
  {
    "char": "🕵‍♂",
    "tags": "man detective people & body (person-role)"
  },
  {
    "char": "🕵🏻‍♂️",
    "tags": "man detective: light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏻‍♂",
    "tags": "man detective: light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏼‍♂️",
    "tags": "man detective: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏼‍♂",
    "tags": "man detective: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏽‍♂️",
    "tags": "man detective: medium skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏽‍♂",
    "tags": "man detective: medium skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏾‍♂️",
    "tags": "man detective: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏾‍♂",
    "tags": "man detective: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏿‍♂️",
    "tags": "man detective: dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏿‍♂",
    "tags": "man detective: dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵️‍♀️",
    "tags": "woman detective people & body (person-role)"
  },
  {
    "char": "🕵‍♀️",
    "tags": "woman detective people & body (person-role)"
  },
  {
    "char": "🕵️‍♀",
    "tags": "woman detective people & body (person-role)"
  },
  {
    "char": "🕵‍♀",
    "tags": "woman detective people & body (person-role)"
  },
  {
    "char": "🕵🏻‍♀️",
    "tags": "woman detective: light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏻‍♀",
    "tags": "woman detective: light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏼‍♀️",
    "tags": "woman detective: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏼‍♀",
    "tags": "woman detective: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏽‍♀️",
    "tags": "woman detective: medium skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏽‍♀",
    "tags": "woman detective: medium skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏾‍♀️",
    "tags": "woman detective: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏾‍♀",
    "tags": "woman detective: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏿‍♀️",
    "tags": "woman detective: dark skin tone people & body (person-role)"
  },
  {
    "char": "🕵🏿‍♀",
    "tags": "woman detective: dark skin tone people & body (person-role)"
  },
  {
    "char": "💂",
    "tags": "guard people & body (person-role)"
  },
  {
    "char": "💂🏻",
    "tags": "guard: light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏼",
    "tags": "guard: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏽",
    "tags": "guard: medium skin tone people & body (person-role)"
  },
  {
    "char": "💂🏾",
    "tags": "guard: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏿",
    "tags": "guard: dark skin tone people & body (person-role)"
  },
  {
    "char": "💂‍♂️",
    "tags": "man guard people & body (person-role)"
  },
  {
    "char": "💂‍♂",
    "tags": "man guard people & body (person-role)"
  },
  {
    "char": "💂🏻‍♂️",
    "tags": "man guard: light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏻‍♂",
    "tags": "man guard: light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏼‍♂️",
    "tags": "man guard: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏼‍♂",
    "tags": "man guard: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏽‍♂️",
    "tags": "man guard: medium skin tone people & body (person-role)"
  },
  {
    "char": "💂🏽‍♂",
    "tags": "man guard: medium skin tone people & body (person-role)"
  },
  {
    "char": "💂🏾‍♂️",
    "tags": "man guard: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏾‍♂",
    "tags": "man guard: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏿‍♂️",
    "tags": "man guard: dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏿‍♂",
    "tags": "man guard: dark skin tone people & body (person-role)"
  },
  {
    "char": "💂‍♀️",
    "tags": "woman guard people & body (person-role)"
  },
  {
    "char": "💂‍♀",
    "tags": "woman guard people & body (person-role)"
  },
  {
    "char": "💂🏻‍♀️",
    "tags": "woman guard: light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏻‍♀",
    "tags": "woman guard: light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏼‍♀️",
    "tags": "woman guard: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏼‍♀",
    "tags": "woman guard: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "💂🏽‍♀️",
    "tags": "woman guard: medium skin tone people & body (person-role)"
  },
  {
    "char": "💂🏽‍♀",
    "tags": "woman guard: medium skin tone people & body (person-role)"
  },
  {
    "char": "💂🏾‍♀️",
    "tags": "woman guard: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏾‍♀",
    "tags": "woman guard: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏿‍♀️",
    "tags": "woman guard: dark skin tone people & body (person-role)"
  },
  {
    "char": "💂🏿‍♀",
    "tags": "woman guard: dark skin tone people & body (person-role)"
  },
  {
    "char": "🥷",
    "tags": "ninja people & body (person-role)"
  },
  {
    "char": "🥷🏻",
    "tags": "ninja: light skin tone people & body (person-role)"
  },
  {
    "char": "🥷🏼",
    "tags": "ninja: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🥷🏽",
    "tags": "ninja: medium skin tone people & body (person-role)"
  },
  {
    "char": "🥷🏾",
    "tags": "ninja: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🥷🏿",
    "tags": "ninja: dark skin tone people & body (person-role)"
  },
  {
    "char": "👷",
    "tags": "construction worker people & body (person-role)"
  },
  {
    "char": "👷🏻",
    "tags": "construction worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏼",
    "tags": "construction worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏽",
    "tags": "construction worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👷🏾",
    "tags": "construction worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏿",
    "tags": "construction worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👷‍♂️",
    "tags": "man construction worker people & body (person-role)"
  },
  {
    "char": "👷‍♂",
    "tags": "man construction worker people & body (person-role)"
  },
  {
    "char": "👷🏻‍♂️",
    "tags": "man construction worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏻‍♂",
    "tags": "man construction worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏼‍♂️",
    "tags": "man construction worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏼‍♂",
    "tags": "man construction worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏽‍♂️",
    "tags": "man construction worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👷🏽‍♂",
    "tags": "man construction worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👷🏾‍♂️",
    "tags": "man construction worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏾‍♂",
    "tags": "man construction worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏿‍♂️",
    "tags": "man construction worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏿‍♂",
    "tags": "man construction worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👷‍♀️",
    "tags": "woman construction worker people & body (person-role)"
  },
  {
    "char": "👷‍♀",
    "tags": "woman construction worker people & body (person-role)"
  },
  {
    "char": "👷🏻‍♀️",
    "tags": "woman construction worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏻‍♀",
    "tags": "woman construction worker: light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏼‍♀️",
    "tags": "woman construction worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏼‍♀",
    "tags": "woman construction worker: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👷🏽‍♀️",
    "tags": "woman construction worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👷🏽‍♀",
    "tags": "woman construction worker: medium skin tone people & body (person-role)"
  },
  {
    "char": "👷🏾‍♀️",
    "tags": "woman construction worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏾‍♀",
    "tags": "woman construction worker: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏿‍♀️",
    "tags": "woman construction worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "👷🏿‍♀",
    "tags": "woman construction worker: dark skin tone people & body (person-role)"
  },
  {
    "char": "🫅",
    "tags": "person with crown people & body (person-role)"
  },
  {
    "char": "🫅🏻",
    "tags": "person with crown: light skin tone people & body (person-role)"
  },
  {
    "char": "🫅🏼",
    "tags": "person with crown: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🫅🏽",
    "tags": "person with crown: medium skin tone people & body (person-role)"
  },
  {
    "char": "🫅🏾",
    "tags": "person with crown: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🫅🏿",
    "tags": "person with crown: dark skin tone people & body (person-role)"
  },
  {
    "char": "🤴",
    "tags": "prince people & body (person-role)"
  },
  {
    "char": "🤴🏻",
    "tags": "prince: light skin tone people & body (person-role)"
  },
  {
    "char": "🤴🏼",
    "tags": "prince: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "🤴🏽",
    "tags": "prince: medium skin tone people & body (person-role)"
  },
  {
    "char": "🤴🏾",
    "tags": "prince: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "🤴🏿",
    "tags": "prince: dark skin tone people & body (person-role)"
  },
  {
    "char": "👸",
    "tags": "princess people & body (person-role)"
  },
  {
    "char": "👸🏻",
    "tags": "princess: light skin tone people & body (person-role)"
  },
  {
    "char": "👸🏼",
    "tags": "princess: medium-light skin tone people & body (person-role)"
  },
  {
    "char": "👸🏽",
    "tags": "princess: medium skin tone people & body (person-role)"
  },
  {
    "char": "👸🏾",
    "tags": "princess: medium-dark skin tone people & body (person-role)"
  },
  {
    "char": "👸🏿",
    "tags": "princess: dark skin tone people & body (person-role)"
  },
  {
    "char": "👳",
    "tags": "person wearing turban people & body (person-role)"
  }
];
export default EMOJI_DATA;
