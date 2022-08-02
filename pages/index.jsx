import Head from 'next/head'
import ContentMain from '../components/contentMain/ContentMain'
import NavBar from '../components/navBar/NavBar'

export default function Home() {
  return (

    <>
      <Head>
        <meta name="author" content="Tomás Aranda"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Challenge</title>
      </Head>

      <main>
        <div className="bg-gray-50 overflow-hidden font-inter">
            <div className="flex gap-1">

              <div className="absolute lg:relative">
              
                <NavBar/>

              </div>

              <div className="w-full">
                
                <ContentMain/>
                
              </div>
              
            </div>
        </div>
      </main>
    
    </>

  )
}
