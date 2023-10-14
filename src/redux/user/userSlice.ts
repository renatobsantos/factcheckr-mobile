import { createSlice } from '@reduxjs/toolkit'
import { User } from '@types'

export interface UserState {
  user: User
}

export const initialUser: User = {
  id: '',
  name: '',
  email: '',
  news: [],
  accessToken: '',
}

const initialState: UserState = {
  user: initialUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
