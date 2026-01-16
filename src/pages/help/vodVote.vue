<template>
  <div class="help-page" :class="{ 'auto-scroll-mode': autoScroll }">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-green">🎬 VOD VOTE GAME GUIDE</h1>
        <p class="subtitle">Choose What Plays Next!</p>
      </header>

      <!-- Section 1: Game Basics -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-green">📖 How vodVote Works</h2>
        
        <div class="content-block">
          <h3>Overview</h3>
          <p>vodVote lets the chat decide which video plays next! When the game carousel appears, you have a limited time to vote for your favorite option. The most popular choice wins and plays next!
          <span style="font-weight: bold; color: #ffff00;">...but anyone who picks the <u>correct choice</u> will win <Points currency="zc" class="points-inline" /> (zC) to spend in the store!</span>
          </p>
        </div>

      </section>

    <div class="pro-tip">
        <strong>💡 Important:</strong> You must vote while the carousel is visible! Once it disappears, voting closes.
    </div>


      <!-- Section 3: Rewards -->
      <section id="rewards" class="help-section">
        <h2 class="crt-text-green">💎 Rewards & <Points currency="zc" class="points-inline" /> zCubes</h2>

        <div class="content-block">
          <h3>💰 Reward Breakdown</h3>
          <ul>
            <li><strong>+86 zC</strong> - Start a new game with <code>!vote</code> after cooldown</li>
            <li><strong>+75 zC</strong> - Vote for any game during voting period</li>
            <li><strong>+722 zC Jackpot!</strong> - Split among all winners if you picked the winning game!</li>
          </ul>
          <p>Everyone who votes for the winner shares the jackpot evenly. More winners = smaller individual share, but you still win!</p>
          
          <div class="pro-tip">
            <strong>💡 Example:</strong> If 3 people vote for the winner, each gets 722 ÷ 3 = 240 zC. If you're the only winner, you get the full 722 zC!
          </div>
        </div>
    </section>
    
    <!-- <div class="pro-tip">
      <strong>💡 Pro Tip:</strong> Pay attention to what the chat is voting for! Sometimes going with the crowd means more zCubes, but sometimes a dark horse pick can surprise everyone.
    </div> -->
      <!-- Section 4: Cooldown -->
      <!-- <section id="cooldown" class="help-section">
        <h2 class="crt-text-green">⏲️ Cooldown Timers</h2>

        <div class="content-block">
          <p>After a video is chosen and starts playing, there's a cooldown period before the next vote game can begin. This is shown in the top corner of the screen.</p>
          
          <div class="timer-info">
            <h4 class="crt-text-red">🕐 10 Min between games</h4>
            <p>The cooldown gives everyone time to enjoy the current video without constant interruptions.</p>
          </div>
        </div>

        <div class="content-block">
          <h3>When Can Voting Start Again?</h3>
          <p>Voting can start again when EITHER condition is met:</p>
          
          <ol class="list-disc">
            <li><strong>The video finishes playing completely</strong> - The content has ended naturally</li>
            <li><strong>The 10-minute cooldown expires</strong> and someone triggers a new game to start with !vote command</li>
          </ol>

        </div>
        
      </section> -->

      <!-- Section 5: Pro Tips -->
      <section id="tips" class="help-section">
        <h2 class="crt-text-green">🏆 Pro Tips & Strategy</h2>

        <div class="tips-grid">
          <div class="tip-card">
            <h3>⏰ Don't Wait Too Long</h3>
            <p>You have 5 minutes, but don't wait until the last second! Get your vote in early to avoid missing out.</p>
          </div>

          <div class="tip-card">
            <h3>👥 Check What Chat Wants</h3>
            <p>Watch what others are voting for! Sometimes the crowd has the right idea, and you'll increase your chances of winning zCubes.</p>
          </div>

          <div class="tip-card">
            <h3>🎯 Don't Remember the Codes</h3>
            <p>Entry codes are rotated regularly, so don't expect the same code to work the next game</p>
          </div>

          <div class="tip-card">
            <h3>🎬 Vote for What You Want to See</h3>
            <p>While winning zCubes is fun, remember you'll be watching this video! Pick something you actually want to see.</p>
          </div>

          <div class="tip-card">
            <h3>⚡ !vote Starts the Fun</h3>
            <p>After cooldown, be the first to type <code>!vote</code> to get the next round started! Community participation keeps it exciting.</p>
          </div>
        </div>

        
      </section>

      <!-- Quick Reference -->
      <section class="help-section quick-reference">
        <h2 class="crt-text-green">📋 Core game loop</h2>

        <div class="grid-container">
          <div class="ref-block">
            <h3 class="crt-text-cyan">Vote Duration</h3>
            <p class="big-number">5 min</p>
            <p>Time to choose</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-yellow">Vote Command</h3>
            <p class="big-number">!gXX</p>
            <p>Pick a game</p>
          </div>


          <div class="ref-block">
            <h3 class="crt-text-red">Cooldown Period</h3>
            <p class="big-number">10 min</p>
            <p>Enjoy the VOD</p>
          </div>

          <div class="ref-block">
            <h3 class="crt-text-green">New game</h3>
            <p class="big-number">!vote</p>
            <p>Begin new round</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="help-footer">
        <p class="crt-text-green">May your votes be winners and your zCubes plentiful! 🎬✨</p>
        <!-- <p><a href="/" class="back-link">← Back to Stream</a></p> -->
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

