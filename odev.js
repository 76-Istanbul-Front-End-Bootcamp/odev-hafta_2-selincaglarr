// /*
//   Odev 1:
//   Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
//  */

const person =  {
    name: "John",
    message: function () {    
      console.log("Hello, " + this.name)
    }
  }
  
  const messageFunc = person.message
  messageFunc.call(person);
  

// /*  
//   Odev 2:
//   Asagidaki fonksiyonu sirasiyla 
//   20
//   40
//   60
//   sonuclarini yazdiracak sekilde duzenleyiniz.
// */
var numbers = {
        numbers: [[10,20,30], 2],
        multiply: function(){
            console.log(this.numbers[0].map(number => {
             const result = number * this.numbers[1]
                return result;
            })) 
        }
    }; 
numbers.multiply();

//Odev 2

var numbers = {
    numbers: [[10,20,30], 2],
    multiply: function(){
      this.numbers[0].map(function(number, numberIndex){
          const result = number * this.numbers[1];
          console.log(result)
      }.bind(this))
    }
  };
  
  numbers.multiply();
  

  
  
  /* 
    Odev 3:
    Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
    Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
    Ornek : isValidName("John") true donmeli
    Ornek : isValidName(" J ohn") false donmeli
  */
 

function isValidName(name){
    if( Number(name) == name ){
        return console.log(false);
    }
    
    else if( name===String(name)){
        let newarray = name.split('')
            if( newarray.length < 2 || newarray.find( x => x == Number(x) ) ){
                return console.log(false);
                    
            }
        console.log( !newarray.find( x => x == ' '))
      
    }
    else{
     return console.log( false )
    }
    
}

/*
isValidName(" J ohn")
isValidName("selinn")
isValidName("X")
isValidName("  \t\n")
isValidName("") 
isValidName(undefined)
isValidName(null)
isValidName(false)
isValidName("Frank")
*/

  /*
    Odev 4:
    Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
    dersSayisi: ogrencinin katildigi ders sayisi
    dersSaati: her bir dersin dakika cinsinden suresi
    katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
    - iki arguman de number veya string olarak verilebilir.
    - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
    Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
    Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
    Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
  */
  
function katilimSaati(dersSayisi,dersSaati){
    if( !!Number( dersSayisi ) == true  &&  !!Number(dersSaati)==true && dersSaati != true && dersSayisi!=true  ){
            console.log( Math.round(Number( dersSaati)) * Math.round(Number( dersSayisi ) ))
    }
    else{
        console.log('Girilen Degerler Uygun Degil')
    }
}

/*katilimSaati(6,10)
katilimSaati(6,"10")
katilimSaati("6",10)
katilimSaati("6","10") 
katilimSaati("",6)
katilimSaati(6,"")
katilimSaati("","")
katilimSaati("foo",6) 
katilimSaati(6,"foo") 
katilimSaati("foo","bar")
katilimSaati(null,null) 
katilimSaati(null,undefined)
katilimSaati(undefined,null)
katilimSaati(undefined,undefined)
katilimSaati(false,false) 
katilimSaati(false,true)
katilimSaati(true,false)
katilimSaati(true,true)
katilimSaati(10,6)
katilimSaati(10,"6")
katilimSaati("10",6)
katilimSaati("10","6")
katilimSaati(6,10.1) 
katilimSaati(6.1,10) 
katilimSaati(6,"10.1") 
*/












    
 
  
 
  