// Red Flag Test - What's Your Biggest Red Flag?
// 8 questions, 6 red flag types
// Dimensions: impulsivity, attachment, intensity, self-awareness, drama-factor

const QUESTIONS = [
    { id: 0, icon: '\u{1F319}', dimension: 'left_on_read', questionKey: 'question.0', options: ['question.0a', 'question.0b', 'question.0c', 'question.0d'] },
    { id: 1, icon: '\u{1F4AC}', dimension: 'story_reaction', questionKey: 'question.1', options: ['question.1a', 'question.1b', 'question.1c', 'question.1d'] },
    { id: 2, icon: '\u{1F630}', dimension: 'slow_reply', questionKey: 'question.2', options: ['question.2a', 'question.2b', 'question.2c', 'question.2d'] },
    { id: 3, icon: '\u{1F91D}', dimension: 'first_date', questionKey: 'question.3', options: ['question.3a', 'question.3b', 'question.3c', 'question.3d'] },
    { id: 4, icon: '\u{1F4F1}', dimension: 'ex_encounter', questionKey: 'question.4', options: ['question.4a', 'question.4b', 'question.4c', 'question.4d'] },
    { id: 5, icon: '\u{1F3AF}', dimension: 'conflict', questionKey: 'question.5', options: ['question.5a', 'question.5b', 'question.5c', 'question.5d'] },
    { id: 6, icon: '\u{1F4AD}', dimension: 'compliment', questionKey: 'question.6', options: ['question.6a', 'question.6b', 'question.6c', 'question.6d'] },
    { id: 7, icon: '\u{1F52E}', dimension: 'new_dating', questionKey: 'question.7', options: ['question.7a', 'question.7b', 'question.7c', 'question.7d'] }
];

// Each option maps to score additions for each red flag type
// Indices: 0=DoubleTexter, 1=ProfileStalker, 2=EmotionalTornado, 3=ChronicCanceller, 4=OverthinkingTexter, 5=LoveBomber
const SCORE_MAP = {
    '0a': [3,0,1,0,2,0], // send 5 more messages
    '0b': [0,3,0,0,2,0], // check their social media
    '0c': [0,0,3,0,0,2], // spiral into overthinking
    '0d': [0,0,0,3,1,0], // assume they hate me

    '1a': [2,3,0,0,1,0], // watch it 6 times
    '1b': [0,0,2,0,3,0], // debate for 20 minutes
    '1c': [0,0,0,2,0,1], // ignore it
    '1d': [3,0,0,0,0,2], // react immediately

    '2a': [3,0,2,0,0,0], // send follow-ups
    '2b': [0,3,0,0,1,0], // investigate their life
    '2c': [0,0,3,1,0,1], // feel ALL the anxiety
    '2d': [0,0,0,3,2,0], // convince myself they're busy

    '3a': [0,0,0,0,0,3], // plan the wedding
    '3b': [0,0,2,0,1,1], // overshare trauma
    '3c': [0,2,0,1,3,0], // barely talk
    '3d': [2,1,1,0,0,0], // talk non-stop

    '4a': [0,0,0,3,0,0], // hide
    '4b': [0,2,0,0,3,0], // pretend I didn't see
    '4c': [0,0,3,0,0,1], // make it awkward
    '4d': [2,0,1,0,0,0], // overly friendly

    '5a': [0,0,3,0,0,1], // cry
    '5b': [0,0,0,2,3,0], // avoid it forever
    '5c': [2,0,1,0,0,2], // overapologize
    '5d': [0,3,0,1,0,0], // passive-aggressive

    '6a': [0,0,0,0,2,0], // deflect with humor
    '6b': [0,0,2,0,0,3], // assume they want something
    '6c': [0,1,0,2,3,0], // panic quietly
    '6d': [3,0,1,0,0,0], // overshare appreciation

    '7a': [0,0,0,0,0,3], // already picking names for kids
    '7b': [0,0,3,0,1,0], // emotional rollercoaster
    '7c': [2,3,0,0,0,0], // stalk their entire history
    '7d': [0,0,0,3,2,0]  // waiting for them to ghost me
};

