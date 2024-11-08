import { axiosInstance,getAccessToken } from "./genericOps";
import { CreatedEntity} from "../types/EntityInterfaces";

export const createEntity = async (entityData: CreatedEntity) => {
  try {
    const response = await axiosInstance.post(
      `${import.meta.env.VITE_PUBLIC_API_ENTITIES}`,
      entityData,
      {
        headers: {
          "X-CorrelationID": "6DBA9128-05bb-8F4f-21c9-DcF2105fEBD8",
          "X-Channel": "web",
          "X-API-Key": import.meta.env.VITE_PUBLIC_API_KEY,
          "X-User-Bearer": `Bearer ${await getAccessToken()}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      }
    );
    return response.data as CreatedEntity;
  } catch (error) {
    console.error("Error al crear la entidad:", error);
    throw error;
  }
};