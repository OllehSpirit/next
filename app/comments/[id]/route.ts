import { redirect } from "next/navigation";
import { comments } from "../comments";

export async function GET(_request: Request, { params: { id } }: { params: { id: string } }) {
    if(parseInt(id)>comments.length){
        redirect('/comments')
    }
    
    const comment = comments.find(el => { return el.id === parseInt(id) })

    return Response.json(comment)
}

export async function PATCH(request: Request, { params: { id } }: { params: { id: string } }) {
    const body = await request.json()

    const index = comments.findIndex(el => { return el.id === parseInt(id) })
    comments[index].text = body.text

    return Response.json(comments[index])
}

export async function DELETE(_request: Request, { params: { id } }: { params: { id: string } }) {
    const index = comments.findIndex(el => { return el.id === parseInt(id) })
    comments.splice(index,1)
    return Response.json(comments)
}