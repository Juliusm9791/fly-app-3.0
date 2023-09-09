'use client';
import { createContext } from 'react';

type CsrfTokenAuthProviders = any;
export const CsrfAndProvidersContext =
  createContext<CsrfTokenAuthProviders>(undefined);
