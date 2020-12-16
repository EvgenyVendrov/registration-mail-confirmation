import axios from "axios";
import {
  BASE_URL,
  RouteState,
  RoutesSavedLocaly,
} from "../models/Routes.model";

export class RoutesApi {
  createRoute(data: RouteState): Promise<string> {
    const { email, url } = data;
    return axios
      .post(`${BASE_URL}/create-route`, {
        email,
        url,
      })
      .then(() => `A CONFIRMATION MAIL WAS SENT TO "${email}".`)
      .catch((err) =>{
        if (err.response) {
        return this.handleError(err.response);
      }
      else {
        return this.handleError(500);
      }
      });
  }

  getRoutes(): Promise<RouteState[]> {
    if (localStorage.getItem("routes")) {
      const localStorageObj = this.getRoutesFromLS();
      const timeOfCreation = localStorageObj.created;
      const currTime = new Date().getTime() / 1000;
      if (currTime - timeOfCreation >= 300) {
        localStorage.clear();
        return this.updateLocalStorge().then(() => {
          return this.getRoutesFromLS().routes;
        });
      } else {
        return new Promise((resolve) => {
          resolve(this.getRoutesFromLS().routes);
        });
      }
    } else {
      return this.updateLocalStorge().then(() => {
        return localStorage.getRoutesFromLS().routes;
      });
    }
  }

  public updateLocalStorge(): Promise<void> {
    return this.httpGetAllRoutes().then((allRoutes) => {
      const dataToSave = {
        routes: allRoutes,
        created: new Date().getTime() / 1000,
      };
      localStorage.clear();
      localStorage.setItem("routes", JSON.stringify(dataToSave));
      return;
    });
  }

  public getRoutesFromLS(): RoutesSavedLocaly {
    return JSON.parse(localStorage.getItem("routes")!) as RoutesSavedLocaly;
  }

  private httpGetAllRoutes(): Promise<RouteState[]> {
    return axios
      .get(`${BASE_URL}/view-all-routes`)
      .then((response) => response.data)
      .catch(() => []);
  }

  private handleError(error: any): string {
    switch (error.status) {
      case 405:
        return "DATA ERROR - THIS ROUTE IS ALREADY IN OUR SYSTEM";
      case 400:
        return "DATA ERROR - PLEASE VALIDATE DATA";
      default:
        return "SERVER ERROR - PLEASE TRY AGAIN LATER";
    }
  }
}
