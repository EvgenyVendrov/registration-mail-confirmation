import RouteModel from '../models/Route.model';
import { Request, Response } from 'express';


export default class MailController {

    public static confirm(req: Request, res: Response): void {
        const token = req.params.token;
            RouteModel.findOne(token, false)
                .then((dataResult) => {
                    if (dataResult) {
                        RouteModel.updateToConfirmed(dataResult)
                            .then(() => res.status(200).send())
                            .catch(() => res.status(500).send());
                    }
                    else {
                        RouteModel.findOne(token, true)
                            .then((result) => {
                                if (result) {
                                    res.status(400).send();
                                }
                                else {
                                    res.status(405).send();
                                }
                            })
                            .catch(() => res.status(500).send());
                    }
                })
                .catch(() => {
                    res.status(500).send();
                });
    };
};

