<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
    <!-- VOD Vote -->
    <div class="game-stat-card bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-3 ring-1 ring-green-500/30">
      <div class="flex items-center gap-2 mb-2">
        <img :src="vodVoteLogo" alt="VOD Vote" class="w-5 h-5" />
        <span class="text-green-400 font-bold text-xs">VOD Vote</span>
      </div>
      <div class="grid grid-cols-3 gap-1 text-xs text-center">
        <div>
          <div class="text-white/50">Starts</div>
          <div class="text-white font-bold">{{ gb.vodVote.starts.toLocaleString() }}</div>
          <div class="text-green-400/80"><Points currency="zC" :n="gb.vodVote.startsTotal" relative /></div>
        </div>
        <div>
          <div class="text-white/50">Votes</div>
          <div class="text-white font-bold">{{ gb.vodVote.votes.toLocaleString() }}</div>
          <div class="text-green-400/80"><Points currency="zC" :n="gb.vodVote.votesTotal" relative /></div>
        </div>
        <div>
          <div class="text-white/50">Wins</div>
          <div class="text-white font-bold">{{ gb.vodVote.wins.toLocaleString() }}</div>
          <div class="text-green-400/80"><Points currency="zC" :n="gb.vodVote.winsTotal" relative /></div>
        </div>
      </div>
    </div>

    <!-- zoskyZappers -->
    <div class="game-stat-card bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-3 ring-1 ring-blue-500/30">
      <div class="flex items-center gap-2 mb-2">
        <img :src="zoskyZappersLogo" alt="zoskyZappers" class="w-5 h-5" />
        <span class="text-blue-400 font-bold text-xs">zoskyZappers</span>
      </div>
      <div class="grid grid-cols-3 gap-1 text-xs text-center">
        <div>
          <div class="text-white/50">PvE</div>
          <div class="text-white font-bold">{{ gb.zoskyZappers.pveWins }}</div>
          <div class="text-blue-400/80"><Points currency="zC" :n="gb.zoskyZappers.pveWinsTotal" relative /></div>
        </div>
        <div>
          <div class="text-white/50">PvP</div>
          <div class="text-white font-bold">{{ gb.zoskyZappers.pvpWins }}</div>
          <div class="text-blue-400/80"><Points currency="zC" :n="gb.zoskyZappers.pvpWinsTotal" relative /></div>
        </div>
        <div>
          <div class="text-white/50">Loss</div>
          <div class="text-white font-bold">{{ gb.zoskyZappers.losses }}</div>
          <div class="text-red-400/80"><Points currency="zC" :n="gb.zoskyZappers.lossesTotal" relative /></div>
        </div>
      </div>
    </div>

    <!-- Pixel Power -->
    <div class="game-stat-card bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-3 ring-1 ring-purple-500/30">
      <div class="flex items-center gap-2 mb-2">
        <img :src="pixelPowerLogo" alt="Pixel Power" class="w-5 h-5" />
        <span class="text-purple-400 font-bold text-xs">Pixel Power</span>
      </div>
      <div class="space-y-1 text-xs">
        <div class="flex justify-between"><span class="text-white/50">Words</span><span class="text-white font-medium">{{ gb.art.count.toLocaleString() }}</span></div>
        <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-purple-400"><Points currency="zC" :n="gb.art.total" relative /></span></div>
        <div class="flex justify-between"><span class="text-white/50">Avg</span><span class="text-white/70"><Points currency="zC" :n="gb.art.avg" relative /></span></div>
      </div>
    </div>

    <!-- Daily Dose -->
    <div class="game-stat-card bg-gradient-to-br from-pink-900/40 to-pink-800/20 rounded-xl p-3 ring-1 ring-pink-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-base">💊</span>
        <span class="text-pink-400 font-bold text-xs">Daily Dose</span>
      </div>
      <div class="space-y-1 text-xs">
        <div class="flex justify-between"><span class="text-white/50">Claims</span><span class="text-white font-medium">{{ gb.dailyDose.count }}</span></div>
        <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-pink-400"><Points currency="zC" :n="gb.dailyDose.total" relative /></span></div>
        <div class="flex justify-between"><span class="text-white/50">Users</span><span class="text-white/70">{{ gb.dailyDose.uniqueUsers }}</span></div>
      </div>
    </div>

    <!-- Discord Reactions -->
    <div class="game-stat-card bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-xl p-3 ring-1 ring-indigo-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-base">💬</span>
        <span class="text-indigo-400 font-bold text-xs">Discord</span>
      </div>
      <div class="space-y-1 text-xs">
        <div class="flex justify-between"><span class="text-white/50">Reacts</span><span class="text-white font-medium">{{ gb.discoReact.count }}</span></div>
        <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-indigo-400"><Points currency="zC" :n="gb.discoReact.total" relative /></span></div>
        <div class="flex justify-between"><span class="text-white/50">Users</span><span class="text-white/70">{{ gb.discoReact.uniqueUsers }}</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Points from './Points.vue'
