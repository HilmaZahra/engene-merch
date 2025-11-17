// Navbar
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace("bg-transparent", "nav-color");
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace("nav-color", "bg-transparent");
    }
});

// Alpine.js
document.addEventListener("alpine:init", () => {
    Alpine.data("merch", () => ({
        selectedAlbum: "daydream",
        albums: [
            { id: "borderDay1", name: "BORDER : DAY ONE", img: "image/album/border-day1.png" },
            { id: "borderCarnival", name: "BORDER : CARNIVAL", img: "image/album/border-carnival.jpg" },
            { id: "dimensionDilemma", name: "DIMENSION : DILEMMA", img: "image/album/dimension-dilemma.png" },
            { id: "dimensionAnswer", name: "DIMENSION : ANSWER", img: "image/album/dimension-answer.png" },
            { id: "manifestoDay1", name: "MANIFESTO : DAY ONE", img: "image/album/manifesto-day1.jpg" },
            { id: "darkBlood", name: "DARK BLOOD", img: "image/album/dark-blood.jpg" },
            { id: "orangeBlood", name: "ORANGE BLOOD", img: "image/album/orange-blood.jpg" },
            { id: "romanceUntold", name: "ROMANCE : UNTOLD", img: "image/album/romance-untold.jpg" },
            { id: "daydream", name: "ROMANCE : UNTOLD -daydream-", img: "image/album/daydream.jpg" },
        ],
        albumTitles: {
            borderDay1: "BORDER : DAY ONE",
            borderCarnival: "BORDER : CARNIVAL",
            dimensionDilemma: "DIMENSION : DILEMMA",
            dimensionAnswer: "DIMENSION : ANSWER",
            manifestoDay1: "MANIFESTO : DAY ONE",
            darkBlood: "DARK BLOOD",
            orangeBlood: "ORANGE BLOOD",
            romanceUntold: "ROMANCE : UNTOLD",
            daydream: "ROMANCE : UNTOLD -daydream-",
        },
        products: {
            borderDay1: [
                { id: "borderDay11", name: "BORDER : DAY ONE", img: "image/product/border-day1/album.jpg", price: 14.67 },
            ],
            borderCarnival: [
                { id: "borderCarnival1", name: "BORDER : CARNIVAL (Set)", img: "image/product/border-carnival/album-set.jpg", price: 42.06 },
                { id: "borderCarnival2", name: "BORDER : CARNIVAL (Random)", img: "image/product/border-carnival/album-random.jpg", price: 14.02 },
            ],
            dimensionDilemma: [
                { id: "dimensionDilemma1", name: "DIMENSION : DILEMMA (Set)", img: "image/product/dimension-dilemma/album-set.jpg", price: 43.87 },
                { id: "dimensionDilemma2", name: "DIMENSION : DILEMMA (Random)", img: "image/product/dimension-dilemma/album-random.jpg", price: 14.67 },
                { id: "dimensionDilemma3", name: "DIMENSION : DILEMMA (ESSENTIAL ver.)", img: "image/product/dimension-dilemma/album-essential.jpg", price: 9.75 },

            ],
            dimensionAnswer: [
                { id: "dimensionAnswer1", name: "DIMENSION : ANSWER (Set)", img: "image/product/dimension-answer/album-set.png", price: 31.65 },
                { id: "dimensionAnswer2", name: "DIMENSION : ANSWER (Random)", img: "image/product/dimension-answer/album-random.png", price: 15.82 },
            ],
            manifestoDay1: [
                { id: "manifestoDay11", name: "MANIFESTO : DAY 1 (Random)", img: "image/product/manifesto-day1/album-random.png", price: 14.59 },
                { id: "manifestoDay12", name: "MANIFESTO : DAY 1 (ENGENE ver.) (Set)", img: "image/product/manifesto-day1/album-engene-set.png", price: 34.19 },
                { id: "manifestoDay13", name: "MANIFESTO : DAY 1 (ENGENE ver.) (Random)", img: "image/product/manifesto-day1/album-engene-random.png", price: 11.39 },

            ],
            darkBlood: [
                { id: "darkBlood1", name: "DARK BLOOD (Random)", img: "image/product/dark-blood/album-random.png", price: 15.82 },
                { id: "darkBlood1", name: "DARK BLOOD (ENGENE ver.) (Set)", img: "image/product/dark-blood/album-engene-set.png", price: 79.78 },
                { id: "darkBlood1", name: "DARK BLOOD (ENGENE ver.) (Random)", img: "image/product/dark-blood/album-engene-random.png", price: 11.39 },
            ],
            orangeBlood: [
                { id: "orangeBlood1", name: "ORANGE BLOOD (Set)", img: "image/product/orange-blood/album-set.png", price: 31.65 },
                { id: "orangeBlood1", name: "ORANGE BLOOD (Set)", img: "image/product/orange-blood/album-random.png", price: 15.82 },
                { id: "orangeBlood1", name: "ORANGE BLOOD (Set)", img: "image/product/orange-blood/album-engene-set.png", price: 79.78 },
                { id: "orangeBlood1", name: "ORANGE BLOOD (Set)", img: "image/product/orange-blood/album-engene-random.png", price: 11.39 },
            ],
            romanceUntold: [
                { id: "romanceUntold1", name: "ROMANCE : UNTOLD (Set)", img: "image/product/romance-untold/album-set.png", price: 50.92 },
                { id: "romanceUntold2", name: "ROMANCE : UNTOLD (Random)", img: "image/product/romance-untold/album-random.png", price: 16.97 },
                { id: "romanceUntold3", name: "ROMANCE : UNTOLD (ENGENE ver.) (Set", img: "image/product/romance-untold/album-engene-set.png", price: 79.78 },
                { id: "romanceUntold4", name: "ROMANCE : UNTOLD (ENGENE ver.) (Random)", img: "image/product/romance-untold/album-engene-random.png", price: 11.39 },
                { id: "romanceUntold5", name: "ROMANCE : UNTOLD (Vinyl)", img: "image/product/romance-untold/vinyl.png", price: 36.90 },
            ],
            daydream: [
                { id: "daydream1", name: "ROMANCE : UNTOLD -daydream- (Set)", img: "image/product/daydream/album-set.png", price: 33.94 },
                { id: "daydream2", name: "ROMANCE : UNTOLD -daydream- (Random)", img: "image/product/daydream/album-random.png", price: 16.97 },
                { id: "daydream3", name: "ROMANCE : UNTOLD -daydream- (JAPAN Edition)", img: "image/product/daydream/album-japan.png", price: 16.97 },
                { id: "daydream4", name: "Keyring", img: "image/product/daydream/keyring.png", price: 16.4 },
                { id: "daydream5", name: "Clear Photo Pouch Set", img: "image/product/daydream/clear-photo.png", price: 15.58 },
                { id: "daydream6", name: "[POP-UP] SHOPPER BAG", img: "image/product/daydream/shopper-bag.jpg", price: 4.1 },
                { id: "daydream7", name: "[POP-UP] ACRYLIC SMART TOK", img: "image/product/daydream/acrylic-smarttok.jpg", price: 9.02 },
            ],
        },
    }));

    Alpine.data("productTopSeller", () => ({
        items: [
            { id: "productAlbum2", name: "ROMANCE : UNTOLD -daydream- (Random)", img: "image/product/daydream/album-random.png", price: 16.97 },
            { id: "productTopSeller1", name: "Stadium Jacket", img: "image/product/stadium-jacket.png", price: 105.78 },
            { id: "productTopSeller2", name: "Official Light Stick Ver.2", img: "image/product/lightstick-ver2.png", price: 16.4 },
            { id: "productTopSeller3", name: "Ringer T-shirt", img: "image/product/ringer-tshirt.png", price: 40.18 },
        ],
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek produk yang sama
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika tidak ada yang sama
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
                console.log(this.total);
            } else {
                // jika ada, cek sama atau tidak
                this.items = this.items.map((item) => {
                    // jika tidak ada
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika ada tambah quantity dan total
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // cek ada produk atau tidak
            const cartItem = this.items.find((item) => item.id === id);

            // jika lebih dari 1
            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

// konversi ke dolar
const dolar = (number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(number);
};
