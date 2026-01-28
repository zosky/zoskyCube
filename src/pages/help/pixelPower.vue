<template>
  <div class="help-page" :class="{ 'auto-scroll-mode': autoScroll }">
    <div class="help-container">
      <!-- Header -->
      <header id="top" class="help-header">
        <h1 class="crt-text-green">🎨 PIXEL POWER: AI ART COLLAB</h1>
        <p class="subtitle">Create Amazing AI Art Together!</p>
      </header>

      <!-- Table of Contents -->
      <nav v-if="!autoScroll" class="toc">
        <h2 class="crt-text-yellow">Quick Navigation</h2>
        <ul>
          <li><a href="#basics">Game Basics</a></li>
          <li><a href="#commands">How to Play</a></li>
          <li><a href="#limits">Submission Limits</a></li>
          <li><a href="#dictionary">Word Rules</a></li>
          <li><a href="#scoring">Scrabble Scoring</a></li>
          <li><a href="#display">Word Display</a></li>
          <li><a href="#generation">Image Generation</a></li>
          <li><a href="#rewards">Rewards</a></li>
          <li><a href="#tips">Pro Tips</a></li>
        </ul>
      </nav>

      <!-- Section 1: Game Basics -->
      <section id="basics" class="help-section">
        <h2 class="crt-text-green">📖 Game Basics</h2>
        
        <div class="content-block">
          <h3>What is Pixel Power?</h3>
          <p>Pixel Power is a collaborative AI art creation game where the Twitch community works together to generate unique images! Submit words in chat through 12 rounds (3 words per round = 36 total), and the AI creates a stunning video game-style artwork based on ALL submitted words combined!</p>
          
          <h3>How It Works</h3>
          <ol>
            <li><strong>Round System:</strong> Game has 12 rounds, each accepting 3 words starting with a specific letter</li>
            <li><strong>Submit Words:</strong> When each round starts, the starting letter is displayed on stream.<br> Type <code class="crt-text-yellow">!art [word-with-matching-first-letter]</code> in chat</li>
            <li><strong>Collection Builds:</strong> 3 words per round x 12 rounds = 36 words across all rounds</li>
            <!-- <li><strong>Words Display:</strong> Each word shows with definition for 60 seconds</li> -->
            <li><strong>Image Generated:</strong> AI creates art when 36 words reached every 4-6 hours<br>(or in the very unlikely event 24 hours pass without collecting enough words)</li>
            <li><strong>Earn Rewards:</strong> Get zCubes based on a mod'd Scrabble score × 13 multiplier!</li>
          </ol>

          <div class="pro-tip">
            <strong>💡 Cool Feature:</strong> each round will end after 3 words are submitted. There is a 5-10 min cooldown before the next round. This prevents spam and gives everyone time to participate across different time zones!
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 2: Commands -->
      <section id="commands" class="help-section">
        <h2 class="crt-text-green">💬 How to Play</h2>

        <div class="command-list">
          <div class="command-item">
            <h3><code class="crt-text-yellow">!art [word]</code></h3>
            <p>Submit a single dictionary word to the collection</p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li><code>!art dragon</code> - Submit the word "dragon"</li>
              <li><code>!art sword</code> - Submit the word "sword"</li>
              <li><code>!art crystal</code> - Submit the word "crystal"</li>
            </ul>

            <div class="note">
              <strong>⚠️ Important:</strong> Only ONE word at a time! Words like "fire dragon" won't work. Submit them separately: <code>!art fire</code> then <code>!art dragon</code>
            </div>
          </div>

          <div class="command-item">
            <h3>What Happens After Submission?</h3>
            <ol>
              <li><strong>Validation:</strong> Word is checked against dictionary API</li>
              <li><strong>Scoring:</strong> Scrabble score is calculated (see Scoring section)</li>
              <!-- <li><strong>Display:</strong> Word appears on stream with full definition for 60 seconds</li> -->
              <li><strong>Collection Update:</strong>per round countdown (e.g. 3 words left)</li>
            </ol>

            <!-- <div class="pro-tip">
              <strong>💡 Pro Tip:</strong> While your word is being displayed, the word cloud is hidden. After 60 seconds, the display switches back to show ALL submitted words in the cloud!
            </div> -->
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 3: Submission Limits -->
      <section id="limits" class="help-section">
        <h2 class="crt-text-green">⏱️ Submission Limits</h2>

        <div class="content-block">
          <h3>Per-User Limits</h3>
          <p>To keep things fair and give everyone a chance to contribute:</p>
          
          <!-- <div class="limit-box hourly">
            <h4>🕐 Hourly Limit</h4>
            <ul>
              <li><strong>3 words per hour</strong> per user</li>
              <li>Resets every 60 minutes from your first word</li>
              <li>Timer is tracked individually for each user</li>
            </ul>
            
            <div class="example">
              <strong>Example:</strong>
              <ul>
                <li>🕐 12:00 PM - Submit "dragon" (2 left this hour)</li>
                <li>🕐 12:15 PM - Submit "sword" (1 left this hour)</li>
                <li>🕐 12:30 PM - Submit "fire" (0 left this hour)</li>
                <li>🚫 12:45 PM - Try "crystal" → ❌ Hourly limit reached!</li>
                <li>✅ 1:00 PM - Your hour resets, can submit 3 more!</li>
              </ul>
            </div>
          </div> -->

          <div class="limit-box daily">
            <h4>📅 Daily Limit</h4>
            <ul>
              <li><strong>12 words per day</strong> per user</li>
              <li>Reset when the next picture is created <strong>after midnight EST (UTC-5) or in summer EDT (UTC-4)</strong></li>
              <li>Shared across all users (everyone resets together)</li>
            </ul>

            <div class="example">
              <strong>Example:</strong>
              <ul>
                <li>If the session started (in winter) at 5:01 UTC</li>
                <li>You can submit up to 12 words total until 5:00 UTC</li>
                <li>At 5:00 UTC, everyone's daily limit resets to 12</li>
              </ul>
            </div>
          </div>

          <h3>What Happens When You Hit a Limit?</h3>
          <div class="limit-messages">
            <div class="message-box">
              <code class="crt-text-red">🔄 @username You've added your word this round! Wait for the next round (check overlay for cooldown).</code>
              <p>each user may submit 1 word per round, please wait for the next round</p>
            </div>
            <div class="message-box">
              <code class="crt-text-red">🎨 @username 🟨 YELLOW card! You've hit your daily limit. Half points on your next word tomorrow 🌙</code>
              <p>each successful submission will tell you how many words you have left. when you have used all 12, your avatar will also display on stream beside a lock symbol as a reminder with a timer counting down till "tomorrow" (in EDT/EST) then it will say "reset after round 12"</p>
              <p>reset happens after a new picture is made every "new day" (relative to the streamer's timezone)</p>
            </div>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 4: Dictionary Rules -->
      <section id="dictionary" class="help-section">
        <h2 class="crt-text-green">📚 Word Rules</h2>

        <div class="content-block">
          <h3>Valid Words</h3>
          <p>All words are validated using a real English dictionary API. To be accepted, your word must:</p>
          <ul>
            <li>✅ Be a real English word</li>
            <li>✅ Be found in the dictionary</li>
            <li>✅ Be a single word (some exceptions apply like "black hole")</li>
            <li>✅ Be spelled correctly</li>
          </ul>

          <h3>Invalid Words</h3>
          <ul>
            <li>❌ Multiple words: "fire dragon" → Use separately</li>
            <li>❌ Misspellings: "dragn" → Won't be accepted</li>
            <li>❌ Made-up words: "flibbertigibbet" → Depends on dictionary!</li>
            <li>❌ Numbers/symbols: "dr4gon" → Letters only</li>
          </ul>

          <div class="pro-tip">
            <strong>💡 Fun Fact:</strong> The dictionary includes some quirky but real words! Try "defenestration" (throwing someone out a window) or "petrichor" (the smell of rain on dry earth).
          </div>

          <h3>What Happens if Word is Invalid?</h3>
          <div class="message-box">
            <code class="crt-text-red">⚠️ @username 🟨 1/3 fails: that is not a dictionary word</code>
            <p>after three invalid words, a 🟨 yellow card is issued that will give half points on your next submission.</p>
            <p>any "proper" word will reset the counter</p>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 5: Scoring -->
      <section id="scoring" class="help-section">
        <h2 class="crt-text-green">🎯 Scrabble Scoring</h2>

        <div class="content-block">
          <h3>How Scoring Works</h3>
          <p>Each word earns a Scrabble score based on letter values, multiplied by 13! Higher scores mean more zCubes. This rewards creative vocabulary!</p>

          <div class="score-table">
            <h4>Letter Values</h4>
            <table>
              <tr>
                <th>Points</th>
                <th>Letters</th>
              </tr>
              <tr>
                <td class="score">0</td>
                <td>X, Z</td>
              </tr>
              <tr>
                <td class="score">1</td>
                <td>A, E, I, O, U, L, N, S, T, R, Q</td>
              </tr>
              <tr>
                <td class="score">2</td>
                <td>D, G</td>
              </tr>
              <tr>
                <td class="score">3</td>
                <td>B, C, M, P</td>
              </tr>
              <tr>
                <td class="score">4</td>
                <td>F, H, V, W, Y</td>
              </tr>
              <tr>
                <td class="score">5</td>
                <td>K</td>
              </tr>
              <tr>
                <td class="score">8</td>
                <td>J</td>
              </tr>
            </table>
          </div>


        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 6: Word Display -->
      <!-- <section id="display" class="help-section">
        <h2 class="crt-text-green">📺 Word Display</h2>

        <div class="content-block">
          <h3>Two Display Modes</h3>
          <p>The overlay automatically switches between two views:</p>

          <div class="display-modes">
            <div class="display-mode">
              <h4 class="crt-text-cyan">📖 Dictionary View</h4>
              <p><strong>When:</strong> A word is being displayed (60 seconds)</p>
              <p><strong>Shows:</strong></p>
              <ul>
                <li>👤 Submitter's avatar and name</li>
                <li>📝 The word (large, glowing text)</li>
                <li>🔊 Pronunciation guide (phonetic)</li>
                <li>📚 Definition(s) from dictionary</li>
                <li>💬 Example sentences</li>
                <li>🎯 Scrabble score</li>
              </ul>
            </div>

            <div class="display-mode">
              <h4 class="crt-text-green">☁️ Word Cloud View</h4>
              <p><strong>When:</strong> No word is being displayed</p>
              <p><strong>Shows:</strong></p>
              <ul>
                <li>☁️ All submitted words in a cloud</li>
                <li>📊 Progress circle (X/36 words)</li>
                <li>⏰ Time remaining until generation</li>
                <li>📈 Collection progress messages</li>
              </ul>
            </div>
          </div>

          <h3>Display Flow</h3>
          <ol>
            <li>User submits word via <code>!art dragon</code></li>
            <li>Word is validated and scored</li>
            <li>Dictionary view appears for 60 seconds</li>
            <li>View switches back to word cloud automatically</li>
            <li>Process repeats for each new word</li>
          </ol>

          <div class="note">
            <strong>📺 Overlay Note:</strong> This is a passive display - viewers don't interact with the overlay itself, only through Twitch chat commands!
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section> -->

      <!-- Section 7: Image Generation -->
      <section id="generation" class="help-section">
        <h2 class="crt-text-green">🎨 Image Generation</h2>

        <div class="content-block">
          <h3>When Does Generation Happen?</h3>
          <p>AI image generation is triggered by ONE of these conditions:</p>

          <div class="trigger-conditions">
            <div class="trigger">
              <h4 class="crt-text-yellow">🎯 36 Words Collected</h4>
              <p>When the 36th word is submitted, image generation starts immediately!</p>
            </div>

            <div class="trigger">
              <h4 class="crt-text-cyan">⏰ 24-Hour Timer Expires</h4>
              <p>If 36 words aren't reached in 24 hours, the AI generates from whatever words are available (even if just 5 or 10 words!).</p>
            </div>
          </div>

          <h3>The Generation Process</h3>
          <ol>
            <li><strong>Collection Completes:</strong> 36 words OR timer expires</li>
            <li><strong>Prompt Building:</strong> All words combined into AI prompt</li>
            <li><strong>AI Generation:</strong> Nano Banana creates the image</li>
            <li><strong>Style Applied:</strong> "video game art, concept art, cinematic lighting"</li>
            <li><strong>Display:</strong> Generated image appears in carousel</li>
            <li><strong>Reset:</strong> New session begins with 0/36 words!</li>
          </ol>

          <h3>What Makes the Art Unique?</h3>
          <p>The AI combines ALL submitted words into a single coherent image with these characteristics:</p>
          <ul>
            <li>🎮 Video game art style</li>
            <li>✨ Cinematic lighting and atmosphere</li>
            <li>🖼️ Ultra-detailed, intricate elements</li>
            <li>🎭 Dramatic composition</li>
            <li>🌈 Rich colors and depth of field</li>
          </ul>

          <div class="example">
            <strong>Example Prompt:</strong>
            <p>If words submitted are: dragon, sword, crystal, fire, castle...</p>
            <p class="crt-text-cyan">"dragon, sword, crystal, fire, castle, video game art, concept art, game asset, rendered in Unreal Engine, cinematic lighting, dramatic atmosphere, masterpiece, best quality, ultra detailed"</p>
          </div>

          <div class="pro-tip">
            <strong>💡 Collaboration Tip:</strong> Coordinate with other viewers! Plan themed collections like "underwater adventure" or "space exploration" for cohesive, amazing results!
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Section 8: Rewards -->
      <!-- <section id="rewards" class="help-section">
        <h2 class="crt-text-green">💰 Rewards & zCubes</h2>

        <div class="content-block">
          <h3>How Rewards Work</h3>
          <p>Contributors earn zCubes based on their Scrabble score percentage of the total!</p>

          <h3>Reward Calculation</h3>
          <div class="formula">
            <p><strong>Your zCubes</strong> = Total Pool × (Your Score ÷ Total Score)</p>
          </div>

          <h3>Example Scenario</h3>
          <div class="reward-example">
            <p><strong>Session completes with 10 words:</strong></p>
            <ul>
              <li>User A submitted 3 words: 25 points total</li>
              <li>User B submitted 4 words: 30 points total</li>
              <li>User C submitted 3 words: 20 points total</li>
              <li><strong>Total points: 75</strong></li>
            </ul>
            
            <p><strong>Reward pool: 500 zCubes</strong></p>
            
            <div class="reward-split">
              <div class="user-reward">
                <strong>User A:</strong>
                <p>500 × (25 ÷ 75) = <span class="crt-text-yellow">167 zCubes</span></p>
              </div>
              <div class="user-reward">
                <strong>User B:</strong>
                <p>500 × (30 ÷ 75) = <span class="crt-text-yellow">200 zCubes</span></p>
              </div>
              <div class="user-reward">
                <strong>User C:</strong>
                <p>500 × (20 ÷ 75) = <span class="crt-text-yellow">133 zCubes</span></p>
              </div>
            </div>
          </div>

          <div class="pro-tip">
            <strong>💡 Reward Strategy:</strong> Multiple small words OR few high-value words? Both can work! A single "QUIZ" (22 points) could be worth more than three simple words like "CAT" (5 points).
          </div>

          <h3>When Are Rewards Distributed?</h3>
          <p>Rewards are calculated and distributed automatically when the image is generated!</p>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section> -->

      <!-- Section 9: Pro Tips -->
      <section id="tips" class="help-section">
        <h2 class="crt-text-green">🏆 Pro Tips & Strategy</h2>

        <div class="tips-grid">
          <!-- <div class="tip-card">
            <h3>📝 Use High-Value Letters</h3>
            <p>Words with Q, Z, X, J earn more points! "JAZZ" (29 points) beats "SONG" (5 points).</p>
          </div> -->

          <div class="tip-card">
            <h3>🎭 Theme Your Words</h3>
            <p>Coordinate with chat! Themed collections create better, more cohesive AI art.</p>
          </div>

          <!-- <div class="tip-card">
            <h3>⏰ Use Your Hourly Limit Wisely</h3>
            <p>You get 3 words per hour. Spread them out or use them all at once - your choice!</p>
          </div> -->

          <div class="tip-card">
            <h3>🌟 Be Creative</h3>
            <p>Don't just use common words! "ETHEREAL" or "LUMINOUS" make for better art than "THING" or "STUFF".</p>
          </div>

          <div class="tip-card">
            <h3>📚 Expand Your Vocabulary</h3>
            <p>Every word is shown with its definition. Learn new words while playing!</p>
          </div>

          <div class="tip-card">
            <h3>🤝 Collaborate</h3>
            <p>Discuss in chat! Build on others' words to create a cohesive concept.</p>
          </div>

          <div class="tip-card">
            <h3>🎨 Visual Thinking</h3>
            <p>Think about how words will look combined. "DRAGON" + "FIRE" + "MOUNTAIN" = Epic scene!</p>
          </div>

          <div class="tip-card">
            <h3>⚡ Be Quick but Thoughtful</h3>
            <p>Don't waste submissions on low-value, common words when you have limited tries!</p>
          </div>
        </div>

        <a href="#top" class="back-to-top">↑ Back to Top</a>
      </section>

      <!-- Footer -->
      <footer v-if="!autoScroll" class="help-footer">
        <p class="crt-text-green">Ready to create amazing art together? Jump in chat and type !art [word]! 🎨✨</p>
        <p><a href="/art" class="back-link">← Back to Pixel Power</a></p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const autoScroll = ref(route.query.autoScroll === 'true')

let scrollAnimationId = null

// Smooth scrolling for anchor links
const handleAnchorClick = (e) => {
  if (autoScroll.value) return
  
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
  
  let direction = 1
  let scrollSpeed = 1
  let pauseFrames = 0
  const PAUSE_DURATION = 360
  
  const scroll = () => {
    const maxScroll = helpPage.scrollHeight - helpPage.clientHeight
    const currentScroll = helpPage.scrollTop

    if (pauseFrames > 0) {
      pauseFrames--
      scrollAnimationId = requestAnimationFrame(scroll)
      return
    }

    if (direction === 1) {
      helpPage.scrollTop += scrollSpeed
      
      if (currentScroll >= maxScroll - 10) {
        pauseFrames = PAUSE_DURATION
        direction = -1
        scrollSpeed = 100
      }
    } else {
      helpPage.scrollTop -= scrollSpeed
      
      if (currentScroll <= 10) {
        pauseFrames = PAUSE_DURATION
        direction = 1
        scrollSpeed = 1
      }
    }

    scrollAnimationId = requestAnimationFrame(scroll)
  }

  scrollAnimationId = requestAnimationFrame(scroll)
}

onMounted(() => {
  document.addEventListener('click', handleAnchorClick)
  
  if (autoScroll.value) {
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
ul li,
ol li { @apply list-disc }
li strong { @apply font-bold }

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
}

/* Header */
.help-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid #00ffff;
  border-radius: 10px;
}

.help-header h1 {
  font-size: 48px;
  margin: 0 0 10px 0;
  text-shadow: 0 0 20px #00ffff;
}

.subtitle {
  font-size: 20px;
  color: #ffff00;
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

/* Limit Boxes */
.limit-box {
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.limit-box.hourly {
  border-color: #00ffff;
}

.limit-box.daily {
  border-color: #ffff00;
}

.limit-box h4 {
  margin-top: 0;
  font-size: 22px;
}

/* Display Modes */
.display-modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
}

.display-mode {
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 25px;
}

.display-mode h4 {
  margin-top: 0;
  font-size: 22px;
}

/* Trigger Conditions */
.trigger-conditions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
}

.trigger {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
}

.trigger h4 {
  margin-top: 0;
  font-size: 22px;
}

/* Score Table */
.score-table {
  margin: 30px 0;
}

.score-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.score-table th, .score-table td {
  border: 1px solid #333;
  padding: 12px;
  text-align: left;
}

.score-table th {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.score-table .score {
  font-size: 24px;
  font-weight: bold;
  color: #ffff00;
  text-align: center;
}

/* Score Examples */
.score-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.score-example {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.score-example strong {
  font-size: 24px;
  color: #ffff00;
  display: block;
  margin-bottom: 10px;
}

/* Examples */
.example {
  background: rgba(0, 255, 255, 0.05);
  border-left: 4px solid #00ffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.example strong {
  color: #00ffff;
  display: block;
  margin-bottom: 10px;
}

/* Formula */
.formula {
  background: rgba(255, 255, 0, 0.1);
  border: 2px solid #ffff00;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

/* Reward Example */
.reward-example {
  background: rgba(0, 255, 0, 0.05);
  border: 2px solid #00ff00;
  padding: 25px;
  margin: 20px 0;
  border-radius: 10px;
}

.reward-split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.user-reward {
  background: rgba(255, 255, 0, 0.05);
  border: 2px solid #ffff00;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

/* Message Boxes */
.limit-messages {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.message-box {
  background: rgba(255, 0, 0, 0.05);
  border-left: 4px solid #ff0000;
  padding: 15px;
  border-radius: 5px;
}

.message-box code {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

/* Note */
.note {
  background: rgba(255, 165, 0, 0.1);
  border-left: 4px solid #ffa500;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.note strong {
  color: #ffa500;
}

/* Back to Top */
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
}

.back-to-top:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
}

/* Footer */
.help-footer {
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
  border-top: 2px solid #00ffff;
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
}

/* CRT Text */
.crt-text-green { color: #00ff00; }
.crt-text-cyan { color: #00ffff; }
.crt-text-yellow { color: #ffff00; }
.crt-text-red { color: #ff0000; }

/* Code */
code {
  font-family: 'Perfect DOS VGA 437', 'Courier New', monospace;
  font-size: 14px;
}

/* Auto-scroll mode */
.auto-scroll-mode .back-to-top {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .display-modes,
  .trigger-conditions {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .help-header h1 {
  font-size: 32px;
  }
}
</style>
