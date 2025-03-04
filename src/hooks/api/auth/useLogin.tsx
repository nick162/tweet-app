import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user";
import { toast } from "sonner";

interface Payload {
  login: string;
  password: string;
}

function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post<User>("/users/login", {
        login: payload.login,
        password: payload.password,
      });
      return data;
      // console.log("ini respon dari backendles :", data);
    },
    onSuccess: (data) => {
      dispatch(loginAction(data));
      localStorage.setItem("tweet-storage", JSON.stringify(data));
      toast.success("Login successful");
      router.push("/");
    },

    onError: (error: AxiosError<{ message: string; code: number }>) => {
      console.log(error);
      toast.error(error.response?.data.message);
    },
  });
}

export default useLogin;