/* Table of Contents */
.toc {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 10px;
}

.toc h2 {
  margin-top: 0;
  font-size: 28px;
  text-shadow: 0 0 10px #ffff00;
}

.toc ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.toc a {
  color: #00ffff;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 5px;
  transition: all 0.3s;
}

.toc a:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: translateX(5px);
  text-shadow: 0 0 10px #00ffff;
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
  text-shadow: 0 0 15px #00ff00;
  border-bottom: 2px solid #00ff00;
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

/* Command List */
.command-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.command-item {
  background: rgba(0, 255, 255, 0.05);
  border-left: 4px solid #00ffff;
  padding: 15px;
  border-radius: 5px;
}

.command-item h3 {
  margin-top: 0;
  font-size: 20px;
}

.command-item code {
  background: rgba(255, 255, 0, 0.2);
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 16px;
}

/* Timer Info Box */
.timer-info {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.timer-info h4 {
  margin-top: 0;
  font-size: 24px;
}

/* Reward Highlight */
.reward-highlight {
  background: rgba(255, 215, 0, 0.1);
  border: 3px solid #ffd700;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.reward-highlight h4 {
  color: #ffd700;
  font-size: 24px;
  margin-top: 0;
}

.reward-highlight ul {
  list-style: none;
  padding: 0;
}

.reward-highlight li {
  font-size: 18px;
  padding: 10px 0;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.tip-card {
  background: rgba(255, 215, 0, 0.05);
  border: 2px solid #ffd700;
  border-radius: 10px;
  padding: 20px;
}

.tip-card h3 {
  margin-top: 0;
  font-size: 18px;
  color: #ffd700;
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
  background: rgba(0, 255, 0, 0.05);
  border: 3px solid #00ff00;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
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
  background: rgba(255, 215, 0, 0.1);
  border-left: 4px solid #ffd700;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.pro-tip strong {
  color: #ffd700;
}

/* VIP Note */
.vip-note {
  background: rgba(0, 255, 255, 0.1);
  border-left: 4px solid #00ffff;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.vip-note strong {
  color: #00ffff;
}

/* Back to Top Link */
.back-to-top {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  border-radius: 5px;
  color: #00ff00;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  text-align: center;
}

.back-to-top:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
  text-shadow: 0 0 10px #00ff00;
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
  border-top: 2px solid #00ff00;
}

.help-footer p {
  margin: 15px 0;
  font-size: 18px;
}

.back-link {
  color: #00ffff;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s;
}

.back-link:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: scale(1.05);
  text-shadow: 0 0 10px #00ffff;
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
  .reference-grid,
  .grid-container {
    grid-template-columns: 1fr;
  }

  .command-list {
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
  /* height: 1.5rem; */
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
</style>