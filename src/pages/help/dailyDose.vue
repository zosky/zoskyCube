<template>
  <div class="help-page">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-green">💊 DAILY DOSE GUIDE</h1>
        <p class="subtitle">Free Daily zCubes!</p>
      </header>

      <!-- Section 1: What is Daily Dose -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-green">📖 What is Daily Dose?</h2>
        
        <div class="content-block">
          <h3>Overview</h3>
          <p>Daily Dose is a channel points redemption that gives you <strong>+1,000 zCubes</strong> every 25 hours! It's the easiest way to earn zCubes without playing mini-games.</p>
          
          <div class="pro-tip">
            <strong>💡 Fun Fact:</strong> The 25-hour cooldown (instead of 24 hours) means you can redeem at slightly different times each day, making it easier to fit into your schedule!
          </div>
        </div>
      </section>

      <!-- Section 2: How to Redeem -->
      <section id="redeem" class="help-section">
        <h2 class="crt-text-green">🎁 How to Redeem</h2>

        <div class="content-block">
          <h3>Step-by-Step</h3>
          <ol>
            <li><strong>Complete Triple OAuth</strong> - Must link Twitch, Discord, AND Steam accounts at <a href="https://zosky.github.io/zoskyCube/auth" class="crt-text-cyan">zosky.github.io/zoskyCube/auth</a></li>
            <li><strong>Open Channel Points</strong> - Click the <Points currency="zB" class="points-inline h-6 w-6 -mt-3" /> (zBlock icon) below the chat</li>
            <li><strong>Find "dailyDose"</strong> - Look for the reward in the list</li>
            <li><strong>Click Redeem</strong> - Spend your Twitch channel points</li>
            <li><strong>Wait for Confirmation</strong> - Chat will announce your reward!</li>
          </ol>

          <div class="note">
            <strong>⚠️ Important:</strong> You MUST complete Triple OAuth (Twitch + Discord + Steam) before redeeming. Without authentication, your redemption will be refunded!
          </div>
        </div>

        <div class="content-block">
          <h3>Chat Confirmation</h3>
          <div class="message-box">
            <code class="crt-text-green">💊 @username dailyDose +1k = 12.3k 🧊 ⏱️ 45h30m</code>
          </div>
          <p>The bot will confirm your redemption with:</p>
          <ul>
            <li><strong>+1k</strong> - zCubes awarded</li>
            <li><strong>12.3k</strong> - Your new balance</li>
            <li><strong>45h30m</strong> - Your total watch time (if available)</li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Cooldown System -->
      <section id="cooldown" class="help-section">
        <h2 class="crt-text-green">⏰ 25-Hour Cooldown</h2>

        <div class="content-block">
          <h3>How the Cooldown Works</h3>
          <p>After redeeming Daily Dose, you must wait <strong>25 hours</strong> before you can redeem again.</p>
          
          <div class="cooldown-timeline">
            <div class="timeline-item">
              <strong>🕐 4:20 PM Monday</strong>
              <p>You redeem Daily Dose → Get 1,000 zC</p>
            </div>
            <div class="timeline-arrow">⬇️</div>
            <div class="timeline-item">
              <strong>🕐 5:20 PM Tuesday</strong>
              <p>Cooldown expires → Can redeem again!</p>
            </div>
          </div>

          <h3>What if I Try to Redeem Too Early?</h3>
          <div class="message-box">
            <code class="crt-text-red">⚠️ @username = dailyDose cooldown ⏰ wait 8hr | refunded 💰</code>
          </div>
          <p>If you redeem while on cooldown:</p>
          <ul>
            <li>❌ Redemption is automatically <strong>canceled</strong></li>
            <li>✅ Your Twitch channel points are <strong>refunded</strong></li>
            <li>⏰ Chat tells you how many hours remaining</li>
          </ul>

          <div class="pro-tip">
            <strong>💡 Pro Tip:</strong> The cooldown is tracked per user, not globally. Everyone has their own 25-hour timer!
          </div>
        </div>
      </section>

      <!-- Section 4: Requirements -->
      <section id="requirements" class="help-section">
        <h2 class="crt-text-green">✅ Requirements</h2>

        <div class="content-block">
          <h3>Triple OAuth Authentication</h3>
          <p>To prevent fraud and abuse, Daily Dose requires you to link all 3 services:</p>
          
          <div class="auth-requirements">
            <div class="auth-item">
              <div class="auth-icon">🎮</div>
              <h4>Twitch</h4>
              <p>Your primary account for chat and redemptions</p>
            </div>
            <div class="auth-item">
              <div class="auth-icon">💬</div>
              <h4>Discord</h4>
              <p>Server membership verification</p>
            </div>
            <div class="auth-item">
              <div class="auth-icon">🎯</div>
              <h4>Steam</h4>
              <p>Gaming profile integration</p>
            </div>
          </div>

          <p class="center-text">
            <a href="https://zosky.github.io/zoskyCube/auth" class="auth-button">Complete Triple OAuth →</a>
          </p>

          <div class="warning-box">
            <strong>⚠️ Fraud Prevention:</strong> Attempting to use multiple accounts to farm Daily Dose will result in all linked accounts being flagged and banned from redemptions.
          </div>
        </div>
      </section>

      <!-- Section 6: Tracking -->
      <section id="tracking" class="help-section">
        <h2 class="crt-text-green">📊 Tracking Your Rewards</h2>

        <div class="content-block">
          <p>All Daily Dose redemptions are tracked in multiple systems:</p>
          
          <ul>
            <li><strong>StreamElements:</strong> Your zCube balance updates instantly</li>
            <li><strong>Firestore:</strong> Redemption history and cooldown status</li>
            <li><strong>Discord:</strong> redeems channel post</li>
          </ul>

          <div class="pro-tip">
            <strong>💡 Did you know?</strong> You can check your balance anytime by typing <code>!zCubes</code> in Twitch chat!
          </div>
        </div>
      </section>

      <!-- Quick Reference -->
      <section class="help-section quick-reference">
        <h2 class="crt-text-green">📋 Quick Reference</h2>

        <div class="grid-container">
          <div class="ref-block">
            <h3 class="crt-text-red">Cost</h3>
            <p class="big-number">1000 <Points currency="zb" class="points-inline h-10 w-10 -ml-2 -mt-4" /></p>
            <p>Channel Points</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-cyan">Reward Amount</h3>
            <p class="big-number">+1,000 <Points currency="zc" class="points-inline h-10 w-10 -ml-2 -mt-4" /></p>
            <p>Every redemption</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-yellow">Cooldown</h3>
            <p class="big-number">25 hours</p>
            <p>Between redemptions</p>
          </div>

          <!-- <div class="ref-block">
            <h3 class="crt-text-green">Requirement</h3>
            <p class="big-number">Triple oAuth</p>
            <p>Twitch + Discord + Steam</p>
          </div> -->
        </div>
      </section>

      <!-- Footer -->
      <footer class="help-footer">
        <p class="crt-text-green">Enjoy your daily dose of zCubes! 💊✨</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Points from '../../components/Points.vue';

