import axios from "axios"
import { Fragment, useEffect, useState } from "react"

function Comanda(props) {
  const [products, setProducts] = useState([])
  const [alegere, setAlegere] = useState({})
  const [idOrder, setIdOrder] = useState()
  const [orderStatus, setOrderStatus] = useState({})
  const loadProducts = () => {
    axios.get()
  }
  useEffect(() => {
    axios.get('https://proiectgrafica.herokuapp.com/api/v1/products').then((res) => {
      setProducts(res.data.data.products)
    })
  }, [])


  const optiuni = products.map(e => {
    return (

      <label>
        <input type="radio" value={e.idProduct} name={"produs"} />
        {e.productName}
        <br />
        <img src={`https://proiectgrafica.herokuapp.com${e.productImage}`} />
        <br /> <br /> <br />
      </label>

    )
  })

  const getOrderData = (id = idOrder) => {
    axios.get(`https://proiectgrafica.herokuapp.com/api/v1/orders/${id}`, {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    }).then((res) => {
      setOrderStatus(res.data.data.order)
    })
  }

  return (
    <div>
      <div onChange={(e) => setAlegere(e.target.value)}>
        {optiuni}
      </div>
      <div>
        <input type="button" value={"Comanda"} onClick={() => {
          axios.post(`https://proiectgrafica.herokuapp.com/api/v1/orders/${alegere}`, {}, {
            headers: {
              'Authorization': `Bearer ${props.token}`
            }
          }).then(res => {
            setIdOrder(res.data.data.order.idOrder)
            getOrderData(res.data.data.order.idOrder)
          })
        }} />
      </div>
      <br /><br /><br /><br />
      <div>
        <label>id comanda:
          <input type="text" value={idOrder} onChange={(e) => {
            setIdOrder(e.target.value)
          }
          } />
          <input type="button" value={"Verifica status"} onClick={() => {
            getOrderData()
          }} />
        </label>
      </div>
      {orderStatus && <div>
        Status comanda: {orderStatus.orderStatus}
      </div>}
    </div>
  )
}

export default Comanda