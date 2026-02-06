import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: '이메일과 비밀번호를 입력해주세요.' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.password !== password) {
            return NextResponse.json({ error: '이메일 또는 비밀번호가 일치하지 않습니다.' }, { status: 401 });
        }

        // 세션 처리는 생략하고 유저 정보를 반환합니다.
        return NextResponse.json({
            message: '로그인 성공',
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: '서버 에러가 발생했습니다.' }, { status: 500 });
    }
}
