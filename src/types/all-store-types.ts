import { CountryStore } from '../store/country-store';
import {FavoriteStore} from '../store/favorite-store';
import {KeywordStore} from "../store/keyword-store";

export interface AllStore extends CountryStore, FavoriteStore, KeywordStore {}
