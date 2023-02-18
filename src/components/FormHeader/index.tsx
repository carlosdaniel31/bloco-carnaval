import { Form } from "./styles"
import { MagnifyingGlass, CaretDown, MapPin } from "phosphor-react"
import { useState } from "react"

export default function FormHeader(){
  const [hasDropdown, setHasDropdown] = useState(false)
  const [city, setCity] = useState("")

  const arr = ["Aldeias", "Caxias", "Codó"]

  return(
    <Form>
      <div className="container-input">
        <input type="text" placeholder="Pesquise por nome" />
        <MagnifyingGlass className="icon-input" />
      </div>
      <div className="container-input drop" onClick={()=>setHasDropdown(!hasDropdown)}>
        <input 
          type="text" 
          value={city} 
          placeholder="Selecione uma cidade" 
          readOnly 
        />
        <MapPin className="icon-input" />
        <CaretDown className="arrow" />
        {hasDropdown &&
          <div>
            {arr.map((cit, i) =>(
              <span 
                key={i} 
                onClick={()=>setCity(cit)}>{cit}
              </span>
            ))}
          </div>
        }
      </div>
      <button>BUSCAR AGORA</button>
    </Form>
  )
}