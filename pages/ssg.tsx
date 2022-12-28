//型のために導入
import {NextPage} from 'next'
import Head from 'next/head'

//ページコンポーネントのためのprops定義
type SSGProps = {}

//SSG向けのページを実装
//NextPageはnext.jsのPage向けの型
//NextPage<props>でpropsが入るPageであることを明示
const SSG:NextPage<SSGProps> = () => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
            </main>
        </div>
    )
}

export default SSG
