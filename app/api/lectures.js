import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const dataDir = path.join(process.cwd(), 'app/tech/data');
        const files = await fs.readdir(dataDir);
        const lectures = files
            .filter(file => file.endsWith('.txt'))
            .map(file => file.replace('.txt', ''));

        return new Response(JSON.stringify({ lectures }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to load lectures' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