const RED_FLAG_TYPES = {
    doubleTexter: {
        id: 'doubleTexter',
        emoji: '\u{1F4AC}',
        nameKey: 'type.doubleTexter.name',
        taglineKey: 'type.doubleTexter.tagline',
        descKey: 'type.doubleTexter.description',
        traitsKeys: ['type.doubleTexter.trait1', 'type.doubleTexter.trait2', 'type.doubleTexter.trait3'],
        metrics: { impulsivity: 95, attachment: 80, intensity: 70, selfAwareness: 40, dramaFactor: 65 },
        color: '#dc2626'
    },
    profileStalker: {
        id: 'profileStalker',
        emoji: '\u{1F50D}',
        nameKey: 'type.profileStalker.name',
        taglineKey: 'type.profileStalker.tagline',
        descKey: 'type.profileStalker.description',
        traitsKeys: ['type.profileStalker.trait1', 'type.profileStalker.trait2', 'type.profileStalker.trait3'],
        metrics: { impulsivity: 50, attachment: 90, intensity: 75, selfAwareness: 60, dramaFactor: 55 },
        color: '#7c3aed'
    },
    emotionalTornado: {
        id: 'emotionalTornado',
        emoji: '\u{1F32A}',
        nameKey: 'type.emotionalTornado.name',
        taglineKey: 'type.emotionalTornado.tagline',
        descKey: 'type.emotionalTornado.description',
        traitsKeys: ['type.emotionalTornado.trait1', 'type.emotionalTornado.trait2', 'type.emotionalTornado.trait3'],
        metrics: { impulsivity: 85, attachment: 70, intensity: 98, selfAwareness: 45, dramaFactor: 92 },
        color: '#f59e0b'
    },
    chronicCanceller: {
        id: 'chronicCanceller',
        emoji: '\u{1F6AA}',
        nameKey: 'type.chronicCanceller.name',
        taglineKey: 'type.chronicCanceller.tagline',
        descKey: 'type.chronicCanceller.description',
        traitsKeys: ['type.chronicCanceller.trait1', 'type.chronicCanceller.trait2', 'type.chronicCanceller.trait3'],
        metrics: { impulsivity: 40, attachment: 35, intensity: 50, selfAwareness: 30, dramaFactor: 70 },
        color: '#6366f1'
    },
    overthinkingTexter: {
        id: 'overthinkingTexter',
        emoji: '\u{1F4F1}',
        nameKey: 'type.overthinkingTexter.name',
        taglineKey: 'type.overthinkingTexter.tagline',
        descKey: 'type.overthinkingTexter.description',
        traitsKeys: ['type.overthinkingTexter.trait1', 'type.overthinkingTexter.trait2', 'type.overthinkingTexter.trait3'],
        metrics: { impulsivity: 25, attachment: 65, intensity: 60, selfAwareness: 80, dramaFactor: 50 },
        color: '#10b981'
    },
    loveBomber: {
        id: 'loveBomber',
        emoji: '\u{1F49D}',
        nameKey: 'type.loveBomber.name',
        taglineKey: 'type.loveBomber.tagline',
        descKey: 'type.loveBomber.description',
        traitsKeys: ['type.loveBomber.trait1', 'type.loveBomber.trait2', 'type.loveBomber.trait3'],
        metrics: { impulsivity: 90, attachment: 95, intensity: 88, selfAwareness: 35, dramaFactor: 75 },
        color: '#ec4899'
    }
};

const TYPE_ORDER = ['doubleTexter', 'profileStalker', 'emotionalTornado', 'chronicCanceller', 'overthinkingTexter', 'loveBomber'];

