const beautyQuotes = [
    {
        quote: "Beauty begins the moment you decide to be yourself.",
        author: "Coco Chanel"
    },
    {
        quote: "Invest in your skin. It is going to represent you for a very long time.",
        author: "Linden Tyler"
    },
    {
        quote: "Self-care is not a luxury, it's a priority.",
        author: "Anonymous"
    },
    {
        quote: "The best foundation you can wear is glowing healthy skin.",
        author: "Anonymous"
    },
    {
        quote: "Taking care of yourself is part of taking care of others.",
        author: "Jennifer Williamson"
    },
    {
        quote: "Happiness is the secret to all beauty. There is no beauty without happiness.",
        author: "Christian Dior"
    },
    {
        quote: "Makeup is not a mask, it's art, passion, and expression.",
        author: "Anonymous"
    },
    {
        quote: "Confidence breeds beauty.",
        author: "Estee Lauder"
    },
    {
        quote: "To love yourself is the beginning of a lifelong romance.",
        author: "Oscar Wilde"
    },
    {
        quote: "Beauty is about enhancing what you have. Let yourself shine through.",
        author: "Janelle Monáe"
    },
    {
        quote: "Luxury is not a choice, it’s a way of being — just like Siora.",
        author: "Siora"
    },
    {
        quote: "True beauty whispers, it never shouts — Siora captures that whisper.",
        author: "Siora"
    },
    {
        quote: "In a world full of noise, choose the quiet elegance of Siora.",
        author: "Siora"
    },
    {
        quote: "When purity meets luxury, a new story begins — it’s called Siora.",
        author: "Siora"
    },
    {
        quote: "Simplicity, purity, and grace — Siora is the art of effortless beauty.",
        author: "Siora"
    },
    {
        quote: "You don’t wear luxury, you feel it — Siora lives on your skin and soul.",
        author: "Siora"
    },
    {
        quote: "The glow you seek is already within you — Siora simply unveils it.",
        author: "Siora"
    },
    {
        quote: "Self-love is the purest form of luxury. Siora is your silent celebration.",
        author: "Siora"
    }
];




const randomQuote = beautyQuotes[Math.floor(Math.random() * beautyQuotes.length)];
document.getElementById('quote').innerHTML = `${randomQuote.quote}`;
document.querySelector('.author-name').innerHTML = `${randomQuote.author}`;