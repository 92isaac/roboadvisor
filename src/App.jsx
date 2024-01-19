
import './App.css'
import { Clearlink } from './components/clearlink/Clearlink'
import { Company } from './components/companies/Company'
import Faqs from './components/faqs/Faqs'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { Stock } from './components/stock/Stock'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <Company />
    <Clearlink />
    <Stock />
    <Faqs />
    
    </>
  )
}

export default App
