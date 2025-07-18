const alarmSound = document.getElementById('alarmSound');


let timer = null;
let isRunning = false;
let mode = 'work';

let workDuration = 30 * 60;
let breakDuration = Math.floor(workDuration / 5);
let workTimeLeft = workDuration;
let breakTimeLeft = breakDuration;

const timerDisplay = document.getElementById('timer');
const quoteBox = document.getElementById('quote');
const quotes = [
  "Take a breath, you've earned it!",
  "Stretch and smile 🌸",
  "Hydrate, queen! 💧",
  "Short breaks, big wins.",
  "You’re doing amazing, sweetie 💜",
  "Pause, breathe, and sparkle ✨",
    "Rest now, my love 🌼",
  "Shine bright, sunshine 💝",
  "You’ve got this, beautiful 🌷",
  "Hydrate and smile, cutie 🌟",
  "You're my sunshine, beautiful 🌸",
  "Stay strong, sweetheart 🌷",
  "Stay strong, baby 🌷",
  "I'm proud of you, sweetheart 😊",
  "Hydrate and smile, sweetheart ☁️",
  "You’re doing amazing, sunshine ☁️",
  "Take a breath, angel 💜",
  "Keep going, darling 💖",
  "Rest now, queen 🌸",
  "You’re so powerful, cutie 🦋",
  "Believe in yourself, baby 🌼",
  "Don't forget to stretch, babe 💐",
  "One step at a time, my love 🌈",
  "You glow differently, queen ✨",
  "Sending hugs, angel 💝",
  "You're more than enough, darling 🌷",
  "You’re my hero, babe 💖",
  "Take a breath, sweetie 🌸",
  "Stay strong, my love 🫶",
  "Keep going, beautiful 💐",
  "You’ve got this, sunshine 🌟",
  "Rest now, baby ☁️",
  "You’re doing amazing, sweetheart 💝",
  "Believe in yourself, my love 🌼",
  "Hydrate and smile, darling 💧",
  "You’re so powerful, cutie 🦋",
  "Shine bright, babe ✨",
  "One step at a time, angel 🌈",
  "Don't forget to stretch, queen 🌸",
  "You glow differently, sunshine 💜",
  "I'm proud of you, cutie 💞",
  "Sending hugs, my love 💖",
  "You're my sunshine, darling 🌟",
  "You’re more than enough, sweetheart 💐",
  "You’re my hero, beautiful 🫶",
  "Take a breath, queen 🌷",
  "Stay strong, angel 🌼",
  "Rest now, sunshine ☁️",
  "You’ve got this, babe 💝",
  "Keep going, sweetheart 🌟",
  "Believe in yourself, beautiful 💐",
  "Hydrate and smile, baby 💧",
  "You’re doing amazing, darling 🌸",
  "Stretch and smile, queen 🦋",
  "Pause and breathe, sunshine 💖",
  "One breath at a time, angel 🌈",
  "You’re the best, my love 💝",
  "You are loved, babe 💜",
  "Just keep going, queen 💞",
  "I’m cheering for you, beautiful 🌷",
  "Recharge your sparkle, sweetheart ✨",
  "You're doing perfectly, angel 🌸",
  "You're a star, cutie 🌟",
  "Hydrate like a goddess 💧",
  "You light up my world, baby 💜",
  "You're unstoppable, queen 💪",
  "Shine on, sunshine 💐",
  "Never forget your magic, darling 🦋",
  "You deserve rest, sweetie 💝",
  "Power through, my love 🌟",
  "Small steps, big progress 🌈",
  "Smile bright, sunshine 🌼",
  "You’re crushing it, babe 💖",
  "You are strength and softness 💐",
  "Let your heart rest too 💤",
  "You’ve already come so far 💝",
  "Be kind to yourself, my love 💜",
  "You make everything brighter ☀️",
  "Just breathe, darling 🌬️",
  "You’re radiant, baby ✨",
  "Sweet break for a sweet girl 🍬",
  "Snuggle break time 🧸",
  "You sparkle even when tired 💎",
  "You’re my favorite person 💕",
  "The world is better with you in it 🌎",
  "You're doing the best you can ❤️",
  "Take this moment for you 🌷",
  "Rest isn't failure, it's fuel 🔋",
  "Be gentle with your soul 🌸",
  "Soft hearts are strong too 🫶",
  "You're a warrior and a wonder 🌟",
  "Your smile is magic 💖",
  "You're the calm in my storm 🌈",
  "You’re pure sunshine ☀️",
  "Naps and love for you 💜",
  "You're the reason I smile 💕",
  "You're the peace I need 💐",
  "Cute brain needs cute breaks 🧠",
  "Queen things only 👑",
  "Your effort is beautiful 💫",
  "Take five, you earned it 🛋️",
  "Magic takes rest too ✨",
  "The world can wait, baby 💝",
  "You inspire me every day 🌼",
  "Baby steps still count 💜",
  "Your dreams matter 💭",
  "Let love fuel your rest 💞",
  "You're the prettiest success story 💐",
  "You’re always enough 💫",
  "I love your determination 💪",
  "You're doing this with grace 💖",
  "Even on pause, you shine ☀️",
  "You're brilliant and brave 💕",
  "So proud of you, always 💝",
  "Breaks make you better 💆‍♀️",
  "Take it slow, sweet soul 🐢",
  "You're the definition of effort ✨",
  "You carry light inside you 💜",
  "Darling, you're gold 💛",
  "You're a masterpiece in motion 🎨",
  "Don’t doubt your sparkle 🌟",
  "Tiny victories count too 🏆",
  "You're a soft storm of strength 💪",
  "You make progress look lovely 💐",
  "Break time, beautiful 💖",
  "Let the world wait for a while 🌙",
  "You're the moonlight I need 🌕",
  "Rest with purpose 💝",
  "You are love, always 💗",
  "You're a blessing in bloom 🌸",
  "You're precious, remember that 💎",
  "Strong, soft, and spectacular 💕",
  "Even the stars take breaks 🌟",
  "You're poetry in motion ✍️",
  "Stillness is strength 🌱",
  "You're my kind of wonder 💜",
  "You've got heart, darling 💖",
  "Never forget your sparkle ✨",
  "Every step is progress 💫",
  "Courage looks like you 💕",
  "You're the calm in chaos ☁️",
  "Break time with love 💝",
  "You're doing dreamy work 🌙",
  "Beauty and brains, that’s you 💐",
  "You're the best thing today 💕",
  "Baby, you amaze me 🌈",
  "Soft breaks for soft hearts 🌸",
  "So much love for you 💖",
  "Rest like royalty 👑",
  "Shine on, no matter what ✨",
  "You're a rare gem 💎",
  "Never too much love or rest 💞",
  "Darling, you dazzle 💜",
  "Keep blooming, baby 🌷"
];

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  const time = mode === 'work' ? workTimeLeft : breakTimeLeft;
  timerDisplay.textContent = formatTime(time);
}

