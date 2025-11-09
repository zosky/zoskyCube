<template>
  <div class="help-page" :class="{ 'auto-scroll-mode': autoScroll }">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-green">🎮 BOSS BATTLE GUIDE</h1>
        <p class="subtitle">How to Play & Win!</p>
      </header>

      <!-- Table of Contents -->
      <nav v-if="!autoScroll" class="toc">
        <h2 class="crt-text-yellow">Quick Navigation</h2>
        <ul>
          <li><a href="#basics">Game Basics</a></li>
          <li><a href="#commands">Chat Commands</a></li>
          <li><a href="#positions">War & Healing Zones</a></li>
          <li><a href="#atb">ATB System</a></li>
          <li><a href="#halos">Halo Mechanics</a></li>
          <li><a href="#vip">VIP Benefits</a></li>
          <li><a href="#stats">Stats & Leaderboard</a></li>
          <li><a href="#tips">Pro Tips</a></li>
          <li><a href="#death">Death</a></li>
          <li><a href="#theend">The End</a></li>
        </ul>
      </nav>

      <!-- Section 1: Game Basics -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-green">📖 Game Basics</h2>
        
        <div class="content-block">
          <h3>Objective</h3>
          <p>Work together with other viewers to defeat the boss! Each player deals damage, defends against attacks, and earns points on the leaderboard.</p>
          
          <h3>How to Join</h3>
          <p>Simply type <code class="crt-text-yellow">!a</code> or <code class="crt-text-yellow">!attack</code> in Twitch chat to enter the battle!</p>
          
          <img :src="joinImg" alt="Player joining the battle" class="help-image">
        </div>

        <div class="content-block">
          <h3>The Battlefield</h3>
          <p>The screen is divided into 4 zones:</p>
          <ul>
            <li><strong class="crt-text-red">Boss Zone (Left)</strong> - The enemy boss you must defeat</li>
            <li><strong class="crt-text-cyan">War Zone (Center-Left)</strong> - For attacking the boss</li>
            <li><strong class="crt-text-blue">Healing Zone (Center-Right)</strong> - For healing yourself</li>
            <li><strong class="crt-text-green">Leaderboard (Right)</strong> - Top damage dealers and stats</li>
          </ul>
          <p>Players need to move between the War Zone to do damage and Healing Zone to not die (more on that later).</p>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 2: Chat Commands -->
      <section id="commands" class="help-section">
        <h2 class="crt-text-green">💬 Chat Commands</h2>

        <div class="command-list">
          <div class="command-item">
            <h3><code class="crt-text-yellow">!a</code> or <code>!attack</code></h3>
            <p>Join the battle and receive your character</p>
          </div>

          <div class="command-item">
            <h3><code class="crt-text-yellow">!a [code]</code> or <code>!attack [code]</code></h3>
            <p><strong>War Zone Only</strong> - Attack the boss with your ATB code</p>
            <p>Once your blue ATB bar fills up, you'll have a chance to make a move. Example: <code>!a xyz123</code> or <code>!axyz123</code> (space optional!). <strong>Timing Matters:</strong> For maximum damage, use the full 4-digit code quickly! If you take too long, the code shortens to 3 digits (less effective). The full code still works, but damage is reduced based on displayed length. Further delays: 2 digits (even less effective), then 1 digit (least effective). After 1 digit expires: You get a strike. After the strike: You miss your turn entirely.</p>
            
            <div class="vip-note">
              <strong>👑 Subs & VIPs:</strong> You'll need to do the command but not the [code] - you will see ····  to show the effectiveness of your timing!
            </div>
            
            <img :src="attackImg" alt="Player attacking with ATB code" class="help-image">
          </div>

          <div class="command-item">
            <h3><code class="crt-text-yellow">!d [code]</code> or <code>!defend [code]</code></h3>
            <p><strong>Everyone uses this when the boss is ready to attack!</strong> Behavior depends on your position:</p>
            <ul>
              <li><strong>War Zone:</strong> Use <code>!d</code> with the boss telegraph code to defend. No halo appears, but damage is reduced for the whole team. The more defenders, the less damage everyone takes!</li>
              <li><strong>Healing Zone - Step 1:</strong> When your ATB bar fills, use <code>!d</code> with your own ATB code to get a blue halo. The blue halo negates all damage when the boss attacks.</li>
              <li><strong>Healing Zone - Step 2 (Halo Upgrade):</strong> If you also use <code>!d</code> with the boss telegraph code before the attack, your blue halo upgrades to green and inverts the damage into healing!</li>
            </ul>
            
            <div class="vip-note">
              <strong>👑 Subs & VIPs:</strong> You'll need to do the command but not the [code] - you will see ···· to show the effectiveness of your timing!
            </div>
          </div>

          <div class="command-item">
            <h3><code class="crt-text-yellow">!b [username]</code> or <code>!boost [username]</code></h3>
            <p>Boost a teammate by lowering their ATB timer by 30 seconds</p>
            <ul>
              <li>Example: <code>!b username</code> or <code>!b @username</code> (@ is optional)</li>
              <li>Helps teammates get their turn faster</li>
              <li>2 minute cooldown between uses</li>
            </ul>
            <div class="pro-tip">
              <strong>💡 Pro Tip:</strong> Use it to line up your friends' ATB to achieve combo hits!
            </div>
          </div>

          <div class="command-item">
            <h3><code class="crt-text-yellow">!f</code> or <code>!front</code> / <code class="crt-text-yellow">!bk</code> or <code>!back</code></h3>
            <p>Switch between War Zone (attack) and Healing Zone (heal)</p>
            <ul>
              <li>War Zone: Can attack the boss</li>
              <li>Healing Zone: Can heal yourself (cannot attack)</li>
              <li>2 minute cooldown between switches</li>
              <li>Strategic positioning is key!</li>
            </ul>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 3: Positions -->
      <section id="positions" class="help-section">
        <h2 class="crt-text-green">⚔️ War Zone vs Healing Zone</h2>

        <div class="position-comparison">
          <div class="position-block front-row">
            <h3 class="crt-text-cyan">🗡️ War Zone</h3>
            <ul>
              <li>✅ Can use <code class="crt-text-yellow">!a</code> to attack boss</li>
              <li>✅ Can use <code class="crt-text-yellow">!d</code> to defend (reduces damage taken)</li>
              <li>✅ Can use <code class="crt-text-yellow">!b [username]</code> to boost teammates</li>
              <li>❌ Cannot heal</li>
              <li>🎯 Your attacks deal direct damage to boss</li>
            </ul>
          </div>

          <div class="position-block back-row">
            <h3 class="crt-text-blue">💚 Healing Zone</h3>
            <ul>
              <li>❌ Cannot use <code class="crt-text-yellow">!a</code> - will heal slowly</li>
              <li>✅ Can use <code class="crt-text-yellow">!d</code> for healing (2-step process)</li>
              <li>✅ Can use <code class="crt-text-yellow">!b [username]</code> to boost teammates</li>
              <li>✅ Healing is inverted if 2-stage successful</li>
              <li>💚 Green halo = healing active</li>
            </ul>
          </div>
        </div>

        <img :src="positionsImg" alt="War Zone and Healing Zone positions" class="help-image">
        
        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 4: ATB System -->
      <section id="atb" class="help-section">
        <h2 class="crt-text-green">⏱️ ATB System</h2>

        <div class="content-block">
          <h3>What is ATB?</h3>
          <p>ATB (Active Time Battle) is your turn meter. It fills over time, and when full, you get a code to use commands.</p>

          <h3>How it Works</h3>
          <ol>
            <li><strong>Charging:</strong> Your ATB bar fills from 0% to 100%</li>
            <li><strong>Code Appears:</strong> When full, a 4-digit code appears above your character</li>
            <li><strong>Code Shortens:</strong> After a little time, code shortens to 3 digits, then 2, then 1</li>
            <li><strong>Use it or Lose it:</strong> Code expires after full timer, then ATB resets</li>
          </ol>

          <div class="code-examples">
            <h3>Code Timing Examples</h3>
            <table>
              <tr>
                <th>Time Left</th>
                <th>Code Length</th>
                <th>Example</th>
                <th>Damage Multiplier</th>
              </tr>
              <tr>
                <td>60s - 45s</td>
                <td>4 digits</td>
                <td class="crt-text-yellow">abcd</td>
                <td>2.0x</td>
              </tr>
              <tr>
                <td>45s - 30s</td>
                <td>3 digits</td>
                <td class="crt-text-yellow">abc</td>
                <td>1.5x</td>
              </tr>
              <tr>
                <td>30s - 15s</td>
                <td>2 digits</td>
                <td class="crt-text-yellow">ab</td>
                <td>1.25x</td>
              </tr>
              <tr>
                <td>15s - 0s</td>
                <td>1 digit</td>
                <td class="crt-text-yellow">a</td>
                <td>1.0x</td>
              </tr>
            </table>
          </div>

          <div class="pro-tip">
            <strong>💡 Pro Tip:</strong> Attack quickly with 4-digit codes for maximum damage! But remember - you can still use "abcd" even when it shows "ab" on screen.
          </div>
          
          <div class="vip-note">
            <strong>👑 Subs & VIPs:</strong> You may need to do the same command in quick succession. TTV will block that if less than 30sec; since you also don't need to do a code, anything after would still let your msg be unique (and the code will happen for you) Example: <code>!a woohoo</code>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 5: Halo Mechanics -->
      <section id="halos" class="help-section">
        <h2 class="crt-text-green">✨ Halo Mechanics</h2>

        <div class="halo-types">
          <div class="halo-block blue-halo">
            <h3 class="crt-text-cyan">🛡️ Blue Halo (Defense)</h3>
            <p><strong>How to Get (Healing Zone Only):</strong></p>
            <ul>
              <li>· Move to Healing Zone</li>
              <li>· Fill ATB</li>
              <li>· Use <code>!d</code> with ATB code</li>
            </ul>
            <p><strong>Effect:</strong></p>
            <ul>
              <li>· Blocks boss damage (0 damage taken)</li>
              <li>· One time use</li>
              <li>· Can upgrade to green halo!</li>
            </ul>
            <p><strong>Duration:</strong> Until boss attacks</p>

            <div class="halo-images">
              <img :src="backRowDefendImg" alt="Healing Zone player defending" class="help-image-inline">
              <img :src="backRowHaloBlueImg" alt="Player with blue halo" class="help-image-inline">
            </div>
          </div>

          <div class="halo-block green-halo">
            <h3 class="crt-text-green">💚 Green Halo (Healing)</h3>
            <p><strong>How to Get (Healing Zone Only):</strong></p>
            <ul>
              <li>· Get Blue Halo (see above)</li>
              <li>· Wait for boss to telegraph attack</li>
              <li>· Use <code>!d</code> with boss telegraph code</li>
            </ul>
            <p><strong>Effect:</strong></p>
            <ul>
              <li>· Blocks ALL boss damage (0 damage)</li>
              <li>· Heals you for a portion of the boss damage</li>
              <li>· Example: Boss deals 76 damage → You heal +32 HP instead!</li>
              <li>· Green "+XX" number shows healing applied</li>
            </ul>
            <p><strong>Duration:</strong> Until boss attacks</p>

            <div class="pro-tip">
              <strong>💡 Pro Tip:</strong> Each player should take a turn in the Healing Zone and maximize their time with the green combo, then get back into battle to earn more points!
            </div>

            <img :src="backRowHaloGreenImg" alt="Healing Zone player with green healing halo" class="help-image">
          </div>
        </div>

        <div class="content-block">
          <h3>Four-Step Healing Process Explained</h3>
          <div class="step-by-step">
            <div class="step">
              <span class="step-number">1</span>
              <div class="step-content">
                <strong>Move to Healing Zone</strong>
                <p>Type: <code>!bk</code> or <code>!back</code></p>
                <p>Result: You move to the Healing Zone</p>
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div class="step-content">
                <strong>Activate Blue Halo (Forcefield)</strong>
                <p>Type: <code>!d xyz123</code> (your ATB code when prompted)</p>
                <p>Result: Blue forcefield halo appears around you</p>
              </div>
            </div>
            <div class="step step-full-width">
              <span class="step-number">3</span>
              <div class="step-content">
                <strong>Upgrade to Green Halo (Wait for boss telegraph)</strong>
                <p>Type: <code>!d hccee</code> (boss telegraph code when it appears)</p>
                <p>Result: Blue → Green, damage becomes healing!</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 6: VIP Benefits -->
      <section id="vip" class="help-section">
        <h2 class="crt-text-green">👑 VIP Benefits</h2>

        <div class="content-block">
          <h3>Who is a VIP?</h3>
          <ul>
            <li>🎥 Broadcaster (the streamer)</li>
            <li>🛡️ Moderators</li>
            <li>👑 Channel VIPs</li>
            <li>⭐ Subscribers</li>
          </ul>

          <h3>VIP Auto-Success</h3>
          <p>VIPs don't need to enter codes perfectly! Just type the command:</p>
          <ul>
            <li><code>!a</code> → Automatically attacks with 100% success</li>
            <li><code>!d</code> → Automatically defends or heals correctly</li>
          </ul>

          <div class="vip-note">
            <strong>📝 VIP Note:</strong> VIPs can still type codes if they want, but it's optional. However, if the game needs the same command (without a code) in less than 30 seconds, Twitch doesn't allow duplicate messages but the game does - just add noise like <code>!a woohoo</code> to bypass the filter!
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 7: Stats & Leaderboard -->
      <section id="stats" class="help-section">
        <h2 class="crt-text-green">📊 Stats & Leaderboard</h2>

        <div class="content-block">
          <h3>What's Tracked?</h3>
          <ul>
            <li><strong>Total Damage:</strong> All damage you've dealt to the boss</li>
            <li><strong>Turns Taken:</strong> Number of actions (attacks, defends, etc.)</li>
            <li><strong>MVP Categories:</strong>
              <ul>
                <li>🗡️ Most Hits (successful attacks)</li>
                <li>🛡️ Most Blocks (successful defends)</li>
                <li>⚡ Most Boosts (boost usage count)</li>
              </ul>
            </li>
          </ul>

          <h3>Leaderboard Display</h3>
          <p>The right side shows top performers in real-time:</p>
          <ul>
            <li><strong>Top 5 Damage Dealers:</strong> Ranked by total damage</li>
            <li><strong>Most Active Players:</strong> Ranked by turn count</li>
            <li><strong>MVP Badges:</strong> Icons appear next to category leaders</li>
          </ul>

          <img :src="leaderboardImg" alt="Leaderboard showing player rankings" class="help-image">

          <div class="pro-tip">
            <strong>💡 Pro Tip:</strong> Stats only show when greater than 0. New players won't appear until they deal damage or take an action!
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 8: Pro Tips -->
      <section id="tips" class="help-section">
        <h2 class="crt-text-green">🏆 Pro Tips & Strategy</h2>

        <div class="tips-grid">
          <div class="tip-card">
            <h3>⏱️ Timing is Everything</h3>
            <p>Attack with 4-digit codes for maximum damage. Don't wait too long or your code will shorten!</p>
          </div>

          <div class="tip-card">
            <h3>🛡️ Defend Together</h3>
            <p>Multiple defenders reduce damage for EVERYONE. When boss telegraphs, coordinate defends!</p>
          </div>

          <div class="tip-card">
            <h3>💚 Strategic Healing Zone Use</h3>
            <p>Use the Healing Zone strategically - you cannot do damage or earn points, but you can heal super quick if you activate the green heal halo!</p>
          </div>

          <div class="tip-card">
            <h3>⚡ Boost for Combos</h3>
            <p>Use <code>!b [username]</code> to line up your friends' ATB to achieve combo hits! Has a 2-minute cooldown, so use wisely.</p>
          </div>

          <div class="tip-card">
            <h3>👥 Watch the Next Up List</h3>
            <p>The "Next Up" shows who's about to get ATB. Coordinate attacks for combo damage!</p>
          </div>

          <div class="tip-card">
            <h3>📱 Spaces Don't Matter</h3>
            <p><code>!axyz</code> and <code>!a xyz</code> both work! Type however is comfortable for you.</p>
          </div>

          <div class="tip-card">
            <h3>🎯 Full Codes Always Work</h3>
            <p>If code shows "ab" but you sent "abcd", it will still work at half power for 2 letters as your 3-letter time ran out (after your 4-letter time ran out) check your buffer or maybe reload</p>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 9: Death & Revival -->
      <section id="death" class="help-section">
        <h2 class="crt-text-green">💀 Death & What Happens</h2>

        <div class="content-block">
          <h3>⚠️ AFK Strikes System</h3>
          <p>Missing your ATB gives you a strike - watch for the red circle beside your name!</p>
          
          <img :src="backRowHaloBlueImg" alt="Player with strike indicator" class="help-image">
          
          <ul>
            <li>· Miss your ATB code = 1 strike (red circle appears)</li>
            <li>· Get 3 strikes = AFK status = Auto-death & forfeit your % of winnings</li>
            <li>· Must actively play the game to win rewards</li>
          </ul>

          <div class="pro-tip">
            <strong>💡 Important:</strong> If you die without getting 3 strikes, you still get your % of the winnings for playing as best as you could. The strike system only punishes AFK players, not those who tried their best!
          </div>

          <h3>Regular Death</h3>
          <p>You are dead until the next game starts, so watch your life and heal as needed!</p>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 10: The End -->
      <section id="theend" class="help-section">
        <h2 class="crt-text-green">🏆 The End</h2>

        <div class="content-block">
          <img :src="theEndImg" alt="Game over screen showing winnings distribution" class="help-image">
          
          <h3>Win Big as a Team!</h3>
          <ul>
            <li><strong>Victory:</strong> Split 1000 cubes according to the % damage each person did</li>
            <li><strong>Defeat:</strong> Get your % of 100 cubes based on damage contribution</li>
          </ul>

          <div class="pro-tip">
            <strong>💡 Pro Tip:</strong> Even in defeat, contributing damage means you earn cubes! Every attack counts toward your share.
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Footer -->
      <footer v-if="!autoScroll" class="help-footer">
        <p class="crt-text-green">Good luck, warrior! May your codes be swift and your halos be green! 🎮</p>
        <p><a href="/boss" class="back-link">← Back to Battle</a></p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// Import images using Vite
