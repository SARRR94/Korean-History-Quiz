(function () {
  const STORAGE_KEY = "hangeom-ox-best";
  const THEME_KEY = "hangeom-ox-theme";
  const BOOKMARK_KEY = "hangeom-ox-bookmark";
  const CUSTOM_COUNT_OPTION_ID = "count-option-custom";

  const screens = {
    start: document.getElementById("screen-start"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
  };

  const els = {
    sourceSelect: document.getElementById("source-select"),
    categorySelect: document.getElementById("category-select"),
    countSelect: document.getElementById("count-select"),
    totalQuestions: document.getElementById("total-questions"),
    bookmarkCount: document.getElementById("bookmark-count"),
    bestScore: document.getElementById("best-score"),
    btnBookmark: document.getElementById("btn-bookmark"),
    starIcon: document.getElementById("star-icon"),
    btnStart: document.getElementById("btn-start"),
    progressBar: document.getElementById("progress-bar"),
    questionCounter: document.getElementById("question-counter"),
    categoryBadge: document.getElementById("category-badge"),
    scoreLive: document.getElementById("score-live"),
    questionText: document.getElementById("question-text"),
    oxButtons: document.getElementById("ox-buttons"),
    feedback: document.getElementById("feedback"),
    feedbackIcon: document.getElementById("feedback-icon"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackExplanation: document.getElementById("feedback-explanation"),
    ringProgress: document.getElementById("ring-progress"),
    finalScore: document.getElementById("final-score"),
    finalTotal: document.getElementById("final-total"),
    statCorrect: document.getElementById("stat-correct"),
    statWrong: document.getElementById("stat-wrong"),
    statPercent: document.getElementById("stat-percent"),
    resultEmoji: document.getElementById("result-emoji"),
    resultTitle: document.getElementById("result-title"),
    resultMessage: document.getElementById("result-message"),
    wrongReview: document.getElementById("wrong-review"),
    wrongList: document.getElementById("wrong-list"),
    btnRetryWrong: document.getElementById("btn-retry-wrong"),
    btnPrevQuestion: document.getElementById("btn-prev-question"),
  };

  let state = {
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    wrongItems: [],
    /** index → { userAnswer: boolean } — 풀이·복습용 기록 */
    attemptByIndex: {},
    lastCategory: "all",
    lastCount: 30,
    lastSource: "all",
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function loadBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      const ids = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(ids)) return [];
      return [...new Set(ids.map(Number).filter((id) => id > 0))];
    } catch {
      return [];
    }
  }

  function saveBookmarks(ids) {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(ids));
    } catch {
      /* ignore */
    }
  }

  function isBookmarked(id) {
    return loadBookmarks().includes(id);
  }

  function toggleBookmark(id) {
    const ids = loadBookmarks();
    const idx = ids.indexOf(id);
    if (idx >= 0) ids.splice(idx, 1);
    else ids.push(id);
    saveBookmarks(ids);
    updateBookmarkButton(id);
    updateBookmarkDisplay();
    updateTotalPreview();
  }

  function getPool(category, source) {
    let pool = [...QUIZ_QUESTIONS];

    if (source === "mybook") {
      const bookmarkSet = new Set(loadBookmarks());
      pool = pool.filter((q) => bookmarkSet.has(q.id));
    }

    if (category !== "all") {
      pool = pool.filter((q) => q.category === category);
    }

    return pool;
  }

  function getEffectiveCount(requested, poolSize) {
    if (poolSize === 0) return 0;
    if (poolSize < 10) return poolSize;
    return Math.min(requested, poolSize);
  }

  function getFilteredQuestions(category, count, source = "all") {
    const pool = getPool(category, source);
    if (pool.length === 0) return [];
    const n = getEffectiveCount(count, pool.length);
    return shuffle(pool).slice(0, n);
  }

  function updateBookmarkButton(id) {
    const active = isBookmarked(id);
    els.btnBookmark.classList.toggle("active", active);
    els.starIcon.textContent = active ? "★" : "☆";
    els.btnBookmark.setAttribute(
      "aria-label",
      active ? "내 문제집에서 제거" : "내 문제집에 추가"
    );
    els.btnBookmark.title = active ? "내 문제집에서 제거" : "내 문제집에 추가";
  }

  function updateBookmarkDisplay() {
    const count = loadBookmarks().length;
    els.bookmarkCount.textContent = String(count);
    const mybookOpt = els.sourceSelect.querySelector('option[value="mybook"]');
    if (mybookOpt) mybookOpt.textContent = `내 문제집 (${count})`;
  }

  function updateStartButton(poolSize) {
    const isMybook = els.sourceSelect.value === "mybook";
    const empty = poolSize === 0;
    els.btnStart.disabled = empty;
    els.btnStart.textContent = empty && isMybook ? "내 문제집이 비어 있습니다" : "퀴즈 시작";
  }

  function loadBestScore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function saveBestScore(score, total) {
    const prev = loadBestScore();
    if (!prev || score > prev.score || (score === prev.score && total > prev.total)) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ score, total, date: Date.now() })
      );
    }
    updateBestDisplay();
  }

  function updateBestDisplay() {
    const best = loadBestScore();
    els.bestScore.textContent = best ? `${best.score}/${best.total}` : "—";
  }

  function updateCountSelectOptions(poolSize, source) {
    const countSelect = els.countSelect;
    const isMybookSmall =
      source === "mybook" && poolSize > 0 && poolSize < 10;

    countSelect.querySelector(`#${CUSTOM_COUNT_OPTION_ID}`)?.remove();

    [...countSelect.options].forEach((opt) => {
      const n = parseInt(opt.value, 10);
      if (isMybookSmall) {
        opt.disabled = true;
        return;
      }
      opt.disabled = poolSize === 0 || (poolSize >= 10 && n > poolSize);
    });

    if (isMybookSmall) {
      const opt = document.createElement("option");
      opt.id = CUSTOM_COUNT_OPTION_ID;
      opt.value = String(poolSize);
      opt.textContent = `${poolSize}문항 (내 문제집 전체)`;
      countSelect.insertBefore(opt, countSelect.firstChild);
      countSelect.value = String(poolSize);
      return;
    }

    if (poolSize > 0) {
      const selected = parseInt(countSelect.value, 10);
      if (Number.isNaN(selected) || selected > poolSize) {
        const fallback = [...countSelect.options]
          .filter((o) => !o.disabled)
          .map((o) => parseInt(o.value, 10))
          .filter((n) => n <= poolSize)
          .pop();
        countSelect.value = String(fallback || 10);
      }
    }
  }

  function updateTotalPreview() {
    const cat = els.categorySelect.value;
    const source = els.sourceSelect.value;
    const pool = getPool(cat, source);
    const poolSize = pool.length;

    els.totalQuestions.textContent = String(poolSize);
    updateBookmarkDisplay();
    updateStartButton(poolSize);
    updateCountSelectOptions(poolSize, source);
  }

  function startQuiz(questions, category, count, source, saveSettings = true) {
    const prev = state;
    state = {
      questions,
      index: 0,
      score: 0,
      answered: false,
      wrongItems: [],
      attemptByIndex: {},
      lastCategory: saveSettings ? category : prev.lastCategory,
      lastCount: saveSettings ? count : prev.lastCount,
      lastSource: saveSettings ? source : prev.lastSource,
    };
    showScreen("quiz");
    renderQuestion();
  }

  function applyAnswerVisual(q, userAnswer, correct) {
    const isO = userAnswer === true;

    els.oxButtons.classList.add("answered");
    els.oxButtons.querySelectorAll(".btn-ox").forEach((btn) => {
      const val = btn.dataset.answer === "true";
      btn.disabled = true;

      if (val === q.answer) {
        btn.classList.add("correct-answer");
      } else if (val === userAnswer) {
        btn.classList.add("wrong-answer");
        btn.classList.add(isO ? "selected-o" : "selected-x");
      }
    });

    els.feedback.classList.remove("hidden");
    els.feedback.classList.add(correct ? "correct" : "wrong");
    els.feedbackIcon.textContent = correct ? "✓" : "✗";
    els.feedbackTitle.textContent = correct
      ? "정답입니다!"
      : `오답 · 정답은 ${q.answer ? "O" : "X"}`;
    els.feedbackExplanation.textContent = q.explanation;

    const btnNext = document.getElementById("btn-next");
    btnNext.textContent =
      state.index + 1 >= state.questions.length ? "결과 보기" : "다음 문제";
  }

  function clearQuestionAnswerUI() {
    els.feedback.classList.add("hidden");
    els.feedback.classList.remove("correct", "wrong");
    els.oxButtons.classList.remove("answered");

    els.oxButtons.querySelectorAll(".btn-ox").forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove(
        "selected-o",
        "selected-x",
        "correct-answer",
        "wrong-answer"
      );
    });
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;
    const pct = ((state.index + 1) / total) * 100;

    els.progressBar.style.width = `${pct}%`;
    els.questionCounter.textContent = `${state.index + 1} / ${total}`;
    els.categoryBadge.textContent = q.categoryLabel;
    els.scoreLive.textContent = `${state.score}점`;
    els.questionText.textContent = q.text;
    updateBookmarkButton(q.id);

    els.btnPrevQuestion.disabled = state.index <= 0;

    const saved = state.attemptByIndex[state.index];
    if (saved) {
      const correct = q.answer === saved.userAnswer;
      clearQuestionAnswerUI();
      applyAnswerVisual(q, saved.userAnswer, correct);
      state.answered = true;
    } else {
      clearQuestionAnswerUI();
      state.answered = false;
    }
  }

  function handleAnswer(userAnswer) {
    if (state.attemptByIndex[state.index] !== undefined) return;
    if (state.answered) return;

    const q = state.questions[state.index];
    state.attemptByIndex[state.index] = { userAnswer };

    const correct = q.answer === userAnswer;

    if (correct) state.score += 1;
    else state.wrongItems.push(q);

    els.scoreLive.textContent = `${state.score}점`;

    applyAnswerVisual(q, userAnswer, correct);
    state.answered = true;
  }

  function goToPrevQuestion() {
    if (state.index <= 0) return;
    state.index -= 1;
    renderQuestion();
  }

  function goToNextQuestionOrResult() {
    if (!state.answered) return;
    const total = state.questions.length;
    if (state.index + 1 >= total) {
      showResult();
      return;
    }
    state.index += 1;
    renderQuestion();
  }

  function showResult() {
    const total = state.questions.length;
    const correct = state.score;
    const wrong = total - correct;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    saveBestScore(correct, total);

    els.finalScore.textContent = String(correct);
    els.finalTotal.textContent = String(total);
    els.statCorrect.textContent = String(correct);
    els.statWrong.textContent = String(wrong);
    els.statPercent.textContent = `${percent}%`;

    const circumference = 327;
    const offset = circumference - (percent / 100) * circumference;
    els.ringProgress.style.strokeDashoffset = String(offset);

    if (percent >= 90) {
      els.resultEmoji.textContent = "🏆";
      els.resultTitle.textContent = "훌륭합니다!";
      els.resultMessage.textContent = "한능검 핵심 개념을 잘 익히셨네요.";
    } else if (percent >= 70) {
      els.resultEmoji.textContent = "📚";
      els.resultTitle.textContent = "잘하고 있어요!";
      els.resultMessage.textContent = "오답 노트를 보며 한 번 더 복습해 보세요.";
    } else if (percent >= 50) {
      els.resultEmoji.textContent = "💪";
      els.resultTitle.textContent = "조금만 더!";
      els.resultMessage.textContent = "틀린 문제 위주로 다시 풀어 보세요.";
    } else {
      els.resultEmoji.textContent = "📖";
      els.resultTitle.textContent = "복습이 필요해요";
      els.resultMessage.textContent =
        "해설을 읽으며 시대별로 차근차근 정리해 보세요.";
    }

    if (state.wrongItems.length > 0) {
      els.wrongReview.classList.remove("hidden");
      els.btnRetryWrong.classList.remove("hidden");
      els.wrongList.innerHTML = state.wrongItems
        .map(
          (q) => `
        <li>
          <p class="q-text">${escapeHtml(q.text)}</p>
          <p class="q-answer ${q.answer ? "answer-o" : "answer-x"}">정답: ${q.answer ? "O" : "X"}</p>
          <p class="q-explain">${escapeHtml(q.explanation)}</p>
        </li>`
        )
        .join("");
    } else {
      els.wrongReview.classList.add("hidden");
      els.btnRetryWrong.classList.add("hidden");
      els.wrongList.innerHTML = "";
    }

    showScreen("result");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("btn-theme");
    const icon = document.getElementById("theme-icon");
    if (!btn || !icon) return;

    if (theme === "light") {
      icon.textContent = "🌙";
      btn.setAttribute("aria-label", "다크 모드로 변경");
      btn.title = "다크 모드";
    } else {
      icon.textContent = "☀️";
      btn.setAttribute("aria-label", "라이트 모드로 변경");
      btn.title = "라이트 모드";
    }
  }

  function loadTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* ignore */
    }
    return "dark";
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  }

  function initTheme() {
    applyTheme(loadTheme());
    document.getElementById("btn-theme")?.addEventListener("click", toggleTheme);
  }

  function init() {
    initTheme();
    updateBestDisplay();
    updateBookmarkDisplay();
    updateTotalPreview();

    els.sourceSelect.addEventListener("change", updateTotalPreview);
    els.categorySelect.addEventListener("change", updateTotalPreview);

    els.btnBookmark.addEventListener("click", () => {
      const q = state.questions[state.index];
      if (q) toggleBookmark(q.id);
    });

    els.btnStart.addEventListener("click", () => {
      const category = els.categorySelect.value;
      const source = els.sourceSelect.value;
      const count = parseInt(els.countSelect.value, 10);
      const questions = getFilteredQuestions(category, count, source);
      if (questions.length === 0) return;
      startQuiz(questions, category, count, source);
    });

    els.oxButtons.querySelectorAll(".btn-ox").forEach((btn) => {
      btn.addEventListener("click", () => {
        handleAnswer(btn.dataset.answer === "true");
      });
    });

    els.btnPrevQuestion.addEventListener("click", goToPrevQuestion);

    document.getElementById("btn-next").addEventListener("click", goToNextQuestionOrResult);

    document.getElementById("btn-restart").addEventListener("click", () => {
      const questions = getFilteredQuestions(
        state.lastCategory,
        state.lastCount,
        state.lastSource
      );
      if (questions.length === 0) return;
      startQuiz(
        questions,
        state.lastCategory,
        state.lastCount,
        state.lastSource
      );
    });

    els.btnRetryWrong.addEventListener("click", () => {
      if (state.wrongItems.length === 0) return;
      const questions = shuffle(state.wrongItems);
      startQuiz(questions, state.lastCategory, state.lastCount, state.lastSource, false);
    });

    document.getElementById("btn-home").addEventListener("click", () => {
      showScreen("start");
      updateTotalPreview();
    });

    document.addEventListener("keydown", (e) => {
      if (!screens.quiz.classList.contains("active")) return;

      if (e.key === "ArrowLeft") {
        if (state.index > 0) {
          e.preventDefault();
          goToPrevQuestion();
        }
        return;
      }

      if (state.answered) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToNextQuestionOrResult();
        }
        return;
      }

      if (e.key === "o" || e.key === "O") handleAnswer(true);
      if (e.key === "x" || e.key === "X") handleAnswer(false);
    });
  }

  init();
})();
