const product = require('./services/products'); 

async function main() {
    console.log('Olá, meu nome é system🤖');
    product.getFullName("777", "Tier");
    product.getFullName("208", "Trigger");
} 

main();