import joinImg from '@/assets/help/join.png'
import attackImg from '@/assets/help/attack.png'
import positionsImg from '@/assets/help/positions.png'
import backRowDefendImg from '@/assets/help/back-row-deffend.png'
import backRowHaloBlueImg from '@/assets/help/back-row-halo-blue.png'
import backRowHaloGreenImg from '@/assets/help/back-row-halo-green.png'
import leaderboardImg from '@/assets/help/leaderboard.png'
import deadImg from '@/assets/help/dead.png'
import theEndImg from '@/assets/help/theEnd.png'

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

// Auto-scroll functionality
const startAutoScroll = () => {
  const helpPage = document.querySelector('.help-page')
  
  if (!helpPage) return
  
  let direction = 1 // 1 for down, -1 for up
  let scrollSpeed = 1 // pixels per frame (slow scroll down)
  let frameCount = 0
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
      
      // Reached bottom, pause then rubberband to top
      if (currentScroll >= maxScroll - 10) {
        pauseFrames = PAUSE_DURATION
        direction = -1
        scrollSpeed = 100 // Fast scroll up (rubberband)
      }
    } else {
      // Scrolling up fast (rubberband)
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

/* Table of Contents */
.toc {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 40px;
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
  margin-bottom: 60px;
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

/* Content Blocks */
.content-block {
  margin-bottom: 30px;
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
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.command-item {
  background: rgba(0, 255, 255, 0.05);
  border-left: 4px solid #00ffff;
  padding: 20px;
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

/* Position Comparison */
.position-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
}

.position-block {
  padding: 25px;
  border-radius: 10px;
  border: 2px solid;
}

.position-block.front-row {
  background: rgba(0, 255, 255, 0.05);
  border-color: #00ffff;
}

.position-block.back-row {
  background: rgba(0, 255, 0, 0.05);
  border-color: #00ff00;
}

.position-block h3 {
  margin-top: 0;
  font-size: 24px;
}

.position-block ul {
  list-style: none;
  padding: 0;
}

.position-block li {
  padding: 8px 0;
  font-size: 16px;
}

/* Code Examples Table */
.code-examples {
  margin: 30px 0;
}

.code-examples table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.code-examples th, .code-examples td {
  border: 1px solid #333;
  padding: 12px;
  text-align: left;
}

.code-examples th {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.code-examples tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* Halo Blocks */
.halo-types {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
}

.halo-block {
  padding: 25px;
  border-radius: 10px;
  border: 3px solid;
}

.halo-block.blue-halo {
  background: rgba(0, 136, 255, 0.05);
  border-color: #0088ff;
}

.halo-block.green-halo {
  background: rgba(0, 255, 0, 0.05);
  border-color: #00ff00;
}

.halo-block h3 {
  margin-top: 0;
  font-size: 26px;
}

/* Step by Step */
.step-by-step {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 30px 0;
}

@media (min-width: 768px) {
  .step-by-step {
    grid-template-columns: 1fr 1fr;
  }
  
  .step-full-width {
    grid-column: 1 / -1;
  }
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(0, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #00ffff;
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #00ffff;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.step-content {
  flex: 1;
}

.step-content strong {
  display: block;
  font-size: 20px;
  color: #00ffff;
  margin-bottom: 8px;
}

/* VIP Comparison */
.vip-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
}

.vip-col {
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid #333;
  border-radius: 10px;
}

.vip-col h4 {
  color: #ffff00;
  font-size: 20px;
  margin-top: 0;
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
  background: rgba(255, 215, 0, 0.15);
  border-left: 4px solid #ffd700;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.vip-note strong {
  color: #ffd700;
}

/* Note */
.note {
  background: rgba(255, 165, 0, 0.1);
  border-left: 4px solid #ffa500;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
  font-size: 14px;
}

/* Visual Placeholder */
.visual-placeholder {
  background: rgba(255, 0, 255, 0.1);
  border: 2px dashed #ff00ff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
}

.visual-placeholder strong {
  color: #ff00ff;
  display: block;
  margin-bottom: 10px;
}

.visual-placeholder code {
  background: rgba(255, 0, 255, 0.2);
  padding: 4px 8px;
  border-radius: 3px;
  color: #ff00ff;
}

/* Help Images */
.help-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 20px auto;
  border: 2px solid #00ff00;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
}

.help-image-inline {
  width: 48%;
  height: auto;
  border: 2px solid #0088ff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 136, 255, 0.3);
}

.halo-images {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .help-image-inline {
    width: 100%;
  }
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
  .position-comparison,
  .vip-comparison {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .help-header h1 {
    font-size: 32px;
  }

  .help-section h2 {
    font-size: 28px;
  }
}
</style>