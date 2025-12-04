// Menerima props 'placeholder' agar teks samar bisa diganti-ganti
function Input({ handlerInput, placeholder }) {
    return (
        <input 
            type="text" 
            onChange={handlerInput} 
            placeholder={placeholder} // Pasang placeholder disini
        />
    )
}

export default Input;