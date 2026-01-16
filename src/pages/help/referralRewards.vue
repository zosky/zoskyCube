<template>
  <div class="help-page">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-green">🤝 REFERRAL REWARDS SYSTEM</h1>
        <p class="subtitle">Earn 10% of What Your Referrals Make!</p>
      </header>

      <!-- Section 1: Overview -->
      <section id="overview" class="help-section">
        <h2 class="crt-text-green">📖 How Referral Rewards Work</h2>
        
        <div class="content-block">
          <h3>The Basics</h3>
          <p>When you refer someone to the channel and they start earning zCubes, <strong>you get a 10% bonus</strong> of their earnings! It's a win-win: they get zCubes for participating, and you get rewarded for bringing them in.</p>
          
          <div class="pro-tip">
            <strong>💡 Why Refer Friends?</strong> If your friend earns 5,000 zC in a day playing mini-games, you get an automatic 500 zC bonus! The more active your referrals, the more you earn.
          </div>
        </div>

        <div class="content-block">
          <h3>Key Features</h3>
          <ul>
            <li><strong>10% Bonus:</strong> Get 10% of everything your referrals earn</li>
            <li><strong>Top 10 Daily:</strong> Bonuses calculated from your top 10 earners each day</li>
            <li><strong>Automatic Payouts:</strong> Calculated daily and paid automatically</li>
            <li><strong>Lifetime Tracking:</strong> See total earnings from each referral</li>
            <li><strong>Discord Announcements:</strong> Public recognition when bonuses pay out</li>
          </ul>
        </div>
      </section>

      <!-- Section 2: How to Set Up -->
      <section id="setup" class="help-section">
        <h2 class="crt-text-green">🔗 Setting Up Your Referral</h2>

        <div class="content-block">
          <h3>For New Users (Being Referred)</h3>
          <ol>
            <li><strong>Complete Triple OAuth:</strong> Go to <a href="/auth" class="crt-text-cyan">zoskycube.github.io/zoskyCube/auth</a></li>
            <li><strong>Link All 3 Services:</strong> Connect Twitch, Discord, and Steam</li>
            <li><strong>Select Referrer:</strong> Choose who referred you from the dropdown menu of all whitelisted users</li>
            <li><strong>Start Earning:</strong> Play mini-games and earn zCubes!</li>
          </ol>

          <div class="note">
            <strong>⏰ Important:</strong> You can only set your referrer ONCE and it cannot be changed later. Make sure you select the correct person from the dropdown!
          </div>
        </div>

        <div class="content-block">
          <h3>For Referrers (Inviting Friends)</h3>
          <ol>
            <li><strong>Tell Friends About the Stream:</strong> Share your enthusiasm for the community</li>
            <li><strong>Direct to Auth Page:</strong> Send them to the Triple OAuth page</li>
            <li><strong>Wait for Registration:</strong> They must complete all 3 OAuth connections and select you from dropdown</li>
            <li><strong>Verify Setup:</strong> Use <code>/referral</code> command in Discord to check your referral status</li>
            <li><strong>Earn Bonuses:</strong> Get 10% of their daily earnings automatically!</li>
          </ol>

          <div class="pro-tip">
            <strong>💡 Pro Tip:</strong> Active referrals earn you the most! Encourage friends to play mini-games regularly to maximize your bonuses.
          </div>
        </div>
      </section>

      <!-- Section 3: Important Limits -->
      <section id="limits" class="help-section">
        <h2 class="crt-text-green">📊 Important Limits</h2>

        <div class="content-block">
          <div class="warning-box">
            <strong>⚠️ Minimum Requirement:</strong> Both you and your referral must earn at least 1,000 zC on the target day to qualify for bonuses.
          </div>

          <div class="pro-tip">
            <strong>💡 Maximum Bonus Cap:</strong> Referral bonuses are capped at 110% of your own daily earnings/effort. This ensures fair play and rewards active participation!
          </div>
        </div>
      </section>

      <!-- Section 4: Requirements -->
      <section id="tips" class="help-section">
        <h2 class="crt-text-green">🏆 Pro Tips for Maximizing Referrals</h2>

        <div class="tips-grid">
          <div class="tip-card">
            <h3>🎯 Quality Over Quantity</h3>
            <p>10 active players earn you more than 100 inactive ones. Focus on bringing engaged community members!</p>
          </div>

          <div class="tip-card">
            <h3>🎮 Teach the Games</h3>
            <p>Help your referrals learn mini-games. The better they play, the more you both earn!</p>
          </div>

          <div class="tip-card">
            <h3>💬 Stay Connected</h3>
            <p>Remind friends about new games and events. Active referrals = consistent bonuses.</p>
          </div>

          <div class="tip-card">
            <h3>📊 Track Your Growth</h3>
            <p>Use the <code>/referral</code> command in Discord to check your referral status and see who's most active!</p>
          </div>

          <div class="tip-card">
            <h3>🔗 Share the Auth Link</h3>
            <p>Make it easy for friends by sending the direct link: <code>/auth</code></p>
          </div>

          <div class="tip-card">
            <h3>🎁 Explain the Benefits</h3>
            <p>Tell friends about Daily Dose, mini-games, and the store to get them excited!</p>
          </div>
        </div>
      </section>

      <!-- Quick Reference -->
      <section class="help-section quick-reference">
        <h2 class="crt-text-green">📋 Quick Reference</h2>

        <div class="grid-container">
          <div class="ref-block">
            <h3 class="crt-text-cyan">Bonus Rate</h3>
            <p class="big-number">10%</p>
            <p>Of referral earnings</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-yellow">Top Earners</h3>
            <p class="big-number">10 Max</p>
            <p>Per day per referrer</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-red">Minimum</h3>
            <p class="big-number">1,000 zC</p>
            <p>Daily to qualify</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-green">Calculation</h3>
            <p class="big-number">Daily</p>
            <p>Midnight EST</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="help-footer">
        <p class="crt-text-green">Build your referral network and earn together! 🤝✨</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No special logic needed
