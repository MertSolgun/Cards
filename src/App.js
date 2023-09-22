import "./App.css";
import Course from "./Course";
import "bulma/css/bulma.css";
import Angular from "./images/komple.jpeg";
import Python from "./images/python.jpeg";
import JavaScript from "./images/javascript.jpeg";
import React from "./images/react.jpeg";

function App() {
  return (
    <div className="App">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslar</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              {" "}
              <Course
                images={Angular}
                title="Angular Kursu"
                description="Angular, Google tarafından geliştirilen bir JavaScript tabanlı bir uygulama çerçevesidir. Web tabanlı uygulamaların geliştirilmesi için kullanılan açık kaynaklı bir platformdur. Angular, geliştiricilere tek sayfa uygulamaları (SPA) ve dinamik web uygulamaları oluşturmak için kullanılan bir dizi araç ve özellik sağla"
              ></Course>
            </div>
            <div className="column">
              {" "}
              <Course
                images={React}
                title="React Kursu"
                description=" React, Facebook tarafından geliştirilen ve kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir. Web tabanlı uygulamaların geliştirilmesi için kullanılan açık kaynaklı bir platformdur. React, bileşen tabanlı bir yaklaşım kullanır ve uygulama içindeki her bir bileşenin bağımsız olarak yönetilmesini sağlar"
              ></Course>
            </div>
            <div className="column">
              <Course
                images={JavaScript}
                title="Javascript Kursu"
                description="JavaScript, web tarayıcılarında çalıştırılabilen bir programlama dilidir. Başlangıçta, web sayfalarına etkileşimli özellikler eklemek için kullanılmış olsa da, günümüzde web uygulamalarının tamamını, mobil uygulamaları, masaüstü uygulamalarını ve hatta sunucu tarafı uygulamalarını geliştirmek için de kullanılan çok yönlü bir dildir."
              ></Course>
            </div>
            <div className="column">
              <Course
                images={Python}
                title="Python Kursu"
                description="Python, çeşitli platformlarda çalışabilen ve çok çeşitli uygulama alanlarına sahip olan bir dildir. Bilimsel hesaplama, veri analizi, yapay zeka, web geliştirme, ağ programlama, oyun geliştirme gibi birçok alanda kullanılmaktadır. Python, geniş bir standart kütüphane ve üçüncü taraf modüller ekosistemi ile birlikte gelir, bu da geliştirme sürecini hızlandırır. "
              ></Course>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
