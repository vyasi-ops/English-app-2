// ---- State ----
let sessionCount = 7;
let sessionIdioms = [];
let cardIdx = 0;
let cardFlipped = false;
let mcqList = [];
let mcqIdx = 0;
let mcqScore = 0;
let fitbList = [];
let fitbIdx = 0;
let fitbScore = 0;

function bumpChip(id) {
  var chip = document.getElementById(id);
  chip.classList.remove('bump');
  void chip.offsetWidth;
  chip.classList.add('bump');
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ---- Landing: count selector ----
const pills = document.querySelectorAll('.count-pill');
const slider = document.getElementById('rangeSlider');
const enterSub = document.getElementById('enterSub');

function setCount(n) {
  sessionCount = n;
  pills.forEach(p => p.classList.toggle('active', parseInt(p.dataset.n) === n));
  slider.value = n;
  enterSub.textContent = n + ' random idioms · ~' + Math.ceil(n * 0.7) + ' min session';
}

pills.forEach(p => p.addEventListener('click', function() { setCount(parseInt(p.dataset.n)); }));
slider.addEventListener('input', function() {
  var n = parseInt(slider.value);
  pills.forEach(p => p.classList.remove('active'));
  var match = null;
  pills.forEach(function(p) { if (parseInt(p.dataset.n) === n) match = p; });
  if (match) match.classList.add('active');
  sessionCount = n;
  enterSub.textContent = n + ' random idioms · ~' + Math.ceil(n * 0.7) + ' min session';
});

// ---- Back buttons ----
document.querySelectorAll('.back-btn').forEach(function(btn) {
  btn.addEventListener('click', function() { show(btn.dataset.goto); });
});

// ---- Enter ----
document.getElementById('enterBtn').addEventListener('click', function() {
  sessionIdioms = shuffle(IDIOMS).slice(0, sessionCount);
  buildMenu();
  show('menuScreen');
});

// ---- Menu ----
function buildMenu() {
  var list = document.getElementById('menuList');
  list.innerHTML = '';
  sessionIdioms.forEach(function(idiom, i) {
    var div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = '<span class="menu-num">' + (i + 1) + '</span><span class="menu-name">' + idiom.name + '</span>';
    list.appendChild(div);
  });
}

document.getElementById('startLearn').addEventListener('click', function() {
  cardIdx = 0;
  cardFlipped = false;
  renderCard();
  show('learnScreen');
});

// ---- Flashcards ----
function renderCard() {
  var idiom = sessionIdioms[cardIdx];
  document.getElementById('cardCounter').textContent = (cardIdx + 1) + ' / ' + sessionIdioms.length;
  document.getElementById('learnProgress').style.width = ((cardIdx + 1) / sessionIdioms.length * 100) + '%';

  var card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  cardFlipped = false;

  document.getElementById('cardFrontName').textContent = idiom.name;
  document.getElementById('cardBackMeaning').textContent = idiom.meaning;
  document.getElementById('cardBackExample').textContent = '"' + idiom.example + '"';

  document.getElementById('prevCard').disabled = cardIdx === 0;
  var isLast = cardIdx === sessionIdioms.length - 1;
  document.getElementById('nextCard').textContent = isLast ? 'Start quiz →' : 'Next →';
}

document.getElementById('flashcard').addEventListener('click', function() {
  cardFlipped = !cardFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', cardFlipped);
});

document.getElementById('prevCard').addEventListener('click', function() {
  if (cardIdx > 0) { cardIdx--; renderCard(); }
});

document.getElementById('nextCard').addEventListener('click', function() {
  if (cardIdx < sessionIdioms.length - 1) {
    cardIdx++;
    renderCard();
  } else {
    startMCQ();
  }
});

// ---- MCQs ----
function startMCQ() {
  mcqList = [];
  sessionIdioms.forEach(function(idiom) {
    var qs = QUESTIONS[idiom.id].filter(function(q) { return q.type === 'mcq'; });
    var picked = shuffle(qs).slice(0, 2);
    picked.forEach(function(q) { mcqList.push(Object.assign({}, q, { idiomName: idiom.name })); });
  });
  mcqList = shuffle(mcqList);
  mcqIdx = 0;
  mcqScore = 0;
  renderMCQ();
  show('mcqScreen');
}

function renderMCQ() {
  document.getElementById('mcqScoreChip').textContent = mcqScore;
  document.getElementById('mcqCounter').textContent = 'Question ' + (mcqIdx + 1) + ' of ' + mcqList.length;
  document.getElementById('mcqProgress').style.width = ((mcqIdx) / mcqList.length * 100) + '%';

  if (mcqIdx >= mcqList.length) {
    document.getElementById('mcqProgress').style.width = '100%';
    document.getElementById('mcqBody').innerHTML =
      '<div class="done-box">' +
      '<div class="done-title">MCQs complete!</div>' +
      '<p style="color:var(--text-body);margin-bottom:16px;">You scored ' + mcqScore + ' out of ' + mcqList.length + '.</p>' +
      '<button class="btn-primary full" id="startFITB">Continue to fill in the blanks →</button></div>';
    document.getElementById('startFITB').addEventListener('click', startFITB);
    return;
  }

  var q = mcqList[mcqIdx];
  var body = document.getElementById('mcqBody');
  var indices = shuffle([0, 1, 2, 3]);

  body.innerHTML =
    '<div class="q-box">' + q.q + '</div>' +
    '<div class="choices">' +
    indices.map(function(origI, newI) {
      return '<button class="choice-btn" data-idx="' + newI + '" data-correct="' + (origI === q.ans) + '">' + q.opts[origI] + '</button>';
    }).join('') +
    '</div><div class="feedback-row"></div>';

  body.querySelectorAll('.choice-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      body.querySelectorAll('.choice-btn').forEach(function(b) {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });
      if (btn.dataset.correct === 'true') {
        mcqScore++;
        bumpChip('mcqScoreChip');
      } else {
        btn.classList.add('wrong');
      }
      document.getElementById('mcqScoreChip').textContent = mcqScore;
      var row = body.querySelector('.feedback-row');
      var next = document.createElement('button');
      next.className = 'btn-primary';
      next.textContent = mcqIdx === mcqList.length - 1 ? 'See results' : 'Next →';
      next.addEventListener('click', function() { mcqIdx++; renderMCQ(); });
      row.appendChild(next);
    });
  });
}

