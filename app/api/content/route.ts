const posts = [
    {title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, nec tinci',
    slug: 'post-1'
}, {
    title: 'Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, nec tinci',
    slug: 'post-2'
}, {
    title: 'Post 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, nec tinci',
    slug: 'post-3'
}, {
    title: 'Post 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, nec tinci',
    slug: 'post-4'
}, {
    title: 'Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien aliquet urna, nec tinci',
    slug: 'post-5'
}];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    console.log(session)

    return NextResponse.json(posts);
}