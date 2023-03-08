import Query from "../model/query.js";
import errorFunc from "../utils/errorFunc.js";

class queryController {

    static async getQueries(req, res) {
        try {
            const queries = await Query.find();
            res.status(200).json({
                data: queries,
            });
        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

    static async getQuery(req, res) {
        try {
            const { id } = req.params;
            const query = await Query.findOne({ _id: id });
            if (!query) {
                return res.status(404).json({
                    message: `Query with id: ${id} was not found`
                });
            } else {
                return res.status(200).json({
                    message: "Message",
                    data: query
                });
            }
        } catch (error) {
            console.log(error.message);
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

    static async createQuery(req, res) {
        try {
            const { fullname, email, content } = req.body;
            const newQuery = await Query.create({ fullname, email, content });
            res.status(201).json({
                message: "Message sent successfully",
                data: newQuery
            });
        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

    static async deleteQuery(req, res) {
        try {
            const { id } = req.params;
            const _id = id
            const queryToBeDeleted = await Query.findByIdAndDelete(_id)

            if (!queryToBeDeleted) {
                return res.status(404).json({
                    message: `Query with id: ${id} was not found`
                });
            } else {
                return res.status(200).json({
                    message: "Query deleted successfully",
                });
            }
        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

}


export default queryController;