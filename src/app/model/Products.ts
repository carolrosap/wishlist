import axios from "axios";

export class Products {
    public productsList: any

    constructor () {
        this.productsList = []
    }

    public async getProducts () {
        try {
            const response = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
            const products = response.data.products.json()
            this.productsList = products
        } catch (error) {
            return false      
        }
    }
}