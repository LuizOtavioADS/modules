const product = require('./services/products');

const config = require('./services/config')

const database = require('./services/database')

async function main() {
    console.log('Olá, meu nome é system🤖');

    // product.getFullName("777", "Tier");
    // product.getFullName("208", "Trigger");
    // product.getProductLabel('Mouse gamer');
    database.connectToDatabase;
    console.log(config.production);
} 

main();

