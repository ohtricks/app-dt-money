import { dtMoneyApi } from "@/screens/api/dt-money";
import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";
import { IAuthenticateResponse } from "@/shared/interfaces/http/authenticate-respone";

export const authenticate = async (userData: FormLoginParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyApi.post<IAuthenticateResponse>("/auth/login", userData);

    return data;
}

export const registerUser = async (formData: FormRegisterParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyApi.post<IAuthenticateResponse>("/auth/register", formData);

    return data;
}