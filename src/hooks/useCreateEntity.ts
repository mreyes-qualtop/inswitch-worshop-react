import { useState } from "react";
import { createEntity } from "../utils/createEntityService";
import { CreatedEntity} from "../types/EntityInterfaces";

export default function useCreateEntity() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [createdEntity, setCreatedEntity] = useState<CreatedEntity | null>(null);

  const createNewEntity = async (entityData: CreatedEntity) => {
    setLoading(true);
    try {
      const response = await createEntity(entityData);
      setCreatedEntity(response);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    createNewEntity,
    loading,
    error,
    createdEntity,
  };
}