
import './App.css'
import { Advisoradvantage } from './components/advisoradvantage/advisoradvantage'
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
    <Advisoradvantage />
    <Stock />
    <Faqs />
    
    </>
  )
}

export default App
