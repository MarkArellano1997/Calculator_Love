import { useState } from "react"

function App() {

  const [data, setData] = useState({
    name: "",
    partner: ""
  })

  const [validate, setValidate] = useState(false)
  const [error, setError]=useState('')
  const [message, setMessage]=useState('')
  

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = ()=>{
    if (Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios')
    }else{
      setValidate(true)
      setMessage(((data.name + data.partner).split('').reduce((initial, total)=>initial + total.charCodeAt(0),0))%101)
    }
    setTimeout(()=>{
      setError('')
    },3000)
  }

    


  return (
    <>
      <div className="item-center mx-4 my-20 h-full border border-rose-500 bg-pink-200 md:w-3/6 md:h-3/5 md:mx-auto p-4 rounded">

        <h1 className="text-3xl text-center p-5 text-rose-500 font-bold">Calculator Love</h1>

        {error.length? <p>Todos los campos son obligatorios</p>:''}
        <div className="flex flex-col my-2 items-center gap-4 text-rose-500">

          <label htmlFor="name" className="">Your Name:</label>
          <input
            type="text"
            className="w-full p-1"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
          />

          <label htmlFor="partner">Partner Name:</label>
          <input
            type="text"
            className="w-full p-1"
            id="partner"
            name="partner"
            placeholder="Enter Partner name"
            value={data.partnerName}
            onChange={handleChange}

          />

          <button
            className="bg-rose-500 text-white w-24 h-8 rounded mt-4"
            onClick={handleClick}
          >
            Calculate
          </button>

          {validate? <p>{data.name} y {data.partner} son el uno para el otro {message}%</p>:<p>Result</p>}
        </div>


      </div>
    </>
  )
}

export default App
