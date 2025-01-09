# Next.js Authentication with JWT and Axios Interceptors

Bu proje, Next.js kullanarak basit bir kimlik doğrulama sistemini uygulamaktadır. Kullanıcılar kayıt olabilir, giriş yapabilir ve JWT tabanlı kimlik doğrulama ile güvenli bir şekilde oturum açabilirler.

## Özellikler

- **Kullanıcı Kayıt ve Giriş:** Kullanıcılar, güvenli bir şekilde kayıt olabilir ve giriş yapabilirler.
- **JWT Tabanlı Kimlik Doğrulama:** JSON Web Token (JWT) kullanılarak kullanıcıların kimlikleri doğrulanır.
- **Axios Interceptor'ları:** API isteklerine otomatik olarak JWT token'ı eklenir ve yetkisiz erişim durumunda kullanıcılar yönlendirilir.
- **MongoDB Entegrasyonu:** Kullanıcı verileri MongoDB veritabanında saklanır.
- **Next.js API Routes:** Backend işlemleri için Next.js API routes kullanılır.
- **Özel Alias'lar:** `@` alias'ı kullanılarak import işlemleri kolaylaştırılmıştır.
- **Client Component'ler:** React hook'ları kullanılan component'ler client component olarak işaretlenmiştir.
- **Protected Routes:** Giriş yapmamış kullanıcıların belirli sayfalara erişimi engellenir.
- **Token Süresi Kontrolü:** JWT token'larının süresi kontrol edilir ve süresi dolan token'lar silinir.
- **Logout İşlemi:** Kullanıcılar güvenli bir şekilde çıkış yapabilirler.
- **Giriş Yapmış Kullanıcıların Login/Signup Sayfalarına Erişimi Engellenir:** Giriş yapmış kullanıcılar, login ve signup sayfalarına erişemezler.
- **Dashboard Sayfası:** Giriş yapmış kullanıcılar için özel bir dashboard sayfası bulunur.
- **Hata Yönetimi:** Yanlış giriş bilgileri durumunda kullanıcıya hata mesajı gösterilir.

## Teknolojiler

- Next.js
- React
- TypeScript
- MongoDB
- bcryptjs
- jsonwebtoken
- axios
- Tailwind CSS

- Projede kullanılan JWT token'larının süresi 3 dakikadır.
- Giriş yapmış kullanıcılar, dashboard sayfasına yönlendirilir ve geri tuşuyla dashboard'dan çıkış yapamazlar.
- Logout butonu sadece giriş yapıldığında dashboard sayfasında görünür.
- Yanlış giriş bilgileri durumunda kullanıcıya hata mesajı gösterilir ve sayfa yenilenmez.
