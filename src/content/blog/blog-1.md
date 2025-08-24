---
title: 'Frequency of Data Distribution'
tags: ['Data','Statistics']
date: '24 August 2025'
desc: 'Pengukuran probabilitas data dan distribusinya terhadap x-values menggunakan standard deviation'
image: '/blog-1/banner.jpg'
url: ''
alt: 'blue mt_fuji by tokuriki'
---
Standard deviation adalah bagaimana cara kita mengukur penyebaran data diantara mean (rata-rata). untuk mengukur nilai tengah bisa diukur dengan median, median adalah metode pengukuran nilai tengah yang "resistance" oleh outliers sedangkan mean adalah metode yang digunakan dalam standard deviation.

### **dataset cafe_sales**
Mari kita menggunakan simulasi data penjualan suatu kafe yang dapat dari kaggle [cafe sales](https://www.kaggle.com/datasets/ahmedmohamed2003/cafe-sales-dirty-data-for-cleaning-training) data tersebut sudah di normalisasikan sehingga siap untuk "digunakan". Kita visualisasikan distribusi dari total spent sehingga kita bisa mengetahui seberapa banyak distribusi orang menghabiskan uangnya pada kafe kita. variabel yang pertama kita butuhkan adalah mean, kolom E adalah kolom total spent.

	Average(E2:E10001)

Berikutnya standard deviation, untuk menemukan penyebaran SD menggunakan formula :

![sd formula](/blog-1/img1.png)

Dengan formula excel

	STDEV.P(E2:E10001)

Kita mendapatkan mean **8,86525** dan SD **5,811292**.

Setelah itu buatlah tabel untuk divisualisasikan, buat kolom total spent sebagai x-values dengan x+2 (2, 4, 6, 8, ...) dan kolom probability density dengan formula

	NORM.DIST(M4;$K$3;$K$4;FALSE)

Parameter pertama diisi x-values, selanjutnya mean, dan SD yang sebelumnya dan isi FALSE. berikut data yang siap untuk di visualisasi
![sd table](/blog-1/img2.png)

Berikut hasil distribution dari data total spent pada dataset penjualan cafe

![sd visualization](/blog-1/img3.png)

Distribusi Total Spent menunjukkan pola yang tidak simetris dengan satu puncak (unimodal) pada kisaran 8-10 yang dimaksudkan probabilitas tertinggi terdapat pada total spent 8 sampai 10. Distribusi ini cenderung right-skewed dengan bentuk yang lebih miring ke kiri daripada normal distribution seperti bell-curved.