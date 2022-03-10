import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>Ooops......</h3>
            <p>Page not found</p>
            <p>Let's go back? <Link href="/"><a>Homepage here.</a></Link></p>
        </div>
    )
}
