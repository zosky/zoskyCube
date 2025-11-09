<template>
  <div class="help-index">
    <div class="help-container">
      <!-- Header -->
      <header class="help-header">
        <h1 class="crt-text-green">📚 HELP CENTER</h1>
        <p class="subtitle">Choose a miniGame to learn more</p>
      </header>

      <!-- Help Topics Grid -->
      <div class="help-topics">
        <router-link to="/help/squadRush" class="help-card boss">
          <div class="card-icon">🎮</div>
          <h2>Boss Battle</h2>
          <p class="card-subtitle">Squad Rush Guide</p>
          <p class="card-description">
            Learn how to fight bosses with the community! Master ATB codes, healing zones, and combo attacks.
          </p>
          <div class="card-features">
            <span class="feature">⚔️ Combat System</span>
            <span class="feature">💚 Healing Mechanics</span>
            <span class="feature-reward">win <Points currency="zc" class="points-inline" /></span>
          </div>
        </router-link>

        <router-link to="/help/pixelPower" class="help-card art">
          <div class="card-icon">🎨</div>
          <h2>Pixel Power</h2>
          <p class="card-subtitle">AI Art Collaboration</p>
          <p class="card-description">
            Create amazing AI-generated art with the community! Submit words, earn rewards, and watch creativity come to life.
          </p>
          <div class="card-features">
            <span class="feature">📝 Word Submission</span>
            <span class="feature">🎯 Scrabble Scoring</span>
            <span class="feature-reward">win <Points currency="zc" class="points-inline" /></span>
          </div>
        </router-link>

        <router-link to="/help/vodVote" class="help-card vote">
          <div class="card-icon">🎬</div>
          <h2>VOD Vote</h2>
          <p class="card-subtitle">Choose What Plays Next</p>
          <p class="card-description">
            Vote for which video plays next! Pick the winning choice and earn zCube rewards.
          </p>
          <div class="card-features">
            <span class="feature">🗳️ Community Voting</span>
            <span class="feature">⏲️ 5 Min Timer</span>
            <span class="feature-reward">win <Points currency="zc" class="points-inline" /></span>
          </div>
        </router-link>
      </div>

      <!-- Full-width Coming Soon Banner -->
      <div class="coming-soon-banner">
        <div class="banner-left">
          <div class="card-icon">🔜</div>
          <h2>More Coming Soon!</h2>
        </div>
        <div class="banner-right">
          <p class="card-subtitle">Additional Guides</p>
          <p class="card-description">
            More interactive games and features are in development.<br />Stay tuned for updates!
          </p>
        </div>
      </div>

      <!-- Quick Links -->
      <!-- <section class="quick-links">
        <h2 class="crt-text-yellow">Quick Access</h2>
        <div class="links-grid">
          <a href="/help/squadRush?autoScroll=true" class="quick-link" target="_blank">
            <span class="link-icon">📺</span>
            <span class="link-text">Boss Battle (Auto-Scroll)</span>
          </a>
          <a href="/help/pixelPower?autoScroll=true" class="quick-link" target="_blank">
            <span class="link-icon">📺</span>
            <span class="link-text">Pixel Power (Auto-Scroll)</span>
          </a>
          <a href="/help/vodVote?autoScroll=true" class="quick-link" target="_blank">
            <span class="link-icon">📺</span>
            <span class="link-text">VOD Vote (Auto-Scroll)</span>
          </a>
          <router-link to="/boss" class="quick-link">
            <span class="link-icon">⚔️</span>
            <span class="link-text">Go to Boss Battle</span>
          </router-link>
          <router-link to="/art" class="quick-link">
            <span class="link-icon">🎨</span>
            <span class="link-text">Go to AI Art</span>
          </router-link>
          <router-link to="/vote" class="quick-link">
            <span class="link-icon">🎬</span>
            <span class="link-text">Go to VOD Vote</span>
          </router-link>
        </div>
      </section>
 -->
      <!-- Footer -->
      <footer class="help-footer">
        <p class="crt-text-cyan">Need more help? Ask in Twitch chat!</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No special logic needed for index page
</script>

<style scoped>
.help-index {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%);
  color: #e0e0e0;
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  padding: 40px 20px;
}

.help-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.help-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: rgba(0, 255, 0, 0.05);
  border: 2px solid #00ff00;
  border-radius: 10px;
}

.help-header h1 {
  font-size: 48px;
  margin: 0 0 10px 0;
  text-shadow: 0 0 20px #00ff00;
}

