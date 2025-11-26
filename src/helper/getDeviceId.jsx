// utils/getDeviceId.js
import { v4 as uuidv4 } from "uuid";

export const getDeviceId = () => {
    try {
        let device_id = localStorage.getItem("device_id");

        if (!device_id) {
            device_id = uuidv4();
            localStorage.setItem("device_id", device_id);
        }
        return device_id;
    } catch (e) {
        console.error("Error accessing localStorage", e);
        return null;
    }
};
