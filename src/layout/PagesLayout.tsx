import Header from './Header'
import Footer from './Footer'

const PagesLayout = ({children}:any) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
      
    </>
  )
}

export default PagesLayout