// No special logic needed
</script>

<style scoped>
/* Copy styles from other help pages */
.help-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%);
  color: #e0e0e0;
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  padding: 40px 20px;
}

.help-container {
  max-width: 1200px;
  margin: 0 auto;
}

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
}

.subtitle {
  font-size: 18px;
  color: #aaa;
  margin: 0;
}

.help-section {
  margin-bottom: 60px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 10px;
}

.help-section h2 {
  font-size: 32px;
  margin: 0 0 20px 0;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 10px;
}

.content-block {
  margin-bottom: 30px;
}

.content-block h3 {
  color: #00ffff;
  font-size: 24px;
  margin: 20px 0 10px 0;
}

.content-block p {
  line-height: 1.8;
  margin: 10px 0;
}

.content-block ul,
.content-block ol {
  margin: 15px 0;
  padding-left: 30px;
}

.content-block li {
  margin: 10px 0;
  line-height: 1.6;
}

.pro-tip {
  background: rgba(255, 255, 0, 0.1);
  border-left: 4px solid #ffff00;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.note {
  background: rgba(0, 255, 255, 0.1);
  border-left: 4px solid #00ffff;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.warning-box {
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  text-align: center;
}

.message-box {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #00ff00;
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
}

.cooldown-timeline {
  margin: 30px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.timeline-item {
  padding: 15px;
  margin: 10px 0;
  background: rgba(0, 255, 255, 0.1);
  border-left: 4px solid #00ffff;
  border-radius: 5px;
}

.timeline-arrow {
  text-align: center;
  font-size: 32px;
  margin: 10px 0;
}

.auth-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.auth-item {
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 0, 0.3);
  border-radius: 10px;
}

.auth-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.auth-item h4 {
  color: #00ff00;
  margin: 10px 0 5px 0;
}

.center-text {
  text-align: center;
  margin: 30px 0;
}

.auth-button {
  display: inline-block;
  padding: 15px 40px;
  background: #00ff00;
  color: #000;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease;
}

.auth-button:hover {
  background: #00ffff;
  transform: scale(1.05);
}

.quick-reference {
  background: rgba(0, 255, 0, 0.05);
  border-color: #00ff00;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.ref-block {
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 0, 0.3);
  border-radius: 10px;
}

.ref-block h3 {
  font-size: 14px;
  margin: 0 0 10px 0;
  text-transform: uppercase;
}

.big-number {
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
  color: #00ff00;
}

.help-footer {
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
  border-top: 2px solid #00ff00;
}

.help-footer p {
  font-size: 20px;
  margin: 20px 0;
}

code {
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}
</style>