.subtitle {
  font-size: 20px;
  color: #00ffff;
  margin: 0;
}

/* Help Topics Grid */
.help-topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.help-card {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid #333;
  border-radius: 15px;
  padding: 30px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.help-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.help-card:hover::before {
  opacity: 1;
}

.help-card.boss {
  --accent-color: #ff0000;
  border-color: rgba(255, 0, 0, 0.3);
}

.help-card.boss:hover {
  border-color: #ff0000;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
  transform: translateY(-5px);
}

.help-card.art {
  --accent-color: #00ffff;
  border-color: rgba(0, 255, 255, 0.3);
}

.help-card.art:hover {
  border-color: #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  transform: translateY(-5px);
}

.help-card.vote {
  --accent-color: #00ff00;
  border-color: rgba(0, 255, 0, 0.3);
}

.help-card.vote:hover {
  border-color: #00ff00;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
  transform: translateY(-5px);
}

.help-card.coming-soon {
  --accent-color: #888;
  border-color: rgba(136, 136, 136, 0.3);
  opacity: 0.6;
  cursor: default;
}

.help-card.coming-soon:hover {
  transform: none;
  box-shadow: none;
}

.card-icon {
  font-size: 64px;
  text-align: center;
  margin-bottom: 20px;
}

.help-card h2 {
  font-size: 32px;
  margin: 0 0 5px 0;
  text-align: center;
}

.help-card.boss h2 {
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
}

.help-card.art h2 {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

.help-card.vote h2 {
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
}

.help-card.coming-soon h2 {
  color: #888;
}

.card-subtitle {
  text-align: center;
  font-size: 14px;
  color: #aaa;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.card-description {
  line-height: 1.8;
  font-size: 15px;
  margin: 0 0 25px 0;
  flex: 1;
  text-align: center;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.feature {
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 13px;
  color: #00ff00;
}

.help-card.boss .feature {
  background: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.3);
  color: #ff0000;
}

.help-card.art .feature {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.help-card.vote .feature {
  background: rgba(0, 255, 0, 0.1);
  border-color: rgba(0, 255, 0, 0.3);
  color: #00ff00;
}

.feature-reward {
  background: rgba(255, 255, 0, 0.15);
  border: 2px solid rgba(255, 255, 0, 0.6);
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 13px;
  color: #ffff00;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Points styling for feature badges */
.feature-reward .points-inline {
  display: inline-block;
  vertical-align: middle;
  height: 1.2rem;
  width: auto;
  margin: 0;
}

.feature-reward :deep(.points-inline img),
.feature-reward :deep(.points-inline svg) {
  height: 1.2rem;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

/* Coming Soon Banner (Full Width) */
.coming-soon-banner {
  background: rgba(136, 136, 136, 0.05);
  border: 2px solid rgba(136, 136, 136, 0.3);
  border-radius: 15px;
  padding: 20px 40px;
  margin-bottom: 60px;
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 40px;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
}

.banner-left .card-icon {
  font-size: 48px;
  margin: 0;
}

.banner-left h2 {
  font-size: 28px;
  margin: 0;
  color: #888;
  white-space: nowrap;
}

.banner-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.banner-right .card-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.banner-right .card-description {
  line-height: 1.6;
  font-size: 16px;
  margin: 0;
  color: #999;
}

/* Quick Links */
.quick-links {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid rgba(255, 255, 0, 0.3);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 60px;
}

.quick-links h2 {
  font-size: 28px;
  margin: 0 0 25px 0;
  text-align: center;
  text-shadow: 0 0 10px #ffff00;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  text-decoration: none;
  color: #00ffff;
  transition: all 0.3s;
}

.quick-link:hover {
  background: rgba(0, 255, 255, 0.15);
  border-color: #00ffff;
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.link-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.link-text {
  font-size: 16px;
  font-weight: bold;
}

/* Footer */
.help-footer {
  text-align: center;
  padding: 40px 20px;
  border-top: 2px solid rgba(0, 255, 0, 0.3);
}

.help-footer p {
  margin: 0;
  font-size: 18px;
}

/* CRT Text Colors */
.crt-text-green {
  color: #00ff00;
}

.crt-text-cyan {
  color: #00ffff;
}

.crt-text-yellow {
  color: #ffff00;
}

/* Responsive */
@media (max-width: 768px) {
  .help-topics {
    grid-template-columns: 1fr;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .help-header h1 {
    font-size: 32px;
  }

  .card-icon {
    font-size: 48px;
  }

  .help-card h2 {
    font-size: 24px;
  }
}
</style>
