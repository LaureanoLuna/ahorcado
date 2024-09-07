
import axios from "../Function/axios";

export default function ModalCargaPuntos({ open, puntos }) {
  const postNewPuntaje = async (e) => {
    e.preventDefault();

    let nombre = Array.from(e.target.querySelectorAll("input"))
      .map((input) => input.value.toUpperCase())
      .join("");

    const formData = { puntos: puntos, nombre: nombre };

    try {
      console.log(formData);

      const response = await axios.post("/puntajes", formData);
      console.log("Puntaje enviado con éxito:", response.data);
    } catch (error) {
      console.error("Error al enviar el puntaje:", error.message);
    } finally {
      open(false); // Cierra el modal después de enviar los datos
    }
  };

  if (!open) return null; // No renderiza el modal si no está abierto

  return (
    <div
      style={{
        position: "fixed",
        top: "5%",
        left: "25%",
        width: "50%",
        height: "30%",
        display: "grid",
        justifyContent: "center",
        alignItems: "end",
        background: "#000",
        paddingBottom: "50px",
        borderRadius: "20px",
        boxShadow: "0px 0px 15px #fff",
      }}
    >
      <div>
        <h3>
          Adivinaste: {puntos ?? 5}
          <span style={{ fontStyle: "italic", fontSize: "15px" }}>
            {" "}
            Palabras
          </span>
        </h3>
        <h6>Deja tu marca</h6>
      </div>
      <form style={{ gap: "30px" }} onSubmit={postNewPuntaje}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          {[...Array(3)].map((_, i) => (
            <input
              key={i}
              name={`letra${i + 1}`} // Asigna un nombre único a cada input
              required
              maxLength={1}
              type="text"
              style={{
                fontSize: "2em",
                padding: "10px",
                width: "50px",
                height: "50px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            />
          ))}
        </div>
        <button style={{ width: "100%" }}>Cargar</button>
      </form>
    </div>
  );
}
