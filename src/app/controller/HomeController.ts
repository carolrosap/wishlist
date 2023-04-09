import { Request, Response } from "express";
import axios from 'axios';
import { Products } from "../model/Products";


class HomeController {
  // public async home(req: Request, res: Response) {
    
  //   try {
  //     // Faz a requisição GET à API utilizando o Axios
  //     const response = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e');
  //     const dados = response.data; // Dados da resposta da API
  
  //     // Envia a resposta da API para o cliente
  //     return res.status(200).json(dados);
  //   } catch (error) {
  //     // Trata erros da requisição
  //     return res.status(500).json({ error: 'Erro ao acessar API' });
  //   }
  // }

  public home(req: Request, res: Response) {
    let pro = new Products()
    pro.getProducts
    res.removeHeader('X-Content-Type-Options')
    
    res.sendFile('home.html', {root: './src/app/view/'})
  }
}

export const homeController = new HomeController()
