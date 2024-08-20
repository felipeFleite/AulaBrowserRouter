import { useState } from "react";
import "/src/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
export default function ListaProduto() {
        const [listaProduto, setProduto] = useState([
          {id: 1, promocao: 0, marca: "Fiat", nome: "Titano", preco: "R$ 219.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/titano.webp"},
          {id: 2, promocao: 0, marca: "Fiat", nome: "500e", preco: "R$ 214.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/500e.webp"},
          {id: 3, promocao: 0, marca: "Fiat", nome: "Mobi", preco: "R$ 73.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/mobi.webp"},
          {id: 4, promocao: 0, marca: "Fiat", nome: "Argo", preco: "R$ 85.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/argo.webp"},
          {id: 5, promocao: 0, marca: "Fiat", nome: "Cronos", preco: "R$ 94.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/cronos.webp"},
          {id: 6, promocao: 0, marca: "Fiat", nome: "Pulse", preco: "R$ 105.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/pulse.webp"},
          {id: 7, promocao: 0, marca: "Fiat", nome: "Fastback", preco: "R$ 119.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/fastback.webp"},
          {id: 8, promocao: 0, marca: "Fiat", nome: "Fastback", preco: "R$ 2,00", imgUrl: ""},
          {id: 9, promocao: 0, marca: "Fiat", nome: "Fastback Abarth", preco: "R$ 2,00", imgUrl: ""},
          {id: 10, promocao: 0, marca: "Fiat", nome: "Strada", preco: "R$ 2,00", imgUrl: ""},
          {id: 11, promocao: 0, marca: "Fiat", nome: "Toro", preco: "R$ 2,00", imgUrl: ""},
          {id: 12, promocao: 0, marca: "Fiat", nome: "Fiorino", preco: "R$ 2,00", imgUrl: ""},
          {id: 13, promocao: 0, marca: "Fiat", nome: "Scudo", preco: "R$ 2,00", imgUrl: ""},
          {id: 14, promocao: 0, marca: "Fiat", nome: "Novo Ducato", preco: "R$ 2,00", imgUrl: ""},
          {id: 15, promocao: 0, marca: "Volkswagen", nome: "Jetta", preco: "R$ 220.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y3Vy8oktxUA4J4ZxjZZ2CQhBO-HH4PBR6qqrsviJ4yZ4IVxZsDGXszi56hKl2qpbrpVd63yQPMQeQ9v8gJZeeONIaexoeHjSEel7qNT6g__O71M_vTi_fuvv_3t879p_XPz_HS6rqfT6RmNP3__9Ydf_v7rR5_88N8_hj_yp5cxebE8o5R3z_80TqglXFapPzt9TEOnF6fTx_8m_nMPTp9-mrxb0eP01SBF0n_-gnWDOrdnVnWVKEvRYX_uhp4zoYqiPzcDKwX2XV3-hfZ6hs7BUE-LwrJSfpnj2oNIVZcPvueOPmH2obFQsKKCV9GPWkv_NPknsxbAqy_Xdm3hXH8ZD0BMkiGgwDQwwvNVAsqBxwvh2VoBKpM0zemp0VdAk_k9cxRVUoBWcNkAutDMJeAcW0cLgqyvmtASKTO4c3DEpCdO-LPfiBuzNBeRX4k0dDstSAFbA7jn2lYg0BRyJeKFZSJzF0GIpVYKhLbzjYFwQvABxLLzQAt84BhARGTXC-G7g1Ky7RIHsQ9dZNAbLMyZ8NulhH7pe8ZgkGOpBAzK8Isisi5aGEbFbwXIXs5jSyxScZCDYuOF2BvaSI7mPEXC5UiZq2muRBibnREhdRIUDkw5UNJUviJSjQUoHbIrQZk90zOVC62lKIhkaC6HhmqtjqDoVLScW51AW8NuisiuqkBPS7y2oD22sQQdVs17MCLXqwAjw_nCiL2diBHZXBFTPe9EKK0CY7FDCybs7XiDcXZ15ERIZ4TRh8rVYFEyyrTobSuIsFkOVlw5_TDrIk8tcbBbA3ZaN0_RFKqhBLvk80Hr_MSPgqDjoJSA556Wh2SRSLq2A2Hs_ZmHsO5OLLkCRz1vG8IqwcD167ZRNCwyUCTRMUe4NtTEzGeak740NKf3kWrmRmw1B7f4djyD81hQJzufqXHABdl6Wr77duMwYahlBdMQFFVpUtjRDpOVciqI1B40t8Rh6mDG3GwMZto2CiK0O8Iy09dgsOKkVw6rMBXhEfnsiKFnPbG0yRKpuwjw1D0HpQy2oR_tqW9kQbjMaE56rjvwITJRErncIvikZurdgKK6loSutxqC8C29R0HiNtKgyhu9hkHbbqXIYHkIYir7BsIoZo6ELPw9MhVSipONJ2Zs6IjDbNobhz_uibDMZ3plwuo3qmdYU3NrIXhTj5QZTGV7CHFo6FRCVMVFE4ZuJsI36T6YGUoIOWwzRVTk653QzrT8SGzeIA5Y7AVE7TjVM9pcKYpWJyoO0avzcGcve4RIJXAK4v1aopQst0wL9sSDgHhbubxAkljQxZKF5fTiZak6qkRewlYZyN4kKnKOuTsy7GPeqCf2gI1kRKi0gt-vSNh3bHcOh_AFHepBrRAHOEZZHRscNpeigiME5g0cyXTUKK9ev3nzzT_fPr391z_knEe6dyc5x8fvYxrG5enHnx72cYjmkXcFezBy1CY-djV7QLcafIw-yYceJ-nx8fWP74o3T6-fiifG-APO9GcRx2UOjw_TMkjnZR4DxY_fvSsetFsEUjPvVt6C3JKce_lY_PUFPeP_ApeOR6UGAAA.webp?width=648"},
        ])   
        const [listaPedidos, setlistaPedidos] = useState([])
        const adicionarPedido = (nome) => {
          toast(`O produto foi adicionado ao carrinho`)
          setlistaPedidos([...listaPedidos, nome])
      }
        return (
          <div id="cards">
              
              {
                
                listaProduto.map((produto) =>
                <div id ="produte" key = {produto.id}>
                <img id="carros" src={produto.imgUrl}/>
                <p class="text">{produto.nome}</p>
                <p class="text">{produto.preco}</p>
                <button onClick={adicionarPedido}>Comprar</button>
                </div>
                )
              }
               <ToastContainer/>
          </div>
         
        );
            }