</script>

<style scoped>
/* Inherit base styles from dailyDose.vue */
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

.content-block p, .content-block ul, .content-block ol {
  line-height: 1.8;
  margin: 10px 0;
}

.content-block ul,
.content-block ol {
  padding-left: 30px;
}

.content-block li {
  margin: 10px 0;
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
  line-height: 1.8;
}

.calc-steps {
  margin: 30px 0;
}

.calc-step {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-left: 4px solid #00ff00;
  border-radius: 5px;
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #00ff00;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
}

.step-content h4 {
  color: #00ffff;
  margin: 0 0 5px 0;
}

.step-content p {
  margin: 0;
  color: #ccc;
}

.example-box {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}

.example-box h4 {
  color: #00ffff;
  margin: 0 0 15px 0;
}

.example-box ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.example-box li {
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.example-box .total {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 2px solid #00ff00;
  font-size: 20px;
  color: #00ff00;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 30px 0;
}

.req-item {
  text-align: center;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 0, 0.3);
  border-radius: 10px;
}

.req-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.req-item h4 {
  color: #00ff00;
  font-size: 14px;
  margin: 5px 0;
}

.req-item p {
  font-size: 12px;
  color: #aaa;
  margin: 5px 0;
}

.firestore-structure {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}

.firestore-structure h4 {
  color: #ffff00;
  margin: 15px 0 10px 0;
}

.firestore-structure code {
  display: block;
  background: rgba(0, 255, 0, 0.1);
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border-left: 4px solid #00ff00;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.tip-card {
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.tip-card:hover {
  border-color: #00ffff;
  transform: translateY(-5px);
}

.tip-card h3 {
  color: #00ffff;
  font-size: 18px;
  margin: 0 0 10px 0;
}

.tip-card p {
  margin: 0;
  line-height: 1.6;
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
