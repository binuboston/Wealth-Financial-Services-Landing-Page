import { NextResponse } from 'next/server';
import { getGalleryItems } from '@/lib/api/wp';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const items = await getGalleryItems();
        return NextResponse.json(items);
    } catch (error) {
        console.error('Error in gallery API route:', error);
        return NextResponse.json([], { status: 500 });
    }
}
