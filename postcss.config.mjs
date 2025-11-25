export default {
  plugins: {
    "@tailwindcss/postcss": {},  // Bu sefer DOĞRU olan bu! (önceki hatayı tersine çevirdik)
    autoprefixer: {},            // Bunu da ekle, yoksa CSS tarayıcı uyumu bozulur
  },
};