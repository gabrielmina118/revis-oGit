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
