
let com = Math.floor(Math.random() * 100 + 1)


for (let i = 10; i >= 1; i--) {
    let user = +prompt("1 dan 100 gacha sonlar orasidan aniq sonni toping " + i + "  imkoniyat qoldi")


    while (isNaN(user) || user == " ") {
         user = +prompt("1 dan 100 gacha sonlar orasidan aniq sonni toping " + i + "  imkoniyat qoldi")
    }


    if (user == com) {
        alert("Tabriklaymiz yutdingiz!!!")
        break
    } else if (i == 1) {
        alert("Yutqazdingiz sizda imkoniyat qolmadi JAvob " + com + "  edi")
    } else if (com - user <= 3 && com - user >= -3) {
        alert("Juda yaqin keldingiz")
    }  else if (com - user <= 10 && com - user >= -10) {
        alert("yaqin keldingiz")
    } else if (com - user <= 15 && com - user >= -15) {
        alert("yaqinroq keldingiz")
    } else if ( com - user <= 15 || com - user >= -15){
        alert("ehtimoldan uzoqda ")
    }
}