'use client'

import logo from '../../public/logo.png'
import userImage from '../../public/user.svg'
import {useState} from "react";
import Image from "next/image";
import Link from 'next/link'


export default function Navbar() {

    const [user, setUser] = useState('ויקי');


    return (
        <header dir={'rtl'} className={'flex border-2 border-black h-20 justify-around items-center w-full text-xl'}>
            <article className={'w-1/3 flex items-center justify-center gap-3'}>
                <figure>
                    <Image src={userImage} alt={'user-image'} title={'userImage'}/>
                </figure>
                <div> שלום {user}</div>
            </article>

            <article className={'relative top-4 w-auto'}>
                <figure>
                    <Image src={logo} alt={'logo'} title={'logo-image'} className={'h-[120px] w-full'}/>
                </figure>
            </article>

            <article className={'w-1/3 text-center cursor-pointer'}>
                <div><Link href={'/RentDress'}>השכרות</Link> | פגישות</div>
            </article>
        </header>
    )
}