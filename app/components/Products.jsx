"use client"
import styles from "./styles/allproducts.module.css";
import Link from "next/link";
export default function Products() {
  const items = [
    {
      name: "Wireless Bluetooth Earbuds",
      image: "https://m.media-amazon.com/images/I/31EU6G7ziyL._SX300_SY300_QL70_FMwebp_.jpg",
      amazonLink:"https://www.amazon.in/pTron-Bassbuds-NX-Bluetooth-Headphones/dp/B0CWLFKNDS/ref=sr_1_2_sspa?crid=25RDPA1LZ268&dib=eyJ2IjoiMSJ9.-JJs9er8e1pT6a62yBfOiBmw14ueEZirscQoh7ssWnLR9xWSqO2wmsJXlmIIO4zQ__Hk9zG4j8j8yqN-Vqw5Ya3ggL9S3P7mxB293MwZLQY45jcjtLzDD1PpZWCF4QAsh3KE2NXgCt7Umiy4HppRL4OV-EvCw8Bz0V0KknQ0OTyycbyIjo0VPn5-UqkewArG4w3xnT0PL0Z9ts9uQZmkT7xiRYl0sAXr_g_lfgSqD4A.yWIK3CH7JjBLSo83hMZL1EGsdHtWhTHWzGDtmRbPLSs&dib_tag=se&keywords=bluetooth+earbuds&qid=1712929065&sprefix=bluetooth+earbud%2Caps%2C227&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
      name: "Smartphone Stand",
      image: "https://m.media-amazon.com/images/I/51Vd26RTFkL._SL1500_.jpg",
      amazonLink: "https://www.amazon.in/WeCool-Navigation-Locking-Gripping-Rotation/dp/B0B2DJ5RVQ/ref=sr_1_1_sspa?crid=3D9F08UGJ1AL5&dib=eyJ2IjoiMSJ9.uUX9zCE3KVRP7Wa2OM-TWONY2v5vzYX8qdKmL9NTzkQM4c1nKbzxib9PEJBgUkO-qy6hKo5XyvBEJHLhheSOq-XdWNQ1__kQYexNKPEm-kuYUkEAngvgb7VeNyxM9XFvhL-OCya4BGVbGhETQL-bwywHFAq6ix2yWcgfehtlCdliXpZS0xvJ94ypcVwLMMaMc1Lhgodc41SQJ7zvem5Ll7TFkdCdGAIOWObW1IQ6gVw.Q4cm0pVKUhRWwX9OhalCWrkXJjUSaIrwiVlT7piQAhw&dib_tag=se&keywords=smartphone+stand&qid=1712929105&sprefix=smartphoe+stan%2Caps%2C238&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
      name: "Stainless Steel Water Bottle",
      image: "https://m.media-amazon.com/images/I/71zFvtVuP1L._SL1500_.jpg",
      amazonLink: "https://amazon.in/Boldfit-Bottles-Stainless-Bottle-Leakproof/dp/B0C4YRBB8Z/ref=sr_1_5?crid=DZRYUTJIS81V&dib=eyJ2IjoiMSJ9.uHiberklSZ9RO3Bc9rb39S-BSslYDcRQqZ47pJRwunpDJMJJDdONNR6DcgggYBvsVbF8bmftu9AyXx_uVCwWxSX6aMqcl93sYEkV-UsMAeswBT9d7YKg-YI8QmG-p2mSovG8v-PZmtGiZTqJ8tPjKQF0xPIQibuhFdx-r7KrHwTfOpYiYdp1RpgtOetBdLr3xrumEnbOgILdNL9gpB7FkZIEUsL8_-Bgtg4newCKToQG4579RkUNO6uU8cMVHeocYS7HQA1DANedqXC0QCrwuF5PEXli9pTjbJjyFrVuWVA.tjWw-p3NKSDBGKp7yOswq5Eq4iY3BI9_EI_9z-xq0tk&dib_tag=se&keywords=water+bottle&qid=1712929139&sprefix=water%2Caps%2C222&sr=8-5"
    },
    {
      name: "Portable Charger",
      image: "https://m.media-amazon.com/images/I/71pBjes-NTS._SL1500_.jpg",
      amazonLink: "https://www.amazon.in/Pocket-10000mAh-Triple-Charging-Delivery/dp/B08MC57J31/ref=sr_1_1_sspa?crid=133NFUT4D1EF1&dib=eyJ2IjoiMSJ9.vLxmHZHQSis8MqYa9mEcfvfRIAcDoPhLlCHP7ryKY0X_XV8A3gcKFOQLDlrKRV6h5qp3eQmThkd95ktOS1rf9fbLgkLjDEfi5TwihybxCYo8yoKHIktZ2hUnlCfBaYnxpuhufykUH1ZUrj13NCW7-pnIhj_s2DJikvEbwHYx776QcZqTgckYUd1PdcJXAk_nL6uir_k2sKHTmqsRvyb1yLwj03eevDEmh6hEU-jze1U.eupIZw-5mkvVWrJDo6rsOHydXtD5-IfbzjD5vO16ITo&dib_tag=se&keywords=portable+charger&qid=1712929186&sprefix=portable+charge%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },

      {
      name: "Wireless Charging Pad",
      image: "https://m.media-amazon.com/images/I/316POO1024L._SX300_SY300_QL70_FMwebp_.jpg",
      amazonLink: "https://www.amazon.in/UNIGEN-UNIPAD-150-Wireless-Compatible/dp/B08Z3Q3ZHT?ref_=ast_sto_dp&th=1"
    },
    {
      name: "Laptop Backpack",
      image: "https://m.media-amazon.com/images/I/81HEFdxYFPL._SY695_.jpg",
      amazonLink: "https://www.amazon.in/EUME-Commute-Compartment-Leather-MacBook/dp/B0CZXLHZBK/ref=sr_1_3_sspa?crid=38JGR2QJNAJSC&dib=eyJ2IjoiMSJ9.lYz7sFVWpuejENIoDejrbIj6IxR8d9lxmMLOOG6SDIDHWlJCSV-PXPfKKTQBHQCBcH91GfhjF2gPSMDhGC1JU3QzUQ_7HV6RxbcdDufrWOKbzX7gOqROLwJNx_KVc7wKkVQsRr4TRaZIGhuWiFhIggF9h2U79MhoO90XO7oD8ZxUHP8GwXSXAs1kg0winX0_nQ9yI_pjMZSntEiedKZXM8fhVpay8mlEn1Z3723yNnYEvcVcNChQDKMKLdurljntrv8mhawEkooOLHA1IdK8o4_cLZQxHMrOe5Ol96v4mDI.YU9dZFdiSXMDJz2_Gy49njX3gRq68kk10JULZu071HU&dib_tag=se&keywords=laptop+bag&qid=1712929323&s=electronics&sprefix=laptop+ba%2Celectronics%2C217&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    }
  ];
  
  return (
    <div className={styles.main}>
        <h2>Products</h2>
        <div className={styles.products}>
        {items.map((item, index) => (
          <Link className={styles.link} href={item.amazonLink}>
          <div key={index} className={styles.product}>
            <div className={styles.sixty}><img className={styles.productImage} src={item.image} alt="image" /></div>
            <div className={styles.thirty}>
              <h1>{item.name}</h1>
            </div>
          </div>
          </Link>
        ))}




         
         
        </div>
    </div>
  )
}
