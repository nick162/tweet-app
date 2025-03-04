import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/utils/api";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/data/Users", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("Registration successful!");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useRegister;

// const useRegister = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const register = async (payload: Payload) => {
//     setIsLoading(true);
//     try {
//       const { firstName, lastName, email, password } = payload;
//       await axios.post(BASE_URL + "/data/Users", {
//         // firstName: values.firstName,
//         // lastName: values.lastName,
//         // email: values.email,
//         // password: values.password,
//         firstName,
//         lastName,
//         email,
//         password,
//       });
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return { register, isLoading };
// };

// export default useRegister;
