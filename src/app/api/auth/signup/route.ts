import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: '모든 필드를 입력해주세요.' }, { status: 400 });
        }

        // 이메일 중복 체크
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: '이미 가입된 이메일입니다.' }, { status: 400 });
        }

        // 유저 생성
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password, // 실제 서비스에서는 비밀번화 암호화(bcrypt 등)가 필수입니다.
            },
        });

        return NextResponse.json({ message: '회원가입이 완료되었습니다.', userId: user.id }, { status: 201 });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ error: '서버 에러가 발생했습니다.' }, { status: 500 });
    }
}
