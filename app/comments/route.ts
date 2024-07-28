import { NextRequest } from 'next/server';
import { comments } from './comments'

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    const filter = query?
    comments.filter(el=>{return el.text.includes(query)}):
    comments
    return Response.json(filter)
}

export async function POST(request: Request) {
    const all = await request.json()
    
    const newComment = {
        id: comments.length + 1,
        text: all.text
    };
    comments.push(newComment)

    return new Response(JSON.stringify(newComment),{
        headers:{
            'Content-Type':'application/json'
        },
        status:201
    })
}