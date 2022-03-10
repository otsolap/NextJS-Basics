import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'
// runs on build time. 
// does not run on the Browser.
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { ninjas: data }
    }

}


const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>NINJASSS</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            )
            )}
        </div>
    )
}

export default Ninjas