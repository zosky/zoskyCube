<template>
  <div class="help-page" :class="{ 'auto-scroll-mode': autoScroll }">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <img :src="gauntletLogo" alt="Gameplay Gauntlet" class="header-logo" />
        <div class="header-text">
          <h1 class="crt-text-gold">🏆 GAMEPLAY GAUNTLET</h1>
          <p class="subtitle">Vote for the Next Game We Play!</p>
        </div>
      </header>

      <!-- Section 1: Game Basics -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-gold">📖 How It Works</h2>

        <div class="content-block">
          <h3>Overview</h3>
          <p>
            Gameplay Gauntlet is a <strong>community voting game</strong> where viewers decide which Steam game gets played next!
            A pool of ~1,500 games scrolls across the stream overlay — use your <strong>vote budget</strong> to back your favorites.
            The first game to hit <strong>11 votes</strong> when the weekly Saturday deadline arrives is declared the <span class="highlight-gold">Community Pick</span> and gets played on stream!
          </p>
        </div>

        <div class="content-block">
          <h3>🗳️ Voting Commands</h3>
          <p>Each game on the ticker has a unique <strong>3-character code</strong> shown on its card. Use it to vote:</p>
          <ul>
            <li><code>!rABC</code> — Place 1 vote on game with code <code>ABC</code></li>
            <li><code>!rABC 3</code> — Place 3 votes at once (up to 5 per game)</li>
            <li><code>!r goTime</code> — Check your remaining vote budget &amp; cooldown status</li>
          </ul>
        </div>
      </section>

      <div class="pro-tip">
        <strong>💡 Strategy Tip:</strong> You can spread votes across multiple games or stack up to 5 on your top pick. Choose wisely — your budget is limited!
      </div>

      <!-- Section 2: Budget & Cooldowns -->
      <section id="budget" class="help-section">
        <h2 class="crt-text-gold">💰 Vote Budget</h2>

        <div class="content-block">
          <h3>📊 Budget System</h3>
          <ul>
            <li><strong>25 votes</strong> — Your total budget per session</li>
            <li><strong>5 max per game</strong> — Can't dump all votes on one game</li>
            <li><strong>+1 vote/hour</strong> — Budget replenishes hourly</li>
          </ul>
          <p>Spend your votes wisely! Once you're out, you'll need to wait for the hourly replenish.</p>
        </div>

        <div class="content-block">
          <h3>⏱️ Cooldowns</h3>
          <ul>
            <li><strong>7–10 min</strong> — Personal cooldown between votes (randomized)</li>
            <li><strong>2 min</strong> — Per-game cooldown (can't pile onto the same game too fast)</li>
          </ul>
        </div>

        <div class="warning-block">
          <h3>⚠️ Cooldown Penalty</h3>
          <p>
            Trying to vote during your cooldown <strong>costs you a vote from your budget</strong> and <strong>resets your cooldown</strong> to full!
            No votes are counted. Don't spam — be patient.
          </p>
        </div>

        <div class="warning-block">
          <h3>📉 Overdraft</h3>
          <p>
            If your budget hits zero (or goes negative), votes won't count and you won't earn rewards until the hourly replenish brings you back above zero.
          </p>
        </div>
      </section>

      <!-- Section 3: Rewards -->
      <section id="rewards" class="help-section">
        <h2 class="crt-text-gold">💎 Rewards & <Points currency="zc" class="points-inline" /> zCubes</h2>

        <div class="content-block">
          <h3>💰 Reward Breakdown</h3>
          <ul>
            <li><strong>+33 zC</strong> — Per successful vote placed</li>
          </ul>
          <p>Votes placed during cooldown or overdraft earn <strong>0 zC</strong>.</p>
        </div>
      </section>

      <!-- Section 4: Winning -->
      <section id="winning" class="help-section">
        <h2 class="crt-text-gold">🏆 Winning Conditions</h2>

        <div class="content-block">
          <h3>How a Winner Is Declared</h3>
          <ol class="list-disc">
            <li>Voting runs all week — the <strong>Saturday deadline</strong> (midnight EST) triggers the winner check</li>
            <li>The leading game with <strong>11+ votes</strong> from 3+ voters is declared the winner</li>
            <li>A <span class="highlight-gold">winner banner</span> is automatically generated and posted to Discord</li>
            <li>The winning game gets played on the next stream!</li>
          </ol>
        </div>

        <div class="pro-tip">
          <strong>💡 Note:</strong> If no game has reached 11 votes when the timer expires, voting continues until one does. The race isn't over until someone crosses the finish line!
        </div>
      </section>

      <!-- Section 5: The Overlay -->
      <section id="overlay" class="help-section">
        <h2 class="crt-text-gold">🖥️ Reading the Overlay</h2>

        <div class="content-block">
          <h3>Ticker Bar</h3>
          <p>The bottom of the stream shows a scrolling ticker with game cards:</p>
          <ul>
            <li><strong>Card size</strong> — Bigger cards = more votes (visual ranking)</li>
            <li><strong>3-char code</strong> — Shown on each card, use with <code>!r</code></li>
            <li><strong>Vote count</strong> — Current tally displayed on each card</li>
            <li><strong>Voter avatars</strong> — Circular Twitch avatars of who voted, with cooldown ring timers</li>
            <li><strong>🏆 separator</strong> — Shows session time remaining and <code>!r goTime</code> hint</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Masonry Grid</h3>
          <p>Above the ticker, a large grid displays all ~1,500 eligible games with Steam artwork. Games with votes are highlighted and promoted to the ticker.</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="help-footer">
        <router-link to="/help" class="back-link">← Back to Help Center</router-link>
        <p class="crt-text-cyan">Need more help? Ask in Twitch chat!</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import gauntletLogo from '@/assets/ttv/gameplayGauntlet.png'

const route = useRoute()
const autoScroll = computed(() => route.query.autoScroll === 'true')
</script>

<style scoped>
.help-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%);
  color: #e0e0e0;
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  padding: 40px 20px;
}

