import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPendaf: null, // Menyimpan data pendaftaran
  dataFormPendaf:null,
};

const pendaftaranSlicer = createSlice({
  name: "pendaftaran",
  initialState,
  reducers: {
    // Mengatur data pendaftaran (hasil dari GET dan POST)
    setPendaf: (state, action) => {
      state.dataPendaf = action.payload;
    },
    setDataFormPendaftaran: (state,action) => {
      state.dataFormPendaf = action.payload;
    }

    
  },
});

// Ekspor actions agar bisa digunakan di komponen atau aksi async (action)
export const { setPendaf,setDataFormPendaftaran } = pendaftaranSlicer.actions;

// Ekspor reducer untuk digunakan di store
export default pendaftaranSlicer.reducer;
