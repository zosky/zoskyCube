<template>
  <div class="help-page" :class="{ 'auto-scroll-mode': autoScroll }">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-yellow">⚡ ZOSKY ZAPPERS GUIDE</h1>
        <p class="subtitle">Epic Throwing Battles!</p>
      </header>

      <!-- Section 1: Game Basics -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-yellow">📖 How Zosky Zappers Works</h2>
        
        <div class="content-block">
          <h3>Overview</h3>
          <p>Zosky Zappers is an epic throwing battle game where you face off against another viewer or an AI opponent! Adjust your angle and power, account for the wind, and try to hit your opponent before they hit you!</p>
          
          <h3>Game Modes</h3>
          <ul>
            <li><strong>PvP (Player vs Player):</strong> Challenge another viewer in chat to a head-to-head battle!</li>
            <li><strong>PvE (Player vs AI):</strong> If no one joins within 3 minutes, face off against the AI!</li>
          </ul>
        </div>
      </section>

      <div class="pro-tip">
        <strong>💡 Pro Tip:</strong> Watch the wind direction and speed! It can dramatically affect your throw's trajectory.
      </div>

      <!-- Section 2: How to Play -->
      <section id="commands" class="help-section">
        <h2 class="crt-text-yellow">🎮 How to Play</h2>

        <div class="content-block">
          <h3>Starting a Game</h3>
          <ol>
            <li><strong>Host creates lobby:</strong> Type <code class="crt-text-yellow">!zz [3-digit-code-on-stream]</code> in chat</li>
            <li><strong>Wait for opponent:</strong> Another viewer joins using <code class="crt-text-yellow">!zz [new-code]</code></li>
            <li><strong>Or wait 3 minutes:</strong> If no one joins, you'll face the machine! </li>
            <li>Try not to get turned into a battery</li>
            <li><strong>[OPTIONAL] pay-to-play/impatience tax:</strong> use <code class="crt-text-yellow">!zz goTime</code> to skip waiting before & after a game at a cost of 1 <Points currency="zc" class="points-inline" /> per second</li>
          </ol>

          <h3>During Your Turn</h3>
          <ol class="list-disc">
            <li><code class="crt-text-yellow">!zz [angle:20-89] [power:120-800]</code></li>
            <li><strong>Set your angle:</strong> Choose the trajectory of your throw<br>(min:20, max:89. ~45° is usually optimal)</li>
            <li><strong>Set your power:</strong> Determine how far your projectile will go<br>(min:120, max:800. ~350 is a good starting point)</li>
            <li><strong>Account for wind:</strong> Check the wind indicator and adjust accordingly</li>
            <li><strong>Throw!</strong> Watch your projectile fly and hope for a hit!</li>
          </ol>
        </div>
      </section>

      <!-- Section 3: Game Mechanics -->
      <section id="mechanics" class="help-section">
        <h2 class="crt-text-yellow">⚙️ Game Mechanics</h2>

        <div class="content-block">
          <h3>🌬️ Wind System</h3>
          <p>Wind affects your projectile in mid-air! Pay attention to:</p>
          <ul>
            <li><strong>Direction:</strong> Wind pushes left (←) or right (→)</li>
            <li><strong>Strength:</strong> Shown as a percentage (higher = stronger push)</li>
            <li><strong>Changes:</strong> Wind can change between rounds</li>
          </ul>

          <h3>🎯 Strike System</h3>
          <p>Players get 3 strikes before losing:</p>
          <ul>
            <li><strong>Miss:</strong> If your throw doesn't hit the opponent, no strike. make adjustments for your next turn<br>(and remember to account for the wind!)</li>
            <li><strong>Miss a Turn:</strong> If you don't take a shot during your turn (1 minute) you will get a strike!</li>
            <li><strong>Hit yourself:</strong> If you do, you give your opponent a point.</li>
            <li><strong>3 Strikes:</strong> You're out! Your opponent wins & you forfeit for being AFK (0 <Points currency="zc" class="points-inline" />)</li>
          </ul>

          <h3>🏆 Win/Loss Ratio</h3>
          <ul>
            <li><strong>Direct Hit:</strong> Landing a hit gives you a point</li>
            <li><strong>Winning:</strong> 3 points/hits to win the match</li>
          </ul>
          <p>Your performance is tracked with a W/L ratio displayed during gameplay. Build your reputation as a throwing champion!</p>
        </div>
      </section>

      <!-- Section 4: Rewards -->
      <section id="rewards" class="help-section">
        <h2 class="crt-text-yellow">💎 Rewards & <Points currency="zc" class="points-inline" /> zCubes</h2>

        <div class="content-block">
          <ul>
            <li>🎉 Win = 
                  <Points currency="zc" class="points-display" /> 
                  <Points currency="zc" class="points-display" /> 
                  <Points currency="zc" class="points-display" />
            </li>
            <li>
              ☠️ Lose = 
                  <Points currency="zc" class="points-display" /> (participation prize)
            </li>          
          </ul>
          <p>Victory earns you zCubes to spend in the store! The better your aim, the more you'll win.</p>
        </div>
      </section>

      <!-- Section 5: Pro Tips -->
      <section id="tips" class="help-section">
        <h2 class="crt-text-yellow">🏆 Pro Tips & Strategy</h2>

        <div class="tips-grid">
          <div class="tip-card">
            <h3>🌬️ Master the Wind</h3>
            <p>Strong wind can push your projectile way off course! Adjust your angle and power to compensate.</p>
          </div>

          <div class="tip-card">
            <h3>📐 Learn the Angles</h3>
            <p>45 degrees is usually optimal for distance, but you'll need to adjust based on your opponent's position.</p>
          </div>

          <div class="tip-card">
            <h3>⚡ Quick Joins</h3>
            <p>Watch for lobby codes on stream! Quick joiners get more PvP action and avoid AI matches.</p>
          </div>

          <div class="tip-card">
            <h3>🎯 Practice Makes Perfect</h3>
            <p>Each throw teaches you more about physics and wind effects. Don't be discouraged by misses!</p>
          </div>

          <div class="tip-card">
            <h3>🤖 AI Opponents</h3>
            <p>The AI learns from each shot! It gets smarter as the match goes on, so don't underestimate it.</p>
          </div>

          <div class="tip-card">
            <h3>🔥 Build Streaks</h3>
            <p>Win multiple games in a row to build your reputation and climb the leaderboard!</p>
          </div>
        </div>
      </section>

      <!-- Quick Reference -->
      <section class="help-section quick-reference">
        <h2 class="crt-text-yellow">📋 Quick Reference</h2>

        <div class="grid-container">
          <div class="ref-block">
            <h3 class="crt-text-cyan">Start Game</h3>
            <p class="big-number">!zz [lobby-code]</p>
            <p>1st person creates a lobby</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-green">Join Game</h3>
            <p class="big-number">!zz [new-code]</p>
            <p>2nd player challenges the host</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-red">or Lobby Timer</h3>
            <p class="big-number">3 min</p>
            <p>then test your might against the machines</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-yellow">Strike Limit</h3>
            <p class="big-number">3</p>
            <p>miss this many, forfeit the match</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="help-footer">
        <p class="crt-text-yellow">May your aim be true and your throws victorious! ⚡🎯</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const autoScroll = ref(route.query.autoScroll === 'true')

