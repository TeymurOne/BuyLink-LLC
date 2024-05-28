import { createSlice } from '@reduxjs/toolkit';

interface PartnerSlice {
  title_: any;
  about: string;
  description_: any;
  linkedln: string;
  phone_: string;
  address_: any ;
  website_: any;
  load: boolean;
  facebook_: any;
  instagram: string;
  stateCover: string;
  stateLogo: string;
  email: string;
  whatsapp: string;
  twitter: string;
  youtube_: string;
  lat: any;
  lng: any;
  active:string;
}


const initialState: PartnerSlice = {
  title_: '',
  about: '',
  linkedln: '',
  description_: '',
  phone_: '',
  address_: '',
  website_: '',
  load: false,
  facebook_: '',
  instagram: '',
  stateCover: '',
  stateLogo: '',
  email: '',
  whatsapp: '',
  twitter: '',
  youtube_: '',
  lat: '',
  lng: '',
  active:"az"
};

const PartnerSlice = createSlice({
  name: 'memberSlice',
  initialState,
  reducers: {
    SET_PARTNER_DATA(state, action) {
      const {
        lat,
        lng,
        about,
        description,
        phone,
        address,
        email,
        cover,
        logo,
        facebook_,
        instagram_,
        twitter_,
        youtube,
        linkedln,
        website,
        title,
        active_
      } = action.payload;

      return {
        ...state,
        lat: lat,
        lng: lng,
        about: about,
        title_:title,
        description_: description,
        phone_: phone,
        address_: address,
        email: email,
        stateCover: cover,
        stateLogo: logo,
        facebook_: facebook_,
        instagram: instagram_,
        twitter: twitter_,
        youtube_: youtube,
        linkedln: linkedln,
        website_: website,
        active:active_
      };
    },
  },
});

export const { SET_PARTNER_DATA } = PartnerSlice.actions;
export default PartnerSlice.reducer;
