//  import fetch from "node-fetch";
// import axios from "axios";

import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => data.json())
//   .then((post) => {
//     console.log("post yüklendi", post);

//     fetch("https://jsonplaceholder.typicode.com/albums/2")
//       .then((data) => data.json())
//       .then((album) => {
//         console.log("album yüklendi", album);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//           .then((data) => data.json())
//           .then((post) => console.log("posts yüklendi", post));
//       });
//   });

// (async () => {
//   let { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   console.log("POST1", post1);
//   let { data: album } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   console.log("ALBUM", album);
//   let { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   console.log("POST2", post2);
// })();

// resolve : İşlem başarıyla geçekleşti Dataya ulaştın
// reject: kod çalışırken bir problem oluştu red edildi

// let getComments = () => {
//   return new Promise((resolve, reject) => {
//     resolve("comment");
//   });
// };

// getComments()
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e);
//   });

//   dataya ulaştığında resolve döner

// let getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve({ isim: "Onur" });
//     } else {
//       reject("bir hata oluştu");
//     }
//   });
// };

// getComments(5)
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e);
//   });

// let post = () => {
//   return new Promise(async (resolve, reject) => {
//     let { data } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     resolve(data);
//   });
// };
// let album = (album_id) => {
//   return new Promise(async (resolve, reject) => {
//     let { data } = await axios(
//       "https://jsonplaceholder.typicode.com/albums/" + album_id
//     );

//     resolve(data);
//   });
// };

// (async () => {
//   let posts = await post();

//   let albums = await album(5);

//   console.log(posts);
//   console.log(albums);
// })();
// .

// hata ayıklayabilmek için

// .
let post = () => {
  return new Promise(async (resolve, reject) => {
    let { data } = await axios("https://jsonplaceholder.typicode.com/posts/1");

    resolve(data);
  });
};
let album = (album_id) => {
  return new Promise(async (resolve, reject) => {
    let { data } = await axios(
      "https://jsonplaceholder.typicode.com/albums/" + album_id
    );

    reject("sorun oluştu var bişeler");
  });
};

(async () => {
  try {
    let posts = await post();
    let albums = await album(5);

    console.log(posts);
    console.log(albums);
  } catch (e) {
    console.log(e);
  }
})();
