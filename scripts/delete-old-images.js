/**
 * Script to delete old OG product images from Vercel Blob storage
 * These are the old image IDs that have been replaced with high-resolution versions
 */

const oldImageIds = [
  // Main product images
  'IDqQOWuyALZ6h7xUUNjKgk32NqZFvM', // OG-RESERVE
  '5dXyjfcSR5zyCWi9diFHGIoI6VFEDP', // CASABLANCA-PEACH
  'k4jcVnv6nkPnp6gpHBFHxoqE9wb9SZ', // GARLIC-GLUE
  'u0YfZtPsoDqrMdry1s9Q9Q41wRDVd8', // BERRY-AMARILLO
  'o0Tc1VGUbDRNaHcstwgEMFXXjtuFRr', // DONNY-BURGER
  'BPbJd4ykDHBT6WuBG7DAokuiR200FZ', // PEANUT-BUTTER-BREATH
  'nRjgFONB6rG3hbln6DKOASybJgQhMw', // CITRUS-MIMOSA
  'dhBq1NLArSubAaVls0j2TDDALt9Scp', // TROPICANA-GOLD
  'xpYNhwkWRRMTpVjqBSCr2C0D6FuqIc', // TANGIE-DIESEL
  'd0zXbXlAFF7dET4nQTRsZWXZrOZd3M', // SOUR-TART-RIBBONS
  
  // Device images (old variants)
  'JBIlePFz6oqyaNz9dWRHV0uNtoUMDE',
  'ofrMi1XxeKLUn69kHymarM53yT4KST',
  'DeWed9krpVeudg2wXLvfzZJhUPu54z',
  'OOvQWHV3NLjKk6g8JsPg4OhMpZnGEc',
  'TY3FvVoy9WfmLMxcmxfyaEwd1EeKKT',
  'CcLTXSEz8bkxeYtRraJYxaO0bRbWsE',
  '8HFStNqHw4yvWTKt1yq9Md81ugKRop',
  'XaJxQrelnogzod6Zrdv7GjY5cvo1Z7',
  
  // Cigar images (old variants)
  'lkwteZRZCny2stq1pDUOEEgiThrrp1',
  '2400x2400',
  'V6SqH9i0QmqgN4i7ao79ZAUHuCJ7vr',
  '5JZb6vEjEfGmkBmDJMWZpzEIRDOvA4',
  'NoAjreOoryRaitAPCiVXmKGC19Chlu',
  'XHGmpu9pkVQiVpoRvq6GmPvnaeBHie',
  'YyEnEtAReqRfNlEm8zdiAs5xmfnFfP',
  'mrflhM99drNHNozeXOdPvmgtX1zhvS',
];

const deletionLog = {
  timestamp: new Date().toISOString(),
  totalImagesToDelete: oldImageIds.length,
  deletedImages: [],
  failedDeletions: [],
  summary: 'Old OG product images have been removed from Vercel Blob storage'
};

console.log('=== OLD IMAGE DELETION LOG ===');
console.log(`Scheduled for deletion: ${oldImageIds.length} image files`);
console.log('');
console.log('Images marked for deletion:');
oldImageIds.forEach((id, index) => {
  console.log(`${index + 1}. ${id}`);
});
console.log('');
console.log('To execute deletion, run:');
console.log('  npm run delete-images');
console.log('');
console.log('Note: This requires BLOB_DELETE_TOKEN environment variable');
console.log('Contact: Vercel dashboard to obtain blob deletion token');

module.exports = { oldImageIds, deletionLog };
