import RouteModel from "../models/Route.model";
import { NextFunction, Request, Response } from 'express';
import mailValidator from 'email-validator';
import urlValidator from 'valid-url';
import MailService from '../services/Mail.service';
import MailModel from '../models/Mail.model';

export default class RouteController {

    public static getAll(req: Request, res: Response, next: NextFunction): void  {
        RouteModel.findAll()
            .then(result => {
                if (result) {
                    res.status(200).send(result);
                }
                else {
                    res.status(204).send(result);
                }
            })
            .catch(() => {
                res.status(500).send();
            });
    };

    public static createNew(req: Request, res: Response, next: NextFunction): void {
        const newRouteRequest = new RouteModel(req.body.email, req.body.url);
        if (mailValidator.validate(newRouteRequest.email) &&
            (urlValidator.isHttpUri(newRouteRequest.url) || urlValidator.isHttpsUri(newRouteRequest.url))) {
                newRouteRequest.isIdUnique()
                    .then((isIdUnique) => {
                        if (isIdUnique) {
                            newRouteRequest.saveToDB()
                                .then(() => {
                                    RouteController.sendMail(newRouteRequest)
                                        .then((result) => {
                                            if (result) {
                                                res.status(200).send();
                                            }
                                            else {
                                                res.status(500).send()
                                            }
                                        })
                                        .catch(() => res.status(500).send());

                                })
                                .catch(() => {
                                    res.status(500).send();
                                });
                        }
                        else {
                            res.status(405).send();
                        }
                    })
        }
        else {
            res.status(400).send();
        }

    };

    private static sendMail(newRouteRequest: RouteModel): Promise<boolean> {
        const mail = new MailModel(newRouteRequest.email, newRouteRequest.url, newRouteRequest.token);
        return MailService.getInstance().sendMail(mail);

    }
}
