let tbl = document.getElementById('tbl');
let no = 1;

class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala =skala;
    }
    dampakGempa(){
        if (this.skala <= 2) return this.dampak = "tenang";
        if (this.skala <= 4) return this.dampak = "lari";
        if (this.skala <= 6) return this.dampak = "Panik";
        return this.dampak = "takut,panit bercampur aduk";
    }
    infoGempa() {
        tbl.innerHTML += `
        <tr>
        <td>${no++}</td>
        <td>${this.lokasi}</td>
        <td>${this.skala}</td>
        <td>${this.dampakGempa()}</td>
        </tr>
        `;
    }
}
const g1 = new Gempa("Lombok", 6.9);
g1.infoGempa();
const g2 = new Gempa("Palu", 7.0);
g2.infoGempa();
const g3 = new Gempa("jawa", 4.0);
g3.infoGempa();
const g4 = new Gempa("surabaya", 5.0);
g4.infoGempa();
const g5 = new Gempa("bandung", 1.0);
g5.infoGempa();
const g6 = new Gempa("maluku", 3.0);
g6.infoGempa();
const g7 = new Gempa("papua", 6.0);
g7.infoGempa();
const g8 = new Gempa("aceh", 5.0);
g8.infoGempa();
const g9 = new Gempa("bali", 2.0);
g9.infoGempa();
const g10 = new Gempa("malang", 3.0);
g10.infoGempa();
