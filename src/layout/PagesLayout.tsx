import Header from './Header'
import Footer from './Footer'

const PagesLayout = ({children}:any) => {
  return (
    <div className='bg-white'>
    <Header/>
    {children}
    <Footer/>
      
    </div>
  )
}

export default PagesLayout
