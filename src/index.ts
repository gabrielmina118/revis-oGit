import { Request, Response } from "express";
import app from "./App";
import { countries } from './Countries'


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
