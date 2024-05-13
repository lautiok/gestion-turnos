import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { MobileDatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { useClients } from "../../context/ClientsContext";
import { useReservas } from "../../context/ReservasContext";
import "./ReservaForm.css";

export const FormularioDeReserva = () => {
  const [select, setSelect] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { clients, getClients } = useClients();
  const { createReservas } = useReservas();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getClients();
    })();
  }, []);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = async (time) => {
    setSelectedTime(time);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await createReservas({
      client: select.value,
      date: selectedDate,
      time: selectedTime,
    });
    navigate("/reservas");
  }

  return (
    <form className="formulario-de-reserva" onSubmit={onSubmit}>
      <Select
        className="select"
        defaultValue={select}
        onChange={setSelect}
        options={clients.map((client) => ({
          value: client._id,
          label: client.name,
        }))}
      />

      <div className="fecha">
        <MobileDatePicker
          label="Fecha"
          value={selectedDate}
          onChange={handleDateChange}
        />
          <MobileTimePicker
          label="Hora"
          value={selectedTime}
          onChange={handleTimeChange}
          ampm={false}
          
        />
        
      </div>
      <button type="submit" className="boton-crear-reserva">
        Añadir Reserva
      </button>
    </form>
  );
};