let scrollAnimationId = null

// Smooth scrolling for anchor links
const handleAnchorClick = (e) => {
  if (autoScroll.value) return // Disable clicks in auto-scroll mode
  
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

// Auto-scroll functionality with bounce-back animation
const startAutoScroll = () => {
  const helpPage = document.querySelector('.help-page')
  
  if (!helpPage) return
  
  let direction = 1 // 1 for down, -1 for up
  let scrollSpeed = 1 // pixels per frame (slow scroll down)
  let pauseFrames = 0
  const PAUSE_DURATION = 360 // Pause for 6 seconds (360 frames at 60fps)
  
  const scroll = () => {
    const maxScroll = helpPage.scrollHeight - helpPage.clientHeight
    const currentScroll = helpPage.scrollTop

    // Handle pausing
    if (pauseFrames > 0) {
      pauseFrames--
      scrollAnimationId = requestAnimationFrame(scroll)
      return
    }

    if (direction === 1) {
      // Scrolling down slowly
      helpPage.scrollTop += scrollSpeed
      
      // Reached bottom, pause then bounce back to top
      if (currentScroll >= maxScroll - 10) {
        pauseFrames = PAUSE_DURATION
        direction = -1
        scrollSpeed = 100 // Fast scroll up (bounce back)
      }
    } else {
      // Scrolling up fast (bounce back)
      helpPage.scrollTop -= scrollSpeed
      
      // Reached top, pause then start slow scroll down again
      if (currentScroll <= 10) {
        pauseFrames = PAUSE_DURATION
        direction = 1
        scrollSpeed = 1 // Back to slow scroll
      }
    }

    scrollAnimationId = requestAnimationFrame(scroll)
  }

  scrollAnimationId = requestAnimationFrame(scroll)
}

onMounted(() => {
  document.addEventListener('click', handleAnchorClick)
  
  if (autoScroll.value) {
    // Start auto-scroll after a brief delay
    setTimeout(startAutoScroll, 1000)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleAnchorClick)
  if (scrollAnimationId) {
    cancelAnimationFrame(scrollAnimationId)
  }
})
</script>

<style scoped>
.help-page {
  font-size: 20px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%);
  color: #e0e0e0;
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  padding: 40px 20px 80px 20px;
  overflow-y: auto;
  overflow-x: hidden;
}

