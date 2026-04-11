import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "e4c4f3066f2d4aa88020182710e8db2a";

export const fetchLocation = createAsyncThunk(
    "location/fetchLocation",
    async () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    try {
                        const res = await fetch(
                            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`
                        );
                        const data = await res.json();

                        if (data.results.length > 0) {
                            const comp = data.results[0].components;

                            const finalData = [
                                comp.suburb,
                                comp.city,
                                comp.postcode,
                            ];

                            const locationText = finalData.filter(Boolean).join(", ");

                            resolve(locationText);
                        } else {
                            reject("No location found");
                        }
                    } catch (error) {
                        throw error
                    }
                },
                (error) => {
                    throw error
                }
            );
        });
    }
);

const locationSlice = createSlice({
    name: "location",
    initialState: {
        value: "",
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchLocation.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    }

});

export default locationSlice.reducer;
