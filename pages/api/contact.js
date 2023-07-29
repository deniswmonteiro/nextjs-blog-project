import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email || !email.includes("@") || !name || !message) {
            res.status(422).json({
                message: "Preecha os campos corretamente."
            });
        }

        else {
            const contact = {
                email,
                name,
                message
            }

            try {
                const connect = await MongoClient.connect("mongodb+srv://deniswmonteiro:woftam-corMat-1pipna@cluster0.cwxr3dv.mongodb.net/blog-contact");
                const db = connect.db();

                try {
                    await db.collection("messages").insertOne(contact);

                    res.status(201).json({
                        message: "Mensagem enviada com sucesso."
                    });

                    connect.close();
                }

                catch (error) {
                    res.status(500).json({
                        message: "Erro ao enviar mensagem. Tente novamente mais tarde."
                    });
                }
            }

            catch (error) {
                res.status(500).json({
                    message: "Erro de conexão com o banco de dados. Tente novamente mais tarde."
                });
            }
        }
    }
}