export interface RouteState {
  email: string;
  url: string;
}

export interface MessageState {
  message: string;
}
export interface RoutesSavedLocaly { 
  routes: RouteState[],
  created:number
}

export const BASE_URL = "http://localhost:4000";

