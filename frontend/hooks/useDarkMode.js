import { useState } from "react";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {

    const [mode, setMode] = useLocalStorage("dark mode", initialValue)

    const handleChange = () => {
        setMode((mode) => !mode ); //Önceki mod değerini almak için fonksiyonel güncelleme kullandım. 
    };

    useEffect(() => {
        console.log(mode);
    }, [mode]) //mode değiştiğinde tetiklenmesi için useEfect kullandık, mode her değiştiğinde ekrana yaz dedik.

    return [mode, setMode, handleChange]
}

export default useDarkMode;