class RedFlagApp {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = [0, 0, 0, 0, 0, 0]; // 6 red flag types
        this.resultType = null;
        this.init();
    }

    async init() {
        // Wait for i18n
        if (window.i18n) {
            await window.i18n.init();
        }

        this.bindEvents();
        this.initTheme();
        this.hideLoader();

        // GA4 event
        if (typeof gtag === 'function') {
            gtag('event', 'page_view', { page_title: 'Red Flag Test' });
        }
    }

    bindEvents() {
        // Start button
        const startBtn = document.getElementById('start-btn');
        if (startBtn) startBtn.addEventListener('click', () => this.startQuiz());

        // Retry button
        const retryBtn = document.getElementById('retry-btn');
        if (retryBtn) retryBtn.addEventListener('click', () => this.restart());

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.addEventListener('click', () => this.toggleTheme());

        // Language
        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        if (langToggle && langMenu) {
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                langMenu.classList.toggle('hidden');
            });
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (window.i18n) window.i18n.setLanguage(lang);
                    langMenu.classList.add('hidden');
                });
            });
            document.addEventListener('click', () => langMenu.classList.add('hidden'));
        }

        // Share buttons
        document.getElementById('share-kakao')?.addEventListener('click', () => this.shareKakao());
        document.getElementById('share-twitter')?.addEventListener('click', () => this.shareTwitter());
        document.getElementById('share-facebook')?.addEventListener('click', () => this.shareFacebook());
        document.getElementById('share-copy')?.addEventListener('click', () => this.shareCopy());
    }

    hideLoader() {
        const loader = document.getElementById('app-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => loader.style.display = 'none', 400);
            }, 600);
        }
    }

    initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            const toggle = document.getElementById('theme-toggle');
            if (toggle) toggle.textContent = '\u{2600}';
        }
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const toggle = document.getElementById('theme-toggle');
        if (current === 'light') {
            document.documentElement.removeAttribute('data-theme');
            if (toggle) toggle.textContent = '\u{1F319}';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (toggle) toggle.textContent = '\u{2600}';
            localStorage.setItem('theme', 'light');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(screenId);
        if (screen) screen.classList.add('active');
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = [0, 0, 0, 0, 0, 0];
        this.showScreen('question-screen');
        this.renderQuestion();

        if (typeof gtag === 'function') {
            gtag('event', 'quiz_start', { event_category: 'red_flag' });
        }
    }

    renderQuestion() {
        const q = QUESTIONS[this.currentQuestion];
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        // Update progress
        const fill = document.getElementById('progress-fill');
        if (fill) fill.style.width = ((this.currentQuestion / 8) * 100) + '%';

        const counter = document.getElementById('q-current');
        if (counter) counter.textContent = this.currentQuestion + 1;

        // Question icon
        const icon = document.getElementById('question-icon');
        if (icon) icon.textContent = q.icon;

        // Question text
        const text = document.getElementById('question-text');
        if (text) text.textContent = t(q.questionKey);

        // Options
        const container = document.getElementById('options-container');
        if (!container) return;
        container.innerHTML = '';

        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((optKey, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = '<span class="option-label">' + labels[idx] + '</span><span class="option-text">' + t(optKey) + '</span>';
            btn.addEventListener('click', () => this.selectOption(q.id, idx, btn));
            container.appendChild(btn);
        });
    }

    selectOption(questionId, optionIdx, btn) {
        // Visual feedback
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        // Record answer
        const scoreKey = questionId + String.fromCharCode(97 + optionIdx); // e.g. "0a", "0b"
        const scoreAdd = SCORE_MAP[scoreKey];
        if (scoreAdd) {
            for (let i = 0; i < 6; i++) {
                this.scores[i] += scoreAdd[i];
            }
        }

        this.answers.push({ question: questionId, option: optionIdx });

        // Next question after brief delay
        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < 8) {
                this.renderQuestion();
            } else {
                this.showAnalyzing();
            }
        }, 400);
    }

    showAnalyzing() {
        this.showScreen('analyzing-screen');

        const fill = document.getElementById('analyzing-fill');
        const percent = document.getElementById('analyzing-percent');
        const detail = document.getElementById('analyzing-detail');
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        const steps = [
            { pct: 25, key: 'analyzing.scanning' },
            { pct: 50, key: 'analyzing.matching' },
            { pct: 75, key: 'analyzing.comparing' },
            { pct: 100, key: 'analyzing.complete' }
        ];

        let step = 0;
        const interval = setInterval(() => {
            if (step >= steps.length) {
                clearInterval(interval);
                setTimeout(() => this.showResult(), 400);
                return;
            }
            if (fill) fill.style.width = steps[step].pct + '%';
            if (percent) percent.textContent = steps[step].pct + '%';
            if (detail) detail.textContent = t(steps[step].key);
            step++;
        }, 500);
    }

    calculateResult() {
        let maxScore = -1;
        let maxIdx = 0;
        for (let i = 0; i < 6; i++) {
            if (this.scores[i] > maxScore) {
                maxScore = this.scores[i];
                maxIdx = i;
            }
        }
        return RED_FLAG_TYPES[TYPE_ORDER[maxIdx]];
    }

    showResult() {
        this.resultType = this.calculateResult();
        const type = this.resultType;
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        this.showScreen('result-screen');

        // Emoji
        const emoji = document.getElementById('result-emoji');
        if (emoji) emoji.textContent = type.emoji;

        // Title
        const title = document.getElementById('result-title');
        if (title) title.textContent = t(type.nameKey);

        // Tagline
        const tagline = document.getElementById('result-tagline');
        if (tagline) tagline.textContent = '"' + t(type.taglineKey) + '"';

        // Description
        const desc = document.getElementById('result-description');
        if (desc) desc.textContent = t(type.descKey);

        // Metrics
        const metricsGrid = document.getElementById('metrics-grid');
        if (metricsGrid) {
            metricsGrid.innerHTML = '';
            const metricLabels = {
                impulsivity: t('metric.impulsivity'),
                attachment: t('metric.attachment'),
                intensity: t('metric.intensity'),
                selfAwareness: t('metric.selfAwareness'),
                dramaFactor: t('metric.dramaFactor')
            };
            Object.entries(type.metrics).forEach(([key, val]) => {
                const row = document.createElement('div');
                row.className = 'metric-row';
                row.innerHTML = '<span class="metric-label">' + (metricLabels[key] || key) + '</span>' +
                    '<div class="metric-bar-bg"><div class="metric-bar-fill" style="background:' + type.color + '"></div></div>' +
                    '<span class="metric-value">' + val + '</span>';
                metricsGrid.appendChild(row);
                // Animate bar
                setTimeout(() => {
                    row.querySelector('.metric-bar-fill').style.width = val + '%';
                }, 100);
            });
        }

        // Percentile
        const percentile = document.getElementById('percentile-stat');
        const pctVal = Math.floor(Math.random() * 20) + 10; // 10-29%
        if (percentile) {
            percentile.innerHTML = t('result.percentile').replace('{pct}', '<strong>' + pctVal + '%</strong>').replace('{type}', t(type.nameKey));
        }

        // Traits
        const traitsList = document.getElementById('traits-list');
        if (traitsList) {
            traitsList.innerHTML = '';
            type.traitsKeys.forEach(key => {
                const tag = document.createElement('span');
                tag.className = 'trait-tag';
                tag.textContent = t(key);
                traitsList.appendChild(tag);
            });
        }

        // Confetti
        this.spawnConfetti();

        // GA4
        if (typeof gtag === 'function') {
            gtag('event', 'quiz_complete', {
                event_category: 'red_flag',
                event_label: type.id,
                value: 1
            });
        }
    }

    spawnConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;
        container.innerHTML = '';
        const colors = ['#dc2626', '#f87171', '#7c3aed', '#f59e0b', '#6366f1', '#10b981', '#ec4899'];
        for (let i = 0; i < 40; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = (Math.random() * 2) + 's';
            piece.style.animationDuration = (2 + Math.random() * 2) + 's';
            container.appendChild(piece);
        }
    }

    restart() {
        this.showScreen('intro-screen');
        window.scrollTo(0, 0);
    }

    // Share functions
    getShareText() {
        if (!this.resultType) return '';
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;
        return t('share.text').replace('{type}', t(this.resultType.nameKey));
    }

    getShareUrl() {
        return 'https://dopabrain.com/red-flag-test/';
    }

    shareKakao() {
        const text = this.getShareText();
        const url = 'https://sharer.kakao.com/talk/friends/picker/link?url=' + encodeURIComponent(this.getShareUrl()) + '&text=' + encodeURIComponent(text);
        window.open(url, '_blank', 'width=600,height=400');
    }

    shareTwitter() {
        const text = this.getShareText();
        const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(this.getShareUrl());
        window.open(url, '_blank', 'width=600,height=400');
    }

    shareFacebook() {
        const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.getShareUrl());
        window.open(url, '_blank', 'width=600,height=400');
    }

    async shareCopy() {
        const text = this.getShareText() + ' ' + this.getShareUrl();
        try {
            await navigator.clipboard.writeText(text);
            const btn = document.getElementById('share-copy');
            if (btn) {
                const original = btn.textContent;
                btn.textContent = '\u{2705} Copied!';
                setTimeout(() => btn.textContent = original, 2000);
            }
        } catch (e) {
            // Fallback
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new RedFlagApp();
});