.help-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

/* Header */
.help-header {
  text-align: center;
  margin-bottom: 10px;
  padding: 40px 20px;
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
}

.help-header h1 {
  font-size: 48px;
  margin: 0 0 10px 0;
  text-shadow: 0 0 20px #ffff00;
}

.subtitle {
  font-size: 20px;
  color: #00ffff;
  margin: 0;
}

/* Sections */
.help-section {
  margin-bottom: 6px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid #333;
  border-radius: 10px;
  scroll-margin-top: 20px;
}

.help-section h2 {
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 30px;
  text-shadow: 0 0 15px #ffff00;
  border-bottom: 2px solid #ffff00;
  padding-bottom: 10px;
}

.help-section h3 {
  font-size: 24px;
  color: #00ffff;
  margin-top: 30px;
  margin-bottom: 15px;
}

.help-section h4 {
  font-size: 20px;
  color: #ffff00;
  margin-top: 20px;
  margin-bottom: 10px;
}

.content-block p {
  line-height: 1.8;
  font-size: 16px;
  margin: 10px 0;
}

.content-block ul, .content-block ol {
  line-height: 1.8;
  margin: 15px 0;
  padding-left: 30px;
}

.content-block li {
  margin: 8px 0;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.tip-card {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
  padding: 20px;
}

.tip-card h3 {
  margin-top: 0;
  font-size: 18px;
  color: #ffff00;
}

.tip-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

/* Grid Container for reference blocks */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 20px 0;
}

/* Quick Reference */
.quick-reference {
  background: rgba(255, 255, 0, 0.05);
  border: 3px solid #ffff00;
}

.ref-block {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.ref-block h3 {
  margin-top: 0;
  font-size: 18px;
}

.big-number {
  font-size: 42px;
  font-weight: bold;
  color: #ffff00;
  margin: 15px 0;
  text-shadow: 0 0 15px #ffff00;
}

.ref-block p:last-child {
  margin: 0;
  font-size: 14px;
  color: #aaa;
}

/* Pro Tips */
.pro-tip {
  background: rgba(255, 255, 0, 0.1);
  border-left: 4px solid #ffff00;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.pro-tip strong {
  color: #ffff00;
}

/* Auto-scroll mode */
.auto-scroll-mode .back-to-top {
  display: none;
}

/* Code styling */
code {
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  font-size: 14px;
}

/* Footer */
.help-footer {
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
  border-top: 2px solid #ffff00;
}

.help-footer p {
  margin: 15px 0;
  font-size: 18px;
}

/* CRT Text Effects */
.crt-text-green {
  color: #00ff00;
}

.crt-text-red {
  color: #ff0000;
}

.crt-text-yellow {
  color: #ffff00;
}

.crt-text-cyan {
  color: #00ffff;
}

.crt-text-blue {
  color: #0088ff;
}

/* Responsive */
@media (max-width: 768px) {
  .tips-grid,
  .grid-container {
    grid-template-columns: 1fr;
  }

  .help-header h1 {
    font-size: 32px;
  }

  .help-section h2 {
    font-size: 28px;
  }

  .big-number {
    font-size: 32px;
  }
}

/* Points styling */
.points-display {
  display: inline-block;
  vertical-align: middle;
  height: 2rem;
  width: auto;
  margin: 0 2px;
}

.points-inline {
  display: inline-block;
  vertical-align: middle;
  scale: 1.75;
  width: auto;
  margin: 0 2px;
}

/* Deep selector to target Points component's img/svg */
:deep(.points-display img),
:deep(.points-display svg) {
  height: 2rem;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

:deep(.points-inline img),
:deep(.points-inline svg) {
  height: 1.5rem;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

strong { @apply font-bold }
li { @apply list-disc }
</style>
