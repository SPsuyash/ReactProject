
import Navbar from './comp/Navbar/Navbar'
import ContactHeader from './comp/ContactHeader/ContactHeader'
import ContactForm from './comp/ContactForm/ContactForm'
import './App.css'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <main className="main_container">
    <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>
    </main>
    </>
  )
}

export default App
