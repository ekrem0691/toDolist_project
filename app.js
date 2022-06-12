//Bu kısımda html öğelerimizi dom yöntemiyle js alanımıza alıyoruz.
let buttonAdd = document.getElementById("input-add");
let buttonClear = document.getElementById("input-clear");
let added = document.getElementById("added");
let inputText =document.getElementById("input-text");


//Bu kısımda genel olarak elementlerimize event özelliği kazandırıyoruz.
//İlk kısımda input text alanımıza hiçbirşey girilmemesi durumunda alert mesajı verdiriyoruz.
buttonAdd.addEventListener("click",() =>{
    if(inputText.value == ""){
        alert("Lütfen Ekleme Yapınız..!!");
             window.location.reload(false);
    } 
//Bu kısımda inputtext alanına yazılan metnin add butonu ile ekleneceği <p> tagını oluşturuyoruz. 
//Daha sonra oluşan <p> tag içerisine "input text" alanının "value" değerini atıyoruz.
//En son aşamada input text alanımızı oş duruma getiriyoruz.  
     let paragraph = document.createElement("p");
     added.appendChild(paragraph);
     paragraph.innerHTML = inputText.value;
     inputText.value = "";
//Bu kısımda paragrafların üzerine click yaptığımızda işlem tamam anlamına gelen üzeri çizili
//durumu sağlıyoruz.
     paragraph.addEventListener("click",() =>{
        paragraph.style.textDecoration = "line-through" ;
    })
//Bu kısımda paragrafların üzerinde doubleclick(çift tık) yapıldığında paragrafları kaldırıyoruz.
    paragraph.addEventListener("dblclick",() =>{
        added.removeChild(paragraph);
    })
//Bu kısımda clear butonuna basıldığında olması gereken durumları gerçekleştiriyoruz. 
//Yorum satırı içerisinde 2.yöntemde gösterilmiştir.       
    buttonClear.addEventListener("click",() =>{
        // paragraph.style.display = "none";
        paragraph.remove();
    })
    
})
    
//Geliştirilmeye açık bir kod bütünüdür.Henüz başlangıç seviyelerinde projeler yapmaktayım.
