# Timeline App - Google Analytics 4 Integration

**App**: vue-timeline-app (Public Website)  
**GA4 Property**: Timeline (G-XXXXXX1)  
**Tracking Method**: gtag.js (client-side)  
**Created**: 2024-12-02

---

## 🎯 Purpose

Track authentication flow conversion, VOD engagement, and public website interactions to measure:
- OAuth completion rates (Twitch + Discord + Steam)
- Auth page → Whitelist conversion funnel
- Duplicate account detection
- VOD archive browsing behavior
- Public stats page engagement

---

## 📊 Events Tracked

### Authentication Flow (Primary Focus)

| Event | When | Key Parameters |
|-------|------|----------------|
| `auth_page_view` | User lands on `/auth` | `referrer` |
| `oauth_start` | Clicks "Connect [Service]" | `service`, `twitch_username` |
| `oauth_complete` | OAuth callback succeeds | `service`, `success`, `error` |
| `whitelist_complete` | All 3 services linked | `time_to_complete_seconds` |
| `duplicate_detected` | Fraud system triggers | `duplicate_type` |

### Engagement (Secondary)

| Event | When | Key Parameters |
|-------|------|----------------|
| `vod_click` | User clicks VOD | `vod_id`, `game_name`, `duration` |
| `stats_view` | User views stats page | `stat_type` |

**See**: `docs/ANALYTICS_EVENTS_REFERENCE.md` for complete event schemas

---

## 🛠️ Implementation

### File Structure

```
vue-timeline-app/
├── src/
│   ├── utils/
│   │   └── analytics.js          # GA4 wrapper utilities
│   ├── pages/
│   │   └── auth.vue              # OAuth flow tracking
│   └── main.js                   # GA4 initialization
├── index.html                    # gtag.js script tag
└── .env                          # VITE_GA4_MEASUREMENT_ID
```

### Key Functions

**`initializeGA()`**
- Initializes GA4 with privacy settings
- Called once in `main.js`
- Configures IP anonymization, disables ad signals

**`trackEvent(eventName, params)`**
- Sends custom events to GA4
- Safe error handling (doesn't break app)
- Logs to console for debugging

**`trackPageView(path, title)`**
- Tracks page navigation via Vue Router
- Called automatically in `router.afterEach()`

---

## 🔐 Privacy & Compliance

### GDPR Considerations

**Data Collected**:
- ✅ Twitch usernames (public, shown on stream)
- ✅ Page paths and titles
- ✅ Event timestamps
- ❌ NO emails
- ❌ NO Discord IDs (snowflakes)
- ❌ NO Steam IDs

**Configuration**:
```javascript
gtag('config', measurementId, {
  anonymize_ip: true,                        // IP anonymization
  allow_google_signals: false,               // Disable cross-device tracking
  allow_ad_personalization_signals: false    // Disable ad targeting
})
```

### User Consent

**Timeline App (Public)**:
- Should add cookie consent banner (future enhancement)
- Currently tracking without explicit consent (analytics only, no PII)
- Complies with GA4 anonymization standards

---

## 🧪 Testing

### Local Development

1. **Start dev server**:
   ```bash
   cd vue-timeline-app
   npm run dev
   ```

2. **Install Google Analytics Debugger extension** (Chrome/Firefox)

3. **Open browser console** - Look for:
   ```
   GA4 initialized: G-XXXXXXXXX1
   GA4 event tracked: auth_page_view { ... }
   ```

4. **Open GA4 DebugView**:
   - Go to: https://analytics.google.com
   - Select "Timeline" property
   - Admin → DebugView
   - Should see events in real-time

### Production

1. **Deploy to GitHub Pages**:
   ```bash
   npm run goHOT
   ```

2. **Visit production URL**:
   https://zoskycube.github.io/zoskyCube/auth

3. **Check GA4 Realtime**:
   - Reports → Realtime
   - Should see active users and events within 30 seconds

---

## 📈 Key Metrics & Reports

### Authentication Funnel

**GA4 Exploration → Funnel Analysis**:
```
Step 1: auth_page_view
Step 2: oauth_start (service = 'twitch')
Step 3: oauth_complete (service = 'twitch', success = true)
Step 4: oauth_complete (service = 'discord', success = true)
Step 5: oauth_complete (service = 'steam', success = true)
Step 6: whitelist_complete
```

**Target Conversion Rate**: >60% (auth_page_view → whitelist_complete)

### Fraud Detection

**Custom Report**:
- Filter: `event_name = 'duplicate_detected'`
- Group by: `twitch_username`, `duplicate_type`
- Date range: Last 30 days

**Target**: <5% of OAuth attempts

### OAuth Success Rate

**Custom Report**:
- Filter: `event_name = 'oauth_complete'`
- Metrics: COUNT(success = true) / COUNT(*)
- Group by: `service` (twitch/discord/steam)

**Target**: >95% success rate per service

---

## 🐛 Troubleshooting

### Events Not Appearing in DebugView

**Check**:
1. Measurement ID correct in `.env`?
2. Dev server restarted after `.env` change?
3. gtag.js script loaded? (Network tab)
4. Google Analytics Debugger extension enabled?
5. Browser console showing "GA4 event tracked" logs?

**Solution**:
```bash
# Verify env variable
echo $VITE_GA4_MEASUREMENT_ID

# Restart dev server
npm run dev

# Check browser console for errors
```

### "GA4 not initialized" Warning

**Problem**: `trackEvent()` called before `initializeGA()`

**Solution**:
- Ensure `initializeGA()` called in `main.js` before app mounts
- Check for typos in Measurement ID
- Verify `.env` file exists and has correct format

### Duplicate Events

**Problem**: Same event fires multiple times

**Solution**:
- Check for duplicate `trackEvent()` calls in code
- Ensure `router.afterEach()` not registered multiple times
- In production, not an issue (timeline is single-instance)

---

## 🔄 Future Enhancements

### Phase 1.5 (Optional)
- [ ] Add cookie consent banner
- [ ] Track VOD filtering/search behavior
- [ ] Track stats page interactions (leaderboard sorting, filters)
- [ ] A/B test different auth page layouts

### Phase 2+ (Post-Overlay Implementation)
- [ ] Cross-app user journey tracking (auth → game participation)
- [ ] Cohort analysis (users who complete auth vs play games)
- [ ] Conversion attribution (where did successful users come from?)

---

## 📚 Resources

**Project Documentation**:
- `docs/ANALYTICS_IMPLEMENTATION.md` - Full implementation guide
- `docs/ANALYTICS_EVENTS_REFERENCE.md` - Complete event catalog
- `docs/ENHANCEMENT_GOOGLE_ANALYTICS.md` - Original enhancement plan

**External Resources**:
- [GA4 gtag.js Reference](https://developers.google.com/tag-platform/gtagjs/reference)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [GA4 DebugView Guide](https://support.google.com/analytics/answer/7201382)

---

**Last Updated**: 2024-12-02  
**Maintained By**: @analytics agent  
**Status**: 🟡 Ready for implementation
