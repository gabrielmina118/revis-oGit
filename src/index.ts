import { Request, Response } from "express";
import app from "./App";
import { countries, country, CONTINENTS } from './Countries'


app.get("/paises", async (req: Request, res: Response) => {
    try {
        res.status(200).send(countries)
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
})

app.get("/paises/:id", (req: Request, res: Response) => {

    try {

        if (isNaN(Number(req.params.id))) {
            throw new Error("Deve ser um numero")
        }

        const id = Number(req.params.id);
        const result = countries.find((country => country.id === id));

        if (!result) {
            throw new Error("Não há pais com esse ID")
        }

        res.
            status(200)
            .send(result)

    } catch (erro: any) {
        res.status(400).send({ message: erro.message })
    }
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {

    try {

        if (isNaN(Number(req.params.id))) {
            throw new Error("O id deve ser um numero")
        }

        const id = Number(req.params.id);
        const alteraBody = req.body.alteraBody;

        let result: (country | undefined) = countries.find((country => country.id === id))


        const novoResult: (country) = {
            id: result?.id as number,
            name: req.body.name,
            capital: req.body.capital,
            continent: result?.continent as CONTINENTS
        }

        console.log(novoResult);

        res.status(200).send(novoResult)



    } catch (erro: any) {
        res.status(400).send({ message: erro.message })
    }

})