<script setup>
const theD = ref(null)
const gSheet = 'https://docs.google.com/spreadsheets/d/1nOSih6IJEXlBFEtwExaMBQY9ONb1OZmrzzWapRq9M7s/gviz/tq?tqx=out:csv'
fetch(gSheet).then(r=>r.text()).then(t=>{
  const lines = t.replaceAll('"','').split('\n').filter(l=>l.trim().length)
  const headers = lines[0].split(',')
  const data = lines.slice(1).map(l=>{
    const cols = l.split(',')
    const obj = {}
    headers.forEach((h,i)=>obj[h.trim()]=cols[i]?.trim())
    obj.steamID = parseInt(obj.steamID)
    obj.death = parseInt(obj.death)
    obj.epoch = new Date(obj.timestamp).getTime()/1000
    return obj
  })
  theD.value = data
})
</script>

<template>
    <section>
        <pre v-text="theD" />
    </section>
</template>