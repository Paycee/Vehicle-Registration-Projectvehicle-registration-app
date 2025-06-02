const formData = ()=>{

  let data = {
    godiste: 0,
    snaga: 0,
    zapremina: 0
  };


    const godiste = document.getElementById('m_godiste').value;
    const snaga = document.getElementById('m_snaga').value;
    const zapremina = document.getElementById('m_zapremina').value;
  
    let errors = [];
    let k = 1;
    
    document.getElementById('errorDiv').innerHTML = "";


    if(parseInt(godiste) == null || godiste.trim() == ""){
      errors.push("Унесите годиште возила");
      k = 0;
    }
  
    if(parseInt(godiste) > 2023 || parseInt(godiste) < 1900){
      errors.push("Возило не може бити млађе од 2023. и старије од 1900. године");
      k = 0;
    }
  
    if(snaga == null || snaga.trim() == ""){
      errors.push("Унесите снагу возила");
      k = 0;
    }
  
    if(snaga < 0){
      errors.push("Неисправан унос снаге возила");
      k = 0;
    }
  
    if(zapremina == null || zapremina.trim() == ""){
      errors.push("Унесите запремину возила");
      k = 0;
    }
  
    if(zapremina < 0){
      errors.push("Неисправан унос запремине возила");
      k = 0;
    }
  


    if(errors.length > 0){
      document.getElementById('errorDiv').innerHTML = errors.join("<br>");
      
    }
    else {
      data = {
        godiste: godiste,
        snaga: snaga,
        zapremina: zapremina
      }
      console.log(data);
    }
      
    let c_zapremine;

    if(zapremina <= 1150)
      c_zapremine = 1330;

    if(zapremina > 1150 && zapremina <= 1300)
      c_zapremine = 2610;

    if(zapremina > 1300 && zapremina <= 1600)
      c_zapremine = 5750;

    if(zapremina > 1600 && zapremina <= 2000)
      c_zapremine = 11790;

    if(zapremina > 2000 && zapremina <= 2500)
      c_zapremine = 58250;

    if(zapremina > 2500 && zapremina <= 3000)
      c_zapremine = 118040;

    if(zapremina > 3000)
      c_zapremine = 243970;

  let u_godista;

    if(godiste >= 2016 && parseInt(godiste)  < 2024)
      u_godista = 1;
  
    if(godiste < 2016 && godiste >= 2013)
      u_godista = 0.85;
  
    if(godiste < 2013 && godiste >= 2011)
      u_godista = 0.75;

    if(godiste < 2011 && godiste >= 2002)
      u_godista = 0.6;
    
    if(godiste < 2002)
      u_godista = 0.2;

  let c_snage;

      

    if(snaga <= 22)
      c_snage = 8641;

    if(snaga > 22 && snaga <= 33)
      c_snage = 10321;

    if(snaga > 33 && snaga <= 44)
      c_snage = 12016;

    if(snaga > 44 && snaga <= 55)
      c_snage = 13712;

    if(snaga > 55 && snaga <= 66)
      c_snage = 15393;

    if(snaga > 66 && snaga <= 84)
      c_snage = 17652;

    if(snaga > 84 && snaga <= 110)
      c_snage = 21029;

    if(snaga > 110)
      c_snage = 24970;



    


  let taxi = document.getElementById('m_taxi');
  let u_taxi;

  if(taxi.checked == true)
    u_taxi = 0.5;
  else
    u_taxi = 1;

  
  let rent_a_car = document.getElementById('m_rent-a-car');
  let u_rent_a_car;

  if(rent_a_car.checked == true)
    u_rent_a_car = 1.4;
  else
    u_rent_a_car = 1;



  let invalid = document.getElementById('m_invalid');
  let u_invalid;

  if(invalid.checked == true)
    u_invalid = 0.9;
  else
    u_invalid = 1;




  let saobracajna = document.getElementById('m_saobracajna');
  let c_saobracajna;

  if(saobracajna.checked == true)
    c_saobracajna = 990;
  else
    c_saobracajna = 0;




  let tablice = document.getElementById('m_tablice');
  let c_tablice;

  if(tablice.checked == true)
    c_tablice = 1360;
  else
    c_tablice = 0;

    console.log( (c_zapremine*u_godista+c_snage)*u_invalid*u_rent_a_car*u_taxi+c_saobracajna+c_tablice);
    console.log(k);
    let cena = k *((c_zapremine*u_godista+c_snage)*u_invalid*u_rent_a_car*u_taxi+c_saobracajna+c_tablice);

    if(cena > 0)
      document.getElementById('cena').innerHTML = cena;
    else
      document.getElementById('cena').innerHTML = "";

  
     return data;
}


const getData = async ()=>{
    console.log(JSON.stringify(formData()));
    const options = {
      method: "post",
      body: JSON.stringify(formData()),
      headers: {"Content-Type":"application/json; charset=UTF-8"}
    }
    const response = await fetch("http://localhost:3033/unosPodataka", options);
    const data = await response.json();

    return data;
}


document.getElementById('m_dugme').addEventListener("click", () => {
  getData()
  .then(data => console.log(data));
});
