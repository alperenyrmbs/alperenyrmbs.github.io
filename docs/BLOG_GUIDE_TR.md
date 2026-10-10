# Blog yazma ve yayınlama rehberi

Site aracı: **Jekyll**. Yazıları Markdown dosyası olarak eklersin. GitHub Pages şablonları kullanarak sayfaları oluşturur.

## İlk yazını yayınla

1. `alperenyrmbs/alperenyrmbs.github.io` reposunu aç.
2. **Add file → Create new file** seç.
3. Dosya adı alanına `_posts/2026-10-10-ilk-yazim.md` yaz. Tarihi yayınlayacağın güne göre değiştir. Dosya adında boşluk ve Türkçe karakter kullanma.
4. `templates/blog-post.md` içeriğini kopyala. En üstteki `---` çizgilerini koru; başlığı, özeti ve etiketleri değiştir.
5. Altına kendi yazını yaz. İngilizce veya Türkçe yazabilirsin. Site menüleri İngilizce kalır.
6. **Commit changes** ile `main` dalına kaydet.
7. **Actions** sekmesindeki Jekyll yayınlama işlemi başarılı olduğunda `/blog/` sayfasını aç. Yazı listeye ve ana sayfaya otomatik eklenir.

## Başlangıç örneği

```markdown
---
layout: post
title: "Python ile ilk veri temizleme çalışmam"
description: "Ders çalışmamda denediğim adımlar ve öğrendiklerim."
tags: [python, data-cleaning]
---

## Amacım
Kendi amacını buraya yaz.

## Denediğim adımlar
Gerçekte yaptığın işlemleri anlat.

## Öğrendiklerim
Anladığın bir şeyi ve karşılaştığın bir zorluğu paylaş.

## Sonraki adımım
Geliştirmek istediğin noktayı yaz.

## Kaynaklar
Kullandığın kaynakların bağlantılarını ekle.
```

Bu bir şablondur; hazır bir başarı hikâyesi değildir. Kendi çalışmana göre doldur.

## Markdown kısa rehberi

- `## Başlık` → bölüm başlığı
- `**önemli**` → kalın yazı
- `- Bir madde` → liste
- `[Bağlantı metni](https://example.com)` → bağlantı
- Kod için üç ters tırnakla başlayan ve biten blok kullan; ilk satıra dili ekle: python.
- Görsel için dosyayı `assets/images/` içine yükle ve `![Açıklama](/assets/images/dosya.png)` kullan.

## Taslak ve düzenleme

- `_drafts/my-first-post.md` yayınlanmayan bir başlangıç şablonudur.
- Yayınlamak için içeriği tarihli `_posts/` dosyasına kopyala ve commit et.
- **Taslaklar bu herkese açık repoda görülebilir.** Kişisel, gizli veya paylaşmak istemediğin metinleri repoya koyma.
- Yayınlanmış yazıyı değiştirmek için ilgili dosyayı aç, kalem simgesiyle düzenle ve commit et.
- Bir yazıyı geçici olarak siteden kaldırmak için üst bölümüne `published: false` ekle. Dosya GitHub'da görünmeye devam eder.
- Gelecek tarihli dosyalar tarih gelmeden yayınlanmaz.
- Yazı adresi dosya adının tarih sonrası kısmından oluşur: örneğin `/blog/ilk-yazim/`. Yayından sonra dosya adını değiştirmek mevcut bağlantıları bozabilir.

## İlk konu fikirleri

1. Bir Python ders çalışmasında öğrendiğin veri temizleme adımları.
2. Streamlit kitap uygulamasında form ve session state kullanımı.
3. Tableau öğrenirken zorlandığın ve sonradan anladığın bir konu.

Her yazıda: amaç, gerçek adımlar, küçük bir örnek, öğrendiğin şey, bir sınırlama ve kaynaklar. Başlangıç için 300–500 kelime yeterlidir; doğru ve anlaşılır olması uzun olmasından daha önemlidir.

## Merkezi dosyaları düzenleme

- LinkedIn/GitHub bağlantıları: `_data/profile.yml`
- Beceriler ve projeler: `_data/skills.json`, `_data/projects.json`
- Tasarım ve renkler: `assets/css/style.css`
- Ortak davranışlar: `assets/js/main.js`
- Menü ve footer: `_includes/header.html`, `_includes/footer.html`
- Tüm yazıların görünümü: `_layouts/post.html`

Her yeni yazıda HTML, CSS veya JavaScript kopyalaman gerekmez.
