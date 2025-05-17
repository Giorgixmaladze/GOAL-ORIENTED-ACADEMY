import ErrorBoundary from "./ErrorBoundary";


function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    throw new Error("sffsbfdsb");
  }

  return (


      <form onSubmit={handleSubmi} action="">
        <input type="email" name="" id="" />
        <button>submit</button>
      </form>


   
    
  )
}

export default App
