import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const lecture = searchParams.get('lecture');
    const quizType = searchParams.get('type');

    if (!lecture) {
        return new Response(JSON.stringify({ error: 'Lecture name is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const dataDir = path.join(process.cwd(), 'app/tech/data');
        const filePath = path.join(dataDir, `${lecture}.txt`);
        const content = await fs.readFile(filePath, 'utf8');

        // Parse the content and extract questions based on quiz type
        const questions = parseQuestions(content, quizType);

        return new Response(JSON.stringify({ questions }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to load questions' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

function parseQuestions(content, quizType) {
    // Split content into sections
    const sections = content.split('\n\n');

    const questions = [];

    for (const section of sections) {
        if (quizType === 'mcq' && section.toLowerCase().includes('mcq:')) {
            const lines = section.split('\n').filter(line => line.trim());
            const question = {
                id: questions.length + 1,
                question: lines[1].trim(),
                options: lines.slice(2, -1).map(line => line.replace(/^[A-D]\) /, '').trim()),
                correctAnswer: lines[lines.length - 1].replace('Answer: ', '').trim()
            };
            questions.push(question);
        } else if (quizType === 'tf' && section.toLowerCase().includes('true/false:')) {
            const lines = section.split('\n').filter(line => line.trim());
            const question = {
                id: questions.length + 1,
                question: lines[1].trim(),
                options: ['True', 'False'],
                correctAnswer: lines[lines.length - 1].replace('Answer: ', '').trim()
            };
            questions.push(question);
        }
    }

    return questions;
}
