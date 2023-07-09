import apiClient from "./api-client";
export interface User {
  id: number;
  name: string;
}
class userService {
    getAllUser() {
    const controller = new AbortController(); // default property of browser
    const request =  apiClient.get<User[]>("/users", {
        signal: controller.signal,
      });

      return {request, cancel : () =>  controller.abort()}
    }
    userDelete(id : number) {
       return apiClient.delete("/users/" + id)
    }
    addUser(user : User) {
      return apiClient.post("/user", user)
    }
    userUpdate(user : User ){
      return apiClient.patch("/user/" + user.id, user)
    }
}

export default new userService;