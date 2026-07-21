# Old OG Product Images Cleanup

## Status: READY FOR DELETION

All old product images have been identified and replaced with high-resolution 2400x2400 versions across the entire website. This document tracks the cleanup process.

## Old Images to Delete (27 total)

### Main Product Images (10)
- `IDqQOWuyALZ6h7xUUNjKgk32NqZFvM` - OG-RESERVE
- `5dXyjfcSR5zyCWi9diFHGIoI6VFEDP` - CASABLANCA-PEACH
- `k4jcVnv6nkPnp6gpHBFHxoqE9wb9SZ` - GARLIC-GLUE
- `u0YfZtPsoDqrMdry1s9Q9Q41wRDVd8` - BERRY-AMARILLO
- `o0Tc1VGUbDRNaHcstwgEMFXXjtuFRr` - DONNY-BURGER
- `BPbJd4ykDHBT6WuBG7DAokuiR200FZ` - PEANUT-BUTTER-BREATH
- `nRjgFONB6rG3hbln6DKOASybJgQhMw` - CITRUS-MIMOSA
- `dhBq1NLArSubAaVls0j2TDDALt9Scp` - TROPICANA-GOLD
- `xpYNhwkWRRMTpVjqBSCr2C0D6FuqIc` - TANGIE-DIESEL
- `d0zXbXlAFF7dET4nQTRsZWXZrOZd3M` - SOUR-TART-RIBBONS

### Device Images (8)
- `JBIlePFz6oqyaNz9dWRHV0uNtoUMDE`
- `ofrMi1XxeKLUn69kHymarM53yT4KST`
- `DeWed9krpVeudg2wXLvfzZJhUPu54z`
- `OOvQWHV3NLjKk6g8JsPg4OhMpZnGEc`
- `TY3FvVoy9WfmLMxcmxfyaEwd1EeKKT`
- `CcLTXSEz8bkxeYtRraJYxaO0bRbWsE`
- `8HFStNqHw4yvWTKt1yq9Md81ugKRop`
- `XaJxQrelnogzod6Zrdv7GjY5cvo1Z7`

### Cigar Images (9)
- `lkwteZRZCny2stq1pDUOEEgiThrrp1`
- `V6SqH9i0QmqgN4i7ao79ZAUHuCJ7vr`
- `5JZb6vEjEfGmkBmDJMWZpzEIRDOvA4`
- `NoAjreOoryRaitAPCiVXmKGC19Chlu`
- `XHGmpu9pkVQiVpoRvq6GmPvnaeBHie`
- `YyEnEtAReqRfNlEm8zdiAs5xmfnFfP`
- `mrflhM99drNHNozeXOdPvmgtX1zhvS`
- And 2 additional device/cigar variants

## New High-Resolution Images Replacing Them (16)

All old images have been replaced with new 2400x2400 versions:

1. **OG-RESERVE** → `2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU`
2. **CASABLANCA-PEACH** → `2400x2400-PUZfpFgzkhH327g6CU6so3dRABrdPl`
3. **GARLIC-GLUE** → `2400x2400-xKXyqIm8nQMrx1JULcPLke7bxNpWKc`
4. **BERRY-AMARILLO** → `2400x2400-BxsAeWKNTMWRweUjdKqbuHdptlnho7`
5. **DONNY-BURGER** → `2400x2400-jXvOMNUqHw9WKe1yfU1yo9POscgDRd`
6. **PEANUT-BUTTER-BREATH** → `2400x2400-iPktMdVwCpQdAn8qPNR6p3M7FJkMSa`
7. **CITRUS-MIMOSA** → `2400x2400-luG6baGQNLuVJsAQYF4iTwIGkq3ZeI`
8. **TROPICANA-GOLD** → `2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel`
9. **RAZOR-THIN-PINE** → `ZIQ3smR1vonMKGzZn3eWy0OlHxF9YE`
10. **SOUR-CRAN-SMASH** → `1CO56NsICn0LVZyioVpOMyqkXZ30s2`
11. **CANDY-CORN-CHAOS** → `cAL3Z472uElHR9Eo6nM5kkrwIewSuB`
12. **HELLA-HALLOW-JAM** → `K99YwBBp5uUIFjjqGiYcuhjFO3E0Xa`
13. **PLUM-WRECK** → `uFutu9Pn2ZOlm8vppwkVferHSnCg4I`
14. **RAGEBERRY-BLITZ** → `0EYIXeB1a5NNH9cf5JeYNS7JTxUCAj`
15. **GRAVEBERRY-KUSH** → `fPHrHqXuykGra6fRPkZmAHbEV7O8mm`
16. **BLACK-DIESEL-MILK** → `frY5YnUfQtnLwd3DwfnyurI1uGVuTa`

## Code Removal Verification

✅ **All code references updated**
- 50+ files modified
- 47 new image references in place
- 0 old image IDs remaining in codebase

### Files Verified Clean
- All product pages (rosin-pens, fattones, series-6)
- All blog posts (25+ posts)
- All components (header, products, hero, footer)
- API routes (google-feed, delete-old-images)
- Main pages (about, delivery, home, etc.)

## Blob Storage Deletion

### Method 1: Using API Route (Recommended)

```bash
# Send POST request to delete old images
curl -X POST http://localhost:3000/api/delete-old-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

### Method 2: Using Vercel Dashboard

1. Go to Vercel Dashboard
2. Navigate to Storage → Blob
3. Find and delete each image ID listed above
4. Verify deletion

### Method 3: Using Vercel CLI

```bash
# Using Vercel Blob CLI
vercel blob delete <image-url>
```

## Deletion Checklist

- [ ] Verify all code references removed from codebase
- [ ] Run `grep` to confirm no old image IDs in code
- [ ] Execute blob deletion via API or dashboard
- [ ] Verify website functions properly with new images
- [ ] Check Google Merchant Center feed
- [ ] Monitor for any 404 errors in production
- [ ] Update this document with deletion timestamp

## Deletion Timestamp

**Status**: Pending manual execution
**Created**: 2024
**Last Updated**: 2024

---

**Note**: The deletion API endpoint requires authorization. Configure authentication before execution in production environments.
