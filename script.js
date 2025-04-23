
const MOCK_APIS = {
    sliderData: 'https://run.mocky.io/v3/1492736c-c870-4027-8f7e-71879825f485',
    quickLinks: 'https://run.mocky.io/v3/784a8b92-5c85-43a2-8f45-33626a8acd5b',
    elektronikFirsatlar: 'https://run.mocky.io/v3/6b9afac0-4837-488a-ac82-4c7fd8b653ad',
    recommendations: 'https://run.mocky.io/v3/182c7323-c91d-448a-968a-239ab2703c93'
};


async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

//  Main Slider
async function initMainSlider() {
    const sliderData = await fetchData(MOCK_APIS.sliderData) || [
        { image: 'https://emlakkulisi.com.tr/resim/orjinal/NzU3Njg5Nz-philips-kucuk-ev-aletlerinde-tum-indirimlere-ek-net-yuzde-5-indirim-hepsiburada-5-ekim-2022-fiyat-listesi.png', heading: 'PHILIPS KAMPANYA' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/banner_copy__(yeni_tasarim)133803808664865707.png/format:webp', heading: 'KAZANDIRAN ÇEKİLİŞ' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-191712-appbanner133862318784984349.jpg/format:webp', heading: ' APPLE KAMPANYA' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/app133887594688018487.png/format:webp', heading: 'PREMIUM GUNLERİ' },
        { image: 'https://images.hepsiburada.net/banners/s/1/1280-400/category-bilg-kazandiranprmiumlenovoslim3hero-14-04f133892826731656405.jpg/format:webp', heading: 'LENOVA BİLGİSAYAR' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-193964-appbanner_(1)133892833378839915.jpg/format:webp', heading: 'DYSON KAMPANYA' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-193452-appbanner133888306389687445.jpg/format:webp', heading: 'KARACA' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-192063-appbanner_(1)133870199560983678.jpg/format:webp', heading: 'WINDOWS' },
        { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-193190-appbanner133890333991521698.jpg/format:webp', heading: 'PAŞABAHÇE' },
         { image: 'https://images.hepsiburada.net/banners/s/1/832-364/gra-193744-appbanner133891877199872687.jpg/format:webp', heading: 'JUMBO' },
        
        
    ];

    const sliderContainer = document.querySelector('#mainSlider .carousel-inner');
    sliderData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${item.image}" class="d-block w-100" alt="${item.heading}">
            <div class="carousel-caption">
                <h3>${item.heading}</h3>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });
}

// Links
async function initQuickLinks() {
    const quickLinksData = await fetchData(MOCK_APIS.quickLinks) || [
        { title: 'PREMIUM GUNLERI', link: '#' },
        { title: 'YENI GELENLER', link: '#' },
        { title: 'SEPETTE %30', link: '#' },
        { title: 'SON FIRSATLAR', link: '#' },
        { title: 'YURTDIŞINDAN', link: '#' },
        { title: 'ÇOCUK ÜRÜNLERİ', link: '#' },
        { title: 'KAMPANYALAR', link: '#' },
        { title: 'ELBİSELER', link: '#' },

    ];

    const container = document.getElementById('quickLinks');
    quickLinksData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6';
        card.innerHTML = `
            <div class="quick-link-card">
                <h5>${item.title}</h5>
                <a href="${item.link}" class="text-white">Learn More →</a>
            </div>
        `;
        container.appendChild(card);
    });
}


async function initElektronikFirsatlar() {
    const elektronikData = await fetchData(MOCK_APIS.elektronikFirsatlar) || [
        { image: 'https://productimages.hepsiburada.net/s/405/424-600/110000433380673.jpg/format:webp', name: 'Kodak Pıxpro Friendly Zoom FZ55-BL 16MP Dijital Kamera', price: '10.690,00 TLL' },
        { image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/149879-1_small.jpg', name: 'Apple MacBook Air M2 8GB 512GB SSD macOS 13" Taşınabilir Bilgisayar Uzay Grisi', price: '36.999,00 TL' },
        { image: 'https://productimages.hepsiburada.net/s/54/424-600/11174010585138.jpg/format:webp', name: 'https://productimages.hepsiburada.net/s/54/424-600/11174010585138.jpg/format:webp', price: '2.998,45 TL' },
        
    ];

    const container = document.querySelector('#elektronikSlider .carousel-inner');
    elektronikData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="product-card text-center">
                        <img src="${item.image}" alt="${item.name}">
                        <h4 class="mt-3">${item.name}</h4>
                        <h5 class="text-primary">${item.price}</h5>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(slide);
    });
}

//  Recommendations
async function initRecommendations() {
    const recommendationsData = await fetchData(MOCK_APIS.recommendations) || [
        { image: 'https://productimages.hepsiburada.net/s/42/200-200/10727354302514.jpg/format:webp', name: 'Kiwi KSI-6450 Kırışık Giderici Buharlı Dikey Ütü Gri', price: '799TL', rating: 4 },
        { image: 'https://productimages.hepsiburada.net/s/80/200-200/110000022551796.jpg/format:webp', name: 'Arzum AR1092 Mano 1700 Watt El Blender Seti - Kırmızı', price: '1.789,27 TL', rating: 4},
        { image: 'https://productimages.hepsiburada.net/s/508/200-200/110000562611699.jpg/format:webp', name: 'Omo Sıvı Active Cold Power Beyazlar ve Renkliler İçin Çamaşır Deterjanı 1690 ml', price: '226,90 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000939207549.jpg/format:webp', name: 'Huawei FreeArc Kablosuz Kulakiçi Kulaklık - Gri', price: '4.639,58 TL', rating: 4 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000898486784.jpg/format:webp', name: 'Philips PerfectCare Compact Plus Buhar kazanlı ütü GC7920/20', price: '3.999,00 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000822450792.jpg/format:webp', name: 'Samsung Galaxy A25 5G 128 GB 6 GB Ram ', price: '12.797,05 TL', rating: 4 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000773211682.jpg/format:webp', name: 'Apple Airpods 4. Nesil', price: '6.578,00 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000742393588.jpg/format:webp', name: 'NYX Professional Makeup Buttermelt Blush Kremsi Pembe Pudra Allık - 08 Getting Butta', price: '220,00 TL', rating: 4 },
        { image: 'https://productimages.hepsiburada.net/s/777/424-600/110000731845073.jpg/format:webp', name: ' La Roche Posay Anthelios Invisible Fluid Spf 50 Güneş Kremi 50 ml', price: '420,00 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/777/200-200/110000709534530.jpg/format:webp', name: 'Kiwi KCC-4325W Koltuk Ve Halı Yıkama Makinesi', price: '5.919 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/39/424-600/10620590751794.jpg/format:webp', name: ' Yakut SF-400 Hassas Mutfak Terazisi', price: '156,40 TL', rating: 5 },
        { image: 'https://productimages.hepsiburada.net/s/49/424-600/10986513596466.jpg/format:webp', name: 'Kumtel Bej Fanlı Isıtıcı 2000 W LX', price: '509,00 TL', rating: 3 }
    ];

    const container = document.getElementById('recommendations');
    recommendationsData.forEach(item => {
        const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6';
        card.innerHTML = `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h5 class="mt-3">${item.name}</h5>
                <p class="text-primary">${item.price}</p>
                <div class="stars">${stars}</div>
            </div>
        `;
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initMainSlider();
    initQuickLinks();
    initElektronikFirsatlar();
    initRecommendations();
}); 