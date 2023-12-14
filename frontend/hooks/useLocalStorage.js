import { useState } from "react";

const useLocalStorage = (key, inialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key); //sayfa yüklendiğinde localStorage'den key'e sahip item'ı alıyoruz.
        return item ? JSON.parse(item) : inialValue;  //item varsa JSON.parse ile item'ı obje haline getiriyoruz. yoksa initialValue'u döndürüyoruz.
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
} // setValue isimli bir fonksiyon yarattık. bu foksiyon, aldığı değeri state'e set ediyor. Bu değeri, JSSON formatına dönüştürerek key:value şeklinde saklayıp localStorage'a kaydediyoruz.
    
return [storedValue, setValue];  //
}

export default useLocalStorage;