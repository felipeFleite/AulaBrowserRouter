import { useState } from "react";
import "/src/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
export default function ListaProdutoOferta() {
  const precoFinal = function (preco, desconto) {
    if(desconto != 0){
    const transformaNumber = parseFloat(preco.replace('R$ ', '').replace('.', '').replace(',', '.'))
    const descontoDado = transformaNumber * desconto / 100
      return descontoDado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }else{
    return preco
  }
}

        const [listaProduto, setProduto] = useState([
          {id: 1, promocao: 25, marca: "Fiat", nome: "Titano", preco: "R$ 219.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/titano.webp"},
          {id: 2, promocao: 25, marca: "Fiat", nome: "Mobi", preco: "R$ 73.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/mobi.webp"},
          {id: 3, promocao: 25, marca: "Fiat", nome: "Argo", preco: "R$ 85.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/argo.webp"},
          {id: 4, promocao: 50, marca: "Fiat", nome: "Pulse", preco: "R$ 105.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/pulse.webp"},
          {id: 5, promocao: 25, marca: "Volkswagen", nome: "Polo", preco: "R$ 88.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Uva4dNRDHTxIlIIogQAilR0dIkRh7v7c4QknoECgFCkWKq_Gu195j75fHu3vvVjwORR6C96DhBahoaJCYI1H9NOOZ8ez8x_vhr9PTNZyevH__-od_X3xpzB_l49Ppfj6dTo_Y__j96w9_f_XPs49__vN_97MXp6dxDWp6xCFvH3_SD2g0XGdtPj19xK7Tk9Ppo18Zv9-M0_Pna_AzBhy-bbVazWffNGWrkrxIRJUlmWqLQkmZdEnXtKkstWpEWaCokvrz0-npb-g9tMUwdZhmXZjGODegjjR1qYBEJDl8HUNvjA53Q7izswSZvSxc4SAvXu5XQFy1QECFaysYQc5s6VbGHbCzq5GAZijNPaDd5C2kV9naAToldQk4xuowgKSLB84jo5FDyOfEpSnkYWE8CMfOiPKesbb1zgkrYTUA7lvBZwqtdMiIV2kZmzwIlJqKrgNl3PjAIV4p2TK0G9maVDpcGbskCSqQRE6IKLYrNG0oF4TGYmIFIyxXCc2-Jdx8q_u0Q2g7K6-KwTdIxmZEArqZdCdAt53oW8ZebwXo3pbRM3w55KBnW95zJPXlzpFEa91Ah63oAnTaZiFjrCwOdIY2L6Gz-8Y1O4-FVwyq-xy60Ccbn4VJNoyNSsMhB3Wsg2mHdM_B6LEyBoyz4qFjbF5kYIYpJgWYscvWEswc0lUyqBgEmIBVTBiq1uwMW44VGJqNRLDosiNn-HQuGbHnBq3aitmC1Xs1SLCmzXmslk9GtvqhGDmvp3Q8wDp0DZ_RXvUR-lHVg4Y-UOYLcBhcZRi0sIxO3Uuei_OHeCjBTTZdOGTa0msGLgzy4LObVGwR5lzT0epQgltN4RqGdY6tQzkvwGOTc02vbGoQvEYvPMNXlDBGyX16HVKW2PdY8QT9FMqZETDpNGPjNQJPugqcR5Q0Ofg9VIuEAanQKQwd1iRg6F3aJjA4rXmQg1urIwMedUsVDNQhyzHiVi4CRr49IoOqHWEauRsBMw6GX9WsbMa3B0Q5ekbb9BVjqlbHWOsrQuAFOySE1pX8mYFXK9sZfmPdgw6Sn1qgKNQNW7asENZu5JkRquxeMkyxJIxVkAVSoSIE0rj0KZBx9VwDWUwPxRjSpgTq1ZjODJ3yKpLXZSiARiz9DbbiV0XTmN9zsTksPEia1_LmJJuxHBS7hIWjyP0R0D4nK9_HE-RXTDtVI1fZj3rWQMcqxh2i2zLuJc5eZRJi6PKWwZ-CA8TbXyaBuOllExD3VXLz8WGWWsGqMeGNXI0VPIlNOcmbvE208O5ucav7HvZ-W1jinSgzHew7VrxnRzcIluNwW6oyOIhEOL7T49bzX3DQY7y8--XuzZt3yd3rybfnvW-jvcg6EWere2PjpS7EGf1s8RLDqs8NDjrg5dW7t8n3d6_ukjsh5BlH_nvHfhrp8tMt6UxR69CPBkfj9UXm52FqtQ9664mjLj--lWfjJ4W8hrvTD6SXVY-NviRfPOHK_wFjtw7JTAYAAA.webp?width=648"},
          {id: 6, promocao: 50, marca: "Volkswagen", nome: "Nivus", preco: "R$ 120.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2UTaslNRCGz8wwKi5GVETcy0EYsJL-7sVBFHeiDCjjYhaXSnc66ZP0x0ml0_f2yh80P8L_4ca9uHLjRrAuDAQeUnlT-Xorb_8-Pd_C6dmbN9_98N8XnxnzR_30dLpfT6fTE44_ffPd238-__e9D3758134-V-n53ELannCkldPPxwnNBquqzYfnd7n0OnZ6fT-b4zfHzunFy-24FcMOH3da7WZj7_SRYm1bKQWQg5SFmWV1XUjWtSdEJVUmGdZ0WD-Ca91oPfQV9MyYF4MYZnj2kFnZaEeMpoD1Q4ykRXwZQyjMTrcTeHOrhJk8bLLUEJZvTw6QNy08IAqyBUBdZ_1N0YQqwAc7GYkoJlqcw9ok-w5OKpiGwCdkroGnGNzGEDS1QMnI6ORJeRLujJCGTgZPQjHwYjynrH17c4TNsKGs-ypcgUotNIlRrxKy0jyIFBqqYYrKOPmBwHKKyV7hnYz95ZdkgQVSCIrI4p0ha4P9Q35CsLtKqHbU9YX0GPIKYNej_mA0A9WXhUjGVGD7hY9CND9IHRg7G2qQI-2jhPD1xNLVlvfZ6BprHdWEm1tBwP2gpMNypVSwaBtEQrGVvHZB0PJSxjsnjj14LHyLPHUjiUMYcwSj4VFdoyDBoFg-infSzB6bowB46x4eETyogEzLTGrwMxDsdVgVqomASZgE7kXVKslGFqNRLDoiqNkxJE3YVWqVgtW780kwXJorhhTNe8MyucDrEPXsZL2ZowwzqqdNIyBCl-Bw-Aaw6AbP5xT95LP7vwhHmpwi81vLFlSeQzgwiQPHnt8hwIcYck5HW2O_eU2U7krwzrHvUM5L8BjV3JOr2xuELxGz-bz2jf8Rl7PcpaMkFuWLKFmD_qA2aAZiV0BnnQTeAJR1pXg99DcJExIlc5hGrAlAZPTesoYW3MUwBc4lQomGnAvYMZU3wTMvF5EBjW7hWXm9QWsaLnBqmyxFhAQ5ewZfSpbxtJsjrG1V4TAtjkkhN7VfLDAhqGKESTXSqAo1CNSfosQtmHm6yFUxX3OMNUtY2yCLJAKTTJAGm8jjxnXri2QxfxQjCnvaqBRzaJj6JwtRV7XoQKasfaPsA2XxbtCp2Uu7znnGm58dbRu9eMY2cLxdPIFb4nikF15vZgElwzta7YhIzRclLRTww6h_WhXDXRsgo0SXSp4Z3H1qpAQw1D2DEoFThD508AM4r5JQogPq9QKNo0Zm28zVggFSTkZM0gL3difKaZ2HGEf080I2IkKM8C-Y8POOoZJxB4Ox8-4MVKuCjiIRDi-0XMa-Wub9BwvP8etH5e717-e97GP9iLbTJytHo2Nl7YSZ_SrxUsMmz53OOmAl29fv8q-v_v2Lrvj__SMM__HcVxmuvz0OOlMUeswzgZn4_VFludp6bUPOo3EqsuPr-TZ-EUhe3B3-oH0bdNzpy_Zp8848_-1UQo5HgYAAA.webp?width=864"},
          {id: 7, promocao: 25, marca: "Volkswagen", nome: "Taos", preco: "R$ 190.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2VycokRRCAe2aYGfGgqIh4lx9hwMisvQ6NzOBNlAFFD3P4iazKpTqztlyquuvkA_kQvocXX8CTFy-i0SA0fERkRFRsmf3rn6fnyZ-evXv35tt_Pv9U69_rp6fTdTmdTk9I__Tdm1__-uzvF-_9-Mf_6hfL6XlMXsxPyOTt0_eHEbWEyyL1h6eXpDo9O51e_kL47S6cPvggebegx_GrXoqkP_qyECiRd50qMtGXeZ9lhcilqiShzeusUgzLSqiPT6fn_6Jz0FfjrDAvlJ-nuHTQrbxwtyxMPtQWMpYV8EX0g9bSP47-0SwcePGKrVmEsnq1H4CYJENAganPCZ4vJMk-6yeCZwsDVCZpDqjHWl8BzcZ7Ug6iSArQCi7pzOlVktKFeiJMsTk0YJDVrSdoiaQMrgwXgi_9SrgxS8qI_EpIfbuTQwrYUMx9q2wBAk0mL4R4Ke7Y-GFBiLlSGoS2042BcELwHsS880AOPnAMICKyDUFstk0cxN63kUFnMDMlwa-XHLq56xiDHn0eOPRyyFWCnsrsSsKmGQcpRKZrkJ2cBkaYpSJlr5j0hL3dKpCDKccLwdUjnS2mvpYgw1Dv5BBCaiUo7Jm6ghK25AKUNIUvCKnCDJQOm8tBmX2j0Mph5ZAQ2qEEFUQypDwCDRy0nBqtQVvDqJ_abo5loMc5ugb04nMqU3tsIkletDQOHRbNEQza4mjAiK1aBBi5N5SnGZBNBWGspp0Q8imBsdiiBRP2ZrjCMIVUIgw-FK4Ci942mhBWy8GKK6f6rIs8NYSD3Wqw47J6ksZQ0GrY2eQxI2zlocD6kR8k3YdDwQKWHZmEZJGCJV3ZhWDsPfQhrLsj5pS8w660NcEqwcB1y7qSJNExR3BNqAgTn3KCzw2Z6H3QhAEb2lY3-4Ya6TxmShI22h9wQTZ-BLf7Zi1hxFDJDMY-qJHBqLANBCvlSEqbmqMA6nGvK5hwq1cGE302IiE0O8I8URoMFhw1XZJFmGKpYAkT_cAj8skR-q5aCXOTLCG1FwRPu3Rw8L2tqWgvh6ZYCG6jwrz0XLfgQ2QiJ2z5GsEnNR0MAorimhN0tWYQhG_CCqE3BV28IHEd6ExtKw0gaNsuLQSD-SEIY97VEAYx1T1B5rQMYTAFksOENY04TKa5cfj_1QjzVF4vEBa_UlvDkupbA8GbaiCTYArbQYh9LSiJqLILxYyGCUXwdSKHuDHUEKjJdLXDHpqJvnAktiSIPWZ7BtFuBaUbFycKDtGrsr9jzzuESEU7BfH-LJHlJteNQdwTD3R2W7gUsAnLacE2JfiFwzaHNbvA5k2ifm5xa4cBdnRt7GAftpV2Yg9YyztCoRXsOza0wofwGY3xoOHHHo5BFtSsw265KOAIgXkNRzLtyL6W0zbQ-zrKKZ5_iKkf5seffn7Yhz6aM28z9mDkoE08txV7QLcYPEef5EOHo_R4fv3T2-ybx9eP2SNj_AEn-lOIwzyF8_d3p4cQpfTDpHHSTp55-TDOvXRebkMgq_N3b_mDdrNA2uTdyluQa5JTJ8_ZJ88o8n_y2GEoowYAAA.webp?width=864"},
          {id: 8, promocao: 75, marca: "Volkswagen", nome: "T-Cross", preco: "R$ 120.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y3Uv87dNBQA8NtWbRFDESCEmFjQFVIljp04_4Yr1MKGQB1QGTp8Ok4cO9fOP9tx7peJB0I8A-_BwgswsbAgcT6p00_HPnYc-9i__X16uvnTk3fvXv_w3xefaf1n9fh0ui2n0-kRtT9-9_q3fz7_99kHP__1vvnZl6encfNyfkQpbx5_OIyoFVwXpT86Paem05PT6fmvxB8PwenFi827BT2O33RKbvrjrznjoihZh5XIKqzKgjNWKtl3IlONKOqmzbucFe0np9PT39E56Mpx7jEXvZ-nuLQg-1xMOQuTD5WFjGUFfBX9oLXyd6O_MwsHLl4WsYhQlC9TD4ibYggoPV8I1WUtNSrPFgbYm01zQD1W-gZoEu-ocZBioxQruaoAp1gfGjCo8r4ltEJKCa4IV8IXfiXumaXGiPxGbF2z04AtYBMB91RaARINt4mIV3ElEj8CSDmXfQ9S2-megXRS8o5QdqJo3nngIH3gSJkRWaJxe9dEBm3nqxWhNZiZgvDrNYd2T1knoEOfhwo6NeQ9QtcbfpVE0qwA1c6q56C6nilP7E0qQQ2mGBPhqpFSFlPdMlBhqHZGhK1poceO9VfopS04Qq-M8ILYSsyg1yG5HHqzp54ih6WTRGiGAno_ZIkTM2-JI_R0DlpNtdagrWH3hkiOM9DjHF0NeurFVoFefL5x0B7rSJGXjaIoLJq-btCKoyDiQOdgZCoXA0bt9cjBUNNUEmM5UeYQ8ukAY9G2lBn2eogwTLIZFeHKyIkoJsIH4UqwqJhVhLe1JsJKh2rljdNOWHew-wrsbPKVMudUHD1YP_KD-h7OSIANm0UOdtOlvRLGWooOad0DMafFO2wLmtNJk2uK2mVdc3AKHXOEq4MgJk5LcsrnhjJnXy0FOI9Zr4hEhQMuqNrTgBCylvpiaJQEt_t6rWDEUKocxh6bwGC0So0ZsdWHANrjTpcwhh53AROmamUw0WejI0K9I8wTLYPBgqOme7RII-iSeEQ-OaIThSbmerPE1lwRPJXUwcF3tqK_9VRMoSRcopP2ynO6XD5EJjMi5WsEv_UT7VlAKW45ocs1IzYWDATp66QhKFwH6tO2WRoIBvNDEmPeVhAGOXGKBpXTtobBCKqC4FTlSwgTVu4BU9N1ev9AhHkqbjT14lfaz7Bs1UOfN-VABCNsSzghabLYVbIg-oyuU4j0CxFCCivdxkC7e3sg1FRg4djYtEO0SdA64-Kk4BB9X3RESAJHiA9vTgZx33hAiPcLpzPatGG0L0laHjNIc1ipJlJMzTDAHoLQPew71lRuh_QZHcfRjyx2cNiUSwFHCMwf36opDfQWjmqKl7e_3H333dvs7vXsuvM-dNFceJOxs1GDNvHSlOyMbjF4iX5T5xZH5fHy6u2b7Pu7V3fZHWP8jBO94XGYp3D56WHQOUSl_DBpnLRTF16cx7lTzqs0BMq6_PiGn7WbJVJR7lbdB7VuamrVJfv0Cc38PwlsA9dSBgAA.webp?width=864"},
          {id: 9, promocao: 50, marca: "Volkswagen", nome: "ID.Buzz", preco: "R$ 820.000,00", imgUrl: "https://assets.volkswagen.com/is/image/volkswagenag/88-3025-still-id-buzz-24-eletrico---3-4-frente-c1c1-limone-estu-adv_br-full-hd_1920x960px?Zml0PWNyb3AsMSZmbXQ9d2VicC1hbHBoYSZxbHQ9Nzkmd2lkPTk2MCZiZmM9b2ZmJmIxZmY="},
          {id: 10, promocao: 25, marca: "Volkswagen", nome: "Jetta", preco: "R$ 220.000,00", imgUrl: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y3Vy8oktxUA4J4ZxjZZ2CQhBO-HH4PBR6qqrsviJ4yZ4IVxZsDGXszi56hKl2qpbrpVd63yQPMQeQ9v8gJZeeONIaexoeHjSEel7qNT6g__O71M_vTi_fuvv_3t879p_XPz_HS6rqfT6RmNP3__9Ydf_v7rR5_88N8_hj_yp5cxebE8o5R3z_80TqglXFapPzt9TEOnF6fTx_8m_nMPTp9-mrxb0eP01SBF0n_-gnWDOrdnVnWVKEvRYX_uhp4zoYqiPzcDKwX2XV3-hfZ6hs7BUE-LwrJSfpnj2oNIVZcPvueOPmH2obFQsKKCV9GPWkv_NPknsxbAqy_Xdm3hXH8ZD0BMkiGgwDQwwvNVAsqBxwvh2VoBKpM0zemp0VdAk_k9cxRVUoBWcNkAutDMJeAcW0cLgqyvmtASKTO4c3DEpCdO-LPfiBuzNBeRX4k0dDstSAFbA7jn2lYg0BRyJeKFZSJzF0GIpVYKhLbzjYFwQvABxLLzQAt84BhARGTXC-G7g1Ky7RIHsQ9dZNAbLMyZ8NulhH7pe8ZgkGOpBAzK8Isisi5aGEbFbwXIXs5jSyxScZCDYuOF2BvaSI7mPEXC5UiZq2muRBibnREhdRIUDkw5UNJUviJSjQUoHbIrQZk90zOVC62lKIhkaC6HhmqtjqDoVLScW51AW8NuisiuqkBPS7y2oD22sQQdVs17MCLXqwAjw_nCiL2diBHZXBFTPe9EKK0CY7FDCybs7XiDcXZ15ERIZ4TRh8rVYFEyyrTobSuIsFkOVlw5_TDrIk8tcbBbA3ZaN0_RFKqhBLvk80Hr_MSPgqDjoJSA556Wh2SRSLq2A2Hs_ZmHsO5OLLkCRz1vG8IqwcD167ZRNCwyUCTRMUe4NtTEzGeak740NKf3kWrmRmw1B7f4djyD81hQJzufqXHABdl6Wr77duMwYahlBdMQFFVpUtjRDpOVciqI1B40t8Rh6mDG3GwMZto2CiK0O8Iy09dgsOKkVw6rMBXhEfnsiKFnPbG0yRKpuwjw1D0HpQy2oR_tqW9kQbjMaE56rjvwITJRErncIvikZurdgKK6loSutxqC8C29R0HiNtKgyhu9hkHbbqXIYHkIYir7BsIoZo6ELPw9MhVSipONJ2Zs6IjDbNobhz_uibDMZ3plwuo3qmdYU3NrIXhTj5QZTGV7CHFo6FRCVMVFE4ZuJsI36T6YGUoIOWwzRVTk653QzrT8SGzeIA5Y7AVE7TjVM9pcKYpWJyoO0avzcGcve4RIJXAK4v1aopQst0wL9sSDgHhbubxAkljQxZKF5fTiZak6qkRewlYZyN4kKnKOuTsy7GPeqCf2gI1kRKi0gt-vSNh3bHcOh_AFHepBrRAHOEZZHRscNpeigiME5g0cyXTUKK9ev3nzzT_fPr391z_knEe6dyc5x8fvYxrG5enHnx72cYjmkXcFezBy1CY-djV7QLcafIw-yYceJ-nx8fWP74o3T6-fiifG-APO9GcRx2UOjw_TMkjnZR4DxY_fvSsetFsEUjPvVt6C3JKce_lY_PUFPeP_ApeOR6UGAAA.webp?width=648"},
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
                <h3 id="text">{produto.nome} -{produto.marca}</h3>
                <h3 id="text">{precoFinal(produto.preco, produto.promocao)}</h3>
                <button onClick={adicionarPedido}>Comprar</button>
                </div>
                )
              }
               <ToastContainer/>
          </div>
         
        );
            }