.help-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Header */
.help-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  padding: 30px 30px;
  background: rgba(255, 215, 0, 0.05);
  border: 2px solid #ffd700;
  border-radius: 10px;
}

.header-logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.4));
}

.header-text {
  display: flex;
  flex-direction: column;
}

.help-header h1 {
  font-size: 36px;
  margin: 0 0 2px 0;
}

.crt-text-gold {
  color: #ffd700;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
}

.subtitle {
  font-size: 18px;
  color: #00ffff;
  margin: 0;
}

/* Sections */
.help-section {
  margin-bottom: 40px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  border-radius: 10px;
}

.help-section h2 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.content-block {
  margin-bottom: 20px;
}

.content-block h3 {
  font-size: 18px;
  color: #e0e0e0;
  margin: 0 0 10px 0;
}

.content-block p {
  line-height: 1.7;
  margin: 0 0 10px 0;
}

.content-block ul, .content-block ol {
  margin: 10px 0;
  padding-left: 24px;
}

.content-block li {
  margin-bottom: 8px;
  line-height: 1.6;
}

code {
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 14px;
}

.highlight-gold {
  color: #ffd700;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
}

/* Pro tip */
.pro-tip {
  background: rgba(0, 255, 255, 0.08);
  border-left: 4px solid #00ffff;
  padding: 15px 20px;
  margin: 20px 0 30px;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  line-height: 1.6;
}

/* Warning block */
.warning-block {
  background: rgba(255, 80, 80, 0.08);
  border-left: 4px solid #ff5050;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 0 8px 8px 0;
}

.warning-block h3 {
  color: #ff5050;
  margin: 0 0 8px 0;
  font-size: 16px;
}

.warning-block p {
  line-height: 1.6;
  margin: 0;
}

/* Footer */
.help-footer {
  text-align: center;
  padding: 30px 0;
  border-top: 1px solid #333;
  margin-top: 40px;
}

.back-link {
  display: inline-block;
  color: #ffd700;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 10px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #ffed4a;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.points-inline {
  display: inline;
}
.points-inline :deep(img) {
  height: 1.2em;
  vertical-align: middle;
}

/* Auto-scroll for OBS display */
.auto-scroll-mode {
  animation: autoScrollDown 120s linear infinite;
}

@keyframes autoScrollDown {
  0% { transform: translateY(0); }
  100% { transform: translateY(-80%); }
}
</style>
