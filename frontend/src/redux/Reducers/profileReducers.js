import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataProfilUser: null, // Menyimpan data pendaftaran
  updateDataProfilUser: null,
};

const profileSlicer = createSlice({
  name: "profil",
  initialState,
  reducers: {
    // Mengatur data pendaftaran (hasil dari GET dan POST)
    setProfil: (state, action) => {
      state.dataProfilUser = action.payload;
    },
    setPostUpdateProfile: (state, action) => {
      state.updateDataProfilUser = action.payload;
    },
    
  },
});

// Ekspor actions agar bisa digunakan di komponen atau aksi async (action)
export const { setProfil, setPostUpdateProfile } = profileSlicer.actions;

// Ekspor reducer untuk digunakan di store
export default profileSlicer.reducer;
