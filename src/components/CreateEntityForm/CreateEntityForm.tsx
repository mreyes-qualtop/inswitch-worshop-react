import React, { useState } from "react";
import useCreateEntity from "../../hooks/useCreateEntity";
import { CreatedEntity,initialFormData } from "../../types/EntityInterfaces";// interface
import "./CreateEntityForm.css";

export default function CreateEntityForm() {
  const { createNewEntity, loading, error, createdEntity } = useCreateEntity();
  const [formData, setFormData] = useState<CreatedEntity>(initialFormData);
  
    /*********Logica de actualizacion de campos.  **************/

  // actualizar a los nuevos valores. 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   // cambia propiedades anidadas en objeto
  const handleNestedChange = (path: string, value: string) => {
    const keys = path.split(".");
    setFormData((prevData) => {
      const updatedData: any = { ...prevData };
      let current = updatedData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };

   // recibe el evento crear, elimina redireccion, envia formdata
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createNewEntity(formData);
  };

  return (
    <div className="create-entity-form">
      <h1>Crear Nueva Entidad</h1>
      <form onSubmit={handleSubmit}>
        <h2>Información de Usuarios</h2>
        {formData?.users.map((user, index) => (
          <div key={index}>
            <div>
              <label>Tipo de Usuario:</label>
              <select
                value={user.usernameType}
                onChange={(e) =>
                  handleNestedChange(`users.${index}.usernameType`, e.target.value)
                }
              >
                <option value="mobile">Mobile</option>
                <option value="email">Email</option>
                <option value="text">Text</option>
              </select>
            </div>
            <div>
              <label>Nombre de Usuario:</label>
              <input
                type="text"
                value={user.username}
                onChange={(e) =>
                  handleNestedChange(`users.${index}.username`, e.target.value)
                }
              />
            </div>
            {user.secrets.map((secret, sIndex) => (
              <div key={sIndex}>
                <label>{`Tipo de Secreto (${sIndex + 1}):`}</label>
                <input
                  type="text"
                  value={secret.secretType}
                  onChange={(e) =>
                    handleNestedChange(
                      `users.${index}.secrets.${sIndex}.secretType`,
                      e.target.value
                    )
                  }
                />
                <label>{`Valor del Secreto (${sIndex + 1}):`}</label>
                <input
                  type="text"
                  value={secret.secretValue}
                  onChange={(e) =>
                    handleNestedChange(
                      `users.${index}.secrets.${sIndex}.secretValue`,
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}

        <h2>Información Personal</h2>
        {formData && Object.keys(formData.name).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              name={`name.${key}`}
              value={(formData.name as any)[key]}
              onChange={(e) => handleNestedChange(`name.${key}`, e.target.value)}
            />
          </div>
        ))}

        <h2>Información de Contacto</h2>
        {Object.keys(formData.contact).map((key) => {
          if (typeof (formData.contact as any)[key] === "object") return null;
          return (
            <div key={key}>
              <label>{key}:</label>
              <input
                type="text"
                name={`contact.${key}`}
                value={(formData.contact as any)[key]}
                onChange={(e) => handleNestedChange(`contact.${key}`, e.target.value)}
              />
            </div>
          );
        })}

        <h3>Dirección Postal</h3>
        {Object.keys(formData.contact.postalAddress).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              name={`contact.postalAddress.${key}`}
              value={(formData.contact.postalAddress as any)[key]}
              onChange={(e) =>
                handleNestedChange(`contact.postalAddress.${key}`, e.target.value)
              }
            />
          </div>
        ))}

        <h2>Otros Datos</h2>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creando..." : "Crear Entidad"}
        </button>
      </form>
      {error && <p className="error">Error al crear la entidad: {error}</p>}
      {createdEntity && (
  <div className="success">
    <p>Entidad creada exitosamente:</p>
    <p>ID: {createdEntity.entityId}</p>
    <p>Nombre: {createdEntity.name.firstName} {createdEntity.name.lastName}</p>
    <p>Correo Electrónico: {createdEntity.contact.email}</p>
        </div>
      )}
    </div>
  );
}