function startTimer() {
  if (timer) clearInterval(timer);
  isRunning = true;

  timer = setInterval(() => {
    if (mode === 'work') {
      if (workTimeLeft > 0) {
        workTimeLeft--;
      } else {
        clearInterval(timer);
        isRunning = false;
        alarmSound.play(); // 🔔 Alarm when work ends
        mode = 'break';
        quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        startTimer();
      }
    } else {
      if (breakTimeLeft > 0) {
        breakTimeLeft--;
      } else {
        clearInterval(timer);
        isRunning = false;
        alarmSound.play(); // 🔔 Alarm when break ends
        mode = 'work';
        quoteBox.textContent = '';
        startTimer();
      }
    }
    updateDisplay();
  }, 1000);
}


// MODE SWITCH WITHOUT RESET
document.querySelectorAll('[data-mode]').forEach(btn => {
  btn.addEventListener('click', () => {
    mode = btn.dataset.mode;

    if (mode === 'work') {
      quoteBox.textContent = '';
      if (!isRunning) startTimer(); // auto resume work
    } else {
      quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      if (!isRunning) startTimer(); // start break countdown
    }

    updateDisplay();
  });
});


// CUSTOM TIME SETTING
document.getElementById('setTimeBtn').addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('workInput').value);
  if (!isNaN(minutes) && minutes > 0) {
    workDuration = minutes * 60;
    breakDuration = Math.floor(workDuration / 5);
    workTimeLeft = workDuration;
    breakTimeLeft = breakDuration;

    if (!isRunning && mode === 'work') {
      updateDisplay();
    }
  }
});

// TASK LIST
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

addTaskBtn.addEventListener('click', () => {
  const text = newTaskInput.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  taskList.appendChild(li);
  newTaskInput.value = '';
});

// INIT
updateDisplay();
