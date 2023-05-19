import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selector = (root: RootState) => root?.auth || initialState;

export const authSelector = createSelector([selector], state => state);
