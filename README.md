# Interceptor Projesi

Bu proje, Next.js kullanılarak oluşturulmuş bir kimlik doğrulama (authentication) ve yetkilendirme (authorization) sistemini temel alan bir uygulamadır. Proje, kullanıcıların kayıt olmasını, giriş yapmasını ve yetkilendirilmiş kaynaklara erişmesini sağlar. Ayrıca, Axios interceptor'ları kullanılarak API isteklerine otomatik olarak token eklenmesi ve yetkisiz erişim durumunda kullanıcıların yönlendirilmesi gibi özellikler de içermektedir.

## Özellikler

- **Kullanıcı Kayıt ve Giriş:** Kullanıcılar, güvenli bir şekilde kayıt olabilir ve giriş yapabilirler.
- **JWT Tabanlı Kimlik Doğrulama:** JSON Web Token (JWT) kullanılarak kullanıcıların kimlikleri doğrulanır.
- **Axios Interceptor'ları:** API isteklerine otomatik olarak JWT token'ı eklenir ve yetkisiz erişim durumunda kullanıcılar yönlendirilir.
- **MongoDB Entegrasyonu:** Kullanıcı verileri MongoDB veritabanında saklanır.
- **Next.js API Routes:** Backend işlemleri için Next.js API routes kullanılır.
- **Özel Alias'lar:** `@` alias'ı kullanılarak import işlemleri kolaylaştırılmıştır.
- **Client Component'ler:** React hook'ları kullanılan component'ler client component olarak işaretlenmiştir.

## Teknolojiler

- **Next.js:** React tabanlı bir web framework'ü.
- **React:** Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi.
- **TypeScript:** JavaScript'e statik tip kontrolü ekleyen bir dil.
- **MongoDB:** NoSQL veritabanı.
- **Axios:** HTTP istekleri yapmak için kullanılan bir kütüphane.
- **bcryptjs:** Şifreleri hashlemek için kullanılan bir kütüphane.
- **jsonwebtoken:** JWT oluşturmak ve doğrulamak için kullanılan bir kütüphane.
- **Tailwind CSS:** CSS framework'ü.