import zoskyZappersLogo from '../assets/ttv/zoskyZappers.png'
import vodVoteLogo from '../assets/ttv/vodVote.png'
import pixelPowerLogo from '../assets/ttv/pixelPower.png'

const props = defineProps({
  handouts: {
    type: Array,
    required: true
  }
})

/**
 * Compute game breakdown from handouts array
 * Same logic as stats/index.vue but extracted into a reusable component
 */
const gb = computed(() => {
  const handouts = props.handouts

  // VOD Vote
  const vv = handouts.filter(h => h.source === 'vodVote')
  const vvStarts = vv.filter(h => h.reason?.includes('Starting a new game'))
  const vvVotes = vv.filter(h => h.reason === 'Successful game vote')
  const vvWins = vv.filter(h => h.reason?.includes('winning @ vodVote'))

  // Art / Pixel Power
  const art = handouts.filter(h => h.source === 'art')

  // zoskyZappers
  const zz = handouts.filter(h => h.source === 'zoskyZappers')
  const zzPveWins = zz.filter(h => h.reason?.includes('PVE Victory'))
  const zzPvpWins = zz.filter(h => h.reason?.includes('PVP Victory'))
  const zzLosses = zz.filter(h => h.reason?.includes('Defeat'))

  // Vouchers — separate dailyDose
  const vouchers = handouts.filter(h => h.source === 'voucher')
  const dailyDose = vouchers.filter(h => h.reason === 'dailyDose')

  // Discord
  const disco = handouts.filter(h => h.source === 'discoReact')

  const sum = arr => arr.reduce((s, h) => s + h.amount, 0)
  const uniq = arr => new Set(arr.map(h => h.username)).size

  return {
    vodVote: {
      starts: vvStarts.length,
      startsTotal: sum(vvStarts),
      votes: vvVotes.length,
      votesTotal: sum(vvVotes),
      wins: vvWins.length,
      winsTotal: sum(vvWins)
    },
    zoskyZappers: {
      pveWins: zzPveWins.length,
      pveWinsTotal: sum(zzPveWins),
      pvpWins: zzPvpWins.length,
      pvpWinsTotal: sum(zzPvpWins),
      losses: zzLosses.length,
      lossesTotal: sum(zzLosses)
    },
    art: {
      count: art.length,
      total: sum(art),
      avg: art.length > 0 ? Math.round(sum(art) / art.length) : 0
    },
    dailyDose: {
      count: dailyDose.length,
      total: sum(dailyDose),
      uniqueUsers: uniq(dailyDose)
    },
    discoReact: {
      count: disco.length,
      total: sum(disco),
      uniqueUsers: uniq(disco)
    }
  }
})
</script>

<style scoped>
.game-stat-card {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(6, 182, 212, 0.1),
    0 0 30px rgba(6, 182, 212, 0.05),
    inset 0 1px 0 rgba(6, 182, 212, 0.08);
  backdrop-filter: blur(4px);
}
.game-stat-card:hover {
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.7),
    0 0 25px rgba(6, 182, 212, 0.25),
    0 0 50px rgba(6, 182, 212, 0.1),
    inset 0 1px 0 rgba(6, 182, 212, 0.15);
}
</style>
