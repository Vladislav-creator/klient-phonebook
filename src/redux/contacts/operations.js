import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 //axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:8000';

export const fetchContacts = createAsyncThunk(
  'contacts/FetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContactThunk',
  async ({id, newContactData}, thunkApi) => {
    try {
      const {data} = await axios.patch(`/contacts/${id}`, newContactData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)