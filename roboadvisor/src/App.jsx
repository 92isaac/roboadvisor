
import './App.css'
import { Advisoradvantage } from './components/advisoradvantage/advisoradvantage'
import { Company } from './components/companies/Company'
import Faqs from './components/faqs/Faqs'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { Stock } from './components/stock/Stock'
import ChartComponent from './components/utilies/ChartComponent'
import SubscribeSection from './components/utilies/SubscribtionSection'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <Company />
    <Advisoradvantage />
    <Stock />
    <ChartComponent />
    <Faqs />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default App
