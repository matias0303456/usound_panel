import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PatientsList from "./pages/patients/PatientsList";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="patients" element={<PatientsList />} />
        </Routes>
    )
}