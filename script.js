// async function getData() {
//   const response = await fetch(
//     "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgUcjpB8iMRw1iX-vdiGiw4z67u90gp7LMzDnr4MO93PDyiNVNmm6wy92trxEEleHXwCNch91GOl880Zp8_hFzpSIjBEScRcvtPWMZMKv9EHpzXsJ4Wag_C5eOncG7Z8yp9RRAiPjfuk2sEKeHWEXtNEULRVCXlNifSXmEC3lAfd4lszYED5YnwUQjR4HkA_gSdA5r6BNQoe6sSC-wqwxf39C9DOFe3sPEcwwKWmvVieFDdzD5Rm_F5RF-jjjoV4G6lzq3Kno68JZ_GO6FWkQW_kMM3GmqWanPpkEQw&lib=M9c-rDq2jDaSV3EaPCrVBC7V_GssrfWmv"
//   );
//   const data = await response.json();
//   return data;
// }
// document.addEventListener("DOMContentLoaded", async () => {
//   const result = await getData();
//   const products = result.data.slice(1);
//   const priceList = document.querySelector(".price-list");
//     products.forEach((item) => {
//           const discount =
//             Math.round(
//               ((item["market rate"] - item["sale price"]) / item["market rate"]) * 100
//             ) || 0;
//       priceList.innerHTML += `
//              <div class="product-card">
//             <img
//               src="${item.image}"
//               class="product-img"
//             />
//             <div class="product-info">
//               <h2>${item["item name"]}</h2>
//               <p class="brand">${item.category}</p>
//               <div class="price">
//                 <span class="sale">₹${item["sale price"]}</span>
//                 <span class="mrp">₹${item["market rate"]}</span>
//                 <span class="discount">${discount}% OFF</span>
//               </div>
//               <p class="variant">${item.variant} ${item.unit} Pack</p>
//             </div>
//            <!-- <button class="add-btn">Add to Cart</button> -->
//           </div>
//         `;
//     });
// });

// async function getData() {
//   const response = await fetch(
//     "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgUcjpB8iMRw1iX-vdiGiw4z67u90gp7LMzDnr4MO93PDyiNVNmm6wy92trxEEleHXwCNch91GOl880Zp8_hFzpSIjBEScRcvtPWMZMKv9EHpzXsJ4Wag_C5eOncG7Z8yp9RRAiPjfuk2sEKeHWEXtNEULRVCXlNifSXmEC3lAfd4lszYED5YnwUQjR4HkA_gSdA5r6BNQoe6sSC-wqwxf39C9DOFe3sPEcwwKWmvVieFDdzD5Rm_F5RF-jjjoV4G6lzq3Kno68JZ_GO6FWkQW_kMM3GmqWanPpkEQw&lib=M9c-rDq2jDaSV3EaPCrVBC7V_GssrfWmv"
//   );
//   const data = await response.json();
//   return data;
// }

// (async function () {
//   const result = await getData();
//   const products = result.data.slice(1);

//   const priceList = document.querySelector(".price-list");

//   products.forEach((item) => {
//     const discount =
//       Math.round(
//         ((item["market rate"] - item["sale price"]) / item["market rate"]) * 100
//       ) || 0;

//     priceList.innerHTML += `
//       <div class="product-card">
//         <img
//           src="${item.image}"
//           alt="${item["item name"]}"
//           class="product-img"
//         />
//         <div class="product-info">
//           <h2>${item["item name"]}</h2>
//           <p class="brand">by ${item.brand}</p>
//           <div class="price">
//             <span class="sale">₹${item["sale price"]}</span>
//             <span class="mrp">₹${item["market rate"]}</span>
//             <span class="discount">${discount}% OFF</span>
//           </div>
//           <p class="variant">${item.variant} ${item.unit}</p>
//         </div>
//         <button class="add-btn">Add to Cart</button>
//       </div>
//     `;
//   });
// })();

async function getData() {
 const response = await fetch(
   "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgUcjpB8iMRw1iX-vdiGiw4z67u90gp7LMzDnr4MO93PDyiNVNmm6wy92trxEEleHXwCNch91GOl880Zp8_hFzpSIjBEScRcvtPWMZMKv9EHpzXsJ4Wag_C5eOncG7Z8yp9RRAiPjfuk2sEKeHWEXtNEULRVCXlNifSXmEC3lAfd4lszYED5YnwUQjR4HkA_gSdA5r6BNQoe6sSC-wqwxf39C9DOFe3sPEcwwKWmvVieFDdzD5Rm_F5RF-jjjoV4G6lzq3Kno68JZ_GO6FWkQW_kMM3GmqWanPpkEQw&lib=M9c-rDq2jDaSV3EaPCrVBC7V_GssrfWmv"
 );
  const data = await response.json();
  return data;
}

// this function only handles displaying products
function renderProducts(products) {
  const priceList = document.querySelector(".price-list");
  priceList.innerHTML = ""; // clear old results
  products.forEach((item) => {
    const discount =
      Math.round(
        ((item["market rate"] - item["sale price"]) / item["market rate"]) * 100
      ) || 0;
    priceList.innerHTML += `
      <div class="product-card">
        <img src="${item.image}" class="product-img" />
        <div class="product-info">
          <h2>${item["item name"]}</h2>
          <p class="brand">${item.category}</p>
          <div class="price">
            <span class="sale">₹${item["sale price"]}</span>
            <span class="mrp">₹${item["market rate"]}</span>
            <span class="discount">${discount}% OFF</span>
          </div>
          <p class="variant">${item.variant} ${item.unit} Pack</p>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getData();
  const products = result.data.slice(1);
  renderProducts(products); // ✅ call render function

    // later you can add search here
    const searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = products.filter((item) =>
        item["item name"].toLowerCase().includes(query)
      );
      renderProducts(filtered);
    });

});