// ---- Fill in the blanks ----
function startFITB() {
  fitbList = [];
  sessionIdioms.forEach(function(idiom) {
    var qs = QUESTIONS[idiom.id].filter(function(q) { return q.type === 'fitb'; });
    var picked = shuffle(qs).slice(0, 2);
    picked.forEach(function(q) { fitbList.push(Object.assign({}, q, { idiomName: idiom.name })); });
  });
  fitbList = shuffle(fitbList);
  fitbIdx = 0;
  fitbScore = 0;
  renderFITB();
  show('fitbScreen');
}

function renderFITB() {
  document.getElementById('fitbScoreChip').textContent = fitbScore;
  document.getElementById('fitbCounter').textContent = 'Question ' + (fitbIdx + 1) + ' of ' + fitbList.length;
  document.getElementById('fitbProgress').style.width = ((fitbIdx) / fitbList.length * 100) + '%';

  if (fitbIdx >= fitbList.length) {
    showFinalScore();
    return;
  }

  var q = fitbList[fitbIdx];
  var body = document.getElementById('fitbBody');
  var indices = shuffle([0, 1, 2, 3]);
  var sentence = q.q.replace('___', '<span class="blank-slot" id="blankSlot">______</span>');

  body.innerHTML =
    '<div class="q-box">' + sentence + '</div>' +
    '<div class="choices two-col">' +
    indices.map(function(origI, newI) {
      return '<button class="choice-btn" data-idx="' + newI + '" data-correct="' + (origI === q.ans) + '">' + q.opts[origI] + '</button>';
    }).join('') +
    '</div><div class="feedback-row"></div>';

  body.querySelectorAll('.choice-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      body.querySelectorAll('.choice-btn').forEach(function(b) {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });
      var blank = document.getElementById('blankSlot');
      if (btn.dataset.correct === 'true') {
        fitbScore++;
        bumpChip('fitbScoreChip');
        if (blank) blank.textContent = q.opts[q.ans];
      } else {
        btn.classList.add('wrong');
        if (blank) { blank.textContent = q.opts[q.ans]; blank.classList.add('revealed'); }
      }
      document.getElementById('fitbScoreChip').textContent = fitbScore;
      var row = body.querySelector('.feedback-row');
      var next = document.createElement('button');
      next.className = 'btn-primary';
      next.textContent = fitbIdx === fitbList.length - 1 ? 'See final score' : 'Next →';
      next.addEventListener('click', function() { fitbIdx++; renderFITB(); });
      row.appendChild(next);
    });
  });
}

// ---- Final Score ----
function showFinalScore() {
  var total = mcqList.length + fitbList.length;
  var score = mcqScore + fitbScore;
  var pct = Math.round((score / total) * 100);

  var emoji = '☕';
  var message = 'Keep practising — you will get there!';
  if (pct >= 90) { emoji = '🏆'; message = 'Master chef! You really know your idioms!'; }
  else if (pct >= 70) { emoji = '⭐'; message = 'Great job! You are getting the hang of it!'; }
  else if (pct >= 50) { emoji = '👍'; message = 'Not bad! A few more rounds and you will ace it!'; }

  document.getElementById('finalBody').innerHTML =
    '<div class="final-wrap">' +
    '<div class="final-emoji">' + emoji + '</div>' +
    '<div class="final-score-circle">' +
    '<div class="final-score-num">' + score + '</div>' +
    '<div class="final-score-of">out of ' + total + '</div>' +
    '</div>' +
    '<div class="final-pct">' + pct + '%</div>' +
    '<p class="final-msg">' + message + '</p>' +
    '<div class="breakdown">' +
    '<div class="bd-row"><span>MCQs</span><span class="bd-val">' + mcqScore + ' / ' + mcqList.length + '</span></div>' +
    '<div class="bd-row"><span>Fill in the blanks</span><span class="bd-val">' + fitbScore + ' / ' + fitbList.length + '</span></div>' +
    '</div>' +
    '<button class="btn-primary full" id="playAgain">Play again</button>' +
    '</div>';

  document.getElementById('playAgain').addEventListener('click', function() {
    var c = document.getElementById('confettiCanvas');
    if (c) c.remove();
    show('landingScreen');
  });
  show('finalScreen');
  if (pct >= 50) launchConfetti();
}

// ---- Confetti ----
function launchConfetti() {
  var old = document.getElementById('confettiCanvas');
  if (old) old.remove();
  var canvas = document.createElement('canvas');
  canvas.id = 'confettiCanvas';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var colors = ['#F28A2E','#E8751A','#F5A04D','#3D2218','#C4956E','#2E7D32','#DEB99A'];
  var pieces = [];
  for (var i = 0; i < 80; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rv: (Math.random() - 0.5) * 8
    });
  }

  var frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rv;
      p.vy += 0.04;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 180) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}
