import { del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route to delete old OG product images from Vercel Blob storage
 * Triggered manually or via admin panel
 * 
 * Old image IDs that have been replaced with high-resolution 2400x2400 versions
 */

const OLD_IMAGE_IDS = [
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
  'V6SqH9i0QmqgN4i7ao79ZAUHuCJ7vr',
  '5JZb6vEjEfGmkBmDJMWZpzEIRDOvA4',
  'NoAjreOoryRaitAPCiVXmKGC19Chlu',
  'XHGmpu9pkVQiVpoRvq6GmPvnaeBHie',
  'YyEnEtAReqRfNlEm8zdiAs5xmfnFfP',
  'mrflhM99drNHNozeXOdPvmgtX1zhvS',
];

const BLOB_STORAGE_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com';

export async function POST(request: NextRequest) {
  try {
    // Verify this is an authorized request (in production, add proper auth)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const deletedImages: string[] = [];
    const failedDeletions: { id: string; error: string }[] = [];

    console.log(`[v0] Starting deletion of ${OLD_IMAGE_IDS.length} old images...`);

    // Delete each old image
    for (const imageId of OLD_IMAGE_IDS) {
      try {
        const imageUrl = `${BLOB_STORAGE_URL}/${imageId}`;
        await del(imageUrl);
        deletedImages.push(imageId);
        console.log(`[v0] Deleted: ${imageId}`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        failedDeletions.push({ id: imageId, error: errorMessage });
        console.error(`[v0] Failed to delete ${imageId}: ${errorMessage}`);
      }
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      totalScheduledForDeletion: OLD_IMAGE_IDS.length,
      successfulDeletions: deletedImages.length,
      failedDeletions: failedDeletions.length,
      deletedImages,
      failedDeletions,
      message: `Successfully deleted ${deletedImages.length} old product images. ${failedDeletions.length} failed.`,
    });
  } catch (error) {
    console.error('[v0] Error in delete-old-images route:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Old image deletion API endpoint',
    totalOldImages: OLD_IMAGE_IDS.length,
    imageIds: OLD_IMAGE_IDS,
    instructions: [
      'Send POST request to delete old images',
      'Required header: Authorization: Bearer <token>',
      'Endpoint: POST /api/delete-old-images',
    ],
    oldImages: [
      { name: 'OG-RESERVE', id: 'IDqQOWuyALZ6h7xUUNjKgk32NqZFvM' },
      { name: 'CASABLANCA-PEACH', id: '5dXyjfcSR5zyCWi9diFHGIoI6VFEDP' },
      { name: 'GARLIC-GLUE', id: 'k4jcVnv6nkPnp6gpHBFHxoqE9wb9SZ' },
      { name: 'BERRY-AMARILLO', id: 'u0YfZtPsoDqrMdry1s9Q9Q41wRDVd8' },
      { name: 'DONNY-BURGER', id: 'o0Tc1VGUbDRNaHcstwgEMFXXjtuFRr' },
      { name: 'PEANUT-BUTTER-BREATH', id: 'BPbJd4ykDHBT6WuBG7DAokuiR200FZ' },
      { name: 'CITRUS-MIMOSA', id: 'nRjgFONB6rG3hbln6DKOASybJgQhMw' },
      { name: 'TROPICANA-GOLD', id: 'dhBq1NLArSubAaVls0j2TDDALt9Scp' },
      { name: 'TANGIE-DIESEL', id: 'xpYNhwkWRRMTpVjqBSCr2C0D6FuqIc' },
      { name: 'SOUR-TART-RIBBONS', id: 'd0zXbXlAFF7dET4nQTRsZWXZrOZd3M' },
    ],
  });
}
